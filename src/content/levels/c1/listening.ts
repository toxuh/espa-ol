import type { ListeningContent } from "../../types";

export const c1Listening = [
  {
    id: "v9",
    level: "C1",
    title: "El lazareto",
    channel: "Radio Ambulante",
    url: "https://radioambulante.org/audio/el-lazareto",
    durationMinutes: 41,
    dialect: "Латинская Америка, преимущественно Колумбия",
    speed: "естественная, с наложением интервью и закадрового текста",
    instructions:
      "Слушайте по частям и восстановите хронологию: детские воспоминания Клаудии, режим лазарета, открытие сульфонов, жизнь Петера после 1961 года. Сложные фрагменты сверяйте с расшифровкой на radioambulante.org/transcripcion/el-lazareto-transcripcion и выпишите оттуда пассивные конструкции с se.",
    questions: [
      {
        prompt: "¿Por qué tuvo Peter que mudarse a Contratación en 1947?",
        answer:
          "Porque tenía la enfermedad de Hansen, la lepra, y la ley obligaba a los diagnosticados a vivir en un lazareto.",
      },
      {
        prompt: "¿Qué medidas garantizaban el aislamiento en los lazaretos?",
        answer:
          "Cercas con alambres de púas, controles policiales en las entradas y una moneda exclusiva llamada coscoja.",
      },
      {
        prompt: "¿Cómo se llegó al tratamiento con sulfonas?",
        answer:
          "Por accidente: en Venezuela se usaron contra la tuberculosis dentro de un lazareto y demostraron tener efectos curativos en la lepra.",
        explanation:
          "Se usaron и se encontró — пассивные конструкции с se: деятель не назван намеренно.",
      },
      {
        prompt: "¿Qué pasó con los lazaretos desde 1961?",
        answer:
          "Dejaron de ser lugares de reclusión y se convirtieron en pueblos como el resto del país.",
      },
      {
        prompt: "¿Qué relación tenía Claudia Platarrueda con esta historia?",
        answer:
          "Es antropóloga y sobrina de Peter; investigó los lazaretos desde finales de los noventa y viajó a Contratación en diciembre de 1997.",
      },
    ],
    summary:
      "История колумбийских лазаретов — поселений принудительной изоляции для больных проказой — через биографию Педро Пабло Ванегаса (Петера), плотника из Контратасьона, и исследование его племянницы-антрополога Клаудии Платарруэды.",
    lastVerifiedAt: "2026-07-21",
    revision: 2,
  },
  {
    id: "v10",
    level: "C1",
    title: "A seis mil metros de altura",
    channel: "Radio Ambulante",
    url: "https://radioambulante.org/audio/a-seis-mil-metros-de-altura",
    durationMinutes: 46,
    dialect: "Аргентина, риоплатский вариант с voseo (mirás, podés, che)",
    speed: "естественная, разговорные интервью",
    instructions:
      "Отметьте две временные линии: восхождение 2024 года и экспедицию 1985 года. Выпишите формы voseo и сравните их с формами на tú, а затем найдите condicional compuesto и pluscuamperfecto de subjuntivo в рассуждениях о том, что могло произойти на леднике.",
    questions: [
      {
        prompt:
          "¿Qué vieron los guías sobre el glaciar de la cara sur del Tupungato?",
        answer:
          "Una mochila con un aislante amarillo que, de lejos, parecía un cuerpo.",
      },
      {
        prompt: "¿Quién era Guillermo Vieiro?",
        answer:
          "Uno de los grandes del andinismo argentino, apodado «el domador del Aconcagua», que murió en enero de 1985 bajando del Tupungato junto a Leonardo Rabal.",
      },
      {
        prompt: "¿Qué contenía la mochila?",
        answer:
          "Herramientas, una cámara de vídeo y ropa —una campera de pluma y una bolsa de dormir—, pero ninguna identificación.",
      },
      {
        prompt: "¿Cuál es la hipótesis más sólida sobre el accidente?",
        answer:
          "Que uno de los dos resbaló o se cayó bajando por el glaciar y arrastró al otro, porque los cuerpos aparecieron encordados entre sí.",
        explanation:
          "Гипотеза о прошлом выражается через pluscuamperfecto de subjuntivo и condicional compuesto.",
      },
      {
        prompt: "¿Qué significó para los hijos recuperar esos objetos?",
        answer:
          "Reencontrarse con su padre a través de sus cosas y volver a sentirlo vivo cuarenta años después.",
      },
    ],
    summary:
      "В январе 2024 года горные гиды находят на леднике вулкана Тупунгато рюкзак, пролежавший там сорок лет. Он принадлежал альпинисту Гильермо Вьейро, погибшему в 1985 году, и возвращает его детям вещи и историю отца.",
    lastVerifiedAt: "2026-07-21",
    revision: 2,
  },
] satisfies ListeningContent[];
