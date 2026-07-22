# План улучшения UX

> **Для агентных исполнителей:** ОБЯЗАТЕЛЬНЫЙ САБ-СКИЛ — `superpowers:subagent-driven-development`
> (рекомендуется) или `superpowers:executing-plans`. Шаги оформлены чекбоксами (`- [ ]`)
> для отслеживания прогресса.

Обновлено: 22 июля 2026 года.

**Цель:** превратить дневное занятие из стены из ~50 карточек в короткую пошаговую сессию,
которую реально закончить за один подход и к которой хочется вернуться завтра.

**Архитектура:** вся новая логика — чистые функции в `src/domain/**` с vitest-тестами;
UI становится тонким слоем над ними. Дневной план получает версию `2` с явным разделением
на обязательное ядро и бонус, при этом старые планы в базе нормализуются в v1-поведение и
не ломаются. Практика перестаёт быть страницей с вкладками и становится
«сессией» — одна карточка на экран с сохраняемой позицией.

**Стек:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, shadcn/ui,
Prisma 7 + PostgreSQL 17, vitest. Новых зависимостей не добавляется.

## Назначение документа

Это handoff для отдельной сессии, посвящённой только пользовательскому опыту. Он идёт
**параллельно** с [CONTENT_EXPANSION_PLAN.md](CONTENT_EXPANSION_PLAN.md) и намеренно не
пересекается с ним по файлам:

| Ветка     | Владеет файлами                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------------------ |
| Контент   | `src/content/**`, `scripts/content-check.ts`, `prisma/seed.ts`, manifest                                     |
| UX (этот) | `src/app/**`, `src/components/**`, `src/hooks/**`, `src/lib/**`, `src/domain/**`, `src/server/daily-plan.ts` |

Единственная точка возможного пересечения — типизированный контракт контента
`src/content/types.ts`. Этот план его **не меняет**. Если контентной ветке понадобится новое
поле, оно добавляется там и просто не отображается до отдельной задачи здесь.

## Global Constraints

Требования ниже действуют для **каждой** задачи плана без повторного упоминания.

- Продуктовые инварианты из [PRODUCT.md](PRODUCT.md) не нарушаются. В частности:
  - первая попытка фиксируется на сервере и остаётся основой накопительной статистики;
  - после первого открытия дня состав заданий не меняется при перезагрузке;
  - смена уровня влияет только на будущие дни;
  - данные одного профиля не участвуют в статистике другого.
- Существующие записи `DailyPlan` в базе остаются валидными. Миграций схемы Prisma в этом
  плане нет ни одной; версия плана живёт внутри JSON-поля `plan`.
- Стабильные ID контента (292 записи) не меняются и не переименовываются.
- Пороги placement из `levelFromPlacementScore` не меняются.
- Весь пользовательский текст — на русском языке, испанские примеры — с `lang="es"`.
- Серверные вычисления остаются за `src/lib/db.ts` и `src/server/**`; компоненты ходят
  только через `profileFetch`.
- Каждая задача заканчивается зелёным `npm run verify`.
- Коммит на каждую завершённую задачу, сообщение в стиле репозитория (`feat:` / `fix:` /
  `refactor:`).
- Graphify-хуки не добавляются.

---

## Часть I. Фишки

Пятнадцать изменений, сгруппированных по причине, по которой они нужны.

### Ф1. Дневное ядро вместо дневной нормы

Сейчас генератор выдаёт 20 грамматических карточек, 10 слов, **все** доступные спряжения
(12–18 карточек × 6 полей = до 108 полей ввода), 3–6 упражнений теории, чтение, два ролика и
два перевода. Это ~50 карточек и ~140 полей. День засчитывается только если сделано всё.

Новая модель: **ядро** ≈ 19 шагов (~20–25 минут) и необязательный **бонус**.

| Блок               | Было    | Ядро | Бонус |
| ------------------ | ------- | ---: | ----: |
| Грамматика MCQ     | 10      |    3 |     3 |
| Грамматика fill    | 10      |    3 |     3 |
| Закрепление теории | 3–6     |    3 |     0 |
| Слова              | 10      |    6 |     4 |
| Спряжения          | 12–18   |    2 |     2 |
| Чтение             | 1       |    1 |     0 |
| Аудирование        | 2       |    0 |   1–2 |
| Перевод            | 2 (оба) |    1 |     1 |

День считается завершённым и обновляет серию по **ядру**. Бонус — чистый плюс.

Побочный эффект, который важнее самой цифры: сейчас `adaptivePick` при `pool.length < count`
откатывается на весь пул (`src/domain/learning.ts:84-85`), то есть антиповтор молча выключен
с третьего дня, а спряжения и аудирование вообще не ротируются. С новыми числами фильтр
последних попыток снова начинает работать без единой правки алгоритма.

### Ф2. Прохождение по одной карточке

Главная просьба. Практика перестаёт быть вкладками со стеной карточек и становится сессией:
одна карточка на экране, шапка `Шаг 7 из 19`, название блока, кнопки «Назад» / «Дальше».
Позиция хранится в URL (`/practice?step=grammar:a1-04`) и в `localStorage`, поэтому
перезагрузка, переход в теорию и возврат, закрытие вкладки — всё продолжается с того же места.

На десктопе работают клавиши: `1`–`9` выбирают вариант MCQ, `Enter` отправляет или переходит
дальше, `←`/`→` листают. Автоперехода после ответа нет намеренно: объяснение нужно прочитать,
переход всегда делает пользователь.

### Ф3. Отмена первой попытки

Тап по варианту MCQ сейчас — необратимая запись, которая уходит в статистику и в адаптивный
подбор. На телефоне промах пальцем портит тему навсегда.

После ответа 15 секунд доступна кнопка «Отменить». Отмена физически удаляет `DailyAttempt`
и разрешена только пока день не завершён. Инвариант «первая попытка неизменна» сохраняется:
неизменной остаётся _зафиксированная_ попытка, а окно отмены — часть самой фиксации.

### Ф4. Черновики ответов

Текст перевода RU→ES живёт в локальном стейте и теряется при любом уходе со страницы.
Все поля ввода (fill-in, слово, шесть форм спряжения, перевод) автосохраняются в
`localStorage` с ключом на профиль + день + задание и очищаются после успешной отправки.

### Ф5. Панель испанских символов

`á é í ó ú ü ñ ¿ ¡` вставляются в позицию курсора одним тапом. Рядом честная подпись:
«графическое ударение не влияет на проверку» — потому что `normalizeAnswer` его срезает
(`src/domain/answer-normalization.ts:9`), а пользователю об этом никто не говорил.

### Ф6. Экран итогов вместо пятой вкладки

`DayAnalysis` переезжает из вкладки в отдельный маршрут `/practice/summary`, куда сессия
приводит естественным финальным шагом. На него можно дать ссылку, он открывается из истории
и с главной.

### Ф7. «Повторить ошибки» прямо сейчас

Приложение знает, что именно ты завалил, и сейчас показывает это простым текстом. Появляется
кнопка, которая запускает мини-сессию из ошибочных карточек дня. Это тренировка без записи:
серверных попыток не создаётся, статистика не трогается — иначе первая попытка перестала бы
быть первой.

### Ф8. Честная пометка повтора

Банк контента на уровне маленький, и часть материала неизбежно повторяется. Приложение
перестаёт делать вид, что это новое: карточка, которую профиль уже видел, получает бейдж
«Повтор · 3-й раз». Не косметика, а корректный сигнал для оценки собственного прогресса.

### Ф9. Placement, который можно пройти честно

- Вариант «Не знаю» — чтобы не заставлять угадывать и не портить оценку уровня.
- Кнопка «Назад» к предыдущему вопросу.
- Экран результата: уровень, счёт, разбивка по блокам. Сейчас после последнего вопроса
  происходит немедленный `router.push("/practice")`, и пользователь **не узнаёт свой уровень**.

### Ф10. Озвучка

Испанский без произношения. `window.speechSynthesis` даёт TTS локально и бесплатно: кнопка
динамика у слова, у форм спряжения, у примеров и у текста чтения. При отсутствии поддержки
кнопка просто не рендерится.

### Ф11. Согласованная обратимость

Сейчас чтение отмечается необратимо, аудирование переключается туда-сюда, перевод
блокируется навсегда. Правило становится одно: любую **самоотметку** можно снять, любая
**проверяемая попытка** необратима (кроме окна отмены из Ф3).

### Ф12. Теория перестаёт дублировать практику

Одни и те же упражнения показываются и в `/practice`, и в `/theory`, и это приходится
объяснять алертом (`src/app/theory/page.tsx:176-189`). Генератор начинает выбирать
грамматику дня, **исключая** упражнения теории. Дубля нет, алерт и проп `sharedWithPractice`
удаляются.

### Ф13. Серия видна там, где ей пользуются

Индикатор серии в шапке скрыт на мобильном (`hidden sm:inline-flex`,
`src/components/app-header.tsx:80`), хотя телефон — основной сценарий.

### Ф14. Профиль не переключается случайным тапом

Клик по аватару делает `select(null)` без меню и подтверждения. Заменяется на меню с явным
пунктом «Сменить профиль» и видимым именем профиля на мобильном.

### Ф15. Два дефекта, которые не про UX, но чинятся здесь

- `--accent` в тёмной теме объявлен дважды в `src/app/globals.css`; второй, серый
  `oklch(0.269 0 0)`, перебивает тёплый и нарушает собственный контракт `UI_UX.md:19-23`.
- Дата дня в практике рендерится без `timeZone` (`src/app/practice/page.tsx:81`), а в истории
  — с `timeZone: "UTC"`. `localDate` хранится как UTC-полночь, поэтому при отрицательном
  смещении практика показывает вчерашнее число.

---

## Часть II. Файловая структура

### Создаётся

| Файл                                          | Ответственность                                                                  |
| --------------------------------------------- | -------------------------------------------------------------------------------- |
| `src/domain/day-load.ts`                      | Числа дневной нагрузки, версия плана, нормализация v1→v2, готовность активностей |
| `src/domain/day-load.test.ts`                 | Тесты нормализации плана и завершения дня                                        |
| `src/domain/day-session.ts`                   | Построение очереди шагов, состояние шага, счётчики                               |
| `src/domain/day-session.test.ts`              | Тесты очереди                                                                    |
| `src/domain/attempt-undo.ts`                  | Правило окна отмены попытки                                                      |
| `src/domain/attempt-undo.test.ts`             | Тесты окна отмены                                                                |
| `src/lib/drafts.ts`                           | Ключи и чтение/запись черновиков в `localStorage`                                |
| `src/lib/drafts.test.ts`                      | Тесты формирования ключа                                                         |
| `src/lib/speech.ts`                           | Обёртка над `speechSynthesis`                                                    |
| `src/hooks/use-draft.ts`                      | Хук черновика с debounce                                                         |
| `src/hooks/use-session-position.ts`           | Позиция сессии: URL + `localStorage`                                             |
| `src/components/day/day-session.tsx`          | Раннер сессии: один шаг на экране, навигация, клавиатура                         |
| `src/components/day/step-shell.tsx`           | Общая обвязка шага: прогресс, блок, «Назад»/«Дальше», бейдж повтора              |
| `src/components/day/reading-card.tsx`         | Карточка чтения (вынос из `practice/page.tsx`)                                   |
| `src/components/day/listening-card.tsx`       | Карточка аудирования (вынос)                                                     |
| `src/components/day/translate-from-card.tsx`  | Перевод ES→RU (вынос)                                                            |
| `src/components/day/translate-to-card.tsx`    | Перевод RU→ES (вынос)                                                            |
| `src/components/day/question-list.tsx`        | Вопросы для самопроверки (вынос, общий для чтения и аудио)                       |
| `src/components/day/translation-analysis.tsx` | Разбор перевода (вынос)                                                          |
| `src/components/day/day-analysis.tsx`         | Итоги дня (вынос)                                                                |
| `src/components/day/spanish-keys.tsx`         | Панель испанских символов                                                        |
| `src/components/day/speak-button.tsx`         | Кнопка озвучки                                                                   |
| `src/components/day/undo-attempt.tsx`         | Кнопка отмены попытки с обратным отсчётом                                        |
| `src/components/profile-menu.tsx`             | Меню профиля в шапке                                                             |
| `src/app/practice/summary/page.tsx`           | Маршрут итогов дня                                                               |
| `src/app/api/day/attempt/undo/route.ts`       | `POST` отмены попытки                                                            |

### Изменяется

| Файл                                                               | Что                                                             |
| ------------------------------------------------------------------ | --------------------------------------------------------------- |
| `src/server/daily-plan.ts`                                         | v2-план, новые лимиты, ядро/бонус, дедуп теории, отмена попытки |
| `src/types/day.ts`                                                 | `attemptedAt` в `DayAttempt`, `seenBefore` в `DayPayload`       |
| `src/app/practice/page.tsx`                                        | Из 797 строк вкладок — в хост сессии                            |
| `src/app/theory/page.tsx`                                          | Убрать дублирующие карточки и алерт                             |
| `src/app/placement/page.tsx`                                       | «Не знаю», «Назад», экран результата                            |
| `src/app/history/page.tsx`                                         | Ссылка на итоги дня                                             |
| `src/components/app-header.tsx`                                    | Серия на мобильном, меню профиля                                |
| `src/components/day/grammar-exercise.tsx`                          | Отмена, черновик, испанские символы, без `sharedWithPractice`   |
| `src/components/day/vocabulary-card.tsx`                           | Отмена, черновик, озвучка                                       |
| `src/components/day/conjugation-card.tsx`                          | Отмена, черновик, озвучка                                       |
| `src/hooks/use-day.ts`                                             | `undo`, оптимистичный `busy`                                    |
| `src/app/globals.css`                                              | Дубль `--accent`                                                |
| `docs/UI_UX.md`, `docs/IMPLEMENTATION_STATUS.md`, `docs/README.md` | Синхронизация контракта                                         |

---

## Часть III. Этапы

Семь этапов. Каждый — самостоятельно работающее приложение и отдельная сессия при желании.
Порядок важен: этап 1 задаёт модель данных, на которой стоит этап 2.

---

## Этап 0. Быстрые дефекты

Изолированные правки, не зависящие ни от чего. Можно мержить в первый же день.

### Задача 0.1: Дубль `--accent` в тёмной теме

**Файлы:**

- Изменить: `src/app/globals.css` (блок `.dark`)

- [x] **Шаг 1: Удалить перебивающие объявления**

В блоке `.dark` есть две пары `--accent` / `--accent-foreground`. Удалить вторую пару:

```css
--accent: oklch(0.269 0 0);
--accent-foreground: oklch(0.985 0 0);
```

Первая пара остаётся и становится действующей:

```css
--accent: oklch(0.32 0.06 62);
--accent-foreground: oklch(0.95 0.025 82);
```

- [x] **Шаг 2: Проверка**

Запустить: `npm run dev`, открыть `/` в тёмной теме.
Ожидаемо: плитки «дней в серии» / «текущий уровень» и бейдж серии в шапке тёплые
терракотово-коричневые, а не нейтрально-серые.

- [x] **Шаг 3: Коммит**

```bash
git add src/app/globals.css
git commit -m "fix: restore warm accent token in dark theme"
```

### Задача 0.2: Часовой пояс даты дня

**Файлы:**

- Изменить: `src/app/practice/page.tsx:81-85`

- [x] **Шаг 1: Добавить `timeZone`**

`day.localDate` хранится как UTC-полночь, поэтому форматировать его нужно в UTC, как это
уже делает история (`src/app/history/page.tsx:103-108`).

```tsx
{
  new Date(data.day.localDate).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    weekday: "long",
    timeZone: "UTC",
  });
}
```

- [x] **Шаг 2: Проверка**

Запустить: `TZ=America/Chicago npm run dev`, открыть `/practice`.
Ожидаемо: дата совпадает с датой того же дня в `/history`.

- [x] **Шаг 3: Коммит**

```bash
git add src/app/practice/page.tsx
git commit -m "fix: render day date in UTC to match stored local date"
```

### Задача 0.3: Серия на мобильном и меню профиля

**Файлы:**

- Создать: `src/components/profile-menu.tsx`
- Изменить: `src/components/app-header.tsx:77-104`

- [x] **Шаг 1: Создать меню профиля**

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { LogOut, UserRound } from "lucide-react";

import { useProfile } from "@/components/profile-provider";
import { Button } from "@/components/ui/button";

export function ProfileMenu() {
  const { profile, select } = useProfile();
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent) {
      if (!container.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!profile) return null;

  return (
    <div className="relative" ref={container}>
      <Button
        variant="ghost"
        className="h-10 rounded-full px-2 sm:px-3"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Профиль ${profile.name}`}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="grid size-7 place-items-center rounded-full bg-secondary text-secondary-foreground">
          <UserRound className="size-3.5" />
        </span>
        <span className="max-w-24 truncate text-xs font-semibold sm:max-w-none">
          {profile.name}
        </span>
      </Button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 top-12 z-50 w-56 rounded-2xl border border-border/70 bg-popover p-2 shadow-xl"
        >
          <p className="px-3 py-2 text-xs text-muted-foreground">
            {profile.level ?? "уровень не выбран"} · серия {profile.streak}
          </p>
          <Button
            role="menuitem"
            variant="ghost"
            className="w-full justify-start"
            onClick={() => {
              setOpen(false);
              select(null);
            }}
          >
            <LogOut />
            Сменить профиль
          </Button>
        </div>
      )}
    </div>
  );
}
```

- [x] **Шаг 2: Подключить меню и показать серию на мобильном**

В `src/components/app-header.tsx` заменить блок с кнопкой профиля (строки 77–104) на:

```tsx
<div className="ml-auto flex items-center gap-1 sm:gap-2">
  {profile && (
    <>
      <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
        <Flame className="size-3.5 text-primary" />
        {profile.streak}
      </span>
      <ProfileMenu />
    </>
  )}
  <ThemeToggle />
</div>
```

Добавить импорт `import { ProfileMenu } from "@/components/profile-menu";` и убрать
`UserRound` из импорта `lucide-react`, если он больше не используется в файле.

- [x] **Шаг 3: Проверка**

Запустить: `npm run verify`
Ожидаемо: PASS.
Открыть `/practice` на ширине 375 px: серия видна, имя профиля видно, тап по имени
открывает меню, «Сменить профиль» уводит на выбор профиля, `Escape` закрывает меню.

- [x] **Шаг 4: Коммит**

```bash
git add src/components/profile-menu.tsx src/components/app-header.tsx
git commit -m "feat: add profile menu and show streak on mobile"
```

### Задача 0.4: Снятие отметки чтения

**Файлы:**

- Изменить: `src/server/daily-plan.ts:596-597`
- Изменить: `src/app/practice/page.tsx:549-599` (компонент `ReadingCard`)

- [x] **Шаг 1: Разрешить снятие на сервере**

В `updateDayActivity` заменить:

```ts
    if (input.action === "reading-complete") {
      progress.readingDone = true;
```

на:

```ts
    if (input.action === "reading-complete") {
      progress.readingDone = input.done ?? true;
```

- [x] **Шаг 2: Сделать кнопку переключателем**

В `ReadingCard` заменить кнопку:

```tsx
<Button
  disabled={busy}
  variant={done ? "default" : "secondary"}
  onClick={onToggle}
>
  {done && <Check />}
  {done ? "Прочитано" : "Я прочитал(а)"}
</Button>
```

и изменить сигнатуру пропа `onDone: () => void` на `onToggle: () => void`, а вызов в
`Practice` — на `onToggle={() => activity("reading-complete", { done: !data.day.progress.readingDone })}`.

- [x] **Шаг 3: Проверка**

Запустить: `npm run verify`
Ожидаемо: PASS.
В браузере: отметить чтение, снять отметку, обновить страницу — состояние сохранилось.

- [x] **Шаг 4: Коммит**

```bash
git add src/server/daily-plan.ts src/app/practice/page.tsx
git commit -m "feat: allow unmarking the daily reading"
```

---

## Этап 1. Ядро дня

Серверный этап. После него день реально можно закончить, ещё до всякого редизайна практики.

### Задача 1.1: Домен дневной нагрузки

**Файлы:**

- Создать: `src/domain/day-load.ts`
- Тест: `src/domain/day-load.test.ts`

**Интерфейсы:**

- Использует: `DayPlanSnapshot`, `DayProgress` из `@/server/daily-plan` (типы, не значения).
- Отдаёт: `CORE_LOAD`, `BONUS_LOAD`, `CURRENT_PLAN_VERSION`, `DayActivityKey`,
  `normalizePlanSnapshot`, `translationDirectionForDate`, `isActivityDone`,
  `requiredExerciseIds`. Этими именами пользуются задачи 1.2, 1.3 и весь этап 2.

- [ ] **Шаг 1: Написать падающий тест**

Создать `src/domain/day-load.test.ts`:

```ts
import { describe, expect, it } from "vitest";

import {
  allExerciseIds,
  CORE_LOAD,
  CURRENT_PLAN_VERSION,
  isActivityDone,
  normalizePlanSnapshot,
  requiredExerciseIds,
  translationDirectionForDate,
} from "@/domain/day-load";
import type { DayPlanSnapshot, DayProgress } from "@/server/daily-plan";

const legacyPlan = {
  mcqIds: ["g1"],
  fillIds: ["g2"],
  grammarIds: ["g1", "g2"],
  grammarOptions: {},
  readingId: "r1",
  listeningIds: ["l1"],
  translateFromId: "tf1",
  translateToId: "tt1",
  theoryLessonId: "th1",
  theoryExerciseIds: ["g3"],
  theoryIsReview: false,
  vocabIds: ["v1"],
  conjugationIds: ["c1"],
} as unknown as DayPlanSnapshot;

const emptyProgress: DayProgress = {
  readingDone: false,
  listeningDone: { l1: false },
  translateFrom: { revealed: false, rating: null },
  translateTo: { text: "", percent: null, rating: null },
};

describe("day load", () => {
  it("keeps the daily core small enough to finish in one sitting", () => {
    const cards =
      CORE_LOAD.grammarMcq +
      CORE_LOAD.grammarFill +
      CORE_LOAD.theoryExercise +
      CORE_LOAD.vocabulary +
      CORE_LOAD.conjugation;
    expect(cards).toBe(17);
  });

  it("upgrades a legacy plan without changing what it demands", () => {
    const plan = normalizePlanSnapshot(legacyPlan);
    expect(plan.planVersion).toBe(CURRENT_PLAN_VERSION);
    expect(plan.bonus).toEqual([]);
    expect(plan.coreActivities).toEqual([
      "reading",
      "listening",
      "translate-from",
      "translate-to",
    ]);
  });

  it("leaves an already migrated plan untouched", () => {
    const plan = normalizePlanSnapshot({
      ...legacyPlan,
      planVersion: CURRENT_PLAN_VERSION,
      bonus: [{ sourceId: "g9", kind: "grammar" }],
      coreActivities: ["reading"],
    } as DayPlanSnapshot);
    expect(plan.bonus).toEqual([{ sourceId: "g9", kind: "grammar" }]);
    expect(plan.coreActivities).toEqual(["reading"]);
  });

  it("alternates the required translation direction by calendar day", () => {
    expect(translationDirectionForDate("2026-07-22")).toBe("translate-from");
    expect(translationDirectionForDate("2026-07-23")).toBe("translate-to");
  });

  it("requires every listening item before listening counts as done", () => {
    const plan = normalizePlanSnapshot(legacyPlan);
    expect(isActivityDone("listening", plan, emptyProgress)).toBe(false);
    expect(
      isActivityDone("listening", plan, {
        ...emptyProgress,
        listeningDone: { l1: true },
      }),
    ).toBe(true);
  });

  it("treats an empty listening list as nothing to do", () => {
    const plan = normalizePlanSnapshot({
      ...legacyPlan,
      listeningIds: [],
    } as unknown as DayPlanSnapshot);
    expect(isActivityDone("listening", plan, emptyProgress)).toBe(true);
  });

  it("excludes bonus exercises from the required set", () => {
    const plan = normalizePlanSnapshot({
      ...legacyPlan,
      planVersion: CURRENT_PLAN_VERSION,
      bonus: [{ sourceId: "g9", kind: "grammar" }],
      coreActivities: ["reading"],
    } as DayPlanSnapshot);
    expect(requiredExerciseIds(plan)).toEqual(
      new Set(["g1", "g2", "g3", "v1", "c1"]),
    );
    expect(allExerciseIds(plan)).toEqual(
      new Set(["g1", "g2", "g3", "v1", "c1", "g9"]),
    );
  });
});
```

- [ ] **Шаг 2: Запустить тест и убедиться, что он падает**

Запустить: `npx vitest run src/domain/day-load.test.ts`
Ожидаемо: FAIL — `Failed to resolve import "@/domain/day-load"`.

- [ ] **Шаг 3: Написать реализацию**

Создать `src/domain/day-load.ts`:

```ts
import type { DayPlanSnapshot, DayProgress } from "@/server/daily-plan";

export const CURRENT_PLAN_VERSION = 2;

export const CORE_LOAD = {
  grammarMcq: 3,
  grammarFill: 3,
  theoryExercise: 3,
  vocabulary: 6,
  conjugation: 2,
  reading: 1,
} as const;

export const BONUS_LOAD = {
  grammarMcq: 3,
  grammarFill: 3,
  vocabulary: 4,
  conjugation: 2,
} as const;

export type DayActivityKey =
  "reading" | "listening" | "translate-from" | "translate-to";

/**
 * Вид бонусной карточки хранится в плане явно. Определять его по префиксу ID
 * нельзя: у грамматики префикса нет вообще (`a1-01`), у словаря он `v-`,
 * у спряжений — `cj-`, и это правило не является частью контентного контракта.
 */
export type BonusKind = "grammar" | "vocabulary" | "conjugation";

export interface BonusStep {
  sourceId: string;
  kind: BonusKind;
}

export const ALL_ACTIVITIES: DayActivityKey[] = [
  "reading",
  "listening",
  "translate-from",
  "translate-to",
];

/**
 * Планы, созданные до введения ядра, продолжают требовать всё, что требовали
 * при создании. Это сохраняет инвариант «состав дня не меняется после открытия».
 */
export function normalizePlanSnapshot(plan: DayPlanSnapshot): DayPlanSnapshot {
  if (plan.planVersion === CURRENT_PLAN_VERSION) return plan;
  return {
    ...plan,
    planVersion: CURRENT_PLAN_VERSION,
    bonus: [],
    coreActivities: [...ALL_ACTIVITIES],
  };
}

export function translationDirectionForDate(
  localDate: string,
): "translate-from" | "translate-to" {
  return Number(localDate.slice(8, 10)) % 2 === 0
    ? "translate-from"
    : "translate-to";
}

export function isActivityDone(
  key: DayActivityKey,
  plan: DayPlanSnapshot,
  progress: DayProgress,
): boolean {
  if (key === "reading") return progress.readingDone;
  if (key === "listening")
    return plan.listeningIds.every((id) => progress.listeningDone[id]);
  if (key === "translate-from") return Boolean(progress.translateFrom.rating);
  return Boolean(progress.translateTo.rating);
}

export function requiredExerciseIds(plan: DayPlanSnapshot): Set<string> {
  return new Set([
    ...plan.grammarIds,
    ...plan.theoryExerciseIds,
    ...plan.vocabIds,
    ...plan.conjugationIds,
  ]);
}

export function allExerciseIds(plan: DayPlanSnapshot): Set<string> {
  return new Set([
    ...requiredExerciseIds(plan),
    ...plan.bonus.map((item) => item.sourceId),
  ]);
}
```

- [ ] **Шаг 4: Расширить тип снимка плана**

В `src/server/daily-plan.ts` дополнить интерфейс `DayPlanSnapshot`:

```ts
export interface DayPlanSnapshot {
  planVersion?: number;
  mcqIds: string[];
  fillIds: string[];
  grammarIds: string[];
  grammarOptions: Record<string, string[]>;
  readingId: string;
  listeningIds: string[];
  translateFromId: string;
  translateToId: string;
  theoryLessonId: string | null;
  theoryExerciseIds: string[];
  theoryIsReview: boolean;
  vocabIds: string[];
  conjugationIds: string[];
  bonus: BonusStep[];
  coreActivities: DayActivityKey[];
}
```

и провести все планы через нормализацию:

```ts
function planFromJson(value: Prisma.JsonValue): DayPlanSnapshot {
  return normalizePlanSnapshot(value as unknown as DayPlanSnapshot);
}
```

с импортами:

```ts
import { normalizePlanSnapshot } from "@/domain/day-load";
import type { BonusStep, DayActivityKey } from "@/domain/day-load";
```

`day-load.ts` импортирует `DayPlanSnapshot` и `DayProgress` из `daily-plan.ts` только как
типы (`import type`), поэтому во время выполнения цикла импортов не возникает — TypeScript
стирает такие импорты при компиляции.

- [ ] **Шаг 5: Запустить тест и убедиться, что он проходит**

Запустить: `npx vitest run src/domain/day-load.test.ts`
Ожидаемо: PASS, 7 тестов.

- [ ] **Шаг 6: Коммит**

```bash
git add src/domain/day-load.ts src/domain/day-load.test.ts src/server/daily-plan.ts
git commit -m "feat: introduce versioned day plan with an explicit core"
```

### Задача 1.2: Генератор выдаёт ядро и бонус

**Файлы:**

- Изменить: `src/server/daily-plan.ts:153-311` (тело `ensureDailyPlan`)

**Интерфейсы:**

- Использует: `CORE_LOAD`, `BONUS_LOAD`, `CURRENT_PLAN_VERSION`,
  `translationDirectionForDate` из задачи 1.1.
- Отдаёт: снимок плана, у которого `grammarIds` и `theoryExerciseIds` не пересекаются, а
  `bonus` не входит в обязательный набор.

- [ ] **Шаг 1: Выбрать теорию до грамматики и ограничить закрепление**

Блок выбора теории (строки 173–202) сейчас идёт после грамматики и берёт **все** совпадающие
по теме упражнения. Переставить его **выше** выбора грамматики и ограничить:

```ts
const introduced = new Set(
  oldPlans
    .map(({ plan }) => planFromJson(plan).theoryLessonId)
    .filter((id): id is string => Boolean(id)),
);
const theoryPool = byKind(ContentKind.THEORY)
  .filter((item) => item.level === profile.level)
  .map((item) => contentData<TheoryLesson>(item));
const weakTheory = theoryPool
  .filter((lesson) => introduced.has(lesson.id))
  .map((lesson) => {
    const values = lesson.topics
      .map((topic) => stats.get(`topic:${topic}`))
      .filter(Boolean);
    const total = values.reduce((sum, value) => sum + (value?.total ?? 0), 0);
    const correct = values.reduce(
      (sum, value) => sum + (value?.correct ?? 0),
      0,
    );
    return { lesson, accuracy: total ? correct / total : null };
  })
  .filter((item) => item.accuracy !== null && item.accuracy < 0.7)
  .sort((left, right) => (left.accuracy ?? 1) - (right.accuracy ?? 1));
const theory =
  weakTheory[0]?.lesson ??
  theoryPool.find((item) => !introduced.has(item.id)) ??
  randomItem(theoryPool);
const theoryExercises = adaptivePick(
  grammarPool.filter((item) => theory.topics.includes(item.topic)),
  CORE_LOAD.theoryExercise,
  recentGrammar,
  (item) => accuracy(stats, `topic:${item.topic}`),
);
const theoryExerciseIds = theoryExercises.map((item) => item.id);
```

- [ ] **Шаг 2: Выбрать грамматику, исключив упражнения теории**

Заменить блок `pickGrammar` (строки 162–171) на:

```ts
const usedGrammarIds = new Set(theoryExerciseIds);
const pickGrammar = (type: "mcq" | "fill", count: number) => {
  const picked = adaptivePick(
    grammarPool.filter(
      (item) => item.type === type && !usedGrammarIds.has(item.id),
    ),
    count,
    recentGrammar,
    (item) => accuracy(stats, `topic:${item.topic}`),
  );
  for (const item of picked) usedGrammarIds.add(item.id);
  return picked;
};
const mcq = pickGrammar("mcq", CORE_LOAD.grammarMcq);
const fill = pickGrammar("fill", CORE_LOAD.grammarFill);
const bonusMcq = pickGrammar("mcq", BONUS_LOAD.grammarMcq);
const bonusFill = pickGrammar("fill", BONUS_LOAD.grammarFill);
const grammar = [...mcq, ...fill];
```

Блок `theoryExerciseIds`, который стоял на строках 200–202, удалить — он теперь выше.

- [ ] **Шаг 3: Ограничить слова и спряжения**

Заменить `adaptivePick(vocabPool, 10, ...)` и `adaptivePick(conjugationPool, 20, ...)` на:

```ts
const vocabAll = adaptivePick(
  vocabPool,
  CORE_LOAD.vocabulary + BONUS_LOAD.vocabulary,
  recentVocab,
  (item) => accuracy(stats, `item:${item.id}`),
);
const vocab = vocabAll.slice(0, CORE_LOAD.vocabulary);
const bonusVocab = vocabAll.slice(CORE_LOAD.vocabulary);

const conjugationAll = adaptivePick(
  conjugationPool,
  CORE_LOAD.conjugation + BONUS_LOAD.conjugation,
  recentConjugation,
  (item) => accuracy(stats, `item:${item.id}`),
);
const conjugation = conjugationAll.slice(0, CORE_LOAD.conjugation);
const bonusConjugation = conjugationAll.slice(CORE_LOAD.conjugation);
```

- [ ] **Шаг 4: Собрать снимок v2**

Заменить объявление `allGrammar` и `snapshot` на:

```ts
const bonus: BonusStep[] = [
  ...[...bonusMcq, ...bonusFill].map((item) => ({
    sourceId: item.id,
    kind: "grammar" as const,
  })),
  ...bonusVocab.map((item) => ({
    sourceId: item.id,
    kind: "vocabulary" as const,
  })),
  ...bonusConjugation.map((item) => ({
    sourceId: item.id,
    kind: "conjugation" as const,
  })),
];
const allGrammar = [...grammar, ...bonusMcq, ...bonusFill, ...theoryExercises];
const snapshot: DayPlanSnapshot = {
  planVersion: CURRENT_PLAN_VERSION,
  mcqIds: mcq.map((item) => item.id),
  fillIds: fill.map((item) => item.id),
  grammarIds: grammar.map((item) => item.id),
  grammarOptions: Object.fromEntries(
    allGrammar
      .filter((item) => item.options)
      .map((item) => [item.id, shuffled(item.options ?? [])]),
  ),
  readingId: reading.id,
  listeningIds: listening.map((item) => item.id),
  translateFromId: translateFrom.id,
  translateToId: translateTo.id,
  theoryLessonId: theory.id,
  theoryExerciseIds,
  theoryIsReview: introduced.has(theory.id),
  vocabIds: vocab.map((item) => item.id),
  conjugationIds: conjugation.map((item) => item.id),
  bonus,
  coreActivities: ["reading", translationDirectionForDate(localDate)],
};
```

Импорты в шапке файла дополнить:

```ts
import {
  allExerciseIds,
  BONUS_LOAD,
  CORE_LOAD,
  CURRENT_PLAN_VERSION,
  isActivityDone,
  normalizePlanSnapshot,
  requiredExerciseIds,
  translationDirectionForDate,
} from "@/domain/day-load";
import type { BonusStep } from "@/domain/day-load";
```

- [ ] **Шаг 5: Завершать день по ядру**

В `completeDayIfReady` заменить блок проверки (строки 407–425) на:

```ts
const required = requiredExerciseIds(plan);
const attempted = new Set(day.attempts.map((item) => item.contentSourceId));
const exercisesDone = [...required].every((id) => attempted.has(id));
const activitiesDone = plan.coreActivities.every((key) =>
  isActivityDone(key, plan, progress),
);
if (!exercisesDone || !activitiesDone) return;
```

- [ ] **Шаг 6: Разрешить отправку бонусных заданий**

В `submitAttempt` заменить построение `allowed` на:

```ts
const allowed = allExerciseIds(plan);
```

(`allExerciseIds` уже добавлен в импорт на шаге 4.)

- [ ] **Шаг 7: Проверка**

Запустить: `npm run verify`
Ожидаемо: PASS.

Ручная проверка на чистой базе:

```bash
npm run db:migrate && npm run db:seed && npm run dev
```

Создать профиль, выбрать уровень A1, открыть `/practice`.
Ожидаемо: 3 MCQ + 3 fill + 3 закрепления теории + 6 слов + 2 спряжения = 17 карточек,
счётчик дня `0/19`, ни одно упражнение теории не повторяется в блоке грамматики.

- [ ] **Шаг 8: Коммит**

```bash
git add src/server/daily-plan.ts
git commit -m "feat: generate a small day core with an optional bonus tail"
```

### Задача 1.3: Счётчик дня считает ядро

**Файлы:**

- Изменить: `src/app/practice/page.tsx:54-71`

- [ ] **Шаг 1: Заменить подсчёт**

```tsx
const { plan } = data.day;
const required = requiredExerciseIds(plan);
const exerciseDone = [...required].filter((id) => data.attempts[id]).length;
const activityDone = plan.coreActivities.filter((key) =>
  isActivityDone(key, plan, data.day.progress),
).length;
const total = required.size + plan.coreActivities.length;
const done = exerciseDone + activityDone;
```

с импортом `import { isActivityDone, requiredExerciseIds } from "@/domain/day-load";`.

- [ ] **Шаг 2: Проверка**

Запустить: `npm run verify`
Ожидаемо: PASS.
В браузере: счётчик показывает `0/19`, после ответа на карточку — `1/19`.

- [ ] **Шаг 3: Коммит**

```bash
git add src/app/practice/page.tsx
git commit -m "fix: count the day core in the practice progress header"
```

---

## Этап 2. Сессия по одной карточке

Главный этап. Здесь исчезают вкладки.

### Задача 2.1: Домен очереди шагов

**Файлы:**

- Создать: `src/domain/day-session.ts`
- Тест: `src/domain/day-session.test.ts`

**Интерфейсы:**

- Использует: `DayActivityKey`, `isActivityDone`, `normalizePlanSnapshot` из задачи 1.1.
- Отдаёт: `DayStep`, `StepKind`, `StepGroup`, `buildDaySteps`, `isStepDone`,
  `sessionCounters`, `nextUnfinishedIndex`, `stepIndexByKey`. Ими пользуются задачи 2.2–2.4.

- [ ] **Шаг 1: Написать падающий тест**

Создать `src/domain/day-session.test.ts`:

```ts
import { describe, expect, it } from "vitest";

import { normalizePlanSnapshot } from "@/domain/day-load";
import {
  buildDaySteps,
  isStepDone,
  nextUnfinishedIndex,
  sessionCounters,
  stepIndexByKey,
} from "@/domain/day-session";
import type { DayPlanSnapshot, DayProgress } from "@/server/daily-plan";

const plan = normalizePlanSnapshot({
  planVersion: 2,
  mcqIds: ["g-mcq"],
  fillIds: ["g-fill"],
  grammarIds: ["g-mcq", "g-fill"],
  grammarOptions: {},
  readingId: "r1",
  listeningIds: ["l1"],
  translateFromId: "tf1",
  translateToId: "tt1",
  theoryLessonId: "th1",
  theoryExerciseIds: ["g-theory"],
  theoryIsReview: false,
  vocabIds: ["v1"],
  conjugationIds: ["c1"],
  bonus: [{ sourceId: "g-bonus", kind: "grammar" }],
  coreActivities: ["reading", "translate-from"],
} as DayPlanSnapshot);

const progress: DayProgress = {
  readingDone: false,
  listeningDone: { l1: false },
  translateFrom: { revealed: false, rating: null },
  translateTo: { text: "", percent: null, rating: null },
};

describe("day session", () => {
  it("orders core steps by group and pushes optional work to the tail", () => {
    expect(buildDaySteps(plan).map((step) => step.key)).toEqual([
      "theory-exercise:g-theory",
      "grammar:g-mcq",
      "grammar:g-fill",
      "vocabulary:v1",
      "conjugation:c1",
      "reading:r1",
      "translate-from:tf1",
      "listening:l1",
      "translate-to:tt1",
      "grammar:g-bonus",
    ]);
  });

  it("marks every optional step as optional and every core step as required", () => {
    const optional = buildDaySteps(plan)
      .filter((step) => step.optional)
      .map((step) => step.key);
    expect(optional).toEqual([
      "listening:l1",
      "translate-to:tt1",
      "grammar:g-bonus",
    ]);
  });

  it("carries the declared bonus kind into the step so no id sniffing is needed", () => {
    const bonusStep = buildDaySteps(plan).at(-1);
    expect(bonusStep).toMatchObject({
      kind: "grammar",
      group: "bonus",
      sourceId: "g-bonus",
      optional: true,
    });
  });

  it("reads exercise completion from attempts and activity completion from progress", () => {
    const steps = buildDaySteps(plan);
    const attempts = { "g-mcq": true };
    expect(isStepDone(steps[1], plan, progress, attempts)).toBe(true);
    expect(isStepDone(steps[2], plan, progress, attempts)).toBe(false);
    expect(isStepDone(steps[5], plan, progress, attempts)).toBe(false);
    expect(
      isStepDone(steps[5], plan, { ...progress, readingDone: true }, attempts),
    ).toBe(true);
  });

  it("counts core progress separately from total progress", () => {
    const steps = buildDaySteps(plan);
    expect(sessionCounters(steps, plan, progress, { "g-mcq": true })).toEqual({
      done: 1,
      total: 10,
      coreDone: 1,
      coreTotal: 7,
    });
  });

  it("finds the first unfinished step, scanning forward then from the start", () => {
    const steps = buildDaySteps(plan);
    const attempts = { "g-theory": true, "g-mcq": true };
    expect(nextUnfinishedIndex(steps, plan, progress, attempts, 0)).toBe(2);
    expect(nextUnfinishedIndex(steps, plan, progress, attempts, 5)).toBe(5);
  });

  it("resolves a step index by key and falls back to -1", () => {
    const steps = buildDaySteps(plan);
    expect(stepIndexByKey(steps, "vocabulary:v1")).toBe(3);
    expect(stepIndexByKey(steps, "nope:x")).toBe(-1);
  });
});
```

- [ ] **Шаг 2: Запустить тест и убедиться, что он падает**

Запустить: `npx vitest run src/domain/day-session.test.ts`
Ожидаемо: FAIL — `Failed to resolve import "@/domain/day-session"`.

- [ ] **Шаг 3: Написать реализацию**

Создать `src/domain/day-session.ts`:

```ts
import { isActivityDone, type DayActivityKey } from "@/domain/day-load";
import type { DayPlanSnapshot, DayProgress } from "@/server/daily-plan";

/** Что рендерить. Бонусность — это `group`/`optional`, а не отдельный вид карточки. */
export type StepKind =
  | "theory-exercise"
  | "grammar"
  | "vocabulary"
  | "conjugation"
  | "reading"
  | "listening"
  | "translate-from"
  | "translate-to";

export type StepGroup =
  "theory" | "grammar" | "vocabulary" | "conjugation" | "skills" | "bonus";

export interface DayStep {
  /** Уникальный ключ шага, попадает в URL. */
  key: string;
  kind: StepKind;
  group: StepGroup;
  sourceId: string;
  optional: boolean;
}

export const GROUP_LABELS: Record<StepGroup, string> = {
  theory: "Закрепление теории",
  grammar: "Грамматика",
  vocabulary: "Слова",
  conjugation: "Спряжения",
  skills: "Чтение и переводы",
  bonus: "Бонус",
};

const ACTIVITY_KIND: Record<DayActivityKey, StepKind> = {
  reading: "reading",
  listening: "listening",
  "translate-from": "translate-from",
  "translate-to": "translate-to",
};

function step(
  kind: StepKind,
  group: StepGroup,
  sourceId: string,
  optional: boolean,
): DayStep {
  return { key: `${kind}:${sourceId}`, kind, group, sourceId, optional };
}

function activitySourceId(
  key: DayActivityKey,
  plan: DayPlanSnapshot,
): string[] {
  if (key === "reading") return [plan.readingId];
  if (key === "listening") return plan.listeningIds;
  if (key === "translate-from") return [plan.translateFromId];
  return [plan.translateToId];
}

/**
 * Обязательные шаги идут в педагогическом порядке, необязательные — хвостом,
 * чтобы «осталось до конца дня» всегда читалось сверху вниз.
 */
export function buildDaySteps(plan: DayPlanSnapshot): DayStep[] {
  const core: DayStep[] = [
    ...plan.theoryExerciseIds.map((id) =>
      step("theory-exercise", "theory", id, false),
    ),
    ...plan.mcqIds.map((id) => step("grammar", "grammar", id, false)),
    ...plan.fillIds.map((id) => step("grammar", "grammar", id, false)),
    ...plan.vocabIds.map((id) => step("vocabulary", "vocabulary", id, false)),
    ...plan.conjugationIds.map((id) =>
      step("conjugation", "conjugation", id, false),
    ),
  ];
  const optional: DayStep[] = [];
  const activityOrder: DayActivityKey[] = [
    "reading",
    "listening",
    "translate-from",
    "translate-to",
  ];
  for (const key of activityOrder) {
    const isCore = plan.coreActivities.includes(key);
    for (const sourceId of activitySourceId(key, plan)) {
      const created = step(ACTIVITY_KIND[key], "skills", sourceId, !isCore);
      if (isCore) core.push(created);
      else optional.push(created);
    }
  }
  optional.push(
    ...plan.bonus.map((item) => step(item.kind, "bonus", item.sourceId, true)),
  );
  return [...core, ...optional];
}

export function isStepDone(
  current: DayStep,
  plan: DayPlanSnapshot,
  progress: DayProgress,
  attempts: Record<string, unknown>,
): boolean {
  if (current.kind === "reading") return progress.readingDone;
  if (current.kind === "listening")
    return Boolean(progress.listeningDone[current.sourceId]);
  if (current.kind === "translate-from")
    return isActivityDone("translate-from", plan, progress);
  if (current.kind === "translate-to")
    return isActivityDone("translate-to", plan, progress);
  return Boolean(attempts[current.sourceId]);
}

export function sessionCounters(
  steps: DayStep[],
  plan: DayPlanSnapshot,
  progress: DayProgress,
  attempts: Record<string, unknown>,
) {
  const core = steps.filter((current) => !current.optional);
  return {
    done: steps.filter((current) =>
      isStepDone(current, plan, progress, attempts),
    ).length,
    total: steps.length,
    coreDone: core.filter((current) =>
      isStepDone(current, plan, progress, attempts),
    ).length,
    coreTotal: core.length,
  };
}

export function nextUnfinishedIndex(
  steps: DayStep[],
  plan: DayPlanSnapshot,
  progress: DayProgress,
  attempts: Record<string, unknown>,
  from = 0,
): number {
  const undone = (index: number) =>
    !isStepDone(steps[index], plan, progress, attempts);
  for (let index = from; index < steps.length; index += 1)
    if (undone(index)) return index;
  for (let index = 0; index < from; index += 1) if (undone(index)) return index;
  return -1;
}

export function stepIndexByKey(steps: DayStep[], key: string): number {
  return steps.findIndex((current) => current.key === key);
}
```

- [ ] **Шаг 4: Запустить тест и убедиться, что он проходит**

Запустить: `npx vitest run src/domain/day-session.test.ts`
Ожидаемо: PASS, 6 тестов.

- [ ] **Шаг 5: Коммит**

```bash
git add src/domain/day-session.ts src/domain/day-session.test.ts
git commit -m "feat: model the daily session as an ordered step queue"
```

### Задача 2.2: Позиция сессии

**Файлы:**

- Создать: `src/hooks/use-session-position.ts`

**Интерфейсы:**

- Отдаёт: `useSessionPosition(dayId, steps, fallbackIndex)` → `{ index, ready, goTo }`.
  `goTo(index)` обновляет URL через `history.replaceState` и `localStorage`.

`useSearchParams` здесь намеренно не используется: он переводит дерево до ближайшего
`Suspense` в клиентский рендер (`node_modules/next/dist/docs/01-app/03-api-reference/04-functions/use-search-params.md`),
а листание карточек не должно быть навигацией. Начальное значение читается один раз после
монтирования, дальше URL обновляется без перерисовки роутера.

- [ ] **Шаг 1: Написать хук**

```ts
"use client";

import { useCallback, useEffect, useState } from "react";

import { stepIndexByKey, type DayStep } from "@/domain/day-session";

const storageKey = (dayId: string) => `espanolDiario.session.${dayId}`;

export function useSessionPosition(
  dayId: string,
  steps: DayStep[],
  fallbackIndex: number,
) {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready || steps.length === 0) return;
    const fromUrl = new URLSearchParams(window.location.search).get("step");
    const fromStorage = window.localStorage.getItem(storageKey(dayId));
    const candidates = [fromUrl, fromStorage].filter((value): value is string =>
      Boolean(value),
    );
    const restored = candidates
      .map((key) => stepIndexByKey(steps, key))
      .find((value) => value >= 0);
    setIndex(restored ?? Math.max(fallbackIndex, 0));
    setReady(true);
  }, [dayId, fallbackIndex, ready, steps]);

  const goTo = useCallback(
    (next: number) => {
      const clamped = Math.min(Math.max(next, 0), steps.length - 1);
      const step = steps[clamped];
      if (!step) return;
      setIndex(clamped);
      window.localStorage.setItem(storageKey(dayId), step.key);
      const url = new URL(window.location.href);
      url.searchParams.set("step", step.key);
      window.history.replaceState(null, "", url);
      window.scrollTo({ top: 0, behavior: "instant" });
    },
    [dayId, steps],
  );

  return { index, ready, goTo };
}
```

- [ ] **Шаг 2: Проверка**

Запустить: `npm run typecheck`
Ожидаемо: PASS. Поведение проверяется в задаче 2.4.

- [ ] **Шаг 3: Коммит**

```bash
git add src/hooks/use-session-position.ts
git commit -m "feat: persist session position in url and local storage"
```

### Задача 2.3: Разбор `practice/page.tsx` на компоненты

Файл на 797 строк содержит шесть компонентов. Раннер сессии в него не поместится, поэтому
сначала вынос — без изменения поведения.

**Файлы:**

- Создать: `src/components/day/question-list.tsx`, `src/components/day/translation-analysis.tsx`,
  `src/components/day/reading-card.tsx`, `src/components/day/listening-card.tsx`,
  `src/components/day/translate-from-card.tsx`, `src/components/day/translate-to-card.tsx`,
  `src/components/day/day-analysis.tsx`
- Изменить: `src/app/practice/page.tsx`

**Интерфейсы:**

- Отдаёт публичные компоненты `QuestionList`, `TranslationAnalysis`, `ReadingCard`,
  `ListeningCard`, `TranslateFromCard`, `TranslateToCard`, `DayAnalysis` и функцию
  `ratingLabel` из `src/components/day/translation-analysis.tsx`.

- [ ] **Шаг 1: Перенести код без изменений**

Перенести из `src/app/practice/page.tsx` в новые файлы:

| Из строк | Компонент                            | В файл                                        |
| -------- | ------------------------------------ | --------------------------------------------- |
| 713–744  | `QuestionList`                       | `src/components/day/question-list.tsx`        |
| 746–797  | `TranslationAnalysis`, `ratingLabel` | `src/components/day/translation-analysis.tsx` |
| 549–600  | `ReadingCard`                        | `src/components/day/reading-card.tsx`         |
| 200–275  | `ListeningCard`                      | `src/components/day/listening-card.tsx`       |
| 602–653  | `TranslateFromCard`                  | `src/components/day/translate-from-card.tsx`  |
| 655–711  | `TranslateToCard`                    | `src/components/day/translate-to-card.tsx`    |
| 296–530  | `DayAnalysis`                        | `src/components/day/day-analysis.tsx`         |

Каждый файл начинается с `"use client";`, экспортирует компонент через `export function`,
импорты переносятся вместе с кодом. Разметка аудирования (сейчас инлайн в JSX практики)
оформляется как компонент с сигнатурой:

```tsx
export function ListeningCard({
  items,
  progress,
  busyId,
  onToggle,
}: {
  items: ListeningContent[];
  progress: Record<string, boolean>;
  busyId: string | null;
  onToggle: (sourceId: string, done: boolean) => void;
});
```

- [ ] **Шаг 2: Проверка отсутствия регрессии**

Запустить: `npm run verify`
Ожидаемо: PASS.
В браузере пройти вкладки практики: поведение идентично тому, что было до выноса.

- [ ] **Шаг 3: Коммит**

```bash
git add src/components/day src/app/practice/page.tsx
git commit -m "refactor: split the practice page into focused day components"
```

### Задача 2.4: Раннер сессии

**Файлы:**

- Создать: `src/components/day/step-shell.tsx`, `src/components/day/day-session.tsx`
- Изменить: `src/app/practice/page.tsx`

**Интерфейсы:**

- Использует: `buildDaySteps`, `isStepDone`, `sessionCounters`, `nextUnfinishedIndex`,
  `GROUP_LABELS` из задачи 2.1; `useSessionPosition` из задачи 2.2; компоненты из задачи 2.3.

- [ ] **Шаг 1: Написать обвязку шага**

Создать `src/components/day/step-shell.tsx`:

```tsx
"use client";

import { ArrowLeft, ArrowRight, Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { GROUP_LABELS, type DayStep } from "@/domain/day-session";

export function StepShell({
  step,
  index,
  total,
  coreDone,
  coreTotal,
  done,
  canGoBack,
  canGoForward,
  onBack,
  onForward,
  children,
}: {
  step: DayStep;
  index: number;
  total: number;
  coreDone: number;
  coreTotal: number;
  done: boolean;
  canGoBack: boolean;
  canGoForward: boolean;
  onBack: () => void;
  onForward: () => void;
  children: React.ReactNode;
}) {
  // Обязательные шаги всегда идут первыми, поэтому index < coreTotal
  // означает «этот шаг входит в ядро дня».
  return (
    <div className="space-y-5">
      <div className="soft-panel space-y-3 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={step.optional ? "outline" : "secondary"}>
              {GROUP_LABELS[step.group]}
            </Badge>
            {step.optional && <Badge variant="outline">необязательно</Badge>}
            {done && (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                <Check className="size-3.5" />
                выполнено
              </span>
            )}
          </div>
          <span className="font-mono text-sm tabular-nums text-muted-foreground">
            {step.optional
              ? `Бонус · ${index - coreTotal + 1} из ${total - coreTotal}`
              : `Шаг ${index + 1} из ${coreTotal}`}
          </span>
        </div>
        <Progress
          value={coreTotal ? (coreDone / coreTotal) * 100 : 0}
          className="h-2"
        />
        <p className="text-xs text-muted-foreground">
          До завершения дня: {Math.max(coreTotal - coreDone, 0)} из {coreTotal}
        </p>
      </div>
      {children}
      <div className="flex items-center justify-between gap-3">
        <Button variant="outline" disabled={!canGoBack} onClick={onBack}>
          <ArrowLeft />
          Назад
        </Button>
        <Button disabled={!canGoForward} onClick={onForward}>
          Дальше
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
```

- [ ] **Шаг 2: Написать раннер**

Создать `src/components/day/day-session.tsx`:

```tsx
"use client";

import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

import type {
  ConjugationCard,
  GrammarExercise,
  ListeningContent,
  ReadingContent,
  TranslationContent,
  VocabularyCard,
} from "@/content/types";
import { ConjugationExercise } from "@/components/day/conjugation-card";
import { GrammarExerciseCard } from "@/components/day/grammar-exercise";
import { ListeningCard } from "@/components/day/listening-card";
import { ReadingCard } from "@/components/day/reading-card";
import { StepShell } from "@/components/day/step-shell";
import { TranslateFromCard } from "@/components/day/translate-from-card";
import { TranslateToCard } from "@/components/day/translate-to-card";
import { VocabularyExercise } from "@/components/day/vocabulary-card";
import {
  buildDaySteps,
  isStepDone,
  nextUnfinishedIndex,
  sessionCounters,
} from "@/domain/day-session";
import { useSessionPosition } from "@/hooks/use-session-position";
import type { DayPayload } from "@/types/day";

export function DaySession({
  data,
  busyId,
  attempt,
  activity,
}: {
  data: DayPayload;
  busyId: string | null;
  attempt: (sourceId: string, answer: string | string[]) => void;
  activity: (action: string, values?: Record<string, unknown>) => void;
}) {
  const router = useRouter();
  const { plan, progress } = data.day;
  const steps = buildDaySteps(plan);
  const counters = sessionCounters(steps, plan, progress, data.attempts);
  const firstUnfinished = nextUnfinishedIndex(
    steps,
    plan,
    progress,
    data.attempts,
  );
  const { index, ready, goTo } = useSessionPosition(
    data.day.id,
    steps,
    firstUnfinished,
  );
  const step = steps[index];
  const atEnd = index === steps.length - 1;

  const forward = useCallback(() => {
    if (atEnd) router.push("/practice/summary");
    else goTo(index + 1);
  }, [atEnd, goTo, index, router]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const typing =
        target?.tagName === "INPUT" || target?.tagName === "TEXTAREA";
      if (event.key === "ArrowRight" && !typing) forward();
      if (event.key === "ArrowLeft" && !typing && index > 0) goTo(index - 1);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [forward, goTo, index]);

  if (!ready || !step) return <div className="soft-panel h-64 animate-pulse" />;

  return (
    <StepShell
      step={step}
      index={index}
      total={steps.length}
      coreDone={counters.coreDone}
      coreTotal={counters.coreTotal}
      done={isStepDone(step, plan, progress, data.attempts)}
      canGoBack={index > 0}
      canGoForward
      onBack={() => goTo(index - 1)}
      onForward={forward}
    >
      {(step.kind === "grammar" || step.kind === "theory-exercise") && (
        <GrammarExerciseCard
          exercise={data.content[step.sourceId] as GrammarExercise}
          options={plan.grammarOptions[step.sourceId]}
          attempt={data.attempts[step.sourceId]}
          busy={busyId === step.sourceId}
          onSubmit={(answer) => attempt(step.sourceId, answer)}
        />
      )}
      {step.kind === "vocabulary" && (
        <VocabularyExercise
          card={data.content[step.sourceId] as VocabularyCard}
          attempt={data.attempts[step.sourceId]}
          busy={busyId === step.sourceId}
          onSubmit={(answer) => attempt(step.sourceId, answer)}
        />
      )}
      {step.kind === "conjugation" && (
        <ConjugationExercise
          card={data.content[step.sourceId] as ConjugationCard}
          attempt={data.attempts[step.sourceId]}
          busy={busyId === step.sourceId}
          onSubmit={(answer) => attempt(step.sourceId, answer)}
        />
      )}
      {step.kind === "reading" && (
        <ReadingCard
          content={data.content[step.sourceId] as ReadingContent}
          done={progress.readingDone}
          busy={busyId === "reading-complete"}
          onToggle={() =>
            activity("reading-complete", { done: !progress.readingDone })
          }
        />
      )}
      {step.kind === "listening" && (
        <ListeningCard
          items={[data.content[step.sourceId] as ListeningContent]}
          progress={progress.listeningDone}
          busyId={busyId}
          onToggle={(sourceId, done) =>
            activity("listening-set", { sourceId, done })
          }
        />
      )}
      {step.kind === "translate-from" && (
        <TranslateFromCard
          card={data.content[step.sourceId] as TranslationContent}
          progress={progress.translateFrom}
          onAction={activity}
        />
      )}
      {step.kind === "translate-to" && (
        <TranslateToCard
          key={step.sourceId}
          card={data.content[step.sourceId] as TranslationContent}
          progress={progress.translateTo}
          onAction={activity}
        />
      )}
    </StepShell>
  );
}
```

Отдельной ветки для бонуса в JSX нет намеренно: `buildDaySteps` уже проставил бонусному
шагу его настоящий `kind` из плана, поэтому бонусная карточка словаря рендерится той же
веткой `step.kind === "vocabulary"`, что и основная. Отличается только `group` (бейдж
«Бонус») и `optional`.

- [ ] **Шаг 3: Заменить страницу практики**

`src/app/practice/page.tsx` сокращается до хоста:

```tsx
"use client";

import Link from "next/link";
import { Trophy } from "lucide-react";

import { DaySession } from "@/components/day/day-session";
import { ProfileRequired } from "@/components/profile-required";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { isActivityDone, requiredExerciseIds } from "@/domain/day-load";
import { useDay } from "@/hooks/use-day";

export default function PracticePage() {
  return (
    <ProfileRequired>
      <Practice />
    </ProfileRequired>
  );
}

function Practice() {
  const { data, error, busyId, attempt, activity } = useDay();
  if (!data)
    return (
      <main className="page-shell">
        <div className="soft-panel h-64 animate-pulse" />
        <p className="text-muted-foreground">
          {error || "Генерируем задания на сегодня…"}
        </p>
      </main>
    );
  const { plan } = data.day;
  const required = requiredExerciseIds(plan);
  const done =
    [...required].filter((id) => data.attempts[id]).length +
    plan.coreActivities.filter((key) =>
      isActivityDone(key, plan, data.day.progress),
    ).length;
  const total = required.size + plan.coreActivities.length;

  return (
    <main className="page-shell">
      <section className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Сегодняшний маршрут</p>
          <h1 className="page-heading mt-1">Практика дня</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {new Date(data.day.localDate).toLocaleDateString("ru-RU", {
              day: "numeric",
              month: "long",
              weekday: "long",
              timeZone: "UTC",
            })}
          </p>
        </div>
        <div className="rounded-2xl bg-accent px-4 py-3 text-right text-accent-foreground">
          <span className="block font-mono text-2xl font-semibold tabular-nums">
            {done}/{total}
          </span>
          <span className="text-xs">завершено</span>
        </div>
      </section>
      {data.day.completedAt && (
        <Alert>
          <Trophy />
          <AlertTitle>День завершён</AlertTitle>
          <AlertDescription>
            Результат: {data.day.score}% · серия обновлена.
            <Button asChild variant="link" className="px-1">
              <Link href="/practice/summary">Открыть итоги</Link>
            </Button>
          </AlertDescription>
        </Alert>
      )}
      {error && <p className="text-sm text-destructive">{error}</p>}
      <DaySession
        data={data}
        busyId={busyId}
        attempt={attempt}
        activity={activity}
      />
    </main>
  );
}
```

- [ ] **Шаг 4: Добавить маршрут итогов**

Создать `src/app/practice/summary/page.tsx`:

```tsx
"use client";

import Link from "next/link";

import { DayAnalysis } from "@/components/day/day-analysis";
import { ProfileRequired } from "@/components/profile-required";
import { Button } from "@/components/ui/button";
import { useDay } from "@/hooks/use-day";

export default function SummaryPage() {
  return (
    <ProfileRequired>
      <Summary />
    </ProfileRequired>
  );
}

function Summary() {
  const { data, error } = useDay();
  if (!data)
    return (
      <main className="page-shell max-w-5xl">
        <div className="soft-panel h-40 animate-pulse" />
        <p className="text-muted-foreground">{error || "Считаем итоги дня…"}</p>
      </main>
    );
  return (
    <main className="page-shell max-w-5xl">
      <DayAnalysis data={data} />
      <div className="flex flex-wrap gap-3">
        <Button asChild variant="outline">
          <Link href="/practice">Вернуться к заданиям</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/progress">Общий прогресс</Link>
        </Button>
      </div>
    </main>
  );
}
```

- [ ] **Шаг 5: Проверка**

Запустить: `npm run verify`
Ожидаемо: PASS.

Ручная приёмка в браузере:

1. `/practice` показывает одну карточку и `Шаг 1 из 19`.
2. Ответ на карточку → появляется разбор, «Дальше» переводит к следующей.
3. Перезагрузка страницы → тот же шаг, а не первый.
4. Переход в «Теорию» и обратно → тот же шаг.
5. `←`/`→` листают, в поле ввода стрелки двигают курсор и **не** листают.
6. С последнего шага «Дальше» уводит на `/practice/summary`.
7. Ширина 375 px: карточка и кнопки не перекрываются нижней навигацией.

- [ ] **Шаг 6: Коммит**

```bash
git add src/components/day src/app/practice src/domain/day-session.ts
git commit -m "feat: run the daily practice as a one-card-at-a-time session"
```

### Задача 2.5: Теория перестаёт дублировать практику

**Файлы:**

- Изменить: `src/app/theory/page.tsx:41-51, 167-203`
- Изменить: `src/components/day/grammar-exercise.tsx:20, 27, 53-55`

- [ ] **Шаг 1: Убрать дублирующие карточки из теории**

Заменить секцию «Закрепление» (строки 167–203) на ссылку в сессию:

```tsx
<section className="space-y-4">
  <div>
    <h2 className="text-2xl font-semibold">Закрепление</h2>
    <p className="text-muted-foreground">
      Выполнено {completed} из {data.day.plan.theoryExerciseIds.length}.
      Упражнения этой темы стоят в начале сегодняшней сессии.
    </p>
  </div>
  <Button asChild>
    <Link href="/practice">
      {completed === data.day.plan.theoryExerciseIds.length
        ? "Открыть сессию"
        : "Перейти к закреплению"}
    </Link>
  </Button>
</section>
```

Удалить вычисление `sharedIds` / `sharedCompleted` (строки 44–51) и `Alert` о совместных
попытках. Добавить импорты `Link` и `Button`, убрать неиспользуемые.

- [ ] **Шаг 2: Убрать проп `sharedWithPractice`**

В `src/components/day/grammar-exercise.tsx` удалить параметр `sharedWithPractice` из
сигнатуры, значение по умолчанию и блок бейджа:

```tsx
{
  sharedWithPractice && <Badge variant="outline">Общее с практикой</Badge>;
}
```

- [ ] **Шаг 3: Проверка**

Запустить: `npm run verify`
Ожидаемо: PASS.
В браузере: `/theory` содержит урок, шпаргалку и кнопку в сессию, но ни одной карточки
с полем ответа. Ни одно упражнение не встречается дважды за день.

- [ ] **Шаг 4: Коммит**

```bash
git add src/app/theory/page.tsx src/components/day/grammar-exercise.tsx
git commit -m "refactor: stop duplicating theory exercises on the theory page"
```

---

## Этап 3. Доверие к вводу

### Задача 3.1: Домен окна отмены

**Файлы:**

- Создать: `src/domain/attempt-undo.ts`
- Тест: `src/domain/attempt-undo.test.ts`

**Интерфейсы:**

- Отдаёт: `UNDO_WINDOW_MS`, `canUndoAttempt({ attemptedAt, now, dayCompletedAt })`.

- [ ] **Шаг 1: Написать падающий тест**

```ts
import { describe, expect, it } from "vitest";

import { UNDO_WINDOW_MS, canUndoAttempt } from "@/domain/attempt-undo";

const attemptedAt = new Date("2026-07-22T10:00:00.000Z");

describe("attempt undo", () => {
  it("allows undo inside the window", () => {
    expect(
      canUndoAttempt({
        attemptedAt,
        now: new Date("2026-07-22T10:00:14.000Z"),
        dayCompletedAt: null,
      }),
    ).toBe(true);
  });

  it("refuses undo once the window has passed", () => {
    expect(
      canUndoAttempt({
        attemptedAt,
        now: new Date(attemptedAt.getTime() + UNDO_WINDOW_MS + 1),
        dayCompletedAt: null,
      }),
    ).toBe(false);
  });

  it("refuses undo after the day is completed", () => {
    expect(
      canUndoAttempt({
        attemptedAt,
        now: new Date("2026-07-22T10:00:01.000Z"),
        dayCompletedAt: new Date("2026-07-22T10:00:00.500Z"),
      }),
    ).toBe(false);
  });

  it("refuses undo for a future timestamp", () => {
    expect(
      canUndoAttempt({
        attemptedAt,
        now: new Date("2026-07-22T09:59:00.000Z"),
        dayCompletedAt: null,
      }),
    ).toBe(false);
  });
});
```

- [ ] **Шаг 2: Запустить тест и убедиться, что он падает**

Запустить: `npx vitest run src/domain/attempt-undo.test.ts`
Ожидаемо: FAIL — модуль не найден.

- [ ] **Шаг 3: Написать реализацию**

```ts
export const UNDO_WINDOW_MS = 15_000;

export function canUndoAttempt({
  attemptedAt,
  now,
  dayCompletedAt,
}: {
  attemptedAt: Date;
  now: Date;
  dayCompletedAt: Date | null;
}): boolean {
  if (dayCompletedAt) return false;
  const elapsed = now.getTime() - attemptedAt.getTime();
  return elapsed >= 0 && elapsed <= UNDO_WINDOW_MS;
}
```

- [ ] **Шаг 4: Запустить тест и убедиться, что он проходит**

Запустить: `npx vitest run src/domain/attempt-undo.test.ts`
Ожидаемо: PASS, 4 теста.

- [ ] **Шаг 5: Коммит**

```bash
git add src/domain/attempt-undo.ts src/domain/attempt-undo.test.ts
git commit -m "feat: define the first-attempt undo window"
```

### Задача 3.2: Серверная отмена попытки

**Файлы:**

- Изменить: `src/server/daily-plan.ts` (добавить `undoAttempt`)
- Изменить: `src/types/day.ts` (добавить `attemptedAt`)
- Создать: `src/app/api/day/attempt/undo/route.ts`

- [ ] **Шаг 1: Добавить серверную операцию**

В конец `src/server/daily-plan.ts`:

```ts
export async function undoAttempt(
  profile: Profile,
  input: { dayId: string; sourceId: string },
) {
  return serializableTransaction(async (db) => {
    const day = await db.dailyPlan.findFirst({
      where: { id: input.dayId, profileId: profile.id },
    });
    if (!day) throw new ApiError(404, "Учебный день не найден");
    const attempt = await db.dailyAttempt.findUnique({
      where: {
        dailyPlanId_contentSourceId: {
          dailyPlanId: day.id,
          contentSourceId: input.sourceId,
        },
      },
    });
    if (!attempt) throw new ApiError(404, "Попытка не найдена");
    if (
      !canUndoAttempt({
        attemptedAt: attempt.attemptedAt,
        now: new Date(),
        dayCompletedAt: day.completedAt,
      })
    )
      throw new ApiError(409, "Отменить ответ уже нельзя");
    await db.dailyAttempt.delete({ where: { id: attempt.id } });
    return { undone: true };
  });
}
```

с импортом `import { canUndoAttempt } from "@/domain/attempt-undo";`.

- [ ] **Шаг 2: Добавить маршрут**

Создать `src/app/api/day/attempt/undo/route.ts`:

```ts
import { z } from "zod";

import { apiErrorResponse, requireProfile } from "@/server/auth";
import { undoAttempt } from "@/server/daily-plan";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const input = z
      .object({ dayId: z.string().min(1), sourceId: z.string().min(1) })
      .parse(await request.json());
    return Response.json(
      await undoAttempt(await requireProfile(request), input),
    );
  } catch (error) {
    return apiErrorResponse(error);
  }
}
```

- [ ] **Шаг 3: Пробросить `attemptedAt` на клиент**

В `src/types/day.ts` дополнить `DayAttempt`:

```ts
export type DayAttempt = {
  id: string;
  contentSourceId: string;
  attemptedAt: string;
  answer: unknown;
  result: {/* без изменений */};
  correctFirstTry: boolean;
};
```

`hydrateDay` уже отдаёт записи Prisma целиком, поэтому поле приходит без правок сервера.

- [ ] **Шаг 4: Добавить `undo` в хук дня**

В `src/hooks/use-day.ts` добавить рядом с `attempt`:

```ts
const undo = useCallback(
  async (sourceId: string) => {
    if (!data) return;
    setBusyId(sourceId);
    try {
      await profileFetch("/api/day/attempt/undo", {
        method: "POST",
        body: JSON.stringify({ dayId: data.day.id, sourceId }),
      });
      await refresh();
    } catch (caught) {
      setError(
        caught instanceof Error ? caught.message : "Не удалось отменить ответ",
      );
    } finally {
      setBusyId(null);
    }
  },
  [data, refresh],
);
```

и вернуть `undo` из хука.

- [ ] **Шаг 5: Проверка**

Запустить: `npm run verify`
Ожидаемо: PASS.

Ручная проверка через API:

```bash
curl -s -X POST localhost:3000/api/day/attempt/undo \
  -H 'content-type: application/json' -H "x-profile-id: <ID>" \
  -d '{"dayId":"<DAY>","sourceId":"<SOURCE>"}'
```

Ожидаемо: `{"undone":true}` в пределах 15 секунд и
`{"error":"Отменить ответ уже нельзя"}` после.

- [ ] **Шаг 6: Коммит**

```bash
git add src/server/daily-plan.ts src/types/day.ts src/hooks/use-day.ts src/app/api/day/attempt/undo/route.ts
git commit -m "feat: allow undoing a first attempt within 15 seconds"
```

### Задача 3.3: Кнопка отмены в карточках

**Файлы:**

- Создать: `src/components/day/undo-attempt.tsx`
- Изменить: `src/components/day/grammar-exercise.tsx`, `vocabulary-card.tsx`,
  `conjugation-card.tsx`, `day-session.tsx`

- [ ] **Шаг 1: Написать компонент**

```tsx
"use client";

import { useEffect, useState } from "react";
import { Undo2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { UNDO_WINDOW_MS } from "@/domain/attempt-undo";

export function UndoAttempt({
  attemptedAt,
  busy,
  onUndo,
}: {
  attemptedAt: string;
  busy: boolean;
  onUndo: () => void;
}) {
  const [left, setLeft] = useState(() =>
    Math.ceil(
      (UNDO_WINDOW_MS - (Date.now() - new Date(attemptedAt).getTime())) / 1000,
    ),
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setLeft(
        Math.ceil(
          (UNDO_WINDOW_MS - (Date.now() - new Date(attemptedAt).getTime())) /
            1000,
        ),
      );
    }, 500);
    return () => window.clearInterval(timer);
  }, [attemptedAt]);

  if (left <= 0) return null;
  return (
    <Button
      variant="ghost"
      size="sm"
      className="text-muted-foreground"
      disabled={busy}
      onClick={onUndo}
    >
      <Undo2 />
      Отменить ответ · {left} с
    </Button>
  );
}
```

- [ ] **Шаг 2: Подключить в трёх карточках**

В `GrammarExerciseCard`, `VocabularyExercise` и `ConjugationExercise` добавить
необязательный проп `onUndo?: () => void` и рендерить сразу после блока результата:

```tsx
{
  attempt && onUndo && (
    <UndoAttempt
      attemptedAt={attempt.attemptedAt}
      busy={busy}
      onUndo={onUndo}
    />
  );
}
```

- [ ] **Шаг 3: Пробросить `undo` через сессию**

`undo` появился в `useDay` в задаче 3.2, но до карточек ещё не доходит. Добавить его в
пропы `DaySession` (`src/components/day/day-session.tsx`):

```tsx
export function DaySession({
  data,
  busyId,
  attempt,
  activity,
  undo,
}: {
  data: DayPayload;
  busyId: string | null;
  attempt: (sourceId: string, answer: string | string[]) => void;
  activity: (action: string, values?: Record<string, unknown>) => void;
  undo: (sourceId: string) => void;
}) {
```

и передать в три карточки упражнений `onUndo={() => undo(step.sourceId)}` рядом с
существующим `onSubmit`. В `src/app/practice/page.tsx` взять `undo` из хука и передать
дальше:

```tsx
const { data, error, busyId, attempt, activity, undo } = useDay();
```

```tsx
<DaySession
  data={data}
  busyId={busyId}
  attempt={attempt}
  activity={activity}
  undo={undo}
/>
```

- [ ] **Шаг 4: Проверка**

Запустить: `npm run verify`
Ожидаемо: PASS.
В браузере: ответить на MCQ, увидеть «Отменить ответ · 14 с», нажать — карточка снова
пустая, счётчик дня уменьшился на 1. Подождать 15 секунд — кнопка исчезает.

- [ ] **Шаг 5: Коммит**

```bash
git add src/components/day src/app/practice/page.tsx
git commit -m "feat: show an undo control on answered cards"
```

### Задача 3.4: Черновики ответов

**Файлы:**

- Создать: `src/lib/drafts.ts`, `src/lib/drafts.test.ts`, `src/hooks/use-draft.ts`
- Изменить: `src/components/day/grammar-exercise.tsx`, `vocabulary-card.tsx`,
  `conjugation-card.tsx`, `translate-to-card.tsx`

- [ ] **Шаг 1: Написать падающий тест ключа**

```ts
import { describe, expect, it } from "vitest";

import { draftKey } from "@/lib/drafts";

describe("drafts", () => {
  it("scopes a draft to profile, day and source", () => {
    expect(draftKey("p1", "d1", "a1-04")).toBe(
      "espanolDiario.draft.p1.d1.a1-04",
    );
  });

  it("keeps drafts of different profiles apart", () => {
    expect(draftKey("p1", "d1", "a1-04")).not.toBe(
      draftKey("p2", "d1", "a1-04"),
    );
  });
});
```

- [ ] **Шаг 2: Запустить тест и убедиться, что он падает**

Запустить: `npx vitest run src/lib/drafts.test.ts`
Ожидаемо: FAIL — модуль не найден.

- [ ] **Шаг 3: Написать хранилище черновиков**

`src/lib/drafts.ts`:

```ts
export function draftKey(profileId: string, dayId: string, sourceId: string) {
  return `espanolDiario.draft.${profileId}.${dayId}.${sourceId}`;
}

export function readDraft(key: string): string[] | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(key);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed.map(String) : null;
  } catch {
    return null;
  }
}

export function writeDraft(key: string, value: string[]) {
  if (typeof window === "undefined") return;
  if (value.every((item) => item.trim() === "")) {
    window.localStorage.removeItem(key);
    return;
  }
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function clearDraft(key: string) {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(key);
}
```

- [ ] **Шаг 4: Написать хук**

`src/hooks/use-draft.ts`:

```ts
"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { clearDraft, draftKey, readDraft, writeDraft } from "@/lib/drafts";

export function useDraft(
  profileId: string,
  dayId: string,
  sourceId: string,
  initial: string[],
) {
  const key = draftKey(profileId, dayId, sourceId);
  const [value, setValue] = useState(initial);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const stored = readDraft(key);
    if (stored && stored.length === initial.length) setValue(stored);
    // Читаем один раз на монтирование конкретного задания.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => writeDraft(key, value), 400);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [key, value]);

  const clear = useCallback(() => clearDraft(key), [key]);
  return { value, setValue, clear };
}
```

- [ ] **Шаг 5: Подключить в карточках**

В каждой из четырёх карточек заменить локальный `useState` на `useDraft`. Карточки получают
два новых обязательных пропа — `profileId: string` и `dayId: string`. `DaySession` уже
держит их в `data` и передаёт напрямую:

```tsx
          profileId={data.profile.id}
          dayId={data.day.id}
```

Пример для `VocabularyExercise`:

```tsx
const { value, setValue, clear } = useDraft(profileId, dayId, card.id, [""]);
const answer = value[0] ?? "";
function submit(event: FormEvent) {
  event.preventDefault();
  clear();
  onSubmit(answer);
}
```

Для `ConjugationExercise` начальное значение — `Array(6).fill("")`, для
`TranslateToCard` — `[progress.text]`.

- [ ] **Шаг 6: Запустить тесты и проверку**

Запустить: `npx vitest run src/lib/drafts.test.ts && npm run verify`
Ожидаемо: PASS.
В браузере: заполнить три из шести форм спряжения, уйти на `/theory`, вернуться — формы на
месте. Отправить ответ, перезагрузить — черновика нет.

- [ ] **Шаг 7: Коммит**

```bash
git add src/lib/drafts.ts src/lib/drafts.test.ts src/hooks/use-draft.ts src/components/day
git commit -m "feat: autosave answer drafts per profile, day and card"
```

### Задача 3.5: Панель испанских символов

**Файлы:**

- Создать: `src/components/day/spanish-keys.tsx`
- Изменить: `src/components/day/grammar-exercise.tsx`, `conjugation-card.tsx`,
  `translate-to-card.tsx`

- [ ] **Шаг 1: Написать компонент**

```tsx
"use client";

import type { RefObject } from "react";

import { Button } from "@/components/ui/button";

const CHARACTERS = ["á", "é", "í", "ó", "ú", "ü", "ñ", "¿", "¡"];

export function SpanishKeys({
  target,
  onInsert,
}: {
  target: RefObject<HTMLInputElement | HTMLTextAreaElement | null>;
  onInsert: (value: string) => void;
}) {
  function insert(character: string) {
    const field = target.current;
    if (!field) return;
    const start = field.selectionStart ?? field.value.length;
    const end = field.selectionEnd ?? start;
    const next =
      field.value.slice(0, start) + character + field.value.slice(end);
    onInsert(next);
    window.requestAnimationFrame(() => {
      field.focus();
      field.setSelectionRange(start + 1, start + 1);
    });
  }

  return (
    <div className="flex flex-wrap gap-1">
      {CHARACTERS.map((character) => (
        <Button
          key={character}
          type="button"
          variant="outline"
          size="sm"
          className="h-9 w-9 font-mono"
          aria-label={`Вставить ${character}`}
          onClick={() => insert(character)}
        >
          {character}
        </Button>
      ))}
      <span className="ml-2 self-center text-xs text-muted-foreground">
        ударение не влияет на проверку
      </span>
    </div>
  );
}
```

- [ ] **Шаг 2: Подключить к полям ввода**

В каждой карточке со свободным вводом добавить `useRef` на поле и отрисовать
`<SpanishKeys target={fieldRef} onInsert={(next) => setValue([next])} />` под полем.
Для спряжений панель привязывается к полю, которое сейчас в фокусе: хранить
`const [activeIndex, setActiveIndex] = useState(0)` и обновлять его в `onFocus` каждого
`Input`.

- [ ] **Шаг 3: Проверка**

Запустить: `npm run verify`
Ожидаемо: PASS.
В браузере: поставить курсор в середину слова, нажать `ñ` — символ вставился в позицию
курсора, фокус вернулся в поле, курсор за вставленным символом.

- [ ] **Шаг 4: Коммит**

```bash
git add src/components/day
git commit -m "feat: add a spanish character pad to free-text answers"
```

---

## Этап 4. Итоги, ошибки, повтор

### Задача 4.1: Пометка повторного контента

**Файлы:**

- Изменить: `src/server/daily-plan.ts` (`hydrateDay`)
- Изменить: `src/types/day.ts`
- Изменить: `src/components/day/step-shell.tsx`

- [ ] **Шаг 1: Считать прошлые показы**

В `hydrateDay` после загрузки `content` и `attempts` добавить:

```ts
const seen = await getDb().dailyAttempt.groupBy({
  by: ["contentSourceId"],
  where: {
    dailyPlan: { profileId: profile.id },
    contentSourceId: { in: [...ids] },
    dailyPlanId: { not: day.id },
  },
  _count: { contentSourceId: true },
});
```

и вернуть в payload:

```ts
    seenBefore: Object.fromEntries(
      seen.map((item) => [item.contentSourceId, item._count.contentSourceId]),
    ),
```

- [ ] **Шаг 2: Добавить поле в тип**

В `src/types/day.ts` в `DayPayload` добавить `seenBefore: Record<string, number>;`.

- [ ] **Шаг 3: Показать бейдж**

В `StepShell` добавить проп `seenBefore: number` и рядом с бейджем группы:

```tsx
{
  seenBefore > 0 && (
    <Badge variant="outline">Повтор · {seenBefore + 1}-й раз</Badge>
  );
}
```

`DaySession` передаёт `seenBefore={data.seenBefore[step.sourceId] ?? 0}`.

- [ ] **Шаг 4: Проверка**

Запустить: `npm run verify`
Ожидаемо: PASS.
В браузере: на чистой базе бейджа нет; после того как та же карточка выпадет второй раз,
появляется «Повтор · 2-й раз».

- [ ] **Шаг 5: Коммит**

```bash
git add src/server/daily-plan.ts src/types/day.ts src/components/day/step-shell.tsx src/components/day/day-session.tsx
git commit -m "feat: mark cards the profile has already seen"
```

### Задача 4.2: Тренировка ошибок

**Файлы:**

- Создать: `src/components/day/mistake-drill.tsx`
- Изменить: `src/components/day/day-analysis.tsx`

Тренировка **не** пишет на сервер: первая попытка уже зафиксирована и переписать её нельзя.
Это локальный прогон тех же карточек с самопроверкой.

- [ ] **Шаг 1: Написать компонент**

```tsx
"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";

import type { GrammarExercise, VocabularyCard } from "@/content/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { normalizeAnswer } from "@/domain/answer-normalization";

type DrillItem = { id: string; prompt: string; answer: string };

export function MistakeDrill({ items }: { items: DrillItem[] }) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const item = items[index];

  if (items.length === 0) return null;
  if (!item)
    return (
      <Card>
        <CardHeader>
          <CardTitle>Разбор пройден</CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            variant="outline"
            onClick={() => {
              setIndex(0);
              setAnswer("");
              setChecked(false);
            }}
          >
            <RotateCcw />
            Ещё раз
          </Button>
        </CardContent>
      </Card>
    );

  const correct = normalizeAnswer(answer) === normalizeAnswer(item.answer);
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Тренировка ошибок · {index + 1} из {items.length}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-xs text-muted-foreground">
          Тренировка не записывается в статистику — результат дня уже
          зафиксирован.
        </p>
        <p className="leading-7">{item.prompt}</p>
        <Input
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          placeholder="Ваш ответ"
          disabled={checked}
        />
        {checked ? (
          <>
            <p className={correct ? "text-emerald-700" : "text-destructive"}>
              {correct ? "Верно" : `Правильный ответ: ${item.answer}`}
            </p>
            <Button
              onClick={() => {
                setIndex(index + 1);
                setAnswer("");
                setChecked(false);
              }}
            >
              Дальше
            </Button>
          </>
        ) : (
          <Button onClick={() => setChecked(true)}>Проверить</Button>
        )}
      </CardContent>
    </Card>
  );
}
```

- [ ] **Шаг 2: Подключить в итогах дня**

В `DayAnalysis` собрать ошибочные карточки и отрисовать `MistakeDrill`:

```tsx
const drillItems = [
  ...data.day.plan.grammarIds,
  ...data.day.plan.theoryExerciseIds,
]
  .filter((id) => data.attempts[id] && !data.attempts[id].correctFirstTry)
  .map((id) => {
    const exercise = data.content[id] as GrammarExercise;
    return { id, prompt: exercise.prompt, answer: exercise.answer };
  })
  .concat(
    data.day.plan.vocabIds
      .filter((id) => data.attempts[id] && !data.attempts[id].correctFirstTry)
      .map((id) => {
        const card = data.content[id] as VocabularyCard;
        return {
          id,
          prompt: `Переведите: ${card.word}`,
          answer: card.translation,
        };
      }),
  );
```

и вставить `<MistakeDrill items={drillItems} />` после карточки «Что стоит подтянуть».

- [ ] **Шаг 3: Проверка**

Запустить: `npm run verify`
Ожидаемо: PASS.
В браузере: ошибиться в двух заданиях, открыть `/practice/summary`, пройти тренировку.
Обновить страницу — статистика дня не изменилась.

- [ ] **Шаг 4: Коммит**

```bash
git add src/components/day/mistake-drill.tsx src/components/day/day-analysis.tsx
git commit -m "feat: add a non-recorded drill over the day's mistakes"
```

### Задача 4.3: Ссылка на итоги из истории и с главной

**Файлы:**

- Изменить: `src/app/history/page.tsx`, `src/app/page.tsx`

- [ ] **Шаг 1: Кнопка итогов на главной**

В `src/app/page.tsx` заменить вторую кнопку героя на условную:

```tsx
{
  profile.placementDone && (
    <Button
      asChild
      size="lg"
      variant="outline"
      className="h-12 rounded-xl px-5"
    >
      <Link href="/practice/summary">Итоги сегодняшнего дня</Link>
    </Button>
  );
}
```

- [ ] **Шаг 2: Ссылка на сегодняшние итоги в истории**

В `HistoryDetail` добавить под заголовком:

```tsx
{
  day.localDate === new Date().toISOString().slice(0, 10) && (
    <Button asChild variant="outline" size="sm">
      <Link href="/practice/summary">Полный разбор дня</Link>
    </Button>
  );
}
```

- [ ] **Шаг 3: Проверка**

Запустить: `npm run verify`
Ожидаемо: PASS.

- [ ] **Шаг 4: Коммит**

```bash
git add src/app/page.tsx src/app/history/page.tsx
git commit -m "feat: link the day summary from home and history"
```

---

## Этап 5. Placement

### Задача 5.1: «Не знаю», «Назад» и экран результата

**Файлы:**

- Изменить: `src/app/placement/page.tsx`

Пороги `levelFromPlacementScore` не трогаются: «Не знаю» отправляется пустой строкой и
засчитывается как неверный ответ, поэтому шкала остаётся прежней.

- [ ] **Шаг 1: Заменить логику ответов**

```tsx
const [result, setResult] = useState<{
  score: number;
  level: CefrLevel;
} | null>(null);

async function finish(nextAnswers: string[]) {
  setBusy(true);
  try {
    const data = await profileFetch<{ score: number; level: CefrLevel }>(
      "/api/placement",
      { method: "POST", body: JSON.stringify({ answers: nextAnswers }) },
    );
    await refresh();
    setResult({ score: data.score, level: data.level });
  } catch (caught) {
    setError(caught instanceof Error ? caught.message : "Ошибка теста");
  } finally {
    setBusy(false);
  }
}

async function chooseAnswer(answer: string) {
  const next = [...answers.slice(0, index), answer];
  setAnswers(next);
  if (index + 1 === questions.length) await finish(next);
  else setIndex(index + 1);
}

function goBack() {
  if (index > 0) setIndex(index - 1);
}
```

`router` больше не используется для немедленного перехода — убрать `router.push("/practice")`
из `finish` (в `chooseManual` он остаётся).

- [ ] **Шаг 2: Добавить кнопки в карточку вопроса**

Под списком вариантов:

```tsx
<Button
  variant="ghost"
  className="justify-start text-muted-foreground"
  disabled={busy}
  onClick={() => chooseAnswer("")}
>
  Не знаю
</Button>;
{
  index > 0 && (
    <Button
      variant="ghost"
      size="sm"
      className="justify-start"
      disabled={busy}
      onClick={goBack}
    >
      <ArrowLeft />К предыдущему вопросу
    </Button>
  );
}
```

Прогресс исправить на `value={((index + 1) / questions.length) * 100}`.

- [ ] **Шаг 3: Добавить экран результата**

Перед веткой `!started` вставить:

```tsx
      {result ? (
        <Card className="border-primary/20">
          <CardHeader>
            <p className="eyebrow">Готово</p>
            <CardTitle className="text-3xl">
              Ваш уровень — {result.level}
            </CardTitle>
            <CardDescription>
              Верных ответов: {result.score} из {questions.length}. Уровень можно
              изменить в любой момент на странице прогресса.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button asChild className="h-11">
              <Link href="/practice">Начать первое занятие</Link>
            </Button>
            <Button asChild variant="outline" className="h-11">
              <Link href="/theory">Посмотреть теорию дня</Link>
            </Button>
          </CardContent>
        </Card>
      ) : !started ? (
```

и закрыть цепочку соответствующей скобкой в конце тернарного выражения.

- [ ] **Шаг 4: Проверка**

Запустить: `npm run verify`
Ожидаемо: PASS.

Ручная приёмка: пройти тест, нажимая «Не знаю» на всех 15 вопросах.
Ожидаемо: уровень A1, счёт 0 из 15, экран результата, переход в практику по кнопке.
Пройти повторно, вернуться на предыдущий вопрос и изменить ответ — счёт учитывает
изменённый ответ, а не оба.

- [ ] **Шаг 5: Коммит**

```bash
git add src/app/placement/page.tsx
git commit -m "feat: add skip, back and a result screen to the placement test"
```

---

## Этап 6. Озвучка и завершение

### Задача 6.1: Озвучка

**Файлы:**

- Создать: `src/lib/speech.ts`, `src/components/day/speak-button.tsx`
- Изменить: `src/components/day/vocabulary-card.tsx`, `conjugation-card.tsx`,
  `reading-card.tsx`

- [ ] **Шаг 1: Написать обёртку**

`src/lib/speech.ts`:

```ts
export function speechSupported() {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function speak(text: string, lang = "es-ES") {
  if (!speechSupported()) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
}
```

- [ ] **Шаг 2: Написать кнопку**

`src/components/day/speak-button.tsx`:

```tsx
"use client";

import { useEffect, useState } from "react";
import { Volume2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { speak, speechSupported } from "@/lib/speech";

export function SpeakButton({ text, label }: { text: string; label?: string }) {
  const [supported, setSupported] = useState(false);
  useEffect(() => setSupported(speechSupported()), []);
  if (!supported) return null;
  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      aria-label={label ?? `Произнести: ${text}`}
      title={label ?? "Произнести"}
      onClick={() => speak(text)}
    >
      <Volume2 />
    </Button>
  );
}
```

Состояние поддержки вычисляется в `useEffect`, чтобы серверная и клиентская разметка
совпали и не было ошибки гидратации.

- [ ] **Шаг 3: Подключить**

- `VocabularyExercise`: `<SpeakButton text={card.word} />` рядом с заголовком и
  `<SpeakButton text={card.context} />` у контекста.
- `ConjugationExercise`: `<SpeakButton text={...} />` у каждой правильной формы в разборе.
- `ReadingCard`: `<SpeakButton text={content.text} label="Прочитать текст вслух" />`
  рядом с заголовком.

- [ ] **Шаг 4: Проверка**

Запустить: `npm run verify`
Ожидаемо: PASS.
В браузере (Chrome/Safari): кнопка произносит слово по-испански. В окружении без
`speechSynthesis` кнопки нет и ошибок в консоли нет.

- [ ] **Шаг 5: Коммит**

```bash
git add src/lib/speech.ts src/components/day
git commit -m "feat: add spanish text-to-speech buttons"
```

### Задача 6.2: Единые состояния загрузки

**Файлы:**

- Изменить: `src/app/progress/page.tsx:68-73`, `src/app/theory/page.tsx:27-32`,
  `src/app/history/page.tsx`

- [ ] **Шаг 1: Заменить текстовые заглушки на скелетоны**

В каждом из трёх мест использовать ту же форму, что уже есть в практике:

```tsx
<main className="page-shell max-w-5xl">
  <div className="soft-panel h-40 animate-pulse" />
  <p className="text-muted-foreground">{error || "Загружаем данные…"}</p>
</main>
```

Для истории добавить такое же состояние, пока `days` не загружены (сейчас пустой массив
неотличим от «ещё грузится»): завести `const [loading, setLoading] = useState(true)` и
снимать его в `finally`.

- [ ] **Шаг 2: Проверка**

Запустить: `npm run verify`
Ожидаемо: PASS.
В браузере с троттлингом «Slow 3G»: на всех пяти страницах виден одинаковый скелетон,
а не голая строка текста.

- [ ] **Шаг 3: Коммит**

```bash
git add src/app/progress/page.tsx src/app/theory/page.tsx src/app/history/page.tsx
git commit -m "fix: unify loading states across pages"
```

### Задача 6.3: Синхронизация документации

**Файлы:**

- Изменить: `docs/UI_UX.md`, `docs/IMPLEMENTATION_STATUS.md`, `docs/README.md`,
  `docs/PRODUCT.md`

- [ ] **Шаг 1: Обновить UI/UX-контракт**

В `docs/UI_UX.md` в разделе «Информационная архитектура» заменить пункт 2 на:

```markdown
2. Практика — сессия дня: один шаг на экране, сохраняемая позиция, итоги на
   отдельном маршруте `/practice/summary`.
```

и добавить раздел:

```markdown
## Сессия дня

- Дневное ядро — около 19 шагов; бонусные карточки не влияют на завершение дня и серию.
- Позиция сессии хранится в query-параметре `step` и в `localStorage` под ключом
  `espanolDiario.session.<dayId>`; листание не является навигацией роутера.
- Ответ можно отменить в течение 15 секунд, пока день не завершён.
- Черновики свободного ввода хранятся в `localStorage` под ключом
  `espanolDiario.draft.<profileId>.<dayId>.<sourceId>` и стираются после отправки.
- Упражнение показывается за день ровно один раз: закрепление теории исключается из
  выбора практической грамматики.
```

- [ ] **Шаг 2: Обновить продуктовые правила**

В `docs/PRODUCT.md` в разделе «Правила отображения учебного прогресса» удалить пункт про
общее упражнение практики и теории (он перестал существовать) и добавить:

```markdown
- День завершается по обязательному ядру. Бонусные карточки и аудирование не блокируют
  завершение дня и обновление серии.
- Первая попытка может быть отменена в течение 15 секунд после отправки, пока день не
  завершён. После завершения дня отмена невозможна.
- Тренировка ошибок не создаёт серверных попыток и не влияет на статистику.
```

- [ ] **Шаг 3: Обновить статус и оглавление**

В `docs/IMPLEMENTATION_STATUS.md` заменить строку про нагрузку
(`10 MCQ, 10 fill, 10 слов, доступные спряжения (до 20)…`) на актуальную из таблицы Ф1
и добавить строку про сессию. В `docs/README.md` добавить пункт 11:

```markdown
11. [UX_IMPROVEMENT_PLAN.md](UX_IMPROVEMENT_PLAN.md) — план работы над пользовательским
    опытом: дневное ядро, пошаговая сессия, отмена ответа, черновики и итоги дня.
```

- [ ] **Шаг 4: Проверка**

Запустить: `npm run format:check`
Ожидаемо: PASS.

- [ ] **Шаг 5: Коммит**

```bash
git add docs
git commit -m "docs: sync ux contract with the session-based practice"
```

---

## Часть IV. Матрица приёмки

Прогоняется целиком после этапа 6, на двух профилях, в светлой и тёмной теме, на 375 px и
1440 px.

| #   | Сценарий                                                     | Ожидаемый результат                                          |
| --- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1   | Новый профиль → placement с ответом «Не знаю» на всё         | Уровень A1, экран результата со счётом 0/15                  |
| 2   | Возврат к предыдущему вопросу placement и смена ответа       | Учитывается только последний ответ                           |
| 3   | Первое открытие `/practice`                                  | Один шаг на экране, `Шаг 1 из 19`, счётчик дня `0/19`        |
| 4   | Полное прохождение ядра                                      | День завершён, серия +1, доступны итоги                      |
| 5   | Бонусные шаги не выполнены                                   | День всё равно завершён; бонус подписан `Бонус · N из M`     |
| 6   | Аудирование не отмечено                                      | День всё равно завершён                                      |
| 7   | Перезагрузка на седьмом шаге                                 | Открывается седьмой шаг                                      |
| 8   | Переход в теорию и обратно                                   | Открывается тот же шаг                                       |
| 9   | Ответ на MCQ → «Отменить» в течение 15 с                     | Попытка удалена, счётчик уменьшился                          |
| 10  | Ответ на MCQ → ожидание 20 с                                 | Кнопка отмены исчезла, попытка на месте                      |
| 11  | Ввод трёх форм спряжения → уход на другую страницу → возврат | Формы восстановлены                                          |
| 12  | Отправка ответа                                              | Черновик стёрт, после перезагрузки поле не восстанавливается |
| 13  | Вставка `ñ` в середину слова                                 | Символ в позиции курсора, фокус в поле                       |
| 14  | Одно и то же упражнение в теории и практике                  | Не встречается: в теории нет карточек с полем ответа         |
| 15  | Повторная выдача уже виденной карточки                       | Бейдж «Повтор · N-й раз»                                     |
| 16  | Тренировка ошибок в итогах                                   | Статистика дня не изменилась после прохождения               |
| 17  | Открытие дня, созданного до внедрения ядра                   | День требует ровно то, что требовал при создании             |
| 18  | Второй профиль в том же браузере                             | Своя сессия, своя позиция, свои черновики                    |
| 19  | Тёмная тема на главной                                       | Акцентные плитки тёплые, не серые                            |
| 20  | `TZ=America/Chicago`                                         | Дата в практике совпадает с датой в истории                  |
| 21  | Ширина 375 px, последний шаг сессии                          | Кнопки не перекрыты нижней навигацией                        |
| 22  | Клавиши `←`/`→` в поле ввода                                 | Двигают курсор, не листают шаги                              |

## Часть V. Что этот план сознательно не делает

- Не добавляет режимы «10 минут / 25 минут»: сначала нужно измерить, сколько занимает новое
  ядро на практике. Если и оно окажется длинным — это отдельная задача поверх `CORE_LOAD`.
- Не добавляет заморозку серии и не меняет правило её начисления, кроме перехода на ядро.
- Не показывает в истории сами ответы пользователя: это требует расширения `/api/history`
  и отдельного решения о том, сколько данных отдавать за раз.
- Не трогает алгоритм `adaptivePick`. Уменьшение нагрузки само возвращает антиповтору
  работоспособность; менять формулу до того, как контентный банк вырастет, преждевременно.
- Не вводит spaced repetition. Это следующий большой шаг, и его стоит делать уже на
  накопленной статистике, после расширения банка контентной веткой.
