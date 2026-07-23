import type { ReadingContent } from "../../types";

export const a1Readings = [
  {
    id: "r-a1-1",
    level: "A1",
    type: "texto",
    title: "Mi rutina diaria",
    text: "Me llamo Ana. Todos los días me levanto a las siete. Desayuno café con tostadas y después voy al trabajo en autobús. Trabajo en una oficina pequeña hasta las cinco de la tarde. Por la noche, ceno con mi familia y veo la televisión un poco. Los fines de semana me gusta caminar por el parque con mi perro.",
    instructions:
      "Сначала прочитайте текст без словаря и найдите время подъёма, способ добраться до работы и два вечерних действия.",
    glossary: [
      { term: "me levanto", translation: "я встаю" },
      { term: "tostadas", translation: "тосты" },
      { term: "hasta", translation: "до" },
      { term: "los fines de semana", translation: "по выходным" },
    ],
    questions: [
      { prompt: "¿A qué hora se levanta Ana?", answer: "A las siete." },
      { prompt: "¿Cómo va al trabajo?", answer: "Va en autobús." },
      { prompt: "¿Dónde trabaja?", answer: "En una oficina pequeña." },
      {
        prompt: "¿Qué hace los fines de semana?",
        answer: "Camina por el parque con su perro.",
      },
    ],
    notes: [
      "Todos los días и los fines de semana — маркеры регулярных действий в presente.",
    ],
    revision: 1,
  },
  {
    id: "r-a1-2",
    level: "A1",
    type: "texto",
    title: "Mi familia",
    text: "Tengo una familia grande. Mi padre se llama Carlos y es profesor. Mi madre se llama Elena y trabaja en un hospital. Tengo dos hermanos: Pablo y Lucía. Pablo tiene quince años y Lucía tiene diez. Vivimos en una casa cerca del centro de la ciudad. Los domingos comemos todos juntos en casa de mis abuelos.",
    instructions:
      "Прочитайте и составьте простую схему семьи: родители, дети, возраст детей и воскресная традиция.",
    glossary: [
      { term: "se llama", translation: "его / её зовут" },
      { term: "hermanos", translation: "братья и сёстры" },
      { term: "cerca de", translation: "рядом с" },
      { term: "abuelos", translation: "бабушка и дедушка" },
    ],
    questions: [
      { prompt: "¿Cómo se llama el padre?", answer: "Se llama Carlos." },
      { prompt: "¿Dónde trabaja Elena?", answer: "Trabaja en un hospital." },
      { prompt: "¿Cuántos años tiene Lucía?", answer: "Tiene diez años." },
      {
        prompt: "¿Dónde come la familia los domingos?",
        answer: "En casa de los abuelos.",
      },
    ],
    notes: [
      "Hermanos во множественном числе может обозначать братьев и сестёр вместе.",
    ],
    revision: 1,
  },
  {
    id: "r-a1-3",
    level: "A1",
    type: "noticia",
    title: "El mercado del pueblo",
    text: "Cada sábado hay un mercado en la plaza del pueblo. Los agricultores venden frutas, verduras y queso fresco. También hay música y mucha gente. Muchas familias van a comprar pan y flores. El mercado empieza a las nueve de la mañana y termina a las dos de la tarde.",
    instructions:
      "Найдите в тексте день, место, часы работы рынка и четыре товара, которые там продают.",
    glossary: [
      { term: "cada sábado", translation: "каждую субботу" },
      { term: "agricultores", translation: "фермеры" },
      { term: "queso fresco", translation: "свежий сыр" },
      { term: "empieza / termina", translation: "начинается / заканчивается" },
    ],
    questions: [
      { prompt: "¿Dónde está el mercado?", answer: "En la plaza del pueblo." },
      {
        prompt: "¿Qué venden los agricultores?",
        answer: "Frutas, verduras y queso fresco.",
      },
      { prompt: "¿A qué hora empieza?", answer: "A las nueve de la mañana." },
      { prompt: "¿A qué hora termina?", answer: "A las dos de la tarde." },
    ],
    notes: [
      "Pueblo может означать небольшой город или деревню; здесь речь о местной рыночной площади.",
    ],
    revision: 1,
  },
  {
    id: "r-a1-4",
    level: "A1",
    type: "texto",
    title: "En el supermercado",
    text: "Hoy voy al supermercado con mi madre. Necesitamos comprar leche, pan, huevos y fruta. Mi madre coge un carro grande. En la sección de verduras compramos tomates y lechuga. También queremos queso y jamón. Al final pagamos en la caja con tarjeta. Las bolsas son pesadas, pero volvemos a casa contentos.",
    instructions:
      "Прочитайте и составьте список покупок: найдите минимум шесть продуктов и способ оплаты.",
    glossary: [
      { term: "carro", translation: "тележка" },
      { term: "sección de verduras", translation: "овощной отдел" },
      { term: "caja", translation: "касса" },
      { term: "bolsas", translation: "пакеты, сумки" },
    ],
    questions: [
      {
        prompt: "¿Con quién va al supermercado?",
        answer: "Con su madre.",
      },
      {
        prompt: "¿Qué compran en la sección de verduras?",
        answer: "Tomates y lechuga.",
      },
      { prompt: "¿Cómo pagan?", answer: "Con tarjeta, en la caja." },
      {
        prompt: "¿Cómo vuelven a casa?",
        answer: "Contentos, aunque las bolsas son pesadas.",
      },
    ],
    notes: [
      "Necesitamos и queremos вводят список покупок; оба глагола сочетаются с существительным напрямую.",
    ],
    revision: 1,
  },
  {
    id: "r-a1-5",
    level: "A1",
    type: "texto",
    title: "El tiempo y los planes",
    text: "Hoy hace sol y no hace frío. Es un buen día para salir. Por la mañana voy a pasear por el parque. Después quiero comer en una terraza con mis amigos. Por la tarde, si hace calor, vamos a la piscina. Mañana, en cambio, va a llover, así que nos quedamos en casa y vemos una película.",
    instructions:
      "Определите погоду сегодня и завтра и выпишите планы для каждого дня.",
    glossary: [
      { term: "hace sol", translation: "солнечно" },
      { term: "terraza", translation: "летняя веранда, терраса кафе" },
      { term: "si hace calor", translation: "если будет жарко" },
      { term: "va a llover", translation: "будет дождь" },
    ],
    questions: [
      { prompt: "¿Qué tiempo hace hoy?", answer: "Hace sol y no hace frío." },
      {
        prompt: "¿Qué quiere hacer con sus amigos?",
        answer: "Comer en una terraza.",
      },
      {
        prompt: "¿Qué hacen si hace calor por la tarde?",
        answer: "Van a la piscina.",
      },
      {
        prompt: "¿Por qué se quedan en casa mañana?",
        answer: "Porque va a llover.",
      },
    ],
    notes: [
      "Погода часто описывается через hacer: hace sol, hace frío, hace calor.",
      "Ir a + инфинитив выражает ближайшие планы: voy a pasear, va a llover.",
    ],
    revision: 1,
  },
  {
    id: "r-a1-6",
    level: "A1",
    type: "texto",
    title: "Una visita al médico",
    text: "Marta no se encuentra bien. Le duele la cabeza y tiene un poco de fiebre. Por la mañana llama al centro de salud y pide una cita. El médico la examina y dice que solo es un resfriado. Marta tiene que descansar, beber mucha agua y tomar una pastilla por la noche. En dos o tres días va a estar mejor.",
    instructions: "Найдите симптомы Марты и три совета врача.",
    glossary: [
      { term: "no se encuentra bien", translation: "плохо себя чувствует" },
      { term: "le duele la cabeza", translation: "у неё болит голова" },
      { term: "pedir una cita", translation: "записаться на приём" },
      { term: "resfriado", translation: "простуда" },
    ],
    questions: [
      { prompt: "¿Qué le duele a Marta?", answer: "Le duele la cabeza." },
      {
        prompt: "¿Qué dice el médico que tiene?",
        answer: "Solo un resfriado.",
      },
      {
        prompt: "¿Qué tiene que hacer Marta?",
        answer: "Descansar, beber mucha agua y tomar una pastilla.",
      },
      {
        prompt: "¿Cuándo va a estar mejor?",
        answer: "En dos o tres días.",
      },
    ],
    notes: [
      "Doler работает как gustar: le duele la cabeza, le duelen los pies.",
      "Tener que + инфинитив выражает необходимость: tiene que descansar.",
    ],
    revision: 1,
  },
  {
    id: "r-a1-7",
    level: "A1",
    type: "texto",
    title: "El cumpleaños de Sofía",
    text: "El sábado es el cumpleaños de Sofía. Cumple ocho años. Su madre prepara una tarta de chocolate y su padre compra globos de colores. Vienen sus amigos y sus abuelos. Todos cantan y comen tarta. Sofía abre sus regalos: recibe un libro, una muñeca y una bicicleta nueva. Es un día muy feliz para toda la familia.",
    instructions:
      "Отметьте, сколько лет исполняется Софии, кто приходит и какие подарки она получает.",
    glossary: [
      { term: "cumple ocho años", translation: "ей исполняется восемь лет" },
      { term: "tarta", translation: "торт" },
      { term: "globos", translation: "воздушные шары" },
      { term: "regalos", translation: "подарки" },
    ],
    questions: [
      { prompt: "¿Cuántos años cumple Sofía?", answer: "Cumple ocho años." },
      {
        prompt: "¿Qué prepara su madre?",
        answer: "Una tarta de chocolate.",
      },
      {
        prompt: "¿Quiénes vienen a la fiesta?",
        answer: "Sus amigos y sus abuelos.",
      },
      {
        prompt: "¿Qué regalos recibe?",
        answer: "Un libro, una muñeca y una bicicleta nueva.",
      },
    ],
    notes: [
      "Cumplir años — устойчивое выражение для возраста в день рождения.",
    ],
    revision: 1,
  },
  {
    id: "r-a1-8",
    level: "A1",
    type: "texto",
    title: "Cómo llego al centro",
    text: "Vivo lejos del centro, así que voy en metro. La estación está cerca de mi casa, a cinco minutos a pie. Cojo la línea azul y bajo en la tercera parada. Después camino un poco hasta la plaza. Si llueve, prefiero el autobús porque tiene parada justo delante de mi trabajo. El metro es más rápido, pero el autobús es más cómodo.",
    instructions:
      "Проследите маршрут до центра: транспорт, где садится, где выходит, и почему иногда выбирает автобус.",
    glossary: [
      { term: "lejos de", translation: "далеко от" },
      { term: "a cinco minutos a pie", translation: "в пяти минутах пешком" },
      {
        term: "bajo en la tercera parada",
        translation: "выхожу на третьей остановке",
      },
      { term: "justo delante de", translation: "прямо перед" },
    ],
    questions: [
      { prompt: "¿Cómo va normalmente al centro?", answer: "Va en metro." },
      {
        prompt: "¿Dónde baja del metro?",
        answer: "En la tercera parada.",
      },
      {
        prompt: "¿Cuándo prefiere el autobús?",
        answer: "Cuando llueve.",
      },
      {
        prompt: "¿Por qué le gusta el autobús?",
        answer: "Porque para justo delante de su trabajo y es más cómodo.",
      },
    ],
    notes: [
      "Coger (взять транспорт) в Испании нейтрально: cojo el metro, cojo el autobús.",
      "Сравнение через más ... que: el metro es más rápido que el autobús.",
    ],
    revision: 1,
  },
] satisfies ReadingContent[];
