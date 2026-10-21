'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useCinematicScroll } from '@/components/SmoothScrollProvider';

interface WheelService {
  id: string;
  slug: string;
  num: string;
  shortTitle: string;
  title: string;
  primaryMetric: string;
  fullDesc: string;
  deliverables: string[];
  techStack: string[];
}

const WHEEL_SERVICES: WheelService[] = [
  {
    id: 'web-development',
    slug: 'web-development',
    num: '01',
    shortTitle: 'Web Development',
    title: 'Web Development & Scaled Platforms',
    primaryMetric: '< 800ms TTFB at 95th percentile',
    fullDesc: 'We engineer production web applications using Next.js App Router, TypeScript, and server-side rendering. Systems are built for high concurrency, strict core web vitals, and clean API contracts.',
    deliverables: [
      'Production Next.js application codebase',
      'Headless CMS schema & API contracts',
      'Lighthouse 95+ performance optimization',
      'Automated CI/CD deployment pipeline',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'mobile-app-development',
    slug: 'mobile-app-development',
    num: '02',
    shortTitle: 'Mobile Apps',
    title: 'Cross-Platform Mobile Applications',
    primaryMetric: '60 FPS native gesture latency',
    fullDesc: 'Native-calibre mobile applications with offline-first data synchronization, low-latency background processing, and device sensor integration across iOS and Android.',
    deliverables: [
      'Flutter & React Native cross-platform codebase',
      'Offline-first SQLite / WatermelonDB sync',
      'App Store & Play Store publishing pipeline',
      'Push notification orchestration engine',
    ],
    techStack: ['Flutter', 'React Native', 'Dart', 'Swift', 'Kotlin'],
  },
  {
    id: 'ai-intelligent-systems',
    slug: 'ai-intelligent-systems',
    num: '03',
    shortTitle: 'AI Systems',
    title: 'AI Systems & Autonomous Agents',
    primaryMetric: '4.8x operational workflow acceleration',
    fullDesc: 'Custom LLM fine-tuning, RAG retrieval pipelines, autonomous multi-agent task execution, and WhatsApp conversational AI engines designed around actual business operations.',
    deliverables: [
      'Custom RAG vector search pipeline',
      'Autonomous multi-agent execution framework',
      'WhatsApp & CRM automated AI agents',
      'Enterprise LLM guardrails & latency monitoring',
    ],
    techStack: ['Python', 'LangChain', 'FastAPI', 'Pinecone', 'OpenAI / Claude API'],
  },
  {
    id: 'cloud-devops',
    slug: 'cloud-devops',
    num: '04',
    shortTitle: 'Cloud & DevOps',
    title: 'Cloud Infrastructure & DevOps Automation',
    primaryMetric: '99.99% uptime with automated failover',
    fullDesc: 'Infrastructure as Code on AWS, automated Kubernetes clusters, zero-downtime blue/green deployments, and 24/7 observability pipelines.',
    deliverables: [
      'Terraform / OpenTofu Infrastructure as Code',
      'Dockerized microservice cluster architecture',
      'GitHub Actions automated CI/CD workflows',
      'Prometheus & Grafana telemetry dashboards',
    ],
    techStack: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  },
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    num: '05',
    shortTitle: 'UI/UX Design',
    title: 'Research-Led Product & Interface Design',
    primaryMetric: '100% Apple HIG & WCAG AAA compliance',
    fullDesc: 'Design systems, interactive prototypes, user journey mapping, and conversion-focused digital products grounded in human interface guidelines and behavioral psychology.',
    deliverables: [
      'Figma multi-tier design tokens system',
      'High-fidelity interactive motion prototypes',
      'User journey mapping & usability audits',
      'Component library with comprehensive variants',
    ],
    techStack: ['Figma', 'Design Systems', 'Motion UX', 'WCAG AAA'],
  },
  {
    id: 'digital-marketing-growth',
    slug: 'digital-marketing-growth',
    num: '06',
    shortTitle: 'Growth & SEO',
    title: 'Technical Growth & Performance SEO',
    primaryMetric: '310% average organic search growth',
    fullDesc: 'Technical SEO audits, programmatic landing page generation, conversion rate optimization (CRO), and multi-channel acquisition funnels.',
    deliverables: [
      'Comprehensive technical SEO infrastructure audit',
      'Programmatic SEO page generation templates',
      'Conversion funnel tracking & telemetry setup',
      'Core Web Vitals crawl budget optimization',
    ],
    techStack: ['Google Search Console', 'Ahrefs', 'Next.js SSG', 'Schema.org JSON-LD'],
  },
  {
    id: 'data-analytics',
    slug: 'data-analytics',
    num: '07',
    shortTitle: 'Data Analytics',
    title: 'Enterprise Data Pipelines & Analytics',
    primaryMetric: 'Sub-second OLAP query response',
    fullDesc: 'Centralized telemetry pipelines, automated data lakes, executive performance dashboards, and predictive forecasting models.',
    deliverables: [
      'Real-time event streaming pipeline architecture',
      'Automated ETL data warehouse ingestion',
      'Executive KPI reporting & business intelligence',
      'Custom alerting & anomaly detection algorithms',
    ],
    techStack: ['PostgreSQL', 'ClickHouse', 'Python', 'Apache Kafka', 'Metabase'],
  },
  {
    id: 'workforce-tech-hiring',
    slug: 'workforce-tech-hiring',
    num: '08',
    shortTitle: 'Tech Hiring',
    title: 'Specialized Tech Hiring & Team Scaling',
    primaryMetric: '< 14 days time-to-hire for vetted engineers',
    fullDesc: 'Embedded engineering talent acquisition, senior tech vetting, contract-to-hire staffing, and dedicated engineering pods for scale-ups.',
    deliverables: [
      'Rigorous technical vetting & code reviews',
      'Embedded full-stack & mobile engineering pods',
      'Flexible contract-to-hire talent models',
      'Seamless team onboarding & sprint alignment',
    ],
    techStack: ['Senior Full-Stack', 'Cloud Architects', 'AI Engineers', 'Mobile Leads'],
  },
];

export function InteractiveCapabilityWheel() {
  const { velocity } = useCinematicScroll();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [lineRotation, setLineRotation] = useState({ r1: 0, r2: 0 });

  const total = WHEEL_SERVICES.length;
  const angleStep = 360 / total; // 45 degrees per item

  // Active target orientation: we rotate the wheel so the active node sits at 0 deg (pointing towards the card)
  const targetRotation = -(activeIndex * angleStep);

  // Background spinning lines animation loop
  const r1Ref = useRef(0);
  const r2Ref = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    let lastTime = performance.now();

    const animate = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      // Base spinning lines speeds + scroll momentum coupling
      const vBoost = Math.abs(velocity) * 0.05;
      r1Ref.current = (r1Ref.current + (14 + vBoost) * dt) % 360;
      r2Ref.current = (r2Ref.current - (10 + vBoost * 0.7) * dt) % 360;

      setLineRotation({
        r1: r1Ref.current,
        r2: r2Ref.current,
      });

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [velocity]);

  const handleSelect = (index: number) => {
    if (index === activeIndex) return;
    setIsRotating(true);
    setActiveIndex(index);
    setTimeout(() => setIsRotating(false), 500);
  };

  const handleNext = () => {
    handleSelect((activeIndex + 1) % total);
  };

  const handlePrev = () => {
    handleSelect((activeIndex - 1 + total) % total);
  };

  // Drag interaction
  const dragStartX = useRef<number | null>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const diff = e.clientX - dragStartX.current;
    dragStartX.current = null;
    if (diff > 40) handlePrev();
    else if (diff < -40) handleNext();
  };

  const activeService = WHEEL_SERVICES[activeIndex];

  // 64 outer precision tick lines for the spinning lines engine
  const ticks = Array.from({ length: 64 }, (_, i) => (i * 360) / 64);

  return (
    <section className="cap-wheel-sec" id="capabilities-wheel" aria-label="Interactive Capability Wheel">
      <div className="container">
        {/* Section Header */}
        <div className="cap-wheel-header">
          <div className="ref-section-pill">
            <span className="ref-section-pill__dot" />
            <span>Interactive Capabilities Wheel</span>
          </div>
          <h2 className="cap-wheel-title">
            Rotate the wheel. <br />
            <em>Architected for real production load.</em>
          </h2>
          <p className="cap-wheel-desc">
            Spin the precision rotary wheel to inspect our specialized engineering pillars, production deliverables, and verified performance benchmarks.
          </p>
        </div>

        {/* Wheeler Main Grid */}
        <div className="cap-wheel-grid">
          {/* LEFT: Rotary Kinetic Line Wheel */}
          <div
            className="cap-wheel-dial-wrapper"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
          >
            {/* The Main Circular Wheel */}
            <div className="cap-wheel-dial">
              {/* Background Kinetic Spinning Lines Engine */}
              <svg viewBox="0 0 460 460" className="cap-wheel-lines-svg" aria-hidden="true">
                <defs>
                  <radialGradient id="wheelCoreGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#E53935" stopOpacity="0.45" />
                    <stop offset="60%" stopColor="#E53935" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#E53935" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="activeSpokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E53935" stopOpacity="0.9" />
                    <stop offset="70%" stopColor="#FF6B6B" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.9" />
                  </linearGradient>
                </defs>

                {/* Layer 1: Ambient background glow */}
                <circle cx="230" cy="230" r="190" fill="url(#wheelCoreGlow)" />

                {/* Layer 2: Static Outer Coordinate & Guide Rings */}
                <circle cx="230" cy="230" r="215" fill="none" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" />
                <circle cx="230" cy="230" r="160" fill="none" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" strokeDasharray="3 6" />
                <circle cx="230" cy="230" r="95" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />

                {/* Layer 3: Rotating Outer Precision Tick Lines (Spinning at r1) */}
                <g transform={`rotate(${lineRotation.r1} 230 230)`}>
                  {ticks.map((deg, idx) => {
                    const isMajor = idx % 8 === 0;
                    const innerR = isMajor ? 198 : 205;
                    const outerR = 214;
                    const rad = (deg * Math.PI) / 180;
                    const x1 = 230 + innerR * Math.cos(rad);
                    const y1 = 230 + innerR * Math.sin(rad);
                    const x2 = 230 + outerR * Math.cos(rad);
                    const y2 = 230 + outerR * Math.sin(rad);
                    return (
                      <line
                        key={`tick-${idx}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke={isMajor ? '#E53935' : '#FFFFFF'}
                        strokeWidth={isMajor ? '1.5' : '0.8'}
                        strokeOpacity={isMajor ? '0.85' : '0.25'}
                      />
                    );
                  })}
                </g>

                {/* Layer 4: Counter-Rotating Dashed Measurement Track (Spinning at r2) */}
                <g transform={`rotate(${lineRotation.r2} 230 230)`}>
                  <circle
                    cx="230"
                    cy="230"
                    r="182"
                    fill="none"
                    stroke="#E53935"
                    strokeWidth="1.25"
                    strokeDasharray="12 8 2 8"
                    strokeOpacity="0.45"
                  />
                  <circle
                    cx="230"
                    cy="230"
                    r="140"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                    strokeDasharray="6 6"
                    strokeOpacity="0.2"
                  />
                </g>

                {/* Layer 5: Active Laser Guide Spoke pointing to 0 deg (focal point) */}
                <g className="cap-wheel-active-spoke">
                  <line
                    x1="230"
                    y1="230"
                    x2="390"
                    y2="230"
                    stroke="url(#activeSpokeGrad)"
                    strokeWidth="2"
                    strokeDasharray="4 3"
                  />
                  <circle cx="390" cy="230" r="4.5" fill="#E53935" stroke="#FFFFFF" strokeWidth="1.5" />
                </g>
              </svg>

              {/* ROTATING NODE CARRIER (Rotates smoothly to align active item at 0 deg) */}
              <div
                className={`cap-wheel-carrier ${isRotating ? 'is-animating' : ''}`}
                style={{ transform: `rotate(${targetRotation}deg)` }}
              >
                {WHEEL_SERVICES.map((s, idx) => {
                  const nodeAngle = idx * angleStep;
                  const isCurrent = idx === activeIndex;

                  return (
                    <div
                      key={s.id}
                      className="cap-wheel-node-anchor"
                      style={{
                        transform: `rotate(${nodeAngle}deg) translate(160px)`,
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => handleSelect(idx)}
                        className={`cap-wheel-node ${isCurrent ? 'is-active' : ''}`}
                        style={{
                          /* Counter-rotate the button text so it stays upright! */
                          transform: `rotate(-${nodeAngle + targetRotation}deg)`,
                        }}
                        aria-label={`Select ${s.title}`}
                        aria-selected={isCurrent}
                      >
                        <span className="cap-wheel-node-dot" />
                        <span className="cap-wheel-node-num">{s.num}</span>
                        <span className="cap-wheel-node-title">{s.shortTitle}</span>
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Machined Center Hub */}
              <div className="cap-wheel-hub" aria-hidden="true">
                <div className="cap-wheel-hub-inner">
                  <span className="cap-wheel-hub-diode" />
                  <span className="cap-wheel-hub-brand">ADMARK</span>
                  <span className="cap-wheel-hub-sub">DIAL</span>
                </div>
              </div>
            </div>

            {/* Rotary Navigation Stepper */}
            <div className="cap-wheel-controls">
              <button
                type="button"
                onClick={handlePrev}
                className="cap-wheel-arrow-btn"
                aria-label="Previous capability"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="cap-wheel-counter">
                <span className="cap-wheel-counter-curr">{activeService.num}</span>
                <span className="cap-wheel-counter-div">/</span>
                <span className="cap-wheel-counter-total">{String(total).padStart(2, '0')}</span>
              </div>
              <button
                type="button"
                onClick={handleNext}
                className="cap-wheel-arrow-btn"
                aria-label="Next capability"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT: Active Service Showcase Card */}
          <div className="cap-wheel-card">
            {/* Top Ribbon */}
            <div className="cap-wheel-card-header">
              <div className="cap-wheel-card-badge">
                <span className="cap-wheel-card-badge-dot" />
                <span>Pillar {activeService.num}</span>
              </div>
              <span className="cap-wheel-card-metric">{activeService.primaryMetric}</span>
            </div>

            {/* Title & Description */}
            <h3 className="cap-wheel-card-title">{activeService.title}</h3>
            <p className="cap-wheel-card-desc">{activeService.fullDesc}</p>

            {/* Verified Deliverables */}
            <div className="cap-wheel-deliverables">
              <span className="cap-wheel-sec-title">Core Deliverables</span>
              <div className="cap-wheel-deliverables-grid">
                {activeService.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="cap-wheel-deliv-item">
                    <span className="cap-wheel-check">✓</span>
                    <span className="cap-wheel-deliv-text">{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Tags & Direct Pillar Link */}
            <div className="cap-wheel-card-footer">
              <div className="cap-wheel-tags">
                {activeService.techStack.map((tech) => (
                  <span key={tech} className="cap-wheel-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={`/services/${activeService.slug}`}
                className="cap-wheel-link-btn"
              >
                <span>Explore Pillar Overview</span>
                <span className="cap-wheel-link-arr">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
