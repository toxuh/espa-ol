import type { GrammarExercise, TheoryLesson } from "@/content/types";
import { firstTrySummary } from "@/domain/learning";
import { getDb } from "@/lib/db";
import { apiErrorResponse, requireProfile } from "@/server/auth";
import type { DayPlanSnapshot, DayProgress } from "@/server/daily-plan";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const profile = await requireProfile(request);
    const days = await getDb().dailyPlan.findMany({
      where: { profileId: profile.id },
      orderBy: { localDate: "desc" },
      include: {
        attempts: {
          include: { content: { select: { topic: true, data: true } } },
        },
      },
    });
    const lessonIds = days
      .map((day) => (day.plan as unknown as DayPlanSnapshot).theoryLessonId)
      .filter((id): id is string => Boolean(id));
    const lessons = await getDb().contentItem.findMany({
      where: { sourceId: { in: lessonIds } },
      select: { sourceId: true, data: true },
    });
    const lessonById = new Map(
      lessons.map((lesson) => [
        lesson.sourceId,
        lesson.data as unknown as TheoryLesson,
      ]),
    );
    const summaries = days.map((day) => {
      const plan = day.plan as unknown as DayPlanSnapshot;
      const progress = day.progress as unknown as DayProgress;
      const attempts = new Map(
        day.attempts.map((attempt) => [attempt.contentSourceId, attempt]),
      );
      const category = (ids: string[]) => {
        const unique = [...new Set(ids)];
        const done = unique.flatMap((id) => {
          const attempt = attempts.get(id);
          return attempt ? [attempt] : [];
        });
        const summary = firstTrySummary(done);
        return {
          done: done.length,
          correct: summary.correct,
          total: unique.length,
          accuracy: summary.accuracy,
        };
      };
      const topics = new Map<
        string,
        { correct: number; total: number; explain: string }
      >();
      for (const id of plan.grammarIds) {
        const attempt = attempts.get(id);
        if (!attempt || !attempt.content.topic) continue;
        const exercise = attempt.content.data as unknown as GrammarExercise;
        const value = topics.get(attempt.content.topic) ?? {
          correct: 0,
          total: 0,
          explain: exercise.explain,
        };
        value.total += 1;
        value.correct += Number(attempt.correctFirstTry);
        if (!attempt.correctFirstTry) value.explain = exercise.explain;
        topics.set(attempt.content.topic, value);
      }
      return {
        id: day.id,
        localDate: day.localDate.toISOString().slice(0, 10),
        levelSnapshot: day.levelSnapshot,
        completedAt: day.completedAt,
        solvedExercises: day.attempts.length,
        grammar: category(plan.grammarIds),
        theory: {
          ...category(plan.theoryExerciseIds),
          title: plan.theoryLessonId
            ? (lessonById.get(plan.theoryLessonId)?.title ?? null)
            : null,
        },
        vocabulary: category(plan.vocabIds),
        conjugation: category(plan.conjugationIds),
        readingDone: progress.readingDone,
        listening: {
          done: plan.listeningIds.filter((id) => progress.listeningDone[id])
            .length,
          total: plan.listeningIds.length,
        },
        translateFromRating: progress.translateFrom.rating,
        translateToPercent: progress.translateTo.percent,
        topics: [...topics].map(([topic, value]) => ({ topic, ...value })),
      };
    });
    return Response.json({ days: summaries });
  } catch (error) {
    return apiErrorResponse(error);
  }
}
