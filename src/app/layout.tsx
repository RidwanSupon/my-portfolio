import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

import { CursorGlow } from '@/components/layout/cursor-glow';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { PageLoader } from '@/components/layout/page-loader';
import { ScrollProgress } from '@/components/layout/scroll-progress';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { SmoothScroll } from '@/components/layout/smooth-scroll';
import { Providers } from '@/app/providers';
import { profile } from '@/content/profile';
import { allSkills } from '@/content/skills';
import { site } from '@/lib/site';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s · ${profile.shortName}`,
  },
  description: site.description,
  keywords: [
    'Business Analyst',
    'Software Business Analyst',
    'Dhaka',
    'Bangladesh',
    'ERP',
    'SaaS',
    ...allSkills.slice(0, 20),
  ],
  authors: [{ name: profile.name, url: site.url }],
  creator: profile.name,
  alternates: { canonical: site.url },
  openGraph: {
    type: 'profile',
    siteName: site.name,
    title: `${profile.name} — ${profile.title}`,
    description: site.description,
    url: site.url,
    locale: site.locale,
    images: [{ url: '/portrait.jpg', width: 880, height: 1100, alt: profile.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.title}`,
    description: site.description,
    images: ['/portrait.jpg'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
  width: 'device-width',
  initialScale: 1,
};

/** Structured data helps search engines resolve the person behind the site. */
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  alternateName: profile.shortName,
  jobTitle: profile.title,
  worksFor: { '@type': 'Organization', name: profile.company },
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  url: site.url,
  image: `${site.url}/portrait.jpg`,
  address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: allSkills.slice(0, 25),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-dvh font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Providers>
          <PageLoader />
          <SmoothScroll />
          <ScrollProgress />
          <CursorGlow />

          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-primary-foreground"
          >
            Skip to content
          </a>

          <Navbar />
          <main id="main" className="relative">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
