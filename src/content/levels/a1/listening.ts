import type { ListeningContent } from "../../types";

export const a1Listening = [
  {
    id: "v1",
    level: "A1",
    title: "La hora: conversación sobre la rutina diaria",
    channel: "Spanish Playground",
    url: "https://youtu.be/v5FRs5qELKo",
    durationMinutes: 1.3,
    dialect: "Мексика, нейтральная учебная речь",
    speed: "медленная",
    instructions:
      "Послушайте один раз без пауз и отметьте все услышанные часы. При втором прослушивании сопоставьте время с действием.",
    questions: [
      { prompt: "¿A qué hora empiezan las clases?", answer: "A las ocho." },
      {
        prompt: "¿Adónde va el chico de una a tres?",
        answer: "Va a la biblioteca.",
      },
      {
        prompt: "¿Qué hace la chica a las cuatro?",
        answer: "Tiene entrenamiento de fútbol.",
      },
      { prompt: "¿A qué hora comen juntos?", answer: "A las seis." },
    ],
    summary:
      "Два человека сравнивают планы на день: занятия, визит к стоматологу, покупки, библиотеку, футбольную тренировку и общий приём пищи.",
    lastVerifiedAt: "2026-07-20",
    revision: 2,
  },
  {
    id: "v2",
    level: "A1",
    title: "Un perro con sed: описание фотографии",
    channel: "Spanish Playground",
    url: "https://www.spanishplayground.net/easy-spanish-listening-practice-dog/",
    durationMinutes: 2,
    dialect: "Мексика, нейтральная учебная речь",
    speed: "медленная",
    instructions:
      "Сначала слушайте описание, глядя на фотографию. Затем закройте текст страницы и ответьте на вопросы по цветам, предметам и действиям.",
    questions: [
      { prompt: "¿Qué toma el perro?", answer: "Toma agua." },
      {
        prompt: "¿De qué color es el collar?",
        answer: "Es de color anaranjado.",
      },
      {
        prompt: "¿Dónde está la pelota?",
        answer: "Está entre las patas del perro.",
      },
      {
        prompt: "¿Por qué tiene sed el perro?",
        answer: "Porque jugaba a la pelota.",
      },
    ],
    summary:
      "Короткое описание белой собаки с коричневыми пятнами: она пьёт воду после игры, рядом лежит жёлтый теннисный мяч.",
    lastVerifiedAt: "2026-07-20",
    revision: 2,
  },
] satisfies ListeningContent[];
