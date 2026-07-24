import type { Stat } from '@/lib/types';

/**
 * Fill these in with figures you can defend in an interview.
 * Anything left as an empty string is skipped, and the whole strip disappears
 * when nothing is filled — better a missing section than an invented number.
 */
export const stats: Stat[] = [
  { label: 'Enterprise projects delivered', value: '', hint: 'ERP, SaaS, and government systems' },
  { label: 'Years in business analysis', value: '' },
  { label: 'Requirement documents authored', value: '', hint: 'SRS, BRD, FRD' },
  { label: 'Stakeholder workshops run', value: '' },
];

export const publishedStats = stats.filter((stat) => stat.value.trim().length > 0);
