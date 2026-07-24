import { Reveal } from '@/components/common/reveal';
import { Section } from '@/components/common/section';
import { Card } from '@/components/ui/card';
import { processSteps } from '@/content/process';

export function Process() {
  return (
    <Section
      id="process"
      index={6}
      eyebrow="Process"
      title="How an engagement actually runs."
      description="Roughly linear, but discovery and analysis loop as often as the problem requires. Nothing moves to development until the specification is agreed in writing."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step, index) => (
          <Reveal key={step.title} delay={(index % 3) * 0.05}>
            <Card className="group relative h-full overflow-hidden p-6 transition-all hover:-translate-y-1 hover:shadow-lift">
              <span
                className="pointer-events-none absolute -right-2 -top-4 font-display text-7xl font-semibold text-muted/60 transition-colors group-hover:text-primary/10"
                aria-hidden
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="relative">
                <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
