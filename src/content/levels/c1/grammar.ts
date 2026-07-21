import type { GrammarExercise } from "../../types";

const c1GrammarBase = [
  {
    id: "c1-01",
    level: "C1",
    topic: "concesivas complejas",
    type: "mcq",
    prompt: "Por más que lo ___, no consigo entenderlo.",
    options: ["intento", "intentaré", "intentaba", "intentara"],
    answer: "intento",
    explain:
      '"Por más que" с реальным, фактическим значением требует indicativo: por más que lo intento (несмотря на то, что действительно пытаюсь).',
    revision: 1,
  },
  {
    id: "c1-02",
    level: "C1",
    topic: "por / para avanzado",
    type: "mcq",
    prompt: "Lo tomaron ___ un experto, aunque apenas sabía nada.",
    options: ["por", "para", "como", "de"],
    answer: "por",
    explain:
      '"Tomar/confundir por" — устойчивое выражение "принять за (кого-то)": lo tomaron por un experto.',
    revision: 1,
  },
  {
    id: "c1-03",
    level: "C1",
    topic: "perífrasis verbales",
    type: "mcq",
    prompt: "___ dos años estudiando chino y todavía no domino los caracteres.",
    options: ["Llevo", "Estoy", "Voy", "Tengo"],
    answer: "llevo",
    explain:
      '"Llevar + periodo de tiempo + gerundio" выражает длительность действия, продолжающегося до сих пор: llevo dos años estudiando.',
    revision: 1,
  },
  {
    id: "c1-04",
    level: "C1",
    topic: "perífrasis verbales",
    type: "mcq",
    prompt: "No hace falta que me lo repitas: ___ de leer tu mensaje.",
    options: ["acabo", "vuelvo", "dejo", "llevo"],
    answer: "acabo",
    explain:
      '"Acabar de + infinitivo" означает "только что что-то сделать": acabo de leer tu mensaje — я только что прочитал твоё сообщение.',
    revision: 2,
  },
  {
    id: "c1-05",
    level: "C1",
    topic: "estructuras enfáticas",
    type: "mcq",
    prompt: "No te imaginas ___ difícil que fue tomar esa decisión.",
    options: ["lo", "que", "cuán", "el"],
    answer: "lo",
    explain:
      'Эмфатическая конструкция "lo + прилагательное + que" усиливает степень признака: lo difícil que fue = "насколько это было трудно".',
    revision: 1,
  },
  {
    id: "c1-06",
    level: "C1",
    topic: "subjuntivo relativo indefinido",
    type: "mcq",
    prompt: "Busco un asistente que ___ hablar tres idiomas.",
    options: ["sepa", "sabe", "sabrá", "supo"],
    answer: "sepa",
    explain:
      'Когда антецедент неопределённый/несуществующий ("un asistente" — ещё не найденный), придаточное относительное требует subjuntivo: que sepa.',
    revision: 1,
  },
  {
    id: "c1-07",
    level: "C1",
    topic: "nominalización / registro formal",
    type: "mcq",
    prompt: "La empresa comunicó ___ decisión de cerrar la planta.",
    options: ["su", "la", "una", "esta la"],
    answer: "su",
    explain:
      'В формальном регистре часто используется номинализация действия: "comunicar su decisión" (существительное вместо глагольной фразы) звучит более официально.',
    revision: 1,
  },
  {
    id: "c1-08",
    level: "C1",
    topic: "conectores discursivos",
    type: "mcq",
    prompt:
      "El proyecto fue costoso; ___, los resultados justificaron la inversión.",
    options: ["no obstante", "porque", "ya que", "si bien"],
    answer: "no obstante",
    explain:
      '"No obstante" (тем не менее) вводит противопоставление между двумя утверждениями, аналогично "sin embargo".',
    revision: 1,
  },
  {
    id: "c1-09",
    level: "C1",
    topic: "pasiva refleja vs ser",
    type: "mcq",
    prompt: "___ construyeron tres nuevos hospitales el año pasado.",
    options: ["Se", "Fueron", "Son", "Están"],
    answer: "se",
    explain:
      'Пассивная возвратная конструкция "se + verbo" часто предпочтительнее пассива с "ser", когда субъект неважен и объект — предмет: se construyeron tres hospitales.',
    revision: 1,
  },
  {
    id: "c1-10",
    level: "C1",
    topic: "colocaciones",
    type: "mcq",
    prompt: "Se ___ cuenta de su error demasiado tarde.",
    options: ["dio", "hizo", "tomó", "llevó"],
    answer: "dio",
    explain:
      '"Darse cuenta de algo" — устойчивое выражение "осознать что-либо": se dio cuenta de su error.',
    revision: 1,
  },
  {
    id: "c1-11",
    level: "C1",
    topic: "discurso indirecto complejo",
    type: "mcq",
    prompt: "Dijo que, si ___ tiempo, habría terminado el informe.",
    options: ["hubiera tenido", "tenía", "tuviera", "tuvo"],
    answer: "hubiera tenido",
    explain:
      "В сложной косвенной речи при нереальном условии в прошлом сохраняется pluscuamperfecto de subjuntivo: si hubiera tenido tiempo.",
    revision: 1,
  },
  {
    id: "c1-12",
    level: "C1",
    topic: "sea como sea",
    type: "mcq",
    prompt: "___, terminaremos el proyecto a tiempo.",
    options: [
      "Sea como sea",
      "Sea que sea",
      "Como si fuera",
      "Fuera como fuera antes",
    ],
    answer: "sea como sea",
    explain:
      '"Sea como sea" — устойчивое выражение "как бы то ни было / во что бы то ни стало", часто в начале фразы для усиления решимости.',
    revision: 1,
  },
  {
    id: "c1-13",
    level: "C1",
    topic: "concesivas — por muy...que",
    type: "fill",
    prompt: "Por muy difícil que (ser) ___, lo lograremos.",
    answer: "sea",
    explain:
      '"Por muy + прилагательное + que" всегда требует subjuntivo, независимо от реальности ситуации.',
    revision: 1,
  },
  {
    id: "c1-14",
    level: "C1",
    topic: "perífrasis — volver a",
    type: "fill",
    prompt: "No quiero (volver a/cometer) ___ ___ el mismo error.",
    answer: "volver a cometer",
    solvedExample: "No quiero volver a cometer el mismo error.",
    explain:
      '"Volver a + infinitivo" означает "сделать что-то снова": volver a cometer = совершить ещё раз.',
    revision: 1,
  },
  {
    id: "c1-15",
    level: "C1",
    topic: "nominalización",
    type: "fill",
    prompt: "La ___ (decidir) de cerrar la fábrica sorprendió a todos.",
    answer: "decisión",
    explain:
      "В формальном регистре глагол часто превращается в существительное (nominalización): decidir → la decisión.",
    revision: 1,
  },
  {
    id: "c1-16",
    level: "C1",
    topic: "conectores discursivos",
    type: "fill",
    prompt: "El plan era arriesgado; ___, decidieron seguir adelante.",
    answer: "sin embargo",
    explain:
      '"Sin embargo" — коннектор противопоставления, синонимичный "no obstante" (тем не менее).',
    revision: 1,
  },
  {
    id: "c1-17",
    level: "C1",
    topic: "pasiva refleja",
    type: "fill",
    prompt: "___ (vender) muchos coches usados en esta tienda.",
    answer: "se venden",
    explain:
      'Пассивная возвратная конструкция "se + глагол" согласуется в числе с подлежащим (coches — мн.ч.): se venden.',
    revision: 1,
  },
  {
    id: "c1-18",
    level: "C1",
    topic: "colocaciones",
    type: "fill",
    prompt:
      "Al escuchar la noticia, se ___ (dar) cuenta de que había cometido un error.",
    answer: "dio",
    explain:
      '"Darse cuenta de algo" = осознать что-либо. Претерит от dar (3 л. ед.ч.): dio.',
    revision: 1,
  },
  {
    id: "c1-19",
    level: "C1",
    topic: "discurso indirecto",
    type: "fill",
    prompt: "Me dijo que (venir) ___ tan pronto como pudiera.",
    answer: "vendría",
    explain:
      "В косвенной речи после глагола в прошедшем времени futuro переходит в condicional: vendrá → vendría.",
    revision: 1,
  },
  {
    id: "c1-20",
    level: "C1",
    topic: "subjuntivo — antecedente negado",
    type: "fill",
    prompt: "No hay nadie que (saber) ___ resolver este acertijo.",
    answer: "sepa",
    explain:
      'Когда антецедент отрицается ("nadie"), придаточное относительное требует subjuntivo: que sepa.',
    revision: 1,
  },
  {
    id: "c1-21",
    level: "C1",
    topic: "estructuras enfáticas",
    type: "fill",
    prompt: "Fue precisamente entonces ___ comprendí todo.",
    answer: "cuando",
    explain:
      'Конструкция "fue... cuando" (эмфатическое выделение) используется для акцента на моменте времени.',
    revision: 1,
  },
  {
    id: "c1-22",
    level: "C1",
    topic: "por / para avanzado",
    type: "fill",
    prompt: "Lo hizo ___ despecho, no por amor.",
    answer: "por",
    explain:
      '"Por" указывает причину/мотив действия: lo hizo por despecho (сделал это из злости/обиды).',
    revision: 1,
  },
] satisfies GrammarExercise[];

const c1GrammarDetails: Record<
  string,
  Pick<
    GrammarExercise,
    "acceptedAnswers" | "lessonIds" | "hint" | "examples" | "commonMistakes"
  >
> = {
  "c1-01": {
    acceptedAnswers: ["intento"],
    lessonIds: ["th-c1-6"],
    hint: "Говорящий действительно пытается прямо сейчас: это факт, а не предположение.",
    examples: [
      {
        es: "Por más que trabajo, no llego a fin de mes.",
        ru: "Сколько бы я ни работал, до конца месяца денег не хватает.",
      },
      {
        es: "Por más que se lo expliques, no te hará caso.",
        ru: "Сколько бы ты ему ни объяснял, он тебя не послушает.",
      },
    ],
    commonMistakes: [
      "Por más que не требует subjuntivo автоматически: наклонение зависит от того, факт это или гипотеза.",
    ],
  },
  "c1-02": {
    acceptedAnswers: ["por"],
    lessonIds: ["th-c1-1"],
    hint: "Здесь por входит в устойчивое сочетание с глаголом tomar, а не выражает цель.",
    examples: [
      {
        es: "Me confundieron por mi hermano.",
        ru: "Меня приняли за моего брата.",
      },
      {
        es: "No me tomes por tonto.",
        ru: "Не держи меня за дурака.",
      },
    ],
    commonMistakes: [
      "Tomar para означало бы «взять для чего-то», а не «принять за кого-то».",
    ],
  },
  "c1-03": {
    acceptedAnswers: ["llevo"],
    lessonIds: ["th-c1-2"],
    hint: "Нужна перифраза, которая соединяет срок и продолжающееся действие в герундии.",
    examples: [
      {
        es: "Llevo media hora esperando el autobús.",
        ru: "Я жду автобус уже полчаса.",
      },
      {
        es: "Llevamos tres meses viviendo aquí.",
        ru: "Мы живём здесь уже три месяца.",
      },
    ],
    commonMistakes: [
      "Estoy dos años estudiando невозможно: длительность вводит именно llevar.",
      "После llevar ставится герундий, а не инфинитив: llevo dos años estudiando.",
    ],
  },
  "c1-04": {
    acceptedAnswers: ["acabo"],
    lessonIds: ["th-c1-2"],
    hint: "Речь о действии, завершённом минуту назад, поэтому нужна перифраза с предлогом de.",
    examples: [
      {
        es: "Acabo de salir de casa.",
        ru: "Я только что вышел из дома.",
      },
      {
        es: "Acababan de llegar cuando empezó a llover.",
        ru: "Они только что пришли, когда начался дождь.",
      },
    ],
    commonMistakes: [
      "Acabar de + infinitivo не означает «закончить делать»: для этого используется terminar de.",
    ],
  },
  "c1-05": {
    acceptedAnswers: ["lo"],
    lessonIds: ["th-c1-3"],
    hint: "Перед прилагательным нужен нейтральный артикль, который вместе с que усиливает степень.",
    examples: [
      {
        es: "No sabes lo cansado que estoy.",
        ru: "Ты не представляешь, как я устал.",
      },
      {
        es: "Mira lo rápido que corre.",
        ru: "Посмотри, как быстро он бегает.",
      },
    ],
    commonMistakes: [
      "Артикль lo не согласуется с прилагательным: lo difícil que fue, а не la difícil que fue.",
      "Cuán в живой речи почти не используется и звучит книжно.",
    ],
  },
  "c1-06": {
    acceptedAnswers: ["sepa"],
    lessonIds: ["th-c1-6"],
    hint: "Такого помощника ещё не нашли, поэтому придаточное описывает желаемый профиль, а не конкретного человека.",
    examples: [
      {
        es: "Busco un piso que tenga terraza.",
        ru: "Я ищу квартиру с террасой.",
      },
      {
        es: "Tengo un piso que tiene terraza.",
        ru: "У меня есть квартира с террасой.",
      },
    ],
    commonMistakes: [
      "Indicativo sabe означал бы, что помощник уже найден и известен.",
    ],
  },
  "c1-07": {
    acceptedAnswers: ["su"],
    lessonIds: ["th-c1-5"],
    hint: "Существительное decisión нуждается в определителе, который прямо указывает на компанию.",
    examples: [
      {
        es: "El comité anunció su decisión de aplazar la reunión.",
        ru: "Комитет объявил о своём решении отложить встречу.",
      },
      {
        es: "El ministerio confirmó su intención de revisar la norma.",
        ru: "Министерство подтвердило намерение пересмотреть норму.",
      },
    ],
    commonMistakes: [
      "Комбинация esta la невозможна: определители не ставятся подряд.",
      "Артикль la не показывал бы, чьё это решение.",
    ],
  },
  "c1-08": {
    acceptedAnswers: ["no obstante"],
    lessonIds: ["th-c1-4"],
    hint: "Вторая часть противопоставлена первой, а не объясняет её причину.",
    examples: [
      {
        es: "Llovía sin parar; no obstante, salimos a caminar.",
        ru: "Дождь лил не переставая; тем не менее мы вышли гулять.",
      },
      {
        es: "Si bien el plan era caro, resultó rentable.",
        ru: "Хотя план был дорогим, он оказался выгодным.",
      },
    ],
    commonMistakes: [
      "Porque и ya que вводят причину, а не уступку.",
      "Si bien стоит в начале придаточного, а не между двумя самостоятельными частями.",
    ],
  },
  "c1-09": {
    acceptedAnswers: ["se"],
    lessonIds: ["th-c1-5"],
    hint: "Деятель не важен, а глагол уже стоит в третьем лице множественного числа.",
    examples: [
      {
        es: "Se firmaron dos acuerdos comerciales.",
        ru: "Были подписаны два торговых соглашения.",
      },
      {
        es: "Se necesita personal con experiencia.",
        ru: "Требуется персонал с опытом.",
      },
    ],
    commonMistakes: [
      "Fueron construyeron невозможно: пассив с ser требует причастия (fueron construidos).",
      "В pasiva refleja глагол согласуется с объектом: se construyeron tres hospitales.",
    ],
  },
  "c1-10": {
    acceptedAnswers: ["dio"],
    lessonIds: ["th-c1-5"],
    hint: "Сочетание с cuenta фиксировано и не выбирается по смыслу глагола.",
    examples: [
      {
        es: "Me di cuenta de que faltaba una firma.",
        ru: "Я заметил, что не хватает подписи.",
      },
      {
        es: "No se dieron cuenta del cambio.",
        ru: "Они не заметили изменения.",
      },
    ],
    commonMistakes: [
      "Darse cuenta требует предлога de перед дополнением или перед que.",
      "Tomar cuenta и hacer cuenta в этом значении не употребляются.",
    ],
  },
  "c1-11": {
    acceptedAnswers: ["hubiera tenido"],
    lessonIds: ["th-c1-5"],
    hint: "Главная часть habría terminado относится к прошлому, которое не осуществилось.",
    examples: [
      {
        es: "Comentó que, si hubiera sabido la verdad, habría actuado de otro modo.",
        ru: "Он заметил, что, знай он правду, поступил бы иначе.",
      },
      {
        es: "Explicó que, si lo hubieran avisado, no habrían venido.",
        ru: "Он объяснил, что, если бы их предупредили, они бы не приехали.",
      },
    ],
    commonMistakes: [
      "Tuviera относило бы условие к настоящему, а не к прошлому.",
      "Косвенная речь не отменяет правила условных предложений: после si не бывает condicional.",
    ],
  },
  "c1-12": {
    acceptedAnswers: ["sea como sea"],
    lessonIds: ["th-c1-4"],
    hint: "Нужна застывшая формула решимости с повтором одной и той же формы subjuntivo.",
    examples: [
      {
        es: "Sea como sea, hay que entregarlo mañana.",
        ru: "Как бы то ни было, сдать нужно завтра.",
      },
      {
        es: "Pase lo que pase, te avisaré.",
        ru: "Что бы ни случилось, я тебя предупрежу.",
      },
    ],
    commonMistakes: [
      "Формула не меняется: sea como sea, а не sea que sea.",
      "Como si fuera вводит сравнение, а не решимость.",
    ],
  },
  "c1-13": {
    acceptedAnswers: ["sea"],
    lessonIds: ["th-c1-6"],
    hint: "Схема por muy + прилагательное + que задаёт наклонение автоматически.",
    examples: [
      {
        es: "Por muy caro que parezca, merece la pena.",
        ru: "Каким бы дорогим это ни казалось, оно того стоит.",
      },
      {
        es: "Por mucho que insistas, no cambiaré de idea.",
        ru: "Сколько бы ты ни настаивал, я не передумаю.",
      },
    ],
    commonMistakes: [
      "Indicativo es здесь невозможен: конструкция гипотетична по своей форме.",
    ],
  },
  "c1-14": {
    acceptedAnswers: ["volver a cometer"],
    lessonIds: ["th-c1-2"],
    hint: "После querer нужен инфинитив всей перифразы, а не спрягаемая форма.",
    examples: [
      {
        es: "Volvió a llamar por la tarde.",
        ru: "Он перезвонил во второй половине дня.",
      },
      {
        es: "No vuelvas a decir eso.",
        ru: "Больше так не говори.",
      },
    ],
    commonMistakes: [
      "Предлог a обязателен: volver a cometer, а не volver cometer.",
      "Otra vez можно добавить, но перифраза уже передаёт повторность.",
    ],
  },
  "c1-15": {
    acceptedAnswers: ["decisión", "decision"],
    lessonIds: ["th-c1-5"],
    hint: "Артикль la перед пропуском показывает, что нужно существительное женского рода.",
    examples: [
      {
        es: "La construcción del puente duró dos años.",
        ru: "Строительство моста длилось два года.",
      },
      {
        es: "La aprobación de la ley provocó protestas.",
        ru: "Принятие закона вызвало протесты.",
      },
    ],
    commonMistakes: [
      "Инфинитив decidir не сочетается с артиклем la в этой позиции.",
      "В существительном сохраняется ударение: decisión.",
    ],
  },
  "c1-16": {
    acceptedAnswers: ["sin embargo"],
    lessonIds: ["th-c1-4"],
    hint: "Между рискованным планом и решением идти дальше есть противопоставление.",
    examples: [
      {
        es: "El coche era viejo; sin embargo, nunca falló.",
        ru: "Машина была старой; тем не менее она ни разу не подвела.",
      },
      {
        es: "Estaba cansado; aun así, terminó el trabajo.",
        ru: "Он устал; и всё же закончил работу.",
      },
    ],
    commonMistakes: [
      "Коннектор выделяется запятыми: ; sin embargo, decidieron…",
      "Además добавляет аргумент, а не противопоставляет его.",
    ],
  },
  "c1-17": {
    acceptedAnswers: ["se venden"],
    lessonIds: ["th-c1-5"],
    hint: "Подлежащее muchos coches стоит во множественном числе, и глагол должен с ним согласоваться.",
    examples: [
      {
        es: "Se alquilan habitaciones.",
        ru: "Сдаются комнаты.",
      },
      {
        es: "Se busca camarero con experiencia.",
        ru: "Требуется официант с опытом.",
      },
    ],
    commonMistakes: [
      "Se vende muchos coches — типичная ошибка согласования в pasiva refleja.",
    ],
  },
  "c1-18": {
    acceptedAnswers: ["dio"],
    lessonIds: ["th-c1-5"],
    hint: "Действие произошло в конкретный момент в прошлом, значит нужен indefinido.",
    examples: [
      {
        es: "Se dio cuenta demasiado tarde.",
        ru: "Он понял это слишком поздно.",
      },
      {
        es: "Nos dimos cuenta de que faltaba un documento.",
        ru: "Мы заметили, что не хватает документа.",
      },
    ],
    commonMistakes: [
      "Daba cuenta описывало бы фон или повтор, а не однократное осознание.",
      "Форма dio пишется без графического ударения.",
    ],
  },
  "c1-19": {
    acceptedAnswers: ["vendría", "vendria"],
    lessonIds: ["th-c1-5"],
    hint: "Обещание было о будущем относительно прошедшего момента речи.",
    examples: [
      {
        es: "Prometió que llamaría al día siguiente.",
        ru: "Он обещал, что позвонит на следующий день.",
      },
      {
        es: "Nos aseguró que lo enviaría antes del viernes.",
        ru: "Он заверил нас, что отправит это до пятницы.",
      },
    ],
    commonMistakes: [
      "Vendrá сохраняло бы точку отсчёта настоящего, что противоречит dijo.",
      "Основа condicional неправильная: vendría, а не venería.",
    ],
  },
  "c1-20": {
    acceptedAnswers: ["sepa"],
    lessonIds: ["th-c1-6"],
    hint: "Антецедент nadie отрицает существование такого человека.",
    examples: [
      {
        es: "No conozco a nadie que hable ruso aquí.",
        ru: "Я не знаю здесь никого, кто говорил бы по-русски.",
      },
      {
        es: "No hay nada que me sorprenda ya.",
        ru: "Меня уже ничто не удивляет.",
      },
    ],
    commonMistakes: [
      "Indicativo sabe утверждал бы, что такой человек существует.",
    ],
  },
  "c1-21": {
    acceptedAnswers: ["cuando"],
    lessonIds: ["th-c1-3"],
    hint: "Выделяется момент времени, поэтому нужен соответствующий релятив после fue.",
    examples: [
      {
        es: "Fue en Madrid donde nos conocimos.",
        ru: "Именно в Мадриде мы познакомились.",
      },
      {
        es: "Fue Ana quien propuso la idea.",
        ru: "Именно Ана предложила эту идею.",
      },
    ],
    commonMistakes: [
      "Que вместо cuando ослабляет выделение времени и звучит разговорно.",
      "Выбор релятива зависит от выделяемого элемента: cuando, donde или quien.",
    ],
  },
  "c1-22": {
    acceptedAnswers: ["por"],
    lessonIds: ["th-c1-1"],
    hint: "Вторая часть фразы no por amor подсказывает нужный предлог мотива.",
    examples: [
      {
        es: "Lo dijo por envidia.",
        ru: "Он сказал это из зависти.",
      },
      {
        es: "Renunció por cansancio, no por dinero.",
        ru: "Он уволился от усталости, а не из-за денег.",
      },
    ],
    commonMistakes: ["Para обозначало бы цель поступка, а не его причину."],
  },
};

export const c1Grammar = c1GrammarBase.map((exercise) => ({
  ...exercise,
  ...c1GrammarDetails[exercise.id],
})) satisfies GrammarExercise[];
