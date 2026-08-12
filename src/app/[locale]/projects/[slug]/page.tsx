import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { projects, getProjectBySlug } from "@/content/projects";
import { localizedAlternates } from "@/lib/seo";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const localeKey = locale as Locale;

  return {
    title: project.title[localeKey],
    description: project.tagline[localeKey],
    alternates: localizedAlternates(`/projects/${slug}`),
    openGraph: {
      title: project.title[localeKey],
      description: project.tagline[localeKey],
      url: `/projects/${slug}`,
      images: [{ url: project.coverImage }],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const localeKey = locale as Locale;
  const t = await getTranslations("projects.detail");

  return (
    <article className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-16 sm:py-24">
      <Link href="/projects" className="text-sm text-muted hover:text-foreground">
        ← {t("backToProjects")}
      </Link>

      <header className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          {project.title[localeKey]}
        </h1>
        <p className="text-lg text-muted">{project.tagline[localeKey]}</p>
      </header>

      <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-foreground/5">
        <Image
          src={project.coverImage}
          alt={project.title[localeKey]}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {t("liveDemo")} ↗
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent"
          >
            {t("sourceCode")} ↗
          </a>
        )}
      </div>

      <section className="flex flex-col gap-2">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          {t("problem")}
        </h2>
        <p className="leading-relaxed">{project.problem[localeKey]}</p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          {t("techChoices")}
        </h2>
        <p className="leading-relaxed">{project.techChoices[localeKey]}</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
          {t("stackUsed")}
        </h2>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </article>
  );
}
