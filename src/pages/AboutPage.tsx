
import React, { useState, useEffect } from 'react';
import { Link } from '@/components/Link';
import { TEAM, COMPANY } from '@/lib/data';
import { CTASection } from '@/components/CTASection';

const VALUES = [
  {
    num: '01',
    title: 'Research before execution',
    desc: 'Every project begins with an honest audit of the problem space. We don\'t start designing until we understand what we\'re solving for.',
  },
  {
    num: '02',
    title: 'Evidence over claims',
    desc: 'We make decisions based on what user behaviour and market data tell us — not assumptions, trends, or what worked for a different client.',
  },
  {
    num: '03',
    title: 'Craft over templates',
    desc: 'We design and build for your specific requirements. Generic solutions produce generic outcomes.',
  },
  {
    num: '04',
    title: 'Transparency at every stage',
    desc: 'You know where we are in the process, what decisions were made, and what\'s coming next. No black boxes.',
  },
];

export default function AboutPage() {
  const [selectedLeader, setSelectedLeader] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'About — Research-Led Digital Product Studio | AdMark Digitals';
  }, []);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">About</span>
          </nav>
          <h1 className="page-hero__title">
            Research-led. Design-driven.<br />Built to scale.
          </h1>
          <p className="page-hero__desc">
            AdMark Digitals is a digital product studio based in Mysuru, India. We work with startups and MSMEs to build digital products, AI systems, and growth infrastructure that reflects how their businesses actually operate.
          </p>
        </div>
      </div>

      {/* What we do */}
      <section className="section" aria-labelledby="about-what">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 6vw, 6rem)', alignItems: 'start' }}>
            <div>
              <p className="eyebrow">WHAT WE DO</p>
              <h2 id="about-what" style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-5)' }}>
                Full-stack technology studio
              </h2>
              <p style={{ marginBottom: 'var(--space-4)' }}>
                We work across five capability pillars: Digital Solutions, AI & Intelligent Systems, Data & Analytics, Business Growth & Strategy, and Workforce & Tech Hiring. This breadth lets us address the full technology lifecycle of a growing business — not just one narrow slice of it.
              </p>
              <p>
                Our work spans marketing sites, SaaS platforms, ERP systems, AI-powered tools, and data pipelines. The common thread is a research-led approach: we study the problem before proposing a solution, and we build around how your business actually works — not around what was easiest to template.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              {[
                { label: 'Headquartered', value: 'Saraswathipuram, Mysuru, Karnataka' },
                { label: 'Additional locations', value: 'Bengaluru & Hyderabad' },
                { label: 'Working model', value: 'Remote-first, India & international' },
                { label: 'Industries', value: 'Manufacturing, SaaS, Beauty, Infrastructure, Aerospace, and more' },
                { label: 'Contact', value: COMPANY.email },
              ].map((item) => (
                <div key={item.label} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-1)',
                  paddingBottom: 'var(--space-5)',
                  borderBottom: '1px solid var(--color-border)',
                }}>
                  <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-secondary)' }}>{item.label}</span>
                  <span style={{ fontSize: 'var(--text-base)', fontWeight: 600 }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--dark" aria-labelledby="values-heading">
        <div className="container">
          <p className="eyebrow eyebrow--light">OUR VALUES</p>
          <h2 id="values-heading" style={{ color: 'white', marginBottom: 'var(--space-8)' }}>
            How we think. How we work.
          </h2>
          <div className="values-grid">
            {VALUES.map((v) => (
              <div key={v.num} className="value-card">
                <p className="value-card__num">{v.num}</p>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" aria-labelledby="team-heading">
        <div className="container">
          <p className="eyebrow">THE TEAM</p>
          <h2 id="team-heading" style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-4)' }}>
            Leadership
          </h2>
          <p style={{ marginBottom: 'var(--space-6)', color: 'var(--color-text-secondary)' }}>
            AdMark Digitals is led by four founders with complementary backgrounds in technology, operations, design, and finance.
          </p>
          <div className="team-grid">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="team-card"
                onClick={() => setSelectedLeader(selectedLeader === member.name ? null : member.name)}
                style={{
                  cursor: 'pointer',
                  borderColor: selectedLeader === member.name ? 'var(--color-accent)' : undefined,
                  transition: 'border-color 0.2s ease',
                }}
              >
                <div className="team-card__initials" aria-hidden="true">
                  {member.initials}
                </div>
                <h3 className="team-card__name">{member.name}</h3>
                <p className="team-card__role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research-led approach */}
      <section className="section section--alt" aria-labelledby="approach-heading">
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <p className="eyebrow">OUR APPROACH</p>
            <h2 id="approach-heading" style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-5)' }}>
              Why research comes first
            </h2>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              Most digital agencies start with a template and customise outward. We start with the problem and design inward. This means every project begins with a discovery phase — auditing your business model, mapping the market gap, and understanding what your users actually need before we consider solutions.
            </p>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              The result is digital work that's directly tied to a business objective. Not a website that looks good in a portfolio and generates no enquiries. Not software that nobody uses because it solves the wrong problem.
            </p>
            <p>
              This approach takes a little longer upfront. It saves significant time, cost, and frustration on the other side.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
