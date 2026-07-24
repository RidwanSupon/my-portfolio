import type { ProcessStep } from '@/lib/types';

export const processSteps: ProcessStep[] = [
  {
    title: 'Discovery',
    description:
      'Understand the business before discussing software. Who owns the process, what breaks today, and what a good outcome looks like in their words.',
  },
  {
    title: 'Requirement Gathering',
    description:
      'Structured sessions with each stakeholder group, surfacing the assumptions people hold but have never stated aloud.',
  },
  {
    title: 'Analysis',
    description:
      'Map the current process, identify the gaps, and prioritise against business impact rather than request volume.',
  },
  {
    title: 'Documentation',
    description:
      'SRS, BRD, FRD, and user stories with acceptance criteria — the reference the team returns to when memory disagrees.',
  },
  {
    title: 'Wireframing',
    description:
      'Turn the specification into screens. Disagreements that survive a document rarely survive a wireframe.',
  },
  {
    title: 'Development Coordination',
    description:
      'Stay close to engineering through delivery — clarifying requirements, re-scoping when reality intervenes, keeping the backlog honest.',
  },
  {
    title: 'Testing',
    description:
      'Test cases derived from acceptance criteria, verifying the build matches the specification rather than the developer’s reading of it.',
  },
  {
    title: 'UAT & Deployment',
    description:
      'Run acceptance with the people who will use the system daily, triage what comes back, and support the release.',
  },
  {
    title: 'Maintenance & Iteration',
    description:
      'Track how the system is actually used after launch, and feed that back into the next round of scope.',
  },
];
