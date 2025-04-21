
export interface Publication {
  title: string;
  year: string;
  journal?: string;
  link?: string;
}

export interface Technology {
  name: string;
  icon: "code" | "laptop" | "database" | "globe" | "pen-tool";
  proficiency: "Básico" | "Intermediário" | "Avançado";
}

export interface Researcher {
  id: string;
  name: string;
  role: string;
  area: string;
  email: string;
  bio: string;
  image?: string;
  technologies: Technology[];
  publications: Publication[];
}
