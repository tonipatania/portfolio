import type { Project } from "@/types/project";

// NOTE: contenuti placeholder — sostituisci ogni campo con i dati reali dei
// tuoi progetti prima del deploy. Segui lo schema della skill portfolio-content:
// problema -> scelte tecniche -> difficoltà risolta -> link.
export const projects: Project[] = [
  {
    slug: "progetto-uno",
    title: { it: "[Nome progetto 1]", en: "[Project 1 name]" },
    tagline: {
      it: "[Una frase: cosa fa e per chi]",
      en: "[One sentence: what it does and for whom]",
    },
    problem: {
      it: "[Descrivi il problema concreto che il progetto risolve, non partire dallo stack tecnico]",
      en: "[Describe the concrete problem this project solves, don't start from the tech stack]",
    },
    techChoices: {
      it: "[2-3 decisioni tecniche non ovvie e perché le hai prese]",
      en: "[2-3 non-obvious technical decisions and why you made them]",
    },
    stack: ["Next.js", "TypeScript"],
    coverImage: "/images/projects/placeholder.svg",
    liveUrl: undefined,
    githubUrl: undefined,
    featured: true,
  },
  {
    slug: "progetto-due",
    title: { it: "[Nome progetto 2]", en: "[Project 2 name]" },
    tagline: {
      it: "[Una frase: cosa fa e per chi]",
      en: "[One sentence: what it does and for whom]",
    },
    problem: {
      it: "[Descrivi il problema concreto che il progetto risolve]",
      en: "[Describe the concrete problem this project solves]",
    },
    techChoices: {
      it: "[2-3 decisioni tecniche non ovvie e perché le hai prese]",
      en: "[2-3 non-obvious technical decisions and why you made them]",
    },
    stack: ["Node.js", "PostgreSQL"],
    coverImage: "/images/projects/placeholder.svg",
    liveUrl: undefined,
    githubUrl: undefined,
    featured: true,
  },
  {
    slug: "progetto-tre",
    title: { it: "[Nome progetto 3]", en: "[Project 3 name]" },
    tagline: {
      it: "[Una frase: cosa fa e per chi]",
      en: "[One sentence: what it does and for whom]",
    },
    problem: {
      it: "[Descrivi il problema concreto che il progetto risolve]",
      en: "[Describe the concrete problem this project solves]",
    },
    techChoices: {
      it: "[2-3 decisioni tecniche non ovvie e perché le hai prese]",
      en: "[2-3 non-obvious technical decisions and why you made them]",
    },
    stack: ["React", "Python"],
    coverImage: "/images/projects/placeholder.svg",
    liveUrl: undefined,
    githubUrl: undefined,
    featured: true,
  },
  {
    slug: "progetto-quattro",
    title: { it: "[Nome progetto 4]", en: "[Project 4 name]" },
    tagline: {
      it: "[Una frase: cosa fa e per chi]",
      en: "[One sentence: what it does and for whom]",
    },
    problem: {
      it: "[Descrivi il problema concreto che il progetto risolve]",
      en: "[Describe the concrete problem this project solves]",
    },
    techChoices: {
      it: "[2-3 decisioni tecniche non ovvie e perché le hai prese]",
      en: "[2-3 non-obvious technical decisions and why you made them]",
    },
    stack: ["TypeScript", "Docker"],
    coverImage: "/images/projects/placeholder.svg",
    liveUrl: undefined,
    githubUrl: undefined,
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
