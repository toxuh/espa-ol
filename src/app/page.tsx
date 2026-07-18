import { ArrowRight, Database, Server, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const foundations = [
  {
    title: "Семейные профили",
    description: "Выбор профиля по имени и отдельный прогресс в PostgreSQL.",
    icon: Users,
  },
  {
    title: "Учебное ядро",
    description: "Дневные планы, адаптивные повторы и история занятий.",
    icon: Database,
  },
  {
    title: "Домашний сервер",
    description: "Docker-развёртывание на Synology за существующим Traefik.",
    icon: Server,
  },
] as const;

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center gap-8 px-6 py-16">
      <section className="space-y-5">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="secondary">Scaffold готов</Badge>
          <span className="text-sm text-muted-foreground">A1–C1</span>
        </div>
        <div className="max-w-3xl space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            🇪🇸 Español Diario
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            Семейный тренажёр для ежедневной практики испанского. Сейчас собран
            технический фундамент; перенос функций HTML-прототипа будет идти
            отдельными проверяемыми срезами.
          </p>
        </div>
        <Button disabled>
          Выбрать профиль
          <ArrowRight />
        </Button>
      </section>

      <Separator />

      <section className="grid gap-4 md:grid-cols-3">
        {foundations.map(({ title, description, icon: Icon }) => (
          <Card key={title}>
            <CardHeader>
              <Icon className="size-5 text-muted-foreground" />
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
