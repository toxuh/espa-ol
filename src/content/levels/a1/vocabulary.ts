import type { VocabularyCard } from "../../types";

const a1VocabularyBase = [
  {
    id: "v-a1-1",
    level: "A1",
    word: "casa",
    translation: "дом",
    accept: ["дом", "домик"],
    context: "Mi casa está cerca del parque.",
    contextTarget: "casa",
    revision: 1,
  },
  {
    id: "v-a1-2",
    level: "A1",
    word: "amigo",
    translation: "друг",
    accept: ["друг", "приятель"],
    context: "Mi amigo vive en Madrid.",
    contextTarget: "amigo",
    revision: 1,
  },
  {
    id: "v-a1-3",
    level: "A1",
    word: "comida",
    translation: "еда",
    accept: ["еда", "пища"],
    context: "La comida está muy rica.",
    contextTarget: "comida",
    revision: 1,
  },
  {
    id: "v-a1-4",
    level: "A1",
    word: "trabajo",
    translation: "работа",
    accept: ["работа"],
    context: "Tengo mucho trabajo hoy.",
    contextTarget: "trabajo",
    revision: 1,
  },
  {
    id: "v-a1-5",
    level: "A1",
    word: "agua",
    translation: "вода",
    accept: ["вода"],
    context: "Necesito un vaso de agua.",
    contextTarget: "agua",
    revision: 1,
  },
  {
    id: "v-a1-6",
    level: "A1",
    word: "libro",
    translation: "книга",
    accept: ["книга"],
    context: "Este libro es muy interesante.",
    contextTarget: "libro",
    revision: 1,
  },
  {
    id: "v-a1-7",
    level: "A1",
    word: "día",
    translation: "день",
    accept: ["день"],
    context: "Hoy es un buen día.",
    contextTarget: "día",
    revision: 1,
  },
  {
    id: "v-a1-8",
    level: "A1",
    word: "noche",
    translation: "ночь",
    accept: ["ночь"],
    context: "Por la noche veo la televisión.",
    contextTarget: "noche",
    revision: 1,
  },
  {
    id: "v-a1-9",
    level: "A1",
    word: "ciudad",
    translation: "город",
    accept: ["город"],
    context: "Vivo en una ciudad grande.",
    contextTarget: "ciudad",
    revision: 1,
  },
  {
    id: "v-a1-10",
    level: "A1",
    word: "tiempo",
    translation: "время",
    accept: ["время", "погода"],
    context: "No tengo tiempo para eso.",
    contextTarget: "tiempo",
    revision: 1,
  },
  {
    id: "v-a1-11",
    level: "A1",
    word: "familia",
    translation: "семья",
    accept: ["семья"],
    context: "Mi familia es muy grande.",
    contextTarget: "familia",
    revision: 1,
  },
  {
    id: "v-a1-12",
    level: "A1",
    word: "escuela",
    translation: "школа",
    accept: ["школа"],
    context: "Los niños van a la escuela.",
    contextTarget: "escuela",
    revision: 1,
  },
  {
    id: "v-a1-13",
    level: "A1",
    word: "coche",
    translation: "машина",
    accept: ["машина", "автомобиль"],
    context: "Voy al trabajo en coche.",
    contextTarget: "coche",
    revision: 1,
  },
  {
    id: "v-a1-14",
    level: "A1",
    word: "dinero",
    translation: "деньги",
    accept: ["деньги"],
    context: "No tengo mucho dinero.",
    contextTarget: "dinero",
    revision: 1,
  },
] satisfies VocabularyCard[];

type VocabularyDetails = Pick<
  VocabularyCard,
  | "partOfSpeech"
  | "gender"
  | "forms"
  | "contextTranslation"
  | "collocations"
  | "usageNote"
  | "register"
>;

function nounDetails(
  gender: "мужской" | "женский",
  forms: string[],
  contextTranslation: string,
  collocations: string[],
  usageNote: string,
): VocabularyDetails {
  return {
    partOfSpeech: "существительное",
    gender,
    forms,
    contextTranslation,
    collocations,
    usageNote,
    register: "нейтральный",
  };
}

const a1VocabularyDetails: Record<string, VocabularyDetails> = {
  "v-a1-1": nounDetails(
    "женский",
    ["la casa", "las casas"],
    "Мой дом находится рядом с парком.",
    ["estar en casa — быть дома", "volver a casa — вернуться домой"],
    "Casa означает и дом как здание, и дом как место, где человек живёт.",
  ),
  "v-a1-2": nounDetails(
    "мужской",
    ["el amigo", "la amiga", "los amigos", "las amigas"],
    "Мой друг живёт в Мадриде.",
    ["un buen amigo — хороший друг", "amigos de la escuela — школьные друзья"],
    "Женская форма образуется заменой -o на -a: amiga.",
  ),
  "v-a1-3": nounDetails(
    "женский",
    ["la comida", "las comidas"],
    "Еда очень вкусная.",
    [
      "hacer la comida — готовить еду",
      "comida española — испанская кухня / еда",
    ],
    "В зависимости от контекста comida означает еду, приём пищи или обед.",
  ),
  "v-a1-4": nounDetails(
    "мужской",
    ["el trabajo", "los trabajos"],
    "Сегодня у меня много работы.",
    ["ir al trabajo — идти на работу", "buscar trabajo — искать работу"],
    "Trabajo может означать работу как занятие, рабочее место или конкретное задание.",
  ),
  "v-a1-5": nounDetails(
    "женский",
    ["el agua", "las aguas"],
    "Мне нужен стакан воды.",
    ["beber agua — пить воду", "un vaso de agua — стакан воды"],
    "В единственном числе перед ударным a- используется el, но слово остаётся женского рода: el agua fría.",
  ),
  "v-a1-6": nounDetails(
    "мужской",
    ["el libro", "los libros"],
    "Эта книга очень интересная.",
    [
      "leer un libro — читать книгу",
      "libro de español — учебник / книга по испанскому",
    ],
    "Для учебника также часто используется libro de texto.",
  ),
  "v-a1-7": nounDetails(
    "мужской",
    ["el día", "los días"],
    "Сегодня хороший день.",
    ["todos los días — каждый день", "buenos días — доброе утро"],
    "Несмотря на окончание -a, día — существительное мужского рода.",
  ),
  "v-a1-8": nounDetails(
    "женский",
    ["la noche", "las noches"],
    "По вечерам я смотрю телевизор.",
    [
      "por la noche — вечером / ночью",
      "buenas noches — добрый вечер / спокойной ночи",
    ],
    "Для регулярного времени суток используется por la noche, а не en la noche в стандартной речи Испании.",
  ),
  "v-a1-9": nounDetails(
    "женский",
    ["la ciudad", "las ciudades"],
    "Я живу в большом городе.",
    ["centro de la ciudad — центр города", "una ciudad grande — большой город"],
    "Во множественном числе после конечной d добавляется -es: ciudades.",
  ),
  "v-a1-10": nounDetails(
    "мужской",
    ["el tiempo", "los tiempos"],
    "У меня нет на это времени.",
    ["tener tiempo — иметь время", "hace buen tiempo — стоит хорошая погода"],
    "Tiempo может означать время или погоду; значение определяется конструкцией.",
  ),
  "v-a1-11": nounDetails(
    "женский",
    ["la familia", "las familias"],
    "Моя семья очень большая.",
    [
      "mi familia — моя семья",
      "familia numerosa — многодетная / большая семья",
    ],
    "Когда семья рассматривается как одна группа, глагол обычно стоит в единственном числе.",
  ),
  "v-a1-12": nounDetails(
    "женский",
    ["la escuela", "las escuelas"],
    "Дети ходят в школу.",
    ["ir a la escuela — ходить в школу", "escuela primaria — начальная школа"],
    "В Испании в значении обычной школы часто употребляется colegio; escuela остаётся общеупотребительным словом.",
  ),
  "v-a1-13": nounDetails(
    "мужской",
    ["el coche", "los coches"],
    "Я езжу на работу на машине.",
    ["ir en coche — ехать на машине", "conducir un coche — водить машину"],
    "Coche обычно употребляется в Испании; в Латинской Америке часто говорят carro или auto.",
  ),
  "v-a1-14": nounDetails(
    "мужской",
    ["el dinero"],
    "У меня не очень много денег.",
    [
      "ganar dinero — зарабатывать деньги",
      "pagar en efectivo — платить наличными",
    ],
    "Dinero обычно неисчисляемое и употребляется в единственном числе.",
  ),
};

export const a1Vocabulary = a1VocabularyBase.map((card) => ({
  ...card,
  ...a1VocabularyDetails[card.id],
})) satisfies VocabularyCard[];
