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
  {
    id: "v11",
    level: "A1",
    title: "La comida: продукты на кухне",
    channel: "VideoEle",
    url: "https://videoele.com/A1-La-comida.html",
    durationMinutes: 6.4,
    dialect: "Испания, нейтральная учебная речь",
    speed: "медленная",
    instructions:
      "Первый раз слушайте и выписывайте только продукты. Второй раз следите за конструкциями hay и tenemos: они вводят разные вещи в одной и той же кухне.",
    questions: [
      {
        prompt: "¿Cuáles son las frutas preferidas de la familia?",
        answer: "Las manzanas y las naranjas.",
      },
      {
        prompt: "¿Qué hay en el frigorífico?",
        answer: "Yogur, queso, huevos y leche.",
      },
      {
        prompt: "¿Qué beben los padres además de agua y zumo?",
        answer: "Beben vino y cerveza.",
      },
      {
        prompt: "¿Qué comen todos los días?",
        answer: "Pan, fruta y verdura.",
      },
    ],
    summary:
      "Экскурсия по кухне: фрукты, овощи, мясо и рыба, содержимое холодильника, напитки, крупы и приправы. В конце все названные продукты перечисляются подряд для повторения.",
    lastVerifiedAt: "2026-07-23",
    revision: 1,
  },
  {
    id: "v12",
    level: "A1",
    title: "Mi casa: комнаты и предметы",
    channel: "VideoEle",
    url: "https://videoele.com/A1-Mi-casa.html",
    durationMinutes: 2.9,
    dialect: "Испания, нейтральная учебная речь",
    speed: "медленная",
    instructions:
      "Слушая, нарисуйте план квартиры и подпишите комнаты. Затем отметьте, какое действие называется для каждой комнаты.",
    questions: [
      {
        prompt: "¿Cuántas habitaciones hay en la casa?",
        answer: "Tres: la del narrador, la de su hermano y la de sus padres.",
      },
      {
        prompt: "¿Qué muebles hay en la habitación del hermano?",
        answer: "Un armario, una cama, estanterías, una mesa y una silla.",
      },
      {
        prompt: "¿Qué tiene el hermano en su mesa?",
        answer: "Un ordenador.",
      },
      {
        prompt: "¿Qué hacen todos juntos en el salón comedor?",
        answer: "Comen y ven la televisión.",
      },
    ],
    summary:
      "Рассказчик показывает свою большую квартиру: прихожая, гостиная-столовая, балкон, коридор, кухня, ванная и три спальни, а затем называет действия, которые происходят в каждой комнате.",
    lastVerifiedAt: "2026-07-23",
    revision: 1,
  },
  {
    id: "v13",
    level: "A1",
    title: "En mi barrio hay…: что есть и чего нет в районе",
    channel: "VideoEle",
    url: "https://videoele.com/A1-En-mi-barrio-hay.html",
    durationMinutes: 4.1,
    dialect: "Испания, нейтральная учебная речь",
    speed: "медленная",
    instructions:
      "Разделите лист на две колонки: «hay» и «no hay». Слушая, распределяйте по ним все места, которые называет рассказчик.",
    questions: [
      {
        prompt: "¿Qué instalaciones deportivas hay en el barrio?",
        answer: "Un gimnasio, una piscina pública y un campo de fútbol.",
      },
      {
        prompt: "¿Qué transporte público tiene el barrio?",
        answer: "Paradas de autobús y estaciones de metro.",
      },
      {
        prompt: "Nombra dos cosas que no hay en el barrio.",
        answer:
          "No hay museos ni monumentos (tampoco hoteles, teatros, universidad ni estación de tren).",
      },
      {
        prompt: "¿Dónde están esos lugares que faltan?",
        answer: "En el centro de la ciudad o en otros barrios.",
      },
    ],
    summary:
      "Описание городского района: современные и старые здания, парки, магазины, школы, рынок, спортивные объекты и транспорт. Вторая половина построена на отрицании: чего в районе нет и где это находится.",
    lastVerifiedAt: "2026-07-23",
    revision: 1,
  },
  {
    id: "v14",
    level: "A1",
    title: "Medios de transporte: как люди передвигаются по городу",
    channel: "VideoEle",
    url: "https://videoele.com/A1-Medios-transporte.html",
    durationMinutes: 5.8,
    dialect: "Испания, нейтральная учебная речь",
    speed: "медленная",
    instructions:
      "Для каждого транспорта запишите два прилагательных, которыми его оценивают. Обратите внимание, что почти всегда используется предлог en, но «пешком» — a pie.",
    questions: [
      {
        prompt: "¿Cómo es el metro?",
        answer: "Es rápido y barato.",
      },
      {
        prompt: "¿Qué dice del coche en la ciudad?",
        answer: "Es caro y lento, y hay muchos coches.",
      },
      {
        prompt: "¿Cómo se va a pie según el vídeo?",
        answer: "Ir a pie es sano pero lento.",
      },
      {
        prompt: "¿Qué desventaja tiene el avión?",
        answer: "Es muy rápido pero incómodo.",
      },
    ],
    summary:
      "Обзор городского транспорта: автобус, машина, метро, мотоцикл, велосипед, такси, трамвай, автокар, поезд, самолёт, а также фургоны, грузовики и судно. Каждый вид оценивается парой прилагательных.",
    lastVerifiedAt: "2026-07-23",
    revision: 1,
  },
  {
    id: "v15",
    level: "A1",
    title: "Voy al instituto: школьные вещи и класс",
    channel: "VideoEle",
    url: "https://videoele.com/A1-Voy-al-instituto.html",
    durationMinutes: 4.7,
    dialect: "Испания, нейтральная учебная речь",
    speed: "медленная",
    instructions:
      "Сначала выпишите всё, что лежит в рюкзаке и в пенале. При втором прослушивании следите за предлогами места: en, al lado de, encima de, delante de.",
    questions: [
      {
        prompt: "¿Qué lleva en el estuche?",
        answer:
          "Bolígrafos, rotuladores, lápices de colores, una regla, tijeras, una goma de borrar y un sacapuntas.",
      },
      {
        prompt: "¿Qué hay al lado de la mesa de la profesora?",
        answer: "Una ventana.",
      },
      {
        prompt: "¿Qué escribe la profesora García en la pizarra?",
        answer: "Escribe «Buenos días» con un rotulador rojo.",
      },
      {
        prompt: "¿Qué hace la alumna mientras la profesora trabaja?",
        answer: "Hace el examen, y el examen no es difícil.",
      },
    ],
    summary:
      "Ученица приходит в школу, перечисляет содержимое рюкзака и пенала, описывает класс и расположение предметов, пишет экзамен и выходит из класса.",
    lastVerifiedAt: "2026-07-23",
    revision: 1,
  },
  {
    id: "v16",
    level: "A1",
    title: "¡Buen fin de semana!: планы на выходные",
    channel: "VideoEle",
    url: "https://videoele.com/A1-Buen-fin-semana.html",
    durationMinutes: 3.6,
    dialect: "Испания, нейтральная учебная речь",
    speed: "медленная",
    instructions:
      "Постройте таблицу «пятница — суббота — воскресенье» и распределите действия рассказчика по дням и времени суток.",
    questions: [
      {
        prompt: "¿Qué hace el narrador los viernes por la tarde?",
        answer: "Va a comprar comida.",
      },
      {
        prompt: "¿Qué hace los sábados por la mañana?",
        answer: "Siempre limpia la casa.",
      },
      {
        prompt: "¿Qué hace los domingos por la mañana?",
        answer:
          "Se levanta tarde y a veces va al gimnasio o da una vuelta en bicicleta.",
      },
      {
        prompt: "¿Por qué nunca se acuesta tarde el domingo?",
        answer: "Porque el lunes tiene que volver al trabajo.",
      },
    ],
    summary:
      "Сначала перечисляются типичные занятия людей на выходных, затем рассказчик описывает собственные выходные по дням: покупки и ресторан в пятницу, уборка и встреча с друзьями в субботу, спорт и телевизор в воскресенье.",
    lastVerifiedAt: "2026-07-23",
    revision: 1,
  },
] satisfies ListeningContent[];
