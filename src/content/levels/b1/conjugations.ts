import type { ConjugationCard } from "../../types";

const b1ConjugationsBase = [
  {
    id: "cj-b1-1",
    level: "B1",
    verb: "hablar",
    verbMeaning: "говорить",
    tense: "subj-presente",
    tenseLabel: "Subjuntivo presente",
    forms: ["hable", "hables", "hable", "hablemos", "habléis", "hablen"],
    example: {
      es: "Espero que hables con ella pronto.",
      ru: "Надеюсь, ты скоро поговоришь с ней.",
    },
    revision: 1,
  },
  {
    id: "cj-b1-2",
    level: "B1",
    verb: "tener",
    verbMeaning: "иметь",
    tense: "condicional",
    tenseLabel: "Condicional simple",
    forms: [
      "tendría",
      "tendrías",
      "tendría",
      "tendríamos",
      "tendríais",
      "tendrían",
    ],
    example: {
      es: "Yo tendría más tiempo si no trabajara tanto.",
      ru: "У меня было бы больше времени, если бы я не работал так много.",
    },
    revision: 1,
  },
  {
    id: "cj-b1-3",
    level: "B1",
    verb: "comer",
    verbMeaning: "есть, кушать",
    tense: "pret-perfecto",
    tenseLabel: "Pretérito perfecto compuesto",
    forms: [
      "he comido",
      "has comido",
      "ha comido",
      "hemos comido",
      "habéis comido",
      "han comido",
    ],
    example: {
      es: "Hoy no he comido nada todavía.",
      ru: "Сегодня я ещё ничего не ел.",
    },
    revision: 1,
  },
  {
    id: "cj-b1-4",
    level: "B1",
    verb: "ser",
    verbMeaning: "быть",
    tense: "subj-presente",
    tenseLabel: "Subjuntivo presente",
    forms: ["sea", "seas", "sea", "seamos", "seáis", "sean"],
    example: {
      es: "Ojalá el examen sea fácil.",
      ru: "Хоть бы экзамен оказался лёгким.",
    },
    revision: 1,
  },
  {
    id: "cj-b1-5",
    level: "B1",
    verb: "poder",
    verbMeaning: "мочь",
    tense: "condicional",
    tenseLabel: "Condicional simple",
    forms: ["podría", "podrías", "podría", "podríamos", "podríais", "podrían"],
    example: {
      es: "¿Podrías ayudarme con esto?",
      ru: "Не мог бы ты помочь мне с этим?",
    },
    revision: 1,
  },
  {
    id: "cj-b1-6",
    level: "B1",
    verb: "vivir",
    verbMeaning: "жить",
    tense: "pret-perfecto",
    tenseLabel: "Pretérito perfecto compuesto",
    forms: [
      "he vivido",
      "has vivido",
      "ha vivido",
      "hemos vivido",
      "habéis vivido",
      "han vivido",
    ],
    example: {
      es: "¿Alguna vez has vivido en el extranjero?",
      ru: "Ты когда-нибудь жил за границей?",
    },
    revision: 1,
  },
] satisfies ConjugationCard[];

const b1ConjugationDetails: Record<
  string,
  Pick<
    ConjugationCard,
    "formationRule" | "irregularity" | "markers" | "examples" | "commonMistakes"
  >
> = {
  "cj-b1-1": {
    formationRule:
      "Возьмите форму yo presente hablo, уберите -o и добавьте окончания subjuntivo для -ar: -e, -es, -e, -emos, -éis, -en.",
    irregularity:
      "Правильный глагол; основа habl- сохраняется, а окончание меняется на ряд -e.",
    markers: ["quiero que", "espero que", "es importante que"],
    examples: [
      {
        es: "Es importante que hablemos hoy.",
        ru: "Важно, чтобы мы поговорили сегодня.",
      },
      {
        es: "No creo que ellos hablen de eso.",
        ru: "Не думаю, что они говорят об этом.",
      },
    ],
    commonMistakes: [
      "После quiero que не используйте indicativo hablas, если субъекты главной и придаточной частей различаются.",
    ],
  },
  "cj-b1-2": {
    formationRule:
      "Добавьте окончания condicional -ía, -ías, -ía, -íamos, -íais, -ían к неправильной основе tendr-.",
    irregularity:
      "Tener теряет гласную e и получает вставку d: tener → tendr-, как и в futuro simple.",
    markers: ["en tu lugar", "yo que tú", "si pudiera"],
    examples: [
      {
        es: "Tendríamos más espacio en otra casa.",
        ru: "В другом доме у нас было бы больше места.",
      },
      {
        es: "¿Tendrías tiempo para hablar mañana?",
        ru: "У тебя было бы время поговорить завтра?",
      },
    ],
    commonMistakes: [
      "Не образуйте tenería: правильная основа condicional — tendr-.",
    ],
  },
  "cj-b1-3": {
    formationRule:
      "Спрягите haber в presente и добавьте неизменяемое причастие comido: he, has, ha, hemos, habéis, han + comido.",
    irregularity:
      "Comer образует правильное причастие на -ido; оно не согласуется с родом или числом подлежащего.",
    markers: ["hoy", "esta semana", "todavía no"],
    examples: [
      {
        es: "Esta semana hemos comido fuera.",
        ru: "На этой неделе мы ели вне дома.",
      },
      { es: "¿Has comido ya?", ru: "Ты уже поел?" },
    ],
    commonMistakes: [
      "Не ставьте причастие во множественное число: ellas han comido, не han comidas.",
    ],
  },
  "cj-b1-4": {
    formationRule:
      "Формы presente de subjuntivo глагола ser нужно запомнить целиком: sea, seas, sea, seamos, seáis, sean.",
    irregularity:
      "Ser полностью меняет основу; только форма seáis имеет графическое ударение.",
    markers: ["ojalá", "no creo que", "es posible que"],
    examples: [
      { es: "No creo que sea verdad.", ru: "Не думаю, что это правда." },
      { es: "Es posible que sean vecinos.", ru: "Возможно, они соседи." },
    ],
    commonMistakes: [
      "После выражения сомнения нужна форма sea, а es сообщает о факте.",
    ],
  },
  "cj-b1-5": {
    formationRule:
      "Добавьте окончания condicional -ía, -ías, -ía, -íamos, -íais, -ían к неправильной основе podr-.",
    irregularity:
      "Poder теряет гласную e: poder → podr-. Та же основа используется в futuro: podré.",
    markers: ["en tu lugar", "¿podrías...?", "si tuviera"],
    examples: [
      { es: "Podríamos ir en tren.", ru: "Мы могли бы поехать на поезде." },
      {
        es: "¿Podrían repetir la pregunta?",
        ru: "Не могли бы Вы повторить вопрос?",
      },
    ],
    commonMistakes: [
      "Не используйте podería и не забывайте ударение в окончаниях podría, podríamos.",
    ],
  },
  "cj-b1-6": {
    formationRule:
      "Спрягите haber в presente и добавьте правильное причастие vivido: he, has, ha, hemos, habéis, han + vivido.",
    irregularity:
      "Vivir образует правильное причастие на -ido; вспомогательный haber несёт лицо и число.",
    markers: ["alguna vez", "nunca", "hasta ahora"],
    examples: [
      {
        es: "Nunca hemos vivido tan lejos.",
        ru: "Мы никогда не жили так далеко.",
      },
      {
        es: "Han vivido aquí desde enero.",
        ru: "Они живут здесь с января.",
      },
    ],
    commonMistakes: [
      "Не заменяйте haber глаголом tener: he vivido, не tengo vivido.",
    ],
  },
};

export const b1Conjugations = b1ConjugationsBase.map((card) => ({
  ...card,
  ...b1ConjugationDetails[card.id],
})) satisfies ConjugationCard[];
