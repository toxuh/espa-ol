import type { ConjugationCard } from "../../types";

const a2ConjugationsBase = [
  {
    id: "cj-a2-1",
    level: "A2",
    verb: "hablar",
    verbMeaning: "говорить",
    tense: "preterito",
    tenseLabel: "Pretérito indefinido (прошедшее законченное)",
    forms: ["hablé", "hablaste", "habló", "hablamos", "hablasteis", "hablaron"],
    example: {
      es: "Ayer hablé con mi jefe sobre el proyecto.",
      ru: "Вчера я поговорил с начальником о проекте.",
    },
    revision: 1,
  },
  {
    id: "cj-a2-2",
    level: "A2",
    verb: "comer",
    verbMeaning: "есть, кушать",
    tense: "imperfecto",
    tenseLabel: "Imperfecto (прошедшее привычное)",
    forms: ["comía", "comías", "comía", "comíamos", "comíais", "comían"],
    example: {
      es: "De niño, comía mucho chocolate.",
      ru: "В детстве я ел много шоколада.",
    },
    revision: 1,
  },
  {
    id: "cj-a2-3",
    level: "A2",
    verb: "ir",
    verbMeaning: "идти, ехать",
    tense: "preterito",
    tenseLabel: "Pretérito indefinido (прошедшее законченное)",
    forms: ["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"],
    example: {
      es: "El año pasado fuimos a Portugal.",
      ru: "В прошлом году мы ездили в Португалию.",
    },
    revision: 1,
  },
  {
    id: "cj-a2-4",
    level: "A2",
    verb: "tener",
    verbMeaning: "иметь",
    tense: "preterito",
    tenseLabel: "Pretérito indefinido (прошедшее законченное)",
    forms: ["tuve", "tuviste", "tuvo", "tuvimos", "tuvisteis", "tuvieron"],
    example: {
      es: "Ella tuvo un problema con el coche.",
      ru: "У неё возникла проблема с машиной.",
    },
    revision: 1,
  },
  {
    id: "cj-a2-5",
    level: "A2",
    verb: "vivir",
    verbMeaning: "жить",
    tense: "futuro",
    tenseLabel: "Futuro simple (простое будущее)",
    forms: ["viviré", "vivirás", "vivirá", "viviremos", "viviréis", "vivirán"],
    example: {
      es: "En el futuro viviremos en otra ciudad.",
      ru: "В будущем мы будем жить в другом городе.",
    },
    revision: 1,
  },
  {
    id: "cj-a2-6",
    level: "A2",
    verb: "ser",
    verbMeaning: "быть",
    tense: "imperfecto",
    tenseLabel: "Imperfecto (прошедшее привычное)",
    forms: ["era", "eras", "era", "éramos", "erais", "eran"],
    example: {
      es: "Cuando era joven, era muy tímido.",
      ru: "Когда я был молодым, я был очень застенчивым.",
    },
    revision: 1,
  },
] satisfies ConjugationCard[];

const a2ConjugationDetails: Record<
  string,
  Pick<
    ConjugationCard,
    "formationRule" | "irregularity" | "markers" | "examples" | "commonMistakes"
  >
> = {
  "cj-a2-1": {
    formationRule:
      "Уберите -ar и добавьте окончания indefinido: -é, -aste, -ó, -amos, -asteis, -aron.",
    irregularity:
      "Правильный глагол; основа habl- сохраняется. В формах yo и él/ella обязательны ударения.",
    markers: ["ayer", "anoche", "la semana pasada"],
    examples: [
      {
        es: "Hablamos por teléfono anoche.",
        ru: "Вчера вечером мы поговорили по телефону.",
      },
      { es: "¿Hablaste con Marta ayer?", ru: "Ты вчера поговорил с Мартой?" },
    ],
    commonMistakes: [
      "Не путайте hablé с hable: графическое ударение отличает форму indefinido.",
    ],
  },
  "cj-a2-2": {
    formationRule:
      "Уберите -er и добавьте окончания imperfecto: -ía, -ías, -ía, -íamos, -íais, -ían.",
    irregularity:
      "Правильный глагол; ударение на í сохраняется во всех шести формах.",
    markers: ["de niño", "antes", "todos los domingos"],
    examples: [
      {
        es: "Antes comíamos juntos cada día.",
        ru: "Раньше мы каждый день ели вместе.",
      },
      {
        es: "Mi abuelo comía muy despacio.",
        ru: "Мой дедушка ел очень медленно.",
      },
    ],
    commonMistakes: [
      "Для привычки без границы нужен comía, а comió обозначает завершённый приём пищи.",
    ],
  },
  "cj-a2-3": {
    formationRule:
      "Формы ir в indefinido совпадают с формами ser и запоминаются целиком.",
    irregularity:
      "fui, fuiste, fue, fuimos, fuisteis, fueron; значение ir или ser определяется контекстом.",
    markers: ["ayer", "el año pasado", "hace dos días"],
    examples: [
      { es: "Ayer fui al médico.", ru: "Вчера я ходил к врачу." },
      { es: "El viaje fue fantástico.", ru: "Путешествие было замечательным." },
    ],
    commonMistakes: [
      "Не добавляйте ударение к fue или fui; эти односложные формы пишутся без него.",
    ],
  },
  "cj-a2-4": {
    formationRule:
      "Используйте неправильную основу tuv- и окончания -e, -iste, -o, -imos, -isteis, -ieron.",
    irregularity:
      "Формы tuve и tuvo пишутся без графического ударения, как другие глаголы с неправильной основой indefinido.",
    markers: ["ayer", "de repente", "el lunes pasado"],
    examples: [
      { es: "Tuvimos que esperar una hora.", ru: "Нам пришлось ждать час." },
      {
        es: "¿Tuviste tiempo para llamar?",
        ru: "У тебя было время позвонить?",
      },
    ],
    commonMistakes: [
      "Не образуйте регулярное tení или неправильное tuvó; правильно tuve и tuvo.",
    ],
  },
  "cj-a2-5": {
    formationRule:
      "К целому инфинитиву vivir добавьте окончания futuro: -é, -ás, -á, -emos, -éis, -án.",
    irregularity:
      "Правильный глагол; инфинитив сохраняется полностью, включая -ir.",
    markers: ["mañana", "el próximo año", "en el futuro"],
    examples: [
      {
        es: "Viviré cerca del mar algún día.",
        ru: "Когда-нибудь я буду жить у моря.",
      },
      {
        es: "¿Dónde viviréis el próximo año?",
        ru: "Где вы будете жить в следующем году?",
      },
    ],
    commonMistakes: [
      "Не отбрасывайте -ir перед окончанием: viviré, а не vivré.",
    ],
  },
  "cj-a2-6": {
    formationRule:
      "Ser — один из трёх неправильных глаголов imperfecto; все формы нужно запомнить.",
    irregularity:
      "era, eras, era, éramos, erais, eran; только форма éramos имеет графическое ударение.",
    markers: ["cuando era niño", "antes", "en aquella época"],
    examples: [
      { es: "La casa era muy antigua.", ru: "Дом был очень старым." },
      {
        es: "Éramos vecinos cuando éramos niños.",
        ru: "Мы были соседями, когда были детьми.",
      },
    ],
    commonMistakes: [
      "Не используйте fue для фонового описания без границы: la casa era antigua.",
    ],
  },
};

export const a2Conjugations = a2ConjugationsBase.map((card) => ({
  ...card,
  ...a2ConjugationDetails[card.id],
})) satisfies ConjugationCard[];
