import { Reveal } from '@/components/common/reveal';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  index: number;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Every section shares one header treatment: a monospace index, a display
 * heading, and an optional standfirst. Consistency is what makes the page read
 * as a single document rather than a stack of unrelated blocks.
 */
export function Section({
  id,
  index,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-24 py-20 sm:py-28', className)}>
      <div className="container">
        <Reveal>
          <p className="section-index">
            {String(index).padStart(2, '0')} <span className="mx-2 opacity-40">/</span> {eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tightest text-balance sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          )}
        </Reveal>

        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
