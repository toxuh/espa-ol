import type { TranslationContent } from "../../types";

export const a2TranslationsFromEs = [
  {
    id: "tf-a2-1",
    level: "A2",
    title: "Vacaciones en la costa",
    text: "El mes pasado fui de vacaciones a la costa con mi familia. Llegamos el sábado por la tarde y encontramos un hotel cerca de la playa. Al día siguiente nadamos en el mar y tomamos el sol durante horas. Por la noche cenamos en un restaurante de pescado muy famoso. También visitamos un pequeño museo sobre la historia del pueblo. El último día compramos regalos para nuestros amigos. Volvimos a casa cansados pero muy felices.",
    reference:
      "В прошлом месяце я ездил в отпуск на побережье со своей семьёй. Мы приехали в субботу днём и нашли отель недалеко от пляжа. На следующий день мы купались в море и часами загорали. Вечером мы поужинали в очень известном рыбном ресторане. Мы также посетили небольшой музей об истории посёлка. В последний день мы купили подарки для друзей. Мы вернулись домой уставшими, но очень счастливыми.",
    alternativeReferences: [
      "В прошлом месяце мы всей семьёй отдыхали на побережье. В субботу после обеда мы приехали и поселились в гостинице рядом с пляжем. На следующий день плавали в море и несколько часов загорали. Вечером поужинали в известном рыбном ресторане. Ещё мы сходили в небольшой музей, посвящённый истории городка. В последний день купили друзьям подарки и вернулись домой уставшими, но очень довольными.",
    ],
    keyConstructions: [
      {
        source: "fui de vacaciones",
        target: "я ездил в отпуск / я отправился отдыхать",
        note: "Ir de vacaciones передаёт сам факт поездки на отдых.",
      },
      {
        source: "al día siguiente",
        target: "на следующий день",
      },
      {
        source: "tomamos el sol durante horas",
        target: "мы часами загорали",
        note: "Tomar el sol — устойчивое выражение «загорать».",
      },
    ],
    notes: [
      "Цепочка indefinido передаёт последовательность завершённых событий поездки.",
      "Pueblo в этом контексте естественно перевести как «посёлок» или «городок».",
    ],
    revision: 2,
  },
  {
    id: "tf-a2-2",
    level: "A2",
    title: "Mi infancia",
    text: "Cuando era pequeño, vivía en un pueblo cerca de las montañas. Mi abuela cocinaba pan casero todos los sábados. Yo jugaba con mis primos en el jardín hasta que anochecía. No teníamos televisión, así que leíamos muchos libros. Los inviernos eran fríos, pero siempre había una chimenea encendida en casa. Recuerdo esos años como los más felices de mi vida.",
    reference:
      "Когда я был маленьким, я жил в деревне недалеко от гор. Моя бабушка каждую субботу пекла домашний хлеб. Я играл с двоюродными братьями в саду, пока не темнело. У нас не было телевизора, поэтому мы много читали. Зимы были холодными, но дома всегда горел камин. Я помню те годы как самые счастливые в своей жизни.",
    alternativeReferences: [
      "В детстве я жил в посёлке у гор. По субботам бабушка пекла домашний хлеб. До темноты я играл в саду с двоюродными братьями и сёстрами. Телевизора у нас не было, поэтому мы много читали. Зимы стояли холодные, но в доме всегда был растоплен камин. Те годы остались в моей памяти самыми счастливыми.",
    ],
    keyConstructions: [
      {
        source: "cuando era pequeño",
        target: "когда я был маленьким / в детстве",
      },
      {
        source: "hasta que anochecía",
        target: "пока не темнело / до наступления темноты",
        note: "Imperfecto описывает регулярно повторявшуюся границу действия.",
      },
      {
        source: "había una chimenea encendida",
        target: "горел камин / был растоплен камин",
      },
    ],
    notes: [
      "Формы imperfecto здесь описывают привычки, обстановку и повторяющиеся действия детства.",
      "Primos может включать и двоюродных братьев, и двоюродных сестёр.",
    ],
    revision: 1,
  },
] satisfies TranslationContent[];

export const a2TranslationsToEs = [
  {
    id: "ta-a2-1",
    level: "A2",
    title: "Поездка в Италию",
    text: "В прошлом году я ездил в Италию с друзьями. Мы прилетели в Рим и остановились в маленькой гостинице. Каждый день мы гуляли по старому городу и фотографировали здания. Однажды мы поели настоящую итальянскую пиццу в маленьком ресторане. Погода была тёплой и солнечной всю неделю. Это было незабываемое путешествие.",
    reference:
      "El año pasado viajé a Italia con mis amigos. Llegamos en avión a Roma y nos alojamos en un hotel pequeño. Todos los días paseábamos por el casco antiguo y sacábamos fotos de los edificios. Un día comimos pizza italiana auténtica en un restaurante pequeño. El tiempo fue cálido y soleado toda la semana. Fue un viaje inolvidable.",
    alternativeReferences: [
      "El año pasado fui a Italia con unos amigos. Volamos a Roma y nos quedamos en un hotel pequeño. Cada día caminábamos por el centro histórico y hacíamos fotos de los edificios. Un día probamos una auténtica pizza italiana en un restaurante pequeño. Hizo buen tiempo durante toda la semana: hacía calor y sol. El viaje fue inolvidable.",
    ],
    keyConstructions: [
      {
        source: "ездил в Италию",
        target: "viajé a Italia / fui a Italia",
      },
      {
        source: "остановились в гостинице",
        target: "nos alojamos en un hotel / nos quedamos en un hotel",
      },
      {
        source: "гуляли по старому городу",
        target: "paseábamos por el casco antiguo",
        note: "Casco antiguo — исторический центр города.",
      },
    ],
    notes: [
      "Используйте indefinido для событий поездки и imperfecto для повторявшихся действий каждого дня.",
      "«Фотографировать здания» можно передать sacar/hacer fotos de los edificios.",
    ],
    acceptedKeywords: [
      "el año pasado",
      "viajé a italia",
      "con mis amigos",
      "roma",
      "nos alojamos",
      "todos los días",
      "casco antiguo",
      "fotos",
      "toda la semana",
      "viaje inolvidable",
    ],
    revision: 1,
  },
  {
    id: "ta-a2-2",
    level: "A2",
    title: "Лето у бабушки",
    text: "Когда я была маленькой, я жила у бабушки летом. Мы вставали рано и завтракали в саду. Бабушка учила меня готовить традиционные блюда. По вечерам мы слушали радио, потому что телевизора не было. Мне было грустно, когда лето заканчивалось. Сейчас я скучаю по тем временам.",
    reference:
      "Cuando era pequeña, vivía en casa de mi abuela en verano. Nos levantábamos temprano y desayunábamos en el jardín. Mi abuela me enseñaba a cocinar platos tradicionales. Por las noches escuchábamos la radio porque no teníamos televisor. Me ponía triste cuando terminaba el verano. Ahora extraño esos tiempos.",
    alternativeReferences: [
      "De pequeña pasaba los veranos en casa de mi abuela. Nos levantábamos pronto y tomábamos el desayuno en el jardín. Mi abuela me enseñaba a preparar comida tradicional. Por la noche oíamos la radio porque no había televisión. Me daba pena cuando se acababa el verano. Ahora echo de menos aquella época.",
    ],
    keyConstructions: [
      {
        source: "жила у бабушки летом",
        target:
          "vivía en casa de mi abuela en verano / pasaba los veranos en casa de mi abuela",
      },
      {
        source: "учила меня готовить",
        target: "me enseñaba a cocinar",
        note: "После enseñar используется a + infinitivo.",
      },
      {
        source: "скучаю по тем временам",
        target: "extraño esos tiempos / echo de menos aquella época",
      },
    ],
    notes: [
      "Говорящая — женщина, поэтому pequeña; у мужчины было бы pequeño.",
      "Imperfecto объединяет повторявшиеся летние привычки, а ahora переключает рассказ в настоящее.",
    ],
    acceptedKeywords: [
      "cuando era pequeña",
      "mi abuela",
      "en verano",
      "nos levantábamos",
      "desayunábamos",
      "me enseñaba a cocinar",
      "escuchábamos la radio",
      "no teníamos televisor",
      "terminaba el verano",
      "extraño esos tiempos",
    ],
    revision: 1,
  },
] satisfies TranslationContent[];
