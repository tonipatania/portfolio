import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/content/projects";
import { localizedAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });

  return {
    title: t("pageTitle"),
    description: t("pageSubtitle"),
    alternates: localizedAlternates("/projects"),
    openGraph: {
      title: t("pageTitle"),
      description: t("pageSubtitle"),
      url: "/projects",
    },
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("projects");

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16 sm:py-24">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          {t("pageTitle")}
        </h1>
        <p className="max-w-xl text-muted">{t("pageSubtitle")}</p>
      </div>
      <h2 className="sr-only">{t("listHeading")}</h2>
      <ProjectGrid projects={projects} />
    </div>
  );
}
