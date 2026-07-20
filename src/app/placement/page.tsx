"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { CEFR_LEVELS, type CefrLevel } from "@/content/types";
import { ProfileRequired } from "@/components/profile-required";
import { useProfile } from "@/components/profile-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { profileFetch } from "@/lib/client-api";

type Question = {
  id: string;
  level: CefrLevel;
  prompt: string;
  options: string[];
};

export default function PlacementPage() {
  return (
    <ProfileRequired requireLevel={false}>
      <Placement />
    </ProfileRequired>
  );
}

function Placement() {
  const router = useRouter();
  const { refresh } = useProfile();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [started, setStarted] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    profileFetch<{ questions: Question[] }>("/api/placement")
      .then((data) => setQuestions(data.questions))
      .catch((caught) => setError(caught.message));
  }, []);

  async function finish(nextAnswers: string[]) {
    setBusy(true);
    try {
      await profileFetch("/api/placement", {
        method: "POST",
        body: JSON.stringify({ answers: nextAnswers }),
      });
      await refresh();
      router.push("/practice");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Ошибка теста");
      setBusy(false);
    }
  }

  async function chooseAnswer(answer: string) {
    const next = [...answers, answer];
    setAnswers(next);
    if (index + 1 === questions.length) await finish(next);
    else setIndex(index + 1);
  }

  async function chooseManual(level: CefrLevel) {
    setBusy(true);
    try {
      await profileFetch("/api/profile", {
        method: "PATCH",
        body: JSON.stringify({ level }),
      });
      await refresh();
      router.push("/practice");
    } catch (caught) {
      setError(
        caught instanceof Error ? caught.message : "Ошибка выбора уровня",
      );
      setBusy(false);
    }
  }

  return (
    <main className="page-shell max-w-3xl">
      <section>
        <p className="eyebrow">A1–C1</p>
        <h1 className="page-heading mt-1">Найдём ваш уровень</h1>
        <p className="page-lede mt-3">
          Пройдите короткий тест или выберите уровень сами. Решение всегда можно
          изменить позже.
        </p>
      </section>
      {!started ? (
        <>
          <Card>
            <CardHeader>
              <CardTitle>Тест из 15 вопросов</CardTitle>
              <CardDescription>
                По три вопроса каждого уровня. Итог считается по тем же порогам,
                что и в прототипе.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="h-11 w-full sm:w-auto"
                onClick={() => setStarted(true)}
                disabled={questions.length !== 15}
              >
                Начать тест
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Или выбрать вручную</CardTitle>
              <CardDescription>
                Уровень позже можно изменить тем же способом.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-5 gap-2">
              {CEFR_LEVELS.map((level) => (
                <Button
                  key={level}
                  variant="outline"
                  className="h-11"
                  disabled={busy}
                  onClick={() => chooseManual(level)}
                >
                  {level}
                </Button>
              ))}
            </CardContent>
          </Card>
        </>
      ) : questions[index] ? (
        <Card className="border-primary/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge>
                {index + 1} / {questions.length}
              </Badge>
              <span className="text-sm text-muted-foreground">
                блок {questions[index].level}
              </span>
            </div>
            <Progress value={(index / questions.length) * 100} />
            <CardTitle className="pt-3 text-lg sm:text-xl">
              {questions[index].prompt}
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            {questions[index].options.map((option) => (
              <Button
                key={option}
                variant="outline"
                className="h-auto min-h-11 justify-start whitespace-normal px-4 py-3 text-left"
                disabled={busy}
                onClick={() => chooseAnswer(option)}
              >
                {option}
              </Button>
            ))}
          </CardContent>
        </Card>
      ) : (
        <p>Загрузка вопросов…</p>
      )}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </main>
  );
}
