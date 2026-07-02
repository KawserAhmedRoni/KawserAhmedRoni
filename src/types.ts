export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'E-commerce' | 'WMS' | 'POS';
  techStack: string[];
  metrics: { label: string; value: string; description: string }[];
  details: string[];
  liveUrl?: string;
  systemFlow: string[]; // Steps in the architecture flow for this project type
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  isMediaSoft?: boolean;
  highlights: string[];
  coreFocus: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  years: number;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: Skill[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatarUrl?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
