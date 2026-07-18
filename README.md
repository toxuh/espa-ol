# Español Diario

Семейный веб-тренажёр для ежедневного изучения испанского языка.

Исходный автономный HTML-прототип хранится локально в игнорируемой папке `temp/` и остаётся эталоном функционального поведения. Его учебный контент перенесён в воспроизводимый seed, а основной пользовательский цикл уже работает на Next.js и PostgreSQL.

Цель проекта — перенести существующий функционал без потерь в нормальное self-hosted приложение:

- Next.js с App Router и TypeScript;
- Tailwind CSS и shadcn/ui;
- Prisma и PostgreSQL;
- Docker Compose;
- домашний NAS Synology DS923+ за существующим Traefik;
- несколько семейных профилей без полноценной системы аутентификации.

На первом этапе дизайн прототипа можно сохранить. Приоритет — функциональный паритет, нормальная модель данных, разделение пользователей и надёжное хранение прогресса.

## Документация

- [Индекс документации](docs/README.md)
- [Продукт и границы проекта](docs/PRODUCT.md)
- [Текущее поведение HTML-прототипа](docs/CURRENT_PROTOTYPE.md)
- [Целевая архитектура](docs/TARGET_ARCHITECTURE.md)
- [Модель данных](docs/DATA_MODEL.md)
- [План миграции и критерии паритета](docs/MIGRATION_PLAN.md)
- [Развёртывание на Synology](docs/DEPLOYMENT.md)
- [Открытые решения](docs/OPEN_DECISIONS.md)

## Статус

| Область                                 | Статус                                               |
| --------------------------------------- | ---------------------------------------------------- |
| HTML-прототип                           | существует и описан                                  |
| Целевая архитектура                     | спроектирована на уровне документации                |
| Next.js + Tailwind + shadcn/ui scaffold | готов                                                |
| Prisma/PostgreSQL                       | предметная схема, миграции и seed готовы             |
| Учебный цикл                            | профили, placement, день, теория, история и прогресс |
| Docker Compose                          | development DB и production app/db/migrator готовы   |
| Развёртывание на NAS                    | не выполнено                                         |

Точные ограничения и ещё не закрытые production-пункты перечислены в `docs/IMPLEMENTATION_STATUS.md`.

## Локальный запуск

```bash
cp .env.example .env
docker compose up -d db
npm install
npm run db:deploy
npm run db:seed
npm run dev
```

Приложение будет доступно на `http://localhost:3000`, healthcheck — на `http://localhost:3000/api/health`.

## Проверка

```bash
npm run verify
npm run docker:config
```
