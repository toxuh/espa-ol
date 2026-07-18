import { AttemptKind } from "@/generated/prisma/client";

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
        include: { content: { select: { topic: true, data: true } } },
      }),
      getDb().dailyPlan.findMany({
        where: { profileId: profile.id },
        select: { completedAt: true },
      }),
    ]);
    const categories = Object.fromEntries(
      Object.values(AttemptKind).map((kind) => {
        const selected = attempts.filter((item) => item.kind === kind);
        const total = selected.reduce((sum, item) => sum + item.totalCount, 0);
        const correct = selected.reduce(
          (sum, item) => sum + item.correctCount,
          0,
        );
        return [
          kind,
          {
            attempts: selected.length,
            correct,
            total,
            accuracy: total ? Math.round((correct / total) * 100) : null,
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
      value.correct += attempt.correctCount;
      value.total += attempt.totalCount;
      topics.set(topic, value);
    }
    return Response.json({
      profile: {
        joinedAt: profile.joinedAt,
        streak: profile.streak,
        level: profile.level,
      },
      days: {
        started: days.length,
        completed: days.filter((day) => day.completedAt).length,
      },
      categories,
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
