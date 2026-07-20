import type { ListeningContent } from "../../types";

export const a2Listening = [
  {
    id: "v3",
    level: "A2",
    title: "Cuando era pequeña: veranos en el pueblo",
    channel: "VideoEle",
    url: "https://videoele.com/A2-Cuando-era-pequena.html",
    durationMinutes: 3.8,
    dialect: "Испания, нейтральная учебная речь",
    speed: "умеренная",
    instructions:
      "Перед просмотром вспомните формы imperfecto. Сначала послушайте рассказ целиком, затем повторно отметьте привычные действия, места и животных из детства Тересы.",
    questions: [
      {
        prompt: "¿Adónde iba Teresa de pequeña?",
        answer: "Iba con su hermana al pueblo de sus abuelos.",
      },
      {
        prompt: "¿Qué hacía todas las mañanas?",
        answer: "Bajaba al río.",
      },
      {
        prompt: "¿Qué animales menciona?",
        answer: "Cabras, mariposas, lagartijas y peces.",
      },
      {
        prompt: "¿Cómo se sentía Teresa en aquel pueblo?",
        answer: "Era feliz.",
      },
    ],
    summary:
      "Тереса вспоминает лето в деревне у бабушки и дедушки: каменные дома, реку, лес, животных, игры с сестрой и любимое дерево.",
    lastVerifiedAt: "2026-07-20",
    revision: 2,
  },
  {
    id: "v4",
    level: "A2",
    title: "En contexto: un fin de semana en Madrid",
    channel: "VideoEle",
    url: "https://videoele.com/A2-En-contexto.html",
    durationMinutes: 5.8,
    dialect: "Испания, нейтральная учебная речь",
    speed: "умеренная",
    instructions:
      "Послушайте, какие законченные события рассказчик выражает в indefinido, а какие обстоятельства и описания — в imperfecto. При втором просмотре составьте маршрут по Мадриду.",
    questions: [
      {
        prompt: "¿Por qué fueron a Madrid?",
        answer: "Porque la narradora quería celebrar su cumpleaños.",
      },
      {
        prompt: "¿Dónde durmieron?",
        answer: "En un apartamento al lado del Palacio Real.",
      },
      {
        prompt: "¿Qué hicieron por la mañana?",
        answer:
          "Desayunaron chocolate con churros, subieron al teleférico y caminaron por Madrid.",
      },
      {
        prompt: "¿Por qué la entrada al Museo del Prado fue gratis?",
        answer: "Porque era el Día Internacional de los Museos.",
      },
    ],
    summary:
      "Рассказ о поездке на день рождения в Мадрид сочетает события в pretérito indefinido с описаниями погоды, жилья, мест и причин в imperfecto.",
    lastVerifiedAt: "2026-07-20",
    revision: 2,
  },
] satisfies ListeningContent[];
