import type { ReadingContent } from "../../types";

export const a1Readings = [
  {
    id: "r-a1-1",
    level: "A1",
    type: "texto",
    title: "Mi rutina diaria",
    text: "Me llamo Ana. Todos los días me levanto a las siete. Desayuno café con tostadas y después voy al trabajo en autobús. Trabajo en una oficina pequeña hasta las cinco de la tarde. Por la noche, ceno con mi familia y veo la televisión un poco. Los fines de semana me gusta caminar por el parque con mi perro.",
    instructions:
      "Сначала прочитайте текст без словаря и найдите время подъёма, способ добраться до работы и два вечерних действия.",
    glossary: [
      { term: "me levanto", translation: "я встаю" },
      { term: "tostadas", translation: "тосты" },
      { term: "hasta", translation: "до" },
      { term: "los fines de semana", translation: "по выходным" },
    ],
    questions: [
      { prompt: "¿A qué hora se levanta Ana?", answer: "A las siete." },
      { prompt: "¿Cómo va al trabajo?", answer: "Va en autobús." },
      { prompt: "¿Dónde trabaja?", answer: "En una oficina pequeña." },
      {
        prompt: "¿Qué hace los fines de semana?",
        answer: "Camina por el parque con su perro.",
      },
    ],
    notes: [
      "Todos los días и los fines de semana — маркеры регулярных действий в presente.",
    ],
    revision: 1,
  },
  {
    id: "r-a1-2",
    level: "A1",
    type: "texto",
    title: "Mi familia",
    text: "Tengo una familia grande. Mi padre se llama Carlos y es profesor. Mi madre se llama Elena y trabaja en un hospital. Tengo dos hermanos: Pablo y Lucía. Pablo tiene quince años y Lucía tiene diez. Vivimos en una casa cerca del centro de la ciudad. Los domingos comemos todos juntos en casa de mis abuelos.",
    instructions:
      "Прочитайте и составьте простую схему семьи: родители, дети, возраст детей и воскресная традиция.",
    glossary: [
      { term: "se llama", translation: "его / её зовут" },
      { term: "hermanos", translation: "братья и сёстры" },
      { term: "cerca de", translation: "рядом с" },
      { term: "abuelos", translation: "бабушка и дедушка" },
    ],
    questions: [
      { prompt: "¿Cómo se llama el padre?", answer: "Se llama Carlos." },
      { prompt: "¿Dónde trabaja Elena?", answer: "Trabaja en un hospital." },
      { prompt: "¿Cuántos años tiene Lucía?", answer: "Tiene diez años." },
      {
        prompt: "¿Dónde come la familia los domingos?",
        answer: "En casa de los abuelos.",
      },
    ],
    notes: [
      "Hermanos во множественном числе может обозначать братьев и сестёр вместе.",
    ],
    revision: 1,
  },
  {
    id: "r-a1-3",
    level: "A1",
    type: "noticia",
    title: "El mercado del pueblo",
    text: "Cada sábado hay un mercado en la plaza del pueblo. Los agricultores venden frutas, verduras y queso fresco. También hay música y mucha gente. Muchas familias van a comprar pan y flores. El mercado empieza a las nueve de la mañana y termina a las dos de la tarde.",
    instructions:
      "Найдите в тексте день, место, часы работы рынка и четыре товара, которые там продают.",
    glossary: [
      { term: "cada sábado", translation: "каждую субботу" },
      { term: "agricultores", translation: "фермеры" },
      { term: "queso fresco", translation: "свежий сыр" },
      { term: "empieza / termina", translation: "начинается / заканчивается" },
    ],
    questions: [
      { prompt: "¿Dónde está el mercado?", answer: "En la plaza del pueblo." },
      {
        prompt: "¿Qué venden los agricultores?",
        answer: "Frutas, verduras y queso fresco.",
      },
      { prompt: "¿A qué hora empieza?", answer: "A las nueve de la mañana." },
      { prompt: "¿A qué hora termina?", answer: "A las dos de la tarde." },
    ],
    notes: [
      "Pueblo может означать небольшой город или деревню; здесь речь о местной рыночной площади.",
    ],
    revision: 1,
  },
] satisfies ReadingContent[];
