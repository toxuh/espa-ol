import { describe, expect, it } from "vitest";

import { normalizeAnswer } from "@/domain/answer-normalization";

describe("normalizeAnswer", () => {
  it("preserves the prototype comparison rules", () => {
    expect(normalizeAnswer("  ¿HABÍA!  ")).toBe("habia");
    expect(normalizeAnswer("Lápices.")).toBe("lapices");
  });

  it("handles missing values", () => {
    expect(normalizeAnswer(null)).toBe("");
  });
});
