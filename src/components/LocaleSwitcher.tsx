"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";

const localeLabels: Record<string, string> = {
  it: "IT",
  en: "EN",
};

export function LocaleSwitcher() {
  const t = useTranslations("header");
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-border p-0.5"
      role="group"
      aria-label={t("switchLanguage")}
    >
      {routing.locales.map((locale) => {
        const isActive = params.locale === locale;
        return (
          <button
            key={locale}
            type="button"
            onClick={() =>
              router.replace(
                // @ts-expect-error -- pathname is dynamically inferred from the current route
                { pathname, params },
                { locale }
              )
            }
            aria-current={isActive ? "true" : undefined}
            className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
              isActive
                ? "bg-foreground text-background"
                : "text-muted hover:text-foreground"
            }`}
          >
            {localeLabels[locale]}
          </button>
        );
      })}
    </div>
  );
}
