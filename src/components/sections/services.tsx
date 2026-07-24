import { ArrowUpRight } from 'lucide-react';

import { Reveal } from '@/components/common/reveal';
import { Section } from '@/components/common/section';
import { Card } from '@/components/ui/card';
import { services } from '@/content/services';

export function Services() {
  return (
    <Section
      id="services"
      index={3}
      eyebrow="Services"
      title="What I can take off your plate."
      description="Engagements usually start with discovery and end at user acceptance. Each of these can be a standalone piece of work or a phase of a larger delivery."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={(index % 4) * 0.05}>
            <Card className="group h-full rounded-none border-0 p-6 shadow-none transition-colors hover:bg-muted/40">
              <div className="flex items-start justify-between gap-3">
                <p className="section-index">{String(index + 1).padStart(2, '0')}</p>
                <ArrowUpRight
                  className="h-4 w-4 -translate-y-1 text-muted-foreground opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  aria-hidden
                />
              </div>
              <h3 className="mt-3 font-display text-base font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-4 space-y-1.5 border-t pt-4">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
