import { Briefcase, MapPin } from 'lucide-react';

import { Reveal } from '@/components/common/reveal';
import { Section } from '@/components/common/section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { experience } from '@/content/experience';

export function Experience() {
  return (
    <Section
      id="experience"
      index={5}
      eyebrow="Experience"
      title="Where I have done this work."
    >
      <ol className="relative space-y-6 border-l pl-6 sm:pl-8">
        {experience.map((entry, index) => (
          <Reveal key={`${entry.company}-${entry.period}`} delay={index * 0.05}>
            <li className="relative">
              <span
                className="absolute -left-[calc(1.5rem+5px)] top-6 grid h-2.5 w-2.5 place-items-center rounded-full bg-primary ring-4 ring-background sm:-left-[calc(2rem+5px)]"
                aria-hidden
              />
              <Card className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold">{entry.role}</h3>
                    <p className="mt-0.5 flex items-center gap-2 text-sm text-muted-foreground">
                      <Briefcase className="h-3.5 w-3.5" aria-hidden />
                      {entry.company}
                    </p>
                  </div>
                  <div className="text-right">
                    {entry.current && <Badge variant="default">Current</Badge>}
                    <p className="mt-1.5 font-mono text-xs text-muted-foreground">{entry.period}</p>
                    <p className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" aria-hidden />
                      {entry.location}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {entry.summary}
                </p>

                <ul className="mt-4 space-y-2 border-t pt-4">
                  {entry.highlights.map((highlight) => (
                    <li
                      key={highlight.slice(0, 28)}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Card>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
