import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactForm } from "@/components/ContactForm";
import { localizedAlternates } from "@/lib/seo";

const CONTACT_EMAIL = "tuaemail@esempio.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return {
    title: t("pageTitle"),
    description: t("pageSubtitle"),
    alternates: localizedAlternates("/contact"),
    openGraph: {
      title: t("pageTitle"),
      description: t("pageSubtitle"),
      url: "/contact",
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("contact");

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-10 px-6 py-16 sm:py-24">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          {t("pageTitle")}
        </h1>
        <p className="text-muted">{t("pageSubtitle")}</p>
      </div>

      <ContactForm />

      <p className="text-sm text-muted">
        {t("directEmail")}{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent">
          {CONTACT_EMAIL}
        </a>
      </p>
    </div>
  );
}
