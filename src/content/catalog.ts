import { contentCatalogSchema } from "./schemas";
import { conjugationPersons, levelNames, levels } from "./shared/levels";
import { placementQuestions } from "./shared/placement";
import type { CatalogItem, ContentCatalog } from "./types";
import { a1Grammar } from "./levels/a1/grammar";
import { a1Theory } from "./levels/a1/theory";
import { a1Vocabulary } from "./levels/a1/vocabulary";
import { a1Conjugations } from "./levels/a1/conjugations";
import { a1Readings } from "./levels/a1/readings";
import { a1Listening } from "./levels/a1/listening";
import {
  a1TranslationsFromEs,
  a1TranslationsToEs,
} from "./levels/a1/translations";
import { a2Grammar } from "./levels/a2/grammar";
import { a2Theory } from "./levels/a2/theory";
import { a2Vocabulary } from "./levels/a2/vocabulary";
import { a2Conjugations } from "./levels/a2/conjugations";
import { a2Readings } from "./levels/a2/readings";
import { a2Listening } from "./levels/a2/listening";
import {
  a2TranslationsFromEs,
  a2TranslationsToEs,
} from "./levels/a2/translations";
import { b1Grammar } from "./levels/b1/grammar";
import { b1Theory } from "./levels/b1/theory";
import { b1Vocabulary } from "./levels/b1/vocabulary";
import { b1Conjugations } from "./levels/b1/conjugations";
import { b1Readings } from "./levels/b1/readings";
import { b1Listening } from "./levels/b1/listening";
import {
  b1TranslationsFromEs,
  b1TranslationsToEs,
} from "./levels/b1/translations";
import { b2Grammar } from "./levels/b2/grammar";
import { b2Theory } from "./levels/b2/theory";
import { b2Vocabulary } from "./levels/b2/vocabulary";
import { b2Conjugations } from "./levels/b2/conjugations";
import { b2Readings } from "./levels/b2/readings";
import { b2Listening } from "./levels/b2/listening";
import {
  b2TranslationsFromEs,
  b2TranslationsToEs,
} from "./levels/b2/translations";
import { c1Grammar } from "./levels/c1/grammar";
import { c1Theory } from "./levels/c1/theory";
import { c1Vocabulary } from "./levels/c1/vocabulary";
import { c1Conjugations } from "./levels/c1/conjugations";
import { c1Readings } from "./levels/c1/readings";
import { c1Listening } from "./levels/c1/listening";
import {
  c1TranslationsFromEs,
  c1TranslationsToEs,
} from "./levels/c1/translations";

const rawCatalog = {
  LEVELS: levels,
  LEVEL_NAMES: levelNames,
  // Preserve legacy positions while the source modules remain level-oriented.
  GRAMMAR: [
    ...a1Grammar.slice(0, 12),
    ...a2Grammar.slice(0, 12),
    ...b1Grammar.slice(0, 14),
    ...b2Grammar.slice(0, 14),
    ...c1Grammar.slice(0, 12),
    ...a1Grammar.slice(12, 20),
    ...a2Grammar.slice(12, 20),
    ...b1Grammar.slice(14, 20),
    ...b2Grammar.slice(14, 20),
    ...c1Grammar.slice(12, 22),
  ],
  READINGS: [
    ...a1Readings,
    ...a2Readings,
    ...b1Readings,
    ...b2Readings,
    ...c1Readings,
  ],
  LISTENING: [
    ...a1Listening,
    ...a2Listening,
    ...b1Listening,
    ...b2Listening,
    ...c1Listening,
  ],
  TRANSLATE_FROM_ES: [
    ...a1TranslationsFromEs,
    ...a2TranslationsFromEs,
    ...b1TranslationsFromEs,
    ...b2TranslationsFromEs,
    ...c1TranslationsFromEs,
  ],
  TRANSLATE_TO_ES: [
    ...a1TranslationsToEs,
    ...a2TranslationsToEs,
    ...b1TranslationsToEs,
    ...b2TranslationsToEs,
    ...c1TranslationsToEs,
  ],
  THEORY: [...a1Theory, ...a2Theory, ...b1Theory, ...b2Theory, ...c1Theory],
  VOCAB: [
    ...a1Vocabulary,
    ...a2Vocabulary,
    ...b1Vocabulary,
    ...b2Vocabulary,
    ...c1Vocabulary,
  ],
  CONJUGATIONS: [
    ...a1Conjugations,
    ...a2Conjugations,
    ...b1Conjugations,
    ...b2Conjugations,
    ...c1Conjugations,
  ],
  CONJ_PERSONS: conjugationPersons,
  PLACEMENT: placementQuestions,
} satisfies ContentCatalog;

export const contentCatalog: ContentCatalog =
  contentCatalogSchema.parse(rawCatalog);

export const catalogItems: CatalogItem[] = [
  ...contentCatalog.GRAMMAR.map((data, position) => ({
    sourceId: data.id,
    kind: "GRAMMAR" as const,
    level: data.level,
    topic: data.topic,
    position,
    data,
  })),
  ...contentCatalog.READINGS.map((data, position) => ({
    sourceId: data.id,
    kind: "READING" as const,
    level: data.level,
    topic: null,
    position,
    data,
  })),
  ...contentCatalog.LISTENING.map((data, position) => ({
    sourceId: data.id,
    kind: "LISTENING" as const,
    level: data.level,
    topic: null,
    position,
    data,
  })),
  ...contentCatalog.TRANSLATE_FROM_ES.map((data, position) => ({
    sourceId: data.id,
    kind: "TRANSLATE_FROM_ES" as const,
    level: data.level,
    topic: null,
    position,
    data,
  })),
  ...contentCatalog.TRANSLATE_TO_ES.map((data, position) => ({
    sourceId: data.id,
    kind: "TRANSLATE_TO_ES" as const,
    level: data.level,
    topic: null,
    position,
    data,
  })),
  ...contentCatalog.THEORY.map((data, position) => ({
    sourceId: data.id,
    kind: "THEORY" as const,
    level: data.level,
    topic: data.topics[0] ?? null,
    position,
    data,
  })),
  ...contentCatalog.VOCAB.map((data, position) => ({
    sourceId: data.id,
    kind: "VOCABULARY" as const,
    level: data.level,
    topic: null,
    position,
    data,
  })),
  ...contentCatalog.CONJUGATIONS.map((data, position) => ({
    sourceId: data.id,
    kind: "CONJUGATION" as const,
    level: data.level,
    topic: null,
    position,
    data,
  })),
  ...contentCatalog.PLACEMENT.map((data, position) => ({
    sourceId: data.id,
    kind: "PLACEMENT" as const,
    level: data.level,
    topic: null,
    position,
    data,
  })),
];
