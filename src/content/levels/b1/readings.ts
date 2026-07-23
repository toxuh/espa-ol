import type { ReadingContent } from "../../types";

export const b1Readings = [
  {
    id: "r-b1-1",
    level: "B1",
    type: "noticia",
    title: "El auge del teletrabajo",
    text: "En los últimos años, cada vez más empresas permiten que sus empleados trabajen desde casa. Según varios estudios, el teletrabajo puede mejorar el equilibrio entre la vida personal y profesional, aunque también presenta retos: la comunicación entre compañeros es más difícil y algunas personas sienten que trabajan más horas que antes. Muchos expertos creen que el futuro estará marcado por un modelo mixto, en el que los empleados combinen días de oficina con días de trabajo remoto.",
    instructions:
      "Определите основную мысль, две трудности дистанционной работы и прогноз экспертов. Затем найдите уступительный союз и относительное придаточное.",
    glossary: [
      { term: "el equilibrio", translation: "баланс, равновесие" },
      { term: "presentar retos", translation: "создавать трудности" },
      { term: "estar marcado por", translation: "характеризоваться чем-либо" },
      { term: "un modelo mixto", translation: "смешанная модель" },
    ],
    questions: [
      {
        prompt: "¿Qué ventaja puede ofrecer el teletrabajo?",
        answer:
          "Puede mejorar el equilibrio entre la vida personal y profesional.",
      },
      {
        prompt: "¿Qué dos retos menciona el texto?",
        answer:
          "La comunicación entre compañeros es más difícil y algunas personas trabajan más horas.",
      },
      {
        prompt:
          "¿Cómo será el modelo de trabajo del futuro según muchos expertos?",
        answer:
          "Será un modelo mixto que combine días de oficina y días de trabajo remoto.",
      },
    ],
    notes: [
      "Aunque вводит реальное возражение, а en el que уточняет существительное modelo mixto.",
    ],
    revision: 1,
  },
  {
    id: "r-b1-2",
    level: "B1",
    type: "texto",
    title: "La comida rápida y sus consecuencias",
    text: "La comida rápida se ha convertido en parte de la vida cotidiana de millones de personas, sobre todo en las grandes ciudades. Es barata, rápida y está disponible en cualquier momento. Sin embargo, los médicos advierten que un consumo frecuente puede provocar problemas de salud como la obesidad o enfermedades del corazón. Por eso, cada vez más restaurantes ofrecen opciones más saludables, con ensaladas y platos bajos en grasa, para atraer a un público más consciente de su alimentación.",
    instructions:
      "Разделите текст на причины популярности, риски и реакцию ресторанов. Объясните, какую логическую связь выражают sin embargo и por eso.",
    glossary: [
      { term: "la vida cotidiana", translation: "повседневная жизнь" },
      { term: "advertir", translation: "предупреждать" },
      { term: "provocar", translation: "вызывать, провоцировать" },
      { term: "bajo en grasa", translation: "с низким содержанием жира" },
    ],
    questions: [
      {
        prompt: "¿Por qué resulta atractiva la comida rápida?",
        answer:
          "Porque es barata, rápida y está disponible en cualquier momento.",
      },
      {
        prompt: "¿Qué riesgos señalan los médicos?",
        answer:
          "Un consumo frecuente puede provocar obesidad o enfermedades del corazón.",
      },
      {
        prompt: "¿Cómo intentan responder algunos restaurantes?",
        answer:
          "Ofrecen opciones más saludables, como ensaladas y platos bajos en grasa.",
      },
    ],
    notes: [
      "Sin embargo вводит контраст, а por eso связывает медицинские риски с изменением предложения ресторанов.",
    ],
    revision: 1,
  },
  {
    id: "r-b1-3",
    level: "B1",
    type: "noticia",
    title: "Redes sociales y adolescentes",
    text: "Un nuevo estudio ha analizado el uso de las redes sociales entre los adolescentes de doce a diecisiete años. Los resultados muestran que pasan una media de tres horas diarias conectados, principalmente en aplicaciones de vídeo e imágenes. Los investigadores señalan que, aunque las redes ayudan a mantener el contacto con amigos, un uso excesivo puede afectar el sueño y el rendimiento escolar. Recomiendan establecer límites de tiempo claros y fomentar otras actividades al aire libre.",
    instructions:
      "Найдите числовой результат исследования, пользу, два риска и обе рекомендации. Отделите данные исследования от выводов и советов авторов.",
    glossary: [
      { term: "una media de", translation: "в среднем" },
      { term: "mantener el contacto", translation: "поддерживать связь" },
      { term: "el rendimiento escolar", translation: "успеваемость" },
      { term: "fomentar", translation: "поощрять, развивать" },
    ],
    questions: [
      {
        prompt: "¿Cuánto tiempo pasan conectados los adolescentes?",
        answer: "Pasan una media de tres horas diarias conectados.",
      },
      {
        prompt: "¿Qué beneficio y qué riesgos menciona el estudio?",
        answer:
          "Las redes ayudan a mantener el contacto, pero un uso excesivo puede afectar el sueño y el rendimiento escolar.",
      },
      {
        prompt: "¿Qué recomiendan los investigadores?",
        answer:
          "Recomiendan establecer límites de tiempo y fomentar actividades al aire libre.",
      },
    ],
    notes: [
      "Ha analizado связывает недавнее исследование с актуальными результатами; recomiendan + infinitivo вводит рекомендации.",
    ],
    revision: 1,
  },
  {
    id: "r-b1-4",
    level: "B1",
    type: "artículo de opinión",
    title: "¿Móviles en clase?",
    text: "Cada vez más colegios prohíben el uso del móvil durante las clases, y creo que es una buena decisión. No niego que estos aparatos sean útiles para buscar información o aprender idiomas, pero en el aula suelen ser una fuente de distracción. Cuando un alumno recibe un mensaje, deja de prestar atención y, a menudo, molesta a los demás. Algunos profesores dicen que sería mejor enseñar a usarlos de forma responsable en lugar de prohibirlos por completo. Puede que tengan razón, aunque, mientras no aprendamos a controlarlos, quizá lo más sensato sea dejarlos en la mochila.",
    instructions:
      "Определите позицию автора и его главный аргумент. Найдите уступку (no niego que…) и предложение оппонентов. Обратите внимание на формы subjuntivo и объясните, почему они выбраны.",
    glossary: [
      { term: "el aula", translation: "аудитория, класс" },
      { term: "una fuente de distracción", translation: "источник отвлечения" },
      { term: "prestar atención", translation: "быть внимательным" },
      { term: "lo más sensato", translation: "самое разумное" },
    ],
    questions: [
      {
        prompt: "¿Cuál es la opinión del autor sobre los móviles en clase?",
        answer: "Cree que es buena idea prohibirlos durante las clases.",
      },
      {
        prompt: "¿Qué problema causan los móviles en el aula, según el texto?",
        answer:
          "Distraen al alumno, que deja de prestar atención y molesta a los demás.",
      },
      {
        prompt: "¿Qué propuesta alternativa mencionan algunos profesores?",
        answer:
          "Enseñar a usarlos de forma responsable en lugar de prohibirlos por completo.",
      },
    ],
    notes: [
      "No niego que + subjuntivo (sean) — уступка; puede que + subjuntivo (tengan) — вероятность.",
      "Mientras no aprendamos — «пока мы не научимся»: mientras + subjuntivo о будущем условии.",
    ],
    revision: 1,
  },
  {
    id: "r-b1-5",
    level: "B1",
    type: "entrevista",
    title: "Una joven cocinera",
    text: "—Marta, con solo veinticinco años tienes tu propio restaurante. ¿Cómo empezó todo? —La verdad es que de pequeña odiaba cocinar. Cambió cuando mi abuela me enseñó a hacer su receta de croquetas; entonces me di cuenta de que la cocina era mi pasión. —¿Fue difícil abrir tu negocio? —Muchísimo. Trabajé como camarera durante años para ahorrar dinero y aprendí de todos los errores. —¿Qué consejo darías a quien quiera dedicarse a esto? —Que tenga paciencia y que no cocine para impresionar, sino para hacer feliz a la gente.",
    instructions:
      "Восстановите путь Марты: детство, поворотный момент, трудности и совет. Найдите глаголы в indefinido, описывающие её историю, и формы subjuntivo в её советах.",
    glossary: [
      { term: "darse cuenta de", translation: "осознавать, понимать" },
      { term: "ahorrar dinero", translation: "копить деньги" },
      { term: "dedicarse a", translation: "заниматься чем-либо" },
      {
        term: "hacer feliz a alguien",
        translation: "делать кого-то счастливым",
      },
    ],
    questions: [
      {
        prompt: "¿Qué hizo que Marta cambiara de opinión sobre la cocina?",
        answer:
          "Su abuela le enseñó a hacer una receta de croquetas y descubrió que era su pasión.",
      },
      {
        prompt: "¿Cómo consiguió el dinero para abrir el restaurante?",
        answer: "Trabajó como camarera durante años para ahorrar.",
      },
      {
        prompt: "¿Qué consejo da a los futuros cocineros?",
        answer:
          "Que tengan paciencia y que cocinen para hacer feliz a la gente, no para impresionar.",
      },
    ],
    notes: [
      "После darías un consejo — «que + subjuntivo» (que tenga, que no cocine).",
      "No… sino — «не…, а…» после отрицания.",
    ],
    revision: 1,
  },
  {
    id: "r-b1-6",
    level: "B1",
    type: "blog de viajes",
    title: "Un fin de semana en Granada",
    text: "Si estáis pensando en visitar el sur de España, no dejéis de pasar unos días en Granada. Nada más llegar, subimos al barrio del Albaicín, desde donde se ve la Alhambra al atardecer; fue uno de los momentos más bonitos del viaje. Al día siguiente, visitamos el palacio por dentro, así que os recomiendo comprar las entradas por Internet, porque se agotan enseguida. Otra cosa que nos encantó fue que, en muchos bares, te ponen una tapa gratis con cada bebida. Cuando volvamos, nos gustaría quedarnos más tiempo para conocer también la sierra.",
    instructions:
      "Составьте маршрут выходных по тексту. Найдите совет автора (recomiendo…), императивы и объясните формы. Определите, где используется subjuntivo и почему.",
    glossary: [
      { term: "nada más llegar", translation: "как только приехали" },
      { term: "al atardecer", translation: "на закате" },
      { term: "agotarse", translation: "заканчиваться, распродаваться" },
      { term: "una tapa", translation: "закуска к напитку" },
    ],
    questions: [
      {
        prompt: "¿Qué se puede ver desde el Albaicín?",
        answer: "La Alhambra, sobre todo bonita al atardecer.",
      },
      {
        prompt: "¿Por qué recomienda comprar las entradas por Internet?",
        answer: "Porque se agotan enseguida.",
      },
      {
        prompt: "¿Qué costumbre de los bares le gustó al autor?",
        answer: "Que ponen una tapa gratis con cada bebida.",
      },
    ],
    notes: [
      "No dejéis de + infinitivo — «обязательно сделайте»; отрицательный императив vosotros.",
      "Cuando volvamos — cuando + subjuntivo о будущем действии.",
    ],
    revision: 1,
  },
  {
    id: "r-b1-7",
    level: "B1",
    type: "noticia",
    title: "Voluntarios limpian la playa",
    text: "El pasado domingo, más de doscientas personas participaron en una jornada de limpieza en la playa de la Malvarrosa, en Valencia. En apenas tres horas, los voluntarios recogieron más de una tonelada de basura, sobre todo plásticos y colillas de cigarro. La actividad, organizada por una asociación local, buscaba concienciar a la población sobre el problema de los residuos en el mar. «Si cada uno recogiera lo suyo, no haría falta organizar esto», explicó una de las participantes. La asociación ya ha anunciado que repetirá la iniciativa el próximo mes.",
    instructions:
      "Выделите факты новости (кто, где, когда, сколько) и цель акции. Найдите условное предложение и объясните формы si + imperfecto de subjuntivo → condicional.",
    glossary: [
      {
        term: "una jornada de limpieza",
        translation: "день уборки, субботник",
      },
      { term: "recoger", translation: "собирать" },
      { term: "concienciar", translation: "повышать осознанность" },
      { term: "los residuos", translation: "отходы, мусор" },
    ],
    questions: [
      {
        prompt: "¿Cuánta basura recogieron los voluntarios?",
        answer: "Más de una tonelada en unas tres horas.",
      },
      {
        prompt: "¿Cuál era el objetivo de la jornada?",
        answer:
          "Concienciar a la población sobre el problema de los residuos en el mar.",
      },
      {
        prompt: "¿Qué dijo una de las participantes?",
        answer:
          "Que si cada uno recogiera su basura, no haría falta organizar estas jornadas.",
      },
    ],
    notes: [
      "Si cada uno recogiera…, no haría falta… — гипотетическое условие второго типа.",
      "Lo suyo = su propia basura; притяжательное местоимение со статьёй lo.",
    ],
    revision: 1,
  },
  {
    id: "r-b1-8",
    level: "B1",
    type: "correo formal",
    title: "Una reclamación",
    text: "Estimados señores: Me dirijo a ustedes para presentar una reclamación sobre un pedido que realicé el pasado 3 de marzo. Aunque en su página web indicaban que el producto llegaría en cuarenta y ocho horas, todavía no lo he recibido después de dos semanas. He intentado contactar por teléfono varias veces, pero nadie me ha respondido. Les ruego que me informen cuanto antes sobre el estado de mi pedido y que, en caso de no poder entregarlo, me devuelvan el dinero. A la espera de su respuesta, reciban un cordial saludo.",
    instructions:
      "Определите проблему, что уже пытался сделать клиент и его два требования. Обратите внимание на формулы вежливости и формы subjuntivo после les ruego que.",
    glossary: [
      { term: "dirigirse a alguien", translation: "обращаться к кому-либо" },
      { term: "una reclamación", translation: "жалоба, претензия" },
      { term: "rogar", translation: "просить (вежливо)" },
      { term: "cuanto antes", translation: "как можно скорее" },
    ],
    questions: [
      {
        prompt: "¿Cuál es el motivo de la reclamación?",
        answer:
          "Un pedido que no ha llegado dos semanas después, pese a prometer la entrega en 48 horas.",
      },
      {
        prompt: "¿Qué había intentado hacer el cliente antes de escribir?",
        answer: "Contactar por teléfono varias veces, sin obtener respuesta.",
      },
      {
        prompt: "¿Qué dos cosas pide en la carta?",
        answer:
          "Que le informen del estado del pedido y que le devuelvan el dinero si no pueden entregarlo.",
      },
    ],
    notes: [
      "Les ruego que + subjuntivo (informen, devuelvan) — вежливая просьба.",
      "Estimados señores / reciban un cordial saludo — стандартные формулы делового письма.",
    ],
    revision: 1,
  },
  {
    id: "r-b1-9",
    level: "B1",
    type: "texto divulgativo",
    title: "Por qué es importante dormir",
    text: "Muchas personas creen que dormir es una pérdida de tiempo, pero los científicos no están de acuerdo. Mientras dormimos, el cerebro ordena la información del día y fija lo que hemos aprendido. Por eso, quien duerme poco antes de un examen suele rendir peor que quien ha descansado bien. Además, la falta de sueño afecta al humor y, a largo plazo, puede debilitar las defensas del cuerpo. Los expertos recomiendan dormir entre siete y ocho horas y evitar las pantallas justo antes de acostarse.",
    instructions:
      "Найдите функции сна по тексту и последствия его нехватки. Обратите внимание на конструкцию quien + глагол и сравнительную rendir peor que.",
    glossary: [
      { term: "una pérdida de tiempo", translation: "пустая трата времени" },
      { term: "fijar", translation: "закреплять" },
      { term: "rendir", translation: "показывать результат, справляться" },
      { term: "a largo plazo", translation: "в долгосрочной перспективе" },
    ],
    questions: [
      {
        prompt: "¿Qué hace el cerebro mientras dormimos?",
        answer: "Ordena la información del día y fija lo que hemos aprendido.",
      },
      {
        prompt: "¿Cómo afecta al examen dormir poco?",
        answer: "Quien duerme poco suele rendir peor que quien ha descansado.",
      },
      {
        prompt: "¿Qué recomiendan los expertos?",
        answer:
          "Dormir entre siete y ocho horas y evitar las pantallas antes de acostarse.",
      },
    ],
    notes: [
      "Quien duerme poco = la persona que duerme poco; quien обобщает субъект.",
      "Rendir peor que — неправильная сравнительная степень (peor вместо más mal).",
    ],
    revision: 1,
  },
  {
    id: "r-b1-10",
    level: "B1",
    type: "reseña",
    title: "Una película que sorprende",
    text: "Fui al cine sin muchas expectativas, pero salí encantado. La película cuenta la historia de un hombre que, tras perder su empleo, decide recorrer el país en bicicleta. Lo que podría haber sido una historia triste se convierte en una comedia llena de ternura. Los actores están muy bien, aunque, en mi opinión, la primera parte es algo lenta. A pesar de ese pequeño defecto, la recomiendo a cualquiera que busque una historia sencilla pero emocionante. Es de esas películas que te dejan con una sonrisa.",
    instructions:
      "Отделите сюжет от оценки автора. Найдите один плюс и один минус фильма. Обратите внимание на a cualquiera que + subjuntivo и относительные придаточные.",
    glossary: [
      { term: "sin muchas expectativas", translation: "без больших ожиданий" },
      { term: "recorrer", translation: "объезжать, проходить (местность)" },
      { term: "la ternura", translation: "нежность" },
      { term: "a pesar de", translation: "несмотря на" },
    ],
    questions: [
      {
        prompt: "¿De qué trata la película?",
        answer:
          "De un hombre que, tras perder su trabajo, recorre el país en bicicleta.",
      },
      {
        prompt: "¿Qué defecto menciona el autor?",
        answer: "Que la primera parte es algo lenta.",
      },
      {
        prompt: "¿A quién recomienda la película?",
        answer:
          "A cualquiera que busque una historia sencilla pero emocionante.",
      },
    ],
    notes: [
      "A cualquiera que busque — subjuntivo после неопределённого antecedente.",
      "Lo que podría haber sido — «то, что могло бы быть»; составная форма condicional.",
    ],
    revision: 1,
  },
  {
    id: "r-b1-11",
    level: "B1",
    type: "biografía",
    title: "Frida Kahlo",
    text: "Frida Kahlo nació en México en 1907 y hoy es una de las pintoras más conocidas del mundo. De niña sufrió una grave enfermedad y, más tarde, un accidente de autobús que le causó dolores durante toda su vida. Mientras se recuperaba en la cama, empezó a pintar, sobre todo autorretratos en los que mostraba sus sentimientos. Aunque en vida no fue tan famosa como su marido, el también pintor Diego Rivera, con los años su obra se ha vuelto un símbolo. Sus cuadros, llenos de color y de dolor, siguen emocionando a millones de personas.",
    instructions:
      "Составьте краткую хронологию жизни Фриды. Найдите глаголы в indefinido (события) и в imperfecto (обстоятельства). Объясните сравнение no tan… como.",
    glossary: [
      { term: "sufrir", translation: "страдать, переносить" },
      { term: "recuperarse", translation: "восстанавливаться" },
      { term: "un autorretrato", translation: "автопортрет" },
      { term: "la obra", translation: "творчество, произведение" },
    ],
    questions: [
      {
        prompt: "¿Qué le pasó a Frida y cómo empezó a pintar?",
        answer:
          "Tuvo un accidente y, mientras se recuperaba en la cama, empezó a pintar autorretratos.",
      },
      {
        prompt: "¿Quién era Diego Rivera?",
        answer: "Su marido, también pintor, más famoso que ella en vida.",
      },
      {
        prompt: "¿Qué representa hoy su obra?",
        answer:
          "Se ha convertido en un símbolo y sigue emocionando a millones de personas.",
      },
    ],
    notes: [
      "Empezó / nació (indefinido) — события; se recuperaba, mostraba (imperfecto) — фон.",
      "No tan famosa como — сравнение равенства в отрицании: «не такая известная, как».",
    ],
    revision: 1,
  },
  {
    id: "r-b1-12",
    level: "B1",
    type: "noticia",
    title: "La vuelta al pueblo",
    text: "Durante décadas, miles de personas dejaron los pueblos para buscar trabajo en las ciudades. Sin embargo, en los últimos años se observa una tendencia contraria: algunas familias jóvenes deciden mudarse al campo. Muchas de ellas pueden hacerlo gracias al teletrabajo, que les permite vivir lejos de la oficina. Los ayuntamientos de estos pueblos ofrecen casas baratas y ayudas para atraer a nuevos vecinos. Aunque no es fácil acostumbrarse al ritmo del campo, quienes lo han probado aseguran que han ganado en calidad de vida.",
    instructions:
      "Сравните прошлое и настоящий тренд. Найдите причину нового явления и меры властей. Обратите внимание на quienes lo han probado и на роль gracias a.",
    glossary: [
      { term: "una tendencia", translation: "тенденция" },
      { term: "el ayuntamiento", translation: "мэрия, муниципалитет" },
      { term: "las ayudas", translation: "субсидии, помощь" },
      { term: "acostumbrarse a", translation: "привыкать к" },
    ],
    questions: [
      {
        prompt: "¿Qué tendencia contraria se observa ahora?",
        answer:
          "Algunas familias jóvenes deciden mudarse de la ciudad al campo.",
      },
      {
        prompt: "¿Qué hace posible este cambio?",
        answer: "El teletrabajo, que permite vivir lejos de la oficina.",
      },
      {
        prompt: "¿Qué ofrecen los ayuntamientos?",
        answer: "Casas baratas y ayudas para atraer a nuevos vecinos.",
      },
    ],
    notes: [
      "Quienes lo han probado = las personas que lo han probado.",
      "Gracias a вводит благоприятную причину, в отличие от por culpa de.",
    ],
    revision: 1,
  },
  {
    id: "r-b1-13",
    level: "B1",
    type: "artículo",
    title: "Hablar dos idiomas",
    text: "Crecer con dos idiomas era antes algo poco común, pero hoy millones de niños lo hacen con total naturalidad. Los estudios demuestran que ser bilingüe tiene ventajas que van más allá de poder hablar con más gente. Por ejemplo, el cerebro de las personas bilingües se acostumbra a cambiar de una lengua a otra, lo que mejora la capacidad de concentración. Además, aprender un idioma es también descubrir otra cultura y otra forma de ver el mundo. Por todo ello, muchos expertos aconsejan que los niños tengan contacto con otras lenguas desde pequeños.",
    instructions:
      "Найдите преимущества билингвизма и главный совет специалистов. Определите функцию lo que и объясните subjuntivo после aconsejan que.",
    glossary: [
      { term: "ser bilingüe", translation: "быть двуязычным" },
      { term: "ir más allá de", translation: "выходить за пределы" },
      {
        term: "la capacidad de concentración",
        translation: "способность концентрироваться",
      },
      { term: "desde pequeños", translation: "с детства" },
    ],
    questions: [
      {
        prompt: "¿Qué ventaja mental menciona el texto?",
        answer:
          "El cerebro se acostumbra a cambiar de lengua, lo que mejora la concentración.",
      },
      {
        prompt: "¿Aprender un idioma solo sirve para comunicarse?",
        answer:
          "No; también es descubrir otra cultura y otra forma de ver el mundo.",
      },
      {
        prompt: "¿Qué aconsejan los expertos?",
        answer:
          "Que los niños tengan contacto con otras lenguas desde pequeños.",
      },
    ],
    notes: [
      "Lo que mejora la concentración — относительное придаточное, отсылающее к целой идее.",
      "Aconsejan que + subjuntivo (tengan).",
    ],
    revision: 1,
  },
  {
    id: "r-b1-14",
    level: "B1",
    type: "texto",
    title: "Jóvenes que no quieren conducir",
    text: "Hace unas décadas, sacarse el carné de conducir era casi un rito para cualquier joven. Hoy, en cambio, muchos adolescentes no tienen prisa por hacerlo. Algunos dicen que el transporte público y las aplicaciones para compartir coche cubren sus necesidades. Otros reconocen que conducir se ha vuelto muy caro entre el carné, el seguro y la gasolina. También hay quien prefiere no tener coche por razones ecológicas. Sea cual sea el motivo, la relación de los jóvenes con el automóvil está cambiando.",
    instructions:
      "Соберите причины, по которым молодёжь откладывает получение прав. Обратите внимание на hay quien + глагол и на уступительную формулу sea cual sea.",
    glossary: [
      { term: "sacarse el carné", translation: "получить водительские права" },
      { term: "tener prisa por", translation: "спешить сделать" },
      { term: "compartir coche", translation: "совместные поездки на авто" },
      { term: "sea cual sea", translation: "каким бы ни был" },
    ],
    questions: [
      {
        prompt: "¿Qué era antes sacarse el carné para los jóvenes?",
        answer: "Casi un rito que casi todos querían cumplir.",
      },
      {
        prompt: "¿Qué dos razones económicas o prácticas se mencionan?",
        answer:
          "El transporte público cubre sus necesidades y conducir se ha vuelto muy caro.",
      },
      {
        prompt: "¿Por qué algunos rechazan el coche además del dinero?",
        answer: "Por razones ecológicas.",
      },
    ],
    notes: [
      "Hay quien prefiere = hay personas que prefieren.",
      "Sea cual sea el motivo — уступительная конструкция с повтором subjuntivo.",
    ],
    revision: 1,
  },
  {
    id: "r-b1-15",
    level: "B1",
    type: "relato",
    title: "Un pequeño malentendido",
    text: "Aquella mañana yo tenía mucha prisa porque llegaba tarde a una entrevista de trabajo. Al salir del metro, un señor me paró y empezó a hablarme muy serio en un idioma que no entendía. Pensé que quería pedirme dinero, así que le dije que no tenía y seguí caminando. Él insistió y, entonces, señaló mi espalda: llevaba pegada una hoja de periódico. Me puse rojo de vergüenza y le di las gracias mil veces. Al final llegué a la entrevista con una buena historia que contar.",
    instructions:
      "Восстановите последовательность событий. Разделите imperfecto (обстоятельства: tenía prisa, no entendía) и indefinido (действия: paró, señaló). Найдите оборот al + infinitivo.",
    glossary: [
      { term: "tener prisa", translation: "спешить" },
      { term: "insistir", translation: "настаивать" },
      { term: "señalar", translation: "показывать, указывать" },
      { term: "ponerse rojo de vergüenza", translation: "покраснеть от стыда" },
    ],
    questions: [
      {
        prompt: "¿Por qué el narrador tenía prisa?",
        answer: "Porque llegaba tarde a una entrevista de trabajo.",
      },
      {
        prompt: "¿Qué pensó al principio que quería el señor?",
        answer: "Pensó que quería pedirle dinero.",
      },
      {
        prompt: "¿Qué le pasaba en realidad?",
        answer: "Llevaba una hoja de periódico pegada en la espalda.",
      },
    ],
    notes: [
      "Al salir del metro — al + infinitivo передаёт «когда/как только вышел».",
      "Tenía / llegaba / no entendía (imperfecto) — фон; paró, señaló, di (indefinido) — события.",
    ],
    revision: 1,
  },
] satisfies ReadingContent[];
