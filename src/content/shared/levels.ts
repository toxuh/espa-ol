import type { CefrLevel } from "../types";

export const levels = ["A1", "A2", "B1", "B2", "C1"] satisfies CefrLevel[];

export const levelNames = {
  A1: "A1 · Новичок",
  A2: "A2 · Элементарный",
  B1: "B1 · Средний",
  B2: "B2 · Выше среднего",
  C1: "C1 · Продвинутый",
} satisfies Record<CefrLevel, string>;

export const conjugationPersons = [
  "yo",
  "tú",
  "él / ella / usted",
  "nosotros",
  "vosotros",
  "ellos / ellas / ustedes",
];
