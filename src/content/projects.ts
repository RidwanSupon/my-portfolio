import type { Project } from '@/lib/types';

/**
 * ADDING A PROJECT
 * ----------------
 * Copy any entry below, change the fields, and it appears on the site with the
 * right layout and filter automatically. `category: 'analysis'` puts it under
 * Business Analysis; `category: 'frontend'` puts it under Engineering.
 *
 * A NOTE ON THE COPY BELOW
 * ------------------------
 * The narrative for each project is written from the project type and the role
 * described — it is accurate in shape but generic in specifics. Read each one
 * and correct anything that does not match what you actually did. In particular
 * `metrics` is deliberately empty: numbers on a portfolio get checked in
 * interviews, so only add figures you can defend.
 */
export const projects: Project[] = [
  {
    slug: 'ai-accounting-erp',
    title: 'AI-Powered Accounting ERP',
    tagline: 'Enterprise financial platform with automated ledger intelligence.',
    category: 'analysis',
    role: 'Software Business Analyst',
    organisation: 'Appifly BD Limited',
    period: '2026',
    featured: true,
    overview:
      'An enterprise accounting platform covering the full financial cycle — chart of accounts, journals, receivables and payables, inventory valuation, and statutory reporting — with AI assistance layered over transaction classification and reconciliation.',
    problem:
      'Finance teams were running month-end close across spreadsheets and disconnected tools. Reconciliation was manual, audit trails were incomplete, and every report meant re-deriving the same numbers by hand. Any new system had to satisfy accountants who could not tolerate ambiguity in how a figure was produced.',
    solution:
      'I ran discovery with finance stakeholders to map the existing close process end to end, then specified a double-entry core with an explicit audit trail on every posting. AI assistance was scoped deliberately narrowly — suggesting transaction categories and flagging reconciliation mismatches, with a human approving every posting — so the accounting remained auditable rather than opaque.',
    contribution: [
      'Facilitated requirement workshops with finance and operations stakeholders',
      'Produced the SRS, BRD, and module-level FRDs',
      'Mapped as-is and to-be business process flows for the month-end close',
      'Wrote user stories with acceptance criteria for each accounting module',
      'Designed wireframes for journal entry, reconciliation, and reporting screens',
      'Documented REST API contracts and reviewed them against the specification',
      'Coordinated sprint scope with the development team',
      'Ran functional testing and UAT sessions with finance users',
    ],
    impact:
      'Replaced a spreadsheet-driven close with a single auditable system. Every posting carries a traceable origin, and reporting draws from one ledger instead of several reconciled extracts.',
    stack: ['Laravel', 'PHP', 'MySQL', 'REST API', 'Swagger', 'Figma', 'Jira'],
    metrics: [],
  },
  {
    slug: 'task-modus',
    title: 'Task Modus',
    tagline: 'Enterprise project management and team delivery platform.',
    category: 'analysis',
    role: 'Software Business Analyst',
    organisation: 'Appifly BD Limited',
    period: '2026',
    featured: true,
    overview:
      'A project management platform built for organisations running several delivery teams at once — projects, sprints, task hierarchies, time tracking, workload visibility, and role-based reporting for managers.',
    problem:
      'Teams were tracking work across tools that did not agree with each other. Managers had no reliable view of who was over-committed, and status reporting meant asking each lead individually and reconciling the answers.',
    solution:
      'I specified a permission model first, because reporting requirements collapse without it, then defined the project and task hierarchy, sprint workflow, and the states a task moves through. Workload visibility was designed around the question managers actually asked — who is over capacity this week — rather than around a generic dashboard.',
    contribution: [
      'Gathered requirements from delivery managers and team leads',
      'Defined the role and permission matrix across project and organisation scope',
      'Specified the task state machine and sprint workflow',
      'Wrote user stories and acceptance criteria for each release',
      'Produced wireframes for boards, backlog, and reporting views',
      'Coordinated backlog prioritisation with engineering',
      'Ran UAT with pilot teams and triaged findings into the backlog',
    ],
    impact:
      'Consolidated planning, execution, and reporting into one tool, giving managers a live view of workload rather than a reconstructed weekly summary.',
    stack: ['Laravel', 'MySQL', 'REST API', 'Figma', 'Agile', 'Scrum'],
    metrics: [],
  },
  {
    slug: 'district-council-financial-system',
    title: 'District Council Financial Management System',
    tagline: 'Public-sector budgeting, expenditure, and accountability platform.',
    category: 'analysis',
    role: 'Business Analyst',
    organisation: null,
    period: '2026',
    featured: true,
    overview:
      'A financial management system for district council operations, covering budget allocation, expenditure approval workflows, fund tracking across departments, and the reporting formats public bodies are required to produce.',
    problem:
      'Public-sector finance carries constraints commercial software rarely handles: approval chains defined by regulation, budget heads that cannot be overspent, and reporting formats fixed by statute. Existing processes were paper-based, which made expenditure tracking slow and audit preparation painful.',
    solution:
      'I documented the statutory approval hierarchy and encoded it as a configurable workflow rather than hard-coded logic, so a change in delegation rules would not require a release. Budget controls were specified as hard constraints at the point of commitment, not as after-the-fact reports.',
    contribution: [
      'Conducted stakeholder interviews across finance and administrative departments',
      'Documented statutory approval hierarchies and delegation rules',
      'Produced the BRD and detailed functional specifications',
      'Mapped budget allocation and expenditure approval workflows',
      'Specified role-based access aligned to administrative structure',
      'Defined the required statutory report formats',
      'Supported UAT with council finance staff',
    ],
    impact:
      'Moved expenditure approval from paper to a tracked digital workflow, with budget limits enforced at commitment and an audit trail available on demand.',
    stack: ['Laravel', 'MySQL', 'Business Process Mapping', 'UML', 'Wireframing'],
    metrics: [],
  },
  {
    slug: 'inventory-management-system',
    title: 'Inventory Management System',
    tagline: 'Multi-warehouse stock control with procurement and valuation.',
    category: 'analysis',
    role: 'Software Business Analyst',
    organisation: 'Appifly BD Limited',
    period: '2026',
    overview:
      'Stock management across multiple warehouses — goods receipt, transfers, adjustments, reorder thresholds, batch tracking, and valuation feeding into the accounting ledger.',
    problem:
      'Stock figures on paper disagreed with stock on the shelf, and nobody could say when the divergence started. Purchasing decisions were made against numbers people did not trust, which meant both stockouts and overstocking in the same month.',
    solution:
      'I specified every stock movement as an immutable transaction rather than a mutable quantity field, so the current figure is always derivable and any discrepancy can be traced to the movement that caused it. Reorder logic was defined against consumption rate rather than a fixed minimum.',
    contribution: [
      'Mapped as-is warehouse and procurement processes across sites',
      'Specified the stock movement model and valuation rules',
      'Documented the procurement and goods-receipt workflow',
      'Wrote functional specifications and user stories',
      'Designed wireframes for stock, transfer, and adjustment screens',
      'Defined the integration contract with the accounting module',
      'Ran UAT with warehouse and procurement staff',
    ],
    impact:
      'Gave procurement a stock figure that reconciles to a traceable movement history, so purchasing decisions rest on numbers the team trusts.',
    stack: ['Laravel', 'MySQL', 'REST API', 'Figma'],
    metrics: [],
  },
  {
    slug: 'ott-streaming-platform',
    title: 'OTT Streaming Platform',
    tagline: 'Subscription video product across web and mobile.',
    category: 'analysis',
    role: 'Product Planner & Business Analyst',
    organisation: 'Appifly BD Limited',
    period: '2026',
    overview:
      'A subscription streaming product covering content catalogue management, subscription and entitlement logic, multi-device playback, and the admin tooling needed to run a catalogue day to day.',
    problem:
      'Streaming products live or die on two things the business rarely specifies precisely: what a subscriber is entitled to watch at any moment, and how the catalogue gets managed without engineering involvement. Both needed defining before playback work could start.',
    solution:
      'I specified entitlement as a rule evaluated at playback time against subscription state, device limit, and content availability window — rather than a flag set at purchase, which breaks the moment a plan changes. Catalogue management was scoped so content operations could publish without a deployment.',
    contribution: [
      'Defined subscription tiers and the entitlement rules behind them',
      'Specified content catalogue structure and metadata requirements',
      'Documented the publishing workflow for content operations',
      'Wrote user stories for playback, subscription, and admin flows',
      'Produced wireframes for browse, detail, and player screens',
      'Documented API requirements for client applications',
      'Coordinated release scope across web and mobile teams',
    ],
    impact:
      'Gave the business a subscription model that survives plan changes, and a catalogue that content operations run without engineering support.',
    stack: ['Product Strategy', 'REST API', 'Figma', 'Agile', 'User Stories'],
    metrics: [],
  },
  {
    slug: 'dhaka-bus-route-finder',
    title: 'Dhaka Bus Route Finder',
    tagline: 'Journey planner for Dhaka city buses and nationwide intercity coaches.',
    category: 'frontend',
    role: 'Design & Development',
    organisation: null,
    period: '2026',
    featured: true,
    overview:
      'A route finder covering 156 Dhaka local bus services across 281 stops, plus 41 intercity coach operators serving 80 cities. Search any service or stop, plan a journey including the changes required, and filter intercity coaches by service class.',
    problem:
      'Dhaka bus route information is scattered and hard to query. Only about 13% of stop pairs are joined by a single bus in one direction, so a route finder that only matched direct services would answer "no results" for the overwhelming majority of real journeys.',
    solution:
      'A round-based journey planner in the spirit of RAPTOR, without timetables, ranks results by number of changes and surfaces transfers as first-class results — which lifts coverage to effectively the whole network. Stop-name matching is guarded against a subtle failure: Mirpur 1 and Mirpur 10 are 94% string-similar but kilometres apart, so any correction that changes a digit is refused outright.',
    contribution: [
      'Profiled both datasets and designed the normalisation pipeline',
      'Built the journey planner and a separate set-coverage engine for intercity data',
      'Designed and built the interface, including the route timeline',
      'Wrote the verification suites covering engine invariants and name matching',
    ],
    impact:
      'Every one of 570 pages is statically prerendered, so search and routing run in memory with no network round-trip.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    metrics: [
      { label: 'Bus services indexed', value: '197' },
      { label: 'Stops and cities', value: '361' },
      { label: 'Static pages', value: '570' },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectsByCategory = (category: 'all' | 'analysis' | 'frontend') =>
  category === 'all' ? projects : projects.filter((project) => project.category === category);
