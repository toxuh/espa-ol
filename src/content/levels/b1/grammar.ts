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
  {
    id: "b1-21",
    level: "B1",
    topic: "pretérito vs imperfecto",
    type: "fill",
    prompt: "Ayer (yo/ir) ___ al cine con mis amigos.",
    answer: "fui",
    explain:
      "Ayer маркирует завершённое разовое событие, поэтому нужен indefinido: fui (от ir).",
    revision: 1,
  },
  {
    id: "b1-22",
    level: "B1",
    topic: "pretérito vs imperfecto",
    type: "mcq",
    prompt: "Cuando era niño, ___ al parque todos los días.",
    options: ["iba", "fui", "voy", "iría"],
    answer: "iba",
    explain:
      "Todos los días и cuando era niño указывают на привычку в прошлом — imperfecto: iba.",
    revision: 1,
  },
  {
    id: "b1-23",
    level: "B1",
    topic: "pretérito vs imperfecto",
    type: "mcq",
    prompt: "___ la tele cuando sonó el teléfono.",
    options: ["Veía", "Vi", "Veo", "Vería"],
    answer: "veía",
    explain:
      "Фоновое действие (обстановка), прерванное событием, стоит в imperfecto: veía… cuando sonó.",
    revision: 1,
  },
  {
    id: "b1-24",
    level: "B1",
    topic: "pretérito vs imperfecto",
    type: "fill",
    prompt: "El verano pasado (nosotros/viajar) ___ a Italia.",
    answer: "viajamos",
    explain:
      "El verano pasado — завершённый период, разовое событие: indefinido viajamos.",
    revision: 1,
  },
  {
    id: "b1-25",
    level: "B1",
    topic: "futuro simple",
    type: "fill",
    prompt: "Mañana (yo/hacer) ___ la compra por la mañana.",
    answer: "haré",
    explain:
      "Futuro simple с неправильной основой har-: haré. Mañana указывает на будущее.",
    revision: 1,
  },
  {
    id: "b1-26",
    level: "B1",
    topic: "futuro simple",
    type: "mcq",
    prompt: "El próximo mes ellos ___ a Perú.",
    options: ["viajarán", "viajaron", "viajan", "viajarían"],
    answer: "viajarán",
    explain:
      "El próximo mes — будущее; регулярная форма futuro для ellos: viajarán.",
    revision: 1,
  },
  {
    id: "b1-27",
    level: "B1",
    topic: "futuro simple",
    type: "fill",
    prompt: "¿(tú/venir) ___ a la fiesta el sábado?",
    answer: "vendrás",
    explain: "Venir имеет неправильную основу vendr- в futuro: vendrás.",
    revision: 1,
  },
  {
    id: "b1-28",
    level: "B1",
    topic: "futuro simple",
    type: "mcq",
    prompt: "No contesta el teléfono. ___ durmiendo.",
    options: ["Estará", "Está", "Estuvo", "Estaría"],
    answer: "estará",
    explain:
      "Futuro de probabilidad: предположение о настоящем — estará (наверное, спит).",
    revision: 1,
  },
  {
    id: "b1-29",
    level: "B1",
    topic: "pluscuamperfecto",
    type: "fill",
    prompt: "Cuando llegué, la película ya (empezar) ___.",
    answer: "había empezado",
    explain:
      "Действие до другого прошлого — pluscuamperfecto: había empezado (сначала началась, потом я пришёл).",
    revision: 1,
  },
  {
    id: "b1-30",
    level: "B1",
    topic: "pluscuamperfecto",
    type: "mcq",
    prompt: "No fuimos al cine porque ya ___ esa película.",
    options: ["habíamos visto", "hemos visto", "vimos", "veíamos"],
    answer: "habíamos visto",
    explain:
      "Предшествующее прошлому действие: había/habíamos + participio → habíamos visto.",
    revision: 1,
  },
  {
    id: "b1-31",
    level: "B1",
    topic: "pluscuamperfecto",
    type: "fill",
    prompt: "Nunca (yo/probar) ___ el sushi hasta ese día.",
    answer: "había probado",
    explain:
      "Опыт до определённого прошлого момента (hasta ese día) — pluscuamperfecto: había probado.",
    revision: 1,
  },
  {
    id: "b1-32",
    level: "B1",
    topic: "pluscuamperfecto",
    type: "mcq",
    prompt: "Dijo que ___ las llaves en casa.",
    options: ["había olvidado", "ha olvidado", "olvidaba", "olvidaría"],
    answer: "había olvidado",
    explain:
      "В косвенной речи «предпрошедшее» передаётся pluscuamperfecto: había olvidado.",
    revision: 1,
  },
  {
    id: "b1-33",
    level: "B1",
    topic: "perífrasis verbales",
    type: "fill",
    prompt: "Acabo ___ llegar a casa, estoy cansado.",
    answer: "de",
    explain:
      "Перифраза acabar de + infinitivo («только что») требует предлог de.",
    revision: 1,
  },
  {
    id: "b1-34",
    level: "B1",
    topic: "perífrasis verbales",
    type: "mcq",
    prompt: "Voy ___ estudiar más esta noche.",
    options: ["a", "de", "que", "en"],
    answer: "a",
    explain:
      "Ir a + infinitivo (намерение/ближайшее будущее) требует предлог a.",
    revision: 1,
  },
  {
    id: "b1-35",
    level: "B1",
    topic: "perífrasis verbales",
    type: "fill",
    prompt: "Llevo dos años (estudiar) ___ español.",
    answer: "estudiando",
    explain:
      "Llevar + gerundio выражает длительность до настоящего: llevo dos años estudiando.",
    revision: 1,
  },
  {
    id: "b1-36",
    level: "B1",
    topic: "perífrasis verbales",
    type: "mcq",
    prompt: "Dejó ___ fumar hace un año.",
    options: ["de", "a", "que", "en"],
    answer: "de",
    explain: "Dejar de + infinitivo («перестать») требует предлог de.",
    revision: 1,
  },
  {
    id: "b1-37",
    level: "B1",
    topic: "ser / estar",
    type: "mcq",
    prompt: "Mi hermana ___ médica en un hospital.",
    options: ["es", "está", "hay", "son"],
    answer: "es",
    explain: "Профессия — это сущность, поэтому ser: es médica.",
    revision: 1,
  },
  {
    id: "b1-38",
    level: "B1",
    topic: "ser / estar",
    type: "fill",
    prompt: "Madrid ___ en el centro de España.",
    answer: "está",
    explain: "Местоположение выражается estar: Madrid está en el centro.",
    revision: 1,
  },
  {
    id: "b1-39",
    level: "B1",
    topic: "ser / estar",
    type: "mcq",
    prompt: "¡Cuidado! La sopa ___ muy caliente.",
    options: ["está", "es", "hay", "ser"],
    answer: "está",
    explain: "Временное состояние (температура сейчас) — estar: está caliente.",
    revision: 1,
  },
  {
    id: "b1-40",
    level: "B1",
    topic: "ser / estar",
    type: "mcq",
    prompt: "La reunión ___ en la sala 3 a las diez.",
    options: ["es", "está", "hay", "queda"],
    answer: "es",
    explain:
      "Место проведения события выражается ser: la reunión es en la sala 3.",
    revision: 1,
  },
  {
    id: "b1-41",
    level: "B1",
    topic: "comparativos",
    type: "fill",
    prompt: "Ana es más alta ___ Luis.",
    answer: "que",
    explain:
      "Сравнение превосходства строится más + прилагательное + que: más alta que Luis.",
    revision: 1,
  },
  {
    id: "b1-42",
    level: "B1",
    topic: "comparativos",
    type: "mcq",
    prompt: "Tengo ___ libros como tú.",
    options: ["tantos", "tan", "más", "tanto"],
    answer: "tantos",
    explain:
      "Равенство с существительным: tanto/a/os/as + сущ. + como. Libros мн.ч. муж.р. → tantos.",
    revision: 1,
  },
  {
    id: "b1-43",
    level: "B1",
    topic: "superlativos",
    type: "mcq",
    prompt: "Es el ___ restaurante de la ciudad.",
    options: ["mejor", "más mejor", "más bueno", "bien"],
    answer: "mejor",
    explain:
      "Bueno имеет неправильную форму mejor; más с ней не используется: el mejor.",
    revision: 1,
  },
  {
    id: "b1-44",
    level: "B1",
    topic: "superlativos",
    type: "fill",
    prompt: "La sopa está (bueno) ___ (=muy buena).",
    answer: "buenísima",
    explain:
      "Абсолютная превосходная степень образуется суффиксом -ísimo/a: buena → buenísima.",
    revision: 1,
  },
  {
    id: "b1-45",
    level: "B1",
    topic: "subjuntivo — conjunciones temporales",
    type: "fill",
    prompt: "Cuando (tú/llegar) ___ a casa, llámame.",
    answer: "llegues",
    explain: "Cuando о будущем действии требует subjuntivo: cuando llegues.",
    revision: 1,
  },
  {
    id: "b1-46",
    level: "B1",
    topic: "subjuntivo — conjunciones temporales",
    type: "mcq",
    prompt: "En cuanto ___ el trabajo, saldré a pasear.",
    options: ["termine", "termino", "terminaré", "terminé"],
    answer: "termine",
    explain: "En cuanto о будущем требует subjuntivo: en cuanto termine.",
    revision: 1,
  },
  {
    id: "b1-47",
    level: "B1",
    topic: "subjuntivo — finalidad",
    type: "fill",
    prompt: "Te lo explico para que lo (entender) ___.",
    answer: "entiendas",
    explain: "Para que + subjuntivo при разных субъектах: para que entiendas.",
    revision: 1,
  },
  {
    id: "b1-48",
    level: "B1",
    topic: "subjuntivo — finalidad",
    type: "mcq",
    prompt: "Habla más alto para que todos te ___.",
    options: ["oigan", "oyen", "oirán", "oían"],
    answer: "oigan",
    explain: "Para que + subjuntivo: forma de oír → oigan.",
    revision: 1,
  },
  {
    id: "b1-49",
    level: "B1",
    topic: "subjuntivo relativo indefinido",
    type: "fill",
    prompt: "Busco un piso que (tener) ___ terraza.",
    answer: "tenga",
    explain:
      "Антецедент неопределённый (ещё не найден) → subjuntivo: que tenga.",
    revision: 1,
  },
  {
    id: "b1-50",
    level: "B1",
    topic: "subjuntivo relativo indefinido",
    type: "mcq",
    prompt: "No hay nadie que ___ la respuesta.",
    options: ["sepa", "sabe", "sabrá", "sabía"],
    answer: "sepa",
    explain: "Несуществующий антецедент (nadie) требует subjuntivo: que sepa.",
    revision: 1,
  },
  {
    id: "b1-51",
    level: "B1",
    topic: "subjuntivo — opinión negada",
    type: "fill",
    prompt: "No creo que ella (tener) ___ razón.",
    answer: "tenga",
    explain:
      "Отрицание мнения (no creo que) снимает уверенность → subjuntivo: tenga.",
    revision: 1,
  },
  {
    id: "b1-52",
    level: "B1",
    topic: "subjuntivo — opinión negada",
    type: "mcq",
    prompt: "No es verdad que ___ tan caro.",
    options: ["sea", "es", "será", "era"],
    answer: "sea",
    explain: "No es verdad que + subjuntivo: sea.",
    revision: 1,
  },
  {
    id: "b1-53",
    level: "B1",
    topic: "condicionales reales",
    type: "fill",
    prompt: "Si (tú/estudiar) ___, aprobarás el examen.",
    answer: "estudias",
    explain:
      "Реальное условие: si + presente de indicativo → futuro. Si estudias, aprobarás.",
    revision: 1,
  },
  {
    id: "b1-54",
    level: "B1",
    topic: "condicionales reales",
    type: "mcq",
    prompt: "Si llueve, ___ en casa.",
    options: [
      "nos quedamos",
      "nos quedáramos",
      "nos quedaríamos",
      "nos quedemos",
    ],
    answer: "nos quedamos",
    explain:
      "Реальное условие: главная часть в presente. Si llueve, nos quedamos.",
    revision: 1,
  },
  {
    id: "b1-55",
    level: "B1",
    topic: "condicionales irreales",
    type: "fill",
    prompt: "Si (yo/tener) ___ dinero, viajaría más.",
    answer: "tuviera",
    explain:
      "Гипотетическое условие: si + imperfecto de subjuntivo → condicional. Si tuviera…, viajaría.",
    revision: 1,
  },
  {
    id: "b1-56",
    level: "B1",
    topic: "condicionales irreales",
    type: "mcq",
    prompt: "Si fuera tú, ___ con ella.",
    options: ["hablaría", "hablo", "hablaré", "hable"],
    answer: "hablaría",
    explain:
      "Главная часть гипотетического условия стоит в condicional: hablaría.",
    revision: 1,
  },
  {
    id: "b1-57",
    level: "B1",
    topic: "verbos de cambio",
    type: "mcq",
    prompt: "Cuando oyó la noticia, ___ muy triste.",
    options: ["se puso", "se hizo", "se volvió", "se convirtió"],
    answer: "se puso",
    explain:
      "Быстрое, временное изменение настроения — ponerse: se puso triste.",
    revision: 1,
  },
  {
    id: "b1-58",
    level: "B1",
    topic: "verbos de cambio",
    type: "fill",
    prompt: "Estudió mucho y (hacerse) ___ médico.",
    answer: "se hizo",
    explain:
      "Постепенное изменение с усилием (профессия) — hacerse: se hizo médico.",
    revision: 1,
  },
  {
    id: "b1-59",
    level: "B1",
    topic: "verbos de cambio",
    type: "mcq",
    prompt: "Con los años ___ más serio y callado.",
    options: ["se volvió", "se puso", "se hizo", "llegó"],
    answer: "se volvió",
    explain:
      "Глубокое, непроизвольное изменение характера — volverse: se volvió serio.",
    revision: 1,
  },
  {
    id: "b1-60",
    level: "B1",
    topic: "verbos de cambio",
    type: "mcq",
    prompt: "Después del accidente ___ solo.",
    options: ["se quedó", "se puso", "se hizo", "fue"],
    answer: "se quedó",
    explain:
      "Состояние как результат события (нередко утрата) — quedarse: se quedó solo.",
    revision: 1,
  },
  {
    id: "b1-61",
    level: "B1",
    topic: "gustar",
    type: "mcq",
    prompt: "A mí me ___ los libros de historia.",
    options: ["gustan", "gusta", "gusto", "gustas"],
    answer: "gustan",
    explain: "Gustar согласуется с предметом (los libros — мн.ч.): me gustan.",
    revision: 1,
  },
  {
    id: "b1-62",
    level: "B1",
    topic: "gustar",
    type: "fill",
    prompt: "A Ana le (encantar) ___ viajar por el mundo.",
    answer: "encanta",
    explain:
      "Подлежащее — инфинитив viajar (ед.), поэтому encanta; человек — le.",
    revision: 1,
  },
  {
    id: "b1-63",
    level: "B1",
    topic: "se involuntario",
    type: "fill",
    prompt: "Se me (caer) ___ el vaso sin querer.",
    answer: "cayó",
    explain:
      "Se involuntario: действие случайно; глагол согласуется с el vaso (ед.) → cayó.",
    revision: 1,
  },
  {
    id: "b1-64",
    level: "B1",
    topic: "se involuntario",
    type: "mcq",
    prompt: "Se me ___ las llaves en casa.",
    options: ["olvidaron", "olvidó", "olvidé", "olvida"],
    answer: "olvidaron",
    explain:
      "Se involuntario согласуется с предметом (las llaves — мн.ч.): se me olvidaron.",
    revision: 1,
  },
  {
    id: "b1-65",
    level: "B1",
    topic: "conectores discursivos",
    type: "mcq",
    prompt: "No estudió, ___ suspendió el examen.",
    options: ["así que", "aunque", "porque", "sin embargo"],
    answer: "así que",
    explain: "Коннектор следствия — así que: причина → результат.",
    revision: 1,
  },
  {
    id: "b1-66",
    level: "B1",
    topic: "conectores discursivos",
    type: "mcq",
    prompt: "___ hacía frío, nos quedamos en casa.",
    options: ["Como", "Porque", "Pero", "Además"],
    answer: "como",
    explain: "Como в начале фразы вводит причину: Como hacía frío, …",
    revision: 1,
  },
  {
    id: "b1-67",
    level: "B1",
    topic: "conectores discursivos",
    type: "mcq",
    prompt: "Es caro; ___, lo compró igualmente.",
    options: ["sin embargo", "porque", "así que", "ya que"],
    answer: "sin embargo",
    explain: "Sin embargo вводит контраст: «однако».",
    revision: 1,
  },
  {
    id: "b1-68",
    level: "B1",
    topic: "conectores discursivos",
    type: "mcq",
    prompt: "___ llueva, iremos a la montaña.",
    options: ["Aunque", "Porque", "Ya que", "Como"],
    answer: "aunque",
    explain: "Уступка о предположении — aunque + subjuntivo: aunque llueva.",
    revision: 1,
  },
  {
    id: "b1-69",
    level: "B1",
    topic: "preposiciones",
    type: "fill",
    prompt: "Viajamos ___ tren hasta Sevilla.",
    answer: "en",
    explain:
      "Средство передвижения выражается предлогом en: en tren, en avión.",
    revision: 1,
  },
  {
    id: "b1-70",
    level: "B1",
    topic: "preposiciones",
    type: "mcq",
    prompt: "Vi ___ tu hermano en el parque.",
    options: ["a", "en", "de", "con"],
    answer: "a",
    explain: "Личное a перед прямым дополнением-человеком: vi a tu hermano.",
    revision: 1,
  },
  {
    id: "b1-71",
    level: "B1",
    topic: "verbos con preposición",
    type: "fill",
    prompt: "Siempre pienso ___ mi familia.",
    answer: "en",
    explain: "Глагольное управление: pensar en algo/alguien.",
    revision: 1,
  },
  {
    id: "b1-72",
    level: "B1",
    topic: "verbos con preposición",
    type: "mcq",
    prompt: "Todo depende ___ ti.",
    options: ["de", "en", "a", "con"],
    answer: "de",
    explain: "Depender управляет предлогом de: depende de ti.",
    revision: 1,
  },
  {
    id: "b1-73",
    level: "B1",
    topic: "expresiones de tiempo",
    type: "fill",
    prompt: "Hace dos años ___ estudio español.",
    answer: "que",
    explain:
      "Длительность до настоящего: hace + время + que + presente. Hace dos años que estudio.",
    revision: 1,
  },
  {
    id: "b1-74",
    level: "B1",
    topic: "expresiones de tiempo",
    type: "mcq",
    prompt: "Llevo tres meses ___ en esta empresa.",
    options: ["trabajando", "trabajar", "trabajado", "trabajo"],
    answer: "trabajando",
    explain: "Llevar + время + gerundio: llevo tres meses trabajando.",
    revision: 1,
  },
  {
    id: "b1-75",
    level: "B1",
    topic: "expresiones de tiempo",
    type: "mcq",
    prompt: "Terminé el trabajo ___ dos días.",
    options: ["hace", "desde", "por", "desde hace"],
    answer: "hace",
    explain:
      "Hace + время (без que) с indefinido означает «тому назад»: hace dos días.",
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
  "b1-21": {
    acceptedAnswers: ["fui"],
    lessonIds: ["th-b1-7"],
    hint: "Ayer указывает на завершённое разовое событие.",
    examples: [
      { es: "Ayer comí en un restaurante.", ru: "Вчера я поел в ресторане." },
      {
        es: "El lunes fuimos al museo.",
        ru: "В понедельник мы сходили в музей.",
      },
    ],
    commonMistakes: [
      "Для разового события не используйте imperfecto iba вместо fui.",
    ],
  },
  "b1-22": {
    acceptedAnswers: ["iba"],
    lessonIds: ["th-b1-7"],
    hint: "Todos los días подчёркивает привычку в прошлом.",
    examples: [
      { es: "De pequeño jugaba al fútbol.", ru: "В детстве я играл в футбол." },
      {
        es: "Siempre estudiábamos juntos.",
        ru: "Мы всегда занимались вместе.",
      },
    ],
    commonMistakes: [
      "Привычку в прошлом выражает imperfecto, а не indefinido fui.",
    ],
  },
  "b1-23": {
    acceptedAnswers: ["veía"],
    lessonIds: ["th-b1-7"],
    hint: "Действие-фон, прерванное событием, стоит в imperfecto.",
    examples: [
      { es: "Dormía cuando llegaste.", ru: "Я спал, когда ты пришёл." },
      { es: "Leía mientras ella cocinaba.", ru: "Я читал, пока она готовила." },
    ],
    commonMistakes: [
      "Фон описывается imperfecto (veía), событие — indefinido (sonó).",
    ],
  },
  "b1-24": {
    acceptedAnswers: ["viajamos"],
    lessonIds: ["th-b1-7"],
    hint: "El verano pasado — завершённый период.",
    examples: [
      {
        es: "El año pasado visitamos Portugal.",
        ru: "В прошлом году мы посетили Португалию.",
      },
      { es: "En 2019 cambié de trabajo.", ru: "В 2019 году я сменил работу." },
    ],
    commonMistakes: [
      "Для законченного периода нужен indefinido, а не imperfecto viajábamos.",
    ],
  },
  "b1-25": {
    acceptedAnswers: ["haré"],
    lessonIds: ["th-b1-8"],
    hint: "Hacer образует futuro от основы har-.",
    examples: [
      { es: "Mañana haré ejercicio.", ru: "Завтра я позанимаюсь спортом." },
      { es: "Lo haremos juntos.", ru: "Мы сделаем это вместе." },
    ],
    commonMistakes: ["Основа futuro у hacer — har-, поэтому не haceré."],
  },
  "b1-26": {
    acceptedAnswers: ["viajarán"],
    lessonIds: ["th-b1-8"],
    hint: "El próximo mes указывает на будущее.",
    examples: [
      {
        es: "El año que viene estudiaré francés.",
        ru: "В следующем году я буду учить французский.",
      },
      { es: "Volverán en verano.", ru: "Они вернутся летом." },
    ],
    commonMistakes: ["Не путайте futuro (viajarán) с indefinido (viajaron)."],
  },
  "b1-27": {
    acceptedAnswers: ["vendrás"],
    lessonIds: ["th-b1-8"],
    hint: "Venir имеет неправильную основу vendr-.",
    examples: [
      { es: "¿Vendrás mañana?", ru: "Ты придёшь завтра?" },
      {
        es: "Tendremos una reunión el lunes.",
        ru: "У нас будет встреча в понедельник.",
      },
    ],
    commonMistakes: ["Основа futuro у venir — vendr-, не veniré."],
  },
  "b1-28": {
    acceptedAnswers: ["estará"],
    lessonIds: ["th-b1-8"],
    hint: "Догадка о том, что происходит сейчас, выражается futuro.",
    examples: [
      { es: "Serán las diez.", ru: "Сейчас, наверное, десять." },
      {
        es: "No está; estará en el trabajo.",
        ru: "Его нет; наверное, он на работе.",
      },
    ],
    commonMistakes: [
      "Здесь futuro выражает вероятность в настоящем, а не будущее событие.",
    ],
  },
  "b1-29": {
    acceptedAnswers: ["había empezado", "habia empezado"],
    lessonIds: ["th-b1-9"],
    hint: "Событие произошло раньше моего прихода.",
    examples: [
      {
        es: "Cuando entré, ya se habían ido.",
        ru: "Когда я вошёл, они уже ушли.",
      },
      { es: "La tienda ya había cerrado.", ru: "Магазин уже закрылся." },
    ],
    commonMistakes: [
      "Pluscuamperfecto использует había, а не he: había empezado.",
    ],
  },
  "b1-30": {
    acceptedAnswers: ["habíamos visto", "habiamos visto"],
    lessonIds: ["th-b1-9"],
    hint: "Действие завершилось до момента решения не идти.",
    examples: [
      {
        es: "Ya habíamos cenado cuando llamaste.",
        ru: "Мы уже поужинали, когда ты позвонил.",
      },
      {
        es: "No leí el libro porque ya lo había leído.",
        ru: "Я не читал книгу, потому что уже прочёл её.",
      },
    ],
    commonMistakes: [
      "Для более раннего действия нужен pluscuamperfecto, а не indefinido vimos.",
    ],
  },
  "b1-31": {
    acceptedAnswers: ["había probado", "habia probado"],
    lessonIds: ["th-b1-9"],
    hint: "Опыт до определённого прошлого момента (hasta ese día).",
    examples: [
      { es: "Nunca había estado en París.", ru: "Я никогда не был в Париже." },
      {
        es: "Hasta entonces no había visto el mar.",
        ru: "До тех пор я не видел моря.",
      },
    ],
    commonMistakes: [
      "С hasta ese día используйте había probado, а не he probado.",
    ],
  },
  "b1-32": {
    acceptedAnswers: ["había olvidado", "habia olvidado"],
    lessonIds: ["th-b1-9"],
    hint: "Косвенная речь передаёт «предпрошедшее» через pluscuamperfecto.",
    examples: [
      {
        es: "Dijo que había perdido el tren.",
        ru: "Он сказал, что опоздал на поезд.",
      },
      {
        es: "Contó que había vivido en Roma.",
        ru: "Он рассказал, что жил в Риме.",
      },
    ],
    commonMistakes: [
      "После dijo que для более раннего действия нужен había olvidado.",
    ],
  },
  "b1-33": {
    acceptedAnswers: ["de"],
    lessonIds: ["th-b1-10"],
    hint: "Перифраза «только что» — acabar de + infinitivo.",
    examples: [
      { es: "Acabo de comer.", ru: "Я только что поел." },
      { es: "Acaban de salir.", ru: "Они только что вышли." },
    ],
    commonMistakes: ["Acabar de, а не acabar a или acabar que."],
  },
  "b1-34": {
    acceptedAnswers: ["a"],
    lessonIds: ["th-b1-10"],
    hint: "Намерение выражается ir a + infinitivo.",
    examples: [
      { es: "Voy a llamar a Ana.", ru: "Я собираюсь позвонить Ане." },
      {
        es: "Vamos a ver una película.",
        ru: "Мы собираемся посмотреть фильм.",
      },
    ],
    commonMistakes: ["Ir a + infinitivo: предлог a обязателен."],
  },
  "b1-35": {
    acceptedAnswers: ["estudiando"],
    lessonIds: ["th-b1-10"],
    hint: "Llevar + gerundio выражает длительность.",
    examples: [
      { es: "Llevo una hora esperando.", ru: "Я жду уже час." },
      { es: "Lleva años viviendo aquí.", ru: "Он живёт здесь много лет." },
    ],
    commonMistakes: [
      "После llevar + время нужен герундий (estudiando), а не инфинитив.",
    ],
  },
  "b1-36": {
    acceptedAnswers: ["de"],
    lessonIds: ["th-b1-10"],
    hint: "«Перестать делать» — dejar de + infinitivo.",
    examples: [
      { es: "Dejé de comer carne.", ru: "Я перестал есть мясо." },
      { es: "No dejes de intentarlo.", ru: "Не переставай пытаться." },
    ],
    commonMistakes: ["Dejar de, а не dejar a."],
  },
  "b1-37": {
    acceptedAnswers: ["es"],
    lessonIds: ["th-b1-11"],
    hint: "Профессия — это сущность.",
    examples: [
      { es: "Es profesor de historia.", ru: "Он преподаватель истории." },
      { es: "Somos estudiantes.", ru: "Мы студенты." },
    ],
    commonMistakes: ["Для профессии используйте ser, а не estar."],
  },
  "b1-38": {
    acceptedAnswers: ["está"],
    lessonIds: ["th-b1-11"],
    hint: "Местоположение выражается estar.",
    examples: [
      { es: "El banco está cerca.", ru: "Банк находится рядом." },
      { es: "Estamos en la playa.", ru: "Мы на пляже." },
    ],
    commonMistakes: ["Местоположение — estar; ser здесь неверно."],
  },
  "b1-39": {
    acceptedAnswers: ["está"],
    lessonIds: ["th-b1-11"],
    hint: "Температура сейчас — временное состояние.",
    examples: [
      { es: "El café está frío.", ru: "Кофе холодный." },
      { es: "Estoy muy cansado hoy.", ru: "Сегодня я очень устал." },
    ],
    commonMistakes: ["Временное состояние — estar, а не ser."],
  },
  "b1-40": {
    acceptedAnswers: ["es"],
    lessonIds: ["th-b1-11"],
    hint: "Место проведения события выражается ser.",
    examples: [
      { es: "La boda es en el jardín.", ru: "Свадьба в саду." },
      { es: "El concierto es en el teatro.", ru: "Концерт в театре." },
    ],
    commonMistakes: [
      "Место события — ser (es en la sala), хотя предметы — estar.",
    ],
  },
  "b1-41": {
    acceptedAnswers: ["que"],
    lessonIds: ["th-b1-12"],
    hint: "Сравнение превосходства использует más … que.",
    examples: [
      { es: "Es más rápido que yo.", ru: "Он быстрее меня." },
      { es: "Hoy hace más calor que ayer.", ru: "Сегодня жарче, чем вчера." },
    ],
    commonMistakes: [
      "Перед числом используется de, но при обычном сравнении — que.",
    ],
  },
  "b1-42": {
    acceptedAnswers: ["tantos"],
    lessonIds: ["th-b1-12"],
    hint: "Равенство с существительным: tanto/a/os/as + сущ. + como.",
    examples: [
      { es: "Tengo tanta hambre como tú.", ru: "Я так же голоден, как ты." },
      {
        es: "Hay tantas sillas como personas.",
        ru: "Стульев столько же, сколько людей.",
      },
    ],
    commonMistakes: [
      "Tanto согласуется с существительным: tantos libros, не tan libros.",
    ],
  },
  "b1-43": {
    acceptedAnswers: ["mejor"],
    lessonIds: ["th-b1-12"],
    hint: "Bueno имеет неправильную сравнительную форму.",
    examples: [
      { es: "Este es el mejor día.", ru: "Это лучший день." },
      { es: "Tu idea es peor que la mía.", ru: "Твоя идея хуже моей." },
    ],
    commonMistakes: [
      "Не используйте más mejor: mejor уже сравнительная форма.",
    ],
  },
  "b1-44": {
    acceptedAnswers: ["buenísima", "buenisima"],
    lessonIds: ["th-b1-12"],
    hint: "Абсолютная превосходная степень — суффикс -ísimo/a.",
    examples: [
      { es: "La casa es grandísima.", ru: "Дом огромный." },
      { es: "El examen fue facilísimo.", ru: "Экзамен был очень лёгким." },
    ],
    commonMistakes: ["Согласуйте род: buena → buenísima, а не buenísimo."],
  },
  "b1-45": {
    acceptedAnswers: ["llegues"],
    lessonIds: ["th-b1-13"],
    hint: "Cuando о будущем требует subjuntivo.",
    examples: [
      { es: "Cuando puedas, llámame.", ru: "Когда сможешь, позвони мне." },
      { es: "Cuando termines, avísame.", ru: "Когда закончишь, скажи мне." },
    ],
    commonMistakes: [
      "О будущем нужен subjuntivo (llegues), а не indicativo llegas.",
    ],
  },
  "b1-46": {
    acceptedAnswers: ["termine"],
    lessonIds: ["th-b1-13"],
    hint: "En cuanto о будущем требует subjuntivo.",
    examples: [
      { es: "En cuanto llegue, te aviso.", ru: "Как только приду, дам знать." },
      {
        es: "Te escribo en cuanto sepa algo.",
        ru: "Напишу, как только что-то узнаю.",
      },
    ],
    commonMistakes: [
      "Не используйте futuro terminaré после en cuanto: нужен subjuntivo.",
    ],
  },
  "b1-47": {
    acceptedAnswers: ["entiendas"],
    lessonIds: ["th-b1-13"],
    hint: "Para que + subjuntivo при разных субъектах.",
    examples: [
      {
        es: "Lo repito para que quede claro.",
        ru: "Повторяю, чтобы было ясно.",
      },
      {
        es: "Te aviso para que estés preparado.",
        ru: "Предупреждаю, чтобы ты был готов.",
      },
    ],
    commonMistakes: [
      "При разных субъектах нужен subjuntivo (entiendas), а не infinitivo.",
    ],
  },
  "b1-48": {
    acceptedAnswers: ["oigan"],
    lessonIds: ["th-b1-13"],
    hint: "Para que + subjuntivo; форма oír → oigan.",
    examples: [
      {
        es: "Enciende la luz para que veamos.",
        ru: "Включи свет, чтобы мы видели.",
      },
      {
        es: "Habla despacio para que te entiendan.",
        ru: "Говори медленно, чтобы тебя понимали.",
      },
    ],
    commonMistakes: ["Oír в subjuntivo — oigan, а не oyen."],
  },
  "b1-49": {
    acceptedAnswers: ["tenga"],
    lessonIds: ["th-b1-14"],
    hint: "Искомый, ещё не найденный предмет требует subjuntivo.",
    examples: [
      {
        es: "Busco un trabajo que me guste.",
        ru: "Ищу работу, которая мне нравится.",
      },
      { es: "Quiero algo que sea barato.", ru: "Хочу что-нибудь недорогое." },
    ],
    commonMistakes: [
      "Если предмет ещё не найден, нужен subjuntivo (tenga), не tiene.",
    ],
  },
  "b1-50": {
    acceptedAnswers: ["sepa"],
    lessonIds: ["th-b1-14"],
    hint: "Несуществующий антецедент (nadie) требует subjuntivo.",
    examples: [
      {
        es: "No hay nada que me interese.",
        ru: "Нет ничего, что меня интересует.",
      },
      {
        es: "No conozco a nadie que fume.",
        ru: "Я не знаю никого, кто курит.",
      },
    ],
    commonMistakes: [
      "После no hay nadie que нужен subjuntivo, а не indicativo sabe.",
    ],
  },
  "b1-51": {
    acceptedAnswers: ["tenga"],
    lessonIds: ["th-b1-14"],
    hint: "Отрицание мнения снимает уверенность.",
    examples: [
      { es: "No creo que venga hoy.", ru: "Не думаю, что он придёт сегодня." },
      { es: "No pienso que sea difícil.", ru: "Не думаю, что это трудно." },
    ],
    commonMistakes: ["После no creo que нужен subjuntivo (tenga), не tiene."],
  },
  "b1-52": {
    acceptedAnswers: ["sea"],
    lessonIds: ["th-b1-14"],
    hint: "No es verdad que требует subjuntivo.",
    examples: [
      { es: "No es cierto que lo sepa.", ru: "Неправда, что он это знает." },
      { es: "No está claro que funcione.", ru: "Неясно, работает ли это." },
    ],
    commonMistakes: ["После no es verdad que нужен subjuntivo sea, а не es."],
  },
  "b1-53": {
    acceptedAnswers: ["estudias"],
    lessonIds: ["th-b1-15"],
    hint: "Реальное условие: si + presente de indicativo.",
    examples: [
      {
        es: "Si tengo tiempo, te ayudo.",
        ru: "Если у меня будет время, я помогу тебе.",
      },
      {
        es: "Si hace sol, vamos a la playa.",
        ru: "Если будет солнце, пойдём на пляж.",
      },
    ],
    commonMistakes: [
      "После si нельзя presente de subjuntivo: si estudias, не si estudies.",
    ],
  },
  "b1-54": {
    acceptedAnswers: ["nos quedamos"],
    lessonIds: ["th-b1-15"],
    hint: "В реальном условии главная часть в presente/futuro.",
    examples: [
      {
        es: "Si llueve, cogemos un taxi.",
        ru: "Если пойдёт дождь, возьмём такси.",
      },
      { es: "Si puedes, ven pronto.", ru: "Если можешь, приходи скорее." },
    ],
    commonMistakes: [
      "Не используйте condicional в реальном условии: nos quedamos, не nos quedaríamos.",
    ],
  },
  "b1-55": {
    acceptedAnswers: ["tuviera", "tuviese"],
    lessonIds: ["th-b1-15"],
    hint: "Гипотеза: si + imperfecto de subjuntivo.",
    examples: [
      {
        es: "Si supiera la respuesta, te la diría.",
        ru: "Если бы я знал ответ, я бы тебе его сказал.",
      },
      {
        es: "Si estuvieras aquí, todo sería más fácil.",
        ru: "Если бы ты был здесь, всё было бы проще.",
      },
    ],
    commonMistakes: [
      "После si в гипотезе — imperfecto de subjuntivo (tuviera), не condicional.",
    ],
  },
  "b1-56": {
    acceptedAnswers: ["hablaría", "hablaria"],
    lessonIds: ["th-b1-15"],
    hint: "Главная часть гипотетического условия — condicional.",
    examples: [
      {
        es: "Si pudiera, viajaría por todo el mundo.",
        ru: "Если бы мог, я бы объехал весь мир.",
      },
      {
        es: "Yo, en tu lugar, aceptaría.",
        ru: "Я на твоём месте согласился бы.",
      },
    ],
    commonMistakes: [
      "В главной части нужен condicional (hablaría), а не presente.",
    ],
  },
  "b1-57": {
    acceptedAnswers: ["se puso"],
    lessonIds: ["th-b1-16"],
    hint: "Быстрая временная перемена настроения — ponerse.",
    examples: [
      {
        es: "Se puso nervioso antes del examen.",
        ru: "Он занервничал перед экзаменом.",
      },
      { es: "Me puse contento al verte.", ru: "Я обрадовался, увидев тебя." },
    ],
    commonMistakes: ["Для настроения используйте ponerse, а не hacerse."],
  },
  "b1-58": {
    acceptedAnswers: ["se hizo"],
    lessonIds: ["th-b1-16"],
    hint: "Постепенная перемена с усилием — hacerse.",
    examples: [
      {
        es: "Con el tiempo se hizo famoso.",
        ru: "Со временем он стал знаменитым.",
      },
      { es: "Se hicieron amigos rápidamente.", ru: "Они быстро подружились." },
    ],
    commonMistakes: [
      "Профессию/статус даёт hacerse (se hizo médico), а не ponerse.",
    ],
  },
  "b1-59": {
    acceptedAnswers: ["se volvió", "se volvio"],
    lessonIds: ["th-b1-16"],
    hint: "Глубокая непроизвольная перемена характера — volverse.",
    examples: [
      { es: "Se volvió muy desconfiado.", ru: "Он стал очень недоверчивым." },
      { es: "La ciudad se volvió peligrosa.", ru: "Город стал опасным." },
    ],
    commonMistakes: [
      "Для устойчивой перемены характера используйте volverse, не ponerse.",
    ],
  },
  "b1-60": {
    acceptedAnswers: ["se quedó", "se quedo"],
    lessonIds: ["th-b1-16"],
    hint: "Состояние как результат события — quedarse.",
    examples: [
      { es: "Se quedó dormido en el sofá.", ru: "Он уснул на диване." },
      { es: "Me quedé sin dinero.", ru: "Я остался без денег." },
    ],
    commonMistakes: ["Итог события выражается quedarse, а не hacerse."],
  },
  "b1-61": {
    acceptedAnswers: ["gustan"],
    lessonIds: ["th-b1-17"],
    hint: "Gustar согласуется с предметом.",
    examples: [
      {
        es: "Me gustan las películas de terror.",
        ru: "Мне нравятся фильмы ужасов.",
      },
      { es: "¿Te gustan estos zapatos?", ru: "Тебе нравятся эти туфли?" },
    ],
    commonMistakes: ["С множественным предметом — gustan, а не gusta."],
  },
  "b1-62": {
    acceptedAnswers: ["encanta"],
    lessonIds: ["th-b1-17"],
    hint: "Подлежащее — инфинитив (ед.).",
    examples: [
      { es: "Me encanta bailar.", ru: "Обожаю танцевать." },
      { es: "A ellos les encanta el mar.", ru: "Они обожают море." },
    ],
    commonMistakes: [
      "С инфинитивом форма единственного числа: encanta, не encantan.",
    ],
  },
  "b1-63": {
    acceptedAnswers: ["cayó", "cayo"],
    lessonIds: ["th-b1-17"],
    hint: "Se involuntario: случайность; согласование с предметом (ед.).",
    examples: [
      { es: "Se me rompió el móvil.", ru: "У меня сломался телефон." },
      { es: "Se le cayó el helado.", ru: "У него упало мороженое." },
    ],
    commonMistakes: [
      "Глагол согласуется с предметом: se me cayó el vaso (ед.).",
    ],
  },
  "b1-64": {
    acceptedAnswers: ["olvidaron"],
    lessonIds: ["th-b1-17"],
    hint: "Se involuntario согласуется с предметом во мн. числе.",
    examples: [
      { es: "Se me perdieron los papeles.", ru: "У меня потерялись бумаги." },
      { es: "Se nos acabaron las ideas.", ru: "У нас закончились идеи." },
    ],
    commonMistakes: ["С множественным предметом — olvidaron, а не olvidó."],
  },
  "b1-65": {
    acceptedAnswers: ["así que", "asi que"],
    lessonIds: ["th-b1-18"],
    hint: "Причина ведёт к результату.",
    examples: [
      {
        es: "Llovía, así que no salimos.",
        ru: "Шёл дождь, поэтому мы не вышли.",
      },
      {
        es: "Estaba cerrado, así que volvimos.",
        ru: "Было закрыто, поэтому мы вернулись.",
      },
    ],
    commonMistakes: ["Así que вводит следствие, а porque — причину."],
  },
  "b1-66": {
    acceptedAnswers: ["como"],
    lessonIds: ["th-b1-18"],
    hint: "Como в начале фразы вводит причину.",
    examples: [
      {
        es: "Como no tenía dinero, no fui.",
        ru: "Так как у меня не было денег, я не пошёл.",
      },
      {
        es: "Como era tarde, nos acostamos.",
        ru: "Так как было поздно, мы легли спать.",
      },
    ],
    commonMistakes: ["Причину в начале вводит Como, а не Porque."],
  },
  "b1-67": {
    acceptedAnswers: ["sin embargo"],
    lessonIds: ["th-b1-18"],
    hint: "Нужен коннектор контраста.",
    examples: [
      {
        es: "Estudió mucho; sin embargo, suspendió.",
        ru: "Он много учился, однако провалился.",
      },
      {
        es: "Es difícil; no obstante, lo intentaré.",
        ru: "Это трудно, тем не менее я попробую.",
      },
    ],
    commonMistakes: ["Контраст выражает sin embargo, а не porque."],
  },
  "b1-68": {
    acceptedAnswers: ["aunque"],
    lessonIds: ["th-b1-18"],
    hint: "Уступка о предположении требует aunque + subjuntivo.",
    examples: [
      {
        es: "Aunque cueste, lo compraré.",
        ru: "Даже если будет дорого, я это куплю.",
      },
      {
        es: "Aunque llueva, saldremos.",
        ru: "Даже если пойдёт дождь, мы выйдем.",
      },
    ],
    commonMistakes: ["О предположении aunque идёт с subjuntivo (llueva)."],
  },
  "b1-69": {
    acceptedAnswers: ["en"],
    lessonIds: ["th-b1-19"],
    hint: "Средство передвижения выражается en.",
    examples: [
      { es: "Voy en autobús al trabajo.", ru: "Я езжу на работу на автобусе." },
      { es: "Viajaron en coche.", ru: "Они поехали на машине." },
    ],
    commonMistakes: ["Транспорт — en tren/en coche; исключение: a pie."],
  },
  "b1-70": {
    acceptedAnswers: ["a"],
    lessonIds: ["th-b1-19"],
    hint: "Перед дополнением-человеком ставится личное a.",
    examples: [
      { es: "Llamé a mi madre.", ru: "Я позвонил маме." },
      { es: "Esperamos a Juan.", ru: "Мы ждём Хуана." },
    ],
    commonMistakes: [
      "С дополнением-человеком нужно личное a: vi a tu hermano.",
    ],
  },
  "b1-71": {
    acceptedAnswers: ["en"],
    lessonIds: ["th-b1-19"],
    hint: "Pensar управляет предлогом en.",
    examples: [
      { es: "Pienso en el futuro.", ru: "Я думаю о будущем." },
      { es: "Sueño con vivir en el campo.", ru: "Я мечтаю жить за городом." },
    ],
    commonMistakes: ["Pensar en algo, а не pensar de/a."],
  },
  "b1-72": {
    acceptedAnswers: ["de"],
    lessonIds: ["th-b1-19"],
    hint: "Depender управляет предлогом de.",
    examples: [
      { es: "Depende del tiempo.", ru: "Это зависит от погоды." },
      { es: "Me acuerdo de ti.", ru: "Я помню о тебе." },
    ],
    commonMistakes: ["Depender de, а не depender en."],
  },
  "b1-73": {
    acceptedAnswers: ["que"],
    lessonIds: ["th-b1-20"],
    hint: "Конструкция hace + время + que + presente.",
    examples: [
      { es: "Hace un mes que no lo veo.", ru: "Я не вижу его уже месяц." },
      { es: "Hace años que vivo aquí.", ru: "Я живу здесь уже много лет." },
    ],
    commonMistakes: ["В hace … que действие в presente, а не в futuro."],
  },
  "b1-74": {
    acceptedAnswers: ["trabajando"],
    lessonIds: ["th-b1-20"],
    hint: "Llevar + время + gerundio.",
    examples: [
      { es: "Llevo dos horas estudiando.", ru: "Я занимаюсь уже два часа." },
      { es: "Llevamos un año viviendo aquí.", ru: "Мы живём здесь уже год." },
    ],
    commonMistakes: [
      "После llevar + время нужен герундий (trabajando), не инфинитив.",
    ],
  },
  "b1-75": {
    acceptedAnswers: ["hace"],
    lessonIds: ["th-b1-20"],
    hint: "«Тому назад» с завершённым действием — hace + время.",
    examples: [
      { es: "Llegué hace una hora.", ru: "Я пришёл час назад." },
      { es: "Se fueron hace un rato.", ru: "Они ушли некоторое время назад." },
    ],
    commonMistakes: [
      "Для «тому назад» используйте hace без que: hace dos días.",
    ],
  },
};

export const b1Grammar = b1GrammarBase.map((exercise) => ({
  ...exercise,
  ...b1GrammarDetails[exercise.id],
})) satisfies GrammarExercise[];
