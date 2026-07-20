import type { ListeningContent } from "../../types";

export const b1Listening = [
  {
    id: "v5",
    level: "B1",
    title: "Un día en la playa",
    channel: "VideoEle",
    url: "https://videoele.com/B1-un-dia-playa.html",
    durationMinutes: 4,
    dialect: "Испания, нейтральная учебная речь",
    speed: "умеренная",
    instructions:
      "Сначала восстановите последовательность дня на Коста-Браве. При повторном просмотре разделите формы imperfecto, которые описывают обстановку, и indefinido, которые двигают рассказ.",
    questions: [
      {
        prompt: "¿Qué tiempo hacía por la mañana?",
        answer: "Hacía buen tiempo, aunque el viento era un poco fuerte.",
      },
      {
        prompt: "¿Qué recomienda llevar y ponerse para protegerse del sol?",
        answer:
          "Recomienda llevar una sombrilla y toallas, ponerse crema y cubrirse la cabeza con un sombrero o una gorra.",
      },
      {
        prompt: "¿Qué comieron al mediodía?",
        answer: "Comieron ensalada de primero y paella de segundo.",
      },
      {
        prompt: "¿Cómo cambió el mar por la tarde?",
        answer:
          "Estaba más tranquilo, hacía menos viento, no había olas y el agua estaba algo más caliente.",
      },
    ],
    summary:
      "Рассказчик описывает субботу на Коста-Браве: погоду, занятия отдыхающих, правила безопасного отдыха, обед и изменения моря к вечеру.",
    lastVerifiedAt: "2026-07-20",
    revision: 2,
  },
  {
    id: "v6",
    level: "B1",
    title: "No se puede",
    channel: "VideoEle",
    url: "https://videoele.com/B1-No-se-puede.html",
    durationMinutes: 4.5,
    dialect: "Испания, нейтральная учебная речь",
    speed: "умеренная",
    instructions:
      "Во время первого просмотра отметьте места и общую тему запретов. Затем выпишите конструкции no se puede, no se pueden и no se permite и объясните согласование глагола.",
    questions: [
      {
        prompt: "¿Qué no se puede hacer en el zoo?",
        answer: "No se puede dar de comer a los animales.",
      },
      {
        prompt: "¿Qué objetos no se pueden llevar dentro de la Mezquita?",
        answer:
          "No se pueden llevar mochilas, gorras, camisetas de tirantes ni pantalones cortos.",
      },
      {
        prompt:
          "¿Qué tipo de vehículos no puede circular por el parque de María Luisa?",
        answer:
          "No pueden circular vehículos de motor, y las bicicletas no pueden ir por los caminos de los peatones.",
      },
      {
        prompt: "¿Por qué hay que conservar el Parque Nacional del Teide?",
        answer:
          "Porque tiene paisajes espectaculares y una gran riqueza biológica.",
      },
    ],
    summary:
      "Подборка запретов в транспорте, спорте, зоопарке, на пляже и в памятниках Испании показывает безличные конструкции и пассив с se.",
    lastVerifiedAt: "2026-07-20",
    revision: 2,
  },
] satisfies ListeningContent[];
