"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [status, setStatus] = useState<Status>("idle");
  const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formEndpoint) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        event.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium">
          {t("name")}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder={t("namePlaceholder")}
          className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium">
          {t("email")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder={t("emailPlaceholder")}
          className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={t("messagePlaceholder")}
          className="resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="self-start rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "sending" ? t("sending") : t("submit")}
      </button>

      <div role="status" aria-live="polite">
        {status === "success" && (
          <p className="text-sm text-emerald-600 dark:text-emerald-400">
            {t("success")}
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600 dark:text-red-400">{t("error")}</p>
        )}
      </div>
    </form>
  );
}
