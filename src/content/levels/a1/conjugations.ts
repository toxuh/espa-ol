import type { ConjugationCard } from "../../types";

const a1ConjugationsBase = [
  {
    id: "cj-a1-1",
    level: "A1",
    verb: "hablar",
    verbMeaning: "говорить",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: ["hablo", "hablas", "habla", "hablamos", "habláis", "hablan"],
    example: {
      es: "Ella habla tres idiomas.",
      ru: "Она говорит на трёх языках.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-2",
    level: "A1",
    verb: "comer",
    verbMeaning: "есть, кушать",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: ["como", "comes", "come", "comemos", "coméis", "comen"],
    example: {
      es: "Nosotros comemos paella los domingos.",
      ru: "Мы едим паэлью по воскресеньям.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-3",
    level: "A1",
    verb: "vivir",
    verbMeaning: "жить",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: ["vivo", "vives", "vive", "vivimos", "vivís", "viven"],
    example: {
      es: "Ellos viven en las afueras de la ciudad.",
      ru: "Они живут на окраине города.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-4",
    level: "A1",
    verb: "ser",
    verbMeaning: "быть",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: ["soy", "eres", "es", "somos", "sois", "son"],
    example: {
      es: "Tú eres muy simpático.",
      ru: "Ты очень симпатичный.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-5",
    level: "A1",
    verb: "tener",
    verbMeaning: "иметь",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"],
    example: {
      es: "Yo tengo dos hermanos.",
      ru: "У меня два брата.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-6",
    level: "A1",
    verb: "ir",
    verbMeaning: "идти, ехать",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: ["voy", "vas", "va", "vamos", "vais", "van"],
    example: {
      es: "Nosotros vamos al cine los viernes.",
      ru: "Мы ходим в кино по пятницам.",
    },
    revision: 1,
  },
] satisfies ConjugationCard[];

const a1ConjugationDetails: Record<
  string,
  Pick<
    ConjugationCard,
    "formationRule" | "irregularity" | "markers" | "examples" | "commonMistakes"
  >
> = {
  "cj-a1-1": {
    formationRule:
      "Уберите -ar и добавьте окончания -o, -as, -a, -amos, -áis, -an.",
    irregularity: "Правильный глагол; основа habl- не меняется.",
    markers: ["todos los días", "normalmente", "siempre"],
    examples: [
      { es: "Hablo español en casa.", ru: "Я говорю по-испански дома." },
      { es: "Mis amigos hablan mucho.", ru: "Мои друзья много разговаривают." },
    ],
    commonMistakes: ["Форма vosotros сохраняет ударение: habláis."],
  },
  "cj-a1-2": {
    formationRule:
      "Уберите -er и добавьте окончания -o, -es, -e, -emos, -éis, -en.",
    irregularity: "Правильный глагол; основа com- не меняется.",
    markers: ["cada día", "a menudo", "los domingos"],
    examples: [
      { es: "Como fruta cada día.", ru: "Я ем фрукты каждый день." },
      { es: "¿Coméis en casa?", ru: "Вы едите дома?" },
    ],
    commonMistakes: ["Для tú используется comes, а не comas по модели -ar."],
  },
  "cj-a1-3": {
    formationRule:
      "Уберите -ir и добавьте окончания -o, -es, -e, -imos, -ís, -en.",
    irregularity: "Правильный глагол; основа viv- не меняется.",
    markers: ["ahora", "actualmente", "desde 2025"],
    examples: [
      { es: "Vivimos cerca del centro.", ru: "Мы живём недалеко от центра." },
      { es: "Ella vive con su familia.", ru: "Она живёт со своей семьёй." },
    ],
    commonMistakes: [
      "Не смешивайте nosotros у -er и -ir: vivimos, но comemos.",
    ],
  },
  "cj-a1-4": {
    formationRule:
      "Все шесть форм образуются нерегулярно и запоминаются целиком.",
    irregularity:
      "soy, eres, es, somos, sois, son — общей основы во всех формах нет.",
    markers: ["hoy", "siempre", "de + lugar"],
    examples: [
      { es: "Soy de Madrid.", ru: "Я из Мадрида." },
      { es: "Somos una familia grande.", ru: "Мы большая семья." },
    ],
    commonMistakes: ["Не образуйте регулярную форму yo sero; правильно soy."],
  },
  "cj-a1-5": {
    formationRule:
      "Используйте окончания глаголов на -er, но запомните изменение основы в части форм.",
    irregularity: "yo: tengo; tú/él/ellos: tien-; nosotros/vosotros: ten-.",
    markers: ["tener ... años", "tener que", "tener hambre"],
    examples: [
      { es: "Tengo veinticinco años.", ru: "Мне двадцать пять лет." },
      { es: "Tenemos que trabajar.", ru: "Нам нужно работать." },
    ],
    commonMistakes: ["Возраст выражается tener, а не ser."],
  },
  "cj-a1-6": {
    formationRule: "Формы ir в presente запоминаются как отдельная парадигма.",
    irregularity:
      "voy, vas, va, vamos, vais, van — инфинитивная основа ir- не сохраняется.",
    markers: ["ir a + место", "ir a + infinitivo", "mañana"],
    examples: [
      { es: "Voy al trabajo en metro.", ru: "Я еду на работу на метро." },
      { es: "Van a estudiar mañana.", ru: "Они собираются учиться завтра." },
    ],
    commonMistakes: ["В ближайшем будущем не пропускайте a: voy a estudiar."],
  },
};

export const a1Conjugations = a1ConjugationsBase.map((card) => ({
  ...card,
  ...a1ConjugationDetails[card.id],
})) satisfies ConjugationCard[];
