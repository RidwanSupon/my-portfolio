import type { ExperienceEntry } from '@/lib/types';

/**
 * Add earlier roles by copying an entry. Keep them newest-first — the timeline
 * renders in array order.
 */
export const experience: ExperienceEntry[] = [
  {
    company: 'Appifly BD Limited',
    role: 'Software Business Analyst',
    period: 'Present',
    location: 'Dhaka, Bangladesh',
    current: true,
    summary:
      'Lead analysis across enterprise ERP, SaaS, and streaming products — from stakeholder discovery through specification, delivery coordination, and user acceptance.',
    highlights: [
      'Run requirement workshops with business stakeholders and translate outcomes into SRS, BRD, and FRD documentation',
      'Map as-is and to-be business processes for accounting, inventory, and project delivery systems',
      'Write user stories with acceptance criteria and maintain the product backlog alongside engineering',
      'Produce wireframes and screen specifications that resolve requirement disputes before development',
      'Document REST API contracts and review implementations against specification',
      'Coordinate sprint scope, clarify requirements during delivery, and manage change requests',
      'Design test cases from acceptance criteria and run UAT with end users',
    ],
  },
];
