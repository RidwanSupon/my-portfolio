import { Award, ExternalLink } from 'lucide-react';

import { Reveal } from '@/components/common/reveal';
import { Section } from '@/components/common/section';
import { Card } from '@/components/ui/card';
import { certifications } from '@/content/certifications';

/** Hidden until real credentials are listed — see content/certifications.ts. */
export function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <Section id="certifications" index={8} eyebrow="Credentials" title="Certifications.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certification, index) => (
          <Reveal key={certification.title} delay={(index % 3) * 0.05}>
            <Card className="h-full p-6 transition-all hover:-translate-y-1 hover:shadow-lift">
              <Award className="mb-4 h-5 w-5 text-primary" aria-hidden />
              <h3 className="font-display font-semibold">{certification.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{certification.issuer}</p>
              <p className="mt-3 font-mono text-xs text-muted-foreground">{certification.year}</p>
              {certification.credentialUrl && (
                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Verify
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
              )}
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
