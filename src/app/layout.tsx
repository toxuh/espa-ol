import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { AppHeader } from "@/components/app-header";
import { ProfileProvider } from "@/components/profile-provider";

export const metadata: Metadata = {
  title: "Español Diario",
  description: "Семейный тренажёр для ежедневной практики испанского",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className={`${GeistSans.className} flex min-h-full flex-col`}>
        <ProfileProvider>
          <AppHeader />
          {children}
        </ProfileProvider>
      </body>
    </html>
  );
}
