import type { ReadingContent } from "../../types";

export const b2Readings = [
  {
    id: "r-b2-1",
    level: "B2",
    type: "noticia",
    title: "El cambio climático y las ciudades",
    text: "Las ciudades de todo el mundo se enfrentan a retos cada vez más urgentes derivados del cambio climático: olas de calor más frecuentes, inundaciones repentinas y una calidad del aire cada vez peor. Ante esta situación, numerosos ayuntamientos han comenzado a rediseñar sus espacios públicos, incorporando más zonas verdes y sistemas de transporte menos contaminantes. Algunos especialistas sostienen que, si las autoridades no actúan con rapidez, los costes de adaptación serán mucho mayores en las próximas décadas. Otros, en cambio, defienden que ya se están produciendo avances significativos, aunque de forma desigual entre países ricos y pobres.",
    instructions:
      "Выпишите три climate-проблемы городов и две меры мэрий. Затем разделите текст на две экспертные позиции и объясните, какое условие вводит si las autoridades no actúan.",
    glossary: [
      { term: "enfrentarse a", translation: "сталкиваться с чем-либо" },
      { term: "la ola de calor", translation: "волна жары" },
      { term: "la inundación repentina", translation: "внезапное наводнение" },
      {
        term: "el ayuntamiento",
        translation: "городская администрация, мэрия",
      },
      { term: "los costes de adaptación", translation: "затраты на адаптацию" },
      { term: "de forma desigual", translation: "неравномерно" },
    ],
    questions: [
      {
        prompt:
          "¿Qué tres consecuencias del cambio climático menciona el texto?",
        answer:
          "Olas de calor más frecuentes, inundaciones repentinas y una calidad del aire cada vez peor.",
      },
      {
        prompt: "¿Cómo están reaccionando muchos ayuntamientos?",
        answer:
          "Han comenzado a rediseñar sus espacios públicos, con más zonas verdes y transporte menos contaminante.",
      },
      {
        prompt: "¿Qué advierten algunos especialistas?",
        answer:
          "Que, si las autoridades no actúan con rapidez, los costes de adaptación serán mucho mayores en las próximas décadas.",
        explanation:
          "Реальное условие первого типа: si + presente de indicativo, главная часть в futuro.",
      },
      {
        prompt: "¿Qué matiz añade la segunda posición del texto?",
        answer:
          "Que ya se están produciendo avances significativos, aunque de forma desigual entre países ricos y pobres.",
      },
    ],
    notes: [
      "Ante esta situación вводит реакцию на описанную проблему, а en cambio противопоставляет вторую группу специалистов первой.",
      "Se están produciendo — пассивная конструкция с se в перифразе estar + gerundio: деятель не назван намеренно.",
    ],
    revision: 1,
  },
  {
    id: "r-b2-2",
    level: "B2",
    type: "texto",
    title: "Inteligencia artificial: ¿aliada o amenaza?",
    text: "La inteligencia artificial ha dejado de ser un concepto futurista para convertirse en una herramienta presente en casi todos los sectores: la medicina, la educación, la industria y el entretenimiento. Sus defensores destacan su capacidad para automatizar tareas repetitivas y analizar enormes cantidades de datos en segundos, lo cual libera tiempo para actividades más creativas. Sin embargo, también existen voces críticas que advierten sobre la pérdida de empleos, los sesgos algorítmicos y la falta de regulación adecuada. El debate, lejos de resolverse, parece intensificarse a medida que la tecnología avanza más rápido que las leyes que deberían controlarla.",
    instructions:
      "Составьте две колонки: аргументы сторонников и возражения критиков. Затем найдите dejar de + infinitivo, lo cual и a medida que и объясните их функцию в тексте.",
    glossary: [
      { term: "dejar de ser", translation: "перестать быть" },
      { term: "destacar", translation: "подчёркивать, выделять" },
      {
        term: "el sesgo algorítmico",
        translation: "алгоритмическая предвзятость",
      },
      {
        term: "la falta de regulación",
        translation: "отсутствие регулирования",
      },
      { term: "lejos de resolverse", translation: "вовсе не разрешаясь" },
      { term: "a medida que", translation: "по мере того как" },
    ],
    questions: [
      {
        prompt: "¿En qué sectores está ya presente la inteligencia artificial?",
        answer:
          "En la medicina, la educación, la industria y el entretenimiento.",
      },
      {
        prompt: "¿Qué dos capacidades destacan sus defensores?",
        answer:
          "Automatizar tareas repetitivas y analizar enormes cantidades de datos en segundos.",
      },
      {
        prompt: "¿Qué tres riesgos señalan las voces críticas?",
        answer:
          "La pérdida de empleos, los sesgos algorítmicos y la falta de regulación adecuada.",
      },
      {
        prompt: "¿Por qué se intensifica el debate según el texto?",
        answer:
          "Porque la tecnología avanza más rápido que las leyes que deberían controlarla.",
        explanation:
          "Deberían — condicional долженствования: закон должен был бы регулировать, но не успевает.",
      },
    ],
    notes: [
      "Lo cual отсылает ко всему предыдущему утверждению, а не к одному существительному; заменить его на que здесь нельзя.",
      "Lejos de + infinitivo означает «вовсе не», а не пространственную удалённость.",
    ],
    revision: 1,
  },
  {
    id: "r-b2-3",
    level: "B2",
    type: "noticia",
    title: "Turismo sostenible en auge",
    text: "Cada vez más viajeros buscan alternativas al turismo masivo, optando por experiencias que respeten el entorno natural y las comunidades locales. Este modelo, conocido como turismo sostenible, propone reducir el impacto ambiental de los desplazamientos, apoyar la economía local y fomentar un consumo más responsable durante el viaje. Algunas agencias ya ofrecen paquetes que incluyen alojamiento ecológico y actividades gestionadas directamente por habitantes de la zona. Aunque todavía representa una parte pequeña del mercado turístico global, muchos analistas coinciden en que esta tendencia seguirá creciendo en los próximos años.",
    instructions:
      "Сформулируйте определение turismo sostenible своими словами и найдите три его цели. Затем сравните наклонение в experiencias que respeten и в paquetes que incluyen.",
    glossary: [
      { term: "el turismo masivo", translation: "массовый туризм" },
      { term: "optar por", translation: "выбирать что-либо" },
      { term: "el entorno natural", translation: "природная среда" },
      { term: "el desplazamiento", translation: "поездка, перемещение" },
      { term: "el alojamiento", translation: "размещение, жильё" },
      { term: "coincidir en que", translation: "сходиться во мнении, что" },
    ],
    questions: [
      {
        prompt: "¿Qué buscan cada vez más viajeros?",
        answer:
          "Alternativas al turismo masivo: experiencias que respeten el entorno natural y las comunidades locales.",
      },
      {
        prompt: "¿Qué tres objetivos propone el turismo sostenible?",
        answer:
          "Reducir el impacto ambiental de los desplazamientos, apoyar la economía local y fomentar un consumo más responsable.",
      },
      {
        prompt: "¿Qué incluyen ya algunos paquetes de agencias?",
        answer:
          "Alojamiento ecológico y actividades gestionadas directamente por habitantes de la zona.",
      },
      {
        prompt: "¿Qué prevén los analistas pese al tamaño actual del sector?",
        answer:
          "Que esta tendencia seguirá creciendo en los próximos años, aunque todavía represente una parte pequeña del mercado.",
      },
    ],
    notes: [
      "Experiencias que respeten стоит в subjuntivo, потому что такие поездки ещё только ищут; paquetes que incluyen — indicativo, потому что эти предложения уже существуют.",
      "Aunque здесь вводит признанный факт с indicativo (representa), поэтому уступка касается реального размера рынка.",
    ],
    revision: 1,
  },
] satisfies ReadingContent[];
