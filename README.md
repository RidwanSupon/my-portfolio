# Md. Ridwanur Rahman Mazumder — Portfolio

Personal portfolio for a Software Business Analyst. Next.js 15, React 19,
TypeScript, Tailwind CSS, Framer Motion, and Lenis.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # production build
npm start          # serve the build
npm run typecheck
npm run lint
```

Requires Node 18.18 or newer.

> The build fetches Inter and Plus Jakarta Sans from Google Fonts. This works on
> Vercel and normal CI. On an offline builder, switch `next/font/google` to
> `next/font/local` in `src/app/layout.tsx`.

---

## Editing your content

**You should never need to touch a component to update the site.** Everything
lives in `src/content/`, typed so a missing field fails the build rather than
rendering an empty box.

| File | Holds |
| --- | --- |
| `profile.ts` | Name, title, contact details, social links, hero copy |
| `about.ts` | Story, mission, vision, values, goals |
| `projects.ts` | Every case study — business analysis *and* engineering |
| `experience.ts` | Timeline entries |
| `skills.ts` | Skill groups |
| `services.ts` | Service offerings |
| `process.ts` | Working process steps |
| `stats.ts` | Headline numbers |
| `testimonials.ts` | Client quotes |
| `certifications.ts` | Credentials |
| `posts.ts` | Writing/blog cards |

### Adding a project

Open `src/content/projects.ts`, copy an entry, and change the fields:

```ts
{
  slug: 'new-project',
  title: 'Project name',
  tagline: 'One line describing it.',
  category: 'analysis',   // or 'frontend'
  role: 'Software Business Analyst',
  organisation: 'Client name',   // or null under NDA
  period: '2025',
  overview: '...',
  problem: '...',
  solution: '...',
  contribution: ['What you did', 'And what else'],
  impact: '...',
  stack: ['Laravel', 'MySQL'],
  featured: true,
}
```

`category: 'analysis'` files it under **Business analysis**; `category: 'frontend'`
files it under **Engineering**. The filter buttons and their counts update
automatically. Frontend work is a genuine asset here — it shows a BA whose
feasibility judgement is grounded in having actually built things.

---

## Sections that hide themselves

`testimonials.ts` and `certifications.ts` ship **empty**, and those sections do
not render while the arrays are empty. This is deliberate.

A portfolio testimonial names a real person and puts words in their mouth. An
invented one misrepresents someone who never said it, and any reference check
exposes it. The same applies to certifications: a credential you do not hold is
the fastest way to lose an offer.

Ask two or three colleagues or clients for a couple of honest sentences and add
them — the section appears the moment you do. A short genuine quote outperforms
a polished invented one.

`stats.ts` follows the same rule: values ship blank, and the strip stays hidden
until you fill in figures you can defend in an interview.

The narrative copy in `projects.ts` is written from the project type and your
described role. It is accurate in shape but generic in specifics — **read each
case study and correct anything that does not match what you actually did.**

---

## Resume download

The hero's resume button only appears when the file exists. To enable it:

1. Put your PDF at `public/resume.pdf`
2. Set `resumeAvailable: true` in `src/content/profile.ts`

This avoids the common portfolio bug of a download button that 404s.

---

## Contact form

Works with no setup: submitting composes a prefilled email to your address.

For real form submissions, sign up with [Formspree](https://formspree.io) or
[Web3Forms](https://web3forms.com) (both have free tiers) and set:

```
NEXT_PUBLIC_CONTACT_ENDPOINT=https://formspree.io/f/yourid
```

The form validates with React Hook Form and Zod either way.

---

## Deploying to Vercel

```bash
git init
git add .
git commit -m "Portfolio"
git remote add origin https://github.com/RidwanSupon/YOUR_REPO.git
git branch -M main
git push -u origin main
```

Then on vercel.com: **Add New → Project → import the repo → Deploy.** Next.js is
auto-detected; nothing to configure.

Afterwards add an environment variable so canonical links, the sitemap, and
social previews point at the real domain:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

---

## Structure

```
src/
├── app/                 layout, page, 404, sitemap, robots
├── components/
│   ├── sections/        one file per page section
│   ├── layout/          navbar, footer, loader, cursor, smooth scroll
│   ├── common/          reveal, section wrapper, social links
│   └── ui/              button, card, badge, input
├── content/             ← everything you edit
├── hooks/
└── lib/                 types, site config, utils
public/
├── portrait.jpg         hero image
└── avatar.jpg           about image
```

---

## Design notes

The visual identity is built on a **blueprint** motif — faint drafting rules
behind the hero, monospace section indices (`01 / About`), and case studies laid
out as specification documents. It suits the job: a business analyst turns
something vague into something measured.

Skills are shown as grouped tags rather than percentage bars. A self-assigned
"87% Agile" communicates nothing and reads as filler on a senior profile.

Accessibility: skip link, visible focus rings throughout, `aria-current` on the
active nav item, live regions on the form and rotating hero text, and full
`prefers-reduced-motion` support — which disables Lenis smooth scrolling and the
cursor glow entirely rather than merely shortening them.
# my-portfolio
