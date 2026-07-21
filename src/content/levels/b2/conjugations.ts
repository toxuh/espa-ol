import type { ConjugationCard } from "../../types";

const b2ConjugationsBase = [
  {
    id: "cj-b2-1",
    level: "B2",
    verb: "hablar",
    verbMeaning: "говорить",
    tense: "subj-imperfecto",
    tenseLabel: "Subjuntivo imperfecto",
    forms: [
      "hablara",
      "hablaras",
      "hablara",
      "habláramos",
      "hablarais",
      "hablaran",
    ],
    example: {
      es: "Si hablaras español mejor, conseguirías ese trabajo.",
      ru: "Если бы ты говорил по-испански лучше, ты бы получил эту работу.",
    },
    revision: 1,
  },
  {
    id: "cj-b2-2",
    level: "B2",
    verb: "tener",
    verbMeaning: "иметь",
    tense: "pluscuamperfecto",
    tenseLabel: "Pluscuamperfecto de indicativo",
    forms: [
      "había tenido",
      "habías tenido",
      "había tenido",
      "habíamos tenido",
      "habíais tenido",
      "habían tenido",
    ],
    example: {
      es: "Cuando llegamos, ya habían tenido la reunión.",
      ru: "Когда мы приехали, у них уже была встреча.",
    },
    revision: 1,
  },
  {
    id: "cj-b2-3",
    level: "B2",
    verb: "ir",
    verbMeaning: "идти, ехать",
    tense: "subj-imperfecto",
    tenseLabel: "Subjuntivo imperfecto",
    forms: ["fuera", "fueras", "fuera", "fuéramos", "fuerais", "fueran"],
    example: {
      es: "Quería que fuéramos juntos a la fiesta.",
      ru: "Я хотел, чтобы мы пошли на вечеринку вместе.",
    },
    revision: 1,
  },
  {
    id: "cj-b2-4",
    level: "B2",
    verb: "comer",
    verbMeaning: "есть, кушать",
    tense: "futuro-compuesto",
    tenseLabel: "Futuro compuesto",
    forms: [
      "habré comido",
      "habrás comido",
      "habrá comido",
      "habremos comido",
      "habréis comido",
      "habrán comido",
    ],
    example: {
      es: "Para las ocho, ya habremos comido.",
      ru: "К восьми мы уже поедим.",
    },
    revision: 1,
  },
  {
    id: "cj-b2-5",
    level: "B2",
    verb: "ser",
    verbMeaning: "быть",
    tense: "pluscuamperfecto",
    tenseLabel: "Pluscuamperfecto de indicativo",
    forms: [
      "había sido",
      "habías sido",
      "había sido",
      "habíamos sido",
      "habíais sido",
      "habían sido",
    ],
    example: {
      es: "Antes de mudarse, había sido profesor durante diez años.",
      ru: "До переезда он был учителем десять лет.",
    },
    revision: 1,
  },
  {
    id: "cj-b2-6",
    level: "B2",
    verb: "poder",
    verbMeaning: "мочь",
    tense: "subj-imperfecto",
    tenseLabel: "Subjuntivo imperfecto",
    forms: [
      "pudiera",
      "pudieras",
      "pudiera",
      "pudiéramos",
      "pudierais",
      "pudieran",
    ],
    example: {
      es: "Ojalá pudiera viajar más a menudo.",
      ru: "Хоть бы я мог путешествовать чаще.",
    },
    revision: 1,
  },
] satisfies ConjugationCard[];

const b2ConjugationDetails: Record<
  string,
  Pick<
    ConjugationCard,
    "formationRule" | "irregularity" | "markers" | "examples" | "commonMistakes"
  >
> = {
  "cj-b2-1": {
    formationRule:
      "Возьмите форму ellos в indefinido hablaron, уберите -ron и добавьте -ra, -ras, -ra, -ramos, -rais, -ran.",
    irregularity:
      "Правильный глагол; параллельный ряд на -se (hablase, hablases) равноправен и чаще встречается в Испании в письменной речи.",
    markers: ["si + condicional", "quería que", "ojalá"],
    examples: [
      {
        es: "Si hablara con el jefe, se lo explicaría todo.",
        ru: "Если бы я поговорил с начальником, я бы всё ему объяснил.",
      },
      {
        es: "Nos pidió que habláramos más despacio.",
        ru: "Он попросил нас говорить медленнее.",
      },
    ],
    commonMistakes: [
      "В форме nosotros ударение графическое: habláramos, а не hablaramos.",
      "После si в нереальном условии не ставится condicional: si hablara, не si hablaría.",
    ],
  },
  "cj-b2-2": {
    formationRule:
      "Спрягите haber в imperfecto (había, habías, había, habíamos, habíais, habían) и добавьте неизменяемое причастие tenido.",
    irregularity:
      "Tener образует правильное причастие tenido; неправильна только основа haber, а не сам глагол.",
    markers: ["cuando llegué", "antes de", "ya"],
    examples: [
      {
        es: "Ya habíamos tenido esa conversación antes.",
        ru: "Этот разговор у нас уже был раньше.",
      },
      {
        es: "Nunca había tenido tanto trabajo.",
        ru: "У меня никогда не было столько работы.",
      },
    ],
    commonMistakes: [
      "Не путайте había tenido с tenía: pluscuamperfecto показывает действие до другого прошедшего момента.",
    ],
  },
  "cj-b2-3": {
    formationRule:
      "От формы ellos в indefinido fueron уберите -ron и добавьте окончания -ra: fuera, fueras, fuera, fuéramos, fuerais, fueran.",
    irregularity:
      "Ir и ser имеют одинаковые формы imperfecto de subjuntivo; различает их только контекст.",
    markers: ["quería que", "si", "como si"],
    examples: [
      {
        es: "Si fuera contigo, llegaríamos antes.",
        ru: "Если бы я поехал с тобой, мы бы приехали раньше.",
      },
      {
        es: "Me habla como si fuera su jefe.",
        ru: "Он говорит со мной так, будто он мой начальник.",
      },
    ],
    commonMistakes: [
      "После como si всегда нужен imperfecto или pluscuamperfecto de subjuntivo, а не presente.",
    ],
  },
  "cj-b2-4": {
    formationRule:
      "Спрягите haber в futuro simple (habré, habrás, habrá, habremos, habréis, habrán) и добавьте причастие comido.",
    irregularity:
      "У haber в futuro неправильная основа habr-; причастие comido правильное и не согласуется.",
    markers: ["para las ocho", "dentro de dos horas", "cuando llegues"],
    examples: [
      {
        es: "Cuando llegues, ya habré comido.",
        ru: "Когда ты придёшь, я уже поем.",
      },
      {
        es: "Para el viernes habrán comido en todos los restaurantes del barrio.",
        ru: "К пятнице они поедят во всех ресторанах района.",
      },
    ],
    commonMistakes: [
      "Не образуйте haberé: правильная основа futuro — habr-.",
      "Futuro compuesto называет момент завершения, поэтому нужен ориентир para las ocho или cuando llegues.",
    ],
  },
  "cj-b2-5": {
    formationRule:
      "Спрягите haber в imperfecto и добавьте правильное причастие sido: había sido, habías sido, había sido…",
    irregularity:
      "Ser образует причастие sido без изменения основы; лицо и число несёт только haber.",
    markers: ["antes de", "hasta entonces", "nunca"],
    examples: [
      {
        es: "Hasta entonces nunca había sido tan feliz.",
        ru: "До того момента я никогда не был так счастлив.",
      },
      {
        es: "La casa había sido de sus abuelos.",
        ru: "Дом раньше принадлежал её бабушке и дедушке.",
      },
    ],
    commonMistakes: [
      "Había sido описывает состояние до другого прошедшего момента, а era — фон того же момента.",
    ],
  },
  "cj-b2-6": {
    formationRule:
      "От формы ellos в indefinido pudieron уберите -ron и добавьте -ra: pudiera, pudieras, pudiera, pudiéramos, pudierais, pudieran.",
    irregularity:
      "Изменение основы pod- → pud- приходит из indefinido и сохраняется во всех шести формах.",
    markers: ["ojalá", "si", "me gustaría que"],
    examples: [
      {
        es: "Si pudiéramos, nos quedaríamos una semana más.",
        ru: "Если бы мы могли, мы остались бы ещё на неделю.",
      },
      {
        es: "Me gustaría que pudieras venir.",
        ru: "Мне бы хотелось, чтобы ты смог прийти.",
      },
    ],
    commonMistakes: [
      "Не используйте podiera: основа берётся из pudieron, а не из инфинитива.",
    ],
  },
};

export const b2Conjugations = b2ConjugationsBase.map((card) => ({
  ...card,
  ...b2ConjugationDetails[card.id],
})) satisfies ConjugationCard[];
