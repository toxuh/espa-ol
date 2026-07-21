import type { ListeningContent } from "../../types";

export const b2Listening = [
  {
    id: "v7",
    level: "B2",
    title: "Si lo hubieran sabido…",
    channel: "VideoEle",
    url: "https://videoele.com/B2-Si-lo-hubieran-sabido.html",
    durationMinutes: 8.5,
    dialect: "Испания, нейтральная учебная речь",
    speed: "умеренная",
    instructions:
      "При первом просмотре запишите, что происходит в каждой сцене. При повторном выпишите фразы si + pluscuamperfecto de subjuntivo и найдите в них condicional compuesto главной части.",
    questions: [
      {
        prompt: "¿Qué tipo de vídeos comenta el narrador al principio?",
        answer:
          "Vídeos impactantes que circulan por internet y por las redes sociales y que le suelen enviar su familia y sus amigos.",
      },
      {
        prompt:
          "¿Qué habría pasado si el portero se hubiera quedado en la portería?",
        answer: "El balón no habría entrado.",
        explanation:
          "Условие относится к прошлому и не осуществилось, поэтому обе части нереальны.",
      },
      {
        prompt: "¿Por qué el árbol cayó encima de una casa?",
        answer:
          "Porque no lo cortaron bien; si lo hubieran cortado bien, el árbol habría caído hacia el otro lado.",
      },
      {
        prompt: "¿Qué le pasó al hombre que robó el paquete del porche?",
        answer:
          "El paquete explotó, el ladrón cayó al suelo y quedó manchado de pintura roja; si no se hubiera llevado el paquete, no le habría pasado nada.",
      },
    ],
    summary:
      "Рассказчик комментирует подборку вирусных роликов — аттракцион, пенальти, падение дерева, реклама, военные учения, свадьба, автобус — и каждый эпизод заканчивает нереальным условием в прошлом: si + pluscuamperfecto de subjuntivo + condicional compuesto.",
    lastVerifiedAt: "2026-07-21",
    revision: 2,
  },
  {
    id: "v8",
    level: "B2",
    title: "El viaje de mis sueños",
    channel: "VideoEle",
    url: "https://videoele.com/B2-El-viaje-de-mis-suenos.html",
    durationMinutes: 4.3,
    dialect: "Испания, нейтральная учебная речь",
    speed: "умеренная",
    instructions:
      "Составьте маршрут воображаемого путешествия по остановкам. Затем выпишите пары si + imperfecto de subjuntivo и condicional simple и отметьте, где condicional стоит без si.",
    questions: [
      {
        prompt: "¿Qué haría el narrador si tuviera dinero?",
        answer:
          "Se montaría en un avión y se iría a la costa oeste de Estados Unidos.",
      },
      {
        prompt: "¿Qué haría en San Francisco?",
        answer:
          "Haría fotos al puente, se montaría en un tranvía, subiría a una colina para ver la ciudad y cogería un barco a la prisión de Alcatraz.",
      },
      {
        prompt: "¿Qué alquilaría si fuera a Las Vegas?",
        answer: "Alquilaría un traje de Elvis Presley y se casaría.",
        explanation:
          "Si fuera a Las Vegas — маловероятная гипотеза, поэтому главная часть стоит в condicional.",
      },
      {
        prompt: "¿Por qué al final no hace el viaje?",
        answer:
          "Porque no tiene dinero para hacerlo y se tiene que quedar en casa.",
      },
    ],
    summary:
      "Рассказчик описывает воображаемое путешествие по западному побережью США — Лос-Анджелес, Калифорния, Диснейленд, Сан-Франциско, Лас-Вегас, шоссе 66, Гранд-Каньон, Сан-Диего — и завершает его признанием, что денег на поездку нет.",
    lastVerifiedAt: "2026-07-21",
    revision: 2,
  },
] satisfies ListeningContent[];
