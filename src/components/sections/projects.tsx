'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Building2, Calendar, ChevronDown } from 'lucide-react';

import { Reveal } from '@/components/common/reveal';
import { Section } from '@/components/common/section';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { projects } from '@/content/projects';
import type { Project, ProjectCategory } from '@/lib/types';
import { cn } from '@/lib/utils';

type Filter = 'all' | ProjectCategory;

const FILTERS: Array<{ value: Filter; label: string }> = [
  { value: 'all', label: 'All work' },
  { value: 'analysis', label: 'Business analysis' },
  { value: 'frontend', label: 'Engineering' },
];

export function Projects() {
  const [filter, setFilter] = useState<Filter>('all');

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  );

  const counts = useMemo(
    () => ({
      all: projects.length,
      analysis: projects.filter((project) => project.category === 'analysis').length,
      frontend: projects.filter((project) => project.category === 'frontend').length,
    }),
    [],
  );

  return (
    <Section
      id="work"
      index={4}
      eyebrow="Selected work"
      title="Case studies from enterprise delivery."
      description="Each one covers the problem as the business framed it, what was specified, and what changed as a result."
    >
      <Reveal>
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {FILTERS.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setFilter(option.value)}
              aria-pressed={filter === option.value}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium transition-all',
                filter === option.value
                  ? 'border-transparent bg-ink text-background'
                  : 'text-muted-foreground hover:border-primary/40 hover:text-foreground',
              )}
            >
              {option.label}
              <span className="ml-1.5 opacity-60">{counts[option.value]}</span>
            </button>
          ))}
        </div>
      </Reveal>

      <div className="space-y-4">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project, index) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.2) }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const panelId = `project-${project.slug}`;

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lift">
      <div className="p-6 sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <p className="section-index">{String(index + 1).padStart(2, '0')}</p>
              <Badge variant={project.category === 'analysis' ? 'default' : 'accent'}>
                {project.category === 'analysis' ? 'Business analysis' : 'Engineering'}
              </Badge>
            </div>

            <h3 className="mt-3 font-display text-xl font-semibold tracking-tight sm:text-2xl">
              {project.title}
            </h3>
            <p className="mt-1.5 text-pretty text-muted-foreground">{project.tagline}</p>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{project.role}</span>
              {project.organisation && (
                <span className="flex items-center gap-1.5">
                  <Building2 className="h-3.5 w-3.5" aria-hidden />
                  {project.organisation}
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" aria-hidden />
                {project.period}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls={panelId}
            className="flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            {open ? 'Hide' : 'Case study'}
            <ChevronDown className={cn('h-4 w-4 transition-transform', open && 'rotate-180')} />
          </button>
        </div>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <li key={item}>
              <Badge variant="outline">{item}</Badge>
            </li>
          ))}
        </ul>

        {project.metrics && project.metrics.length > 0 && (
          <dl className="mt-5 grid grid-cols-2 gap-4 rounded-xl border bg-muted/30 p-4 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="sr-only">{metric.label}</dt>
                <dd className="font-display text-2xl font-semibold tracking-tightest">
                  {metric.value}
                </dd>
                <p className="mt-0.5 text-xs text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </dl>
        )}
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t bg-muted/20"
          >
            <div className="grid gap-6 p-6 sm:p-7 md:grid-cols-2">
              <Block label="Overview" body={project.overview} />
              <Block label="The problem" body={project.problem} />
              <Block label="The approach" body={project.solution} />
              <Block label="Business impact" body={project.impact} />

              <div className="md:col-span-2">
                <p className="section-index mb-3">My contribution</p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {project.contribution.map((item) => (
                    <li
                      key={item.slice(0, 28)}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {project.links && project.links.length > 0 && (
                <div className="md:col-span-2 flex flex-wrap gap-3 border-t pt-5">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="section-index mb-2">{label}</p>
      <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
