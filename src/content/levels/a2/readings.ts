import type { ReadingContent } from "../../types";

export const a2Readings = [
  {
    id: "r-a2-1",
    level: "A2",
    type: "texto",
    title: "Un viaje inolvidable",
    text: "El verano pasado viajé a Colombia con dos amigos. Llegamos a Bogotá y luego fuimos a Cartagena en avión. Nos encantó la ciudad amurallada, con sus calles coloridas y su comida deliciosa. Un día visitamos una playa cercana y nadamos en el mar durante horas. Aunque hacía mucho calor, fue una de las mejores experiencias de mi vida. Volví con muchas fotos y ganas de regresar pronto.",
    instructions:
      "Прочитайте рассказ и восстановите маршрут поездки. Отдельно отметьте законченные события и описание погоды.",
    glossary: [
      { term: "la ciudad amurallada", translation: "город, окружённый стеной" },
      { term: "calles coloridas", translation: "яркие, красочные улицы" },
      { term: "aunque", translation: "хотя" },
      { term: "ganas de regresar", translation: "желание вернуться" },
    ],
    questions: [
      {
        prompt: "¿Con quién viajó la narradora a Colombia?",
        answer: "Viajó con dos amigos.",
        explanation: "Первое предложение называет двух спутников.",
      },
      {
        prompt: "¿Cómo fueron de Bogotá a Cartagena?",
        answer: "Fueron en avión.",
      },
      {
        prompt: "¿Qué hicieron en la playa?",
        answer: "Nadaron en el mar durante horas.",
      },
      {
        prompt: "¿Por qué quiere regresar?",
        answer: "Porque fue una de las mejores experiencias de su vida.",
      },
    ],
    notes: [
      "Hacía mucho calor стоит в imperfecto как описание фона, а viajé, llegamos и visitamos обозначают завершённые события.",
    ],
    revision: 1,
  },
  {
    id: "r-a2-2",
    level: "A2",
    type: "texto",
    title: "Mi infancia en el campo",
    text: "Cuando era pequeña, vivía en un pueblo pequeño con mis abuelos. Todas las mañanas ayudaba a mi abuela a dar de comer a las gallinas. Por las tardes jugaba con los otros niños del pueblo hasta que se ponía el sol. No teníamos muchos juguetes, pero éramos muy felices. Ahora vivo en la ciudad, pero siempre recuerdo esos años con mucho cariño.",
    instructions:
      "Найдите четыре формы imperfecto и объясните, какие привычки или состояния детства они описывают.",
    glossary: [
      { term: "dar de comer", translation: "кормить" },
      { term: "las gallinas", translation: "куры" },
      { term: "se ponía el sol", translation: "садилось солнце" },
      { term: "con mucho cariño", translation: "с большой теплотой" },
    ],
    questions: [
      {
        prompt: "¿Con quién vivía la narradora?",
        answer: "Vivía con sus abuelos.",
      },
      {
        prompt: "¿Cómo ayudaba a su abuela?",
        answer: "Ayudaba a dar de comer a las gallinas.",
      },
      {
        prompt: "¿Hasta cuándo jugaba con los otros niños?",
        answer: "Hasta que se ponía el sol.",
      },
      {
        prompt: "¿Dónde vive ahora?",
        answer: "Ahora vive en la ciudad.",
      },
    ],
    notes: [
      "Todos los días и por las tardes задают повторяемость, поэтому рассказ использует imperfecto.",
    ],
    revision: 1,
  },
  {
    id: "r-a2-3",
    level: "A2",
    type: "noticia",
    title: "Una nueva biblioteca en el barrio",
    text: "La semana pasada abrió una nueva biblioteca pública en el barrio de San Miguel. El edificio tiene tres pisos y una sala especial para niños. Los vecinos están muy contentos porque antes tenían que ir al centro para leer o estudiar. La biblioteca también organiza talleres de lectura los sábados por la mañana. Ya hay más de quinientas personas inscritas.",
    instructions:
      "Прочитайте новость и выпишите, что изменилось для жителей района, какие услуги предлагает библиотека и когда проходят занятия.",
    glossary: [
      { term: "biblioteca pública", translation: "публичная библиотека" },
      { term: "los vecinos", translation: "жители района, соседи" },
      { term: "talleres de lectura", translation: "занятия по чтению" },
      { term: "personas inscritas", translation: "зарегистрированные люди" },
    ],
    questions: [
      {
        prompt: "¿Dónde abrió la biblioteca?",
        answer: "En el barrio de San Miguel.",
      },
      {
        prompt: "¿Por qué están contentos los vecinos?",
        answer: "Porque antes tenían que ir al centro para leer o estudiar.",
      },
      {
        prompt: "¿Cuándo organiza talleres de lectura?",
        answer: "Los sábados por la mañana.",
      },
      {
        prompt: "¿Cuántas personas están inscritas?",
        answer: "Más de quinientas personas.",
      },
    ],
    notes: [
      "Открытие выражено indefinido (abrió), а текущие характеристики и услуги — presente (tiene, organiza, hay).",
    ],
    revision: 1,
  },
] satisfies ReadingContent[];
