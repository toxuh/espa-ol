import type { GrammarExercise } from "../../types";

const b1GrammarBase = [
  {
    id: "b1-01",
    level: "B1",
    topic: "subjuntivo — formación",
    type: "fill",
    prompt: "Quiero que tú (hablar) ___ con ella.",
    answer: "hables",
    explain:
      'После "querer que" используется subjuntivo. Для -ar глаголов: habl<b>e</b>, habl<b>es</b>, hable, hablemos, habléis, hablen.',
    revision: 1,
  },
  {
    id: "b1-02",
    level: "B1",
    topic: "subjuntivo — deseo",
    type: "mcq",
    prompt: "Espero que (vosotros) ___ un buen viaje.",
    options: ["tengáis", "tenéis", "tendréis", "tuvierais"],
    answer: "tengáis",
    explain:
      '"Esperar que" вводит subjuntivo. Tener → teng- (неправильная основа) + окончания subjuntivo: tengáis.',
    revision: 1,
  },
  {
    id: "b1-03",
    level: "B1",
    topic: "subjuntivo vs indicativo",
    type: "mcq",
    prompt: "Creo que ella ___ razón. / No creo que ella ___ razón.",
    options: [
      "tiene / tenga",
      "tenga / tiene",
      "tiene / tiene",
      "tenga / tenga",
    ],
    answer: "tiene / tenga",
    solvedExample: "Creo que ella tiene razón. / No creo que ella tenga razón.",
    explain:
      '"Creer que" (утверждение) требует indicativo: tiene. "No creer que" (отрицание/сомнение) требует subjuntivo: tenga.',
    revision: 1,
  },
  {
    id: "b1-04",
    level: "B1",
    topic: "condicional simple",
    type: "fill",
    prompt: "En tu lugar, yo (hablar) ___ con el jefe.",
    answer: "hablaría",
    explain:
      "Кондиционал = инфинитив + окончания имперфекта: hablar<b>ía</b>. Используется для советов и гипотез: yo hablaría.",
    revision: 1,
  },
  {
    id: "b1-05",
    level: "B1",
    topic: "futuro de probabilidad",
    type: "mcq",
    prompt: "No sé dónde está Juan. ___ en casa.",
    options: ["Estará", "Está", "Estuvo", "Estaría"],
    answer: "estará",
    explain:
      'Простое будущее время может выражать предположение о настоящем: "estará en casa" = "наверное, он дома".',
    revision: 1,
  },
  {
    id: "b1-06",
    level: "B1",
    topic: "pretérito perfecto",
    type: "fill",
    prompt: "Esta mañana (yo/desayunar) ___ ___ muy poco.",
    answer: "he desayunado",
    solvedExample: "Esta mañana he desayunado muy poco.",
    explain:
      "Pretérito perfecto compuesto (haber + participio) используется для действий в недавнем/незавершённом временном отрезке: he desayunado.",
    revision: 1,
  },
  {
    id: "b1-07",
    level: "B1",
    topic: "por / para",
    type: "mcq",
    prompt: "Este regalo es ___ ti.",
    options: ["para", "por", "a", "de"],
    answer: "para",
    explain:
      '"Para" указывает получателя/цель: para ti (для тебя). "Por" используется для причины, обмена, средства передвижения и т.д.',
    revision: 1,
  },
  {
    id: "b1-08",
    level: "B1",
    topic: "por / para",
    type: "mcq",
    prompt: "Pasamos ___ el parque para llegar antes.",
    options: ["por", "para", "a", "en"],
    answer: "por",
    explain:
      '"Por" указывает движение через место: pasar por el parque (проходить через парк).',
    revision: 1,
  },
  {
    id: "b1-09",
    level: "B1",
    topic: "pronombres relativos",
    type: "mcq",
    prompt: "El hombre ___ vive al lado es médico.",
    options: ["que", "quien", "cual", "donde"],
    answer: "que",
    explain:
      '"Que" — самое универсальное относительное местоимение для людей и предметов в ограничительных придаточных: el hombre que vive...',
    revision: 1,
  },
  {
    id: "b1-10",
    level: "B1",
    topic: "pasiva refleja",
    type: "mcq",
    prompt: "___ habla español en muchos países.",
    options: ["Se", "Es", "Está", "Hay"],
    answer: "se",
    explain:
      'Безличная пассивная конструкция "se + глагол в 3-м лице" описывает действие без указания субъекта: se habla español.',
    revision: 1,
  },
  {
    id: "b1-11",
    level: "B1",
    topic: "imperativo afirmativo",
    type: "fill",
    prompt: "(tú/cerrar) ___ la puerta, por favor.",
    answer: "cierra",
    explain:
      'Утвердительный императив для "tú" у глаголов с изменением корня (e→ie): cierra (от cerrar).',
    revision: 1,
  },
  {
    id: "b1-12",
    level: "B1",
    topic: "imperativo negativo",
    type: "mcq",
    prompt: "No ___ tarde a la reunión.",
    options: ["llegues", "llegas", "llega", "llegar"],
    answer: "llegues",
    explain:
      'Отрицательный императив всегда образуется от subjuntivo: no llegues (а не llega). Для "tú" у глаголов на -ar окончание -es.',
    revision: 1,
  },
  {
    id: "b1-13",
    level: "B1",
    topic: "pronombres dobles",
    type: "mcq",
    prompt: "¿El libro? ___ di a María ayer.",
    options: ["Se lo", "Le lo", "Lo le", "Se la"],
    answer: "se lo",
    explain:
      'Когда косвенное "le/les" стоит перед прямым "lo/la/los/las", "le/les" меняется на <b>se</b>: se lo di (= le di el libro).',
    revision: 1,
  },
  {
    id: "b1-14",
    level: "B1",
    topic: "estilo indirecto",
    type: "mcq",
    prompt: 'Ella dijo: "Estoy cansada." → Ella dijo que ___ cansada.',
    options: ["estaba", "está", "estuvo", "esté"],
    answer: "estaba",
    explain:
      'В косвенной речи после глагола в прошедшем времени ("dijo") presente переходит в imperfecto: estoy → estaba.',
    revision: 1,
  },
  {
    id: "b1-15",
    level: "B1",
    topic: "subjuntivo — ojalá",
    type: "fill",
    prompt: "Ojalá (nosotros/aprobar) ___ el examen.",
    answer: "aprobemos",
    explain:
      '"Ojalá" всегда требует subjuntivo, независимо от контекста: ojalá aprobemos.',
    revision: 1,
  },
  {
    id: "b1-16",
    level: "B1",
    topic: "condicional — cortesía",
    type: "fill",
    prompt: "¿(Tú) ___ (poder) ayudarme mañana?",
    answer: "podrías",
    explain:
      "Condicional часто используется для вежливых просьб. Poder — неправильная основа podr- + окончания имперфекта: podrías.",
    revision: 1,
  },
  {
    id: "b1-17",
    level: "B1",
    topic: "pretérito perfecto",
    type: "fill",
    prompt: "¿Alguna vez (tú/estar) ___ en Argentina?",
    answer: "has estado",
    explain:
      "Pretérito perfecto (haber + participio) используется для вопросов об опыте в жизни: ¿has estado alguna vez...?",
    revision: 1,
  },
  {
    id: "b1-18",
    level: "B1",
    topic: "imperativo formal",
    type: "fill",
    prompt: "(Usted/hablar) ___ más despacio, por favor.",
    answer: "hable",
    explain:
      "Формальный императив (usted) образуется от формы subjuntivo: hable (не *habla).",
    revision: 1,
  },
  {
    id: "b1-19",
    level: "B1",
    topic: "por / para",
    type: "fill",
    prompt: "Trabajo ___ ganar dinero.",
    answer: "para",
    explain:
      '"Para + infinitivo" выражает цель действия: trabajo para ganar dinero (работаю, чтобы зарабатывать).',
    revision: 1,
  },
  {
    id: "b1-20",
    level: "B1",
    topic: "pronombres relativos",
    type: "fill",
    prompt: "La ciudad ___ nací es muy pequeña.",
    answer: "donde",
    explain:
      '"Donde" используется как относительное местоимение для мест: la ciudad donde nací.',
    revision: 1,
  },
] satisfies GrammarExercise[];

const b1GrammarDetails: Record<
  string,
  Pick<
    GrammarExercise,
    "acceptedAnswers" | "lessonIds" | "hint" | "examples" | "commonMistakes"
  >
> = {
  "b1-01": {
    acceptedAnswers: ["hables"],
    lessonIds: ["th-b1-4"],
    hint: "Quiero que выражает желание одного человека относительно действия другого.",
    examples: [
      {
        es: "Quiero que vengas temprano.",
        ru: "Я хочу, чтобы ты пришёл рано.",
      },
      {
        es: "Necesito que me escuches.",
        ru: "Мне нужно, чтобы ты меня выслушал.",
      },
    ],
    commonMistakes: [
      "Не ставьте indicativo hablas после quiero que при разных субъектах.",
    ],
  },
  "b1-02": {
    acceptedAnswers: ["tengáis", "tengais"],
    lessonIds: ["th-b1-4"],
    hint: "Esperar que требует subjuntivo; tener использует основу teng-.",
    examples: [
      { es: "Espero que tengas suerte.", ru: "Надеюсь, тебе повезёт." },
      {
        es: "Deseamos que disfrutéis del viaje.",
        ru: "Желаем вам приятной поездки.",
      },
    ],
    commonMistakes: [
      "Не выбирайте tenéis: это форма indicativo, а не subjuntivo.",
    ],
  },
  "b1-03": {
    acceptedAnswers: ["tiene / tenga", "tiene, tenga"],
    lessonIds: ["th-b1-4"],
    hint: "Утверждение creo que представляет информацию как факт, отрицание no creo que — как сомнение.",
    examples: [
      { es: "Pienso que es útil.", ru: "Я думаю, что это полезно." },
      { es: "No pienso que sea útil.", ru: "Я не думаю, что это полезно." },
    ],
    commonMistakes: [
      "Subjuntivo вызывает не сам creer, а отрицание уверенности в данном контексте.",
    ],
  },
  "b1-04": {
    acceptedAnswers: ["hablaría", "hablaria"],
    lessonIds: ["th-b1-5"],
    hint: "En tu lugar вводит гипотетический совет; добавьте -ía к полному инфинитиву.",
    examples: [
      { es: "Yo que tú, descansaría.", ru: "На твоём месте я бы отдохнул." },
      {
        es: "En su lugar, pediríamos ayuda.",
        ru: "На их месте мы бы попросили помощи.",
      },
    ],
    commonMistakes: [
      "Condicional сохраняет инфинитив целиком: hablaría, не hablía.",
    ],
  },
  "b1-05": {
    acceptedAnswers: ["estará", "estara"],
    lessonIds: ["th-b1-5"],
    hint: "Контекст no sé показывает догадку о том, где Хуан находится сейчас.",
    examples: [
      { es: "Serán las nueve.", ru: "Сейчас, наверное, около девяти." },
      { es: "Ana estará trabajando.", ru: "Ана, должно быть, работает." },
    ],
    commonMistakes: [
      "Futuro здесь выражает вероятность в настоящем, а не будущее действие.",
    ],
  },
  "b1-06": {
    acceptedAnswers: ["he desayunado"],
    lessonIds: ["th-b1-2"],
    hint: "Esta mañana воспринимается как незавершённый период; для yo нужна форма he.",
    examples: [
      { es: "Hoy he llegado temprano.", ru: "Сегодня я пришёл рано." },
      {
        es: "Esta semana hemos trabajado mucho.",
        ru: "На этой неделе мы много работали.",
      },
    ],
    commonMistakes: [
      "Между haber и participio не вставляйте другие слова: he desayunado.",
    ],
  },
  "b1-07": {
    acceptedAnswers: ["para"],
    lessonIds: ["th-b1-1"],
    hint: "Подарок направлен конкретному получателю.",
    examples: [
      { es: "Esta carta es para Luis.", ru: "Это письмо для Луиса." },
      { es: "Compré flores para mi madre.", ru: "Я купил цветы для мамы." },
    ],
    commonMistakes: [
      "Получатель выражается para; por обозначило бы причину или обмен.",
    ],
  },
  "b1-08": {
    acceptedAnswers: ["por"],
    lessonIds: ["th-b1-1"],
    hint: "Маршрут проходит через пространство парка.",
    examples: [
      { es: "Caminamos por el centro.", ru: "Мы гуляли по центру." },
      { es: "El tren pasa por Toledo.", ru: "Поезд проходит через Толедо." },
    ],
    commonMistakes: [
      "Para называет пункт назначения, а por — путь через место.",
    ],
  },
  "b1-09": {
    acceptedAnswers: ["que"],
    lessonIds: ["th-b1-3"],
    hint: "В ограничительном придаточном без предлога нужен универсальный относительный союз.",
    examples: [
      {
        es: "La mujer que llamó es médica.",
        ru: "Женщина, которая звонила, — врач.",
      },
      {
        es: "El libro que compré era caro.",
        ru: "Книга, которую я купил, была дорогой.",
      },
    ],
    commonMistakes: [
      "Quien обычно не заменяет que в таком ограничительном придаточном без предлога.",
    ],
  },
  "b1-10": {
    acceptedAnswers: ["se"],
    lessonIds: ["th-b1-6"],
    hint: "Деятель не назван: речь идёт об общем употреблении языка.",
    examples: [
      { es: "Aquí se vive bien.", ru: "Здесь хорошо живётся." },
      { es: "Se venden libros usados.", ru: "Продаются подержанные книги." },
    ],
    commonMistakes: [
      "В пассиве с se глагол согласуется с объектом: se venden libros.",
    ],
  },
  "b1-11": {
    acceptedAnswers: ["cierra"],
    lessonIds: ["th-b1-6"],
    hint: "Для tú утвердительный imperativo cerrar совпадает с формой él/ella presente.",
    examples: [
      { es: "Abre la ventana.", ru: "Открой окно." },
      { es: "Piensa antes de responder.", ru: "Подумай перед ответом." },
    ],
    commonMistakes: [
      "Не используйте cierres: это форма отрицательного imperativo или subjuntivo.",
    ],
  },
  "b1-12": {
    acceptedAnswers: ["llegues"],
    lessonIds: ["th-b1-6"],
    hint: "После no приказ для tú образуется формой presente de subjuntivo.",
    examples: [
      { es: "No hables tan rápido.", ru: "Не говори так быстро." },
      { es: "No comas aquí.", ru: "Не ешь здесь." },
    ],
    commonMistakes: [
      "Отрицательный imperativo не использует утвердительную форму llega.",
    ],
  },
  "b1-13": {
    acceptedAnswers: ["se lo"],
    lessonIds: ["th-b1-3"],
    hint: "Замените a María на le и el libro на lo, затем измените le перед lo.",
    examples: [
      {
        es: "La carta se la envié ayer.",
        ru: "Письмо я отправил ему или ей вчера.",
      },
      {
        es: "Los datos se los expliqué.",
        ru: "Я объяснил ему или ей эти данные.",
      },
    ],
    commonMistakes: [
      "Сочетание le lo невозможно: le/les перед lo/la/los/las превращается в se.",
    ],
  },
  "b1-14": {
    acceptedAnswers: ["estaba"],
    lessonIds: ["th-b1-3"],
    hint: "Dijo задаёт прошлую точку отсчёта; presente estoy сдвигается в imperfecto.",
    examples: [
      { es: "Dijo que tenía sueño.", ru: "Она сказала, что хочет спать." },
      { es: "Contó que vivía en Lima.", ru: "Он рассказал, что жил в Лиме." },
    ],
    commonMistakes: [
      "Не сдвигайте время механически, если факт остаётся актуальным и говорящий это подчёркивает.",
    ],
  },
  "b1-15": {
    acceptedAnswers: ["aprobemos"],
    lessonIds: ["th-b1-4"],
    hint: "Ojalá вводит желаемый, ещё не подтверждённый результат.",
    examples: [
      { es: "Ojalá haga buen tiempo.", ru: "Хоть бы была хорошая погода." },
      { es: "Ojalá puedas venir.", ru: "Надеюсь, ты сможешь прийти." },
    ],
    commonMistakes: [
      "После ojalá в этом значении не используйте indicativo aprobamos.",
    ],
  },
  "b1-16": {
    acceptedAnswers: ["podrías", "podrias"],
    lessonIds: ["th-b1-5"],
    hint: "Вопрос выражает вежливую просьбу; poder получает основу podr-.",
    examples: [
      { es: "¿Podría entrar?", ru: "Можно мне войти?" },
      { es: "¿Me dirías la hora?", ru: "Не скажешь, который час?" },
    ],
    commonMistakes: [
      "Вежливость создаёт condicional podrías, а puedes звучит прямее.",
    ],
  },
  "b1-17": {
    acceptedAnswers: ["has estado"],
    lessonIds: ["th-b1-2"],
    hint: "Alguna vez спрашивает о жизненном опыте без законченного временного периода.",
    examples: [
      { es: "¿Has probado la paella?", ru: "Ты когда-нибудь пробовал паэлью?" },
      { es: "Nunca he viajado a Chile.", ru: "Я никогда не ездил в Чили." },
    ],
    commonMistakes: ["Для tú нужна форма has, а не ha и не eres."],
  },
  "b1-18": {
    acceptedAnswers: ["hable"],
    lessonIds: ["th-b1-6"],
    hint: "Формальная просьба к usted использует форму presente de subjuntivo.",
    examples: [
      { es: "Pase usted, por favor.", ru: "Проходите, пожалуйста." },
      { es: "Escriba aquí su nombre.", ru: "Напишите здесь своё имя." },
    ],
    commonMistakes: [
      "Habla обращено к tú; для вежливого usted требуется hable.",
    ],
  },
  "b1-19": {
    acceptedAnswers: ["para"],
    lessonIds: ["th-b1-1"],
    hint: "Инфинитив ganar называет цель работы.",
    examples: [
      { es: "Estudio para aprender.", ru: "Я учусь, чтобы научиться." },
      {
        es: "Salí temprano para llegar a tiempo.",
        ru: "Я вышел рано, чтобы прийти вовремя.",
      },
    ],
    commonMistakes: [
      "Цель выражается para + infinitivo; por + infinitivo здесь не подходит.",
    ],
  },
  "b1-20": {
    acceptedAnswers: ["donde"],
    lessonIds: ["th-b1-3"],
    hint: "Антецедент la ciudad обозначает место.",
    examples: [
      {
        es: "Volvimos al hotel donde dormimos.",
        ru: "Мы вернулись в отель, где ночевали.",
      },
      { es: "Ese es el barrio donde crecí.", ru: "Это район, где я вырос." },
    ],
    commonMistakes: [
      "Donde относится к месту; que без предлога здесь звучит неполно.",
    ],
  },
};

export const b1Grammar = b1GrammarBase.map((exercise) => ({
  ...exercise,
  ...b1GrammarDetails[exercise.id],
})) satisfies GrammarExercise[];
