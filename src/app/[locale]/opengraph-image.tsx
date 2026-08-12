import { ImageResponse } from "next/og";
import { routing } from "@/i18n/routing";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const copy: Record<string, { kicker: string; title: string }> = {
  it: { kicker: "Sviluppatore software", title: "Il tuo nome" },
  en: { kicker: "Software Developer", title: "Your name" },
};

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { kicker, title } = copy[locale] ?? copy.it;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 20,
          padding: 96,
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, #4f46e522 0%, transparent 50%)",
        }}
      >
        <div
          style={{
            fontFamily: "monospace",
            fontSize: 32,
            color: "#818cf8",
          }}
        >
          {kicker}
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            color: "#f5f5f5",
            letterSpacing: -1.5,
          }}
        >
          {title}
        </div>
      </div>
    ),
    { ...size }
  );
}
