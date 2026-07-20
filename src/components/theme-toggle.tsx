"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="rounded-full"
      aria-label="Переключить цветовую тему"
      title="Переключить цветовую тему"
      onClick={toggleTheme}
    >
      <Sun className="hidden dark:block" />
      <MoonStar className="block dark:hidden" />
    </Button>
  );
}
