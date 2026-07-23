import type { TranslationContent } from "../../types";

export const a1TranslationsFromEs = [
  {
    id: "tf-a1-1",
    level: "A1",
    title: "Mi rutina",
    text: "Me llamo Pedro. Vivo en Madrid con mi familia. Todos los días voy al colegio en autobús. Por la mañana desayuno pan con mantequilla. Después de clase, juego al fútbol con mis amigos. Por la noche, ceno con mis padres y mi hermana. Los fines de semana visitamos a mis abuelos.",
    reference:
      "Меня зовут Педро. Я живу в Мадриде со своей семьёй. Каждый день я езжу в школу на автобусе. Утром я завтракаю хлебом с маслом. После уроков я играю в футбол с друзьями. Вечером я ужинаю с родителями и сестрой. По выходным мы навещаем моих бабушку и дедушку.",
    alternativeReferences: [
      "Меня зовут Педро. Я живу в Мадриде вместе с семьёй. Ежедневно я добираюсь до школы на автобусе. Утром я ем на завтрак хлеб с маслом. После школы играю с друзьями в футбол. Вечером ужинаю с родителями и сестрой, а на выходных мы ездим к бабушке и дедушке.",
    ],
    keyConstructions: [
      {
        source: "Me llamo Pedro",
        target: "Меня зовут Педро",
        note: "Возвратная форма llamarse переводится не буквально.",
      },
      {
        source: "voy al colegio en autobús",
        target: "езжу в школу на автобусе",
        note: "en + транспорт обычно передаётся творительным падежом.",
      },
      {
        source: "los fines de semana",
        target: "по выходным",
      },
    ],
    notes: [
      "Presente в этом тексте описывает регулярные действия, поэтому по-русски естественно использовать настоящее время.",
      "Mis abuelos может обозначать бабушку и дедушку вместе.",
    ],
    revision: 1,
  },
  {
    id: "tf-a1-3",
    level: "A1",
    title: "En el supermercado",
    text: "Los sábados voy al supermercado con mi madre. Compramos fruta, verdura, leche y pan. A mi madre le gusta el pescado, pero a mí me gusta más la carne. Pagamos en la caja y volvemos a casa en coche. Después preparamos la comida juntos.",
    reference:
      "По субботам я хожу в супермаркет с мамой. Мы покупаем фрукты, овощи, молоко и хлеб. Моя мама любит рыбу, а я больше люблю мясо. Мы платим на кассе и возвращаемся домой на машине. Потом мы вместе готовим еду.",
    alternativeReferences: [
      "По субботам мы с мамой ходим в супермаркет. Покупаем фрукты, овощи, молоко и хлеб. Мама любит рыбу, а мне больше нравится мясо. Мы расплачиваемся на кассе и едем домой на машине, а затем вместе готовим обед.",
    ],
    keyConstructions: [
      {
        source: "A mi madre le gusta el pescado",
        target: "Моя мама любит рыбу",
        note: "Конструкция gustar: подлежащее — pescado, поэтому le gusta.",
      },
      {
        source: "a mí me gusta más la carne",
        target: "я больше люблю мясо",
        note: "Ударное a mí усиливает контраст: «а вот мне».",
      },
      {
        source: "volvemos a casa en coche",
        target: "возвращаемся домой на машине",
      },
    ],
    notes: [
      "Gustar согласуется с тем, что нравится: le gusta el pescado (ед.), но le gustan las manzanas (мн.).",
      "A casa без артикля — устойчивое «домой».",
    ],
    revision: 1,
  },
  {
    id: "tf-a1-4",
    level: "A1",
    title: "El tiempo hoy",
    text: "Hoy hace buen tiempo. Hace sol y no hace frío. Por eso quiero pasear por el parque. Mañana, en cambio, va a llover todo el día. Cuando llueve, prefiero quedarme en casa y leer un libro. En invierno hace mucho frío en mi ciudad.",
    reference:
      "Сегодня хорошая погода. Солнечно и не холодно. Поэтому я хочу погулять в парке. А завтра весь день будет дождь. Когда идёт дождь, я предпочитаю оставаться дома и читать книгу. Зимой в моём городе очень холодно.",
    alternativeReferences: [
      "Сегодня погода хорошая: светит солнце и не холодно, поэтому мне хочется прогуляться по парку. Завтра же весь день будет идти дождь. В дождь я предпочитаю сидеть дома и читать. Зимой в моём городе стоят сильные холода.",
    ],
    keyConstructions: [
      {
        source: "Hace sol y no hace frío",
        target: "Солнечно и не холодно",
        note: "Погода в испанском — через hacer, а не «быть».",
      },
      {
        source: "va a llover todo el día",
        target: "весь день будет дождь",
        note: "Ir a + инфинитив передаёт будущее.",
      },
      {
        source: "prefiero quedarme en casa",
        target: "предпочитаю оставаться дома",
      },
    ],
    notes: [
      "Hacer frío/calor/sol не переводится глаголом «делать»; это устойчивые погодные выражения.",
      "En cambio вводит противопоставление: «а вот», «зато».",
    ],
    revision: 1,
  },
  {
    id: "tf-a1-5",
    level: "A1",
    title: "Mi barrio",
    text: "Vivo en un barrio tranquilo. Cerca de mi casa hay una panadería, una farmacia y un pequeño supermercado. También hay un parque con muchos árboles. No hay estación de metro, pero el autobús pasa cada diez minutos. Me gusta mi barrio porque todo está cerca.",
    reference:
      "Я живу в тихом районе. Рядом с моим домом есть булочная, аптека и небольшой супермаркет. Ещё есть парк с множеством деревьев. Станции метро нет, но автобус ходит каждые десять минут. Мне нравится мой район, потому что всё рядом.",
    alternativeReferences: [
      "Я живу в спокойном районе. Недалеко от дома находятся пекарня, аптека и маленький супермаркет. Есть и парк с множеством деревьев. Метро здесь нет, зато автобус приходит каждые десять минут. Мне нравится мой район: всё находится поблизости.",
    ],
    keyConstructions: [
      {
        source: "Cerca de mi casa hay",
        target: "Рядом с моим домом есть",
        note: "Hay вводит наличие объектов независимо от числа.",
      },
      {
        source: "el autobús pasa cada diez minutos",
        target: "автобус ходит каждые десять минут",
        note: "Pasar о транспорте — «ходить, проходить».",
      },
      {
        source: "todo está cerca",
        target: "всё рядом",
        note: "Местоположение — estar, а не ser.",
      },
    ],
    notes: [
      "No hay estación, но hay una panadería: hay не меняется по числу.",
      "Порядок «cerca de mi casa hay...» с обстоятельством в начале в русском тоже естественен.",
    ],
    revision: 1,
  },
  {
    id: "tf-a1-6",
    level: "A1",
    title: "El fin de semana",
    text: "Los fines de semana me levanto tarde. El sábado por la mañana limpio la casa y hago la compra. Por la tarde salgo con mis amigos o voy al cine. El domingo es un día tranquilo: leo, escucho música y descanso. Nunca trabajo los domingos.",
    reference:
      "По выходным я встаю поздно. В субботу утром я убираю дом и хожу за покупками. Днём я встречаюсь с друзьями или иду в кино. Воскресенье — спокойный день: я читаю, слушаю музыку и отдыхаю. По воскресеньям я никогда не работаю.",
    alternativeReferences: [
      "На выходных я просыпаюсь поздно. В субботу с утра убираюсь дома и хожу за покупками. После обеда гуляю с друзьями или иду в кино. Воскресенье — тихий день: читаю, слушаю музыку, отдыхаю. По воскресеньям я не работаю никогда.",
    ],
    keyConstructions: [
      {
        source: "me levanto tarde",
        target: "я встаю поздно",
        note: "Levantarse — возвратный глагол, ме указывает на «себя».",
      },
      {
        source: "hago la compra",
        target: "хожу за покупками",
        note: "Hacer la compra — устойчивое «делать покупки продуктов».",
      },
      {
        source: "Nunca trabajo los domingos",
        target: "По воскресеньям я никогда не работаю",
        note: "Nunca перед глаголом не требует второго отрицания.",
      },
    ],
    notes: [
      "Los fines de semana / los domingos с артиклем во мн.ч. означают регулярность.",
      "Если nunca стоит после глагола, добавляется no: no trabajo nunca.",
    ],
    revision: 1,
  },
  {
    id: "tf-a1-2",
    level: "A1",
    title: "Mi ciudad",
    text: "Mi ciudad es pequeña pero muy bonita. Hay un parque grande en el centro. Cerca de mi casa hay una panadería y una farmacia. Los domingos, el mercado está abierto por la mañana. Me gusta pasear por las calles antiguas. En verano, mucha gente va a la piscina municipal.",
    reference:
      "Мой город маленький, но очень красивый. В центре есть большой парк. Рядом с моим домом есть булочная и аптека. По воскресеньям утром открыт рынок. Мне нравится гулять по старым улицам. Летом много людей ходят в городской бассейн.",
    alternativeReferences: [
      "Мой город небольшой, но очень красивый. В самом центре расположен большой парк. Недалеко от моего дома есть пекарня и аптека. В воскресенье рынок открыт по утрам. Я люблю гулять по старинным улицам. Летом многие ходят в муниципальный бассейн.",
    ],
    keyConstructions: [
      {
        source: "hay un parque",
        target: "есть парк / расположен парк",
        note: "Hay вводит новый объект; дословное «имеется» обычно звучит тяжелее.",
      },
      {
        source: "cerca de mi casa",
        target: "рядом с моим домом",
      },
      {
        source: "me gusta pasear",
        target: "мне нравится гулять / я люблю гулять",
      },
    ],
    notes: [
      "Pequeña можно перевести как «маленький» или более естественное «небольшой».",
      "Piscina municipal — общественный городской бассейн, а не бассейн внутри муниципалитета.",
    ],
    revision: 1,
  },
] satisfies TranslationContent[];

export const a1TranslationsToEs = [
  {
    id: "ta-a1-1",
    level: "A1",
    title: "Моя рутина",
    text: "Меня зовут Мария. Я живу в маленьком городе. Каждое утро я пью кофе и ем тост. Потом я иду на работу пешком. Вечером я готовлю ужин для своей семьи. По субботам я хожу в парк с собакой.",
    reference:
      "Me llamo María. Vivo en una ciudad pequeña. Cada mañana bebo café y como una tostada. Luego voy al trabajo a pie. Por la noche preparo la cena para mi familia. Los sábados voy al parque con mi perro.",
    alternativeReferences: [
      "Soy María y vivo en una ciudad pequeña. Todas las mañanas tomo café y como una tostada. Después voy andando al trabajo. Por la noche hago la cena para mi familia. Cada sábado paseo por el parque con mi perro.",
    ],
    keyConstructions: [
      {
        source: "Меня зовут Мария",
        target: "Me llamo María",
        note: "В нейтральном знакомстве обычно используется llamarse.",
      },
      {
        source: "иду на работу пешком",
        target: "voy al trabajo a pie / voy andando al trabajo",
      },
      {
        source: "По субботам",
        target: "Los sábados / Cada sábado",
      },
    ],
    notes: [
      "Bebo café и tomo café допустимы; в Испании для напитка очень часто используется tomar.",
      "Не ставьте артикль перед María после llamarse.",
    ],
    acceptedKeywords: [
      "me llamo maría",
      "vivo",
      "cada mañana",
      "voy al trabajo",
      "a pie",
      "mi familia",
      "los sábados",
      "mi perro",
    ],
    revision: 1,
  },
  {
    id: "ta-a1-2",
    level: "A1",
    title: "Моя семья",
    text: "Это моя семья. У меня есть брат и сестра. Наш дом небольшой, но уютный. У нас есть кот и собака. Мы обедаем вместе каждый день. Мне нравится моя семья.",
    reference:
      "Esta es mi familia. Tengo un hermano y una hermana. Nuestra casa es pequeña pero acogedora. Tenemos un gato y un perro. Comemos juntos todos los días. Me gusta mi familia.",
    alternativeReferences: [
      "Esta es mi familia. Tengo una hermana y un hermano. Nuestra casa es pequeña, pero es muy cómoda. Tenemos un perro y un gato. Cada día comemos juntos. Quiero mucho a mi familia.",
    ],
    keyConstructions: [
      {
        source: "Это моя семья",
        target: "Esta es mi familia",
        note: "Familia — женский род, поэтому esta.",
      },
      {
        source: "У меня есть брат и сестра",
        target: "Tengo un hermano y una hermana",
      },
      {
        source: "Мы обедаем вместе",
        target: "Comemos juntos",
        note: "Местоимение nosotros обычно не требуется: лицо видно по форме comemos.",
      },
    ],
    notes: [
      "Уютный можно передать acogedor/a или cómodo/a; прилагательное согласуется с casa.",
      "Me gusta mi familia значит «мне нравится моя семья»; quiero mucho a mi familia сильнее и ближе к «я люблю семью».",
    ],
    acceptedKeywords: [
      "esta es mi familia",
      "tengo",
      "un hermano",
      "una hermana",
      "nuestra casa",
      "tenemos",
      "comemos juntos",
      "todos los días",
    ],
    revision: 1,
  },
  {
    id: "ta-a1-3",
    level: "A1",
    title: "В супермаркете",
    text: "По субботам я хожу в супермаркет. Я покупаю хлеб, молоко, фрукты и овощи. Мне нравятся яблоки, но я не люблю рыбу. Я плачу на кассе и возвращаюсь домой пешком. Дома я готовлю обед для своей семьи.",
    reference:
      "Los sábados voy al supermercado. Compro pan, leche, fruta y verdura. Me gustan las manzanas, pero no me gusta el pescado. Pago en la caja y vuelvo a casa a pie. En casa preparo la comida para mi familia.",
    alternativeReferences: [
      "Cada sábado voy al supermercado. Compro pan, leche, fruta y verduras. Me gustan las manzanas, pero el pescado no me gusta. Pago en la caja y regreso a casa andando. En casa hago la comida para mi familia.",
    ],
    keyConstructions: [
      {
        source: "Мне нравятся яблоки",
        target: "Me gustan las manzanas",
        note: "Во множественном числе — gustan: подлежащее las manzanas.",
      },
      {
        source: "я не люблю рыбу",
        target: "no me gusta el pescado",
        note: "Отрицание ставится перед me: no me gusta.",
      },
      {
        source: "возвращаюсь домой пешком",
        target: "vuelvo a casa a pie",
      },
    ],
    notes: [
      "Различайте me gusta (ед.) и me gustan (мн.) по числу того, что нравится.",
      "A casa — «домой» без артикля.",
    ],
    acceptedKeywords: [
      "los sábados",
      "voy al supermercado",
      "compro",
      "me gustan las manzanas",
      "no me gusta el pescado",
      "pago en la caja",
      "vuelvo a casa",
      "para mi familia",
    ],
    revision: 1,
  },
  {
    id: "ta-a1-4",
    level: "A1",
    title: "Погода сегодня",
    text: "Сегодня хорошая погода. Светит солнце и не холодно. Поэтому я хочу гулять в парке. Завтра будет дождь, и я остаюсь дома. Зимой в моём городе очень холодно, а летом жарко.",
    reference:
      "Hoy hace buen tiempo. Hace sol y no hace frío. Por eso quiero pasear por el parque. Mañana va a llover y me quedo en casa. En invierno hace mucho frío en mi ciudad y en verano hace calor.",
    alternativeReferences: [
      "Hoy hace buen tiempo: hace sol y no hace frío. Por eso quiero dar un paseo por el parque. Mañana va a llover, así que me quedo en casa. En invierno hace mucho frío en mi ciudad y en verano hace calor.",
    ],
    keyConstructions: [
      {
        source: "Светит солнце и не холодно",
        target: "Hace sol y no hace frío",
        note: "Погода передаётся глаголом hacer, а не ser/estar.",
      },
      {
        source: "Завтра будет дождь",
        target: "Mañana va a llover",
        note: "Ближайшее будущее — ir a + инфинитив.",
      },
      {
        source: "я остаюсь дома",
        target: "me quedo en casa",
        note: "Quedarse — возвратный глагол «оставаться».",
      },
    ],
    notes: [
      "Hace calor / hace frío — фиксированные выражения; не используйте es или está.",
      "Por eso значит «поэтому» и связывает причину со следствием.",
    ],
    acceptedKeywords: [
      "hoy hace buen tiempo",
      "hace sol",
      "no hace frío",
      "quiero pasear",
      "va a llover",
      "me quedo en casa",
      "hace mucho frío",
      "hace calor",
    ],
    revision: 1,
  },
  {
    id: "ta-a1-5",
    level: "A1",
    title: "Мой день",
    text: "Каждый день я встаю в семь. Я завтракаю кофе с тостом и иду на работу на автобусе. Работаю до пяти. Вечером я ужинаю дома и смотрю телевизор. В одиннадцать я ложусь спать.",
    reference:
      "Todos los días me levanto a las siete. Desayuno café con una tostada y voy al trabajo en autobús. Trabajo hasta las cinco. Por la noche ceno en casa y veo la televisión. A las once me acuesto.",
    alternativeReferences: [
      "Cada día me levanto a las siete. Desayuno un café con tostada y voy al trabajo en autobús. Trabajo hasta las cinco. Por la noche ceno en casa y veo la tele. A las once me acuesto.",
    ],
    keyConstructions: [
      {
        source: "я встаю в семь",
        target: "me levanto a las siete",
        note: "Время — a las + число: a las siete.",
      },
      {
        source: "иду на работу на автобусе",
        target: "voy al trabajo en autobús",
        note: "Транспорт — предлог en: en autobús.",
      },
      {
        source: "я ложусь спать",
        target: "me acuesto",
        note: "Acostarse — возвратный, o→ue: me acuesto.",
      },
    ],
    notes: [
      "Возвратные глаголы дня: levantarse, acostarse требуют me.",
      "Desayunar сочетается с едой напрямую: desayuno café, без предлога.",
    ],
    acceptedKeywords: [
      "todos los días",
      "me levanto",
      "a las siete",
      "desayuno",
      "voy al trabajo",
      "en autobús",
      "por la noche",
      "me acuesto",
    ],
    revision: 1,
  },
  {
    id: "ta-a1-6",
    level: "A1",
    title: "Мой район",
    text: "Я живу в тихом районе. Рядом с моим домом есть парк и супермаркет. Метро здесь нет, но автобус ходит часто. Мне нравится мой район, потому что всё близко. По вечерам я гуляю по улице с собакой.",
    reference:
      "Vivo en un barrio tranquilo. Cerca de mi casa hay un parque y un supermercado. Aquí no hay metro, pero el autobús pasa a menudo. Me gusta mi barrio porque todo está cerca. Por las tardes paseo por la calle con mi perro.",
    alternativeReferences: [
      "Vivo en un barrio tranquilo. Cerca de mi casa hay un parque y un supermercado. Aquí no hay metro, pero el autobús pasa con frecuencia. Me gusta mi barrio porque todo está cerca. Por las tardes doy un paseo por la calle con mi perro.",
    ],
    keyConstructions: [
      {
        source: "Рядом с моим домом есть парк",
        target: "Cerca de mi casa hay un parque",
        note: "Наличие — hay + существительное с артиклем.",
      },
      {
        source: "всё близко",
        target: "todo está cerca",
        note: "Местоположение — estar: todo está cerca.",
      },
      {
        source: "автобус ходит часто",
        target: "el autobús pasa a menudo",
        note: "A menudo — «часто»; о транспорте pasar.",
      },
    ],
    notes: [
      "Hay указывает на наличие, estar — на местоположение конкретного объекта.",
      "Por las tardes во множественном числе передаёт регулярность.",
    ],
    acceptedKeywords: [
      "vivo en un barrio",
      "cerca de mi casa",
      "hay un parque",
      "no hay metro",
      "el autobús",
      "me gusta mi barrio",
      "todo está cerca",
      "con mi perro",
    ],
    revision: 1,
  },
] satisfies TranslationContent[];
