export const CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1"] as const;

export type CefrLevel = (typeof CEFR_LEVELS)[number];

export interface ContentExample {
  es: string;
  ru: string;
}

export interface ContentQuestion {
  prompt: string;
  answer: string;
  explanation?: string;
}

export interface TheorySection {
  title: string;
  paragraphs: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface GlossaryEntry {
  term: string;
  translation: string;
}

export interface KeyConstruction {
  source: string;
  target: string;
  note?: string;
}

export interface GrammarExercise {
  id: string;
  revision: number;
  level: CefrLevel;
  topic: string;
  type: "mcq" | "fill";
  prompt: string;
  options?: string[];
  answer: string;
  acceptedAnswers?: string[];
  lessonIds?: string[];
  hint?: string;
  explain: string;
  solvedExample?: string;
  examples?: ContentExample[];
  commonMistakes?: string[];
}

export interface ReadingContent {
  id: string;
  revision: number;
  level: CefrLevel;
  type: string;
  title: string;
  text: string;
  instructions?: string;
  glossary?: GlossaryEntry[];
  questions?: ContentQuestion[];
  notes?: string[];
}

export interface ListeningContent {
  id: string;
  revision: number;
  level: CefrLevel;
  title: string;
  channel: string;
  url: string;
  durationMinutes?: number;
  dialect?: string;
  speed?: string;
  instructions?: string;
  questions?: ContentQuestion[];
  summary?: string;
  lastVerifiedAt?: string;
}

export interface TranslationContent {
  id: string;
  revision: number;
  level: CefrLevel;
  title: string;
  text: string;
  reference: string;
  alternativeReferences?: string[];
  keyConstructions?: KeyConstruction[];
  notes?: string[];
  acceptedKeywords?: string[];
}

export interface TheoryLesson {
  id: string;
  revision: number;
  level: CefrLevel;
  title: string;
  topics: string[];
  body: string;
  objectives?: string[];
  sections?: TheorySection[];
  summary?: string[];
  examples?: ContentExample[];
  commonMistakes?: string[];
  exerciseIds?: string[];
}

export interface VocabularyCard {
  id: string;
  revision: number;
  level: CefrLevel;
  word: string;
  translation: string;
  accept: string[];
  context: string;
  contextTarget: string;
  partOfSpeech?: string;
  gender?: string;
  forms?: string[];
  contextTranslation?: string;
  collocations?: string[];
  usageNote?: string;
  register?: string;
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
  formationRule?: string;
  irregularity?: string;
  markers?: string[];
  examples?: ContentExample[];
  commonMistakes?: string[];
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
