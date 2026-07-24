import { Reveal } from '@/components/common/reveal';
import { Section } from '@/components/common/section';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { allSkills, skillGroups } from '@/content/skills';

export function Skills() {
  return (
    <Section
      id="skills"
      index={2}
      eyebrow="Capabilities"
      title="The toolkit, grouped by what it is actually for."
      description="No percentage bars — a self-assigned 87% in Agile tells you nothing. These are the areas I work in daily, organised by the part of delivery they belong to."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.04}>
            <Card className="group h-full p-6 transition-all hover:-translate-y-1 hover:shadow-lift">
              <p className="section-index">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-3 font-display text-lg font-semibold">{group.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {group.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <Badge>{skill}</Badge>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="mask-fade-x mt-10 overflow-hidden">
        <div className="flex w-max animate-marquee gap-3">
          {[...allSkills, ...allSkills].map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              aria-hidden
              className="whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs text-muted-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
