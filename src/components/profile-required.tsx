"use client";

import Link from "next/link";

import { useProfile } from "@/components/profile-provider";
import { Button } from "@/components/ui/button";

export function ProfileRequired({
  children,
  requireLevel = true,
}: {
  children: React.ReactNode;
  requireLevel?: boolean;
}) {
  const { ready, profile } = useProfile();
  if (!ready)
    return (
      <main className="page-shell">
        <div className="soft-panel h-40 animate-pulse" />
      </main>
    );
  if (!profile)
    return (
      <Empty
        text="Сначала выберите семейный профиль."
        href="/"
        label="К профилям"
      />
    );
  if (requireLevel && !profile.placementDone)
    return (
      <Empty
        text="Сначала определите свой уровень."
        href="/placement"
        label="Выбрать уровень"
      />
    );
  return children;
}

function Empty({
  text,
  href,
  label,
}: {
  text: string;
  href: string;
  label: string;
}) {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-xl flex-col items-center justify-center gap-5 px-6 text-center">
      <span className="grid size-14 place-items-center rounded-2xl bg-primary text-2xl font-semibold text-primary-foreground">
        Ñ
      </span>
      <div>
        <h1 className="text-2xl font-semibold">Нужен ещё один шаг</h1>
        <p className="mt-2 text-muted-foreground">{text}</p>
      </div>
      <Button className="h-11" asChild>
        <Link href={href}>{label}</Link>
      </Button>
    </main>
  );
}
