export const CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1"] as const;

export type CefrLevel = (typeof CEFR_LEVELS)[number];

export interface GrammarExercise {
  id: string;
  revision: number;
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
  revision: number;
  level: CefrLevel;
  type: string;
  title: string;
  text: string;
}

export interface ListeningContent {
  id: string;
  revision: number;
  level: CefrLevel;
  title: string;
  channel: string;
  url: string;
}

export interface TranslationContent {
  id: string;
  revision: number;
  level: CefrLevel;
  title: string;
  text: string;
  reference: string;
}

export interface TheoryLesson {
  id: string;
  revision: number;
  level: CefrLevel;
  title: string;
  topics: string[];
  body: string;
}

export interface VocabularyCard {
  id: string;
  revision: number;
  level: CefrLevel;
  word: string;
  translation: string;
  accept: string[];
  context: string;
}

export interface ConjugationCard {
  id: string;
  revision: number;
  level: CefrLevel;
  verb: string;
  verbMeaning: string;
  tense: string;
  tenseLabel: string;
  forms: string[];
  example: { es: string; ru: string };
}

export interface PlacementQuestion {
  id: string;
  revision: number;
  level: CefrLevel;
  prompt: string;
  options: string[];
  answer: string;
}

export interface ContentCatalog {
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

export type ContentData =
  | GrammarExercise
  | ReadingContent
  | ListeningContent
  | TranslationContent
  | TheoryLesson
  | VocabularyCard
  | ConjugationCard
  | PlacementQuestion;

export type CatalogContentKind =
  | "GRAMMAR"
  | "READING"
  | "LISTENING"
  | "TRANSLATE_FROM_ES"
  | "TRANSLATE_TO_ES"
  | "THEORY"
  | "VOCABULARY"
  | "CONJUGATION"
  | "PLACEMENT";

export interface CatalogItem {
  sourceId: string;
  kind: CatalogContentKind;
  level: CefrLevel;
  topic: string | null;
  position: number;
  data: ContentData;
}
