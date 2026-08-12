import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { TechStack } from "@/components/TechStack";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/content/projects";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const featured = projects.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-20 px-6 py-16 sm:py-24">
      <section className="flex flex-col gap-5">
        <p className="font-mono text-sm text-accent">{t("hero.kicker")}</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {t("hero.title")}
        </h1>
        <p className="max-w-xl text-muted">{t("hero.subtitle")}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/projects"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {t("hero.ctaProjects")}
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent"
          >
            {t("hero.ctaContact")}
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          {t("stack.title")}
        </h2>
        <TechStack />
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold">{t("projectsSection.title")}</h2>
          <p className="text-sm text-muted">{t("projectsSection.subtitle")}</p>
        </div>
        <ProjectGrid projects={featured} />
        <Link
          href="/projects"
          className="self-start text-sm font-medium text-accent"
        >
          {t("projectsSection.viewAll")} →
        </Link>
      </section>
    </div>
  );
}
