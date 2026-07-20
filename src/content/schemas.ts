import { z } from "zod";

import { CEFR_LEVELS } from "./types";
import { contentTopics } from "./shared/topics";

const nonEmptyText = z
  .string()
  .refine((value) => value.trim().length > 0, "must not be empty");
const contentId = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "must be a stable kebab-case ID");
const revision = z.number().int().positive();

export const cefrLevelSchema = z.enum(CEFR_LEVELS);
export const contentTopicSchema = z.enum(contentTopics);

const baseContentSchema = z.object({
  id: contentId,
  revision,
  level: cefrLevelSchema,
});

const grammarBaseSchema = baseContentSchema.extend({
  topic: contentTopicSchema,
  prompt: nonEmptyText,
  answer: nonEmptyText,
  explain: nonEmptyText,
});

export const grammarExerciseSchema = z.discriminatedUnion("type", [
  grammarBaseSchema.extend({
    type: z.literal("mcq"),
    options: z.array(nonEmptyText).min(2),
  }),
  grammarBaseSchema.extend({
    type: z.literal("fill"),
    options: z.array(nonEmptyText).min(1).optional(),
  }),
]);

export const readingContentSchema = baseContentSchema.extend({
  type: nonEmptyText,
  title: nonEmptyText,
  text: nonEmptyText,
});

export const listeningContentSchema = baseContentSchema.extend({
  title: nonEmptyText,
  channel: nonEmptyText,
  url: z.url(),
});

export const translationContentSchema = baseContentSchema.extend({
  title: nonEmptyText,
  text: nonEmptyText,
  reference: nonEmptyText,
});

export const theoryLessonSchema = baseContentSchema.extend({
  title: nonEmptyText,
  topics: z.array(contentTopicSchema).min(1),
  body: nonEmptyText,
});

export const vocabularyCardSchema = baseContentSchema.extend({
  word: nonEmptyText,
  translation: nonEmptyText,
  accept: z.array(nonEmptyText).min(1),
  context: nonEmptyText,
});

export const conjugationCardSchema = baseContentSchema.extend({
  verb: nonEmptyText,
  verbMeaning: nonEmptyText,
  tense: nonEmptyText,
  tenseLabel: nonEmptyText,
  forms: z.array(nonEmptyText).length(6),
  example: z.object({
    es: nonEmptyText,
    ru: nonEmptyText,
  }),
});

export const placementQuestionSchema = baseContentSchema.extend({
  prompt: nonEmptyText,
  options: z.array(nonEmptyText).min(2),
  answer: nonEmptyText,
});

export const contentCatalogSchema = z.object({
  LEVELS: z.array(cefrLevelSchema).length(CEFR_LEVELS.length),
  LEVEL_NAMES: z.record(cefrLevelSchema, nonEmptyText),
  GRAMMAR: z.array(grammarExerciseSchema),
  READINGS: z.array(readingContentSchema),
  LISTENING: z.array(listeningContentSchema),
  TRANSLATE_FROM_ES: z.array(translationContentSchema),
  TRANSLATE_TO_ES: z.array(translationContentSchema),
  THEORY: z.array(theoryLessonSchema),
  VOCAB: z.array(vocabularyCardSchema),
  CONJUGATIONS: z.array(conjugationCardSchema),
  CONJ_PERSONS: z.array(nonEmptyText).length(6),
  PLACEMENT: z.array(placementQuestionSchema),
});
