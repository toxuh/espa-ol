import type { TheoryLesson } from "../../types";

const a1TheoryBase = [
  {
    id: "th-a1-1",
    level: "A1",
    title: "Ser y estar: два глагола «быть»",
    topics: ["ser / estar"],
    body: "\nВ испанском два глагола переводятся как «быть» — <b>ser</b> и <b>estar</b>, но выбор между ними зависит не просто от того, насколько признак постоянный.<br><br>\n<b>Ser</b> идентифицирует человека или предмет и описывает его как представителя категории или носителя характеристики:<br>\n— профессия и род занятий: <i>Soy médico</i> (я врач)<br>\n— национальность и происхождение: <i>Es de España</i> (он из Испании)<br>\n— характеристика и внешность: <i>Ella es simpática</i> (она приятная в общении)<br>\n— материал: <i>La mesa es de madera</i> (стол из дерева)<br>\n— время, дата и место события: <i>Son las tres</i>; <i>La fiesta es en casa</i>.<br><br>\n<b>Estar</b> показывает состояние или местоположение:<br>\n— местоположение людей и предметов: <i>Madrid está en España</i><br>\n— физическое или эмоциональное состояние: <i>Estoy cansado</i> (я устал)<br>\n— результат действия: <i>La puerta está abierta</i> (дверь открыта)<br>\n— estar + gerundio (действие в процессе): <i>Estoy comiendo</i>.<br><br>\nПодсказка «ser — постоянное, estar — временное» иногда помогает в начале, но не является правилом: Madrid находится в Испании постоянно, однако говорят <i>Madrid está en España</i>; молодость меняется со временем, но говорят <i>Es joven</i>.<br><br>\nСпряжение в настоящем времени:<br>\nser: soy, eres, es, somos, sois, son<br>\nestar: estoy, estás, está, estamos, estáis, están<br><br>\nС некоторыми прилагательными выбор глагола меняет смысл: <i>Es aburrido</i> (он скучный человек) vs <i>Está aburrido</i> (ему скучно); <i>Es listo</i> (он умный) vs <i>Está listo</i> (он готов).",
    revision: 1,
  },
  {
    id: "th-a1-2",
    level: "A1",
    title: "Артикли и согласование прилагательных",
    topics: ["artículos", "adjetivos — género"],
    body: "\nВ испанском у существительных есть род (мужской/женский) и число, и артикль, и прилагательное должны с ним согласовываться.<br><br>\n<b>Определённые артикли</b> (когда предмет уже известен): el (м.р. ед.ч.), la (ж.р. ед.ч.), los (м.р. мн.ч.), las (ж.р. мн.ч.). Пример: <i>el libro</i>, <i>la casa</i>, <i>los libros</i>, <i>las casas</i>.<br><br>\n<b>Неопределённые артикли</b> (когда предмет упоминается впервые): un, una, unos, unas. Пример: <i>un perro</i>, <i>una gata</i>.<br><br>\nКак определить род существительного: слова на <b>-o</b> обычно мужского рода (el libro), слова на <b>-a</b> — женского (la mesa), но есть исключения: <i>el día</i> (день, м.р.), <i>la mano</i> (рука, ж.р.), <i>el problema</i>, <i>el mapa</i> (м.р., хотя оканчиваются на -a).<br><br>\n<b>Прилагательные</b> согласуются в роде и числе с существительным, к которому относятся, и обычно ставятся ПОСЛЕ него: <i>un coche rojo</i> (красная машина), <i>una casa roja</i>, <i>unos coches rojos</i>, <i>unas casas rojas</i>. Прилагательные на -e или на согласную часто не меняются по родам: <i>un chico inteligente</i> / <i>una chica inteligente</i>.",
    revision: 1,
  },
  {
    id: "th-a1-3",
    level: "A1",
    title: "Множественное число существительных",
    topics: ["plural"],
    body: "\nПравила образования множественного числа в испанском довольно логичны:<br><br>\n1. Если слово оканчивается на гласную — добавляем <b>-s</b>: <i>casa → casas</i>, <i>libro → libros</i>, <i>coche → coches</i>.<br>\n2. Если слово оканчивается на согласную — добавляем <b>-es</b>: <i>ciudad → ciudades</i>, <i>profesor → profesores</i>, <i>flor → flores</i>.<br>\n3. Если слово оканчивается на <b>-z</b>, буква z меняется на <b>c</b> перед -es: <i>lápiz → lápices</i>, <i>vez → veces</i>.<br>\n4. Слова, оканчивающиеся на безударную -s, во множественном числе не меняются: <i>el lunes → los lunes</i>, <i>la crisis → las crisis</i>.<br><br>\nАртикль тоже меняется на множественное число: <i>el libro → los libros</i>, <i>la casa → las casas</i>. Не забывай менять и прилагательные: <i>el coche rojo → los coches rojos</i>.",
    revision: 1,
  },
  {
    id: "th-a1-4",
    level: "A1",
    title: "Настоящее время правильных глаголов",
    topics: ["presente -ar", "presente -er", "presente -ir", "presente ser"],
    body: "\nВ испанском три группы правильных глаголов по окончанию инфинитива: <b>-ar</b>, <b>-er</b>, <b>-ir</b>. У каждой — свой набор окончаний в настоящем времени (presente de indicativo).<br><br>\n<b>-ar (hablar — говорить):</b> habl<b>o</b>, habl<b>as</b>, habl<b>a</b>, habl<b>amos</b>, habl<b>áis</b>, habl<b>an</b><br>\n<b>-er (comer — есть):</b> com<b>o</b>, com<b>es</b>, com<b>e</b>, com<b>emos</b>, com<b>éis</b>, com<b>en</b><br>\n<b>-ir (vivir — жить):</b> viv<b>o</b>, viv<b>es</b>, viv<b>e</b>, viv<b>imos</b>, viv<b>ís</b>, viv<b>en</b><br><br>\nОбрати внимание, что у -er и -ir глаголов формы совпадают везде, кроме nosotros/vosotros (-emos/-éis у -er, -imos/-ís у -ir).<br><br>\nГлагол <b>ser</b> (быть) неправильный и не подчиняется этим схемам: soy, eres, es, somos, sois, son.<br><br>\nНастоящее время используется для: привычных действий (<i>Trabajo todos los días</i>), общих истин (<i>El agua hierve a 100 grados</i>) и текущих состояний (<i>Vivo en Madrid</i>).",
    revision: 1,
  },
  {
    id: "th-a1-5",
    level: "A1",
    title: "Tener, hay, ir + a",
    topics: ["verbo tener", "hay", "ir + a"],
    body: '\nТри очень частотные конструкции для начинающих:<br><br>\n<b>Tener</b> (иметь) — неправильный глагол: tengo, tienes, tiene, tenemos, tenéis, tienen. Используется для обладания (<i>Tengo un coche</i>), возраста (<i>Tengo veinte años</i> — дословно «имею двадцать лет») и в конструкции <b>tener que + infinitivo</b> (быть должным что-то сделать): <i>Tengo que estudiar</i>.<br><br>\n<b>Hay</b> — особая неизменяемая форма глагола haber, означает «есть/имеется», используется и в единственном, и во множественном числе: <i>Hay un libro en la mesa</i> (есть одна книга), <i>Hay muchos libros</i> (есть много книг). Никогда не меняется по лицам и числам, в отличие от tener.<br><br>\n<b>Ir a + infinitivo</b> — конструкция ближайшего будущего (аналог английского "going to"): <i>Voy a estudiar</i> (я собираюсь учиться), <i>Vamos a comer</i> (мы собираемся поесть). Спряжение ir: voy, vas, va, vamos, vais, van.',
    revision: 1,
  },
  {
    id: "th-a1-6",
    level: "A1",
    title: "Gustar и притяжательные местоимения",
    topics: ["gustar", "posesivos"],
    body: "\n<b>Gustar</b> (нравиться) устроен не так, как в русском: подлежащим в испанском предложении становится тот предмет, который нравится, а человек, которому нравится, выражается косвенным местоимением.<br><br>\nСхема: <i>(a + человек,) me/te/le/nos/os/les + gusta/gustan + предмет</i>.<br>\n— Если предмет один: <i>Me gusta el café</i> (мне нравится кофе — дословно «кофе нравится мне»)<br>\n— Если предметов много: <i>Me gustan los gatos</i> (мне нравятся кошки)<br>\n— Если после gustar инфинитив глагола — всегда единственное число: <i>Me gusta bailar</i>.<br><br>\nПохожим образом ведут себя глаголы <i>encantar</i> (обожать), <i>interesar</i> (интересовать), <i>doler</i> (болеть).<br><br>\n<b>Притяжательные местоимения</b> (краткая форма, перед существительным): mi/mis (мой), tu/tus (твой), su/sus (его/её/их/Ваш), nuestro/nuestra/nuestros/nuestras (наш), vuestro/vuestra/vuestros/vuestras (ваш). Они согласуются в числе (а nuestro/vuestro ещё и в роде) с предметом обладания, а не с обладателем: <i>su perro</i> (его/её собака), <i>nuestra casa</i> (наш дом, ж.р., т.к. casa женского рода).",
    revision: 1,
  },
] satisfies TheoryLesson[];

const a1TheoryDetails: Record<
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
  "th-a1-1": {
    objectives: [
      "Различать идентификацию и характеристику с ser и состояние или местоположение с estar.",
      "Спрягать ser и estar в presente.",
    ],
    sections: [
      {
        title: "Главная идея",
        paragraphs: [
          "Ser отвечает на вопрос «кто или что это?» и относит человека или предмет к категории. Estar показывает, где кто-то находится или в каком состоянии он сейчас.",
          "Подсказка «постоянное против временного» иногда помогает, но не является правилом: Madrid está en España, хотя это постоянное местоположение.",
        ],
      },
      {
        title: "Формы настоящего времени",
        paragraphs: [
          "Формы обоих глаголов нужно выучить как отдельные парадигмы.",
        ],
        table: {
          headers: ["Лицо", "ser", "estar"],
          rows: [
            ["yo", "soy", "estoy"],
            ["tú", "eres", "estás"],
            ["él / ella / usted", "es", "está"],
            ["nosotros", "somos", "estamos"],
            ["vosotros", "sois", "estáis"],
            ["ellos / ellas / ustedes", "son", "están"],
          ],
        },
      },
      {
        title: "Как выбрать",
        paragraphs: [
          "Используйте ser для профессии, происхождения, материала, времени и общей характеристики. Используйте estar для местоположения людей и предметов, самочувствия и результата действия.",
          "С некоторыми прилагательными выбор меняет смысл: es aburrido — он скучный, está aburrido — ему скучно.",
        ],
      },
    ],
    summary: [
      "ser = идентификация или характеристика",
      "estar = состояние или местоположение",
      "Формы soy/estoy, eres/estás и es/está нельзя смешивать.",
    ],
    examples: [
      { es: "Ana es profesora.", ru: "Ана — преподавательница." },
      { es: "Ana está cansada.", ru: "Ана устала." },
      { es: "El museo está en el centro.", ru: "Музей находится в центре." },
      { es: "La mesa es de madera.", ru: "Стол деревянный." },
    ],
    commonMistakes: [
      "Está profesor вместо es profesor.",
      "Es en la mesa вместо está en la mesa.",
      "Выбор глагола только по критерию постоянства.",
    ],
    exerciseIds: ["a1-01", "a1-02", "a1-14"],
  },
  "th-a1-2": {
    objectives: [
      "Выбирать определённый и неопределённый артикль по роду и числу.",
      "Согласовывать прилагательное с существительным.",
    ],
    sections: [
      {
        title: "Артикли",
        paragraphs: [
          "Определённый артикль el/la/los/las указывает на известный предмет. Неопределённый un/una/unos/unas вводит новый или один из многих предметов.",
        ],
        table: {
          headers: ["Число и род", "Определённый", "Неопределённый"],
          rows: [
            ["мужской, ед.", "el", "un"],
            ["женский, ед.", "la", "una"],
            ["мужской, мн.", "los", "unos"],
            ["женский, мн.", "las", "unas"],
          ],
        },
      },
      {
        title: "Род существительных",
        paragraphs: [
          "Окончания -o и -a дают полезную подсказку, но род лучше запоминать вместе с артиклем: el libro, la casa, el día, la mano.",
          "Перед ударным a- некоторые существительные женского рода получают el в единственном числе: el agua fría, но las aguas frías.",
        ],
      },
      {
        title: "Согласование прилагательных",
        paragraphs: [
          "Прилагательное согласуется с существительным в роде и числе: coche rojo, casa roja, coches rojos, casas rojas.",
          "Прилагательные на -e и многие прилагательные на согласную имеют одну форму рода: chico inteligente, chica inteligente.",
        ],
      },
    ],
    summary: [
      "Учите существительное вместе с артиклем.",
      "Согласуйте и артикль, и прилагательное.",
      "el agua остаётся словом женского рода.",
    ],
    examples: [
      { es: "una casa blanca", ru: "белый дом" },
      { es: "los coches nuevos", ru: "новые машины" },
      { es: "el agua fría", ru: "холодная вода" },
      { es: "una chica inteligente", ru: "умная девушка" },
    ],
    commonMistakes: [
      "uno libro вместо un libro.",
      "una coche roja вместо un coche rojo.",
      "Согласование прилагательного с говорящим, а не с существительным.",
    ],
    exerciseIds: ["a1-03", "a1-04", "a1-13"],
  },
  "th-a1-3": {
    objectives: [
      "Образовывать множественное число после гласной и согласной.",
      "Правильно менять -z на -c перед -es.",
    ],
    sections: [
      {
        title: "Основные окончания",
        paragraphs: [
          "После гласной обычно добавляется -s: casa → casas. После согласной добавляется -es: ciudad → ciudades.",
        ],
        table: {
          headers: ["Конец слова", "Правило", "Пример"],
          rows: [
            ["гласная", "+ s", "libro → libros"],
            ["согласная", "+ es", "profesor → profesores"],
            ["-z", "z → c + es", "lápiz → lápices"],
          ],
        },
      },
      {
        title: "Слова без изменения",
        paragraphs: [
          "Некоторые слова на безударную -s не меняют форму: el lunes → los lunes, la crisis → las crisis. Число видно по артиклю и другим согласуемым словам.",
        ],
      },
      {
        title: "Согласование всей группы",
        paragraphs: [
          "Во множественном числе меняется не только существительное: el coche rojo → los coches rojos. Проверяйте артикль, существительное и прилагательное вместе.",
        ],
      },
    ],
    summary: [
      "гласная + s",
      "согласная + es",
      "z → c перед -es",
      "Меняйте все согласуемые слова.",
    ],
    examples: [
      { es: "la mesa — las mesas", ru: "стол — столы" },
      { es: "la ciudad — las ciudades", ru: "город — города" },
      { es: "el lápiz — los lápices", ru: "карандаш — карандаши" },
      { es: "el lunes — los lunes", ru: "понедельник — понедельники" },
    ],
    commonMistakes: [
      "ciudads вместо ciudades.",
      "lápizes вместо lápices.",
      "Сохранение единственного артикля перед множественным числом.",
    ],
    exerciseIds: ["a1-12", "a1-19"],
  },
  "th-a1-4": {
    objectives: [
      "Спрягать правильные глаголы на -ar, -er и -ir в presente.",
      "Узнавать отдельную парадигму неправильного ser.",
    ],
    sections: [
      {
        title: "Как образуется presente",
        paragraphs: [
          "Уберите окончание инфинитива -ar, -er или -ir и добавьте личное окончание. Местоимение часто опускается, потому что лицо видно по форме глагола.",
        ],
      },
      {
        title: "Три модели окончаний",
        paragraphs: [
          "Сравнивайте модели по одному лицу, чтобы видеть общие части и различия.",
        ],
        table: {
          headers: ["Лицо", "hablar", "comer", "vivir"],
          rows: [
            ["yo", "hablo", "como", "vivo"],
            ["tú", "hablas", "comes", "vives"],
            ["él / ella", "habla", "come", "vive"],
            ["nosotros", "hablamos", "comemos", "vivimos"],
            ["vosotros", "habláis", "coméis", "vivís"],
            ["ellos / ellas", "hablan", "comen", "viven"],
          ],
        },
      },
      {
        title: "Когда используется",
        paragraphs: [
          "Presente описывает привычки, факты и текущее положение дел: Trabajo cada día, El agua hierve, Vivo en Madrid.",
          "Ser не строится по этим моделям: soy, eres, es, somos, sois, son.",
        ],
      },
    ],
    summary: [
      "Основа = инфинитив без -ar/-er/-ir.",
      "У yo правильных глаголов окончание -o.",
      "-er и -ir различаются в nosotros и vosotros.",
    ],
    examples: [
      {
        es: "Hablo español cada día.",
        ru: "Я говорю по-испански каждый день.",
      },
      { es: "Comemos a las dos.", ru: "Мы едим в два часа." },
      { es: "Viven en Toledo.", ru: "Они живут в Толедо." },
      { es: "Somos estudiantes.", ru: "Мы студенты." },
    ],
    commonMistakes: [
      "Использование инфинитива после подлежащего: yo hablar.",
      "Окончание -as у глагола на -er: tú comas вместо comes.",
      "Регулярная форма sero вместо soy.",
    ],
    exerciseIds: ["a1-05", "a1-06", "a1-07", "a1-15", "a1-16", "a1-20"],
  },
  "th-a1-5": {
    objectives: [
      "Использовать tener для обладания и возраста.",
      "Различать hay и формы tener.",
      "Строить ближайшее будущее ir a + infinitivo.",
    ],
    sections: [
      {
        title: "Tener",
        paragraphs: [
          "Tener означает «иметь» и используется для возраста: Tengo veinte años. Формы: tengo, tienes, tiene, tenemos, tenéis, tienen.",
          "Tener que + infinitivo выражает необходимость: Tengo que estudiar.",
        ],
      },
      {
        title: "Hay",
        paragraphs: [
          "Hay сообщает о наличии предмета и не меняется по числу: Hay un libro; Hay tres libros. Для известного местоположения используйте estar: El libro está en la mesa.",
        ],
      },
      {
        title: "Ir a + infinitivo",
        paragraphs: [
          "Форма ir + a + инфинитив выражает план или ближайшее будущее: Voy a llamar, Vamos a comer. Формы ir: voy, vas, va, vamos, vais, van.",
        ],
        table: {
          headers: ["Задача", "Модель", "Пример"],
          rows: [
            ["обладание / возраст", "tener", "Tengo un coche."],
            ["наличие", "hay", "Hay un coche."],
            ["план", "ir + a + infinitivo", "Voy a comprar un coche."],
          ],
        },
      },
    ],
    summary: [
      "tener = иметь; возраст тоже выражается tener",
      "hay = есть / имеется и не изменяется",
      "ir + a + infinitivo = план или ближайшее будущее",
    ],
    examples: [
      { es: "Tengo dos hermanos.", ru: "У меня два брата." },
      { es: "Hay una farmacia aquí.", ru: "Здесь есть аптека." },
      { es: "Voy a visitar a Ana.", ru: "Я собираюсь навестить Ану." },
      { es: "Tenemos que salir.", ru: "Нам нужно выйти." },
    ],
    commonMistakes: [
      "Soy veinte años вместо tengo veinte años.",
      "Han libros вместо hay libros.",
      "Voy visitar вместо voy a visitar.",
    ],
    exerciseIds: ["a1-08", "a1-09", "a1-17"],
  },
  "th-a1-6": {
    objectives: [
      "Согласовывать gusta/gustan с тем, что нравится.",
      "Выбирать краткие притяжательные слова по предмету обладания.",
    ],
    sections: [
      {
        title: "Как устроен gustar",
        paragraphs: [
          "В конструкции gustar предмет является грамматическим подлежащим. Поэтому форма зависит от предмета: Me gusta el libro; Me gustan los libros.",
          "Человек выражается местоимением me, te, le, nos, os или les. Оборот a mí / a ti уточняет или подчёркивает человека.",
        ],
      },
      {
        title: "Gustar с действием",
        paragraphs: [
          "Перед инфинитивом используется gusta в единственном числе: Me gusta bailar. Несколько инфинитивов как единая идея также часто требуют gusta.",
        ],
      },
      {
        title: "Притяжательные слова",
        paragraphs: [
          "Mi/mis, tu/tus и su/sus меняются только по числу предмета. Nuestro и vuestro также согласуются в роде: nuestro coche, nuestra casa.",
        ],
        table: {
          headers: ["Владелец", "Единственное", "Множественное"],
          rows: [
            ["yo", "mi", "mis"],
            ["tú", "tu", "tus"],
            ["él / ella / usted", "su", "sus"],
            ["nosotros", "nuestro/a", "nuestros/as"],
          ],
        },
      },
    ],
    summary: [
      "gusta + один предмет или действие",
      "gustan + предметы во множественном числе",
      "Притяжательное слово согласуется с предметом, не с владельцем.",
    ],
    examples: [
      { es: "Me gusta la música.", ru: "Мне нравится музыка." },
      { es: "Le gustan los perros.", ru: "Ему / ей нравятся собаки." },
      { es: "Nuestra casa es pequeña.", ru: "Наш дом небольшой." },
      { es: "Sus amigos viven aquí.", ru: "Его / её друзья живут здесь." },
    ],
    commonMistakes: [
      "Me gusto el café вместо me gusta el café.",
      "Me gusta los gatos вместо me gustan los gatos.",
      "Выбор su/nuestra по полу владельца.",
    ],
    exerciseIds: ["a1-10", "a1-11", "a1-18"],
  },
};

export const a1Theory = a1TheoryBase.map((lesson) => ({
  ...lesson,
  ...a1TheoryDetails[lesson.id],
})) satisfies TheoryLesson[];
