import { Quote } from 'lucide-react';

import { Reveal } from '@/components/common/reveal';
import { Section } from '@/components/common/section';
import { Card } from '@/components/ui/card';
import { testimonials } from '@/content/testimonials';

/**
 * Renders nothing while `testimonials` is empty. A missing section is
 * unremarkable; an invented endorsement attributed to a real person is not.
 */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Section
      id="testimonials"
      index={7}
      eyebrow="References"
      title="What people I have worked with say."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={(index % 3) * 0.05}>
            <Card className="flex h-full flex-col p-6">
              <Quote className="mb-4 h-5 w-5 text-primary" aria-hidden />
              <blockquote className="flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                {testimonial.quote}
              </blockquote>
              <footer className="mt-5 border-t pt-4">
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.title} · {testimonial.organisation}
                </p>
              </footer>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
