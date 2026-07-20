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
] satisfies TranslationContent[];
