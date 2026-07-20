import { createHash } from "node:crypto";

import { normalizeAnswer } from "@/domain/answer-normalization";

import type {
  CatalogContentKind,
  CatalogItem,
  CefrLevel,
  ContentData,
  PlacementQuestion,
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
    return {
      level: item.level,
      topic: item.topic,
      type: "type" in item ? item.type : null,
      prompt: "prompt" in item ? normalizeSemanticText(item.prompt) : null,
      answer:
        "answer" in item ? normalizeSemanticText(String(item.answer)) : null,
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

    if (item.kind === "VOCABULARY" && "contextTarget" in item.data) {
      const card = item.data as VocabularyCard & { contextTarget: string };
      if (!card.context.includes(card.contextTarget)) {
        errors.push(`${item.sourceId}: contextTarget is absent from context`);
      }
    }

    if (item.kind === "LISTENING") {
      const listening = item.data as Extract<ContentData, { url: string }>;
      try {
        const url = new URL(listening.url);
        if (!["http:", "https:"].includes(url.protocol)) throw new Error();
      } catch {
        errors.push(`${item.sourceId}: listening URL is invalid`);
      }
    }
  }

  const grammarTopics = new Set(
    items
      .filter((item) => item.kind === "GRAMMAR")
      .map((item) => item.topic)
      .filter((topic): topic is string => Boolean(topic)),
  );
  for (const lesson of items.filter((item) => item.kind === "THEORY")) {
    const theory = lesson.data as Extract<ContentData, { topics: string[] }>;
    for (const topic of theory.topics) {
      if (!grammarTopics.has(topic)) {
        errors.push(
          `${lesson.sourceId}: theory topic has no exercise: ${topic}`,
        );
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
