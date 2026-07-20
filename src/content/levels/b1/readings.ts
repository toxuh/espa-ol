import type { ReadingContent } from "../../types";

export const b1Readings = [
  {
    id: "r-b1-1",
    level: "B1",
    type: "noticia",
    title: "El auge del teletrabajo",
    text: "En los últimos años, cada vez más empresas permiten que sus empleados trabajen desde casa. Según varios estudios, el teletrabajo puede mejorar el equilibrio entre la vida personal y profesional, aunque también presenta retos: la comunicación entre compañeros es más difícil y algunas personas sienten que trabajan más horas que antes. Muchos expertos creen que el futuro estará marcado por un modelo mixto, en el que los empleados combinen días de oficina con días de trabajo remoto.",
    instructions:
      "Определите основную мысль, две трудности дистанционной работы и прогноз экспертов. Затем найдите уступительный союз и относительное придаточное.",
    glossary: [
      { term: "el equilibrio", translation: "баланс, равновесие" },
      { term: "presentar retos", translation: "создавать трудности" },
      { term: "estar marcado por", translation: "характеризоваться чем-либо" },
      { term: "un modelo mixto", translation: "смешанная модель" },
    ],
    questions: [
      {
        prompt: "¿Qué ventaja puede ofrecer el teletrabajo?",
        answer:
          "Puede mejorar el equilibrio entre la vida personal y profesional.",
      },
      {
        prompt: "¿Qué dos retos menciona el texto?",
        answer:
          "La comunicación entre compañeros es más difícil y algunas personas trabajan más horas.",
      },
      {
        prompt:
          "¿Cómo será el modelo de trabajo del futuro según muchos expertos?",
        answer:
          "Será un modelo mixto que combine días de oficina y días de trabajo remoto.",
      },
    ],
    notes: [
      "Aunque вводит реальное возражение, а en el que уточняет существительное modelo mixto.",
    ],
    revision: 1,
  },
  {
    id: "r-b1-2",
    level: "B1",
    type: "texto",
    title: "La comida rápida y sus consecuencias",
    text: "La comida rápida se ha convertido en parte de la vida cotidiana de millones de personas, sobre todo en las grandes ciudades. Es barata, rápida y está disponible en cualquier momento. Sin embargo, los médicos advierten que un consumo frecuente puede provocar problemas de salud como la obesidad o enfermedades del corazón. Por eso, cada vez más restaurantes ofrecen opciones más saludables, con ensaladas y platos bajos en grasa, para atraer a un público más consciente de su alimentación.",
    instructions:
      "Разделите текст на причины популярности, риски и реакцию ресторанов. Объясните, какую логическую связь выражают sin embargo и por eso.",
    glossary: [
      { term: "la vida cotidiana", translation: "повседневная жизнь" },
      { term: "advertir", translation: "предупреждать" },
      { term: "provocar", translation: "вызывать, провоцировать" },
      { term: "bajo en grasa", translation: "с низким содержанием жира" },
    ],
    questions: [
      {
        prompt: "¿Por qué resulta atractiva la comida rápida?",
        answer:
          "Porque es barata, rápida y está disponible en cualquier momento.",
      },
      {
        prompt: "¿Qué riesgos señalan los médicos?",
        answer:
          "Un consumo frecuente puede provocar obesidad o enfermedades del corazón.",
      },
      {
        prompt: "¿Cómo intentan responder algunos restaurantes?",
        answer:
          "Ofrecen opciones más saludables, como ensaladas y platos bajos en grasa.",
      },
    ],
    notes: [
      "Sin embargo вводит контраст, а por eso связывает медицинские риски с изменением предложения ресторанов.",
    ],
    revision: 1,
  },
  {
    id: "r-b1-3",
    level: "B1",
    type: "noticia",
    title: "Redes sociales y adolescentes",
    text: "Un nuevo estudio ha analizado el uso de las redes sociales entre los adolescentes de doce a diecisiete años. Los resultados muestran que pasan una media de tres horas diarias conectados, principalmente en aplicaciones de vídeo e imágenes. Los investigadores señalan que, aunque las redes ayudan a mantener el contacto con amigos, un uso excesivo puede afectar el sueño y el rendimiento escolar. Recomiendan establecer límites de tiempo claros y fomentar otras actividades al aire libre.",
    instructions:
      "Найдите числовой результат исследования, пользу, два риска и обе рекомендации. Отделите данные исследования от выводов и советов авторов.",
    glossary: [
      { term: "una media de", translation: "в среднем" },
      { term: "mantener el contacto", translation: "поддерживать связь" },
      { term: "el rendimiento escolar", translation: "успеваемость" },
      { term: "fomentar", translation: "поощрять, развивать" },
    ],
    questions: [
      {
        prompt: "¿Cuánto tiempo pasan conectados los adolescentes?",
        answer: "Pasan una media de tres horas diarias conectados.",
      },
      {
        prompt: "¿Qué beneficio y qué riesgos menciona el estudio?",
        answer:
          "Las redes ayudan a mantener el contacto, pero un uso excesivo puede afectar el sueño y el rendimiento escolar.",
      },
      {
        prompt: "¿Qué recomiendan los investigadores?",
        answer:
          "Recomiendan establecer límites de tiempo y fomentar actividades al aire libre.",
      },
    ],
    notes: [
      "Ha analizado связывает недавнее исследование с актуальными результатами; recomiendan + infinitivo вводит рекомендации.",
    ],
    revision: 1,
  },
] satisfies ReadingContent[];
