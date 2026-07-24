import type { Post } from '@/lib/types';

/**
 * Article stubs. Each links to `href` when set, otherwise the card renders
 * without a link. Replace the excerpts with your own writing before publishing —
 * these are prompts for pieces worth writing, not finished articles.
 */
export const posts: Post[] = [
  {
    slug: 'requirements-that-survive-delivery',
    title: 'Requirements that survive contact with delivery',
    excerpt:
      'Most specifications fail in the same place: they describe the happy path precisely and leave the exceptions to interpretation. Notes on writing acceptance criteria that hold up in sprint four.',
    topic: 'Business Analysis',
    readingMinutes: 6,
    date: '2026-06-18',
  },
  {
    slug: 'erp-fit-gap-honestly',
    title: 'Running a fit-gap analysis honestly',
    excerpt:
      'Every ERP evaluation is pushed toward a predetermined answer. How to structure the assessment so the gaps surface before the contract is signed rather than during rollout.',
    topic: 'ERP',
    readingMinutes: 8,
    date: '2026-04-09',
  },
  {
    slug: 'scoping-ai-features',
    title: 'Scoping AI features without overpromising',
    excerpt:
      'Adding AI to a product is a scoping problem before it is a technical one. Where a suggestion is genuinely useful, where a human must stay in the loop, and how to write that into a specification.',
    topic: 'AI',
    readingMinutes: 7,
    date: '2026-02-24',
  },
];
