import type { VocabularyCard } from "../../types";

const b2VocabularyBase = [
  {
    id: "v-b2-1",
    level: "B2",
    word: "exigir",
    translation: "требовать",
    accept: ["требовать"],
    context: "Los empleados exigen mejores condiciones.",
    contextTarget: "exigen",
    revision: 1,
  },
  {
    id: "v-b2-2",
    level: "B2",
    word: "fomentar",
    translation: "способствовать",
    accept: ["способствовать", "поощрять"],
    context: "El gobierno quiere fomentar el turismo rural.",
    contextTarget: "fomentar",
    revision: 1,
  },
  {
    id: "v-b2-3",
    level: "B2",
    word: "desempeñar",
    translation: "выполнять",
    accept: ["выполнять", "исполнять"],
    context: "Desempeña un papel clave en la empresa.",
    contextTarget: "Desempeña",
    revision: 1,
  },
  {
    id: "v-b2-4",
    level: "B2",
    word: "abarcar",
    translation: "охватывать",
    accept: ["охватывать"],
    context: "El proyecto abarca varios países.",
    contextTarget: "abarca",
    revision: 1,
  },
  {
    id: "v-b2-5",
    level: "B2",
    word: "plantear",
    translation: "ставить вопрос",
    accept: ["ставить вопрос", "предлагать", "поднимать вопрос"],
    context: "El informe plantea varias preguntas importantes.",
    contextTarget: "plantea",
    revision: 1,
  },
  {
    id: "v-b2-6",
    level: "B2",
    word: "destacar",
    translation: "выделяться",
    accept: ["выделяться", "подчёркивать"],
    context: "Quiero destacar la importancia de este tema.",
    contextTarget: "destacar",
    revision: 1,
  },
  {
    id: "v-b2-7",
    level: "B2",
    word: "carecer",
    translation: "не иметь",
    accept: ["не иметь", "испытывать нехватку"],
    context: "La región carece de recursos básicos.",
    contextTarget: "carece",
    revision: 1,
  },
  {
    id: "v-b2-8",
    level: "B2",
    word: "suscitar",
    translation: "вызывать",
    accept: ["вызывать"],
    context: "La noticia suscitó mucha polémica.",
    contextTarget: "suscitó",
    revision: 1,
  },
  {
    id: "v-b2-9",
    level: "B2",
    word: "ámbito",
    translation: "сфера",
    accept: ["сфера", "область"],
    context: "Trabaja en el ámbito de la educación.",
    contextTarget: "ámbito",
    revision: 1,
  },
  {
    id: "v-b2-10",
    level: "B2",
    word: "rentable",
    translation: "рентабельный",
    accept: ["рентабельный", "выгодный"],
    context: "El nuevo modelo de negocio es muy rentable.",
    contextTarget: "rentable",
    revision: 1,
  },
  {
    id: "v-b2-11",
    level: "B2",
    word: "imprescindible",
    translation: "незаменимый",
    accept: ["незаменимый", "необходимый"],
    context: "El agua es imprescindible para la vida.",
    contextTarget: "imprescindible",
    revision: 1,
  },
  {
    id: "v-b2-12",
    level: "B2",
    word: "matizar",
    translation: "уточнять",
    accept: ["уточнять"],
    context: "Quiero matizar lo que dije antes.",
    contextTarget: "matizar",
    revision: 1,
  },
  {
    id: "v-b2-13",
    level: "B2",
    word: "constatar",
    translation: "констатировать",
    accept: ["констатировать", "убедиться"],
    context: "Los investigadores constataron un aumento significativo.",
    contextTarget: "constataron",
    revision: 1,
  },
  {
    id: "v-b2-14",
    level: "B2",
    word: "índole",
    translation: "характер",
    accept: ["характер", "природа"],
    context: "Es un problema de índole económica.",
    contextTarget: "índole",
    revision: 1,
  },
] satisfies VocabularyCard[];

const b2VocabularyDetails: Record<
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
  "v-b2-1": {
    partOfSpeech: "глагол",
    forms: ["exigir", "exige", "exigen", "exigió", "exigiendo"],
    contextTranslation: "Сотрудники требуют лучших условий.",
    collocations: ["exigir responsabilidades", "exigir el cumplimiento de"],
    usageNote:
      "Exigir сильнее, чем pedir: оно предполагает право требовать. Перед придаточным требует subjuntivo: exigen que se cumpla el acuerdo.",
    register: "нейтрально-формальный",
  },
  "v-b2-2": {
    partOfSpeech: "глагол",
    forms: ["fomentar", "fomenta", "fomentan", "fomentó", "fomentando"],
    contextTranslation:
      "Правительство хочет способствовать развитию сельского туризма.",
    collocations: ["fomentar el empleo", "fomentar la participación"],
    usageNote:
      "Fomentar означает целенаправленно поощрять и развивать явление; в этом значении оно не заменяется на ayudar.",
    register: "формальный, публицистический",
  },
  "v-b2-3": {
    partOfSpeech: "глагол",
    forms: [
      "desempeñar",
      "desempeña",
      "desempeñan",
      "desempeñó",
      "desempeñando",
    ],
    contextTranslation: "Он играет ключевую роль в компании.",
    collocations: ["desempeñar un papel", "desempeñar un cargo"],
    usageNote:
      "Чаще всего употребляется с papel, función или cargo; «выполнять задачу» в быту — realizar или hacer.",
    register: "формальный",
  },
  "v-b2-4": {
    partOfSpeech: "глагол",
    forms: ["abarcar", "abarca", "abarcan", "abarcó", "abarcando"],
    contextTranslation: "Проект охватывает несколько стран.",
    collocations: ["abarcar un período", "abarcar varios temas"],
    usageNote:
      "Abarcar описывает охват по объёму, территории или времени; в перфекте пишется abarqué из-за чередования c/qu.",
    register: "нейтрально-формальный",
  },
  "v-b2-5": {
    partOfSpeech: "глагол",
    forms: ["plantear", "plantea", "plantean", "planteó", "planteando"],
    contextTranslation: "В докладе поставлено несколько важных вопросов.",
    collocations: ["plantear un problema", "plantearse una duda"],
    usageNote:
      "Plantear — вынести вопрос на обсуждение; возвратное plantearse означает «задуматься о чём-то» самому.",
    register: "нейтрально-формальный",
  },
  "v-b2-6": {
    partOfSpeech: "глагол",
    forms: ["destacar", "destaca", "destacan", "destacó", "destacando"],
    contextTranslation: "Я хочу подчеркнуть важность этой темы.",
    collocations: ["destacar la importancia", "destacar entre los demás"],
    usageNote:
      "С прямым дополнением значит «подчеркнуть», без дополнения — «выделяться»: destaca entre sus compañeros.",
    register: "нейтральный",
  },
  "v-b2-7": {
    partOfSpeech: "глагол",
    forms: ["carecer", "carece", "carecen", "careció", "careciendo"],
    contextTranslation: "В регионе не хватает базовых ресурсов.",
    collocations: ["carecer de sentido", "carecer de recursos"],
    usageNote:
      "Всегда употребляется с предлогом de и близко к no tener, но звучит книжнее.",
    register: "формальный",
  },
  "v-b2-8": {
    partOfSpeech: "глагол",
    forms: ["suscitar", "suscita", "suscitan", "suscitó", "suscitando"],
    contextTranslation: "Новость вызвала много споров.",
    collocations: ["suscitar interés", "suscitar polémica"],
    usageNote:
      "Suscitar сочетается с абстрактными существительными: interés, dudas, polémica. О физической реакции говорят provocar или causar.",
    register: "формальный, публицистический",
  },
  "v-b2-9": {
    partOfSpeech: "существительное",
    gender: "мужской",
    forms: ["el ámbito", "los ámbitos"],
    contextTranslation: "Он работает в сфере образования.",
    collocations: ["en el ámbito laboral", "el ámbito de aplicación"],
    usageNote:
      "Ámbito обозначает область деятельности или действия нормы; о профессиональной отрасли чаще говорят sector.",
    register: "формальный",
  },
  "v-b2-10": {
    partOfSpeech: "прилагательное",
    forms: ["rentable", "rentables"],
    contextTranslation: "Новая бизнес-модель очень рентабельна.",
    collocations: ["un negocio rentable", "resultar rentable"],
    usageNote:
      "Форма одинакова для мужского и женского рода. Соответствующее существительное — la rentabilidad.",
    register: "нейтрально-деловой",
  },
  "v-b2-11": {
    partOfSpeech: "прилагательное",
    forms: ["imprescindible", "imprescindibles"],
    contextTranslation: "Вода необходима для жизни.",
    collocations: ["resultar imprescindible", "un requisito imprescindible"],
    usageNote:
      "Означает «то, без чего нельзя обойтись». После es imprescindible que ставится subjuntivo: es imprescindible que vengas.",
    register: "нейтральный",
  },
  "v-b2-12": {
    partOfSpeech: "глагол",
    forms: ["matizar", "matiza", "matizan", "matizó", "matizando"],
    contextTranslation: "Я хочу уточнить то, что сказал раньше.",
    collocations: ["matizar una afirmación", "matizar sus palabras"],
    usageNote:
      "Matizar — не исправить ошибку, а добавить оттенок и смягчить сказанное; в perfecto simple пишется maticé.",
    register: "формальный",
  },
  "v-b2-13": {
    partOfSpeech: "глагол",
    forms: ["constatar", "constata", "constatan", "constató", "constatando"],
    contextTranslation: "Исследователи констатировали значительный рост.",
    collocations: ["constatar un hecho", "constatar la existencia de"],
    usageNote:
      "Употребляется, когда факт подтверждён наблюдением или данными; в разговорной речи чаще comprobar.",
    register: "формальный, научный",
  },
  "v-b2-14": {
    partOfSpeech: "существительное",
    gender: "женский",
    forms: ["la índole", "las índoles"],
    contextTranslation: "Это проблема экономического характера.",
    collocations: ["de índole personal", "de toda índole"],
    usageNote:
      "Почти всегда встречается в обороте de + índole + прилагательное, согласованное в женском роде: de índole económica.",
    register: "формальный",
  },
};

export const b2Vocabulary = b2VocabularyBase.map((card) => ({
  ...card,
  ...b2VocabularyDetails[card.id],
})) satisfies VocabularyCard[];
