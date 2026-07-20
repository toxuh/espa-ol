"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, CircleDashed } from "lucide-react";

import { ActivityCalendar } from "@/components/activity-calendar";
import { ProfileRequired } from "@/components/profile-required";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { profileFetch } from "@/lib/client-api";

type HistoryDay = {
  id: string;
  localDate: string;
  levelSnapshot: string;
  completedAt: string | null;
  solvedExercises: number;
  grammar: Category;
  theory: Category & { title: string | null };
  vocabulary: Category;
  conjugation: Category;
  readingDone: boolean;
  listening: { done: number; total: number };
  translateFromRating: "easy" | "mid" | "hard" | null;
  translateToPercent: number | null;
  topics: { topic: string; correct: number; total: number; explain: string }[];
};
type Category = {
  done: number;
  correct: number;
  total: number;
  accuracy: number | null;
};

export default function HistoryPage() {
  return (
    <ProfileRequired>
      <History />
    </ProfileRequired>
  );
}

function History() {
  const [days, setDays] = useState<HistoryDay[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [error, setError] = useState("");
  useEffect(() => {
    profileFetch<{ days: HistoryDay[] }>("/api/history")
      .then((data) => setDays(data.days))
      .catch((caught) => setError(caught.message));
  }, []);
  return (
    <main className="page-shell max-w-5xl">
      <section>
        <p className="eyebrow">Календарь занятий</p>
        <h1 className="page-heading mt-1">История</h1>
        <p className="page-lede mt-3">
          Возвращайтесь к любому дню и смотрите, что получилось хорошо, а что
          стоит повторить.
        </p>
      </section>
      {error && <p className="text-destructive">{error}</p>}
      {days.length === 0 ? (
        <p className="text-muted-foreground">
          Пока нет ни одного сгенерированного дня.
        </p>
      ) : (
        <>
          <Card>
            <CardHeader>
              <CardTitle>Текущий и предыдущий месяцы</CardTitle>
              <CardDescription>
                Зелёный день завершён полностью, оранжевый начат частично.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ActivityCalendar
                days={days}
                selected={selectedDate}
                onSelect={setSelectedDate}
              />
            </CardContent>
          </Card>
          <div className="grid gap-3">
            {days.map((day) => (
              <Card key={day.id}>
                <CardHeader className="gap-4 sm:grid-cols-[1fr_auto]">
                  <div className="flex min-w-0 items-center gap-3">
                    {day.completedAt ? (
                      <CheckCircle2 className="text-emerald-600" />
                    ) : (
                      <CircleDashed className="text-muted-foreground" />
                    )}
                    <div>
                      <CardTitle className="text-lg">
                        {new Date(day.localDate).toLocaleDateString("ru-RU", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                          timeZone: "UTC",
                        })}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Уровень {day.levelSnapshot} · решено заданий:{" "}
                        {day.solvedExercises}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:block sm:text-right">
                    {day.grammar.accuracy !== null ? (
                      <Badge>{day.grammar.accuracy}% грамматика</Badge>
                    ) : (
                      <Badge variant="outline">не завершён</Badge>
                    )}
                    <Button
                      className="mt-2"
                      size="sm"
                      variant="ghost"
                      onClick={() => setSelectedDate(day.localDate)}
                    >
                      Подробнее
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
          {selectedDate && (
            <HistoryDetail
              day={days.find((day) => day.localDate === selectedDate)}
            />
          )}
        </>
      )}
    </main>
  );
}

function HistoryDetail({ day }: { day?: HistoryDay }) {
  if (!day) return null;
  const weak = day.topics.filter((topic) => topic.correct < topic.total);
  const good = day.topics.filter((topic) => topic.correct === topic.total);
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {new Date(`${day.localDate}T00:00:00.000Z`).toLocaleDateString(
            "ru-RU",
            { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" },
          )}
        </CardTitle>
        <CardDescription>
          {day.completedAt
            ? "День завершён полностью"
            : "День выполнен частично"}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid gap-2 text-sm md:grid-cols-2">
          <p>
            Грамматика:{" "}
            <b>
              {day.grammar.correct}/{day.grammar.done}
            </b>
          </p>
          <p>
            Закрепление теории:{" "}
            <b>
              {day.theory.done}/{day.theory.total}
            </b>
          </p>
          <p>
            Слова:{" "}
            <b>
              {day.vocabulary.correct}/{day.vocabulary.done}
            </b>
          </p>
          <p>
            Спряжения 6/6:{" "}
            <b>
              {day.conjugation.correct}/{day.conjugation.done}
            </b>
          </p>
          <p>
            Чтение: <b>{day.readingDone ? "готово" : "—"}</b>
          </p>
          <p>
            Аудирование:{" "}
            <b>
              {day.listening.done}/{day.listening.total}
            </b>
          </p>
          <p>
            Перевод ES → RU: <b>{ratingLabel(day.translateFromRating)}</b>
          </p>
          <p>
            Перевод RU → ES:{" "}
            <b>
              {day.translateToPercent === null
                ? "—"
                : `${day.translateToPercent}%`}
            </b>
          </p>
        </div>
        {good.length > 0 && (
          <div>
            <h3 className="font-medium text-emerald-700">Хорошо получилось</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {good.map((topic) => (
                <Badge key={topic.topic} variant="secondary">
                  {topic.topic}
                </Badge>
              ))}
            </div>
          </div>
        )}
        {weak.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-medium text-destructive">Стоит повторить</h3>
            {weak.map((topic) => (
              <div
                key={topic.topic}
                className="rounded-lg bg-muted p-3 text-sm"
              >
                <p className="font-medium">
                  {topic.topic} — {topic.correct}/{topic.total}
                </p>
                <div
                  className="mt-2 leading-6"
                  dangerouslySetInnerHTML={{ __html: topic.explain }}
                />
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function ratingLabel(rating: HistoryDay["translateFromRating"]) {
  if (rating === "easy") return "легко";
  if (rating === "mid") return "нормально";
  if (rating === "hard") return "сложно";
  return "—";
}
