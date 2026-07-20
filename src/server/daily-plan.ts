import type { Profile } from "@/generated/prisma/client";
import { AttemptKind, ContentKind, Prisma } from "@/generated/prisma/client";

import type {
  CefrLevel,
  ConjugationCard,
  GrammarExercise,
  ListeningContent,
  ReadingContent,
  TheoryLesson,
  TranslationContent,
  VocabularyCard,
} from "@/content/types";
import { normalizeAnswer } from "@/domain/answer-normalization";
import {
  adaptivePick,
  allowedLevels,
  firstTrySummary,
  localDateInTimeZone,
  previousDate,
  scoreTranslation,
  shuffled,
} from "@/domain/learning";
import { getDb } from "@/lib/db";
import { ApiError } from "@/server/auth";

export interface DayPlanSnapshot {
  mcqIds: string[];
  fillIds: string[];
  grammarIds: string[];
  grammarOptions: Record<string, string[]>;
  readingId: string;
  listeningIds: string[];
  translateFromId: string;
  translateToId: string;
  theoryLessonId: string | null;
  theoryExerciseIds: string[];
  theoryIsReview: boolean;
  vocabIds: string[];
  conjugationIds: string[];
}

export interface DayProgress {
  readingDone: boolean;
  listeningDone: Record<string, boolean>;
  translateFrom: { revealed: boolean; rating: "easy" | "mid" | "hard" | null };
  translateTo: {
    text: string;
    percent: number | null;
    rating: "easy" | "mid" | "hard" | null;
  };
}

type ContentRecord = {
  sourceId: string;
  kind: ContentKind;
  level: CefrLevel | null;
  topic: string | null;
  data: unknown;
};

function jsonObject(value: Prisma.JsonValue): Record<string, unknown> {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};
}

function planFromJson(value: Prisma.JsonValue): DayPlanSnapshot {
  return value as unknown as DayPlanSnapshot;
}

function progressFromJson(value: Prisma.JsonValue): DayProgress {
  return value as unknown as DayProgress;
}

function randomItem<T>(items: T[]): T {
  const item = items[Math.floor(Math.random() * items.length)];
  if (!item)
    throw new ApiError(500, "Для выбранного уровня не хватает контента");
  return item;
}

function contentData<T>(item: ContentRecord): T {
  return item.data as T;
}

function accuracy(
  stats: Map<string, { correct: number; total: number }>,
  key: string,
) {
  const value = stats.get(key);
  return value && value.total > 0 ? value.correct / value.total : 0.5;
}

export async function ensureDailyPlan(profile: Profile, now = new Date()) {
  if (!profile.level || !profile.placementDone) {
    throw new ApiError(409, "Сначала определите уровень");
  }
  const localDate = localDateInTimeZone(now, profile.timezone);
  const db = getDb();
  const existing = await db.dailyPlan.findUnique({
    where: {
      profileId_localDate: {
        profileId: profile.id,
        localDate: new Date(`${localDate}T00:00:00.000Z`),
      },
    },
  });
  if (existing) return existing;

  const [rawContent, attempts, oldPlans] = await Promise.all([
    db.contentItem.findMany({
      where: { active: true },
      orderBy: { position: "asc" },
    }),
    db.dailyAttempt.findMany({
      where: { dailyPlan: { profileId: profile.id } },
      include: { content: { select: { topic: true } } },
      orderBy: { attemptedAt: "desc" },
    }),
    db.dailyPlan.findMany({
      where: { profileId: profile.id },
      select: { plan: true, progress: true },
    }),
  ]);
  const content = rawContent as unknown as ContentRecord[];
  const levels = allowedLevels(profile.level as CefrLevel);
  const byKind = (kind: ContentKind) =>
    content.filter((item) => item.kind === kind);
  const stats = new Map<string, { correct: number; total: number }>();
  const addStat = (key: string, correct: number, total: number) => {
    const value = stats.get(key) ?? { correct: 0, total: 0 };
    value.correct += correct;
    value.total += total;
    stats.set(key, value);
  };
  for (const attempt of attempts) {
    if (attempt.kind === AttemptKind.GRAMMAR && attempt.content.topic) {
      addStat(
        `topic:${attempt.content.topic}`,
        attempt.correctCount,
        attempt.totalCount,
      );
    } else {
      addStat(
        `item:${attempt.contentSourceId}`,
        attempt.correctCount,
        attempt.totalCount,
      );
    }
  }

  const grammarPool = byKind(ContentKind.GRAMMAR)
    .filter((item) => item.level && levels.includes(item.level))
    .map((item) => contentData<GrammarExercise>(item));
  const recentGrammar = new Set(
    attempts
      .filter((item) => item.kind === AttemptKind.GRAMMAR)
      .slice(0, 40)
      .map((item) => item.contentSourceId),
  );
  const pickGrammar = (type: "mcq" | "fill") =>
    adaptivePick(
      grammarPool.filter((item) => item.type === type),
      10,
      recentGrammar,
      (item) => accuracy(stats, `topic:${item.topic}`),
    );
  const mcq = pickGrammar("mcq");
  const fill = pickGrammar("fill");
  const grammar = [...mcq, ...fill];

  const introduced = new Set(
    oldPlans
      .map(({ plan }) => planFromJson(plan).theoryLessonId)
      .filter((id): id is string => Boolean(id)),
  );
  const theoryPool = byKind(ContentKind.THEORY)
    .filter((item) => item.level === profile.level)
    .map((item) => contentData<TheoryLesson>(item));
  const weakTheory = theoryPool
    .filter((lesson) => introduced.has(lesson.id))
    .map((lesson) => {
      const values = lesson.topics
        .map((topic) => stats.get(`topic:${topic}`))
        .filter(Boolean);
      const total = values.reduce((sum, value) => sum + (value?.total ?? 0), 0);
      const correct = values.reduce(
        (sum, value) => sum + (value?.correct ?? 0),
        0,
      );
      return { lesson, accuracy: total ? correct / total : null };
    })
    .filter((item) => item.accuracy !== null && item.accuracy < 0.7)
    .sort((left, right) => (left.accuracy ?? 1) - (right.accuracy ?? 1));
  const theory =
    weakTheory[0]?.lesson ??
    theoryPool.find((item) => !introduced.has(item.id)) ??
    randomItem(theoryPool);
  const theoryExerciseIds = grammarPool
    .filter((item) => theory.topics.includes(item.topic))
    .map((item) => item.id);

  const doneReading = new Set(
    oldPlans
      .filter(({ progress }) => progressFromJson(progress).readingDone)
      .map(({ plan }) => planFromJson(plan).readingId),
  );
  const readingPool = byKind(ContentKind.READING).map((item) =>
    contentData<ReadingContent>(item),
  );
  const levelReading = readingPool.filter(
    (item) => item.level === profile.level,
  );
  const reading = randomItem(
    levelReading.filter((item) => !doneReading.has(item.id)).length
      ? levelReading.filter((item) => !doneReading.has(item.id))
      : levelReading.length
        ? levelReading
        : readingPool,
  );
  const listeningPool = byKind(ContentKind.LISTENING).map((item) =>
    contentData<ListeningContent>(item),
  );
  const listening = shuffled(
    listeningPool.filter((item) => item.level === profile.level),
  ).slice(0, 2);

  const completedFrom = new Set(
    oldPlans
      .filter(
        ({ progress }) => progressFromJson(progress).translateFrom.revealed,
      )
      .map(({ plan }) => planFromJson(plan).translateFromId),
  );
  const completedTo = new Set(
    oldPlans
      .filter(({ progress }) => progressFromJson(progress).translateTo.rating)
      .map(({ plan }) => planFromJson(plan).translateToId),
  );
  const pickTranslation = (kind: ContentKind, done: Set<string>) => {
    const pool = byKind(kind).map((item) =>
      contentData<TranslationContent>(item),
    );
    const levelPool = pool.filter((item) => item.level === profile.level);
    return randomItem(
      levelPool.filter((item) => !done.has(item.id)).length
        ? levelPool.filter((item) => !done.has(item.id))
        : levelPool.length
          ? levelPool
          : pool,
    );
  };
  const translateFrom = pickTranslation(
    ContentKind.TRANSLATE_FROM_ES,
    completedFrom,
  );
  const translateTo = pickTranslation(ContentKind.TRANSLATE_TO_ES, completedTo);

  const vocabPool = byKind(ContentKind.VOCABULARY)
    .filter((item) => item.level && levels.includes(item.level))
    .map((item) => contentData<VocabularyCard>(item));
  const recentVocab = new Set(
    attempts
      .filter((item) => item.kind === AttemptKind.VOCABULARY)
      .slice(0, 30)
      .map((item) => item.contentSourceId),
  );
  const vocab = adaptivePick(vocabPool, 10, recentVocab, (item) =>
    accuracy(stats, `item:${item.id}`),
  );

  const conjugationPool = byKind(ContentKind.CONJUGATION)
    .filter((item) => item.level && levels.includes(item.level))
    .map((item) => contentData<ConjugationCard>(item));
  const recentConjugation = new Set(
    attempts
      .filter((item) => item.kind === AttemptKind.CONJUGATION)
      .slice(0, 15)
      .map((item) => item.contentSourceId),
  );
  const conjugation = adaptivePick(
    conjugationPool,
    20,
    recentConjugation,
    (item) => accuracy(stats, `item:${item.id}`),
  );

  const allGrammar = [
    ...grammar,
    ...grammarPool.filter((item) => theoryExerciseIds.includes(item.id)),
  ];
  const snapshot: DayPlanSnapshot = {
    mcqIds: mcq.map((item) => item.id),
    fillIds: fill.map((item) => item.id),
    grammarIds: grammar.map((item) => item.id),
    grammarOptions: Object.fromEntries(
      allGrammar
        .filter((item) => item.options)
        .map((item) => [item.id, shuffled(item.options ?? [])]),
    ),
    readingId: reading.id,
    listeningIds: listening.map((item) => item.id),
    translateFromId: translateFrom.id,
    translateToId: translateTo.id,
    theoryLessonId: theory.id,
    theoryExerciseIds,
    theoryIsReview: introduced.has(theory.id),
    vocabIds: vocab.map((item) => item.id),
    conjugationIds: conjugation.map((item) => item.id),
  };
  const progress: DayProgress = {
    readingDone: false,
    listeningDone: Object.fromEntries(
      listening.map((item) => [item.id, false]),
    ),
    translateFrom: { revealed: false, rating: null },
    translateTo: { text: "", percent: null, rating: null },
  };

  try {
    return await db.dailyPlan.create({
      data: {
        profileId: profile.id,
        localDate: new Date(`${localDate}T00:00:00.000Z`),
        levelSnapshot: profile.level,
        timezoneSnapshot: profile.timezone,
        plan: snapshot as unknown as Prisma.InputJsonValue,
        progress: progress as unknown as Prisma.InputJsonValue,
      },
    });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return db.dailyPlan.findUniqueOrThrow({
        where: {
          profileId_localDate: {
            profileId: profile.id,
            localDate: new Date(`${localDate}T00:00:00.000Z`),
          },
        },
      });
    }
    throw error;
  }
}

export async function hydrateDay(profile: Profile, now = new Date()) {
  const day = await ensureDailyPlan(profile, now);
  const plan = planFromJson(day.plan);
  const ids = new Set([
    ...plan.grammarIds,
    ...plan.theoryExerciseIds,
    ...plan.vocabIds,
    ...plan.conjugationIds,
    plan.readingId,
    ...plan.listeningIds,
    plan.translateFromId,
    plan.translateToId,
    ...(plan.theoryLessonId ? [plan.theoryLessonId] : []),
  ]);
  const [content, attempts] = await Promise.all([
    getDb().contentItem.findMany({ where: { sourceId: { in: [...ids] } } }),
    getDb().dailyAttempt.findMany({ where: { dailyPlanId: day.id } }),
  ]);
  const displayedScore = day.completedAt
    ? (firstTrySummary(
        attempts.filter((attempt) =>
          plan.grammarIds.includes(attempt.contentSourceId),
        ),
      ).accuracy ?? 0)
    : day.score;
  return {
    profile: {
      id: profile.id,
      name: profile.name,
      level: profile.level,
      streak: profile.streak,
    },
    day: {
      ...day,
      score: displayedScore,
      plan,
      progress: progressFromJson(day.progress),
    },
    content: Object.fromEntries(
      content.map((item) => [item.sourceId, item.data]),
    ),
    attempts: Object.fromEntries(
      attempts.map((item) => [item.contentSourceId, item]),
    ),
  };
}

type DbClient = ReturnType<typeof getDb> | Prisma.TransactionClient;

async function completeDayIfReady(db: DbClient, dayId: string) {
  const day = await db.dailyPlan.findUniqueOrThrow({
    where: { id: dayId },
    include: { attempts: true, profile: true },
  });
  if (day.completedAt) return;
  const plan = planFromJson(day.plan);
  const progress = progressFromJson(day.progress);
  const required = new Set([
    ...plan.grammarIds,
    ...plan.theoryExerciseIds,
    ...plan.vocabIds,
    ...plan.conjugationIds,
  ]);
  const attempted = new Set(day.attempts.map((item) => item.contentSourceId));
  const exercisesDone = [...required].every((id) => attempted.has(id));
  const listeningDone = plan.listeningIds.every(
    (id) => progress.listeningDone[id],
  );
  if (
    !exercisesDone ||
    !progress.readingDone ||
    !listeningDone ||
    !progress.translateFrom.rating ||
    !progress.translateTo.rating
  )
    return;

  const grammarAttempts = day.attempts.filter((attempt) =>
    plan.grammarIds.includes(attempt.contentSourceId),
  );
  const score = firstTrySummary(grammarAttempts).accuracy ?? 0;
  const localDate = day.localDate.toISOString().slice(0, 10);
  const lastDate = day.profile.lastCompletedDate?.toISOString().slice(0, 10);
  const streak =
    lastDate === localDate
      ? day.profile.streak
      : lastDate === previousDate(localDate)
        ? day.profile.streak + 1
        : 1;

  await db.dailyPlan.update({
    where: { id: day.id },
    data: {
      completedAt: new Date(),
      score,
      rating: score >= 90 ? "excellent" : score >= 70 ? "good" : "practice",
    },
  });
  if (!lastDate || lastDate <= localDate) {
    await db.profile.update({
      where: { id: day.profileId },
      data: { streak, lastCompletedDate: day.localDate },
    });
  }
}

async function serializableTransaction<T>(
  work: (tx: Prisma.TransactionClient) => Promise<T>,
) {
  const db = getDb();
  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      return await db.$transaction(work, {
        isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
      });
    } catch (error) {
      const retryable =
        error instanceof Prisma.PrismaClientKnownRequestError &&
        (error.code === "P2002" || error.code === "P2034");
      if (!retryable || attempt === 2) throw error;
    }
  }
  throw new Error("Serializable transaction retry exhausted");
}

export async function submitAttempt(
  profile: Profile,
  input: { dayId: string; sourceId: string; answer: string | string[] },
) {
  return serializableTransaction(async (db) => {
    const day = await db.dailyPlan.findFirst({
      where: { id: input.dayId, profileId: profile.id },
    });
    if (!day) throw new ApiError(404, "Учебный день не найден");
    const plan = planFromJson(day.plan);
    const allowed = new Set([
      ...plan.grammarIds,
      ...plan.theoryExerciseIds,
      ...plan.vocabIds,
      ...plan.conjugationIds,
    ]);
    if (!allowed.has(input.sourceId))
      throw new ApiError(400, "Задание не входит в этот день");
    const existing = await db.dailyAttempt.findUnique({
      where: {
        dailyPlanId_contentSourceId: {
          dailyPlanId: day.id,
          contentSourceId: input.sourceId,
        },
      },
    });
    if (existing) {
      await completeDayIfReady(db, day.id);
      return existing;
    }

    const content = await db.contentItem.findUnique({
      where: { sourceId: input.sourceId },
    });
    if (!content) throw new ApiError(404, "Задание не найдено");
    const data = jsonObject(content.data);
    let kind: AttemptKind;
    let correctCount = 0;
    let totalCount = 1;
    let result: Prisma.InputJsonObject;
    if (content.kind === ContentKind.GRAMMAR) {
      kind = AttemptKind.GRAMMAR;
      const answer = String(input.answer);
      const expected = String(data.answer ?? "");
      const correct = normalizeAnswer(answer) === normalizeAnswer(expected);
      correctCount = correct ? 1 : 0;
      result = { correct, expected, explain: String(data.explain ?? "") };
    } else if (content.kind === ContentKind.VOCABULARY) {
      kind = AttemptKind.VOCABULARY;
      const answer = String(input.answer);
      const accepted = Array.isArray(data.accept)
        ? data.accept.map(String)
        : [String(data.translation ?? "")];
      const correct = accepted.some(
        (value) => normalizeAnswer(value) === normalizeAnswer(answer),
      );
      correctCount = correct ? 1 : 0;
      result = {
        correct,
        expected: String(data.translation ?? ""),
        context: String(data.context ?? ""),
      };
    } else if (content.kind === ContentKind.CONJUGATION) {
      kind = AttemptKind.CONJUGATION;
      const answers = Array.isArray(input.answer) ? input.answer : [];
      const expected = Array.isArray(data.forms) ? data.forms.map(String) : [];
      const mask = expected.map(
        (value, index) =>
          normalizeAnswer(answers[index] ?? "") === normalizeAnswer(value),
      );
      correctCount = mask.filter(Boolean).length;
      totalCount = expected.length;
      result = { correct: mask.every(Boolean), correctMask: mask, expected };
    } else {
      throw new ApiError(
        400,
        "Этот тип контента нельзя проверить как упражнение",
      );
    }

    const attempt = await db.dailyAttempt.create({
      data: {
        dailyPlanId: day.id,
        contentSourceId: input.sourceId,
        kind,
        answer: input.answer as Prisma.InputJsonValue,
        result,
        correctCount,
        totalCount,
        correctFirstTry: correctCount === totalCount,
      },
    });
    await completeDayIfReady(db, day.id);
    return attempt;
  });
}

export async function updateDayActivity(
  profile: Profile,
  input: {
    dayId: string;
    action: string;
    sourceId?: string;
    done?: boolean;
    rating?: string;
    text?: string;
  },
) {
  return serializableTransaction(async (db) => {
    const day = await db.dailyPlan.findFirst({
      where: { id: input.dayId, profileId: profile.id },
    });
    if (!day) throw new ApiError(404, "Учебный день не найден");
    const plan = planFromJson(day.plan);
    const progress = progressFromJson(day.progress);

    if (input.action === "reading-complete") {
      progress.readingDone = true;
    } else if (
      input.action === "listening-set" &&
      input.sourceId &&
      plan.listeningIds.includes(input.sourceId)
    ) {
      progress.listeningDone[input.sourceId] = Boolean(input.done);
    } else if (input.action === "translate-from-reveal") {
      progress.translateFrom.revealed = true;
    } else if (
      input.action === "translate-from-rate" &&
      ["easy", "mid", "hard"].includes(input.rating ?? "")
    ) {
      progress.translateFrom.revealed = true;
      progress.translateFrom.rating = input.rating as "easy" | "mid" | "hard";
    } else if (input.action === "translate-to-check") {
      const item = await db.contentItem.findUnique({
        where: { sourceId: plan.translateToId },
      });
      const data = item ? jsonObject(item.data) : {};
      const scored = scoreTranslation(
        input.text ?? "",
        String(data.reference ?? ""),
      );
      progress.translateTo = {
        text: input.text ?? "",
        percent: scored.percent,
        rating: scored.rating,
      };
    } else {
      throw new ApiError(400, "Неизвестное действие дня");
    }

    await db.dailyPlan.update({
      where: { id: day.id },
      data: { progress: progress as unknown as Prisma.InputJsonValue },
    });
    await completeDayIfReady(db, day.id);
    return progress;
  });
}
