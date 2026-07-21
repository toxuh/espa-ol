import type { TheoryLesson } from "../../types";

const b2TheoryBase = [
  {
    id: "th-b2-1",
    level: "B2",
    title: "Условные предложения 2 и 3 типа",
    topics: [
      "condicional tipo 2",
      "condicional tipo 3",
      "subjuntivo imperfecto",
    ],
    body: "\n<b>Тип 2 (гипотетическое условие в настоящем/будущем, маловероятное или нереальное):</b><br>\nSi + imperfecto de subjuntivo, + condicional simple.<br>\n<i>Si tuviera más tiempo, aprendería piano</i> (если бы у меня было больше времени, я бы учился играть на пианино).<br><br>\n<b>Тип 3 (нереальное условие в прошлом — уже поздно, событие не произошло):</b><br>\nSi + pluscuamperfecto de subjuntivo, + condicional compuesto.<br>\n<i>Si hubiera estudiado más, habría aprobado el examen</i> (если бы я больше учился, я бы сдал экзамен — но не сдал).<br><br>\n<b>Формирование imperfecto de subjuntivo:</b> берём форму «ellos» в pretérito indefinido, убираем -ron и добавляем -ra (или -se, вариант):<br>\nhablar → hablaron → habla<b>ra</b>, hablaras, hablara, habláramos, hablarais, hablaran<br>\ntener → tuvieron → tuvie<b>ra</b>, tuvieras, tuviera...<br>\nir/ser → fueron → fue<b>ra</b>, fueras, fuera...<br><br>\nНе путай с типом 1 (реальное условие): <i>Si tengo tiempo, voy al gimnasio</i> (si + presente indicativo, + presente/futuro) — это просто обычное условие, не гипотеза.",
    revision: 1,
  },
  {
    id: "th-b2-2",
    level: "B2",
    title: "Voz pasiva (пассивный залог)",
    topics: ["voz pasiva"],
    body: "\nПассивный залог образуется: <b>ser</b> (в нужном времени) + <b>participio</b>, причём participio согласуется в роде и числе с подлежащим (в отличие от pretérito perfecto).<br><br>\n<i>La novela fue escrita por Cervantes</i> (роман был написан Сервантесом) — fue (ser в pretérito) + escrita (согласовано с la novela, ж.р.).<br>\n<i>Los puentes fueron construidos en 1920</i> — fueron + construidos (согласовано с los puentes, м.р. мн.ч.).<br><br>\nАгент действия (кто совершил действие) вводится через <b>por</b>: <i>escrita por Cervantes</i>.<br><br>\nВ испанском пассив с ser используется реже, чем в русском или английском — гораздо чаще используется <b>пассивная возвратная конструкция (se + глагол)</b>, особенно когда деятель неизвестен или неважен: <i>Se construyeron tres hospitales</i> (были построены три больницы) звучит естественнее, чем <i>Fueron construidos tres hospitales</i>.<br><br>\nПравило выбора: если важно назвать деятеля («кем сделано») — используй ser+participio+por; если деятель неважен — используй se+глагол.",
    revision: 1,
  },
  {
    id: "th-b2-3",
    level: "B2",
    title: "Pluscuamperfecto и Futuro compuesto",
    topics: ["pluscuamperfecto", "futuro compuesto"],
    body: "\nЭто два «сложных» времени, которые показывают действие относительно другого момента времени, а не относительно «сейчас».<br><br>\n<b>Pluscuamperfecto de indicativo</b> (había + participio) — действие, завершившееся ДО другого действия в прошлом:<br>\n<i>Cuando llegué a la fiesta, ellos ya se habían ido</i> (когда я пришёл на вечеринку, они уже ушли — уход произошёл раньше моего прихода).<br>\nhabía hablado, habías hablado, había hablado, habíamos hablado, habíais hablado, habían hablado.<br><br>\n<b>Futuro compuesto</b> (habrá + participio) — действие, которое БУДЕТ завершено к определённому моменту в будущем:<br>\n<i>Para las ocho, ya habremos terminado la cena</i> (к восьми мы уже закончим ужинать).<br>\nhabré hablado, habrás hablado, habrá hablado, habremos hablado, habréis hablado, habrán hablado.<br><br>\nМысленная шкала времени: pluscuamperfecto — «до прошлого», pretérito/imperfecto — «прошлое», presente — «сейчас», futuro compuesto — «до будущего момента», futuro simple — «будущее».",
    revision: 1,
  },
  {
    id: "th-b2-4",
    level: "B2",
    title: "Герундий (gerundio)",
    topics: ["gerundio", "gerundio causal"],
    body: "\nГерундий образуется: -ar → <b>-ando</b> (hablando), -er/-ir → <b>-iendo</b> (comiendo, viviendo).<br><br>\n<b>Неправильные формы</b> (важно запомнить): leer → leyendo, oír → oyendo, dormir → durmiendo, morir → muriendo, pedir → pidiendo, decir → diciendo, poder → pudiendo, ir → yendo.<br><br>\n<b>Основное использование</b> — вместе с estar для описания действия в процессе: <i>Estoy trabajando</i>.<br><br>\nНо герундий также используется <b>самостоятельно</b>, в начале или середине фразы, чтобы выразить:<br>\n— способ действия: <i>Aprendió español viajando por Latinoamérica</i> (выучил испанский, путешествуя)<br>\n— причину: <i>Estudiando mucho, aprobó el examen fácilmente</i> (поскольку много учился, легко сдал экзамен)<br>\n— одновременность: <i>Caminando por la calle, vi a mi amigo</i> (гуляя по улице, я увидел друга)<br><br>\nВажно: в отличие от английского -ing, испанский герундий НЕ используется как подлежащее (нельзя сказать *Fumando es malo*, нужно <i>Fumar es malo</i> — курить вредно, инфинитив).",
    revision: 1,
  },
  {
    id: "th-b2-5",
    level: "B2",
    title: "Subjuntivo: сомнение, эмоции, уступка",
    topics: ["subjuntivo — duda/emoción", "concesivas"],
    body: "\nSubjuntivo используется не только после «quiero que», но и в целом ряде других конструкций.<br><br>\n<b>После выражений эмоции</b> (радость, удивление, сожаление, страх) с придаточным «que»: <i>Me alegra que estés aquí</i> (я рад, что ты здесь), <i>Me sorprende que no me llamaras</i> (меня удивляет, что ты мне не позвонил), <i>Siento que no puedas venir</i>.<br><br>\n<b>После выражений сомнения</b>: <i>Dudo que sea verdad</i>, <i>Es posible que llueva</i>.<br><br>\n<b>Aunque (хотя/даже если) — двойное значение:</b><br>\n— с indicativo, если факт известен и реален: <i>Aunque llueve, salgo</i> (хотя [действительно] идёт дождь, я выхожу)<br>\n— с subjuntivo, если ситуация гипотетическая или говорящий не уверен: <i>Aunque llueva, saldré</i> (даже если пойдёт дождь [неизвестно, пойдёт ли], я выйду)<br><br>\nОбщее правило subjuntivo: как только появляется субъективность, неопределённость или эмоциональная оценка ситуации (а не просто факт) — с высокой вероятностью нужен subjuntivo.",
    revision: 1,
  },
  {
    id: "th-b2-6",
    level: "B2",
    title: "Разные полезные конструкции",
    topics: [
      "verbos con preposición",
      "verbos de cambio",
      "lo que",
      "cuál vs qué",
      "discurso indirecto",
    ],
    body: "\n<b>Глаголы с фиксированным предлогом</b> — нужно запоминать целиком: acostumbrarse <b>a</b> (привыкать к), soñar <b>con</b> (мечтать о), reírse <b>de</b> (смеяться над), depender <b>de</b> (зависеть от), consistir <b>en</b> (заключаться в), tratarse <b>de</b> (речь идёт о).<br><br>\n<b>Глаголы изменения состояния</b> («стать»):<br>\n— <b>ponerse</b> + прилагательное — временное физическое/эмоциональное изменение: <i>se puso nervioso</i><br>\n— <b>volverse</b> + прилагательное — более устойчивая перемена характера: <i>se volvió muy desconfiado</i><br>\n— <b>hacerse</b> + прилагательное/существительное — изменение через собственные усилия: <i>se hizo rico</i><br>\n— <b>llegar a ser</b> + существительное — постепенный, долгий результат: <i>llegó a ser presidente</i><br><br>\n<b>Lo que</b> — «то, что» для абстрактных идей: <i>No sé lo que quiere</i>.<br><br>\n<b>Cuál vs qué:</b> «qué» спрашивает об определении/категории (<i>¿Qué es esto?</i>), «cuál» — о выборе из вариантов, особенно перед «ser» (<i>¿Cuál es tu color favorito?</i>).<br><br>\n<b>Косвенные вопросы:</b> si вводит общий вопрос без вопросительного знака: <i>Me preguntó si quería ir con ellos</i>. При прошедшем глаголе сообщения настоящее обычно сдвигается в imperfecto: <i>quiero → quería</i>.",
    revision: 2,
  },
] satisfies TheoryLesson[];

const b2TheoryDetails: Record<
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
  "th-b2-1": {
    objectives: [
      "Образовывать imperfecto de subjuntivo от формы ellos в indefinido.",
      "Выбирать между реальным условием, гипотезой о настоящем и нереальным условием в прошлом.",
    ],
    sections: [
      {
        title: "Форма imperfecto de subjuntivo",
        paragraphs: [
          "Возьмите форму ellos в indefinido, уберите -ron и добавьте -ra, -ras, -ra, -ramos, -rais, -ran. Ряд на -se (hablase, tuviese) равноправен.",
          "Все неправильности indefinido автоматически переходят в subjuntivo: tuvieron → tuviera, pudieron → pudiera, fueron → fuera.",
        ],
        table: {
          headers: ["Инфинитив", "ellos indefinido", "Форма yo"],
          rows: [
            ["hablar", "hablaron", "hablara"],
            ["tener", "tuvieron", "tuviera"],
            ["poder", "pudieron", "pudiera"],
            ["ir / ser", "fueron", "fuera"],
          ],
        },
      },
      {
        title: "Три типа условия",
        paragraphs: [
          "Тип 1 описывает реальную возможность: si + presente de indicativo, главная часть в presente или futuro. Si tengo tiempo, voy al gimnasio.",
          "Тип 2 описывает гипотезу о настоящем или будущем: si + imperfecto de subjuntivo, главная часть в condicional simple.",
          "Тип 3 описывает то, чего уже не изменить: si + pluscuamperfecto de subjuntivo, главная часть в condicional compuesto.",
        ],
        table: {
          headers: ["Тип", "После si", "Главная часть"],
          rows: [
            ["реальное", "presente de indicativo", "presente / futuro"],
            [
              "гипотеза о настоящем",
              "imperfecto de subjuntivo",
              "condicional simple",
            ],
            [
              "нереальное в прошлом",
              "pluscuamperfecto de subjuntivo",
              "condicional compuesto",
            ],
          ],
        },
      },
      {
        title: "Что нельзя ставить после si",
        paragraphs: [
          "После условного si не употребляются ни presente de subjuntivo, ни condicional: si tuviera, а не si tendría.",
          "Части предложения можно менять местами без изменения наклонений: Aprendería piano si tuviera más tiempo.",
        ],
      },
      {
        title: "Смешанные условия",
        paragraphs: [
          "Прошлое условие может иметь последствие в настоящем: Si hubiera estudiado medicina, ahora sería médico.",
          "Такое смешение допустимо, когда время условия и время результата действительно различаются.",
        ],
      },
    ],
    summary: [
      "imperfecto de subjuntivo = ellos indefinido без -ron + -ra/-se",
      "тип 2: si + imperfecto de subjuntivo → condicional simple",
      "тип 3: si + pluscuamperfecto de subjuntivo → condicional compuesto",
      "после si не бывает ни condicional, ни presente de subjuntivo",
    ],
    examples: [
      {
        es: "Si tuviera más tiempo, aprendería piano.",
        ru: "Если бы у меня было больше времени, я бы учился играть на пианино.",
      },
      {
        es: "Si yo fuera tú, aceptaría la oferta.",
        ru: "На твоём месте я бы принял предложение.",
      },
      {
        es: "Si me lo hubieras dicho, te habría ayudado.",
        ru: "Если бы ты мне сказал, я бы тебе помог.",
      },
      {
        es: "Si hubiéramos salido antes, no habríamos perdido el vuelo.",
        ru: "Если бы мы вышли раньше, мы бы не опоздали на рейс.",
      },
    ],
    commonMistakes: [
      "Condicional после si: si tendría вместо si tuviera.",
      "Смешение типов: si hubiera sabido, te lo diría вместо te lo habría dicho.",
      "Пропуск графического ударения в формах nosotros: habláramos, tuviéramos.",
    ],
    exerciseIds: ["b2-01", "b2-02", "b2-03", "b2-15"],
  },
  "th-b2-2": {
    objectives: [
      "Строить пассив ser + participio с согласованием причастия.",
      "Выбирать между пассивом с ser и конструкцией с se в зависимости от роли деятеля.",
    ],
    sections: [
      {
        title: "Ser + participio",
        paragraphs: [
          "Время выражает вспомогательный ser, а причастие согласуется с подлежащим в роде и числе: fue escrita, fueron construidos.",
          "Деятель, если он назван, вводится предлогом por: La novela fue escrita por Cervantes.",
        ],
        table: {
          headers: ["Подлежащее", "Пассив", "Перевод"],
          rows: [
            ["la novela", "fue escrita", "роман был написан"],
            ["el puente", "fue construido", "мост был построен"],
            ["las cartas", "fueron enviadas", "письма были отправлены"],
          ],
        },
      },
      {
        title: "Pasiva refleja с se",
        paragraphs: [
          "Когда деятель неизвестен или неважен, испанский предпочитает se + глагол: Se construyeron tres hospitales.",
          "Глагол согласуется с объектом, который становится грамматическим подлежащим: se vende una casa, se venden casas.",
        ],
      },
      {
        title: "Ser или estar",
        paragraphs: [
          "Ser + participio называет само действие: La puerta fue cerrada a las ocho.",
          "Estar + participio описывает получившееся состояние: La puerta estaba cerrada. Это не пассив действия.",
        ],
      },
    ],
    summary: [
      "ser + participio, согласованное с подлежащим",
      "деятель вводится предлогом por",
      "без названного деятеля естественнее se + глагол",
      "estar + participio описывает состояние, а не действие",
    ],
    examples: [
      {
        es: "La ley fue aprobada por el parlamento.",
        ru: "Закон был принят парламентом.",
      },
      {
        es: "Los puentes fueron construidos en 1920.",
        ru: "Мосты были построены в 1920 году.",
      },
      {
        es: "Se firmaron dos acuerdos.",
        ru: "Были подписаны два соглашения.",
      },
      {
        es: "El museo está cerrado los lunes.",
        ru: "Музей закрыт по понедельникам.",
      },
    ],
    commonMistakes: [
      "Отсутствие согласования причастия: fue escrito la novela.",
      "Единственное число глагола в pasiva refleja: se vende casas.",
      "Замена ser на estar при описании действия: la ley estuvo aprobada.",
    ],
    exerciseIds: ["b2-04", "b2-16"],
  },
  "th-b2-3": {
    objectives: [
      "Строить pluscuamperfecto и futuro compuesto с нужной формой haber.",
      "Помещать действие на шкале времени относительно другой точки, а не относительно момента речи.",
    ],
    sections: [
      {
        title: "Pluscuamperfecto de indicativo",
        paragraphs: [
          "Haber в imperfecto (había, habías, había, habíamos, habíais, habían) + неизменяемое причастие.",
          "Время называет действие, завершившееся раньше другого прошедшего: Cuando llegué, ellos ya se habían ido.",
        ],
      },
      {
        title: "Futuro compuesto",
        paragraphs: [
          "Haber в futuro (habré, habrás, habrá, habremos, habréis, habrán) + причастие.",
          "Действие завершится к названному будущему моменту: Para las ocho ya habremos terminado la cena.",
        ],
        table: {
          headers: ["Время", "haber", "Пример"],
          rows: [
            ["pluscuamperfecto", "había", "ya había empezado"],
            ["futuro compuesto", "habré", "ya habré terminado"],
          ],
        },
      },
      {
        title: "Ориентиры на шкале времени",
        paragraphs: [
          "Pluscuamperfecto почти всегда сопровождается второй точкой прошлого: cuando llegué, antes de, hasta entonces, ya.",
          "Futuro compuesto требует указания срока: para diciembre, dentro de dos horas, cuando vuelvas.",
        ],
      },
    ],
    summary: [
      "había + participio = действие до другого прошедшего",
      "habré + participio = действие, завершённое к моменту в будущем",
      "причастие после haber не согласуется",
      "обоим временам нужна вторая точка отсчёта",
    ],
    examples: [
      {
        es: "Cuando llegamos, la película ya había empezado.",
        ru: "Когда мы пришли, фильм уже начался.",
      },
      {
        es: "Nunca había visto algo así.",
        ru: "Я никогда не видел ничего подобного.",
      },
      {
        es: "Para diciembre habremos terminado el curso.",
        ru: "К декабрю мы закончим курс.",
      },
      {
        es: "Cuando vuelvas, ya habré preparado la cena.",
        ru: "Когда ты вернёшься, я уже приготовлю ужин.",
      },
    ],
    commonMistakes: [
      "Замена pluscuamperfecto на indefinido: cuando llegamos, la película empezó.",
      "Форма haberé вместо habré.",
      "Согласование причастия: habían salidos.",
    ],
    exerciseIds: ["b2-09", "b2-10", "b2-18", "b2-19"],
  },
  "th-b2-4": {
    objectives: [
      "Образовывать gerundio, включая частые неправильные формы.",
      "Выражать герундием способ, причину и одновременность, не используя его как подлежащее.",
    ],
    sections: [
      {
        title: "Образование",
        paragraphs: [
          "Глаголы на -ar получают -ando, глаголы на -er и -ir — -iendo: hablando, comiendo, viviendo.",
          "Частые неправильные формы: leyendo, oyendo, durmiendo, muriendo, pidiendo, diciendo, pudiendo, yendo.",
        ],
        table: {
          headers: ["Инфинитив", "Gerundio", "Причина изменения"],
          rows: [
            ["leer", "leyendo", "i между гласными переходит в y"],
            ["dormir", "durmiendo", "изменение основы o → u"],
            ["pedir", "pidiendo", "изменение основы e → i"],
            ["ir", "yendo", "особая форма"],
          ],
        },
      },
      {
        title: "Самостоятельный герундий",
        paragraphs: [
          "Способ действия: Aprendió español viajando por Latinoamérica.",
          "Причина: Estudiando mucho, aprobó el examen fácilmente. Одновременность: Caminando por la calle, vi a mi amigo.",
        ],
      },
      {
        title: "Где герундий не употребляется",
        paragraphs: [
          "Подлежащим служит инфинитив, а не герундий: Fumar es malo, а не Fumando es malo.",
          "Определением к существительному служит придаточное или прилагательное: una caja que contiene libros, а не una caja conteniendo libros.",
        ],
      },
    ],
    summary: [
      "-ar → -ando; -er/-ir → -iendo",
      "leyendo, durmiendo, pidiendo, diciendo, yendo нужно запомнить",
      "герундий выражает способ, причину или одновременность",
      "подлежащее выражается инфинитивом, а не герундием",
    ],
    examples: [
      {
        es: "Estudiando mucho, aprobó el examen.",
        ru: "Много занимаясь, он сдал экзамен.",
      },
      {
        es: "Caminando por la calle, vi a mi amigo.",
        ru: "Гуляя по улице, я увидел друга.",
      },
      {
        es: "Aprendió cocinando con su abuela.",
        ru: "Он научился, готовя вместе с бабушкой.",
      },
      {
        es: "Fumar es malo para la salud.",
        ru: "Курить вредно для здоровья.",
      },
    ],
    commonMistakes: [
      "Герундий в роли подлежащего по образцу английского -ing.",
      "Правильное окончание у глаголов с изменением основы: durmiendo, а не dormiendo.",
    ],
    exerciseIds: ["b2-05", "b2-17"],
  },
  "th-b2-5": {
    objectives: [
      "Использовать subjuntivo после выражений эмоции и сомнения.",
      "Выбирать наклонение после aunque в зависимости от того, факт это или гипотеза.",
    ],
    sections: [
      {
        title: "Эмоция и оценка",
        paragraphs: [
          "Me alegra que, me sorprende que, siento que и es una pena que вводят subjuntivo, даже когда событие реально.",
          "Наклонение здесь выбирает не истинность факта, а сам тип главной части: она оценивает событие, а не сообщает его.",
        ],
      },
      {
        title: "Сомнение и вероятность",
        paragraphs: [
          "Dudo que, no creo que, es posible que и puede que требуют subjuntivo: Dudo que sea verdad.",
          "Утверждение уверенности сохраняет indicativo: Estoy seguro de que es verdad; Creo que tiene razón.",
        ],
      },
      {
        title: "Согласование времён",
        paragraphs: [
          "Главная часть в presente обычно ведёт к presente de subjuntivo: Me sorprende que no me llames.",
          "Главная часть в прошедшем сдвигает придаточное в imperfecto de subjuntivo: Me sorprendió que no me llamaras.",
        ],
        table: {
          headers: ["Главная часть", "Придаточное", "Пример"],
          rows: [
            ["me alegra", "presente de subjuntivo", "que estés aquí"],
            ["me alegró", "imperfecto de subjuntivo", "que estuvieras allí"],
          ],
        },
      },
      {
        title: "Aunque: факт или гипотеза",
        paragraphs: [
          "С indicativo aunque признаёт известный факт: Aunque llueve, salgo.",
          "С subjuntivo aunque вводит предположение или несущественную для говорящего информацию: Aunque llueva, saldré; Aunque tuviera dinero, no sería feliz.",
        ],
      },
    ],
    summary: [
      "эмоция и оценка + que → subjuntivo",
      "сомнение → subjuntivo; уверенность → indicativo",
      "прошедшая главная часть требует imperfecto de subjuntivo",
      "aunque + indicativo = факт; aunque + subjuntivo = гипотеза",
    ],
    examples: [
      {
        es: "Me alegra que estés aquí.",
        ru: "Я рад, что ты здесь.",
      },
      {
        es: "Me sorprendió que no me llamaras.",
        ru: "Меня удивило, что ты мне не позвонил.",
      },
      {
        es: "Dudo que lleguen a tiempo.",
        ru: "Сомневаюсь, что они приедут вовремя.",
      },
      {
        es: "Aunque tuviera mucho dinero, no sería feliz sin amigos.",
        ru: "Даже если бы у меня было много денег, я не был бы счастлив без друзей.",
      },
    ],
    commonMistakes: [
      "Presente de subjuntivo после прошедшей главной части: me sorprendió que no me llames.",
      "Indicativo после dudo que или no creo que.",
      "Автоматический subjuntivo после любого aunque без учёта смысла.",
    ],
    exerciseIds: ["b2-07", "b2-08"],
  },
  "th-b2-6": {
    objectives: [
      "Запоминать глаголы вместе с их предлогом и различать глаголы изменения состояния.",
      "Использовать lo que, различать qué и cuál и передавать косвенный вопрос.",
    ],
    sections: [
      {
        title: "Глаголы с фиксированным предлогом",
        paragraphs: [
          "Предлог входит в словарную статью глагола и не выводится из русского перевода: acostumbrarse a, soñar con, reírse de, depender de, consistir en, tratarse de.",
          "Перед инфинитивом предлог сохраняется: me acostumbré a levantarme temprano.",
        ],
        table: {
          headers: ["Глагол", "Предлог", "Пример"],
          rows: [
            ["acostumbrarse", "a", "acostumbrarse a vivir aquí"],
            ["reírse", "de", "reírse de un chiste"],
            ["consistir", "en", "consistir en tres partes"],
            ["soñar", "con", "soñar con viajar"],
          ],
        },
      },
      {
        title: "Глаголы изменения состояния",
        paragraphs: [
          "Ponerse — временная эмоция или физическое состояние: se puso nervioso. Volverse — устойчивая перемена характера: se volvió desconfiado.",
          "Hacerse — результат собственных усилий или выбора: se hizo médico. Llegar a ser — итог долгого пути: llegó a ser presidente.",
        ],
      },
      {
        title: "Lo que, qué и cuál",
        paragraphs: [
          "Lo que заменяет целую идею, а не конкретное существительное: No entiendo lo que quieres decir.",
          "Qué спрашивает об определении или сочетается с существительным (¿Qué es esto?, ¿Qué color prefieres?), cuál предполагает выбор из вариантов, особенно перед ser: ¿Cuál es tu color favorito?",
        ],
      },
      {
        title: "Косвенная речь и косвенный вопрос",
        paragraphs: [
          "Общий вопрос вводится союзом si и пишется без вопросительных знаков: Me preguntó si quería ir con ellos.",
          "После прошедшего глагола сообщения presente сдвигается в imperfecto, а indefinido — в pluscuamperfecto: Dijo que estaba cansada; Dijo que ya había llegado.",
        ],
      },
    ],
    summary: [
      "предлог запоминается вместе с глаголом",
      "ponerse — временно, volverse — устойчиво, hacerse — усилием, llegar a ser — постепенно",
      "lo que отсылает к идее, а не к существительному",
      "cuál выбирает из вариантов, qué определяет понятие",
      "косвенный вопрос вводится si и сдвигает время назад",
    ],
    examples: [
      {
        es: "Por fin me acostumbré a vivir aquí.",
        ru: "Я наконец привык здесь жить.",
      },
      {
        es: "Se puso nervioso antes de la entrevista.",
        ru: "Он занервничал перед собеседованием.",
      },
      {
        es: "No entiendo lo que quieres decir.",
        ru: "Я не понимаю, что ты хочешь сказать.",
      },
      {
        es: "Me preguntó si quería ir con ellos al cine.",
        ru: "Он спросил, хочу ли я пойти с ними в кино.",
      },
    ],
    commonMistakes: [
      "Выбор предлога по русскому переводу: acostumbrarse a, а не acostumbrarse de.",
      "Употребление cuál перед существительным вместо qué.",
      "Сохранение presente в косвенной речи после прошедшего dijo или preguntó.",
    ],
    exerciseIds: ["b2-06", "b2-11", "b2-12", "b2-13", "b2-14", "b2-20"],
  },
};

export const b2Theory = b2TheoryBase.map((lesson) => ({
  ...lesson,
  ...b2TheoryDetails[lesson.id],
})) satisfies TheoryLesson[];
