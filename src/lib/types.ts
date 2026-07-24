/**
 * Content types.
 *
 * Every section of the site reads from `src/content/*`. Adding a project,
 * a testimonial, or a certificate means editing a typed array — never JSX.
 * TypeScript catches a missing field before the site builds.
 */

export type ProjectCategory = 'analysis' | 'frontend';

export interface ProjectMetric {
  /** Short label, e.g. "Modules delivered". */
  label: string;
  /** Keep this factual. Leave the project out of the metrics list if unsure. */
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  /** One line shown on the card. */
  tagline: string;
  category: ProjectCategory;
  /** Ridwan's role on this project. */
  role: string;
  /** Client or employer, or null when under NDA. */
  organisation: string | null;
  /** Year or range, e.g. "2024" or "2023 – 2024". */
  period: string;
  overview: string;
  problem: string;
  solution: string;
  contribution: string[];
  impact: string;
  stack: string[];
  /** Optional hard numbers. Only fill these in when they are verifiable. */
  metrics?: ProjectMetric[];
  /** Public links, when there are any. */
  links?: { label: string; href: string }[];
  featured?: boolean;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  current?: boolean;
}

export interface SkillGroup {
  title: string;
  description: string;
  skills: string[];
}

export interface Service {
  title: string;
  description: string;
  deliverables: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

/**
 * Testimonials are intentionally empty until real ones exist.
 * The section does not render while this array is empty — an absent section
 * reads better than an invented endorsement, and inventing one would put words
 * in a real person's mouth.
 */
export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  organisation: string;
}

/** Same rule as testimonials: list only credentials actually held. */
export interface Certification {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  topic: string;
  readingMinutes: number;
  /** ISO date. */
  date: string;
  href?: string;
}

export interface Stat {
  label: string;
  value: string;
  hint?: string;
}
