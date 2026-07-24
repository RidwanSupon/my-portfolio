import { profile } from '@/content/profile';

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ridwansupon.vercel.app',
  name: `${profile.shortName} — ${profile.title}`,
  description:
    'Software Business Analyst in Dhaka specialising in ERP, SaaS product planning, requirement engineering, and business process analysis. Enterprise case studies, services, and contact.',
  locale: 'en_GB',
} as const;

export const navigation = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' },
] as const;
