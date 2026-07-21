import type { ReadingContent } from "../../types";

export const c1Readings = [
  {
    id: "r-c1-1",
    level: "C1",
    type: "novela",
    title: "Cuento corto: El reloj de la plaza",
    text: "Nadie recordaba cuándo se había instalado el reloj de la plaza, pero todos coincidían en que, desde entonces, el pueblo nunca había vuelto a ser el mismo. Decían los más viejos que sus manecillas, en lugar de avanzar, retrocedían levemente cada vez que alguien contaba una mentira frente a él. Al principio nadie le prestó atención, hasta que el alcalde, célebre por sus promesas incumplidas, notó con estupor que el reloj marcaba una hora que ya había pasado dos veces esa misma tarde. Desde aquel día, los habitantes comenzaron a medir la sinceridad de sus vecinos observando, de reojo, si las agujas seguían su curso natural o si, por el contrario, se atrevían a desandar el tiempo.",
    instructions:
      "Определите, что в тексте подано как слух, а что как факт рассказчика. Затем найдите три формы pluscuamperfecto и объясните, почему повествование постоянно возвращается к моменту «до прошлого».",
    glossary: [
      { term: "las manecillas / las agujas", translation: "стрелки часов" },
      { term: "retroceder", translation: "двигаться назад, отступать" },
      { term: "con estupor", translation: "с изумлением, оторопев" },
      { term: "promesas incumplidas", translation: "невыполненные обещания" },
      { term: "de reojo", translation: "искоса, украдкой" },
      { term: "desandar el tiempo", translation: "повернуть время вспять" },
    ],
    questions: [
      {
        prompt: "¿Qué se decía que hacía el reloj cuando alguien mentía?",
        answer: "Que sus manecillas retrocedían levemente en lugar de avanzar.",
      },
      {
        prompt: "¿Qué descubrió el alcalde y por qué resulta irónico?",
        answer:
          "Que el reloj marcaba una hora ya pasada dos veces esa tarde; es irónico porque él era célebre por sus promesas incumplidas.",
      },
      {
        prompt: "¿Cómo cambió la vida del pueblo después de aquel día?",
        answer:
          "Los habitantes empezaron a medir la sinceridad de sus vecinos observando si las agujas seguían su curso natural.",
      },
      {
        prompt:
          "¿Qué recurso usa el narrador para no comprometerse con la veracidad del prodigio?",
        answer:
          "Atribuye la creencia a otros: «decían los más viejos», «todos coincidían en que».",
        explanation:
          "Косвенная передача чужих слов снимает с рассказчика ответственность за достоверность.",
      },
    ],
    notes: [
      "Se había instalado — пассивная конструкция с se в pluscuamperfecto: важен факт установки, а не тот, кто её выполнил.",
      "Nunca había vuelto a ser el mismo сочетает перифразу volver a + infinitivo со значением «снова» и время «до прошлого».",
    ],
    revision: 1,
  },
  {
    id: "r-c1-2",
    level: "C1",
    type: "texto",
    title: "Ensayo: Sobre el silencio en la era digital",
    text: "Vivimos rodeados de notificaciones, mensajes instantáneos y un flujo constante de información que rara vez nos concede una pausa genuina. Paradójicamente, cuanto más conectados estamos, más difícil nos resulta habitar el silencio: ese espacio antes reservado para la reflexión se ha convertido, para muchos, en una fuente de incomodidad casi insoportable. Algunos filósofos contemporáneos sostienen que esta huida constante del silencio no es casual, sino sintomática de una sociedad que teme enfrentarse a sus propios pensamientos. Recuperar la capacidad de estar a solas, sin distracciones, no debería entenderse como un lujo, sino como una competencia esencial para preservar la salud mental en un mundo cada vez más ruidoso.",
    instructions:
      "Сформулируйте тезис эссе одним предложением и найдите три аргумента, которые его поддерживают. Затем разберите конструкции cuanto más… más, no es… sino и no debería entenderse como… sino como.",
    glossary: [
      { term: "conceder una pausa", translation: "давать передышку" },
      { term: "habitar el silencio", translation: "пребывать в тишине" },
      { term: "la huida", translation: "бегство" },
      { term: "sintomático de", translation: "показательный для чего-либо" },
      { term: "estar a solas", translation: "быть наедине с собой" },
      { term: "una competencia esencial", translation: "базовый навык" },
    ],
    questions: [
      {
        prompt: "¿Cuál es la paradoja que plantea el texto?",
        answer:
          "Que cuanto más conectados estamos, más difícil nos resulta habitar el silencio.",
      },
      {
        prompt: "¿Cómo interpretan algunos filósofos esa huida del silencio?",
        answer:
          "Como algo no casual, sino sintomático de una sociedad que teme enfrentarse a sus propios pensamientos.",
      },
      {
        prompt: "¿Qué propone el autor al final del ensayo?",
        answer:
          "Entender la capacidad de estar a solas no como un lujo, sino como una competencia esencial para la salud mental.",
      },
      {
        prompt: "¿Qué función cumple la palabra «paradójicamente»?",
        answer:
          "Anuncia que la consecuencia contradice lo que cabría esperar de estar más conectados.",
        explanation:
          "Наречие-коннектор задаёт логическую связь между абзацами, а не описывает действие.",
      },
    ],
    notes: [
      "Конструкция cuanto más… más требует безартиклевой пары сравнительных элементов и не переводится дословно: «чем больше…, тем труднее».",
      "После no es casual, sino sintomático вторая часть противопоставления не повторяет глагол: sino вводит замену, а не добавление.",
    ],
    revision: 1,
  },
  {
    id: "r-c1-3",
    level: "C1",
    type: "noticia",
    title: "La crisis del agua en zonas áridas",
    text: "Diversas regiones del planeta enfrentan una escasez de agua sin precedentes, agravada por patrones climáticos cada vez más extremos y por una gestión de los recursos hídricos que, en muchos casos, ha resultado insuficiente. Los expertos coinciden en que la desalinización y la reutilización de aguas residuales podrían mitigar parcialmente el problema, aunque advierten que estas soluciones requieren inversiones considerables y no están exentas de controversia, particularmente por su impacto ambiental y energético. Mientras tanto, comunidades enteras se ven obligadas a modificar drásticamente sus hábitos de consumo, en lo que varios analistas ya describen como un anticipo de los conflictos que podrían definir buena parte del siglo venidero.",
    instructions:
      "Разделите текст на причины, предлагаемые решения, их ограничения и прогноз. Затем объясните, почему в тексте трижды используется condicional (podrían mitigar, podrían definir) вместо будущего времени.",
    glossary: [
      { term: "sin precedentes", translation: "беспрецедентный" },
      { term: "los recursos hídricos", translation: "водные ресурсы" },
      { term: "la desalinización", translation: "опреснение" },
      { term: "las aguas residuales", translation: "сточные воды" },
      {
        term: "no estar exento de",
        translation: "не быть свободным от чего-либо",
      },
      { term: "el siglo venidero", translation: "грядущий век" },
    ],
    questions: [
      {
        prompt: "¿Qué dos factores agravan la escasez de agua según el texto?",
        answer:
          "Los patrones climáticos cada vez más extremos y una gestión de los recursos hídricos que ha resultado insuficiente.",
      },
      {
        prompt: "¿Qué soluciones proponen los expertos y con qué reservas?",
        answer:
          "La desalinización y la reutilización de aguas residuales, aunque exigen inversiones considerables y generan controversia por su impacto ambiental y energético.",
      },
      {
        prompt: "¿Cómo están reaccionando las comunidades afectadas?",
        answer:
          "Se ven obligadas a modificar drásticamente sus hábitos de consumo.",
      },
      {
        prompt: "¿Cómo describen varios analistas la situación actual?",
        answer:
          "Como un anticipo de los conflictos que podrían definir buena parte del siglo venidero.",
        explanation:
          "Condicional смягчает прогноз: аналитики не утверждают, а допускают такое развитие.",
      },
    ],
    notes: [
      "Verse obligado a + infinitivo — безличная пассивная формула принуждения обстоятельствами, а не конкретным лицом.",
      "Оборот en lo que varios analistas describen como… отсылает ко всей описанной ситуации, поэтому используется lo que, а не que.",
    ],
    revision: 1,
  },
] satisfies ReadingContent[];
