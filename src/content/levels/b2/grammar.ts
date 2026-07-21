import type { GrammarExercise } from "../../types";

const b2GrammarBase = [
  {
    id: "b2-01",
    level: "B2",
    topic: "subjuntivo imperfecto",
    type: "fill",
    prompt: "Si (yo/tener) ___ más tiempo, aprendería piano.",
    answer: "tuviera",
    explain:
      'Условное 2 типа (нереальное в настоящем): "si + imperfecto de subjuntivo, condicional". Tener → tuviera/tuviese.',
    revision: 1,
  },
  {
    id: "b2-02",
    level: "B2",
    topic: "condicional tipo 2",
    type: "mcq",
    prompt: "Si yo ___ tú, aceptaría la oferta.",
    options: ["fuera", "soy", "sería", "fui"],
    answer: "fuera",
    explain:
      'Гипотетическое условие: "si + imperfecto subjuntivo (fuera/fuese), + condicional (aceptaría)".',
    revision: 1,
  },
  {
    id: "b2-03",
    level: "B2",
    topic: "condicional tipo 3",
    type: "mcq",
    prompt: "Si me lo ___ dicho, te habría ayudado.",
    options: ["hubieras", "habrías", "has", "hubiste"],
    answer: "hubieras",
    explain:
      'Нереальное условие в прошлом: "si + pluscuamperfecto de subjuntivo (hubieras dicho), + condicional compuesto (habría ayudado)".',
    revision: 1,
  },
  {
    id: "b2-04",
    level: "B2",
    topic: "voz pasiva",
    type: "fill",
    prompt: "La novela (escribir, pasiva) ___ ___ por Cervantes.",
    answer: "fue escrita",
    solvedExample: "La novela fue escrita por Cervantes.",
    explain:
      'Пассивный залог: "ser (в нужном времени) + participio", согласованный в роде/числе с подлежащим: fue escrita.',
    revision: 1,
  },
  {
    id: "b2-05",
    level: "B2",
    topic: "gerundio causal",
    type: "mcq",
    prompt: "___ mucho, aprobó el examen fácilmente.",
    options: ["Estudiando", "Estudia", "Estudiado", "Estudiar"],
    answer: "estudiando",
    explain:
      'Деепричастие (gerundio) может выражать причину или способ: "Estudiando mucho" = "поскольку/благодаря тому, что много учился".',
    revision: 2,
  },
  {
    id: "b2-06",
    level: "B2",
    topic: "verbos de cambio",
    type: "mcq",
    prompt: "Después del accidente, se ___ muy nervioso cada vez que conduce.",
    options: ["pone", "hace", "vuelve", "llega a ser"],
    answer: "pone",
    explain:
      '"Ponerse + adjetivo" выражает временное эмоциональное/физическое изменение: se pone nervioso. "Volverse" — более устойчивое изменение характера.',
    revision: 1,
  },
  {
    id: "b2-07",
    level: "B2",
    topic: "subjuntivo — duda/emoción",
    type: "fill",
    prompt: "Me sorprendió que no me (tú/llamar) ___ ayer.",
    answer: "llamaras",
    explain:
      'После выражения эмоции в прошедшем времени ("me sorprendió que") используется imperfecto de subjuntivo: llamaras.',
    revision: 2,
  },
  {
    id: "b2-08",
    level: "B2",
    topic: "concesivas",
    type: "mcq",
    prompt: "Aunque ___ mucho dinero, no sería feliz sin amigos.",
    options: ["tuviera", "tengo", "tuve", "tendría"],
    answer: "tuviera",
    explain:
      '"Aunque" с гипотетическим, нереальным смыслом требует subjuntivo (tuviera); с фактом — indicativo (tengo).',
    revision: 1,
  },
  {
    id: "b2-09",
    level: "B2",
    topic: "pluscuamperfecto",
    type: "fill",
    prompt: "Cuando llegamos, la película ya (empezar) ___ ___.",
    answer: "había empezado",
    solvedExample: "Cuando llegamos, la película ya había empezado.",
    explain:
      "Pluscuamperfecto (había + participio) описывает действие, завершившееся до другого прошедшего действия: había empezado.",
    revision: 1,
  },
  {
    id: "b2-10",
    level: "B2",
    topic: "futuro compuesto",
    type: "mcq",
    prompt: "Para el año 2030, los científicos ___ una cura.",
    options: [
      "habrán encontrado",
      "encontrarán",
      "han encontrado",
      "encuentran",
    ],
    answer: "habrán encontrado",
    explain:
      "Futuro compuesto (habrá + participio) выражает действие, которое будет завершено к определённому моменту в будущем.",
    revision: 1,
  },
  {
    id: "b2-11",
    level: "B2",
    topic: "lo que",
    type: "mcq",
    prompt: "No entiendo ___ quieres decir.",
    options: ["lo que", "que", "lo cual", "cual"],
    answer: "lo que",
    explain:
      '"Lo que" используется для обозначения абстрактной идеи или неопределённого предмета ("то, что"): no entiendo lo que quieres decir.',
    revision: 1,
  },
  {
    id: "b2-12",
    level: "B2",
    topic: "verbos con preposición",
    type: "mcq",
    prompt: "Por fin me acostumbré ___ vivir aquí.",
    options: ["a", "de", "en", "con"],
    answer: "a",
    explain:
      '"Acostumbrarse a" — устойчивое сочетание глагола с предлогом "a".',
    revision: 1,
  },
  {
    id: "b2-13",
    level: "B2",
    topic: "discurso indirecto",
    type: "mcq",
    prompt: "Me preguntó si ___ ir con ellos al cine.",
    options: ["quería", "quiero", "querré", "quise"],
    answer: "quería",
    explain:
      "В косвенном вопросе после глагола в прошедшем времени presente переходит в imperfecto: quiero → quería.",
    revision: 1,
  },
  {
    id: "b2-14",
    level: "B2",
    topic: "cuál vs qué",
    type: "mcq",
    prompt: "¿___ es tu color favorito?",
    options: ["Cuál", "Qué", "Cual es", "Que"],
    answer: "cuál",
    explain:
      '"Cuál" используется перед глаголом "ser" для выбора из группы вариантов: ¿Cuál es tu color favorito?',
    revision: 1,
  },
  {
    id: "b2-15",
    level: "B2",
    topic: "condicional tipo 3",
    type: "fill",
    prompt: "Si (yo/saber) ___ la verdad, te la habría dicho.",
    answer: "hubiera sabido",
    explain:
      'Нереальное условие в прошлом: "si + pluscuamperfecto de subjuntivo, + condicional compuesto". Saber → hubiera sabido.',
    revision: 1,
  },
  {
    id: "b2-16",
    level: "B2",
    topic: "voz pasiva",
    type: "fill",
    prompt: "El puente (construir, pasiva) ___ ___ en 1920.",
    answer: "fue construido",
    solvedExample: "El puente fue construido en 1920.",
    explain:
      "Пассивный залог: ser (в прошедшем времени) + participio, согласованный с подлежащим (el puente — м.р.): fue construido.",
    revision: 1,
  },
  {
    id: "b2-17",
    level: "B2",
    topic: "gerundio",
    type: "fill",
    prompt: "(Caminar) ___ por la calle, vi a mi amigo.",
    answer: "caminando",
    explain:
      "Деепричастие (gerundio) в начале фразы выражает одновременное действие: caminando por la calle, vi...",
    revision: 1,
  },
  {
    id: "b2-18",
    level: "B2",
    topic: "pluscuamperfecto",
    type: "fill",
    prompt: "Cuando llegué, ellos ya (salir) ___ ___.",
    answer: "habían salido",
    solvedExample: "Cuando llegué, ellos ya habían salido.",
    explain:
      "Pluscuamperfecto (había + participio) описывает действие, завершившееся раньше другого прошедшего действия.",
    revision: 1,
  },
  {
    id: "b2-19",
    level: "B2",
    topic: "futuro compuesto",
    type: "fill",
    prompt: "Para diciembre, (nosotros/terminar) ___ ___ el curso.",
    answer: "habremos terminado",
    solvedExample: "Para diciembre, habremos terminado el curso.",
    explain:
      "Futuro compuesto (habremos + participio) выражает действие, которое будет завершено к определённому моменту будущего.",
    revision: 1,
  },
  {
    id: "b2-20",
    level: "B2",
    topic: "verbos con preposición",
    type: "fill",
    prompt: "Los niños se rieron ___ el payaso.",
    answer: "de",
    explain:
      '"Reírse de algo/alguien" — устойчивое сочетание "смеяться над кем-то/чем-то".',
    revision: 1,
  },
] satisfies GrammarExercise[];

const b2GrammarDetails: Record<
  string,
  Pick<
    GrammarExercise,
    "acceptedAnswers" | "lessonIds" | "hint" | "examples" | "commonMistakes"
  >
> = {
  "b2-01": {
    acceptedAnswers: ["tuviera"],
    lessonIds: ["th-b2-1"],
    hint: "Главная часть стоит в condicional, значит условие нереально: нужна форма от tuvieron.",
    examples: [
      {
        es: "Si tuviera coche, iría a la playa cada domingo.",
        ru: "Если бы у меня была машина, я бы ездил на пляж каждое воскресенье.",
      },
      {
        es: "Si tuviéramos más espacio, invitaríamos a todos.",
        ru: "Если бы у нас было больше места, мы пригласили бы всех.",
      },
    ],
    commonMistakes: [
      "После si в нереальном условии не ставится condicional: si tuviera, не si tendría.",
      "Форма tuviese равноправна, но в одном предложении ряды -ra и -se не смешивают.",
    ],
  },
  "b2-02": {
    acceptedAnswers: ["fuera"],
    lessonIds: ["th-b2-1"],
    hint: "Si yo fuera tú — устойчивая формула совета; в ней ser стоит в imperfecto de subjuntivo.",
    examples: [
      {
        es: "Si yo fuera tú, no diría nada.",
        ru: "На твоём месте я бы ничего не сказал.",
      },
      {
        es: "Si fuéramos más jóvenes, nos apuntaríamos al viaje.",
        ru: "Если бы мы были моложе, мы записались бы в поездку.",
      },
    ],
    commonMistakes: [
      "Si soy tú невозможно: гипотеза о смене лица всегда нереальна.",
      "Indefinido fui сообщал бы о факте прошлого, а не о гипотезе.",
    ],
  },
  "b2-03": {
    acceptedAnswers: ["hubieras"],
    lessonIds: ["th-b2-1"],
    hint: "Главная часть te habría ayudado относится к прошлому, значит условие тоже нереально в прошлом.",
    examples: [
      {
        es: "Si me hubieras avisado, habría ido contigo.",
        ru: "Если бы ты меня предупредил, я бы пошёл с тобой.",
      },
      {
        es: "Si hubieran salido antes, no habrían perdido el tren.",
        ru: "Если бы они вышли раньше, они бы не опоздали на поезд.",
      },
    ],
    commonMistakes: [
      "После si не используется habrías: condicional стоит только в главной части.",
      "Has dicho описывает реальный факт, поэтому не подходит для нереального условия.",
    ],
  },
  "b2-04": {
    acceptedAnswers: ["fue escrita"],
    lessonIds: ["th-b2-2"],
    hint: "Подлежащее la novela — женского рода единственного числа, и с ним согласуется причастие.",
    examples: [
      {
        es: "La ley fue aprobada el año pasado.",
        ru: "Закон был принят в прошлом году.",
      },
      {
        es: "Las cartas fueron enviadas ayer.",
        ru: "Письма были отправлены вчера.",
      },
    ],
    commonMistakes: [
      "В пассиве с ser причастие согласуется: fue escrita, а не fue escrito.",
      "Не используйте estar вместо ser: estaba escrita описывало бы состояние, а не действие.",
    ],
  },
  "b2-05": {
    acceptedAnswers: ["estudiando"],
    lessonIds: ["th-b2-4"],
    hint: "Нужна нефинитная форма, которая объясняет, благодаря чему он сдал экзамен.",
    examples: [
      {
        es: "Trabajando así, terminarás pronto.",
        ru: "Работая так, ты скоро закончишь.",
      },
      {
        es: "Viajando por el país, aprendió mucho español.",
        ru: "Путешествуя по стране, он выучил много испанского.",
      },
    ],
    commonMistakes: [
      "Испанский gerundio не бывает подлежащим: Fumar es malo, а не Fumando es malo.",
      "Estudiado — причастие: оно описывает результат, а не способ действия.",
    ],
  },
  "b2-06": {
    acceptedAnswers: ["pone"],
    lessonIds: ["th-b2-6"],
    hint: "Речь идёт о повторяющейся временной реакции за рулём, а не о новой черте характера.",
    examples: [
      {
        es: "Se pone rojo cuando habla en público.",
        ru: "Он краснеет, когда выступает публично.",
      },
      {
        es: "Se volvió muy desconfiado con los años.",
        ru: "С годами он стал очень недоверчивым.",
      },
    ],
    commonMistakes: [
      "Volverse означало бы устойчивую перемену характера, а не эмоцию в конкретной ситуации.",
      "Hacerse предполагает результат собственных усилий: se hizo médico.",
    ],
  },
  "b2-07": {
    acceptedAnswers: ["llamaras"],
    lessonIds: ["th-b2-5"],
    hint: "Главный глагол sorprendió стоит в прошедшем, поэтому придаточное сдвигается в прошедший subjuntivo.",
    examples: [
      {
        es: "Me alegró que vinieras a la fiesta.",
        ru: "Меня обрадовало, что ты пришёл на праздник.",
      },
      {
        es: "Sentí mucho que no pudieran quedarse.",
        ru: "Мне было очень жаль, что они не смогли остаться.",
      },
    ],
    commonMistakes: [
      "После эмоции в прошедшем не ставится presente de subjuntivo: llamaras, а не llames.",
      "Indicativo llamaste сообщал бы факт, а конструкция требует оценки говорящего.",
    ],
  },
  "b2-08": {
    acceptedAnswers: ["tuviera"],
    lessonIds: ["th-b2-5"],
    hint: "Главная часть no sería feliz стоит в condicional, значит уступка гипотетическая.",
    examples: [
      {
        es: "Aunque lloviera, saldríamos igualmente.",
        ru: "Даже если бы шёл дождь, мы бы всё равно вышли.",
      },
      {
        es: "Aunque llueve, salgo a correr.",
        ru: "Хотя идёт дождь, я выхожу на пробежку.",
      },
    ],
    commonMistakes: [
      "Aunque tengo сообщало бы о реальных деньгах, а фраза говорит о предположении.",
      "Condicional tendría не ставится после aunque в уступительном придаточном.",
    ],
  },
  "b2-09": {
    acceptedAnswers: ["había empezado", "habia empezado"],
    lessonIds: ["th-b2-3"],
    hint: "Фильм начался раньше, чем мы пришли, поэтому нужно время «до прошлого».",
    examples: [
      {
        es: "Cuando llamaste, ya me había dormido.",
        ru: "Когда ты позвонил, я уже заснул.",
      },
      {
        es: "El tren había salido cuando llegamos a la estación.",
        ru: "Поезд уже ушёл, когда мы приехали на вокзал.",
      },
    ],
    commonMistakes: [
      "Empezó поставило бы оба действия в один момент и потеряло бы значение ya.",
      "Между había и причастием не вставляются другие слова: ya había empezado.",
    ],
  },
  "b2-10": {
    acceptedAnswers: ["habrán encontrado", "habran encontrado"],
    lessonIds: ["th-b2-3"],
    hint: "Para el año 2030 задаёт крайний срок, к которому действие уже будет завершено.",
    examples: [
      {
        es: "Para junio habremos terminado las obras.",
        ru: "К июню мы уже закончим работы.",
      },
      {
        es: "Cuando vuelvas, ya habré preparado la cena.",
        ru: "Когда ты вернёшься, я уже приготовлю ужин.",
      },
    ],
    commonMistakes: [
      "Encontrarán не показывает завершённости к указанному сроку.",
      "Han encontrado относит результат к настоящему, а не к 2030 году.",
    ],
  },
  "b2-11": {
    acceptedAnswers: ["lo que"],
    lessonIds: ["th-b2-6"],
    hint: "Дополнение не называет конкретный предмет, а обозначает целое содержание сказанного.",
    examples: [
      {
        es: "Lo que dijo me sorprendió.",
        ru: "То, что он сказал, меня удивило.",
      },
      {
        es: "Haz lo que quieras.",
        ru: "Делай что хочешь.",
      },
    ],
    commonMistakes: [
      "Lo cual не начинает придаточное без предшествующего высказывания.",
      "Одиночное que потребовало бы конкретного существительного-антецедента.",
    ],
  },
  "b2-12": {
    acceptedAnswers: ["a"],
    lessonIds: ["th-b2-6"],
    hint: "Предлог входит в состав глагола и не выбирается по смыслу.",
    examples: [
      {
        es: "Me acostumbré a levantarme temprano.",
        ru: "Я привык вставать рано.",
      },
      {
        es: "Los niños se acostumbraron al nuevo colegio.",
        ru: "Дети привыкли к новой школе.",
      },
    ],
    commonMistakes: [
      "Русское «привыкнуть к» не подсказывает предлог автоматически: сочетание запоминается целиком.",
      "Перед инфинитивом предлог сохраняется: acostumbrarse a vivir.",
    ],
  },
  "b2-13": {
    acceptedAnswers: ["quería", "queria"],
    lessonIds: ["th-b2-6"],
    hint: "Глагол сообщения preguntó стоит в прошедшем, поэтому настоящее сдвигается назад.",
    examples: [
      {
        es: "Me preguntó si tenía tiempo.",
        ru: "Он спросил, есть ли у меня время.",
      },
      {
        es: "Dijo que estaba cansada.",
        ru: "Она сказала, что устала.",
      },
    ],
    commonMistakes: [
      "Косвенный вопрос с si не пишется с вопросительными знаками.",
      "Quise означало бы однократную попытку, а не сохранявшееся желание.",
    ],
  },
  "b2-14": {
    acceptedAnswers: ["cuál", "cual"],
    lessonIds: ["th-b2-6"],
    hint: "Вопрос предполагает выбор из набора известных вариантов, а не определение понятия.",
    examples: [
      {
        es: "¿Cuál es tu apellido?",
        ru: "Какая у тебя фамилия?",
      },
      {
        es: "¿Qué es un apellido?",
        ru: "Что такое фамилия?",
      },
    ],
    commonMistakes: [
      "Перед существительным обычно ставится qué: ¿Qué color prefieres?",
      "В вопросительном слове нужно графическое ударение: cuál, а не cual.",
    ],
  },
  "b2-15": {
    acceptedAnswers: ["hubiera sabido"],
    lessonIds: ["th-b2-1"],
    hint: "Habría dicho в главной части задаёт нереальное прошлое и в придаточном.",
    examples: [
      {
        es: "Si hubiera sabido que venías, habría preparado algo.",
        ru: "Если бы я знал, что ты придёшь, я бы что-нибудь приготовил.",
      },
      {
        es: "Si lo hubiéramos sabido antes, habríamos cambiado el plan.",
        ru: "Если бы мы узнали об этом раньше, мы бы изменили план.",
      },
    ],
    commonMistakes: [
      "Habría sabido в придаточной части после si не употребляется.",
      "Supiera относило бы условие к настоящему, а не к прошлому.",
    ],
  },
  "b2-16": {
    acceptedAnswers: ["fue construido"],
    lessonIds: ["th-b2-2"],
    hint: "Подлежащее el puente мужского рода, а год 1920 требует прошедшего времени.",
    examples: [
      {
        es: "El museo fue inaugurado en 1975.",
        ru: "Музей был открыт в 1975 году.",
      },
      {
        es: "Se construyeron tres hospitales en un año.",
        ru: "За год построили три больницы.",
      },
    ],
    commonMistakes: [
      "Fue construida не согласуется с el puente.",
      "Если деятель не важен, естественнее пассив с se: se construyó el puente en 1920.",
    ],
  },
  "b2-17": {
    acceptedAnswers: ["caminando"],
    lessonIds: ["th-b2-4"],
    hint: "Нужна форма, показывающая действие, происходившее одновременно с vi.",
    examples: [
      {
        es: "Volviendo a casa, encontré las llaves.",
        ru: "Возвращаясь домой, я нашёл ключи.",
      },
      {
        es: "Esperando el autobús, leí el periódico.",
        ru: "Ожидая автобус, я прочитал газету.",
      },
    ],
    commonMistakes: [
      "Инфинитив caminar не выражает одновременность без предлога al.",
      "Gerundio не согласуется по роду и числу: caminando для любого подлежащего.",
    ],
  },
  "b2-18": {
    acceptedAnswers: ["habían salido", "habian salido"],
    lessonIds: ["th-b2-3"],
    hint: "Они ушли раньше моего прихода, и на это указывает ya.",
    examples: [
      {
        es: "Cuando entré, ya habían apagado las luces.",
        ru: "Когда я вошёл, свет уже выключили.",
      },
      {
        es: "Nos dijeron que ya habían terminado.",
        ru: "Нам сказали, что они уже закончили.",
      },
    ],
    commonMistakes: [
      "Salieron поставило бы оба действия в одну точку прошлого.",
      "Вспомогательный глагол согласуется с ellos: habían, а не había.",
    ],
  },
  "b2-19": {
    acceptedAnswers: ["habremos terminado"],
    lessonIds: ["th-b2-3"],
    hint: "Para diciembre задаёт будущий срок, к которому курс уже будет пройден.",
    examples: [
      {
        es: "Para el lunes habremos enviado el informe.",
        ru: "К понедельнику мы отправим отчёт.",
      },
      {
        es: "Dentro de dos horas habrán llegado.",
        ru: "Через два часа они уже приедут.",
      },
    ],
    commonMistakes: [
      "Terminaremos не показывает, что действие завершится именно к сроку.",
      "Причастие остаётся неизменным: habremos terminado, не terminados.",
    ],
  },
  "b2-20": {
    acceptedAnswers: ["de"],
    lessonIds: ["th-b2-6"],
    hint: "Возвратный reírse управляет фиксированным предлогом перед объектом насмешки.",
    examples: [
      {
        es: "No te rías de mí.",
        ru: "Не смейся надо мной.",
      },
      {
        es: "Todos se reían del mismo chiste.",
        ru: "Все смеялись над одной и той же шуткой.",
      },
    ],
    commonMistakes: [
      "Reír без se и без предлога означает просто «смеяться», без объекта насмешки.",
      "Русское «над» не переводится предлогом sobre в этой конструкции.",
    ],
  },
};

export const b2Grammar = b2GrammarBase.map((exercise) => ({
  ...exercise,
  ...b2GrammarDetails[exercise.id],
})) satisfies GrammarExercise[];
