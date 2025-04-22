export interface Publication {
  title: string;
  year: string;
  journal: string;
  link?: string;
}

export interface Technology {
  name: string;
  icon: string;
  proficiency: string;
}

export interface Award {
  title: string;
  organization: string;
  url?: string;
}

export interface Statistics {
  publications: number;
  projectsLed: number;
  yearsExperience: number;
}

export interface Researcher {
  id: string;
  name: string;
  role: string;
  area: string;
  email: string;
  image: string;
  bio: string;
  technologies: Technology[];
  publications: Publication[];
  statistics?: Statistics;
  awards?: Award[];
}
