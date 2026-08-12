import { redirect } from "next/navigation";
import { routing } from "@/i18n/routing";

// Reached only for paths outside any /[locale] segment (e.g. malformed URLs).
export default function RootNotFound() {
  redirect(`/${routing.defaultLocale}`);
}
