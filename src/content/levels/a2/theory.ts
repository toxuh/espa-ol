import type { TheoryLesson } from "../../types";

const a2TheoryBase = [
  {
    id: "th-a2-1",
    level: "A2",
    title: "Pretérito indefinido (простое прошедшее)",
    topics: ["pretérito indefinido", "pretérito irregular"],
    body: "\nPretérito indefinido используется для завершённых действий в прошлом с чётко определённым моментом времени (вчера, в прошлом году, три дня назад).<br><br>\n<b>Правильные окончания:</b><br>\n-ar (hablar): habl<b>é</b>, habl<b>aste</b>, habl<b>ó</b>, habl<b>amos</b>, habl<b>asteis</b>, habl<b>aron</b><br>\n-er/-ir (comer/vivir): com<b>í</b>, com<b>iste</b>, com<b>ió</b>, com<b>imos</b>, com<b>isteis</b>, com<b>ieron</b><br><br>\n<b>Частые неправильные глаголы</b> (с особой основой, без ударений в окончаниях yo/él):<br>\nser/ir: fui, fuiste, fue, fuimos, fuisteis, fueron (совпадают!)<br>\ntener: tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron<br>\nhacer: hice, hiciste, hizo, hicimos, hicisteis, hicieron<br>\nestar: estuve, estuviste, estuvo, estuvimos, estuvisteis, estuvieron<br>\npoder: pude, pudiste, pudo, pudimos, pudisteis, pudieron<br><br>\nПример: <i>Ayer fui al cine y vi una película muy buena</i> (вчера я пошёл в кино и посмотрел очень хороший фильм).",
    revision: 1,
  },
  {
    id: "th-a2-2",
    level: "A2",
    title: "Imperfecto и его разница с pretérito",
    topics: ["imperfecto", "pretérito vs imperfecto"],
    body: "\n<b>Imperfecto</b> описывает привычные/повторяющиеся действия в прошлом, фоновые описания и состояния без чёткой границы окончания.<br><br>\nОкончания:<br>\n-ar (hablar): habl<b>aba</b>, habl<b>abas</b>, habl<b>aba</b>, habl<b>ábamos</b>, habl<b>abais</b>, habl<b>aban</b><br>\n-er/-ir (comer/vivir): com<b>ía</b>, com<b>ías</b>, com<b>ía</b>, com<b>íamos</b>, com<b>íais</b>, com<b>ían</b><br>\nНеправильных глаголов всего три: ser (era, eras, era, éramos, erais, eran), ir (iba, ibas, iba, íbamos, ibais, iban), ver (veía, veías...).<br><br>\n<b>Разница pretérito vs imperfecto:</b> pretérito — конкретное законченное событие («что произошло»), imperfecto — фон, привычка, описание («как было»/«что обычно происходило»). Часто они встречаются в одном предложении: <i>Mientras cocinaba (imperfecto, фон), sonó el teléfono (pretérito, конкретное событие)</i>.<br><br>\nЕщё пример: <i>De niño, vivía en un pueblo</i> (imperfecto — привычное состояние в детстве) vs <i>El año pasado viví en Madrid</i> (pretérito — законченный период с чёткими рамками).",
    revision: 1,
  },
  {
    id: "th-a2-3",
    level: "A2",
    title: "Futuro simple",
    topics: ["futuro simple"],
    body: "\nFuturo simple образуется одинаково для всех трёх спряжений: <b>инфинитив + окончания</b> -é, -ás, -á, -emos, -éis, -án.<br><br>\nhablar: hablar<b>é</b>, hablar<b>ás</b>, hablar<b>á</b>, hablar<b>emos</b>, hablar<b>éis</b>, hablar<b>án</b><br>\ncomer: comeré, comerás, comerá...<br>\nvivir: viviré, vivirás, vivirá...<br><br>\nНекоторые глаголы меняют основу (но окончания остаются те же самые):<br>\ntener → tendr-: tendré, tendrás...<br>\nhacer → har-: haré, harás...<br>\ndecir → dir-: diré, dirás...<br>\npoder → podr-: podré, podrás...<br>\nsalir → saldr-: saldré, saldrás...<br><br>\nИспользуется для: планов и предсказаний о будущем (<i>Mañana viajaré a Barcelona</i>), а также — что важно — для предположений о настоящем (<i>¿Dónde está Juan? — Estará en casa</i>, «наверное, он дома»).",
    revision: 1,
  },
  {
    id: "th-a2-4",
    level: "A2",
    title: "Местоимения прямого и косвенного дополнения",
    topics: ["objeto directo", "objeto indirecto"],
    body: "\n<b>Прямое дополнение</b> (отвечает на вопрос «кого? что?») заменяется местоимениями: me, te, lo/la, nos, os, los/las. Lo/la/los/las согласуются в роде и числе с заменяемым словом: <i>¿Compraste el pan? Sí, lo compré</i> (el pan → lo, м.р.); <i>¿Viste a María? Sí, la vi</i> (a María → la, ж.р.).<br><br>\n<b>Косвенное дополнение</b> (отвечает на вопрос «кому? для кого?») заменяется местоимениями: me, te, le, nos, os, les. Le/les не меняются по роду: <i>Le di un regalo a mi madre</i> (le = a mi madre).<br><br>\nМестоимения обычно ставятся <b>перед</b> спрягаемым глаголом: <i>Lo compré</i>. Но присоединяются <b>после</b> инфинитива, герундия и утвердительного императива: <i>Voy a comprarlo</i>, <i>Estoy comiéndolo</i>, <i>¡Cómpralo!</i>.<br><br>\nЕсли в предложении есть и косвенное, и прямое дополнение вместе, косвенное идёт первым, а le/les перед lo/la/los/las превращается в <b>se</b>: <i>Se lo di</i> (= le di eso a él/ella).",
    revision: 1,
  },
  {
    id: "th-a2-5",
    level: "A2",
    title: "Возвратные глаголы и estar + gerundio",
    topics: ["reflexivos", "estar + gerundio"],
    body: "\n<b>Возвратные глаголы</b> (в инфинитиве оканчиваются на -se: levantarse, ducharse, vestirse) требуют возвратного местоимения, согласованного с подлежащим: me, te, se, nos, os, se.<br><br>\nlevantarse: <b>me</b> levanto, <b>te</b> levantas, <b>se</b> levanta, <b>nos</b> levantamos, <b>os</b> levantáis, <b>se</b> levantan.<br><br>\nМестоимение ставится перед спрягаемым глаголом (<i>Me levanto a las siete</i>) или присоединяется к инфинитиву/герундию/императиву (<i>Voy a levantarme</i>, <i>¡Levántate!</i>).<br><br>\n<b>Estar + gerundio</b> — конструкция для действия, происходящего именно в данный момент («сейчас, прямо сейчас»). Герундий образуется: -ar → -ando (hablando), -er/-ir → -iendo (comiendo, viviendo). У некоторых глаголов герундий неправильный: leer → leyendo, dormir → durmiendo, pedir → pidiendo, ir → yendo.<br><br>\nПример: <i>Ahora mismo estoy leyendo un libro</i> (прямо сейчас я читаю книгу) — отличается от простого presente (<i>Leo libros</i> — я вообще читаю книги, привычка).",
    revision: 1,
  },
  {
    id: "th-a2-6",
    level: "A2",
    title: "Сравнения и tener que / hay que",
    topics: [
      "comparativos",
      "superlativos",
      "comparativos — igualdad",
      "tener que / hay que",
      "tener que",
    ],
    body: "\n<b>Сравнение неравенства:</b> más + прилагательное + que (больше... чем), menos + прилагательное + que (меньше... чем): <i>Mi hermano es más alto que yo</i>.<br><br>\n<b>Сравнение равенства:</b> tan + прилагательное + como (так же... как): <i>Ana es tan alta como su hermano</i>.<br><br>\n<b>Превосходная степень:</b> el/la/los/las + más/menos + прилагательное + de: <i>Es el restaurante más caro de la ciudad</i> (самый дорогой ресторан в городе).<br><br>\nНеправильные формы сравнения: bueno → mejor (лучше), malo → peor (хуже), grande → mayor (старше/больше), pequeño → menor (младше/меньше).<br><br>\n<b>Tener que + infinitivo</b> — личная обязанность конкретного человека: <i>Tengo que estudiar</i> (я должен учиться, именно я).<br>\n<b>Hay que + infinitivo</b> — безличная обязанность, касающаяся всех вообще: <i>Hay que estudiar mucho para aprobar</i> (нужно много учиться, без указания конкретного лица).",
    revision: 1,
  },
] satisfies TheoryLesson[];

const a2TheoryDetails: Record<
  string,
  Pick<
    TheoryLesson,
    | "objectives"
    | "sections"
    | "summary"
    | "examples"
    | "commonMistakes"
    | "exerciseIds"
  >
> = {
  "th-a2-1": {
    objectives: [
      "Образовывать правильные формы pretérito indefinido.",
      "Узнавать частые неправильные основы и использовать indefinido для завершённых событий.",
    ],
    sections: [
      {
        title: "Когда нужен indefinido",
        paragraphs: [
          "Pretérito indefinido показывает завершённое событие внутри законченного периода: ayer, el lunes pasado, en 2025, hace dos días.",
          "В повествовании это время двигает сюжет вперёд: llegamos, dejamos las maletas, salimos a cenar.",
        ],
      },
      {
        title: "Правильные окончания",
        paragraphs: [
          "Уберите окончание инфинитива и добавьте окончания нужного спряжения. Формы nosotros у -ar и -ir совпадают с presente, поэтому время определяет контекст.",
        ],
        table: {
          headers: ["Лицо", "hablar", "comer", "vivir"],
          rows: [
            ["yo", "hablé", "comí", "viví"],
            ["tú", "hablaste", "comiste", "viviste"],
            ["él / ella", "habló", "comió", "vivió"],
            ["nosotros", "hablamos", "comimos", "vivimos"],
            ["vosotros", "hablasteis", "comisteis", "vivisteis"],
            ["ellos / ellas", "hablaron", "comieron", "vivieron"],
          ],
        },
      },
      {
        title: "Частые неправильные формы",
        paragraphs: [
          "Ser и ir имеют одну парадигму fui, fuiste, fue, fuimos, fuisteis, fueron. Контекст показывает, означает ли форма «был» или «пошёл».",
          "У tener, estar, poder и hacer меняется основа: tuv-, estuv-, pud-, hic-/hiz-. Их окончания обычно пишутся без графического ударения: tuve, estuvo, pudo, hizo.",
        ],
        table: {
          headers: ["Инфинитив", "Основа / форма yo", "Форма ellos"],
          rows: [
            ["ser / ir", "fui", "fueron"],
            ["tener", "tuve", "tuvieron"],
            ["estar", "estuve", "estuvieron"],
            ["hacer", "hice", "hicieron"],
          ],
        },
      },
    ],
    summary: [
      "indefinido = завершённое событие в законченном периоде",
      "-ar: é, aste, ó, amos, asteis, aron",
      "-er/-ir: í, iste, ió, imos, isteis, ieron",
      "Неправильные основы требуют отдельного запоминания.",
    ],
    examples: [
      { es: "Ayer compré un libro.", ru: "Вчера я купил книгу." },
      { es: "El sábado comimos fuera.", ru: "В субботу мы поели вне дома." },
      {
        es: "Mis amigos fueron a Sevilla.",
        ru: "Мои друзья ездили в Севилью.",
      },
      {
        es: "Tuve que trabajar anoche.",
        ru: "Вчера вечером мне пришлось работать.",
      },
    ],
    commonMistakes: [
      "Пропуск ударения в compré, habló или vivió.",
      "Регулярные формы tení или hació вместо tuve и hizo.",
      "Использование indefinido для привычки без законченной границы.",
    ],
    exerciseIds: ["a2-01", "a2-02", "a2-14"],
  },
  "th-a2-2": {
    objectives: [
      "Образовывать imperfecto и описывать привычки, состояния и фон в прошлом.",
      "Выбирать между imperfecto и indefinido внутри одного рассказа.",
    ],
    sections: [
      {
        title: "Что показывает imperfecto",
        paragraphs: [
          "Imperfecto рассматривает прошлое изнутри, без акцента на начало или конец: описывает обстановку, возраст, состояние и повторявшиеся действия.",
          "Типичные маркеры: antes, de niño, siempre, todos los veranos, mientras.",
        ],
      },
      {
        title: "Формы",
        paragraphs: [
          "У правильных -ar используется -aba-, а у -er/-ir — -ía-. Неправильных глаголов всего три: ir, ser и ver.",
        ],
        table: {
          headers: ["Лицо", "hablar", "comer / vivir", "ser"],
          rows: [
            ["yo", "hablaba", "comía / vivía", "era"],
            ["tú", "hablabas", "comías / vivías", "eras"],
            ["él / ella", "hablaba", "comía / vivía", "era"],
            ["nosotros", "hablábamos", "comíamos / vivíamos", "éramos"],
            ["vosotros", "hablabais", "comíais / vivíais", "erais"],
            ["ellos / ellas", "hablaban", "comían / vivían", "eran"],
          ],
        },
      },
      {
        title: "Фон и событие",
        paragraphs: [
          "Imperfecto создаёт сцену или показывает действие в процессе; indefinido обозначает событие, которое произошло на этом фоне.",
          "Mientras preparaba la cena, sonó el teléfono: приготовление уже шло, а звонок случился как отдельное событие. При выборе важен взгляд говорящего, а не только длина действия.",
        ],
      },
    ],
    summary: [
      "imperfecto = фон, описание, состояние или привычка",
      "indefinido = завершённое событие, двигающее рассказ",
      "-aba для -ar; -ía для -er/-ir",
      "Неправильные imperfecto: iba, era, veía.",
    ],
    examples: [
      { es: "De niña jugaba en la calle.", ru: "В детстве я играла на улице." },
      {
        es: "La casa era grande y tenía jardín.",
        ru: "Дом был большим, и у него был сад.",
      },
      { es: "Mientras dormía, llegó Marta.", ru: "Пока я спал, пришла Марта." },
      {
        es: "Vivía en Madrid, pero en 2025 me mudé.",
        ru: "Я жил в Мадриде, но в 2025 году переехал.",
      },
    ],
    commonMistakes: [
      "Выбор времени только по словам «долго» и «быстро».",
      "Пропуск ударения в comía, vivíamos и éramos.",
      "Indefinido после todos los días при описании привычки без границы.",
    ],
    exerciseIds: ["a2-03", "a2-04", "a2-13"],
  },
  "th-a2-3": {
    objectives: [
      "Строить futuro simple с правильными и частыми неправильными основами.",
      "Различать сообщение о будущем и предположение о настоящем.",
    ],
    sections: [
      {
        title: "Единая модель будущего",
        paragraphs: [
          "Для всех трёх спряжений окончания добавляются к полному инфинитиву: hablaré, comerás, viviremos.",
          "Формы часто выражают прогноз, обещание или более нейтральное будущее. Для ближайшего плана разговорная речь нередко использует ir a + infinitivo.",
        ],
        table: {
          headers: ["Лицо", "Окончание", "viajar"],
          rows: [
            ["yo", "-é", "viajaré"],
            ["tú", "-ás", "viajarás"],
            ["él / ella", "-á", "viajará"],
            ["nosotros", "-emos", "viajaremos"],
            ["vosotros", "-éis", "viajaréis"],
            ["ellos / ellas", "-án", "viajarán"],
          ],
        },
      },
      {
        title: "Неправильные основы",
        paragraphs: [
          "Окончания остаются теми же, но инфинитивная основа сокращается или меняется: tener → tendr-, poder → podr-, hacer → har-, decir → dir-, salir → saldr-.",
        ],
        table: {
          headers: ["Инфинитив", "Основа", "Форма yo"],
          rows: [
            ["tener", "tendr-", "tendré"],
            ["poder", "podr-", "podré"],
            ["hacer", "har-", "haré"],
            ["decir", "dir-", "diré"],
          ],
        },
      },
      {
        title: "Будущее или предположение",
        paragraphs: [
          "Mañana lloverá — прогноз о будущем. ¿Dónde está Ana? Estará en casa — предположение о настоящем: «Наверное, она дома».",
          "Контекст и временной маркер помогают различить эти значения.",
        ],
      },
    ],
    summary: [
      "инфинитив + é, ás, á, emos, éis, án",
      "tendr-, podr-, har-, dir- и saldr- — частые неправильные основы",
      "Futuro выражает будущее или предположение о настоящем.",
    ],
    examples: [
      {
        es: "El próximo año viajaremos a Perú.",
        ru: "В следующем году мы поедем в Перу.",
      },
      { es: "Te llamaré esta noche.", ru: "Я позвоню тебе вечером." },
      { es: "Mañana hará calor.", ru: "Завтра будет жарко." },
      { es: "Serán las ocho.", ru: "Сейчас, наверное, около восьми." },
    ],
    commonMistakes: [
      "Удаление окончания инфинитива у правильного глагола: viajaremos, не viajemos.",
      "Форма teneré вместо tendré.",
      "Пропуск ударения в viajarán или podré.",
    ],
    exerciseIds: ["a2-05", "a2-16"],
  },
  "th-a2-4": {
    objectives: [
      "Заменять прямое и косвенное дополнение без потери рода и числа.",
      "Правильно располагать местоимения рядом со спрягаемым глаголом и инфинитивом.",
    ],
    sections: [
      {
        title: "Прямое дополнение",
        paragraphs: [
          "Прямое дополнение отвечает на вопрос «кого? что?» и заменяется me, te, lo/la, nos, os, los/las. Формы третьего лица согласуются с заменяемым словом.",
          "¿Compraste el pan? Sí, lo compré. ¿Viste a Ana? Sí, la vi.",
        ],
        table: {
          headers: ["Дополнение", "Местоимение", "Пример"],
          rows: [
            ["el libro", "lo", "Lo leo."],
            ["la carta", "la", "La escribo."],
            ["los libros", "los", "Los compro."],
            ["las cartas", "las", "Las envío."],
          ],
        },
      },
      {
        title: "Косвенное дополнение",
        paragraphs: [
          "Косвенное дополнение отвечает на вопрос «кому?» и заменяется me, te, le, nos, os, les. Le и les не различают род.",
          "Уточнение a mi madre или a los niños может оставаться рядом с местоимением: Le doy un regalo a mi madre.",
        ],
      },
      {
        title: "Позиция и сочетание",
        paragraphs: [
          "Перед спрягаемым глаголом: Lo compré. С инфинитивом и герундием возможны две позиции: Lo voy a comprar / Voy a comprarlo; Lo estoy leyendo / Estoy leyéndolo.",
          "Если le/les стоит перед lo/la/los/las, оно превращается в se: Le di el libro → Se lo di.",
        ],
      },
    ],
    summary: [
      "lo/la/los/las = прямое дополнение",
      "le/les = косвенное дополнение без различия рода",
      "Перед lo/la форма le/les превращается в se.",
    ],
    examples: [
      { es: "Las llaves las tengo aquí.", ru: "Ключи у меня здесь." },
      { es: "Le escribo a mi madre.", ru: "Я пишу маме." },
      { es: "Voy a comprarlo.", ru: "Я собираюсь это купить." },
      { es: "Se lo di ayer.", ru: "Я дал(а) ему / ей это вчера." },
    ],
    commonMistakes: [
      "Выбор le по женскому роду адресата вместо понимания функции дополнения.",
      "Согласование lo/la с говорящим, а не с заменяемым предметом.",
      "Сочетание le lo вместо se lo.",
    ],
    exerciseIds: ["a2-08", "a2-09", "a2-19"],
  },
  "th-a2-5": {
    objectives: [
      "Согласовывать возвратное местоимение с подлежащим.",
      "Строить estar + gerundio для действия, происходящего сейчас.",
    ],
    sections: [
      {
        title: "Возвратные глаголы",
        paragraphs: [
          "Часть -se в инфинитиве показывает, что при спряжении нужно местоимение me, te, se, nos, os или se: levantarse → me levanto.",
          "Местоимение относится к участнику действия и не является обычным окончанием глагола.",
        ],
        table: {
          headers: ["Лицо", "Местоимение", "levantarse"],
          rows: [
            ["yo", "me", "me levanto"],
            ["tú", "te", "te levantas"],
            ["él / ella", "se", "se levanta"],
            ["nosotros", "nos", "nos levantamos"],
            ["vosotros", "os", "os levantáis"],
            ["ellos / ellas", "se", "se levantan"],
          ],
        },
      },
      {
        title: "Estar + gerundio",
        paragraphs: [
          "Спрягите estar и добавьте неизменяемый gerundio: -ar → -ando, -er/-ir → -iendo. Конструкция подчёркивает процесс прямо сейчас или временную ситуацию.",
          "Некоторые формы меняют основу: leer → leyendo, dormir → durmiendo, pedir → pidiendo, ir → yendo.",
        ],
      },
      {
        title: "Позиция местоимения",
        paragraphs: [
          "Перед спрягаемой формой: Me estoy vistiendo. При присоединении к герундию: Estoy vistiéndome. Вторая форма часто получает графическое ударение для сохранения произношения.",
          "Простое presente описывает привычку — Leo cada noche; estar + gerundio показывает текущий процесс — Estoy leyendo ahora.",
        ],
      },
    ],
    summary: [
      "me, te, se, nos, os, se согласуются с подлежащим",
      "estar + -ando/-iendo = действие в процессе",
      "leyendo, durmiendo, pidiendo и yendo — неправильные gerundio",
    ],
    examples: [
      { es: "Me levanto a las siete.", ru: "Я встаю в семь." },
      { es: "¿A qué hora te acuestas?", ru: "Во сколько ты ложишься?" },
      { es: "Estamos comiendo ahora.", ru: "Мы сейчас едим." },
      { es: "Ana está leyendo.", ru: "Ана сейчас читает." },
    ],
    commonMistakes: [
      "Сохранение -se после личной формы: me levanto, не me levantarse.",
      "Пропуск estar перед gerundio.",
      "Формы leiendo или dormiendo вместо leyendo и durmiendo.",
    ],
    exerciseIds: ["a2-10", "a2-11", "a2-15", "a2-17"],
  },
  "th-a2-6": {
    objectives: [
      "Строить сравнения неравенства, равенства и превосходную степень.",
      "Различать личную обязанность tener que и безличную необходимость hay que.",
    ],
    sections: [
      {
        title: "Сравнение двух объектов",
        paragraphs: [
          "Для неравенства используйте más/menos + прилагательное + que. Для равенства — tan + прилагательное + como.",
          "С существительным используются más/menos + существительное + que и tanto/tanta/tantos/tantas + существительное + como.",
        ],
        table: {
          headers: ["Значение", "Модель", "Пример"],
          rows: [
            ["больше / меньше", "más/menos ... que", "Es más alto que yo."],
            ["такой же", "tan ... como", "Es tan alto como yo."],
            [
              "столько же",
              "tanto/a/os/as ... como",
              "Tiene tantos libros como Ana.",
            ],
          ],
        },
      },
      {
        title: "Превосходная степень",
        paragraphs: [
          "Артикль + más/menos + прилагательное + de выделяет объект внутри группы: el restaurante más caro de la ciudad.",
          "Частые особые формы: bueno → mejor, malo → peor, grande → mayor, pequeño → menor. Mayor и menor часто относятся к возрасту.",
        ],
      },
      {
        title: "Обязанность",
        paragraphs: [
          "Tener que + infinitivo называет конкретного обязанного участника: Tengo que trabajar. Hay que + infinitivo формулирует общее правило или необходимость без подлежащего.",
          "После обеих конструкций ставится инфинитив, а не личная форма.",
        ],
      },
    ],
    summary: [
      "más/menos ... que = неравенство",
      "tan ... como = равенство признака",
      "артикль + más/menos ... de = превосходная степень",
      "tener que = личная обязанность; hay que = общее правило",
    ],
    examples: [
      {
        es: "Este piso es más grande que ese.",
        ru: "Эта квартира больше той.",
      },
      {
        es: "Ana es tan alta como Luis.",
        ru: "Ана такая же высокая, как Луис.",
      },
      {
        es: "Es el edificio más antiguo del barrio.",
        ru: "Это самое старое здание района.",
      },
      {
        es: "Hay que reservar, pero yo tengo que llamar.",
        ru: "Нужно забронировать, а позвонить должен я.",
      },
    ],
    commonMistakes: [
      "Más alto de mí вместо más alto que yo.",
      "Tan libros como вместо tantos libros como.",
      "Hay que используется с конкретным подлежащим: yo hay que.",
    ],
    exerciseIds: ["a2-06", "a2-07", "a2-12", "a2-18", "a2-20"],
  },
};

export const a2Theory = a2TheoryBase.map((lesson) => ({
  ...lesson,
  ...a2TheoryDetails[lesson.id],
})) satisfies TheoryLesson[];
