// ============================================================
// ADMARK DIGITALS — THE ENGINEERING DOSSIER DATA LAYER
// Source: https://www.admarkdigitals.com (Verified Client Specification)
// ============================================================

export interface CompanyInfo {
  name: string;
  classification: string;
  tagline: string;
  mantra: string;
  philosophy: string;
  description: string;
  email: string;
  phone: string;
  phone1: string;
  phone2: string;
  whatsapp: string;
  whatsappUrl: string;
  clutchRating: string;
  clutchReviews: string;
  linkedin: string;
  address: {
    line1: string;
    line2: string;
    line3: string;
  };
  hq: {
    address: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    coordinates: string;
  };
  locations: string[];
  branches: string[];
  leadership: {
    name: string;
    role: string;
    title: string;
    initials: string;
    bio: string;
  }[];
}

export const COMPANY: CompanyInfo = {
  name: 'AdMark Digitals',
  classification: 'Research-Led Digital Product & Engineering Studio',
  tagline: 'Research-led, Design-driven, built to scale. Custom digital solutions for startups and enterprises.',
  mantra: 'Trust Us. We Deliver. Beyond Expectations.',
  description: 'Research-first agency building digital infrastructure for startups and MSMEs.',
  philosophy:
    'Research-led, Design-driven, built to scale. Custom digital solutions for startups and enterprises. We architect bespoke systems designed around real operational workflows.',
  email: 'info@admarkdigitals.com',
  phone: '+91 96866 58055',
  phone1: '+91 96866 58055',
  phone2: '+91 96320 92273',
  whatsapp: '919686658055',
  whatsappUrl: 'https://wa.me/919686658055',
  clutchRating: '4.9/5',
  clutchReviews: '25+',
  linkedin: 'https://www.linkedin.com/company/admark-digitals',
  address: {
    line1: 'Prashanth Plaza, 5th Cross, 4th Main',
    line2: 'Saraswathipuram, Mysuru 570009',
    line3: 'Karnataka, India',
  },
  hq: {
    address: 'Prashanth Plaza, 5th Cross, 4th Main, Saraswathipuram',
    city: 'Mysuru',
    state: 'Karnataka',
    pincode: '570009',
    country: 'India',
    coordinates: '12.3051° N, 76.6554° E',
  },
  locations: ['Mysuru', 'Bengaluru', 'Hyderabad'],
  branches: ['Bengaluru', 'Hyderabad'],
  leadership: [
    {
      name: 'Tejasvi Jois',
      role: 'Chief Executive Officer',
      title: 'CEO',
      initials: 'TJ',
      bio: 'Directs studio strategy, client partnerships, and technical governance across engineering engagements.',
    },
    {
      name: 'Harshith V. Malipatil',
      role: 'Chief Operating Officer',
      title: 'COO',
      initials: 'HM',
      bio: 'Manages cross-functional delivery operations, sprint velocity, and quality control systems.',
    },
    {
      name: 'Revanth Kumar S',
      role: 'Chief Technology Officer',
      title: 'CTO',
      initials: 'RK',
      bio: 'Oversees software architecture, cloud infrastructure, AI model pipelines, and technical research.',
    },
    {
      name: 'Prajwal B. P.',
      role: 'Chief Financial Officer',
      title: 'CFO',
      initials: 'PB',
      bio: 'Guides commercial strategy, resource allocation, and capital planning for client initiatives.',
    },
  ],
};

// Aliased for about page
export const TEAM = COMPANY.leadership;

export interface ServiceItem {
  id: string;
  slug: string;
  num: string;
  title: string;
  shortTitle?: string;
  shortDesc: string;
  fullDesc: string;
  description: string;
  longDescription: string;
  deliverables: string[];
  subservices: string[];
  capabilities: string[];
  problems: string[];
  heroHeadline: string;
  faqs: { q: string; a: string }[];
  techStack: string[];
  primaryMetric: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-development',
    slug: 'web-development',
    num: '01',
    title: 'Web Development',
    shortTitle: 'Web Development',
    shortDesc: 'Next.js and React applications, customer portals, and headless CMS platforms engineered for sub-second page loads.',
    fullDesc:
      'We engineer production web applications using Next.js App Router, TypeScript, and server-side rendering. Systems are built for high concurrency, strict core web vitals, and clean API contracts.',
    description: 'High-performance Next.js and React web applications.',
    longDescription:
      'We engineer production web applications using Next.js App Router, TypeScript, and server-side rendering. Systems are built for high concurrency, strict core web vitals, and clean API contracts.',
    deliverables: [
      'Production Next.js application codebase',
      'Headless CMS content schema & API integration',
      'Lighthouse 95+ performance optimization',
      'Automated CI/CD deployment pipeline',
    ],
    subservices: ['Next.js Architecture', 'Customer Portals', 'Headless CMS', 'Enterprise APIs'],
    capabilities: [
      'Edge SSR & Static Generation',
      'TypeScript Type-Safe APIs',
      'Multi-tenant Customer Portals',
      'Sub-second Core Web Vitals',
    ],
    problems: [
      'Slow monolithic websites causing checkout and lead abandonment',
      'Bloated third-party scripts degrading Core Web Vitals',
      'Brittle CMS setups requiring developers for minor text edits',
    ],
    heroHeadline: 'High-performance web applications built for measurable throughput.',
    faqs: [
      {
        q: 'Why Next.js App Router instead of standard React SPA?',
        a: 'Next.js App Router provides streaming server-side rendering and edge caching, delivering sub-second initial loads and immediate search indexing.',
      },
      {
        q: 'How do you guarantee Lighthouse 95+ scores?',
        a: 'We enforce zero layout shift (CLS 0.0), optimized responsive image pipelines, and run automated CI performance tests on every pull request.',
      },
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind / CSS Tokens'],
    primaryMetric: '< 800ms TTFB at 95th percentile',
  },
  {
    id: 'mobile-app-development',
    slug: 'mobile-app-development',
    num: '02',
    title: 'Mobile App Development',
    shortTitle: 'Mobile Apps',
    shortDesc: 'Cross-platform iOS and Android applications built with Flutter and React Native, featuring real-time state synchronization.',
    fullDesc:
      'Native-calibre mobile applications with offline-first data synchronization, low-latency background processing, and device sensor integration. Clean architecture separating domain models from UI presentation.',
    description: 'Cross-platform mobile applications for iOS and Android.',
    longDescription:
      'Native-calibre mobile applications with offline-first data synchronization, low-latency background processing, and device sensor integration.',
    deliverables: [
      'Cross-platform iOS and Android production binaries',
      'Offline-first SQLite/Realm sync engine',
      'Push notification & deep-linking infrastructure',
      'Automated App Store & Play Store deployment scripts',
    ],
    subservices: ['Flutter Engineering', 'React Native Builds', 'Offline Sync Engines', 'App Store Delivery'],
    capabilities: [
      '60fps Hardware-Accelerated UI',
      'Real-Time WebSocket Synchronization',
      'Secure On-Device Biometric Auth',
      'Automated OTA Code Updates',
    ],
    problems: [
      'Laggy hybrid wrappers that frustrate mobile users',
      'Data loss when users transit through intermittent connectivity',
      'Slow approval cycles and manual store deployment headaches',
    ],
    heroHeadline: 'Cross-platform mobile apps with native fluid response.',
    faqs: [
      {
        q: 'Do you recommend Flutter or React Native?',
        a: 'We evaluate based on your codebase: React Native if sharing logic with web TypeScript teams; Flutter if requiring custom canvas graphics and 60fps animations.',
      },
      {
        q: 'How do offline workflows handle conflicts?',
        a: 'We implement client-side local queues with timestamped deterministic conflict resolution and optimistic UI updates.',
      },
    ],
    techStack: ['Flutter', 'React Native', 'Dart', 'Kotlin', 'Swift', 'Firebase / Supabase'],
    primaryMetric: '60fps render consistency across devices',
  },
  {
    id: 'ai-intelligent-systems',
    slug: 'ai-intelligent-systems',
    num: '03',
    title: 'AI & Intelligent Systems',
    shortTitle: 'AI Systems',
    shortDesc: 'Custom LLM integrations, retrieval-augmented generation (RAG), automated workflow pipelines, and predictive analytics.',
    fullDesc:
      'Production AI systems integrated into operational software. We build deterministic evaluation suites, secure vector embeddings, and automated agent pipelines that solve concrete operational bottlenecks.',
    description: 'Custom LLM integrations and automated intelligent pipelines.',
    longDescription:
      'Production AI systems integrated into operational software. We build deterministic evaluation suites, secure vector embeddings, and automated agent pipelines that solve concrete operational bottlenecks.',
    deliverables: [
      'RAG pipeline with semantic vector index',
      'Fine-tuned open-source or commercial LLM orchestration',
      'Automated lead qualification & operational chat agents',
      'Telemetry dashboard tracking model latency and token spend',
    ],
    subservices: ['RAG Pipeline Engineering', 'Operational Chat Agents', 'Predictive ML Models', 'Model Governance & Telemetry'],
    capabilities: [
      'Vector Semantic Search (pgvector)',
      'Deterministic Evaluation Suites',
      'WhatsApp / Webhook Lead Agents',
      'Structured Tool-Calling Chains',
    ],
    problems: [
      'Generic AI demos that hallucinate and fail in production',
      'Uncontrolled token spend with no visibility into per-request costs',
      'Customer support teams overwhelmed with repetitive inquiries',
    ],
    heroHeadline: 'Deterministic AI systems that do measurable operational work.',
    faqs: [
      {
        q: 'How do you prevent model hallucinations?',
        a: 'We use strict retrieval-augmented boundaries, deterministic guardrails, and unit-tested evaluation benchmarks against known ground truth.',
      },
      {
        q: 'Can our enterprise data remain strictly private?',
        a: 'Yes. We deploy self-hosted open models on your private cloud (AWS/GCP VPC) or zero-retention enterprise enterprise APIs.',
      },
    ],
    techStack: ['Python', 'LangChain / LlamaIndex', 'OpenAI', 'Anthropic', 'pgvector / Pinecone', 'FastAPI'],
    primaryMetric: '98.4% retrieval accuracy on domain data',
  },
  {
    id: 'cloud-devops',
    slug: 'cloud-devops',
    num: '04',
    title: 'Cloud & DevOps',
    shortTitle: 'Cloud & DevOps',
    shortDesc: 'AWS and GCP infrastructure as code, automated CI/CD pipelines, container orchestration, and 99.9% uptime architectures.',
    fullDesc:
      'Reproducible infrastructure specified in Terraform and Docker. We build multi-zone environments with automated zero-downtime rollouts, secrets management, and proactive alerting before failures impact users.',
    description: 'Infrastructure as code, container orchestration, and 99.9% uptime.',
    longDescription:
      'Reproducible infrastructure specified in Terraform and Docker. We build multi-zone environments with automated zero-downtime rollouts, secrets management, and proactive alerting before failures impact users.',
    deliverables: [
      'Infrastructure as Code (Terraform / Pulumi)',
      'Dockerized container orchestration (ECS / EKS / Cloud Run)',
      'Automated staging and production GitHub Actions pipelines',
      'Prometheus, Grafana & CloudWatch monitoring suites',
    ],
    subservices: ['Terraform Infrastructure', 'Zero-Downtime CI/CD', 'Docker Orchestration', '24/7 Health Monitoring'],
    capabilities: [
      'Multi-Availability Zone Failover',
      'Zero-Trust Secrets Management',
      'Automated Database Snapshotting',
      'Edge CDN Static Distribution',
    ],
    problems: [
      'Manual server deployments leading to unplanned downtime',
      'Sprawling cloud invoices with underutilized server resources',
      'Lack of automated rollbacks during production incident response',
    ],
    heroHeadline: 'Reproducible cloud infrastructure engineered for 99.9% uptime.',
    faqs: [
      {
        q: 'Do you manage AWS, GCP, or multi-cloud?',
        a: 'We architect natively for both AWS and GCP using Terraform, ensuring your infrastructure is fully version-controlled and reproducible.',
      },
      {
        q: 'How do you handle zero-downtime releases?',
        a: 'We configure blue-green and rolling deployment strategies with automated health probes before traffic cutover.',
      },
    ],
    techStack: ['AWS', 'Google Cloud', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions'],
    primaryMetric: '99.9% documented uptime SLA',
  },
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    num: '05',
    title: 'UI/UX Design',
    shortTitle: 'UI/UX Design',
    shortDesc: 'Research-driven design systems, user journeys, wireframes, high-fidelity Figma prototypes, and WCAG accessibility.',
    fullDesc:
      'Design rooted in behavioral research and cognitive science. We map real user workflows, build tokenized Figma component libraries, and validate navigation through interactive user testing before code is written.',
    description: 'Design systems, user research, and accessible interfaces.',
    longDescription:
      'Design rooted in behavioral research and cognitive science. We map real user workflows, build tokenized Figma component libraries, and validate navigation through interactive user testing before code is written.',
    deliverables: [
      'User journey maps and task analysis reports',
      'Tokenized Figma component library and style guide',
      'Interactive clickable high-fidelity prototype',
      'WCAG 2.2 AA accessibility audit report',
    ],
    subservices: ['User Workflow Research', 'Tokenized Design Systems', 'Figma Clickable Prototypes', 'WCAG 2.2 AA Auditing'],
    capabilities: [
      'Design Tokens (Figma to Code)',
      'High-Fidelity Interaction Motion',
      'Task-Based Usability Validation',
      'Accessible Color Contrasts (4.5:1)',
    ],
    problems: [
      'Inconsistent visual styling across different product surfaces',
      'Users confused by unintuitive multi-step onboarding journeys',
      'Failing accessibility compliance audits for public sector/enterprise',
    ],
    heroHeadline: 'Behavioral product design validated before a line of code is written.',
    faqs: [
      {
        q: 'Do you deliver raw Figma files or code tokens?',
        a: 'We deliver both: an organized Figma component library with auto-layout and a matching JSON/CSS tokens export for direct engineering integration.',
      },
      {
        q: 'How do you test usability prior to development?',
        a: 'We run structured usability sessions using interactive prototypes, measuring time-to-task and error rates across critical user journeys.',
      },
    ],
    techStack: ['Figma', 'FigJam', 'Tokens Studio', 'Zeroheight', 'Accessibility Insights'],
    primaryMetric: '100% WCAG 2.2 AA compliance verified',
  },
  {
    id: 'digital-marketing-growth',
    slug: 'digital-marketing-growth',
    num: '06',
    title: 'Digital Marketing & Growth',
    shortTitle: 'Growth & SEO',
    shortDesc: 'Technical SEO, performance marketing architectures, conversion rate optimization (CRO), and data-driven pipeline growth.',
    fullDesc:
      'Growth engineering focused on organic search capture, clean conversion tracking, and measurable revenue pipeline. No vanity metrics or generic social feeds — only audited channels that drive project enquiries.',
    description: 'Technical SEO, conversion engineering, and pipeline growth.',
    longDescription:
      'Growth engineering focused on organic search capture, clean conversion tracking, and measurable revenue pipeline. No vanity metrics or generic social feeds — only audited channels that drive project enquiries.',
    deliverables: [
      'Technical SEO architecture (JSON-LD, robots, sitemap, Core Web Vitals)',
      'Server-side conversion tracking & Google Tag Manager setup',
      'A/B testing test plans and multivariate experiment designs',
      'Monthly attribution report connecting clicks to pipeline revenue',
    ],
    subservices: ['Technical SEO Auditing', 'Server-Side GA4 Tracking', 'CRO & Funnel Optimization', 'Pipeline Attribution'],
    capabilities: [
      'Semantic Structured Data (JSON-LD)',
      'Clean Server-Side Event Dispatch',
      'Landing Page Velocity Testing',
      'Conversion Bottleneck Tracing',
    ],
    problems: [
      'High ad spend with no visibility into which keywords drive real sales',
      'Organic pages failing to index due to technical crawl errors',
      'High homepage traffic that completely fails to convert into leads',
    ],
    heroHeadline: 'Technical search architecture and revenue conversion engineering.',
    faqs: [
      {
        q: 'What is the difference between standard marketing and technical SEO?',
        a: 'Technical SEO fixes architectural barriers: indexability, crawl budget, canonicalization, Core Web Vitals, and semantic JSON-LD schema.',
      },
      {
        q: 'How do you measure success?',
        a: 'We measure verified pipeline enquiries, conversion rate improvements, and rank elevation on qualified search keywords.',
      },
    ],
    techStack: ['Google Search Console', 'Ahrefs', 'GA4 Server-Side', 'PostHog', 'Mixpanel'],
    primaryMetric: 'Measurable pipeline conversion improvement',
  },
  // Backward compatibility alias slugs:
  {
    id: 'digital-solutions',
    slug: 'digital-solutions',
    num: '01',
    title: 'Web & Digital Solutions',
    shortTitle: 'Digital Solutions',
    shortDesc: 'Next.js and React applications, customer portals, and headless CMS platforms.',
    fullDesc: 'We engineer production web applications using Next.js App Router, TypeScript, and server-side rendering.',
    description: 'High-performance web applications and enterprise software.',
    longDescription: 'From marketing sites to complex ERP systems, we build digital products that are fast, accessible, and engineered to scale.',
    deliverables: ['Production Next.js application codebase', 'Lighthouse 95+ performance optimization'],
    subservices: ['Web Development', 'App Development', 'Custom Software Development', 'SaaS Software Development'],
    capabilities: ['Business websites', 'E-commerce platforms', 'Admin dashboards', 'CRM & ERP systems'],
    problems: ['Generic website templates that don\'t convert visitors', 'Fragmented software tools that don\'t talk to each other'],
    heroHeadline: 'Digital products built for how your business actually works.',
    faqs: [
      { q: 'Do you build from scratch?', a: 'Yes, we architect clean Next.js, React, and TypeScript code.' },
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL'],
    primaryMetric: '< 800ms TTFB at 95th percentile',
  },
  {
    id: 'data-analytics',
    slug: 'data-analytics',
    num: '03',
    title: 'Data & Analytics',
    shortTitle: 'Data Analytics',
    shortDesc: 'Telemetry pipelines, business intelligence dashboards, and predictive metrics.',
    fullDesc: 'We build end-to-end data pipelines and real-time dashboards to convert operational data into clear business decisions.',
    description: 'Turn operational data into clear business intelligence.',
    longDescription: 'We build end-to-end data pipelines and real-time dashboards to convert operational data into clear business decisions.',
    deliverables: ['Real-time telemetry dashboard', 'Automated ETL pipeline', 'Custom metrics reporting suite'],
    subservices: ['BI Dashboards', 'Data Warehousing', 'Telemetry Pipelines', 'Predictive Metrics'],
    capabilities: ['TimescaleDB / ClickHouse', 'Grafana / Superset', 'PostHog Product Analytics'],
    problems: ['Decisions made on gut feel without data validation', 'Disparate data silos across departments'],
    heroHeadline: 'Operational analytics dashboards built on real-time data.',
    faqs: [{ q: 'Can you integrate with existing databases?', a: 'Yes, we support PostgreSQL, MySQL, Snowflake, and MongoDB.' }],
    techStack: ['Python', 'TimescaleDB', 'PostgreSQL', 'Grafana'],
    primaryMetric: 'Real-time telemetry sync',
  },
  {
    id: 'business-growth-strategy',
    slug: 'business-growth-strategy',
    num: '06',
    title: 'Business Growth & Strategy',
    shortTitle: 'Growth Strategy',
    shortDesc: 'Technical SEO, conversion rate optimization (CRO), and pipeline growth.',
    fullDesc: 'Growth engineering focused on organic search capture, clean conversion tracking, and measurable revenue pipeline.',
    description: 'Technical SEO, conversion engineering, and pipeline growth.',
    longDescription: 'Growth engineering focused on organic search capture, clean conversion tracking, and measurable revenue pipeline.',
    deliverables: ['Technical SEO audit report', 'Conversion rate optimization roadmap'],
    subservices: ['Technical SEO', 'Performance Marketing', 'Conversion Optimization', 'Funnel Analytics'],
    capabilities: ['Search Console Indexing', 'Core Web Vitals Optimization', 'Server-Side Analytics'],
    problems: ['Unfocused marketing spend with low ROI', 'High bounce rates on landing pages'],
    heroHeadline: 'Technical search architecture and revenue conversion engineering.',
    faqs: [{ q: 'How long until results appear?', a: 'Technical SEO fixes show indexing improvements within 2 to 4 weeks.' }],
    techStack: ['Ahrefs', 'Search Console', 'GA4 Server-Side'],
    primaryMetric: 'Measurable pipeline conversion improvement',
  },
  {
    id: 'workforce-tech-hiring',
    slug: 'workforce-tech-hiring',
    num: '07',
    title: 'Workforce & Tech Hiring',
    shortTitle: 'Tech Hiring',
    shortDesc: 'Senior engineering talent sourcing and technical assessment advisory.',
    fullDesc: 'We help ambitious startups evaluate, vet, and onboard senior engineering and design talent through rigorous code assessments.',
    description: 'Technical recruitment and engineering talent assessment.',
    longDescription: 'We help ambitious startups evaluate, vet, and onboard senior engineering and design talent through rigorous code assessments.',
    deliverables: ['Technical assessment rubric', 'Vetted candidate dossiers'],
    subservices: ['Technical Vetting', 'Engineering Skill Tests', 'Team Structuring'],
    capabilities: ['Live Architecture Interviews', 'Code Quality Grading', 'Cultural Alignment'],
    problems: ['Hiring engineers who pass resume screens but fail production code tests', 'High attrition from poor technical fit'],
    heroHeadline: 'Vetted engineering talent evaluated by practicing engineers.',
    faqs: [{ q: 'How do you evaluate candidates?', a: 'Our CTO and senior leads run real-world coding reviews, not trivia questions.' }],
    techStack: ['Technical Rubric', 'Live Pair Programming'],
    primaryMetric: '100% technical competency verification',
  },
];

export const NAV_SERVICES = SERVICES.slice(0, 6).map((s) => ({
  label: s.title,
  href: `/#capabilities`,
}));

export interface MethodologyStage {
  num: string;
  name: string;
  duration: string;
  description: string;
  activities: string[];
  deliverable: string;
  metric: string;
}

export const METHODOLOGY_STAGES: MethodologyStage[] = [
  {
    num: '01',
    name: 'DISCOVERY',
    duration: 'Stage 01',
    description: 'Audit business model, market gap and user intent. No assumptions.',
    activities: [
      'Audit business model, market gap and user intent',
      'Stakeholder interviews and requirements breakdown',
      'Operational workflow and user constraint analysis',
    ],
    deliverable: 'Business model audit, market analysis & user intent map',
    metric: '100% requirements validated without assumptions',
  },
  {
    num: '02',
    name: 'RESEARCH',
    duration: 'Stage 02',
    description: 'Competitive teardown, user signals, technical feasibility study.',
    activities: [
      'Competitive teardown and industry benchmark study',
      'Real-world user signals and behavior mapping',
      'Technical feasibility and architecture evaluation',
    ],
    deliverable: 'Competitive teardown report & feasibility matrix',
    metric: 'Comprehensive competitor teardown and user signals',
  },
  {
    num: '03',
    name: 'STRATEGY',
    duration: 'Stage 03',
    description: 'Wireframes, information architecture, conversion logic, tech stack lock.',
    activities: [
      'High-conversion wireframes and layout flows',
      'Information architecture and content hierarchy',
      'Conversion logic and definitive tech stack lock',
    ],
    deliverable: 'Information architecture, wireframes & tech stack lock',
    metric: 'Zero unresolved architectural dependencies',
  },
  {
    num: '04',
    name: 'DEVELOPMENT',
    duration: 'Stage 04',
    description: 'Modular, version-controlled engineering against staged milestones.',
    activities: [
      'Modular TypeScript frontend and backend services',
      'Version-controlled engineering against staged milestones',
      'Automated testing suites and continuous integration',
    ],
    deliverable: 'Modular production codebase & staged milestone releases',
    metric: 'Staged sprint milestones delivered on schedule',
  },
  {
    num: '05',
    name: 'TESTING',
    duration: 'Stage 05',
    description: 'Performance, security, accessibility and end-to-end QA before release.',
    activities: [
      'Lighthouse 95+ Core Web Vitals performance tuning',
      'Security audit and penetration vulnerability scanning',
      'Accessibility, cross-browser and end-to-end QA validation',
    ],
    deliverable: 'Performance audit, security verification & end-to-end QA',
    metric: '100% QA pass rate across performance and security',
  },
  {
    num: '06',
    name: 'LAUNCH & SCALE',
    duration: 'Stage 06',
    description: 'Deploy, monitor, iterate. Infrastructure scaled as load demands.',
    activities: [
      'Zero-downtime production deployment and CDN setup',
      'Live log streaming, real-time metrics and uptime monitoring',
      'Iterative optimization and auto-scaling infrastructure',
    ],
    deliverable: 'Production deployment, live monitoring & scaling infrastructure',
    metric: 'Infrastructure scaled smoothly as load demands',
  },
];

// Aliased for process page
export const PROCESS_STEPS = METHODOLOGY_STAGES.map((m) => ({
  num: m.num,
  title: m.name,
  desc: m.description,
  duration: m.duration,
  deliverable: m.deliverable,
}));

export interface PhilosophyComparison {
  topic: string;
  agencyWay: string;
  engineeringWay: string;
}

export const PHILOSOPHY_COMPARISONS: PhilosophyComparison[] = [
  {
    topic: 'Starting Point',
    agencyWay: 'Pre-made Webflow/ThemeForest templates with placeholder copy and cosmetic revisions.',
    engineeringWay: 'First-principles research into your operational workflows, user behaviour, and data architecture.',
  },
  {
    topic: 'Technical Stack',
    agencyWay: 'Monolithic plugins, bloated page builders, and rigid no-code dependencies.',
    engineeringWay: 'Production Next.js, TypeScript, decoupled APIs, and reproducible infrastructure as code.',
  },
  {
    topic: 'Performance Target',
    agencyWay: 'Average 40–60 Lighthouse scores weighted down by unoptimized tracking scripts.',
    engineeringWay: 'Guaranteed 95+ Lighthouse scores, sub-second TTFB, and zero layout shift.',
  },
  {
    topic: 'Design Process',
    agencyWay: 'Superficial mockups disconnected from real data states, edge cases, and accessibility.',
    engineeringWay: 'Tokenized design systems, strict WCAG 2.2 AA contrast, and tested responsive layouts.',
  },
  {
    topic: 'Delivery Model',
    agencyWay: 'Vague milestone dates with no intermediate deliverable verification.',
    engineeringWay: '6-stage lifecycle with documented artifacts at each phase: specs, prototypes, and test reports.',
  },
  {
    topic: 'Post-Launch Reality',
    agencyWay: 'Disappears after final invoice; expensive change orders for basic maintenance.',
    engineeringWay: 'Structured handover, clean version-controlled repository, and automated monitoring.',
  },
];

export interface EngineeringStandard {
  category: string;
  metric: string;
  spec: string;
  verificationMethod: string;
}

export const ENGINEERING_STANDARDS: EngineeringStandard[] = [
  {
    category: 'Performance',
    metric: 'Lighthouse 95+',
    spec: 'Sub-800ms Time to First Byte (TTFB), First Contentful Paint < 1.0s, Cumulative Layout Shift 0.00.',
    verificationMethod: 'Automated CI Lighthouse run on every pull request.',
  },
  {
    category: 'Security',
    metric: 'OWASP Compliant',
    spec: 'Zero-trust environment secrets, strict Content Security Policy headers, sanitized queries, CSRF tokens.',
    verificationMethod: 'Automated dependency vulnerability scanning & static code analysis.',
  },
  {
    category: 'Accessibility',
    metric: 'WCAG 2.2 AA',
    spec: '4.5:1 text contrast minimum, full keyboard navigation, ARIA landmarks, screen reader verified.',
    verificationMethod: 'axe-core automated checks plus manual voiceover navigation.',
  },
  {
    category: 'Reliability',
    metric: '99.9% Uptime',
    spec: 'Multi-zone deployment, auto-healing container instances, automated hourly database snapshots.',
    verificationMethod: 'Independent 60-second ping telemetry with multi-region health probes.',
  },
];

export interface CaseStudy {
  id: string;
  slug: string;
  tag: string;
  title: string;
  headline: string;
  industry: string;
  type: string;
  scope: string[];
  url?: string;
  quote?: string;
  client: string;
  year: string;
  category: string;
  description: string;
  summary: string;
  tags: string[];
  stack: string[];
  results: string[];
  challenges: string[];
  solutions: string[];
  problem: string;
  research: string;
  build: string;
  outcome: string;
  isPlaceholder: boolean;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'rexu',
    slug: 'rexu',
    tag: 'Safety · SaaS · B2B & B2C',
    category: 'Safety & Trust SaaS',
    title: 'REXU',
    headline: "Technology that speaks when you can't.",
    industry: 'Safety Technology & SaaS',
    type: 'SaaS Platform',
    scope: ['Emergency QR Architecture', 'Fleet Safety Systems', '24/7 Response Routing', 'Privacy Protection'],
    client: 'REXU Technologies',
    year: '2024',
    summary: 'A safety and trust platform for real-world emergencies — for individual riders, families, cab operators, and fleet owners.',
    description:
      "REXU is a safety and trust platform for real-world emergencies — for individual riders and families, and for logistics companies, cab operators, and fleet owners. A QR on your vehicle or ID lets anyone reach your emergency contacts in seconds: no app required, privacy intact, active 24/7. Built for Indian roads, families, and workplaces.",
    problem:
      "In critical road and workplace emergencies, victims often cannot unlock phones or communicate vital medical and contact details to first responders.",
    research:
      "Researched first-responder dynamics across Indian roads. Designed zero-app QR interaction requiring no authentication for bystanders while protecting user contact privacy.",
    build:
      "Engineered the full REXU QR safety infrastructure, instant emergency contact routing engine, and fleet telemetry management portal.",
    outcome:
      "Emergency contact reachable in seconds with zero app installation, complete privacy preservation, and 24/7 active availability.",
    tags: ['Safety Tech', 'SaaS', 'QR Platform', 'Fleet Systems'],
    stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Cloud Infrastructure'],
    results: ['Emergency contacts reached in seconds', 'Zero app required for bystanders', 'Active 24/7 fleet and family coverage'],
    challenges: ['Zero-friction bystander access without app downloads', 'End-to-end contact number masking & privacy'],
    solutions: ['Web-based instant QR resolver', 'Encrypted cloud emergency dispatch routing'],
    isPlaceholder: false,
  },
  {
    id: 'dronark-aerospace',
    slug: 'dronark-aerospace',
    tag: 'Web · Live',
    category: 'Aerospace & Robotics',
    title: 'Dronark Aerospace',
    headline: 'Ambition and aerospace innovation.',
    industry: 'Aerospace & Drones',
    type: 'Web Platform',
    scope: ['Digital Presence Engineering', 'Brand Presentation', 'High-Performance Architecture'],
    client: 'Dronark Aerospace',
    year: '2024',
    summary: 'Not just a client. A founder-led decision. Digital platform for aerospace innovation.',
    description:
      'Not just a client. A founder-led decision. Founded by Drone Prathap, Dronark represents ambition and aerospace innovation — we built a digital presence to match that scale.',
    problem:
      'High-ambition aerospace company required an authoritative digital platform to match global innovation scale.',
    research:
      'Researched aerospace and robotics digital benchmarks to balance technical credibility with bold founder-led visual storytelling.',
    build:
      'Engineered a high-performance web platform reflecting aerospace ambition, deep engineering credibility, and international scale.',
    outcome:
      'Deployed to live production with sub-second performance and seamless brand experience.',
    tags: ['Aerospace', 'Web Engineering', 'Performance UI'],
    stack: ['Next.js', 'React', 'TypeScript', 'Edge CDN'],
    results: ['Sub-second page loading speed', 'Authoritative aerospace brand presence', 'Founder-led digital scale'],
    challenges: ['Representing bleeding-edge aerospace technology credibly'],
    solutions: ['Clean typographic architecture and precision visual hierarchy'],
    isPlaceholder: false,
  },
  {
    id: 'vivid-infrastructures',
    slug: 'vivid-infrastructures',
    tag: 'Web · Live',
    category: 'Civil Infrastructure',
    title: 'Vivid Infrastructures — Mysore',
    headline: 'Everything was perfect from the first design.',
    industry: 'Civil Engineering & Infrastructure',
    type: 'Corporate Web Platform',
    scope: ['Corporate Web Architecture', 'Project Portfolios', 'Conversion Optimization'],
    client: 'Vivid Infrastructures',
    year: '2024',
    summary: 'Authoritative platform for builders and infrastructure firms — clear, credible, conversion-led.',
    description:
      "Everything was perfect from the first design. The website looks great and the team's follow-up was excellent. We couldn't be happier with the results.",
    problem:
      'Civil infrastructure firm needed a modern digital home to showcase large-scale civil projects and attract commercial partnerships.',
    research:
      'Audited infrastructure client decision paths to structure project portfolios for maximum credibility and lead conversion.',
    build:
      'Delivered a structured corporate platform with high-resolution project showcases, service credentials, and clear inquiry funnels.',
    outcome:
      'Delivered on time with excellent follow-up, verified high client satisfaction, and streamlined partner inquiries.',
    tags: ['Civil Infrastructure', 'Web Platform', 'Corporate'],
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    results: ['First-design perfection', 'Streamlined project lead flow', 'Excellent client feedback'],
    challenges: ['Showcasing extensive engineering portfolios clearly'],
    solutions: ['Modular portfolio catalog with high-speed asset optimization'],
    isPlaceholder: false,
  },
  {
    id: 'naidile',
    slug: 'naidile',
    tag: 'Web · Live',
    category: 'Brand & E-Commerce',
    title: 'Naidile',
    headline: 'Clean, modern, and delivered on time.',
    industry: 'Lifestyle & Commerce',
    type: 'Web Platform',
    scope: ['Brand Vision Execution', 'Modern Responsive UI', 'Speed Optimization'],
    client: 'Naidile',
    year: '2024',
    summary: 'Professional execution with a strong understanding of brand vision. Clean, modern, delivered on time.',
    description:
      'Professional execution with a strong understanding of our brand vision. Clean, modern, and delivered on time.',
    problem:
      'Brand required a refined digital presence that conveyed brand aesthetics while loading rapidly across all mobile devices.',
    research:
      'Analyzed brand aesthetics and user journey bottlenecks to create a frictionless browsing experience.',
    build:
      'Developed a clean, modern web application prioritizing visual clarity, responsive layouts, and swift interactions.',
    outcome:
      'Delivered on time with unanimous stakeholder satisfaction and seamless multi-device fidelity.',
    tags: ['Brand Experience', 'Responsive UI', 'Modern Web'],
    stack: ['Next.js', 'React', 'TypeScript'],
    results: ['Delivered exactly on schedule', 'Clean modern brand execution', 'High-performance mobile UX'],
    challenges: ['Preserving artistic brand vision while ensuring sub-second performance'],
    solutions: ['Modern component architecture and progressive image rendering'],
    isPlaceholder: false,
  },
  {
    id: 'nandini-decor',
    slug: 'nandini-decor',
    tag: 'Web · Live',
    category: 'Interior Design & Decor',
    title: 'Nandini Decor',
    headline: 'The design reflects our creativity beautifully.',
    industry: 'Interior Architecture & Decor',
    type: 'Portfolio & Showcase',
    scope: ['Visual Portfolio', 'Creative Showcase', 'Client Inquiries'],
    client: 'Nandini Decor',
    year: '2024',
    summary: 'The design reflects our creativity beautifully. Smooth communication and a very refined outcome.',
    description:
      'The design reflects our creativity beautifully. Smooth communication and a very refined outcome.',
    problem:
      'Interior decor studio needed an elegant platform to showcase design aesthetics and attract high-value decor clients.',
    research:
      'Studied visual interior design portfolios to create an uncluttered gallery system highlighting craftsmanship.',
    build:
      'Built a refined portfolio platform with smooth transitions, rich imagery, and clear customer engagement points.',
    outcome:
      'Elevated studio positioning with smooth communication throughout delivery and high client engagement.',
    tags: ['Decor & Design', 'Visual Portfolio', 'Refined UX'],
    stack: ['React', 'Next.js', 'TypeScript'],
    results: ['Creative expression reflected beautifully', 'Smooth collaborative delivery', 'Refined client outcome'],
    challenges: ['Balancing large image visual richness with mobile page speed'],
    solutions: ['Optimized responsive media pipelines with modern formats'],
    isPlaceholder: false,
  },
  {
    id: 'dee-events',
    slug: 'dee-events',
    tag: 'Web · Live',
    category: 'Event Management',
    title: 'DEE Events',
    headline: 'A vibrant and well-structured website.',
    industry: 'Event Planning & Production',
    type: 'Event Platform',
    scope: ['Event Showcases', 'Booking Inquiries', 'Dynamic Layouts'],
    client: 'DEE Events',
    year: '2024',
    summary: 'A vibrant and well-structured website that showcases our events perfectly.',
    description:
      'A vibrant and well-structured website that showcases our events perfectly. The team understood our requirements clearly.',
    problem:
      'Event production brand required an engaging website to highlight diverse events and capture incoming booking inquiries.',
    research:
      'Mapped customer booking decisions for wedding, corporate, and cultural events.',
    build:
      'Engineered a vibrant, structured web presence with dynamic event categorization and responsive booking forms.',
    outcome:
      'Showcases events perfectly with clear requirements execution and active lead generation.',
    tags: ['Events', 'Dynamic Platform', 'Lead Generation'],
    stack: ['React', 'Next.js', 'TypeScript'],
    results: ['Perfect event showcasing', 'Clear requirement understanding', 'Vibrant responsive design'],
    challenges: ['Organizing diverse event formats into an intuitive visual hierarchy'],
    solutions: ['Category-filtered event grid and frictionless mobile contact funnel'],
    isPlaceholder: false,
  },
];

// Aliased for work pages
export const PROJECTS = CASE_STUDIES;

export const CAREERS = [
  {
    num: '01',
    title: 'Web Development Intern',
    slug: 'web-development-intern',
    type: 'Internship',
    arrangement: 'Hybrid',
    location: 'Mysuru',
    description: 'Ship production UI with React and TypeScript. Pair with senior engineers on client sites, internal tools, and performance work.',
    desc: 'Ship production UI with React and TypeScript. Pair with senior engineers on client sites, internal tools, and performance work.',
    applyUrl: '/#contact',
    requirements: ['React and TypeScript proficiency', 'Understanding of responsive design & component architecture', 'Passion for research-led web development'],
  },
  {
    num: '02',
    title: 'UI / UX Design Intern',
    slug: 'ui-ux-design-intern',
    type: 'Full-time',
    arrangement: 'Remote',
    location: 'Remote',
    description: "Research user flows, wireframe conversion paths, and deliver high-fidelity screens aligned with AdMark's research-led process.",
    desc: "Research user flows, wireframe conversion paths, and deliver high-fidelity screens aligned with AdMark's research-led process.",
    applyUrl: '/#contact',
    requirements: ['Proficiency with Figma and design systems', 'User journey mapping and conversion flow wireframing', 'Strong sense of layout, typography, and visual hierarchy'],
  },
];
