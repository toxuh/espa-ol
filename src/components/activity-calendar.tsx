type CalendarDay = {
  localDate: string;
  completedAt: string | null;
};

const monthFormatter = new Intl.DateTimeFormat("ru-RU", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function dateKey(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export function ActivityCalendar({
  days,
  selected,
  onSelect,
}: {
  days: CalendarDay[];
  selected?: string | null;
  onSelect?: (date: string) => void;
}) {
  const byDate = new Map(days.map((day) => [day.localDate.slice(0, 10), day]));
  const now = new Date();
  const months = [1, 0].map(
    (back) => new Date(Date.UTC(now.getFullYear(), now.getMonth() - back, 1)),
  );

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {months.map((month) => {
        const year = month.getUTCFullYear();
        const monthIndex = month.getUTCMonth();
        const firstWeekday = (month.getUTCDay() + 6) % 7;
        const dayCount = new Date(
          Date.UTC(year, monthIndex + 1, 0),
        ).getUTCDate();
        const cells = [
          ...Array.from({ length: firstWeekday }, () => null),
          ...Array.from({ length: dayCount }, (_, index) => index + 1),
        ];
        return (
          <section key={`${year}-${monthIndex}`}>
            <h3 className="mb-3 font-heading font-semibold capitalize">
              {monthFormatter.format(month)}
            </h3>
            <div className="grid grid-cols-7 gap-1 text-center text-xs text-muted-foreground">
              {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((weekday) => (
                <span key={weekday} className="py-1">
                  {weekday}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
              {cells.map((day, index) => {
                if (day === null)
                  return (
                    <span key={`empty-${index}`} className="aspect-square" />
                  );
                const key = dateKey(year, monthIndex, day);
                const activity = byDate.get(key);
                const className = activity
                  ? activity.completedAt
                    ? "border-emerald-500 bg-emerald-100 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-100"
                    : "border-amber-400 bg-amber-100 text-amber-900 dark:bg-amber-950/40 dark:text-amber-100"
                  : "border-transparent text-muted-foreground";
                return (
                  <button
                    key={key}
                    type="button"
                    disabled={!activity || !onSelect}
                    aria-label={activity ? `Открыть занятия за ${key}` : key}
                    className={`aspect-square min-h-9 rounded-lg border font-mono text-xs transition-transform enabled:hover:-translate-y-0.5 sm:text-sm ${className} ${selected === key ? "ring-2 ring-primary ring-offset-2 ring-offset-card" : ""}`}
                    onClick={() => activity && onSelect?.(key)}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
