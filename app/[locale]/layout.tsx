import { CursorGlow, ScrollProgress } from "@/components/LayoutEffects";
import { Navbar } from "@/components/Navbar";
import { AnimatePresence } from "framer-motion";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: "en" | "id" }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="relative min-h-screen selection:bg-purple-accent selection:text-white">
        <div className="fixed inset-0 bg-navy-900 z-[-2]" />
        <div className="fixed inset-0 bg-grid z-[-1]" />

        <ScrollProgress />
        <CursorGlow />
        <Navbar />

        <main>
          <AnimatePresence mode="wait">{children}</AnimatePresence>
        </main>
      </div>
    </NextIntlClientProvider>
  );
}
