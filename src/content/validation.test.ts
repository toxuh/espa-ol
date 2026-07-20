import { describe, expect, it } from "vitest";

import { catalogItems } from "./catalog";
import type { GrammarExercise } from "./types";
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
});
