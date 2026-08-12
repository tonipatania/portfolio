import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/**
 * Builds `alternates.languages` entries so search engines can link the
 * it/en versions of the same page together (hreflang).
 */
export function localizedAlternates(href: string) {
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [locale, getPathname({ locale, href })])
  );

  return {
    languages: {
      ...languages,
      "x-default": getPathname({ locale: routing.defaultLocale, href }),
    },
  };
}
