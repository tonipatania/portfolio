import type { LocalizedText } from "@/types/project";

export type StackCategory = {
  label: LocalizedText;
  items: string[];
};

// NOTE: placeholder — allinea alle tue competenze reali prima del deploy.
export const stackCategories: StackCategory[] = [
  {
    label: { it: "Linguaggi", en: "Languages" },
    items: ["TypeScript", "JavaScript", "Python"],
  },
  {
    label: { it: "Framework & librerie", en: "Frameworks & libraries" },
    items: ["Next.js", "React", "Node.js"],
  },
  {
    label: { it: "Infrastruttura & strumenti", en: "Infrastructure & tools" },
    items: ["Vercel", "Docker", "PostgreSQL", "Git"],
  },
];
