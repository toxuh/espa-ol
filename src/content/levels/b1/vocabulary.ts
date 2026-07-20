import type { VocabularyCard } from "../../types";

const b1VocabularyBase = [
  {
    id: "v-b1-1",
    level: "B1",
    word: "logro",
    translation: "достижение",
    accept: ["достижение"],
    context: "Graduarse fue un gran logro para ella.",
    contextTarget: "logro",
    revision: 1,
  },
  {
    id: "v-b1-2",
    level: "B1",
    word: "desafío",
    translation: "вызов",
    accept: ["вызов", "трудность"],
    context: "Aprender un idioma nuevo es un desafío.",
    contextTarget: "desafío",
    revision: 1,
  },
  {
    id: "v-b1-3",
    level: "B1",
    word: "ventaja",
    translation: "преимущество",
    accept: ["преимущество", "плюс"],
    context: "Trabajar desde casa tiene muchas ventajas.",
    contextTarget: "ventajas",
    revision: 1,
  },
  {
    id: "v-b1-4",
    level: "B1",
    word: "desventaja",
    translation: "недостаток",
    accept: ["недостаток", "минус"],
    context: "Esa decisión también tiene desventajas.",
    contextTarget: "desventajas",
    revision: 1,
  },
  {
    id: "v-b1-5",
    level: "B1",
    word: "objetivo",
    translation: "цель",
    accept: ["цель"],
    context: "Mi objetivo es aprender español en un año.",
    contextTarget: "objetivo",
    revision: 1,
  },
  {
    id: "v-b1-6",
    level: "B1",
    word: "herramienta",
    translation: "инструмент",
    accept: ["инструмент"],
    context: "Internet es una herramienta muy útil.",
    contextTarget: "herramienta",
    revision: 1,
  },
  {
    id: "v-b1-7",
    level: "B1",
    word: "esfuerzo",
    translation: "усилие",
    accept: ["усилие", "старание"],
    context: "Consiguió el trabajo con mucho esfuerzo.",
    contextTarget: "esfuerzo",
    revision: 1,
  },
  {
    id: "v-b1-8",
    level: "B1",
    word: "investigación",
    translation: "исследование",
    accept: ["исследование"],
    context: "Publicaron una nueva investigación sobre el clima.",
    contextTarget: "investigación",
    revision: 1,
  },
  {
    id: "v-b1-9",
    level: "B1",
    word: "sociedad",
    translation: "общество",
    accept: ["общество"],
    context: "La sociedad está cambiando rápidamente.",
    contextTarget: "sociedad",
    revision: 1,
  },
  {
    id: "v-b1-10",
    level: "B1",
    word: "rasgo",
    translation: "черта",
    accept: ["черта", "особенность"],
    context: "La honestidad es su mejor rasgo.",
    contextTarget: "rasgo",
    revision: 1,
  },
  {
    id: "v-b1-11",
    level: "B1",
    word: "acuerdo",
    translation: "соглашение",
    accept: ["соглашение", "договорённость"],
    context: "Llegaron a un acuerdo después de horas de debate.",
    contextTarget: "acuerdo",
    revision: 1,
  },
  {
    id: "v-b1-12",
    level: "B1",
    word: "suceso",
    translation: "событие",
    accept: ["событие", "происшествие"],
    context: "Fue un suceso inesperado.",
    contextTarget: "suceso",
    revision: 1,
  },
  {
    id: "v-b1-13",
    level: "B1",
    word: "propuesta",
    translation: "предложение",
    accept: ["предложение"],
    context: "Presentaron una propuesta interesante.",
    contextTarget: "propuesta",
    revision: 1,
  },
  {
    id: "v-b1-14",
    level: "B1",
    word: "medio ambiente",
    translation: "окружающая среда",
    accept: ["окружающая среда", "экология"],
    context: "Debemos cuidar el medio ambiente.",
    contextTarget: "medio ambiente",
    revision: 1,
  },
] satisfies VocabularyCard[];

const b1VocabularyDetails: Record<
  string,
  Pick<
    VocabularyCard,
    | "partOfSpeech"
    | "gender"
    | "forms"
    | "contextTranslation"
    | "collocations"
    | "usageNote"
    | "register"
  >
> = {
  "v-b1-1": {
    partOfSpeech: "существительное",
    gender: "мужской",
    forms: ["el logro", "los logros"],
    contextTranslation:
      "Окончить университет было для неё большим достижением.",
    collocations: ["alcanzar un logro", "un gran logro"],
    usageNote:
      "Logro подчёркивает успешно достигнутый результат; objetivo — ещё только цель.",
    register: "нейтральный",
  },
  "v-b1-2": {
    partOfSpeech: "существительное",
    gender: "мужской",
    forms: ["el desafío", "los desafíos"],
    contextTranslation: "Изучение нового языка — это вызов.",
    collocations: ["afrontar un desafío", "un desafío difícil"],
    usageNote:
      "Desafío может обозначать и трудную задачу, и прямой вызов другому человеку.",
    register: "нейтральный",
  },
  "v-b1-3": {
    partOfSpeech: "существительное",
    gender: "женский",
    forms: ["la ventaja", "las ventajas"],
    contextTranslation: "У работы из дома много преимуществ.",
    collocations: ["tener la ventaja de", "ventajas e inconvenientes"],
    usageNote:
      "Для сопоставления часто используется конструкция la ventaja es que.",
    register: "нейтральный",
  },
  "v-b1-4": {
    partOfSpeech: "существительное",
    gender: "женский",
    forms: ["la desventaja", "las desventajas"],
    contextTranslation: "У этого решения тоже есть недостатки.",
    collocations: ["una clara desventaja", "tener la desventaja de"],
    usageNote:
      "Desventaja — прямой антоним ventaja; в разговорной речи возможны pro и contra.",
    register: "нейтральный",
  },
  "v-b1-5": {
    partOfSpeech: "существительное",
    gender: "мужской",
    forms: ["el objetivo", "los objetivos"],
    contextTranslation: "Моя цель — выучить испанский за год.",
    collocations: ["alcanzar un objetivo", "tener como objetivo"],
    usageNote:
      "После mi objetivo es обычно ставится infinitivo, когда субъект действия тот же.",
    register: "нейтральный",
  },
  "v-b1-6": {
    partOfSpeech: "существительное",
    gender: "женский",
    forms: ["la herramienta", "las herramientas"],
    contextTranslation: "Интернет — очень полезный инструмент.",
    collocations: ["herramienta útil", "herramienta de trabajo"],
    usageNote:
      "Слово употребляется и буквально, и метафорически для метода или технологии.",
    register: "нейтральный",
  },
  "v-b1-7": {
    partOfSpeech: "существительное",
    gender: "мужской",
    forms: ["el esfuerzo", "los esfuerzos"],
    contextTranslation: "Она получила эту работу благодаря большим усилиям.",
    collocations: ["hacer un esfuerzo", "con mucho esfuerzo"],
    usageNote:
      "С глаголом hacer используется исчисляемо: hacer un esfuerzo por + infinitivo.",
    register: "нейтральный",
  },
  "v-b1-8": {
    partOfSpeech: "существительное",
    gender: "женский",
    forms: ["la investigación", "las investigaciones"],
    contextTranslation: "Они опубликовали новое исследование о климате.",
    collocations: ["realizar una investigación", "investigación científica"],
    usageNote:
      "Может означать и процесс исследования, и опубликованную исследовательскую работу.",
    register: "нейтрально-формальный",
  },
  "v-b1-9": {
    partOfSpeech: "существительное",
    gender: "женский",
    forms: ["la sociedad", "las sociedades"],
    contextTranslation: "Общество быстро меняется.",
    collocations: ["la sociedad actual", "vivir en sociedad"],
    usageNote:
      "В значении общества обычно употребляется в единственном числе с определённым артиклем.",
    register: "нейтральный",
  },
  "v-b1-10": {
    partOfSpeech: "существительное",
    gender: "мужской",
    forms: ["el rasgo", "los rasgos"],
    contextTranslation: "Честность — его лучшая черта.",
    collocations: ["rasgo de carácter", "rasgo distintivo"],
    usageNote:
      "Rasgo — отдельная характерная черта; característica имеет более широкое употребление.",
    register: "нейтральный",
  },
  "v-b1-11": {
    partOfSpeech: "существительное",
    gender: "мужской",
    forms: ["el acuerdo", "los acuerdos"],
    contextTranslation:
      "После нескольких часов обсуждения они пришли к соглашению.",
    collocations: ["llegar a un acuerdo", "estar de acuerdo"],
    usageNote:
      "Llegar a un acuerdo — договориться; estar de acuerdo — быть согласным.",
    register: "нейтральный",
  },
  "v-b1-12": {
    partOfSpeech: "существительное",
    gender: "мужской",
    forms: ["el suceso", "los sucesos"],
    contextTranslation: "Это было неожиданное происшествие.",
    collocations: ["un suceso inesperado", "relatar un suceso"],
    usageNote:
      "Suceso часто относится к конкретному произошедшему факту; evento может быть заранее организованным мероприятием.",
    register: "нейтрально-формальный",
  },
  "v-b1-13": {
    partOfSpeech: "существительное",
    gender: "женский",
    forms: ["la propuesta", "las propuestas"],
    contextTranslation: "Они представили интересное предложение.",
    collocations: ["hacer una propuesta", "aceptar una propuesta"],
    usageNote:
      "Propuesta — идея или план на рассмотрение; предложение как фраза — oración.",
    register: "нейтральный",
  },
  "v-b1-14": {
    partOfSpeech: "составное существительное",
    gender: "мужской",
    forms: ["el medio ambiente"],
    contextTranslation: "Мы должны заботиться об окружающей среде.",
    collocations: ["proteger el medio ambiente", "daño al medio ambiente"],
    usageNote:
      "Устойчивое сочетание обычно употребляется в единственном числе и с артиклем el.",
    register: "нейтральный",
  },
};

export const b1Vocabulary = b1VocabularyBase.map((card) => ({
  ...card,
  ...b1VocabularyDetails[card.id],
})) satisfies VocabularyCard[];
