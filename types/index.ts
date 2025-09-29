// Types for the portfolio application
export interface Project {
  title: string;
  description: string;
  category: "Blockchain" | "Full-Stack" | "Mobile" | "Backend";
  icon: any; // Lucide icon component
  color: string;
  technologies: string[];
  features: string[];
  github: string;
  demo: string;
  image: string;
  status?: string;
  metrics?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements?: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  specialization?: string;
  gpa?: string;
}

export interface SkillCategory {
  title: string;
  icon: any; // Lucide icon component
  color: string;
  skills: Skill[];
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number;
  icon: any; // Lucide icon component
}

// ContactInfo interface removed - using only social links for contact

export interface SocialLink {
  icon: any; // Lucide icon component
  label: string;
  href: string;
  color?: string;
}

export interface Achievement {
  icon: any; // Lucide icon component
  label: string;
  color: string;
}

export interface NavItem {
  href: string;
  label: string;
  icon: any; // Lucide icon component
}

export type ProjectCategory =
  | "All"
  | "Blockchain"
  | "Full-Stack"
  | "Mobile"
  | "Backend";

export interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  icon: any; // Lucide icon component
  color: string;
  bgColor: string;
  duration: string;
  details: string[];
}
