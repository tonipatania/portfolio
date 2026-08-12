export type LocalizedText = {
  it: string;
  en: string;
};

export type Project = {
  slug: string;
  title: LocalizedText;
  tagline: LocalizedText;
  problem: LocalizedText;
  techChoices: LocalizedText;
  stack: string[];
  coverImage: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
};
