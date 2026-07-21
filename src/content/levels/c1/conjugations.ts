import type { ConjugationCard } from "../../types";

const c1ConjugationsBase = [
  {
    id: "cj-c1-1",
    level: "C1",
    verb: "hablar",
    verbMeaning: "говорить",
    tense: "condicional-compuesto",
    tenseLabel: "Condicional compuesto",
    forms: [
      "habría hablado",
      "habrías hablado",
      "habría hablado",
      "habríamos hablado",
      "habríais hablado",
      "habrían hablado",
    ],
    example: {
      es: "Yo habría hablado con él si hubiera tenido la oportunidad.",
      ru: "Я бы поговорил с ним, если бы у меня была возможность.",
    },
    revision: 1,
  },
  {
    id: "cj-c1-2",
    level: "C1",
    verb: "tener",
    verbMeaning: "иметь",
    tense: "subj-pluscuamperfecto",
    tenseLabel: "Subjuntivo pluscuamperfecto",
    forms: [
      "hubiera tenido",
      "hubieras tenido",
      "hubiera tenido",
      "hubiéramos tenido",
      "hubierais tenido",
      "hubieran tenido",
    ],
    example: {
      es: "Ojalá hubiera tenido más paciencia entonces.",
      ru: "Хоть бы у меня тогда было больше терпения.",
    },
    revision: 1,
  },
  {
    id: "cj-c1-3",
    level: "C1",
    verb: "ir",
    verbMeaning: "идти, ехать",
    tense: "condicional-compuesto",
    tenseLabel: "Condicional compuesto",
    forms: [
      "habría ido",
      "habrías ido",
      "habría ido",
      "habríamos ido",
      "habríais ido",
      "habrían ido",
    ],
    example: {
      es: "Habríamos ido a la playa si hubiera hecho sol.",
      ru: "Мы бы поехали на пляж, если бы было солнечно.",
    },
    revision: 1,
  },
  {
    id: "cj-c1-4",
    level: "C1",
    verb: "ser",
    verbMeaning: "быть",
    tense: "subj-pluscuamperfecto",
    tenseLabel: "Subjuntivo pluscuamperfecto",
    forms: [
      "hubiera sido",
      "hubieras sido",
      "hubiera sido",
      "hubiéramos sido",
      "hubierais sido",
      "hubieran sido",
    ],
    example: {
      es: "Si hubiera sido más valiente, habría aceptado el reto.",
      ru: "Если бы я был смелее, я бы принял вызов.",
    },
    revision: 1,
  },
  {
    id: "cj-c1-5",
    level: "C1",
    verb: "poder",
    verbMeaning: "мочь",
    tense: "condicional-compuesto",
    tenseLabel: "Condicional compuesto",
    forms: [
      "habría podido",
      "habrías podido",
      "habría podido",
      "habríamos podido",
      "habríais podido",
      "habrían podido",
    ],
    example: {
      es: "Habría podido terminar antes si me hubieran ayudado.",
      ru: "Я бы смог закончить раньше, если бы мне помогли.",
    },
    revision: 1,
  },
  {
    id: "cj-c1-6",
    level: "C1",
    verb: "comer",
    verbMeaning: "есть, кушать",
    tense: "subj-pluscuamperfecto",
    tenseLabel: "Subjuntivo pluscuamperfecto",
    forms: [
      "hubiera comido",
      "hubieras comido",
      "hubiera comido",
      "hubiéramos comido",
      "hubierais comido",
      "hubieran comido",
    ],
    example: {
      es: "Dudaba que hubieran comido algo tan raro.",
      ru: "Он сомневался, что они ели что-то настолько странное.",
    },
    revision: 1,
  },
] satisfies ConjugationCard[];

const c1ConjugationDetails: Record<
  string,
  Pick<
    ConjugationCard,
    "formationRule" | "irregularity" | "markers" | "examples" | "commonMistakes"
  >
> = {
  "cj-c1-1": {
    formationRule:
      "Спрягите haber в condicional (habría, habrías, habría, habríamos, habríais, habrían) и добавьте неизменяемое причастие hablado.",
    irregularity:
      "Основа haber в condicional неправильная — habr-; сам глагол hablar остаётся правильным.",
    markers: [
      "si + pluscuamperfecto de subjuntivo",
      "en tu lugar",
      "de haberlo sabido",
    ],
    examples: [
      {
        es: "En tu lugar, yo habría hablado con el director.",
        ru: "На твоём месте я бы поговорил с директором.",
      },
      {
        es: "De haberlo sabido, habríamos hablado antes.",
        ru: "Знай мы об этом, мы бы поговорили раньше.",
      },
    ],
    commonMistakes: [
      "Не образуйте habería: правильная основа condicional — habr-.",
      "В главной части нереального условия нужен condicional compuesto, а не hubiera hablado.",
    ],
  },
  "cj-c1-2": {
    formationRule:
      "Спрягите haber в imperfecto de subjuntivo (hubiera или hubiese) и добавьте причастие tenido.",
    irregularity:
      "Ряд hubiese tenido полностью равноправен ряду hubiera tenido; причастие tenido правильное.",
    markers: ["ojalá", "no creía que", "si"],
    examples: [
      {
        es: "No creía que hubieran tenido tiempo de avisarnos.",
        ru: "Я не верил, что у них было время нас предупредить.",
      },
      {
        es: "Si hubiéramos tenido más datos, la decisión habría sido otra.",
        ru: "Если бы у нас было больше данных, решение было бы другим.",
      },
    ],
    commonMistakes: [
      "Не смешивайте ряды в одном предложении: hubiera tenido или hubiese tenido, но не оба сразу.",
      "После ojalá о прошлом нужен pluscuamperfecto, а не imperfecto: hubiera tenido, не tuviera.",
    ],
  },
  "cj-c1-3": {
    formationRule:
      "Haber в condicional + причастие ido: habría ido, habrías ido, habría ido…",
    irregularity:
      "Ir образует правильное причастие ido; неправильна только основа habr-.",
    markers: ["si", "con más tiempo", "de otro modo"],
    examples: [
      {
        es: "Con más tiempo habríamos ido al museo.",
        ru: "Будь у нас больше времени, мы бы сходили в музей.",
      },
      {
        es: "¿Habrías ido tú en mi lugar?",
        ru: "А ты бы пошёл на моём месте?",
      },
    ],
    commonMistakes: [
      "Не заменяйте habría ido на iría: речь о неосуществлённой возможности в прошлом.",
    ],
  },
  "cj-c1-4": {
    formationRule:
      "Haber в imperfecto de subjuntivo + причастие sido: hubiera sido, hubieras sido…",
    irregularity:
      "Ser образует причастие sido; в форме nosotros ударение графическое: hubiéramos sido.",
    markers: ["si", "como si", "ojalá"],
    examples: [
      {
        es: "Ojalá hubiera sido más claro desde el principio.",
        ru: "Жаль, что я не был яснее с самого начала.",
      },
      {
        es: "Actuó como si nada hubiera sido importante.",
        ru: "Он вёл себя так, будто ничего не было важно.",
      },
    ],
    commonMistakes: [
      "После como si о более раннем прошлом нужен именно pluscuamperfecto: como si hubiera sido.",
    ],
  },
  "cj-c1-5": {
    formationRule:
      "Haber в condicional + причастие podido: habría podido, habrías podido…",
    irregularity:
      "Причастие podido правильное; в разговорной речи вместо habría podido часто звучит podría haber.",
    markers: ["si", "de haber", "con ayuda"],
    examples: [
      {
        es: "Habríamos podido evitar el retraso.",
        ru: "Мы могли бы избежать задержки.",
      },
      {
        es: "De haber salido antes, habrías podido llegar a tiempo.",
        ru: "Выйди ты раньше, ты бы успел вовремя.",
      },
    ],
    commonMistakes: [
      "Podría haber terminado и habría podido terminar равнозначны, но их не смешивают в одну форму.",
    ],
  },
  "cj-c1-6": {
    formationRule:
      "Haber в imperfecto de subjuntivo + причастие comido: hubiera comido, hubieras comido…",
    irregularity:
      "Comer образует правильное причастие comido; вспомогательный глагол несёт лицо и наклонение.",
    markers: ["dudaba que", "me extrañó que", "antes de que"],
    examples: [
      {
        es: "Me extrañó que no hubieran comido nada.",
        ru: "Меня удивило, что они ничего не поели.",
      },
      {
        es: "Se fue antes de que hubiéramos comido el postre.",
        ru: "Он ушёл раньше, чем мы съели десерт.",
      },
    ],
    commonMistakes: [
      "После прошедшей главной части нельзя ставить presente de subjuntivo: hubieran comido, а не hayan comido.",
    ],
  },
};

export const c1Conjugations = c1ConjugationsBase.map((card) => ({
  ...card,
  ...c1ConjugationDetails[card.id],
})) satisfies ConjugationCard[];
