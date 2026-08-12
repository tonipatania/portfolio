import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { TechStack } from "@/components/TechStack";
import { localizedAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: t("pageTitle"),
    description: t("intro"),
    alternates: localizedAlternates("/about"),
    openGraph: {
      title: t("pageTitle"),
      description: t("intro"),
      url: "/about",
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("about");
  const cvHref = locale === "it" ? "/cv/cv-it.pdf" : "/cv/cv-en.pdf";

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-12 px-6 py-16 sm:py-24">
      <header className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          {t("pageTitle")}
        </h1>
        <p className="max-w-xl leading-relaxed text-muted">{t("intro")}</p>
        <a
          href={cvHref}
          download
          className="self-start rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          {t("downloadCv")} ↓
        </a>
      </header>

      <section className="flex flex-col gap-6">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          {t("skillsTitle")}
        </h2>
        <TechStack />
      </section>
    </div>
  );
}
