import type { Service } from '@/lib/types';

export const services: Service[] = [
  {
    title: 'Discovery & Requirement Gathering',
    description:
      'Structured workshops with the people who own the process, ending in a written, agreed scope rather than a shared impression.',
    deliverables: ['Stakeholder interviews', 'As-is process maps', 'Scope definition', 'Risk register'],
  },
  {
    title: 'Requirement Documentation',
    description:
      'SRS, BRD, and FRD written for engineering, with acceptance criteria specific enough to test against.',
    deliverables: ['SRS', 'BRD', 'FRD', 'User stories', 'Use cases'],
  },
  {
    title: 'Business Process Analysis',
    description:
      'Mapping how the business actually runs, finding where the process breaks, and specifying the target state.',
    deliverables: ['As-is / to-be maps', 'Gap analysis', 'Workflow design', 'UML diagrams'],
  },
  {
    title: 'ERP Consultation',
    description:
      'Module scoping, fit-gap assessment, and implementation planning for accounting, inventory, and operations systems.',
    deliverables: ['Fit-gap analysis', 'Module scope', 'Data migration plan', 'Rollout sequence'],
  },
  {
    title: 'SaaS Product Planning',
    description:
      'Turning a product idea into a roadmap with a defensible first release — including what deliberately stays out of it.',
    deliverables: ['Product requirements', 'Feature prioritisation', 'Release roadmap', 'MVP scope'],
  },
  {
    title: 'Wireframing & Prototyping',
    description:
      'Low and mid-fidelity screens that surface disagreement about a requirement before development starts.',
    deliverables: ['User flows', 'Wireframes', 'Clickable prototypes', 'Screen specifications'],
  },
  {
    title: 'API Documentation',
    description:
      'Endpoint contracts, payload schemas, and error semantics documented so frontend and backend agree in advance.',
    deliverables: ['Endpoint specifications', 'Request/response schemas', 'Swagger definitions'],
  },
  {
    title: 'Quality Assurance & UAT',
    description:
      'Test cases derived from the specification, and UAT run with the people who will use the system daily.',
    deliverables: ['Test case design', 'Functional testing', 'UAT planning', 'Defect triage'],
  },
];
