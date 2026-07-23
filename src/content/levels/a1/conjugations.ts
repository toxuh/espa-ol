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
  {
    id: "cj-a1-7",
    level: "A1",
    verb: "trabajar",
    verbMeaning: "работать",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: [
      "trabajo",
      "trabajas",
      "trabaja",
      "trabajamos",
      "trabajáis",
      "trabajan",
    ],
    example: {
      es: "Trabajo en una oficina.",
      ru: "Я работаю в офисе.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-8",
    level: "A1",
    verb: "estudiar",
    verbMeaning: "учиться, изучать",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: [
      "estudio",
      "estudias",
      "estudia",
      "estudiamos",
      "estudiáis",
      "estudian",
    ],
    example: {
      es: "Estudio español todas las tardes.",
      ru: "Я учу испанский каждый вечер.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-9",
    level: "A1",
    verb: "beber",
    verbMeaning: "пить",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: ["bebo", "bebes", "bebe", "bebemos", "bebéis", "beben"],
    example: {
      es: "Bebo agua durante la comida.",
      ru: "Я пью воду во время еды.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-10",
    level: "A1",
    verb: "leer",
    verbMeaning: "читать",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: ["leo", "lees", "lee", "leemos", "leéis", "leen"],
    example: {
      es: "Leo un libro cada mes.",
      ru: "Я читаю по книге каждый месяц.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-11",
    level: "A1",
    verb: "escribir",
    verbMeaning: "писать",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: [
      "escribo",
      "escribes",
      "escribe",
      "escribimos",
      "escribís",
      "escriben",
    ],
    example: {
      es: "Escribo correos por la mañana.",
      ru: "Я пишу письма по утрам.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-12",
    level: "A1",
    verb: "abrir",
    verbMeaning: "открывать",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: ["abro", "abres", "abre", "abrimos", "abrís", "abren"],
    example: {
      es: "La tienda abre a las nueve.",
      ru: "Магазин открывается в девять.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-13",
    level: "A1",
    verb: "querer",
    verbMeaning: "хотеть, любить",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: ["quiero", "quieres", "quiere", "queremos", "queréis", "quieren"],
    example: {
      es: "Quiero un café, por favor.",
      ru: "Я хочу кофе, пожалуйста.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-14",
    level: "A1",
    verb: "empezar",
    verbMeaning: "начинать",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: [
      "empiezo",
      "empiezas",
      "empieza",
      "empezamos",
      "empezáis",
      "empiezan",
    ],
    example: {
      es: "La clase empieza a las diez.",
      ru: "Урок начинается в десять.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-15",
    level: "A1",
    verb: "preferir",
    verbMeaning: "предпочитать",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: [
      "prefiero",
      "prefieres",
      "prefiere",
      "preferimos",
      "preferís",
      "prefieren",
    ],
    example: {
      es: "Prefiero el té al café.",
      ru: "Я предпочитаю чай кофе.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-16",
    level: "A1",
    verb: "pensar",
    verbMeaning: "думать",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: ["pienso", "piensas", "piensa", "pensamos", "pensáis", "piensan"],
    example: {
      es: "Pienso en mis vacaciones.",
      ru: "Я думаю о своём отпуске.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-17",
    level: "A1",
    verb: "poder",
    verbMeaning: "мочь",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: ["puedo", "puedes", "puede", "podemos", "podéis", "pueden"],
    example: {
      es: "No puedo salir hoy.",
      ru: "Я не могу выйти сегодня.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-18",
    level: "A1",
    verb: "dormir",
    verbMeaning: "спать",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: ["duermo", "duermes", "duerme", "dormimos", "dormís", "duermen"],
    example: {
      es: "Duermo ocho horas.",
      ru: "Я сплю восемь часов.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-19",
    level: "A1",
    verb: "volver",
    verbMeaning: "возвращаться",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: ["vuelvo", "vuelves", "vuelve", "volvemos", "volvéis", "vuelven"],
    example: {
      es: "Vuelvo a casa a las seis.",
      ru: "Я возвращаюсь домой в шесть.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-20",
    level: "A1",
    verb: "encontrar",
    verbMeaning: "находить",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: [
      "encuentro",
      "encuentras",
      "encuentra",
      "encontramos",
      "encontráis",
      "encuentran",
    ],
    example: {
      es: "No encuentro las llaves.",
      ru: "Я не нахожу ключи.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-21",
    level: "A1",
    verb: "jugar",
    verbMeaning: "играть",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: ["juego", "juegas", "juega", "jugamos", "jugáis", "juegan"],
    example: {
      es: "Juego al fútbol los sábados.",
      ru: "Я играю в футбол по субботам.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-22",
    level: "A1",
    verb: "pedir",
    verbMeaning: "просить, заказывать",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: ["pido", "pides", "pide", "pedimos", "pedís", "piden"],
    example: {
      es: "Pido la cuenta al camarero.",
      ru: "Я прошу счёт у официанта.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-23",
    level: "A1",
    verb: "hacer",
    verbMeaning: "делать",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: ["hago", "haces", "hace", "hacemos", "hacéis", "hacen"],
    example: {
      es: "Hago los deberes por la tarde.",
      ru: "Я делаю домашнее задание вечером.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-24",
    level: "A1",
    verb: "poner",
    verbMeaning: "класть, ставить",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: ["pongo", "pones", "pone", "ponemos", "ponéis", "ponen"],
    example: {
      es: "Pongo los platos en la mesa.",
      ru: "Я ставлю тарелки на стол.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-25",
    level: "A1",
    verb: "salir",
    verbMeaning: "выходить, уходить",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: ["salgo", "sales", "sale", "salimos", "salís", "salen"],
    example: {
      es: "Salgo de casa a las ocho.",
      ru: "Я выхожу из дома в восемь.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-26",
    level: "A1",
    verb: "saber",
    verbMeaning: "знать (факт, умение)",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: ["sé", "sabes", "sabe", "sabemos", "sabéis", "saben"],
    example: {
      es: "Sé nadar muy bien.",
      ru: "Я умею хорошо плавать.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-27",
    level: "A1",
    verb: "ver",
    verbMeaning: "видеть, смотреть",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: ["veo", "ves", "ve", "vemos", "veis", "ven"],
    example: {
      es: "Veo la televisión por la noche.",
      ru: "Я смотрю телевизор вечером.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-28",
    level: "A1",
    verb: "conocer",
    verbMeaning: "быть знакомым, знать (кого/что-то)",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: ["conozco", "conoces", "conoce", "conocemos", "conocéis", "conocen"],
    example: {
      es: "Conozco un buen restaurante.",
      ru: "Я знаю хороший ресторан.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-29",
    level: "A1",
    verb: "estar",
    verbMeaning: "находиться, быть (состояние)",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: ["estoy", "estás", "está", "estamos", "estáis", "están"],
    example: {
      es: "Estoy en casa ahora.",
      ru: "Я сейчас дома.",
    },
    revision: 1,
  },
  {
    id: "cj-a1-30",
    level: "A1",
    verb: "venir",
    verbMeaning: "приходить, приезжать",
    tense: "presente",
    tenseLabel: "Presente (настоящее время)",
    forms: ["vengo", "vienes", "viene", "venimos", "venís", "vienen"],
    example: {
      es: "Vengo de la oficina.",
      ru: "Я иду с работы.",
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
  "cj-a1-7": {
    formationRule:
      "Уберите -ar и добавьте окончания -o, -as, -a, -amos, -áis, -an.",
    irregularity: "Правильный глагол; основа trabaj- не меняется.",
    markers: ["todos los días", "de lunes a viernes", "por la mañana"],
    examples: [
      { es: "Trabajo desde casa.", ru: "Я работаю из дома." },
      { es: "Trabajan en un hospital.", ru: "Они работают в больнице." },
    ],
    commonMistakes: ["Не путайте trabajar с funcionar: о людях — trabajar."],
  },
  "cj-a1-8": {
    formationRule:
      "Уберите -ar и добавьте окончания -o, -as, -a, -amos, -áis, -an.",
    irregularity: "Правильный глагол; основа estudi- не меняется.",
    markers: ["cada día", "este año", "por la tarde"],
    examples: [
      { es: "Estudio en la universidad.", ru: "Я учусь в университете." },
      { es: "Estudiamos juntos.", ru: "Мы учимся вместе." },
    ],
    commonMistakes: ["Сохраняйте i в основе: estudio, а не estdio."],
  },
  "cj-a1-9": {
    formationRule:
      "Уберите -er и добавьте окончания -o, -es, -e, -emos, -éis, -en.",
    irregularity: "Правильный глагол; основа beb- не меняется.",
    markers: ["durante la comida", "cada día", "a menudo"],
    examples: [
      { es: "¿Qué bebes por la mañana?", ru: "Что ты пьёшь по утрам?" },
      { es: "Bebemos mucha agua.", ru: "Мы пьём много воды." },
    ],
    commonMistakes: ["Beber — про напитки; для еды используется comer."],
  },
  "cj-a1-10": {
    formationRule:
      "Уберите -er и добавьте окончания -o, -es, -e, -emos, -éis, -en.",
    irregularity:
      "Правильный в presente; в основе две гласные, поэтому lees, leemos.",
    markers: ["cada noche", "a veces", "normalmente"],
    examples: [
      { es: "Leo antes de dormir.", ru: "Я читаю перед сном." },
      { es: "Leen el periódico.", ru: "Они читают газету." },
    ],
    commonMistakes: ["Не теряйте двойную e: leemos, leéis, а не lemos."],
  },
  "cj-a1-11": {
    formationRule:
      "Уберите -ir и добавьте окончания -o, -es, -e, -imos, -ís, -en.",
    irregularity: "Правильный глагол; основа escrib- не меняется.",
    markers: ["por la mañana", "a mano", "cada semana"],
    examples: [
      { es: "Escribe una carta.", ru: "Он пишет письмо." },
      { es: "Escribimos en español.", ru: "Мы пишем по-испански." },
    ],
    commonMistakes: [
      "У nosotros -ir даёт -imos: escribimos, не смешивайте с escribemos.",
    ],
  },
  "cj-a1-12": {
    formationRule:
      "Уберите -ir и добавьте окончания -o, -es, -e, -imos, -ís, -en.",
    irregularity: "Правильный глагол; основа abr- не меняется.",
    markers: ["a las nueve", "por la mañana", "todos los días"],
    examples: [
      { es: "Abro la ventana.", ru: "Я открываю окно." },
      { es: "Las tiendas abren tarde.", ru: "Магазины открываются поздно." },
    ],
    commonMistakes: [
      "Причастие abierto нерегулярно, но presente — правильный.",
    ],
  },
  "cj-a1-13": {
    formationRule:
      "Спряжение как у -er, но в ударных формах e основы переходит в ie.",
    irregularity:
      "e → ie во всех формах, кроме nosotros и vosotros: quiero, но queremos.",
    markers: ["ahora", "hoy", "querer + infinitivo"],
    examples: [
      { es: "Quiero aprender español.", ru: "Я хочу выучить испанский." },
      { es: "Queremos un café.", ru: "Мы хотим кофе." },
    ],
    commonMistakes: ["В форме nosotros нет ie: queremos, а не quieremos."],
  },
  "cj-a1-14": {
    formationRule:
      "Спряжение как у -ar, но e основы переходит в ie в ударных формах.",
    irregularity:
      "e → ie, кроме nosotros/vosotros: empiezo, но empezamos. Перед e пишется z→c только в других временах.",
    markers: ["a las diez", "empezar a + infinitivo", "pronto"],
    examples: [
      { es: "Empiezo a trabajar temprano.", ru: "Я начинаю работать рано." },
      { es: "Empezamos la clase.", ru: "Мы начинаем урок." },
    ],
    commonMistakes: [
      "После empezar перед инфинитивом нужен a: empiezo a leer.",
    ],
  },
  "cj-a1-15": {
    formationRule:
      "Спряжение как у -ir, но e основы переходит в ie в ударных формах.",
    irregularity: "e → ie, кроме nosotros/vosotros: prefiero, но preferimos.",
    markers: ["normalmente", "preferir + infinitivo", "en general"],
    examples: [
      { es: "Prefiero quedarme en casa.", ru: "Я предпочитаю остаться дома." },
      {
        es: "Preferimos viajar en tren.",
        ru: "Мы предпочитаем ездить на поезде.",
      },
    ],
    commonMistakes: ["Nosotros сохраняет e: preferimos, а не prefierimos."],
  },
  "cj-a1-16": {
    formationRule:
      "Спряжение как у -ar, но e основы переходит в ie в ударных формах.",
    irregularity: "e → ie, кроме nosotros/vosotros: pienso, но pensamos.",
    markers: ["pensar en", "pensar que", "ahora"],
    examples: [
      { es: "Pienso que tienes razón.", ru: "Я думаю, что ты прав." },
      { es: "Pensamos en el futuro.", ru: "Мы думаем о будущем." },
    ],
    commonMistakes: ["«Думать о чём-то» — pensar en, а не pensar de."],
  },
  "cj-a1-17": {
    formationRule:
      "Спряжение как у -er, но o основы переходит в ue в ударных формах.",
    irregularity: "o → ue, кроме nosotros/vosotros: puedo, но podemos.",
    markers: ["poder + infinitivo", "hoy", "ahora"],
    examples: [
      { es: "¿Puedes ayudarme?", ru: "Ты можешь мне помочь?" },
      { es: "No podemos ir.", ru: "Мы не можем пойти." },
    ],
    commonMistakes: ["После poder идёт инфинитив без предлога: puedo salir."],
  },
  "cj-a1-18": {
    formationRule:
      "Спряжение как у -ir, но o основы переходит в ue в ударных формах.",
    irregularity: "o → ue, кроме nosotros/vosotros: duermo, но dormimos.",
    markers: ["cada noche", "ocho horas", "normalmente"],
    examples: [
      { es: "Duermo poco entre semana.", ru: "В будни я мало сплю." },
      { es: "Los niños duermen la siesta.", ru: "Дети спят днём." },
    ],
    commonMistakes: ["Nosotros сохраняет o: dormimos, а не duermimos."],
  },
  "cj-a1-19": {
    formationRule:
      "Спряжение как у -er, но o основы переходит в ue в ударных формах.",
    irregularity:
      "o → ue, кроме nosotros/vosotros: vuelvo, но volvemos. Причастие vuelto нерегулярно.",
    markers: ["volver a + infinitivo", "a casa", "a las seis"],
    examples: [
      { es: "Vuelvo pronto.", ru: "Я скоро вернусь." },
      { es: "Volvemos en agosto.", ru: "Мы возвращаемся в августе." },
    ],
    commonMistakes: [
      "volver a + инфинитив значит «делать снова»: vuelvo a leer.",
    ],
  },
  "cj-a1-20": {
    formationRule:
      "Спряжение как у -ar, но o основы переходит в ue в ударных формах.",
    irregularity: "o → ue, кроме nosotros/vosotros: encuentro, но encontramos.",
    markers: ["no ... nunca", "a veces", "siempre"],
    examples: [
      { es: "No encuentro mi móvil.", ru: "Я не нахожу свой телефон." },
      { es: "Encontramos una solución.", ru: "Мы находим решение." },
    ],
    commonMistakes: ["Nosotros сохраняет o: encontramos, а не encuentramos."],
  },
  "cj-a1-21": {
    formationRule:
      "Спряжение как у -ar, но u основы переходит в ue в ударных формах.",
    irregularity:
      "Единственный глагол с чередованием u → ue: juego, но jugamos.",
    markers: ["jugar a + juego", "los sábados", "con amigos"],
    examples: [
      { es: "Juego al tenis.", ru: "Я играю в теннис." },
      { es: "Jugamos a las cartas.", ru: "Мы играем в карты." },
    ],
    commonMistakes: [
      "Об игре в спорт — jugar a: juego al fútbol, не juego fútbol.",
    ],
  },
  "cj-a1-22": {
    formationRule:
      "Спряжение как у -ir, но e основы переходит в i в ударных формах.",
    irregularity: "e → i, кроме nosotros/vosotros: pido, но pedimos.",
    markers: ["en el restaurante", "por favor", "siempre"],
    examples: [
      { es: "Pido una pizza.", ru: "Я заказываю пиццу." },
      { es: "Pedimos ayuda.", ru: "Мы просим помощи." },
    ],
    commonMistakes: [
      "Pedir — «просить/заказывать», preguntar — «задавать вопрос»; не путайте.",
    ],
  },
  "cj-a1-23": {
    formationRule: "Окончания -er, но форма yo нерегулярна: hago.",
    irregularity: "Только yo меняется: hago; остальные формы правильные.",
    markers: ["hacer deporte", "hacer los deberes", "por la tarde"],
    examples: [
      {
        es: "Hago la cama cada mañana.",
        ru: "Я застилаю кровать каждое утро.",
      },
      { es: "Hacemos ejercicio.", ru: "Мы занимаемся спортом." },
    ],
    commonMistakes: ["Форма yo — hago, а не haco."],
  },
  "cj-a1-24": {
    formationRule: "Окончания -er, но форма yo нерегулярна: pongo.",
    irregularity: "Только yo меняется: pongo; остальные формы правильные.",
    markers: ["poner la mesa", "en su sitio", "cada día"],
    examples: [
      { es: "Pongo música en casa.", ru: "Я включаю музыку дома." },
      { es: "Ponen la tele.", ru: "Они включают телевизор." },
    ],
    commonMistakes: ["Форма yo — pongo, а не pono."],
  },
  "cj-a1-25": {
    formationRule: "Окончания -ir, но форма yo нерегулярна: salgo.",
    irregularity: "Только yo меняется: salgo; остальные формы правильные.",
    markers: ["salir de", "salir con", "a las ocho"],
    examples: [
      { es: "Salgo con mis amigos.", ru: "Я гуляю с друзьями." },
      { es: "Salimos del cine.", ru: "Мы выходим из кинотеатра." },
    ],
    commonMistakes: ["«Выходить откуда-то» — salir de: salgo de casa."],
  },
  "cj-a1-26": {
    formationRule: "Окончания -er, но форма yo полностью нерегулярна: sé.",
    irregularity: "yo: sé (с ударением); остальные формы правильные.",
    markers: ["saber + infinitivo", "saber que", "bien"],
    examples: [
      { es: "Sé cocinar paella.", ru: "Я умею готовить паэлью." },
      { es: "No sabemos la respuesta.", ru: "Мы не знаем ответа." },
    ],
    commonMistakes: [
      "Saber — знание фактов и умений; знакомство с человеком — conocer.",
    ],
  },
  "cj-a1-27": {
    formationRule:
      "Окончания -er, но форма yo нерегулярна: veo. Форма vosotros — veis без ударения.",
    irregularity: "yo: veo; в остальном спряжение регулярное.",
    markers: ["ver la tele", "por la noche", "a menudo"],
    examples: [
      { es: "Veo una película.", ru: "Я смотрю фильм." },
      { es: "¿Ves ese edificio?", ru: "Ты видишь то здание?" },
    ],
    commonMistakes: ["Vosotros — veis, без графического ударения (не véis)."],
  },
  "cj-a1-28": {
    formationRule: "Окончания -er, но форма yo меняется на -zco: conozco.",
    irregularity: "yo: conozco; остальные формы правильные.",
    markers: ["conocer a alguien", "una ciudad", "bien"],
    examples: [
      { es: "Conozco a María.", ru: "Я знаком с Марией." },
      { es: "Conocemos Madrid.", ru: "Мы знаем Мадрид." },
    ],
    commonMistakes: [
      "Перед человеком нужен предлог a: conozco a Juan, а не conozco Juan.",
    ],
  },
  "cj-a1-29": {
    formationRule:
      "Формы estar запоминаются; у пяти из шести форм есть ударение: estás, está, estáis, están.",
    irregularity:
      "yo: estoy; ударные окончания: estás, está, estáis, están. Nosotros — estamos.",
    markers: ["estar en", "estar bien", "ahora"],
    examples: [
      { es: "Estoy cansado hoy.", ru: "Я сегодня устал." },
      { es: "Estamos en el parque.", ru: "Мы в парке." },
    ],
    commonMistakes: [
      "Местоположение и состояние — estar, а не ser: estoy en casa.",
    ],
  },
  "cj-a1-30": {
    formationRule:
      "Окончания -ir, но форма yo нерегулярна (vengo) и есть чередование e → ie.",
    irregularity:
      "yo: vengo; e → ie в tú/él/ellos: vienes, viene, vienen; nosotros — venimos.",
    markers: ["venir de", "venir a", "mañana"],
    examples: [
      { es: "Vengo a la fiesta.", ru: "Я приду на праздник." },
      { es: "Vienen de Argentina.", ru: "Они из Аргентины." },
    ],
    commonMistakes: [
      "Nosotros — venimos, без ie; форма yo — vengo, а не veno.",
    ],
  },
};

export const a1Conjugations = a1ConjugationsBase.map((card) => ({
  ...card,
  ...a1ConjugationDetails[card.id],
})) satisfies ConjugationCard[];
