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
  {
    id: "cj-b1-7",
    level: "B1",
    verb: "hacer",
    verbMeaning: "делать",
    tense: "futuro-simple",
    tenseLabel: "Futuro simple",
    forms: ["haré", "harás", "hará", "haremos", "haréis", "harán"],
    example: {
      es: "Mañana haré la compra por la mañana.",
      ru: "Завтра утром я схожу за покупками.",
    },
    revision: 1,
  },
  {
    id: "cj-b1-8",
    level: "B1",
    verb: "salir",
    verbMeaning: "выходить",
    tense: "futuro-simple",
    tenseLabel: "Futuro simple",
    forms: ["saldré", "saldrás", "saldrá", "saldremos", "saldréis", "saldrán"],
    example: {
      es: "El tren saldrá a las ocho en punto.",
      ru: "Поезд отправится ровно в восемь.",
    },
    revision: 1,
  },
  {
    id: "cj-b1-9",
    level: "B1",
    verb: "querer",
    verbMeaning: "хотеть",
    tense: "condicional",
    tenseLabel: "Condicional simple",
    forms: [
      "querría",
      "querrías",
      "querría",
      "querríamos",
      "querríais",
      "querrían",
    ],
    example: {
      es: "Querría reservar una mesa para dos, por favor.",
      ru: "Я хотел бы забронировать столик на двоих, пожалуйста.",
    },
    revision: 1,
  },
  {
    id: "cj-b1-10",
    level: "B1",
    verb: "decir",
    verbMeaning: "говорить, сказать",
    tense: "condicional",
    tenseLabel: "Condicional simple",
    forms: ["diría", "dirías", "diría", "diríamos", "diríais", "dirían"],
    example: {
      es: "Yo no diría eso delante de ella.",
      ru: "Я бы не сказал этого при ней.",
    },
    revision: 1,
  },
  {
    id: "cj-b1-11",
    level: "B1",
    verb: "hablar",
    verbMeaning: "говорить",
    tense: "pluscuamperfecto",
    tenseLabel: "Pretérito pluscuamperfecto",
    forms: [
      "había hablado",
      "habías hablado",
      "había hablado",
      "habíamos hablado",
      "habíais hablado",
      "habían hablado",
    ],
    example: {
      es: "Cuando llegué, ella ya había hablado con el jefe.",
      ru: "Когда я пришёл, она уже поговорила с начальником.",
    },
    revision: 1,
  },
  {
    id: "cj-b1-12",
    level: "B1",
    verb: "ver",
    verbMeaning: "видеть",
    tense: "pluscuamperfecto",
    tenseLabel: "Pretérito pluscuamperfecto",
    forms: [
      "había visto",
      "habías visto",
      "había visto",
      "habíamos visto",
      "habíais visto",
      "habían visto",
    ],
    example: {
      es: "Nunca había visto una película tan larga.",
      ru: "Я никогда не видел такого длинного фильма.",
    },
    revision: 1,
  },
  {
    id: "cj-b1-13",
    level: "B1",
    verb: "estar",
    verbMeaning: "быть, находиться",
    tense: "subj-presente",
    tenseLabel: "Subjuntivo presente",
    forms: ["esté", "estés", "esté", "estemos", "estéis", "estén"],
    example: {
      es: "Espero que estés bien.",
      ru: "Надеюсь, у тебя всё хорошо.",
    },
    revision: 1,
  },
  {
    id: "cj-b1-14",
    level: "B1",
    verb: "ir",
    verbMeaning: "идти, ехать",
    tense: "subj-presente",
    tenseLabel: "Subjuntivo presente",
    forms: ["vaya", "vayas", "vaya", "vayamos", "vayáis", "vayan"],
    example: {
      es: "Cuando vayas a Madrid, avísame.",
      ru: "Когда поедешь в Мадрид, дай мне знать.",
    },
    revision: 1,
  },
  {
    id: "cj-b1-15",
    level: "B1",
    verb: "hacer",
    verbMeaning: "делать",
    tense: "subj-presente",
    tenseLabel: "Subjuntivo presente",
    forms: ["haga", "hagas", "haga", "hagamos", "hagáis", "hagan"],
    example: {
      es: "Te aconsejo que hagas más ejercicio.",
      ru: "Советую тебе больше заниматься спортом.",
    },
    revision: 1,
  },
  {
    id: "cj-b1-16",
    level: "B1",
    verb: "tener",
    verbMeaning: "иметь",
    tense: "subj-imperfecto",
    tenseLabel: "Imperfecto de subjuntivo",
    forms: [
      "tuviera",
      "tuvieras",
      "tuviera",
      "tuviéramos",
      "tuvierais",
      "tuvieran",
    ],
    example: {
      es: "Si tuviera más dinero, viajaría más.",
      ru: "Если бы у меня было больше денег, я бы больше путешествовал.",
    },
    revision: 1,
  },
  {
    id: "cj-b1-17",
    level: "B1",
    verb: "hacer",
    verbMeaning: "делать",
    tense: "subj-imperfecto",
    tenseLabel: "Imperfecto de subjuntivo",
    forms: [
      "hiciera",
      "hicieras",
      "hiciera",
      "hiciéramos",
      "hicierais",
      "hicieran",
    ],
    example: {
      es: "Me pidió que hiciera la reserva.",
      ru: "Он попросил меня сделать бронь.",
    },
    revision: 1,
  },
  {
    id: "cj-b1-18",
    level: "B1",
    verb: "ser",
    verbMeaning: "быть",
    tense: "subj-imperfecto",
    tenseLabel: "Imperfecto de subjuntivo",
    forms: ["fuera", "fueras", "fuera", "fuéramos", "fuerais", "fueran"],
    example: {
      es: "Ojalá fuera más fácil.",
      ru: "Вот бы это было проще.",
    },
    revision: 1,
  },
  {
    id: "cj-b1-19",
    level: "B1",
    verb: "ir",
    verbMeaning: "идти, ехать",
    tense: "imperfecto",
    tenseLabel: "Pretérito imperfecto",
    forms: ["iba", "ibas", "iba", "íbamos", "ibais", "iban"],
    example: {
      es: "De niño, iba a la playa todos los veranos.",
      ru: "В детстве я каждое лето ездил на пляж.",
    },
    revision: 1,
  },
  {
    id: "cj-b1-20",
    level: "B1",
    verb: "ser",
    verbMeaning: "быть",
    tense: "imperfecto",
    tenseLabel: "Pretérito imperfecto",
    forms: ["era", "eras", "era", "éramos", "erais", "eran"],
    example: {
      es: "Antes la ciudad era mucho más tranquila.",
      ru: "Раньше город был гораздо спокойнее.",
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
  "cj-b1-7": {
    formationRule:
      "Futuro simple образуется от инфинитива + окончания -é, -ás, -á, -emos, -éis, -án. У hacer основа неправильная: har-.",
    irregularity:
      "Hacer теряет -ce- и даёт основу har-; та же основа используется в condicional (haría).",
    markers: ["mañana", "la semana que viene", "algún día"],
    examples: [
      {
        es: "Haremos una fiesta la semana que viene.",
        ru: "На следующей неделе мы устроим вечеринку.",
      },
      { es: "¿Qué harás este verano?", ru: "Что ты будешь делать этим летом?" },
    ],
    commonMistakes: [
      "Не образуйте haceré: основа futuro у hacer — har-, окончания добавляются к ней.",
    ],
  },
  "cj-b1-8": {
    formationRule:
      "К неправильной основе saldr- добавьте окончания futuro -é, -ás, -á, -emos, -éis, -án.",
    irregularity:
      "Salir теряет гласную i и получает вставку d: salir → saldr-, как poner → pondr-.",
    markers: ["luego", "esta noche", "en cuanto pueda"],
    examples: [
      { es: "Saldremos de casa a las siete.", ru: "Мы выйдем из дома в семь." },
      {
        es: "Creo que saldrá bien.",
        ru: "Думаю, всё получится (выйдет хорошо).",
      },
    ],
    commonMistakes: [
      "Не используйте saliré: правильная основа futuro — saldr-.",
    ],
  },
  "cj-b1-9": {
    formationRule:
      "Condicional: неправильная основа querr- + окончания -ía, -ías, -ía, -íamos, -íais, -ían.",
    irregularity:
      "Querer теряет гласную e основы: querer → querr-; в condicional это смягчает просьбу.",
    markers: ["por favor", "me gustaría", "en una situación ideal"],
    examples: [
      {
        es: "Querríamos hablar con el responsable.",
        ru: "Мы хотели бы поговорить с ответственным.",
      },
      {
        es: "¿Querrías venir con nosotros?",
        ru: "Ты хотел бы пойти с нами?",
      },
    ],
    commonMistakes: [
      "Различайте querría (condicional, «хотел бы») и quería (imperfecto, «хотел»).",
    ],
  },
  "cj-b1-10": {
    formationRule:
      "Condicional: неправильная основа dir- + окончания -ía, -ías, -ía, -íamos, -íais, -ían.",
    irregularity:
      "Decir даёт сокращённую основу dir-; та же основа в futuro (diré).",
    markers: ["yo que tú", "en tu lugar", "sinceramente"],
    examples: [
      {
        es: "Yo diría que sí.",
        ru: "Я бы сказал, что да.",
      },
      {
        es: "Nos dijeron que dirían la verdad.",
        ru: "Нам сказали, что они скажут правду.",
      },
    ],
    commonMistakes: [
      "Не образуйте deciría: основа condicional у decir — dir-.",
    ],
  },
  "cj-b1-11": {
    formationRule:
      "Pluscuamperfecto = imperfecto de haber (había, habías, había, habíamos, habíais, habían) + participio hablado.",
    irregularity:
      "Hablar образует правильное причастие hablado; лицо и число несёт haber.",
    markers: ["cuando llegué", "ya", "antes de eso"],
    examples: [
      {
        es: "Cuando llamaste, ya habíamos hablado del tema.",
        ru: "Когда ты позвонил, мы уже обсудили тему.",
      },
      {
        es: "No sabía que habías hablado con ellos.",
        ru: "Я не знал, что ты уже поговорил с ними.",
      },
    ],
    commonMistakes: [
      "Pluscuamperfecto (había hablado) описывает действие ДО другого прошлого, не путайте с pretérito perfecto (he hablado).",
    ],
  },
  "cj-b1-12": {
    formationRule:
      "Imperfecto de haber (había…) + причастие. У ver причастие неправильное: visto.",
    irregularity: "Ver сохраняет e основы в причастии: visto, а не vido.",
    markers: ["nunca antes", "hasta entonces", "ya"],
    examples: [
      {
        es: "Hasta ese día nunca había visto el mar.",
        ru: "До того дня я никогда не видел моря.",
      },
      {
        es: "Dijeron que ya habían visto la película.",
        ru: "Они сказали, что уже смотрели этот фильм.",
      },
    ],
    commonMistakes: ["Причастие ver — visto (неправильное), не veído."],
  },
  "cj-b1-13": {
    formationRule:
      "От формы yo presente estoy возьмите основы subjuntivo est- и добавьте окончания -e с ударением: esté, estés, esté, estemos, estéis, estén.",
    irregularity:
      "Estar в subjuntivo несёт графическое ударение в esté, estés, esté, estén.",
    markers: ["espero que", "cuando", "para que"],
    examples: [
      {
        es: "Cuando estés listo, empezamos.",
        ru: "Когда будешь готов, начнём.",
      },
      {
        es: "Es raro que no estén en casa.",
        ru: "Странно, что их нет дома.",
      },
    ],
    commonMistakes: [
      "Не забывайте ударение: esté, estés, estén, иначе форма выглядит как presente indicativo.",
    ],
  },
  "cj-b1-14": {
    formationRule:
      "Presente de subjuntivo глагола ir нужно запомнить: vaya, vayas, vaya, vayamos, vayáis, vayan.",
    irregularity:
      "Ir полностью меняет основу на vay-; эти формы используются и в otros contextos (¡vamos!).",
    markers: ["cuando", "para que", "ojalá"],
    examples: [
      {
        es: "Quiero que vayas al médico.",
        ru: "Я хочу, чтобы ты сходил к врачу.",
      },
      {
        es: "Ojalá vayan pronto.",
        ru: "Хоть бы они поскорее пошли.",
      },
    ],
    commonMistakes: [
      "Не используйте vaiga — это ошибочная форма; правильно vaya.",
    ],
  },
  "cj-b1-15": {
    formationRule:
      "От yo presente hago возьмите основу hag- и добавьте окончания subjuntivo: haga, hagas, haga, hagamos, hagáis, hagan.",
    irregularity:
      "Hacer сохраняет неправильную основу yo (hag-) во всех лицах subjuntivo.",
    markers: ["te aconsejo que", "es necesario que", "antes de que"],
    examples: [
      {
        es: "Es necesario que hagamos algo.",
        ru: "Необходимо, чтобы мы что-то сделали.",
      },
      {
        es: "No creo que hagan ruido.",
        ru: "Не думаю, что они будут шуметь.",
      },
    ],
    commonMistakes: ["Основа берётся от hago, поэтому haga, а не hazca."],
  },
  "cj-b1-16": {
    formationRule:
      "От третьего лица множественного indefinido (tuvieron) уберите -ron и добавьте -ra, -ras, -ra, -´ramos, -rais, -ran: tuviera…",
    irregularity:
      "Tener использует неправильную основу indefinido tuv-; в 1-м лице мн. появляется ударение: tuviéramos.",
    markers: ["si", "ojalá", "como si"],
    examples: [
      {
        es: "Ojalá tuviéramos más tiempo.",
        ru: "Вот бы у нас было больше времени.",
      },
      {
        es: "Actuó como si tuviera prisa.",
        ru: "Он вёл себя так, будто спешил.",
      },
    ],
    commonMistakes: [
      "Основа imperfecto de subjuntivo берётся из indefinido (tuv-), поэтому не teniera, а tuviera.",
    ],
  },
  "cj-b1-17": {
    formationRule:
      "От hicieron уберите -ron и добавьте окончания -ra: hiciera, hicieras, hiciera, hiciéramos, hicierais, hicieran.",
    irregularity:
      "Hacer в indefinido даёт основу hic- (с чередованием c), отсюда hiciera.",
    markers: ["me pidió que", "si", "para que"],
    examples: [
      {
        es: "Sería bueno que hicieras una pausa.",
        ru: "Было бы хорошо, если бы ты сделал паузу.",
      },
      {
        es: "Nos dijo que hiciéramos silencio.",
        ru: "Он велел нам вести себя тихо.",
      },
    ],
    commonMistakes: [
      "Не образуйте haciera: основа берётся из hicieron, поэтому hiciera.",
    ],
  },
  "cj-b1-18": {
    formationRule:
      "От fueron уберите -ron и добавьте -ra: fuera, fueras, fuera, fuéramos, fuerais, fueran (совпадает с ir).",
    irregularity:
      "Формы imperfecto de subjuntivo глаголов ser и ir одинаковы (fuera); значение ясно из контекста.",
    markers: ["si", "ojalá", "como si"],
    examples: [
      {
        es: "Si fuera rico, ayudaría a mucha gente.",
        ru: "Если бы я был богат, я бы помог многим.",
      },
      {
        es: "Habló como si fuera un experto.",
        ru: "Он говорил так, будто был экспертом.",
      },
    ],
    commonMistakes: [
      "Fuera — это и ser, и ir; определяйте значение по контексту, не по форме.",
    ],
  },
  "cj-b1-19": {
    formationRule:
      "Pretérito imperfecto глагола ir неправильный, его запоминают: iba, ibas, iba, íbamos, ibais, iban.",
    irregularity:
      "Ir — один из трёх глаголов с неправильным imperfecto (ir, ser, ver); в íbamos есть ударение.",
    markers: ["antes", "de niño", "todos los días"],
    examples: [
      {
        es: "Cada verano íbamos al pueblo de mis abuelos.",
        ru: "Каждое лето мы ездили в деревню к бабушке с дедушкой.",
      },
      {
        es: "Ibas siempre en bici al colegio.",
        ru: "Ты всегда ездил в школу на велосипеде.",
      },
    ],
    commonMistakes: [
      "Не образуйте iía по правилу: imperfecto ir — неправильный (iba).",
    ],
  },
  "cj-b1-20": {
    formationRule:
      "Pretérito imperfecto глагола ser запоминают целиком: era, eras, era, éramos, erais, eran.",
    irregularity:
      "Ser имеет неправильный imperfecto; используется для описания в прошлом (возраст, время, свойства).",
    markers: ["antes", "cuando era pequeño", "en aquella época"],
    examples: [
      {
        es: "Cuando era niño, todo parecía más grande.",
        ru: "Когда я был ребёнком, всё казалось больше.",
      },
      { es: "Eran las tres de la tarde.", ru: "Было три часа дня." },
    ],
    commonMistakes: [
      "Для описания прошлого используйте era (imperfecto), а не fue (indefinido), если речь о фоне или свойстве.",
    ],
  },
};

export const b1Conjugations = b1ConjugationsBase.map((card) => ({
  ...card,
  ...b1ConjugationDetails[card.id],
})) satisfies ConjugationCard[];
