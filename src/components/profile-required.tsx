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
    return <p className="p-8 text-muted-foreground">Загрузка профиля…</p>;
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
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center gap-4 px-6 text-center">
      <p>{text}</p>
      <Button asChild>
        <Link href={href}>{label}</Link>
      </Button>
    </main>
  );
}
