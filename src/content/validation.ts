import { createHash } from "node:crypto";

import { normalizeAnswer } from "@/domain/answer-normalization";

import type {
  CatalogContentKind,
  CatalogItem,
  CefrLevel,
  ConjugationCard,
  ContentData,
  GrammarExercise,
  ListeningContent,
  PlacementQuestion,
  ReadingContent,
  TheoryLesson,
  TranslationContent,
  VocabularyCard,
} from "./types";

export interface ContentManifestEntry {
  revision: number;
  digest: string;
}

export interface ContentManifest {
  version: 1;
  entries: Record<string, ContentManifestEntry>;
}

const completeTemplateLevels = new Set<CefrLevel>(["A1", "A2", "B1", "B2"]);

export const baselineMinimums: Record<
  CefrLevel,
  Record<CatalogContentKind, number>
> = {
  A1: {
    GRAMMAR: 20,
    READING: 3,
    LISTENING: 2,
    TRANSLATE_FROM_ES: 2,
    TRANSLATE_TO_ES: 2,
    THEORY: 6,
    VOCABULARY: 14,
    CONJUGATION: 6,
    PLACEMENT: 3,
  },
  A2: {
    GRAMMAR: 20,
    READING: 3,
    LISTENING: 2,
    TRANSLATE_FROM_ES: 2,
    TRANSLATE_TO_ES: 2,
    THEORY: 6,
    VOCABULARY: 14,
    CONJUGATION: 6,
    PLACEMENT: 3,
  },
  B1: {
    GRAMMAR: 20,
    READING: 3,
    LISTENING: 2,
    TRANSLATE_FROM_ES: 2,
    TRANSLATE_TO_ES: 2,
    THEORY: 6,
    VOCABULARY: 14,
    CONJUGATION: 6,
    PLACEMENT: 3,
  },
  B2: {
    GRAMMAR: 20,
    READING: 3,
    LISTENING: 2,
    TRANSLATE_FROM_ES: 2,
    TRANSLATE_TO_ES: 2,
    THEORY: 6,
    VOCABULARY: 14,
    CONJUGATION: 6,
    PLACEMENT: 3,
  },
  C1: {
    GRAMMAR: 22,
    READING: 3,
    LISTENING: 2,
    TRANSLATE_FROM_ES: 2,
    TRANSLATE_TO_ES: 2,
    THEORY: 6,
    VOCABULARY: 14,
    CONJUGATION: 6,
    PLACEMENT: 3,
  },
};

const protectedFields: Record<
  CatalogContentKind,
  (data: ContentData) => unknown
> = {
  GRAMMAR: (data) => {
    const item = data as Extract<
      ContentData,
      { topic: string; prompt: string }
    >;
    const canonicalAnswer = normalizeSemanticText(String(item.answer));
    const acceptedAnswers =
      "acceptedAnswers" in item && Array.isArray(item.acceptedAnswers)
        ? [
            ...new Set(
              item.acceptedAnswers
                .map(normalizeSemanticText)
                .filter((answer) => answer !== canonicalAnswer),
            ),
          ].sort()
        : [];
    return {
      level: item.level,
      topic: item.topic,
      type: "type" in item ? item.type : null,
      prompt: "prompt" in item ? normalizeSemanticText(item.prompt) : null,
      answer: "answer" in item ? canonicalAnswer : null,
      ...(acceptedAnswers.length ? { acceptedAnswers } : {}),
      options:
        "options" in item && Array.isArray(item.options)
          ? item.options.map(normalizeSemanticText)
          : null,
    };
  },
  READING: (data) => {
    const item = data as Extract<ContentData, { text: string; title: string }>;
    return {
      level: item.level,
      title: normalizeSemanticText(item.title),
      text: normalizeSemanticText(item.text),
    };
  },
  LISTENING: (data) => {
    const item = data as Extract<ContentData, { url: string }>;
    return { level: item.level, url: item.url };
  },
  TRANSLATE_FROM_ES: translationProtectedFields,
  TRANSLATE_TO_ES: translationProtectedFields,
  THEORY: (data) => {
    const item = data as Extract<ContentData, { topics: string[] }>;
    return { level: item.level, topics: item.topics };
  },
  VOCABULARY: (data) => {
    const item = data as Extract<
      ContentData,
      { word: string; context: string }
    >;
    return {
      level: item.level,
      word: normalizeSemanticText(item.word),
      translation:
        "translation" in item
          ? normalizeSemanticText(String(item.translation))
          : null,
      context: normalizeSemanticText(item.context),
    };
  },
  CONJUGATION: (data) => {
    const item = data as Extract<
      ContentData,
      { forms: string[]; verb: string }
    >;
    return {
      level: item.level,
      verb: normalizeSemanticText(item.verb),
      tense: "tense" in item ? item.tense : null,
      forms: item.forms.map(normalizeSemanticText),
    };
  },
  PLACEMENT: (data) => {
    const item = data as Extract<
      ContentData,
      { prompt: string; answer: string }
    >;
    return {
      level: item.level,
      prompt: normalizeSemanticText(item.prompt),
      answer: normalizeSemanticText(item.answer),
      options:
        "options" in item && Array.isArray(item.options)
          ? item.options.map(normalizeSemanticText)
          : null,
    };
  },
};

function translationProtectedFields(data: ContentData) {
  const item = data as Extract<
    ContentData,
    { text: string; reference: string }
  >;
  return {
    level: item.level,
    text: normalizeSemanticText(item.text),
    reference: normalizeSemanticText(item.reference),
  };
}

function normalizeSemanticText(value: string) {
  return normalizeAnswer(value)
    .replace(/\p{P}+/gu, "")
    .replace(/\s+/g, " ");
}

function digest(value: unknown) {
  return createHash("sha256").update(JSON.stringify(value)).digest("hex");
}

export function createContentManifest(items: CatalogItem[]): ContentManifest {
  return {
    version: 1,
    entries: Object.fromEntries(
      items.map((item) => [
        item.sourceId,
        {
          revision: item.data.revision,
          digest: digest(protectedFields[item.kind](item.data)),
        },
      ]),
    ),
  };
}

export function validateCatalog(
  items: CatalogItem[],
  manifest?: ContentManifest,
) {
  const errors: string[] = [];
  const ids = new Set<string>();

  for (const item of items) {
    if (ids.has(item.sourceId)) errors.push(`Duplicate ID: ${item.sourceId}`);
    ids.add(item.sourceId);

    if (item.kind === "GRAMMAR") {
      const exercise = item.data as Extract<
        ContentData,
        { type: "mcq" | "fill" }
      >;
      if (
        exercise.type === "mcq" &&
        !exercise.options?.some(
          (option) =>
            normalizeAnswer(option) === normalizeAnswer(exercise.answer),
        )
      ) {
        errors.push(`${item.sourceId}: MCQ answer is not present in options`);
      }
      if (
        "lessonIds" in exercise &&
        Array.isArray(exercise.lessonIds) &&
        exercise.lessonIds.length === 0
      ) {
        errors.push(`${item.sourceId}: exercise has no theory lesson link`);
      }
      if (
        (exercise.prompt.match(/___/g)?.length ?? 0) > 1 &&
        !("solvedExample" in exercise && exercise.solvedExample)
      ) {
        errors.push(
          `${item.sourceId}: multi-blank exercise has no solvedExample`,
        );
      }
      if (completeTemplateLevels.has(item.level)) {
        requireArrayLength(
          item.sourceId,
          exercise.acceptedAnswers,
          "acceptedAnswers",
          1,
          errors,
        );
        requireArrayLength(
          item.sourceId,
          exercise.lessonIds,
          "lessonIds",
          1,
          errors,
        );
        requireText(item.sourceId, exercise.hint, "hint", errors);
        requireArrayLength(
          item.sourceId,
          exercise.examples,
          "examples",
          2,
          errors,
        );
        requireArrayLength(
          item.sourceId,
          exercise.commonMistakes,
          "commonMistakes",
          1,
          errors,
        );
      }
    }

    if (item.kind === "PLACEMENT") {
      const question = item.data as PlacementQuestion;
      if (
        !question.options.some(
          (option) =>
            normalizeAnswer(option) === normalizeAnswer(question.answer),
        )
      ) {
        errors.push(
          `${item.sourceId}: placement answer is not present in options`,
        );
      }
    }

    if (item.kind === "VOCABULARY") {
      const card = item.data as VocabularyCard;
      if (!card.context.includes(card.contextTarget)) {
        errors.push(`${item.sourceId}: contextTarget is absent from context`);
      }
      if (completeTemplateLevels.has(item.level)) {
        requireText(item.sourceId, card.partOfSpeech, "partOfSpeech", errors);
        requireArrayLength(item.sourceId, card.forms, "forms", 1, errors);
        requireText(
          item.sourceId,
          card.contextTranslation,
          "contextTranslation",
          errors,
        );
        requireArrayLength(
          item.sourceId,
          card.collocations,
          "collocations",
          2,
          errors,
        );
        requireText(item.sourceId, card.usageNote, "usageNote", errors);
        requireText(item.sourceId, card.register, "register", errors);
      }
    }

    if (item.kind === "LISTENING") {
      const listening = item.data as ListeningContent;
      try {
        const url = new URL(listening.url);
        if (!["http:", "https:"].includes(url.protocol)) throw new Error();
      } catch {
        errors.push(`${item.sourceId}: listening URL is invalid`);
      }
      if (completeTemplateLevels.has(item.level)) {
        if (!listening.durationMinutes) {
          errors.push(
            `${item.sourceId}: missing reference-template field durationMinutes`,
          );
        }
        requireText(item.sourceId, listening.dialect, "dialect", errors);
        requireText(item.sourceId, listening.speed, "speed", errors);
        requireText(
          item.sourceId,
          listening.instructions,
          "instructions",
          errors,
        );
        requireArrayLength(
          item.sourceId,
          listening.questions,
          "questions",
          3,
          errors,
        );
        requireText(item.sourceId, listening.summary, "summary", errors);
        requireText(
          item.sourceId,
          listening.lastVerifiedAt,
          "lastVerifiedAt",
          errors,
        );
      }
    }

    if (item.kind === "READING" && completeTemplateLevels.has(item.level)) {
      const reading = item.data as ReadingContent;
      requireText(item.sourceId, reading.instructions, "instructions", errors);
      requireArrayLength(
        item.sourceId,
        reading.glossary,
        "glossary",
        4,
        errors,
      );
      requireArrayLength(
        item.sourceId,
        reading.questions,
        "questions",
        3,
        errors,
      );
      requireArrayLength(item.sourceId, reading.notes, "notes", 1, errors);
    }

    if (
      (item.kind === "TRANSLATE_FROM_ES" || item.kind === "TRANSLATE_TO_ES") &&
      completeTemplateLevels.has(item.level)
    ) {
      const translation = item.data as TranslationContent;
      requireArrayLength(
        item.sourceId,
        translation.alternativeReferences,
        "alternativeReferences",
        1,
        errors,
      );
      requireArrayLength(
        item.sourceId,
        translation.keyConstructions,
        "keyConstructions",
        2,
        errors,
      );
      requireArrayLength(item.sourceId, translation.notes, "notes", 1, errors);
      if (item.kind === "TRANSLATE_TO_ES") {
        requireArrayLength(
          item.sourceId,
          translation.acceptedKeywords,
          "acceptedKeywords",
          4,
          errors,
        );
      }
    }

    if (item.kind === "THEORY" && completeTemplateLevels.has(item.level)) {
      const lesson = item.data as TheoryLesson;
      requireArrayLength(
        item.sourceId,
        lesson.objectives,
        "objectives",
        1,
        errors,
      );
      requireArrayLength(item.sourceId, lesson.sections, "sections", 3, errors);
      requireArrayLength(item.sourceId, lesson.summary, "summary", 1, errors);
      requireArrayLength(item.sourceId, lesson.examples, "examples", 4, errors);
      requireArrayLength(
        item.sourceId,
        lesson.commonMistakes,
        "commonMistakes",
        1,
        errors,
      );
      requireArrayLength(
        item.sourceId,
        lesson.exerciseIds,
        "exerciseIds",
        1,
        errors,
      );
    }

    if (item.kind === "CONJUGATION" && completeTemplateLevels.has(item.level)) {
      const card = item.data as ConjugationCard;
      requireText(item.sourceId, card.formationRule, "formationRule", errors);
      requireText(item.sourceId, card.irregularity, "irregularity", errors);
      requireArrayLength(item.sourceId, card.markers, "markers", 2, errors);
      requireArrayLength(item.sourceId, card.examples, "examples", 2, errors);
      requireArrayLength(
        item.sourceId,
        card.commonMistakes,
        "commonMistakes",
        1,
        errors,
      );
    }
  }

  const grammarTopics = new Set(
    items
      .filter((item) => item.kind === "GRAMMAR")
      .map((item) => (item.topic ? `${item.level}|${item.topic}` : null))
      .filter((topic): topic is string => Boolean(topic)),
  );
  const theoryTopics = new Set<string>();
  for (const lesson of items.filter((item) => item.kind === "THEORY")) {
    const theory = lesson.data as Extract<ContentData, { topics: string[] }>;
    for (const topic of theory.topics) {
      theoryTopics.add(`${lesson.level}|${topic}`);
      if (!grammarTopics.has(`${lesson.level}|${topic}`)) {
        errors.push(
          `${lesson.sourceId}: theory topic has no exercise: ${topic}`,
        );
      }
    }
  }
  for (const exercise of items.filter((item) => item.kind === "GRAMMAR")) {
    if (!theoryTopics.has(`${exercise.level}|${exercise.topic}`)) {
      errors.push(
        `${exercise.sourceId}: exercise topic has no theory lesson: ${exercise.topic}`,
      );
    }
  }

  const grammarById = new Map(
    items
      .filter((item) => item.kind === "GRAMMAR")
      .map((item) => [item.sourceId, item.data as GrammarExercise]),
  );
  const theoryById = new Map(
    items
      .filter((item) => item.kind === "THEORY")
      .map((item) => [item.sourceId, item.data as TheoryLesson]),
  );
  for (const item of items.filter(
    (entry) =>
      entry.kind === "GRAMMAR" && completeTemplateLevels.has(entry.level),
  )) {
    const exercise = item.data as GrammarExercise;
    for (const lessonId of exercise.lessonIds ?? []) {
      const lesson = theoryById.get(lessonId);
      if (!lesson || lesson.level !== item.level) {
        errors.push(`${item.sourceId}: unknown same-level lesson ${lessonId}`);
      } else {
        if (!lesson.topics.includes(exercise.topic)) {
          errors.push(
            `${item.sourceId}: ${lessonId} does not cover topic ${exercise.topic}`,
          );
        }
        if (!lesson.exerciseIds?.includes(item.sourceId)) {
          errors.push(`${item.sourceId}: ${lessonId} has no exercise backlink`);
        }
      }
    }
  }
  for (const item of items.filter(
    (entry) =>
      entry.kind === "THEORY" && completeTemplateLevels.has(entry.level),
  )) {
    const lesson = item.data as TheoryLesson;
    for (const exerciseId of lesson.exerciseIds ?? []) {
      const exercise = grammarById.get(exerciseId);
      if (!exercise || exercise.level !== item.level) {
        errors.push(
          `${item.sourceId}: unknown same-level exercise ${exerciseId}`,
        );
      } else if (!exercise.lessonIds?.includes(item.sourceId)) {
        errors.push(`${item.sourceId}: ${exerciseId} has no lesson backlink`);
      }
    }
  }

  for (const [level, minimums] of Object.entries(baselineMinimums) as [
    CefrLevel,
    Record<CatalogContentKind, number>,
  ][]) {
    for (const [kind, minimum] of Object.entries(minimums) as [
      CatalogContentKind,
      number,
    ][]) {
      const actual = items.filter(
        (item) => item.level === level && item.kind === kind,
      ).length;
      if (actual < minimum) {
        errors.push(`${level}/${kind}: ${actual} items, minimum is ${minimum}`);
      }
    }
  }

  if (manifest) {
    const current = createContentManifest(items);
    for (const item of items) {
      const saved = manifest.entries[item.sourceId];
      const next = current.entries[item.sourceId];
      if (!saved) {
        errors.push(
          `${item.sourceId}: missing from the protected-fields manifest`,
        );
      } else if (
        saved.revision !== next.revision ||
        saved.digest !== next.digest
      ) {
        errors.push(
          `${item.sourceId}: protected fields or revision differ from the manifest`,
        );
      }
    }
    for (const id of Object.keys(manifest.entries)) {
      if (!ids.has(id))
        errors.push(`${id}: manifest entry has no catalog item`);
    }
  }

  return errors;
}

function requireText(
  sourceId: string,
  value: string | undefined,
  field: string,
  errors: string[],
) {
  if (!value?.trim()) {
    errors.push(`${sourceId}: missing reference-template field ${field}`);
  }
}

function requireArrayLength(
  sourceId: string,
  value: unknown[] | undefined,
  field: string,
  minimum: number,
  errors: string[],
) {
  if (!value || value.length < minimum) {
    errors.push(
      `${sourceId}: reference-template field ${field} needs at least ${minimum} item${minimum === 1 ? "" : "s"}`,
    );
  }
}

export function assertManifestUpdateIsRevisioned(
  previous: ContentManifest,
  next: ContentManifest,
) {
  const errors: string[] = [];
  for (const [id, saved] of Object.entries(previous.entries)) {
    const current = next.entries[id];
    if (
      current &&
      current.digest !== saved.digest &&
      current.revision <= saved.revision
    ) {
      errors.push(
        `${id}: protected fields changed without a revision increase`,
      );
    }
  }
  return errors;
}

export function contentReport(items: CatalogItem[]) {
  const kinds: CatalogContentKind[] = [
    "GRAMMAR",
    "THEORY",
    "VOCABULARY",
    "CONJUGATION",
    "READING",
    "LISTENING",
    "TRANSLATE_FROM_ES",
    "TRANSLATE_TO_ES",
    "PLACEMENT",
  ];
  const dailyDemand: Record<CatalogContentKind, number> = {
    GRAMMAR: 20,
    THEORY: 1,
    VOCABULARY: 10,
    CONJUGATION: 20,
    READING: 1,
    LISTENING: 2,
    TRANSLATE_FROM_ES: 1,
    TRANSLATE_TO_ES: 1,
    PLACEMENT: 15,
  };
  const lines = [
    `Content catalog: ${items.length} items`,
    "",
    "Counts by level and kind (exact-level rotation lower bound in parentheses):",
  ];
  for (const level of Object.keys(baselineMinimums) as CefrLevel[]) {
    const values = kinds.map((kind) => {
      const count = items.filter(
        (item) => item.level === level && item.kind === kind,
      ).length;
      return kind === "PLACEMENT"
        ? `${kind}=${count} (diagnostic pool)`
        : `${kind}=${count} (${(count / dailyDemand[kind]).toFixed(1)}d)`;
    });
    lines.push(`${level}: ${values.join(", ")}`);
  }
  const topics = new Map<string, number>();
  for (const item of items.filter((entry) => entry.kind === "GRAMMAR")) {
    if (item.topic) topics.set(item.topic, (topics.get(item.topic) ?? 0) + 1);
  }
  lines.push("", `Grammar topics: ${topics.size}`);
  for (const [topic, count] of [...topics].sort(([left], [right]) =>
    left.localeCompare(right, "es"),
  )) {
    lines.push(`- ${topic}: ${count}`);
  }
  return lines.join("\n");
}
