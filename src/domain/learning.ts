import { CEFR_LEVELS, type CefrLevel } from "@/content/types";
import { normalizeAnswer } from "@/domain/answer-normalization";

export type TranslationRating = "easy" | "mid" | "hard";

export function firstTrySummary(
  attempts: readonly { correctFirstTry: boolean }[],
) {
  const total = attempts.length;
  const correct = attempts.filter((attempt) => attempt.correctFirstTry).length;
  return {
    correct,
    total,
    accuracy: total ? Math.round((correct / total) * 100) : null,
  };
}

export function levelFromPlacementScore(score: number): CefrLevel {
  if (score <= 3) return "A1";
  if (score <= 6) return "A2";
  if (score <= 9) return "B1";
  if (score <= 12) return "B2";
  return "C1";
}

export function allowedLevels(level: CefrLevel): CefrLevel[] {
  const index = CEFR_LEVELS.indexOf(level);
  return CEFR_LEVELS.filter((_, itemIndex) => Math.abs(itemIndex - index) <= 1);
}

export function localDateInTimeZone(date: Date, timeZone: string): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const value = Object.fromEntries(
    parts.map((part) => [part.type, part.value]),
  );
  return `${value.year}-${value.month}-${value.day}`;
}

export function previousDate(date: string): string {
  const value = new Date(`${date}T00:00:00.000Z`);
  value.setUTCDate(value.getUTCDate() - 1);
  return value.toISOString().slice(0, 10);
}

function significantWords(value: string): Set<string> {
  return new Set(
    normalizeAnswer(value)
      .split(/\s+/)
      .filter((word) => word.length > 2),
  );
}

export function scoreTranslation(userText: string, referenceText: string) {
  const reference = significantWords(referenceText);
  const answer = significantWords(userText);
  const matched = [...reference].filter((word) => answer.has(word)).length;
  const total = reference.size || 1;
  const percent = Math.round((matched / total) * 100);
  const rating: TranslationRating =
    percent >= 65 ? "easy" : percent >= 40 ? "mid" : "hard";
  return { matched, total, percent, rating };
}

export function shuffled<T>(items: readonly T[]): T[] {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

export function adaptivePick<T extends { id: string }>(
  pool: T[],
  count: number,
  recentIds: Set<string>,
  accuracy: (item: T) => number,
): T[] {
  let candidates = pool.filter((item) => !recentIds.has(item.id));
  if (candidates.length < count) candidates = pool;
  return candidates
    .map((item) => ({ item, score: 1 - accuracy(item) + Math.random() * 0.5 }))
    .sort((left, right) => right.score - left.score)
    .slice(0, count)
    .map(({ item }) => item);
}
