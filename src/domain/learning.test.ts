import { describe, expect, it } from "vitest";

import {
  allowedLevels,
  firstTrySummary,
  levelFromPlacementScore,
  localDateInTimeZone,
  previousDate,
  scoreTranslation,
} from "@/domain/learning";

describe("learning rules", () => {
  it("maps placement thresholds exactly like the prototype", () => {
    expect([3, 4, 6, 7, 9, 10, 12, 13].map(levelFromPlacementScore)).toEqual([
      "A1",
      "A2",
      "A2",
      "B1",
      "B1",
      "B2",
      "B2",
      "C1",
    ]);
  });

  it("allows the current level and adjacent levels", () => {
    expect(allowedLevels("A1")).toEqual(["A1", "A2"]);
    expect(allowedLevels("B1")).toEqual(["A2", "B1", "B2"]);
    expect(allowedLevels("C1")).toEqual(["B2", "C1"]);
  });

  it("uses the profile timezone for the study date", () => {
    const instant = new Date("2026-07-18T22:30:00.000Z");
    expect(localDateInTimeZone(instant, "Europe/Madrid")).toBe("2026-07-19");
    expect(previousDate("2026-03-01")).toBe("2026-02-28");
  });

  it("scores translations by significant-word overlap", () => {
    expect(
      scoreTranslation(
        "Me llamo María y vivo en Madrid",
        "Me llamo María. Vivo en Madrid.",
      ),
    ).toMatchObject({
      percent: 100,
      rating: "easy",
    });
    expect(
      scoreTranslation("Madrid", "Me llamo María. Vivo en Madrid.").rating,
    ).toBe("hard");
  });

  it("scores complete cards instead of counting partial fields as attempts", () => {
    expect(
      firstTrySummary([{ correctFirstTry: true }, { correctFirstTry: false }]),
    ).toEqual({ correct: 1, total: 2, accuracy: 50 });
    expect(
      firstTrySummary([
        // A conjugation card with five correct forms out of six is still one
        // incorrectly completed card on the first try.
        { correctFirstTry: false },
      ]),
    ).toEqual({ correct: 0, total: 1, accuracy: 0 });
    expect(firstTrySummary([])).toEqual({
      correct: 0,
      total: 0,
      accuracy: null,
    });
  });
});
