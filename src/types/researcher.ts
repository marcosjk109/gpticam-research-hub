
export interface Publication {
  title: string;
  year: string;
  journal?: string;
  link?: string;
}

export interface Technology {
  name: string;
  proficiency: "Básico" | "Intermediário" | "Avançado";
}

export interface Researcher {
  id: string;
  name: string;
  role: string;
  area: string;
  email: string;
  bio: string;
  technologies: Technology[];
  publications: Publication[];
}
