export interface ProfileInfo {
  name: string;
  role: string;
  companyName: string;
  companyUrl: string;
  companyLogoWhite: string;
  cloudPosLogo: string;
  location: string;
  experienceLabel: string;
  projectsLabel: string;
  email: string;
  phone: string;
  cvUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  facebookUrl: string;
  themeForestUrl: string;
  summary: string;
  availability: string[];
}

export type CyberAccent = 'cyan' | 'emerald' | 'violet' | 'pink';

export interface SkillGroup {
  id: string;
  title: string;
  category: 'frontend' | 'backend' | 'platform';
  accent: CyberAccent;
  subtitle: string;
  spanWide?: boolean;
  items: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl: string;
  companyLogo?: string;
  employmentType: string;
  location: string;
  duration: string;
  isCurrent?: boolean;
  accent: CyberAccent;
  techStack: string[];
  highlights: string[];
}

export interface EcomProject {
  id: string;
  name: string;
  url: string;
  domain: string;
  sector: string;
  bannerGradient: string;
  accent: CyberAccent;
  logo?: string;
  darkLogoSurface?: boolean;
}

export interface ThemeForestProject {
  id: string;
  name: string;
  category: string;
  url: string;
  accentGradient: string;
  accent: CyberAccent;
  stack: string[];
}

export interface EcosystemBrand {
  name: string;
  sector: string;
  logo: string;
}
