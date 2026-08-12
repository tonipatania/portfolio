import { getLocale } from "next-intl/server";
import { stackCategories } from "@/content/stack";
import type { Locale } from "@/i18n/routing";

export async function TechStack() {
  const locale = (await getLocale()) as Locale;

  return (
    <dl className="grid gap-6 sm:grid-cols-3">
      {stackCategories.map((category) => (
        <div key={category.label.it}>
          <dt className="text-xs font-medium uppercase tracking-wide text-muted">
            {category.label[locale]}
          </dt>
          <dd className="mt-2 flex flex-wrap gap-1.5">
            {category.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border px-2.5 py-1 font-mono text-xs"
              >
                {item}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
