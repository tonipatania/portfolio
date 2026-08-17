import type { LocalizedText } from "@/types/project";

export type StackCategory = {
  label: LocalizedText;
  items: string[];
};

export const stackCategories: StackCategory[] = [
  {
    label: { it: "Linguaggi", en: "Languages" },
    items: ["Python", "Java", "TypeScript", "JavaScript"],
  },
  {
    label: { it: "Backend & framework", en: "Backend & frameworks" },
    items: ["FastAPI", "Spring Boot", "Next.js", "Angular"],
  },
  {
    label: { it: "Architettura & sicurezza", en: "Architecture & security" },
    items: ["Microservices", "Kafka", "RESTful APIs", "JWT", "OAuth2"],
  },
  {
    label: { it: "Database", en: "Databases" },
    items: ["MySQL", "PostgreSQL", "Oracle", "DB2", "MongoDB", "Neo4j"],
  },
  {
    label: { it: "Cloud & DevOps", en: "Cloud & DevOps" },
    items: ["AWS", "Vercel", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    label: { it: "Workflow", en: "Workflow" },
    items: ["Git", "Maven", "Agile (Scrum/Kanban)"],
  },
];
