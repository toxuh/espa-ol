export const CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1"] as const;

export type CefrLevel = (typeof CEFR_LEVELS)[number];

export interface GrammarExercise {
  id: string;
  level: CefrLevel;
  topic: string;
  type: "mcq" | "fill";
  prompt: string;
  options?: string[];
  answer: string;
  explain: string;
}

export interface ReadingContent {
  id: string;
  level: CefrLevel;
  type: string;
  title: string;
  text: string;
}

export interface ListeningContent {
  id: string;
  level: CefrLevel;
  title: string;
  channel: string;
  url: string;
}

export interface TranslationContent {
  id: string;
  level: CefrLevel;
  title: string;
  text: string;
  reference: string;
}

export interface TheoryLesson {
  id: string;
  level: CefrLevel;
  title: string;
  topics: string[];
  body: string;
}

export interface VocabularyCard {
  id: string;
  level: CefrLevel;
  word: string;
  translation: string;
  accept: string[];
  context: string;
}

export interface ConjugationCard {
  id: string;
  level: CefrLevel;
  verb: string;
  verbMeaning: string;
  tense: string;
  tenseLabel: string;
  forms: string[];
  example: { es: string; ru: string };
}

export interface PlacementQuestion {
  level: CefrLevel;
  prompt: string;
  options: string[];
  answer: string;
}

export interface PrototypeContent {
  LEVELS: CefrLevel[];
  LEVEL_NAMES: Record<CefrLevel, string>;
  GRAMMAR: GrammarExercise[];
  READINGS: ReadingContent[];
  LISTENING: ListeningContent[];
  TRANSLATE_FROM_ES: TranslationContent[];
  TRANSLATE_TO_ES: TranslationContent[];
  THEORY: TheoryLesson[];
  VOCAB: VocabularyCard[];
  CONJUGATIONS: ConjugationCard[];
  CONJ_PERSONS: string[];
  PLACEMENT: PlacementQuestion[];
}
