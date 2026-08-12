import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";
import { projects } from "@/content/projects";
import { siteUrl } from "@/lib/seo";

const staticPaths = ["/", "/about", "/projects", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPaths = projects.map((p) => `/projects/${p.slug}`);
  const paths = [...staticPaths, ...projectPaths];

  return paths.map((path) => ({
    url: `${siteUrl}${getPathname({ locale: routing.defaultLocale, href: path })}`,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [
          locale,
          `${siteUrl}${getPathname({ locale, href: path })}`,
        ])
      ),
    },
  }));
}
