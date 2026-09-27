export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  image: string;
  featured: boolean;
  comingSoon?: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'devops' | 'ai' | 'cloud' | 'tools' | 'languages';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
  gridSpan: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  bullets: string[];
  type: 'work' | 'education';
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  objective: string;
  education: {
    degree: string;
    university: string;
    year: string;
    cgpa: string;
    location: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  projects: {
    title: string;
    tech: string;
    bullets: string[];
  }[];
  certifications: string[];
  achievements: string[];
}
