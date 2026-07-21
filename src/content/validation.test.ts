import { describe, expect, it } from "vitest";

import { catalogItems } from "./catalog";
import type {
  GrammarExercise,
  ReadingContent,
  TheoryLesson,
  VocabularyCard,
} from "./types";
import {
  assertManifestUpdateIsRevisioned,
  createContentManifest,
  validateCatalog,
} from "./validation";

describe("content catalog validation", () => {
  it("accepts the current protected-fields manifest", () => {
    const manifest = createContentManifest(catalogItems);

    expect(validateCatalog(catalogItems, manifest)).toEqual([]);
  });

  it("allows an accent-only canonical answer correction", () => {
    const changed = structuredClone(catalogItems);
    const item = changed.find((entry) => entry.sourceId === "a1-12");
    if (!item) throw new Error("Missing a1-12 fixture");
    (item.data as GrammarExercise).answer = "lápices";

    expect(
      validateCatalog(changed, createContentManifest(catalogItems)),
    ).toEqual([]);
  });

  it("requires a revision increase before updating protected meaning", () => {
    const previous = createContentManifest(catalogItems);
    const changed = structuredClone(catalogItems);
    const item = changed.find((entry) => entry.sourceId === "a1-01");
    if (!item) throw new Error("Missing a1-01 fixture");
    (item.data as GrammarExercise).prompt = "Ella ___ en Madrid.";

    const next = createContentManifest(changed);
    expect(assertManifestUpdateIsRevisioned(previous, next)).toContain(
      "a1-01: protected fields changed without a revision increase",
    );

    item.data.revision += 1;
    expect(
      assertManifestUpdateIsRevisioned(
        previous,
        createContentManifest(changed),
      ),
    ).toEqual([]);
  });

  it("requires an explicit solved example for multi-blank exercises", () => {
    const changed = structuredClone(catalogItems);
    const item = changed.find((entry) => entry.sourceId === "a1-04");
    if (!item) throw new Error("Missing a1-04 fixture");
    delete (item.data as GrammarExercise).solvedExample;

    expect(validateCatalog(changed)).toContain(
      "a1-04: multi-blank exercise has no solvedExample",
    );
  });

  it("requires the vocabulary context target to occur in its context", () => {
    const changed = structuredClone(catalogItems);
    const item = changed.find((entry) => entry.sourceId === "v-b2-1");
    if (!item) throw new Error("Missing v-b2-1 fixture");
    (item.data as VocabularyCard).contextTarget = "exigir";

    expect(validateCatalog(changed)).toContain(
      "v-b2-1: contextTarget is absent from context",
    );
  });

  it("requires every grammar topic to be covered by same-level theory", () => {
    const changed = structuredClone(catalogItems);
    const item = changed.find((entry) => entry.sourceId === "b1-10");
    if (!item) throw new Error("Missing b1-10 fixture");
    item.topic = "unlinked-topic";
    (item.data as GrammarExercise).topic = "unlinked-topic";

    expect(validateCatalog(changed)).toContain(
      "b1-10: exercise topic has no theory lesson: unlinked-topic",
    );
  });

  it("requires the complete reference template for A1 readings", () => {
    const changed = structuredClone(catalogItems);
    const item = changed.find((entry) => entry.sourceId === "r-a1-1");
    if (!item) throw new Error("Missing r-a1-1 fixture");
    delete (item.data as ReadingContent).questions;

    expect(validateCatalog(changed)).toContain(
      "r-a1-1: reference-template field questions needs at least 3 items",
    );
  });

  it("requires the complete reference template for A2 readings", () => {
    const changed = structuredClone(catalogItems);
    const item = changed.find((entry) => entry.sourceId === "r-a2-1");
    if (!item) throw new Error("Missing r-a2-1 fixture");
    delete (item.data as ReadingContent).questions;

    expect(validateCatalog(changed)).toContain(
      "r-a2-1: reference-template field questions needs at least 3 items",
    );
  });

  it("requires the complete reference template for B1 readings", () => {
    const changed = structuredClone(catalogItems);
    const item = changed.find((entry) => entry.sourceId === "r-b1-1");
    if (!item) throw new Error("Missing r-b1-1 fixture");
    delete (item.data as ReadingContent).questions;

    expect(validateCatalog(changed)).toContain(
      "r-b1-1: reference-template field questions needs at least 3 items",
    );
  });

  it("requires the complete reference template for B2 readings", () => {
    const changed = structuredClone(catalogItems);
    const item = changed.find((entry) => entry.sourceId === "r-b2-1");
    if (!item) throw new Error("Missing r-b2-1 fixture");
    delete (item.data as ReadingContent).questions;

    expect(validateCatalog(changed)).toContain(
      "r-b2-1: reference-template field questions needs at least 3 items",
    );
  });

  it("requires reciprocal A1 theory and exercise links", () => {
    const changed = structuredClone(catalogItems);
    const item = changed.find((entry) => entry.sourceId === "th-a1-1");
    if (!item) throw new Error("Missing th-a1-1 fixture");
    (item.data as TheoryLesson).exerciseIds = ["a1-02", "a1-14"];

    expect(validateCatalog(changed)).toContain(
      "a1-01: th-a1-1 has no exercise backlink",
    );
  });

  it("requires reciprocal A2 theory and exercise links", () => {
    const changed = structuredClone(catalogItems);
    const item = changed.find((entry) => entry.sourceId === "th-a2-1");
    if (!item) throw new Error("Missing th-a2-1 fixture");
    (item.data as TheoryLesson).exerciseIds = ["a2-02", "a2-14"];

    expect(validateCatalog(changed)).toContain(
      "a2-01: th-a2-1 has no exercise backlink",
    );
  });

  it("requires reciprocal B1 theory and exercise links", () => {
    const changed = structuredClone(catalogItems);
    const item = changed.find((entry) => entry.sourceId === "th-b1-1");
    if (!item) throw new Error("Missing th-b1-1 fixture");
    (item.data as TheoryLesson).exerciseIds = ["b1-08", "b1-19"];

    expect(validateCatalog(changed)).toContain(
      "b1-07: th-b1-1 has no exercise backlink",
    );
  });

  it("requires reciprocal B2 theory and exercise links", () => {
    const changed = structuredClone(catalogItems);
    const item = changed.find((entry) => entry.sourceId === "th-b2-1");
    if (!item) throw new Error("Missing th-b2-1 fixture");
    (item.data as TheoryLesson).exerciseIds = ["b2-02", "b2-03", "b2-15"];

    expect(validateCatalog(changed)).toContain(
      "b2-01: th-b2-1 has no exercise backlink",
    );
  });
});
