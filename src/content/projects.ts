import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "gamehub",
    title: { it: "GameHub", en: "GameHub" },
    tagline: {
      it: "Social network per videogiocatori: catalogo, recensioni, wishlist e suggerimenti di amicizia basati su un grafo social.",
      en: "A social network for gamers: catalog, reviews, wishlist and friend suggestions powered by a graph database.",
    },
    problem: {
      it: "Chi gioca spesso non ha un posto unico dove tenere traccia dei giochi che vuole provare, leggere recensioni di persone con gusti simili e scoprire altri giocatori da seguire. GameHub unisce catalogo, recensioni e rete sociale in un'unica app.",
      en: "Gamers rarely have one place to track games they want to play, read reviews from people with similar tastes, and discover other players to follow. GameHub combines a game catalog, reviews and a social layer in a single app.",
    },
    techChoices: {
      it: "Il backend Spring Boot è nato come progetto di gruppo per il corso universitario di Large-Scale and Multi-Structured Databases; l'ho ripreso da solo circa due anni dopo, rifattorizzando lo strato dati e costruendo da zero il frontend Angular. Uso MongoDB per il catalogo giochi e le recensioni, dati con schema variabile e letture frequenti, e Neo4j per il grafo sociale (follow, suggerimenti di amicizia), dove le query di attraversamento tra utenti sarebbero state lente e scomode su un database relazionale o puramente documentale. Il backend vive in un repository separato (LSMSD-Project) rispetto al frontend.",
      en: "The Spring Boot backend started as a group project for the university course on Large-Scale and Multi-Structured Databases; I picked it up again solo about two years later, refactoring the data layer and building the Angular frontend from scratch. I use MongoDB for the game catalog and reviews — variable-schema data with frequent reads — and Neo4j for the social graph (follows, friend suggestions), where multi-hop traversal queries between users would have been slow and awkward on a relational or purely document-based database. The backend lives in a separate repository (LSMSD-Project) from the frontend.",
    },
    stack: ["Angular", "Spring Boot", "MongoDB", "Neo4j", "TypeScript", "Tailwind CSS"],
    coverImage: "/images/projects/placeholder.svg",
    liveUrl: "https://game-hub-fe.vercel.app/",
    githubUrl: "https://github.com/tonipatania/gameHub-FE",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
