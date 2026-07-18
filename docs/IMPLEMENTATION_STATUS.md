# Текущий статус реализации

Обновлено: 18 июля 2026 года.

## Готовый фундамент

- Next.js 16 App Router, React 19, TypeScript и Tailwind CSS 4.
- shadcn/ui с Radix primitives и базовыми компонентами `Button`, `Card`, `Badge`, `Separator`.
- Исправленная конфигурация Geist для Tailwind CSS 4.
- Prisma 7 с PostgreSQL driver adapter и ленивой инициализацией клиента.
- Первая модель `Profile` и применённая migration `init`.
- Zod-валидация `DATABASE_URL`.
- Динамический `/api/health`, проверяющий доступность PostgreSQL.
- Development compose для локального PostgreSQL.
- Production Dockerfile со standalone output и непривилегированным пользователем.
- Production compose для app, PostgreSQL и существующей external-сети Traefik.
- ESLint, TypeScript check, Prettier, Vitest и общий `npm run verify`.
- Первый unit-тест правила нормализации ответа из прототипа.
- Начальная страница, подтверждающая готовность scaffold без ложного заявления о готовом продукте.

## Проверено

- Prisma migration создана и применена к PostgreSQL 17.
- Prisma schema validation проходит.
- Format, lint, typecheck и unit tests проходят.
- Next.js production build проходит.
- Production Docker Compose config валиден с `.env.example`.
- npm production audit: 0 известных уязвимостей.
- Browser smoke-test: главная страница отображается без Next.js error overlay.
- Healthcheck возвращает `200` и `database: reachable` при работающей БД.

## Ещё не реализовано

- создание и выбор семейных профилей;
- placement-тест и смена уровня;
- перенос полного банка контента в Prisma seed;
- генерация дневного плана;
- учебные упражнения и серверная фиксация попыток;
- теория, переводы, чтение и аудирование;
- история, статистика и streak;
- финальные Traefik labels для реального NAS;
- backup/restore workflow;
- production deployment.

## Следующий рекомендуемый срез

Вертикальный срез семейных профилей:

1. Создание заранее заданных профилей через seed.
2. API чтения активных профилей.
3. Выбор профиля по имени.
4. Сохранение `profileId` в `localStorage` и синхронизация с несекретной cookie.
5. Постоянный индикатор активного профиля и действие смены.
6. Integration tests изоляции данных двух профилей.

Этот срез нужно завершить до placement и дневных планов, поскольку все последующие данные обязаны иметь владельца.
