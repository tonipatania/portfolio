"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function LocaleNotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="mx-auto flex max-w-xl flex-col items-start gap-4 px-6 py-24">
      <h1 className="text-2xl font-semibold">{t("title")}</h1>
      <p className="text-muted">{t("description")}</p>
      <Link href="/" className="text-sm font-medium text-accent">
        ← {t("cta")}
      </Link>
    </div>
  );
}
