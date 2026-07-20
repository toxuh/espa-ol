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

const contentExampleSchema = z.object({
  es: nonEmptyText,
  ru: nonEmptyText,
});
const contentQuestionSchema = z.object({
  prompt: nonEmptyText,
  answer: nonEmptyText,
  explanation: nonEmptyText.optional(),
});
const theorySectionSchema = z.object({
  title: nonEmptyText,
  paragraphs: z.array(nonEmptyText).min(1),
  table: z
    .object({
      headers: z.array(nonEmptyText).min(2),
      rows: z.array(z.array(nonEmptyText).min(2)).min(1),
    })
    .optional(),
});
const glossaryEntrySchema = z.object({
  term: nonEmptyText,
  translation: nonEmptyText,
});
const keyConstructionSchema = z.object({
  source: nonEmptyText,
  target: nonEmptyText,
  note: nonEmptyText.optional(),
});

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
  acceptedAnswers: z.array(nonEmptyText).min(1).optional(),
  lessonIds: z.array(contentId).min(1).optional(),
  hint: nonEmptyText.optional(),
  explain: nonEmptyText,
  solvedExample: nonEmptyText.optional(),
  examples: z.array(contentExampleSchema).min(1).optional(),
  commonMistakes: z.array(nonEmptyText).min(1).optional(),
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
  instructions: nonEmptyText.optional(),
  glossary: z.array(glossaryEntrySchema).min(1).optional(),
  questions: z.array(contentQuestionSchema).min(1).optional(),
  notes: z.array(nonEmptyText).min(1).optional(),
});

export const listeningContentSchema = baseContentSchema.extend({
  title: nonEmptyText,
  channel: nonEmptyText,
  url: z.url(),
  durationMinutes: z.number().positive().optional(),
  dialect: nonEmptyText.optional(),
  speed: nonEmptyText.optional(),
  instructions: nonEmptyText.optional(),
  questions: z.array(contentQuestionSchema).min(1).optional(),
  summary: nonEmptyText.optional(),
  lastVerifiedAt: z.iso.date().optional(),
});

export const translationContentSchema = baseContentSchema.extend({
  title: nonEmptyText,
  text: nonEmptyText,
  reference: nonEmptyText,
  alternativeReferences: z.array(nonEmptyText).min(1).optional(),
  keyConstructions: z.array(keyConstructionSchema).min(1).optional(),
  notes: z.array(nonEmptyText).min(1).optional(),
  acceptedKeywords: z.array(nonEmptyText).min(1).optional(),
});

export const theoryLessonSchema = baseContentSchema.extend({
  title: nonEmptyText,
  topics: z.array(contentTopicSchema).min(1),
  body: nonEmptyText,
  objectives: z.array(nonEmptyText).min(1).optional(),
  sections: z.array(theorySectionSchema).min(1).optional(),
  summary: z.array(nonEmptyText).min(1).optional(),
  examples: z.array(contentExampleSchema).min(1).optional(),
  commonMistakes: z.array(nonEmptyText).min(1).optional(),
  exerciseIds: z.array(contentId).min(1).optional(),
});

export const vocabularyCardSchema = baseContentSchema.extend({
  word: nonEmptyText,
  translation: nonEmptyText,
  accept: z.array(nonEmptyText).min(1),
  context: nonEmptyText,
  contextTarget: nonEmptyText,
  partOfSpeech: nonEmptyText.optional(),
  gender: nonEmptyText.optional(),
  forms: z.array(nonEmptyText).min(1).optional(),
  contextTranslation: nonEmptyText.optional(),
  collocations: z.array(nonEmptyText).min(1).optional(),
  usageNote: nonEmptyText.optional(),
  register: nonEmptyText.optional(),
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
  formationRule: nonEmptyText.optional(),
  irregularity: nonEmptyText.optional(),
  markers: z.array(nonEmptyText).min(1).optional(),
  examples: z.array(contentExampleSchema).min(1).optional(),
  commonMistakes: z.array(nonEmptyText).min(1).optional(),
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
