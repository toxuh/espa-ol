import type { GrammarExercise } from "../../types";

const a2GrammarBase = [
  {
    id: "a2-01",
    level: "A2",
    topic: "pretérito indefinido",
    type: "fill",
    prompt: "Ayer yo (comprar) ___ un libro nuevo.",
    answer: "compré",
    explain:
      'Правильный глагол на -ar в претерите: compr<b>é</b>, compraste, compró, compramos, comprasteis, compraron. Для "yo" окончание -é.',
    revision: 1,
  },
  {
    id: "a2-02",
    level: "A2",
    topic: "pretérito irregular",
    type: "mcq",
    prompt: "El año pasado ellos ___ a España.",
    options: ["fueron", "fue", "fuimos", "van"],
    answer: "fueron",
    explain:
      'Глагол "ir" в претерите неправильный и совпадает с формами "ser": fui, fuiste, fue, fuimos, fuisteis, <b>fueron</b>.',
    revision: 1,
  },
  {
    id: "a2-03",
    level: "A2",
    topic: "imperfecto",
    type: "fill",
    prompt: "Cuando era niño, (jugar) ___ en el parque todos los días.",
    answer: "jugaba",
    explain:
      "Имперфект для повторяющихся действий в прошлом: jug<b>aba</b>, jugabas, jugaba, jugábamos, jugabais, jugaban.",
    revision: 1,
  },
  {
    id: "a2-04",
    level: "A2",
    topic: "pretérito vs imperfecto",
    type: "mcq",
    prompt: "Mientras (yo) ___ la cena, sonó el teléfono.",
    options: ["preparaba", "preparé", "he preparado", "prepararé"],
    answer: "preparaba",
    explain:
      'Имперфект описывает фоновое, длящееся действие ("готовил"), на фоне которого происходит другое, законченное действие в претерите ("зазвонил").',
    revision: 1,
  },
  {
    id: "a2-05",
    level: "A2",
    topic: "futuro simple",
    type: "fill",
    prompt: "El próximo año (nosotros/viajar) ___ a Perú.",
    answer: "viajaremos",
    explain:
      "Будущее простое время образуется от инфинитива + окончания: viajar<b>emos</b> (nosotros). Окончания одинаковы для всех трёх спряжений.",
    revision: 1,
  },
  {
    id: "a2-06",
    level: "A2",
    topic: "comparativos",
    type: "mcq",
    prompt: "Mi hermano es ___ alto ___ yo.",
    options: ["más / que", "tan / como", "menos / de", "muy / que"],
    answer: "más / que",
    solvedExample: "Mi hermano es más alto que yo.",
    explain:
      'Сравнение превосходства: "más + прилагательное + que". Для равенства используется "tan...como".',
    revision: 1,
  },
  {
    id: "a2-07",
    level: "A2",
    topic: "superlativos",
    type: "mcq",
    prompt: "Este es el restaurante ___ caro de la ciudad.",
    options: ["más", "tan", "muy", "tanto"],
    answer: "más",
    explain:
      'Превосходная степень: "el/la más + прилагательное + de": el restaurante más caro de la ciudad.',
    revision: 1,
  },
  {
    id: "a2-08",
    level: "A2",
    topic: "objeto directo",
    type: "mcq",
    prompt: "¿Tienes las llaves? Sí, ___ tengo aquí.",
    options: ["las", "los", "les", "la"],
    answer: "las",
    explain:
      'Местоимение прямого дополнения должно согласовываться в роде и числе: "las llaves" — ж.р. мн.ч. → <b>las</b>.',
    revision: 1,
  },
  {
    id: "a2-09",
    level: "A2",
    topic: "objeto indirecto",
    type: "mcq",
    prompt: "___ voy a dar un regalo a mi madre.",
    options: ["Le", "Lo", "La", "Les"],
    answer: "le",
    explain:
      "Косвенное дополнение единственного числа — <b>le</b> (независимо от рода): le doy un regalo a mi madre.",
    revision: 1,
  },
  {
    id: "a2-10",
    level: "A2",
    topic: "reflexivos",
    type: "fill",
    prompt: "Todos los días yo (levantarse) ___ a las siete.",
    answer: "me levanto",
    explain:
      "Возвратные глаголы требуют местоимения, согласованного с субъектом: me levanto, te levantas, se levanta...",
    revision: 1,
  },
  {
    id: "a2-11",
    level: "A2",
    topic: "estar + gerundio",
    type: "fill",
    prompt: "Ahora mismo (nosotros/comer) ___ ___ en un restaurante.",
    answer: "estamos comiendo",
    solvedExample: "Ahora mismo estamos comiendo en un restaurante.",
    explain:
      'Конструкция "estar + gerundio" выражает действие, происходящее прямо сейчас: estamos comiendo.',
    revision: 1,
  },
  {
    id: "a2-12",
    level: "A2",
    topic: "tener que / hay que",
    type: "mcq",
    prompt: "___ estudiar mucho para aprobar el examen.",
    options: ["Hay que", "Tengo que", "Tienes que", "Hay de"],
    answer: "hay que",
    explain:
      '"Hay que" — безличная конструкция обязанности (для всех вообще). "Tener que" используется с конкретным субъектом: tengo que, tienes que...',
    revision: 1,
  },
  {
    id: "a2-13",
    level: "A2",
    topic: "imperfecto",
    type: "mcq",
    prompt: "Antes, mis padres ___ en el campo.",
    options: ["vivían", "vivieron", "viven", "han vivido"],
    answer: "vivían",
    explain:
      "Имперфект используется для повторяющихся/привычных действий в прошлом: vivían (жили когда-то регулярно).",
    revision: 1,
  },
  {
    id: "a2-14",
    level: "A2",
    topic: "pretérito irregular",
    type: "mcq",
    prompt: "Ayer (yo) ___ que estudiar toda la noche.",
    options: ["tuve", "tenía", "tengo", "tendré"],
    answer: "tuve",
    explain:
      "Tener в претерите — неправильный глагол с основой tuv-: tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron.",
    revision: 1,
  },
  {
    id: "a2-15",
    level: "A2",
    topic: "reflexivos",
    type: "mcq",
    prompt: "¿A qué hora ___ acuestas?",
    options: ["te", "se", "me", "nos"],
    answer: "te",
    explain:
      'Возвратное местоимение должно совпадать с подлежащим: для "tú" — te acuestas.',
    revision: 1,
  },
  {
    id: "a2-16",
    level: "A2",
    topic: "futuro simple",
    type: "fill",
    prompt: "El sábado (ellos/llegar) ___ a las diez.",
    answer: "llegarán",
    explain:
      'Futuro simple = инфинитив + окончания. Для "ellos": llegar<b>án</b>.',
    revision: 1,
  },
  {
    id: "a2-17",
    level: "A2",
    topic: "estar + gerundio",
    type: "fill",
    prompt: "Ahora (yo/leer) ___ ___ un libro interesante.",
    answer: "estoy leyendo",
    solvedExample: "Ahora estoy leyendo un libro interesante.",
    explain:
      '"Estar + gerundio" — действие прямо сейчас. Gerundio глагола leer неправильный: leyendo (i → y между гласными).',
    revision: 1,
  },
  {
    id: "a2-18",
    level: "A2",
    topic: "comparativos — igualdad",
    type: "fill",
    prompt: "Ana es tan alta ___ su hermano.",
    answer: "como",
    explain:
      'Сравнение равенства: "tan + прилагательное + como" (так же... как).',
    revision: 1,
  },
  {
    id: "a2-19",
    level: "A2",
    topic: "objeto directo",
    type: "fill",
    prompt: "¿Compraste el pan? Sí, ___ compré esta mañana.",
    answer: "lo",
    explain:
      'Местоимение прямого дополнения для "el pan" (м.р. ед.ч.) — <b>lo</b>.',
    revision: 1,
  },
  {
    id: "a2-20",
    level: "A2",
    topic: "tener que",
    type: "fill",
    prompt: "Nosotros (tener que) ___ terminar el proyecto hoy.",
    answer: "tenemos que",
    explain:
      '"Tener que + infinitivo" выражает обязанность; глагол tener спрягается по подлежащему: nosotros → tenemos que.',
    revision: 1,
  },
] satisfies GrammarExercise[];

const a2GrammarDetails: Record<
  string,
  Pick<
    GrammarExercise,
    "acceptedAnswers" | "lessonIds" | "hint" | "examples" | "commonMistakes"
  >
> = {
  "a2-01": {
    acceptedAnswers: ["compré", "compre"],
    lessonIds: ["th-a2-1"],
    hint: "Ayer задаёт завершённое событие; для yo у глагола на -ar нужно окончание -é.",
    examples: [
      { es: "Ayer trabajé hasta las seis.", ru: "Вчера я работал до шести." },
      { es: "El lunes llamé a Ana.", ru: "В понедельник я позвонил Ане." },
    ],
    commonMistakes: [
      "Не пропускайте ударение: compré — форма yo, compre — другая форма.",
    ],
  },
  "a2-02": {
    acceptedAnswers: ["fueron"],
    lessonIds: ["th-a2-1"],
    hint: "Подлежащее ellos требует форму 3-го лица множественного числа indefinido.",
    examples: [
      { es: "Mis padres fueron a Chile.", ru: "Мои родители ездили в Чили." },
      { es: "Las vacaciones fueron cortas.", ru: "Каникулы были короткими." },
    ],
    commonMistakes: [
      "Fueron может быть формой и ir, и ser; значение определяет контекст.",
    ],
  },
  "a2-03": {
    acceptedAnswers: ["jugaba"],
    lessonIds: ["th-a2-2"],
    hint: "Todos los días описывает повторявшуюся привычку в прошлом.",
    examples: [
      {
        es: "De niño nadaba cada verano.",
        ru: "В детстве я плавал каждое лето.",
      },
      {
        es: "Antes caminábamos al colegio.",
        ru: "Раньше мы ходили в школу пешком.",
      },
    ],
    commonMistakes: [
      "Jugué обозначило бы один завершённый случай, а не ежедневную привычку.",
    ],
  },
  "a2-04": {
    acceptedAnswers: ["preparaba"],
    lessonIds: ["th-a2-2"],
    hint: "После mientras действие создаёт фон для внезапного sonó.",
    examples: [
      { es: "Dormía cuando llegó Marta.", ru: "Я спал, когда пришла Марта." },
      {
        es: "Mientras llovía, vimos una película.",
        ru: "Пока шёл дождь, мы посмотрели фильм.",
      },
    ],
    commonMistakes: [
      "Не ставьте оба действия в indefinido, если одно уже шло в момент другого.",
    ],
  },
  "a2-05": {
    acceptedAnswers: ["viajaremos"],
    lessonIds: ["th-a2-3"],
    hint: "Сохраните весь инфинитив viajar и добавьте окончание nosotros -emos.",
    examples: [
      {
        es: "Mañana estudiaremos juntos.",
        ru: "Завтра мы будем заниматься вместе.",
      },
      {
        es: "El verano próximo visitaré Perú.",
        ru: "Следующим летом я посещу Перу.",
      },
    ],
    commonMistakes: [
      "Не отбрасывайте -ar: правильно viajaremos, а не viajemos.",
    ],
  },
  "a2-06": {
    acceptedAnswers: ["más / que", "más que", "mas / que", "mas que"],
    lessonIds: ["th-a2-6"],
    hint: "Нужно показать, что один человек выше другого: más ... que.",
    examples: [
      { es: "Este libro es más largo que ese.", ru: "Эта книга длиннее той." },
      {
        es: "Madrid es menos húmedo que Bilbao.",
        ru: "В Мадриде менее влажно, чем в Бильбао.",
      },
    ],
    commonMistakes: [
      "После сравнительной формы más используется que, а не de перед объектом сравнения.",
    ],
  },
  "a2-07": {
    acceptedAnswers: ["más", "mas"],
    lessonIds: ["th-a2-6"],
    hint: "Артикль el уже стоит перед существительным; нужна форма максимальной степени.",
    examples: [
      {
        es: "Es la calle más antigua del barrio.",
        ru: "Это самая старая улица района.",
      },
      {
        es: "Son los billetes menos caros.",
        ru: "Это самые недорогие билеты.",
      },
    ],
    commonMistakes: ["Muy caro значит «очень дорогой», но не «самый дорогой»."],
  },
  "a2-08": {
    acceptedAnswers: ["las"],
    lessonIds: ["th-a2-4"],
    hint: "Замените las llaves местоимением того же рода и числа.",
    examples: [
      {
        es: "¿Ves las fotos? Sí, las veo.",
        ru: "Ты видишь фотографии? Да, вижу их.",
      },
      { es: "La carta la escribí ayer.", ru: "Письмо я написал вчера." },
    ],
    commonMistakes: [
      "Les — косвенное дополнение; для прямого las llaves нужно las.",
    ],
  },
  "a2-09": {
    acceptedAnswers: ["le"],
    lessonIds: ["th-a2-4"],
    hint: "A mi madre отвечает на вопрос «кому?», поэтому нужно косвенное местоимение.",
    examples: [
      { es: "Le escribo a mi abuela.", ru: "Я пишу бабушке." },
      { es: "Les dimos agua a los niños.", ru: "Мы дали детям воды." },
    ],
    commonMistakes: [
      "Род адресата не влияет на le: le sirve и для мужчины, и для женщины.",
    ],
  },
  "a2-10": {
    acceptedAnswers: ["me levanto"],
    lessonIds: ["th-a2-5"],
    hint: "Для yo выберите местоимение me и форму presente levanto.",
    examples: [
      { es: "Me ducho por la mañana.", ru: "Я принимаю душ утром." },
      { es: "Nos acostamos tarde.", ru: "Мы ложимся поздно." },
    ],
    commonMistakes: [
      "Не оставляйте -se при спряжении: me levanto, а не me levantarse.",
    ],
  },
  "a2-11": {
    acceptedAnswers: ["estamos comiendo"],
    lessonIds: ["th-a2-5"],
    hint: "Ahora mismo требует estar в форме nosotros и герундий comer.",
    examples: [
      { es: "Estoy trabajando ahora.", ru: "Я сейчас работаю." },
      { es: "Los niños están durmiendo.", ru: "Дети сейчас спят." },
    ],
    commonMistakes: [
      "Не согласуйте герундий по числу: всегда comiendo, не comiendos.",
    ],
  },
  "a2-12": {
    acceptedAnswers: ["hay que"],
    lessonIds: ["th-a2-6"],
    hint: "В предложении нет конкретного исполнителя обязанности.",
    examples: [
      { es: "Hay que llegar a tiempo.", ru: "Нужно приходить вовремя." },
      { es: "Tengo que llamar a Pedro.", ru: "Мне нужно позвонить Педро." },
    ],
    commonMistakes: [
      "Hay que не спрягается по лицам и всегда сопровождается инфинитивом.",
    ],
  },
  "a2-13": {
    acceptedAnswers: ["vivían", "vivian"],
    lessonIds: ["th-a2-2"],
    hint: "Antes вводит прежнее состояние без указанной конечной границы.",
    examples: [
      { es: "Antes vivíamos cerca del mar.", ru: "Раньше мы жили у моря." },
      {
        es: "Mis abuelos tenían una granja.",
        ru: "У моих бабушки и дедушки была ферма.",
      },
    ],
    commonMistakes: [
      "Не пропускайте ударение во всех формах imperfecto глаголов на -er/-ir.",
    ],
  },
  "a2-14": {
    acceptedAnswers: ["tuve"],
    lessonIds: ["th-a2-1"],
    hint: "Ayer указывает на завершённую необходимость; tener имеет основу tuv-.",
    examples: [
      {
        es: "Tuve que cancelar la cita.",
        ru: "Мне пришлось отменить встречу.",
      },
      {
        es: "Tuvieron un problema ayer.",
        ru: "Вчера у них возникла проблема.",
      },
    ],
    commonMistakes: [
      "Tuve не имеет графического ударения и не образуется от основы ten-.",
    ],
  },
  "a2-15": {
    acceptedAnswers: ["te"],
    lessonIds: ["th-a2-5"],
    hint: "Форма acuestas обращена к tú, значит возвратное местоимение — te.",
    examples: [
      { es: "¿Te vistes rápido?", ru: "Ты быстро одеваешься?" },
      { es: "Se acuesta a las once.", ru: "Он / она ложится в одиннадцать." },
    ],
    commonMistakes: [
      "Местоимение выбирается по подлежащему, а не по окончанию инфинитива -se.",
    ],
  },
  "a2-16": {
    acceptedAnswers: ["llegarán", "llegaran"],
    lessonIds: ["th-a2-3"],
    hint: "Для ellos в futuro используется окончание -án после полного инфинитива.",
    examples: [
      { es: "Llegaré antes de las ocho.", ru: "Я приеду до восьми." },
      { es: "Mis amigos saldrán mañana.", ru: "Мои друзья уедут завтра." },
    ],
    commonMistakes: [
      "Не путайте llegarán с llegaran: futuro требует графического ударения.",
    ],
  },
  "a2-17": {
    acceptedAnswers: ["estoy leyendo"],
    lessonIds: ["th-a2-5"],
    hint: "Спрягите estar для yo; между гласными gerundio leer получает y.",
    examples: [
      { es: "Estoy oyendo música.", ru: "Я сейчас слушаю музыку." },
      { es: "Estamos leyendo el menú.", ru: "Мы сейчас читаем меню." },
    ],
    commonMistakes: ["Герундий leer — leyendo, не leiendo и не leendo."],
  },
  "a2-18": {
    acceptedAnswers: ["como"],
    lessonIds: ["th-a2-6"],
    hint: "После tan + прилагательное сравнение равенства завершается como.",
    examples: [
      {
        es: "El tren es tan rápido como el avión.",
        ru: "Поезд такой же быстрый, как самолёт.",
      },
      {
        es: "No trabajo tanto como antes.",
        ru: "Я работаю не так много, как раньше.",
      },
    ],
    commonMistakes: [
      "Для прилагательного используется tan ... como; tanto согласуется с существительным или относится к действию.",
    ],
  },
  "a2-19": {
    acceptedAnswers: ["lo"],
    lessonIds: ["th-a2-4"],
    hint: "El pan — прямое дополнение мужского рода, единственного числа.",
    examples: [
      { es: "El café lo compré aquí.", ru: "Кофе я купил здесь." },
      {
        es: "¿Tienes el mapa? No lo encuentro.",
        ru: "У тебя карта? Я её не нахожу.",
      },
    ],
    commonMistakes: [
      "Не используйте le для неодушевлённого прямого дополнения el pan.",
    ],
  },
  "a2-20": {
    acceptedAnswers: ["tenemos que"],
    lessonIds: ["th-a2-6"],
    hint: "Обязанность относится к nosotros, поэтому спрягите tener в presente.",
    examples: [
      { es: "Tenemos que salir ahora.", ru: "Нам нужно выйти сейчас." },
      { es: "Ana tiene que trabajar hoy.", ru: "Ане нужно сегодня работать." },
    ],
    commonMistakes: [
      "После tener que нужен инфинитив: tenemos que terminar, не tenemos que terminamos.",
    ],
  },
};

export const a2Grammar = a2GrammarBase.map((exercise) => ({
  ...exercise,
  ...a2GrammarDetails[exercise.id],
})) satisfies GrammarExercise[];
