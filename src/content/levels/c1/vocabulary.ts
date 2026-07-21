import type { VocabularyCard } from "../../types";

const c1VocabularyBase = [
  {
    id: "v-c1-1",
    level: "C1",
    word: "idiosincrasia",
    translation: "самобытность",
    accept: ["самобытность", "особенность характера"],
    context: "Cada país tiene su propia idiosincrasia.",
    contextTarget: "idiosincrasia",
    revision: 1,
  },
  {
    id: "v-c1-2",
    level: "C1",
    word: "controvertido",
    translation: "спорный",
    accept: ["спорный"],
    context: "Es un tema muy controvertido.",
    contextTarget: "controvertido",
    revision: 1,
  },
  {
    id: "v-c1-3",
    level: "C1",
    word: "paulatino",
    translation: "постепенный",
    accept: ["постепенный"],
    context: "Se observa un declive paulatino en las ventas.",
    contextTarget: "paulatino",
    revision: 1,
  },
  {
    id: "v-c1-4",
    level: "C1",
    word: "contundente",
    translation: "убедительный",
    accept: ["убедительный", "весомый"],
    context: "Presentó pruebas contundentes.",
    contextTarget: "contundentes",
    revision: 1,
  },
  {
    id: "v-c1-5",
    level: "C1",
    word: "desasosiego",
    translation: "беспокойство",
    accept: ["беспокойство", "тревога"],
    context: "Sintió un profundo desasosiego.",
    contextTarget: "desasosiego",
    revision: 1,
  },
  {
    id: "v-c1-6",
    level: "C1",
    word: "pormenor",
    translation: "подробность",
    accept: ["подробность", "деталь"],
    context: "Explicó todos los pormenores del acuerdo.",
    contextTarget: "pormenores",
    revision: 1,
  },
  {
    id: "v-c1-7",
    level: "C1",
    word: "arraigado",
    translation: "укоренившийся",
    accept: ["укоренившийся"],
    context: "Es una tradición muy arraigada en la cultura.",
    contextTarget: "arraigada",
    revision: 1,
  },
  {
    id: "v-c1-8",
    level: "C1",
    word: "vislumbrar",
    translation: "предвидеть",
    accept: ["предвидеть", "смутно различать"],
    context: "Empezaba a vislumbrar una solución.",
    contextTarget: "vislumbrar",
    revision: 1,
  },
  {
    id: "v-c1-9",
    level: "C1",
    word: "encauzar",
    translation: "направлять",
    accept: ["направлять"],
    context: "Intentaron encauzar el debate hacia soluciones prácticas.",
    contextTarget: "encauzar",
    revision: 1,
  },
  {
    id: "v-c1-10",
    level: "C1",
    word: "ineludible",
    translation: "неизбежный",
    accept: ["неизбежный"],
    context: "Es una responsabilidad ineludible.",
    contextTarget: "ineludible",
    revision: 1,
  },
  {
    id: "v-c1-11",
    level: "C1",
    word: "desentrañar",
    translation: "разгадать",
    accept: ["разгадать", "распутать"],
    context: "Los científicos intentan desentrañar el misterio.",
    contextTarget: "desentrañar",
    revision: 1,
  },
  {
    id: "v-c1-12",
    level: "C1",
    word: "sopesar",
    translation: "взвешивать",
    accept: ["взвешивать"],
    context: "Hay que sopesar los pros y los contras.",
    contextTarget: "sopesar",
    revision: 1,
  },
  {
    id: "v-c1-13",
    level: "C1",
    word: "reticente",
    translation: "несклонный",
    accept: ["несклонный", "сдержанный"],
    context: "Se mostró reticente a aceptar el cambio.",
    contextTarget: "reticente",
    revision: 1,
  },
  {
    id: "v-c1-14",
    level: "C1",
    word: "subyacente",
    translation: "лежащий в основе",
    accept: ["лежащий в основе", "подспудный"],
    context: "Hay un problema subyacente que nadie menciona.",
    contextTarget: "subyacente",
    revision: 1,
  },
] satisfies VocabularyCard[];

const c1VocabularyDetails: Record<
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
  "v-c1-1": {
    partOfSpeech: "существительное",
    gender: "женский",
    forms: ["la idiosincrasia", "las idiosincrasias"],
    contextTranslation: "У каждой страны своя самобытность.",
    collocations: ["la idiosincrasia nacional", "propio de su idiosincrasia"],
    usageNote:
      "Обозначает совокупность черт, отличающих народ, группу или человека. Пишется с одной s в середине: idiosincrasia.",
    register: "формальный",
  },
  "v-c1-2": {
    partOfSpeech: "прилагательное",
    forms: [
      "controvertido",
      "controvertida",
      "controvertidos",
      "controvertidas",
    ],
    contextTranslation: "Это очень спорная тема.",
    collocations: ["un tema controvertido", "una figura controvertida"],
    usageNote:
      "Описывает то, что вызывает споры. Близкое polémico чаще подчёркивает публичный скандал.",
    register: "нейтрально-формальный",
  },
  "v-c1-3": {
    partOfSpeech: "прилагательное",
    forms: ["paulatino", "paulatina", "paulatinos", "paulatinas"],
    contextTranslation: "Наблюдается постепенное снижение продаж.",
    collocations: ["un descenso paulatino", "de forma paulatina"],
    usageNote:
      "Книжный синоним gradual; часто встречается наречие paulatinamente.",
    register: "формальный",
  },
  "v-c1-4": {
    partOfSpeech: "прилагательное",
    forms: ["contundente", "contundentes"],
    contextTranslation: "Он представил убедительные доказательства.",
    collocations: ["pruebas contundentes", "una respuesta contundente"],
    usageNote:
      "О доводах означает «неопровержимый»; о поражении или ударе — «сокрушительный». Форма не меняется по роду.",
    register: "нейтрально-формальный",
  },
  "v-c1-5": {
    partOfSpeech: "существительное",
    gender: "мужской",
    forms: ["el desasosiego"],
    contextTranslation: "Он ощутил глубокую тревогу.",
    collocations: ["sentir desasosiego", "causar desasosiego"],
    usageNote:
      "Обозначает внутреннее беспокойство без явной причины; обычно употребляется в единственном числе.",
    register: "литературный",
  },
  "v-c1-6": {
    partOfSpeech: "существительное",
    gender: "мужской",
    forms: ["el pormenor", "los pormenores"],
    contextTranslation: "Он объяснил все подробности соглашения.",
    collocations: ["entrar en pormenores", "contar los pormenores"],
    usageNote:
      "Почти всегда во множественном числе; синоним detalles, но звучит более книжно.",
    register: "формальный",
  },
  "v-c1-7": {
    partOfSpeech: "прилагательное (причастие от arraigar)",
    forms: ["arraigado", "arraigada", "arraigados", "arraigadas"],
    contextTranslation: "Это очень укоренившаяся в культуре традиция.",
    collocations: ["una costumbre arraigada", "estar arraigado en"],
    usageNote:
      "Согласуется с определяемым словом, поэтому в контексте стоит форма arraigada при tradición.",
    register: "нейтрально-формальный",
  },
  "v-c1-8": {
    partOfSpeech: "глагол",
    forms: [
      "vislumbrar",
      "vislumbra",
      "vislumbran",
      "vislumbró",
      "vislumbrando",
    ],
    contextTranslation: "Он начинал смутно видеть решение.",
    collocations: ["vislumbrar una salida", "vislumbrar el futuro"],
    usageNote:
      "Буквально — различать что-то неясно, издалека; переносно — начинать предугадывать.",
    register: "литературный",
  },
  "v-c1-9": {
    partOfSpeech: "глагол",
    forms: ["encauzar", "encauza", "encauzan", "encauzó", "encauzando"],
    contextTranslation:
      "Они попытались направить обсуждение к практическим решениям.",
    collocations: ["encauzar un debate", "encauzar los esfuerzos"],
    usageNote:
      "Образовано от cauce (русло): направить процесс в нужное русло. В indefinido пишется encaucé.",
    register: "формальный",
  },
  "v-c1-10": {
    partOfSpeech: "прилагательное",
    forms: ["ineludible", "ineludibles"],
    contextTranslation: "Это неотвратимая ответственность.",
    collocations: ["un deber ineludible", "una cita ineludible"],
    usageNote:
      "От eludir — уклоняться: то, от чего нельзя уйти. Inevitable шире и относится к событиям вообще.",
    register: "формальный",
  },
  "v-c1-11": {
    partOfSpeech: "глагол",
    forms: [
      "desentrañar",
      "desentraña",
      "desentrañan",
      "desentrañó",
      "desentrañando",
    ],
    contextTranslation: "Учёные пытаются разгадать эту тайну.",
    collocations: ["desentrañar un misterio", "desentrañar las causas"],
    usageNote:
      "Предполагает вскрытие внутренней сути явления, а не простое обнаружение факта.",
    register: "формальный",
  },
  "v-c1-12": {
    partOfSpeech: "глагол",
    forms: ["sopesar", "sopesa", "sopesan", "sopesó", "sopesando"],
    contextTranslation: "Нужно взвесить плюсы и минусы.",
    collocations: ["sopesar las opciones", "sopesar los riesgos"],
    usageNote:
      "Означает мысленно оценить и сравнить варианты; о физическом весе говорят pesar.",
    register: "нейтрально-формальный",
  },
  "v-c1-13": {
    partOfSpeech: "прилагательное",
    forms: ["reticente", "reticentes"],
    contextTranslation: "Он отнёсся к переменам без энтузиазма.",
    collocations: ["mostrarse reticente a", "reticente ante los cambios"],
    usageNote:
      "Управляет предлогом a перед инфинитивом и ante перед существительным; означает сдержанное нежелание, а не прямой отказ.",
    register: "формальный",
  },
  "v-c1-14": {
    partOfSpeech: "прилагательное",
    forms: ["subyacente", "subyacentes"],
    contextTranslation: "Есть скрытая проблема, о которой никто не говорит.",
    collocations: ["una causa subyacente", "la idea subyacente"],
    usageNote:
      "От глагола subyacer: то, что лежит под поверхностью явления и прямо не названо.",
    register: "формальный, научный",
  },
};

export const c1Vocabulary = c1VocabularyBase.map((card) => ({
  ...card,
  ...c1VocabularyDetails[card.id],
})) satisfies VocabularyCard[];
