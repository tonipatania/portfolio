import { getTranslations } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-4xl flex-col gap-1 px-6 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} — {t("rights")}
        </p>
        <p>{t("builtWith")}</p>
      </div>
    </footer>
  );
}
