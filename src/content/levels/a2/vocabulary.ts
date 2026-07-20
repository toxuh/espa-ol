import type { VocabularyCard } from "../../types";

const a2VocabularyBase = [
  {
    id: "v-a2-1",
    level: "A2",
    word: "viaje",
    translation: "путешествие",
    accept: ["путешествие", "поездка"],
    context: "Hicimos un viaje a Italia.",
    contextTarget: "viaje",
    revision: 1,
  },
  {
    id: "v-a2-2",
    level: "A2",
    word: "recuerdo",
    translation: "воспоминание",
    accept: ["воспоминание"],
    context: "Tengo un buen recuerdo de esas vacaciones.",
    contextTarget: "recuerdo",
    revision: 1,
  },
  {
    id: "v-a2-3",
    level: "A2",
    word: "costumbre",
    translation: "привычка",
    accept: ["привычка", "обычай"],
    context: "Es una costumbre muy antigua.",
    contextTarget: "costumbre",
    revision: 1,
  },
  {
    id: "v-a2-4",
    level: "A2",
    word: "empresa",
    translation: "компания",
    accept: ["компания", "фирма", "предприятие"],
    context: "Trabaja en una empresa grande.",
    contextTarget: "empresa",
    revision: 1,
  },
  {
    id: "v-a2-5",
    level: "A2",
    word: "reunión",
    translation: "встреча",
    accept: ["встреча", "собрание"],
    context: "Tenemos una reunión a las diez.",
    contextTarget: "reunión",
    revision: 1,
  },
  {
    id: "v-a2-6",
    level: "A2",
    word: "barrio",
    translation: "район",
    accept: ["район", "квартал"],
    context: "Vivo en un barrio tranquilo.",
    contextTarget: "barrio",
    revision: 1,
  },
  {
    id: "v-a2-7",
    level: "A2",
    word: "paisaje",
    translation: "пейзаж",
    accept: ["пейзаж", "вид"],
    context: "El paisaje de la montaña es precioso.",
    contextTarget: "paisaje",
    revision: 1,
  },
  {
    id: "v-a2-8",
    level: "A2",
    word: "entrevista",
    translation: "собеседование",
    accept: ["собеседование", "интервью"],
    context: "Mañana tengo una entrevista de trabajo.",
    contextTarget: "entrevista",
    revision: 1,
  },
  {
    id: "v-a2-9",
    level: "A2",
    word: "alegría",
    translation: "радость",
    accept: ["радость"],
    context: "Sintió una gran alegría al verlos.",
    contextTarget: "alegría",
    revision: 1,
  },
  {
    id: "v-a2-10",
    level: "A2",
    word: "vergüenza",
    translation: "стыд",
    accept: ["стыд", "смущение"],
    context: "Me dio vergüenza hablar en público.",
    contextTarget: "vergüenza",
    revision: 1,
  },
  {
    id: "v-a2-11",
    level: "A2",
    word: "paciencia",
    translation: "терпение",
    accept: ["терпение"],
    context: "Hay que tener paciencia con los niños.",
    contextTarget: "paciencia",
    revision: 1,
  },
  {
    id: "v-a2-12",
    level: "A2",
    word: "costa",
    translation: "побережье",
    accept: ["побережье", "берег"],
    context: "Pasamos el verano en la costa.",
    contextTarget: "costa",
    revision: 1,
  },
  {
    id: "v-a2-13",
    level: "A2",
    word: "horario",
    translation: "расписание",
    accept: ["расписание", "график"],
    context: "¿Cuál es tu horario de trabajo?",
    contextTarget: "horario",
    revision: 1,
  },
  {
    id: "v-a2-14",
    level: "A2",
    word: "equipaje",
    translation: "багаж",
    accept: ["багаж"],
    context: "Perdí mi equipaje en el aeropuerto.",
    contextTarget: "equipaje",
    revision: 1,
  },
] satisfies VocabularyCard[];

const a2VocabularyDetails: Record<
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
  "v-a2-1": {
    partOfSpeech: "существительное",
    gender: "мужской",
    forms: ["el viaje", "los viajes"],
    contextTranslation: "Мы совершили поездку в Италию.",
    collocations: [
      "hacer un viaje",
      "viaje de negocios",
      "viaje de ida y vuelta",
    ],
    usageNote:
      "Viaje обозначает путешествие или поездку; глагол viajar употребляется без hacer.",
    register: "нейтральное",
  },
  "v-a2-2": {
    partOfSpeech: "существительное",
    gender: "мужской",
    forms: ["el recuerdo", "los recuerdos"],
    contextTranslation: "У меня осталось хорошее воспоминание об этом отпуске.",
    collocations: [
      "tener un recuerdo",
      "guardar un recuerdo",
      "un buen recuerdo",
    ],
    usageNote:
      "Recuerdo — отдельное воспоминание или памятный предмет; memoria чаще обозначает память как способность.",
    register: "нейтральное",
  },
  "v-a2-3": {
    partOfSpeech: "существительное",
    gender: "женский",
    forms: ["la costumbre", "las costumbres"],
    contextTranslation: "Это очень древний обычай.",
    collocations: [
      "tener la costumbre de",
      "perder una costumbre",
      "buenas costumbres",
    ],
    usageNote:
      "Tener la costumbre de + infinitivo означает «иметь обыкновение что-либо делать».",
    register: "нейтральное",
  },
  "v-a2-4": {
    partOfSpeech: "существительное",
    gender: "женский",
    forms: ["la empresa", "las empresas"],
    contextTranslation: "Он / она работает в крупной компании.",
    collocations: [
      "trabajar en una empresa",
      "crear una empresa",
      "empresa familiar",
    ],
    usageNote:
      "Empresa — организация или компания; compañía также возможно, но имеет и значение «общество, компания людей».",
    register: "нейтральное, деловое",
  },
  "v-a2-5": {
    partOfSpeech: "существительное",
    gender: "женский",
    forms: ["la reunión", "las reuniones"],
    contextTranslation: "У нас встреча в десять часов.",
    collocations: [
      "tener una reunión",
      "organizar una reunión",
      "reunión de trabajo",
    ],
    usageNote:
      "Reunión подходит и для рабочего собрания, и для встречи группы людей; личную встречу часто называют cita.",
    register: "нейтральное",
  },
  "v-a2-6": {
    partOfSpeech: "существительное",
    gender: "мужской",
    forms: ["el barrio", "los barrios"],
    contextTranslation: "Я живу в тихом районе.",
    collocations: [
      "vivir en un barrio",
      "barrio residencial",
      "los vecinos del barrio",
    ],
    usageNote:
      "Barrio — часть города с собственной местной идентичностью; distrito обычно является официальной административной единицей.",
    register: "нейтральное",
  },
  "v-a2-7": {
    partOfSpeech: "существительное",
    gender: "мужской",
    forms: ["el paisaje", "los paisajes"],
    contextTranslation: "Горный пейзаж прекрасен.",
    collocations: [
      "paisaje de montaña",
      "disfrutar del paisaje",
      "paisaje urbano",
    ],
    usageNote: "Несмотря на окончание -aje, слово мужского рода: el paisaje.",
    register: "нейтральное",
  },
  "v-a2-8": {
    partOfSpeech: "существительное",
    gender: "женский",
    forms: ["la entrevista", "las entrevistas"],
    contextTranslation: "Завтра у меня собеседование.",
    collocations: [
      "entrevista de trabajo",
      "hacer una entrevista",
      "conceder una entrevista",
    ],
    usageNote:
      "Контекст уточняет значение: entrevista de trabajo — собеседование, entrevista en la prensa — интервью.",
    register: "нейтральное, деловое",
  },
  "v-a2-9": {
    partOfSpeech: "существительное",
    gender: "женский",
    forms: ["la alegría", "las alegrías"],
    contextTranslation: "Он / она почувствовал(а) большую радость, увидев их.",
    collocations: ["sentir alegría", "dar una alegría", "con alegría"],
    usageNote: "Dar una alegría a alguien означает «обрадовать кого-либо».",
    register: "нейтральное",
  },
  "v-a2-10": {
    partOfSpeech: "существительное",
    gender: "женский",
    forms: ["la vergüenza", "sinvergüenza"],
    contextTranslation: "Мне было неловко говорить на публике.",
    collocations: ["tener vergüenza", "dar vergüenza", "sentir vergüenza"],
    usageNote:
      "Me da vergüenza + infinitivo выражает смущение; tener vergüenza может также означать стыдиться.",
    register: "нейтральное",
  },
  "v-a2-11": {
    partOfSpeech: "существительное",
    gender: "женский",
    forms: ["la paciencia"],
    contextTranslation: "С детьми нужно быть терпеливым.",
    collocations: ["tener paciencia", "perder la paciencia", "con paciencia"],
    usageNote:
      "Обычно употребляется в единственном числе и часто входит в конструкцию tener paciencia con.",
    register: "нейтральное",
  },
  "v-a2-12": {
    partOfSpeech: "существительное",
    gender: "женский",
    forms: ["la costa", "las costas"],
    contextTranslation: "Мы провели лето на побережье.",
    collocations: ["en la costa", "costa mediterránea", "cerca de la costa"],
    usageNote:
      "Costa — протяжённое побережье; orilla — край воды или берег реки, озера и моря в конкретном месте.",
    register: "нейтральное",
  },
  "v-a2-13": {
    partOfSpeech: "существительное",
    gender: "мужской",
    forms: ["el horario", "los horarios"],
    contextTranslation: "Какой у тебя рабочий график?",
    collocations: [
      "horario de trabajo",
      "consultar el horario",
      "cumplir un horario",
    ],
    usageNote:
      "Horario может обозначать и таблицу времени, и режим работы; для школьного расписания также употребляется horario de clases.",
    register: "нейтральное",
  },
  "v-a2-14": {
    partOfSpeech: "существительное",
    gender: "мужской",
    forms: ["el equipaje", "los equipajes"],
    contextTranslation: "Я потерял(а) багаж в аэропорту.",
    collocations: [
      "facturar el equipaje",
      "equipaje de mano",
      "recoger el equipaje",
    ],
    usageNote:
      "В значении совокупности вещей equipaje обычно употребляется в единственном числе.",
    register: "нейтральное, туристическое",
  },
};

export const a2Vocabulary = a2VocabularyBase.map((card) => ({
  ...card,
  ...a2VocabularyDetails[card.id],
})) satisfies VocabularyCard[];
