import { AttemptKind } from "@/generated/prisma/client";

import { firstTrySummary } from "@/domain/learning";
import { getDb } from "@/lib/db";
import { apiErrorResponse, requireProfile } from "@/server/auth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const profile = await requireProfile(request);
    const [attempts, days] = await Promise.all([
      getDb().dailyAttempt.findMany({
        where: { dailyPlan: { profileId: profile.id } },
        include: {
          content: { select: { sourceId: true, topic: true, data: true } },
        },
      }),
      getDb().dailyPlan.findMany({
        where: { profileId: profile.id },
        select: { localDate: true, completedAt: true },
      }),
    ]);
    const categories = Object.fromEntries(
      Object.values(AttemptKind).map((kind) => {
        const selected = attempts.filter((item) => item.kind === kind);
        const summary = firstTrySummary(selected);
        return [
          kind,
          {
            attempts: selected.length,
            ...summary,
          },
        ];
      }),
    );
    const topics = new Map<string, { correct: number; total: number }>();
    for (const attempt of attempts.filter(
      (item) => item.kind === AttemptKind.GRAMMAR && item.content.topic,
    )) {
      const topic = attempt.content.topic as string;
      const value = topics.get(topic) ?? { correct: 0, total: 0 };
      value.correct += Number(attempt.correctFirstTry);
      value.total += 1;
      topics.set(topic, value);
    }
    const itemMastery = (kind: AttemptKind) => {
      const grouped = new Map<
        string,
        { correct: number; total: number; label: string }
      >();
      for (const attempt of attempts.filter((item) => item.kind === kind)) {
        const data = attempt.content.data as Record<string, unknown>;
        const label =
          kind === AttemptKind.VOCABULARY
            ? String(data.word ?? attempt.contentSourceId)
            : `${String(data.verb ?? attempt.contentSourceId)} — ${String(data.tenseLabel ?? "")}`;
        const value = grouped.get(attempt.contentSourceId) ?? {
          correct: 0,
          total: 0,
          label,
        };
        value.total += 1;
        value.correct += Number(attempt.correctFirstTry);
        grouped.set(attempt.contentSourceId, value);
      }
      return [...grouped].map(([id, value]) => ({
        id,
        ...value,
        accuracy: Math.round((value.correct / value.total) * 100),
      }));
    };
    return Response.json({
      profile: {
        joinedAt: profile.joinedAt,
        streak: profile.streak,
        level: profile.level,
      },
      days: {
        started: days.length,
        completed: days.filter((day) => day.completedAt).length,
        activity: days.map((day) => ({
          localDate: day.localDate.toISOString().slice(0, 10),
          completedAt: day.completedAt,
        })),
      },
      categories,
      vocabulary: itemMastery(AttemptKind.VOCABULARY),
      conjugation: itemMastery(AttemptKind.CONJUGATION),
      topics: [...topics]
        .map(([topic, value]) => ({
          topic,
          ...value,
          accuracy: Math.round((value.correct / value.total) * 100),
        }))
        .sort((a, b) => a.accuracy - b.accuracy),
    });
  } catch (error) {
    return apiErrorResponse(error);
  }
}
