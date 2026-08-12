import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/types/project";
import type { Locale } from "@/i18n/routing";

export async function ProjectCard({ project }: { project: Project }) {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("projects.card");

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border transition-colors hover:border-accent"
    >
      <div className="relative aspect-video overflow-hidden bg-foreground/5">
        <Image
          src={project.coverImage}
          alt={project.title[locale]}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-semibold">{project.title[locale]}</h3>
        <p className="flex-1 text-sm text-muted">{project.tagline[locale]}</p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-2 py-0.5 font-mono text-[11px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
        <span className="mt-2 text-sm font-medium text-accent">
          {t("viewProject")} →
        </span>
      </div>
    </Link>
  );
}
