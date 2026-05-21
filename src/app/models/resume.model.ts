export interface Skill {
  name: string;
  level: number; // 0–100
  color: 'indigo' | 'pink' | 'amber';
}

export interface SkillCategory {
  icon: string;
  title: string;
  skills: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  project: string;
  bullets: string[];
  tech: string[];
}

export interface Project {
  emoji: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Education {
  icon: string;
  degree: string;
  school: string;
  badge: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

export interface ResumeData {
  name: string;
  title: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  summary: string;
  stats: { value: string; label: string }[];
  skillCategories: SkillCategory[];
  chips: { label: string; color: string }[];
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  contact: ContactInfo[];
}
