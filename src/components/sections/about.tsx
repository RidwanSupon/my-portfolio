import Image from 'next/image';
import { Compass, Sparkles, Target } from 'lucide-react';

import { Reveal } from '@/components/common/reveal';
import { Section } from '@/components/common/section';
import { Card } from '@/components/ui/card';
import { about } from '@/content/about';
import { profile } from '@/content/profile';
import { publishedStats } from '@/content/stats';

export function About() {
  return (
    <Section
      id="about"
      index={1}
      eyebrow="About"
      title="I sit between the people who know the business and the people who build the software."
    >
      <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="sticky top-28 space-y-6">
            <div className="relative overflow-hidden rounded-2xl border shadow-soft">
              <Image
                src="/avatar.jpg"
                alt={profile.name}
                width={640}
                height={640}
                sizes="(max-width: 1024px) 100vw, 420px"
                className="h-full w-full object-cover"
              />
            </div>

            <Card className="p-5">
              <p className="section-index mb-3">Currently</p>
              <p className="font-display text-lg font-semibold">{profile.title}</p>
              <p className="text-sm text-muted-foreground">{profile.company}</p>
              <p className="mt-1 text-sm text-muted-foreground">{profile.location}</p>
            </Card>
          </div>
        </Reveal>

        <div className="order-1 space-y-10 lg:order-2">
          <Reveal>
            <div className="space-y-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {about.story.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal delay={0.05}>
              <Card className="h-full p-5">
                <Target className="mb-3 h-5 w-5 text-primary" aria-hidden />
                <h3 className="font-display font-semibold">Mission</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {about.mission}
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="h-full p-5">
                <Compass className="mb-3 h-5 w-5 text-accent" aria-hidden />
                <h3 className="font-display font-semibold">Vision</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {about.vision}
                </p>
              </Card>
            </Reveal>
          </div>

          <Reveal delay={0.05}>
            <h3 className="mb-4 font-display text-xl font-semibold">How I work</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {about.values.map((value) => (
                <Card key={value.title} className="p-5">
                  <h4 className="font-medium">{value.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <Card className="border-primary/20 bg-primary/[0.03] p-6">
              <div className="mb-3 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" aria-hidden />
                <h3 className="font-display font-semibold">What makes the difference</h3>
              </div>
              <ul className="space-y-2.5">
                {about.differentiators.map((item) => (
                  <li key={item.slice(0, 24)} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={0.05}>
            <h3 className="mb-4 font-display text-xl font-semibold">Career goals</h3>
            <ol className="space-y-3">
              {about.goals.map((goal, index) => (
                <li key={goal.slice(0, 24)} className="flex gap-4">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">{goal}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* The strip disappears entirely until real figures are filled in. */}
          {publishedStats.length > 0 && (
            <Reveal delay={0.05}>
              <dl className="grid grid-cols-2 gap-4 rounded-2xl border p-6 sm:grid-cols-4">
                {publishedStats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-display text-3xl font-semibold tracking-tightest">
                      {stat.value}
                    </dd>
                    <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </dl>
            </Reveal>
          )}
        </div>
      </div>
    </Section>
  );
}
