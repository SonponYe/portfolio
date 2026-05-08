import Head from 'next/head'
import Link from 'next/link'

const programs = [
  {
    title: 'Youth Health Literacy',
    body: 'Interactive workshops and school activations that teach prevention, consent, and healthy decision-making.'
  },
  {
    title: 'Community Wellness Drives',
    body: 'Monthly neighborhood outreach with screenings, first-aid support, and referrals to partner clinics.'
  },
  {
    title: 'Digital Care Access',
    body: 'Simple digital channels for booking volunteer sessions, receiving reminders, and finding trusted health resources.'
  }
]

const impactStats = [
  { label: 'People Reached', value: '12,400+' },
  { label: 'Partner Schools', value: '36' },
  { label: 'Volunteer Hours', value: '8,900' },
  { label: 'Communities Served', value: '18' }
]

export default function UgphPage() {
  return (
    <>
      <Head>
        <title>UGPH Website UI | Ye</title>
        <meta
          name="description"
          content="UGPH website UI concept translated into a live, responsive Next.js page."
        />
      </Head>

      <div className="ugph-page min-h-screen">
        <header className="ugph-nav-wrap">
          <div className="ugph-shell ugph-nav">
            <Link href="/" className="ugph-brand" aria-label="Go to home">
              UGPH
            </Link>

            <nav className="ugph-nav-links" aria-label="UGPH page navigation">
              <a href="#mission">Mission</a>
              <a href="#programs">Programs</a>
              <a href="#impact">Impact</a>
              <a href="#volunteer">Volunteer</a>
            </nav>

            <Link href="/projects" className="ugph-outline-btn">
              Back to Portfolio
            </Link>
          </div>
        </header>

        <main>
          <section id="mission" className="ugph-hero">
            <div className="ugph-shell ugph-hero-grid">
              <div>
                <p className="ugph-kicker">University of Ghana Public Health Initiative</p>
                <h1>
                  Building a healthier future through youth-driven public health action.
                </h1>
                <p className="ugph-hero-copy">
                  This page adapts your UGPH Figma concept into production-style UI with strong
                  hierarchy, bright identity color, and responsive behavior.
                </p>

                <div className="ugph-hero-cta-row">
                  <a href="#volunteer" className="ugph-primary-btn">
                    Join as Volunteer
                  </a>
                  <a href="#programs" className="ugph-ghost-link">
                    Explore Programs
                  </a>
                </div>
              </div>

              <aside className="ugph-feature-card" aria-label="Feature highlight">
                <p className="ugph-card-chip">Featured Initiative</p>
                <h2>Campus-to-Community Health Sprint</h2>
                <p>
                  Student volunteers co-create weekend outreach activations, then publish local
                  impact dashboards for transparent progress tracking.
                </p>
                <ul>
                  <li>Rapid health education modules</li>
                  <li>On-site triage and referral pathways</li>
                  <li>Community-led feedback loops</li>
                </ul>
              </aside>
            </div>
          </section>

          <section id="programs" className="ugph-programs">
            <div className="ugph-shell">
              <div className="ugph-section-head">
                <p>Core Programs</p>
                <h2>Where outreach, education, and digital access meet.</h2>
              </div>

              <div className="ugph-program-grid">
                {programs.map((program) => (
                  <article key={program.title} className="ugph-program-card">
                    <h3>{program.title}</h3>
                    <p>{program.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="impact" className="ugph-impact">
            <div className="ugph-shell">
              <div className="ugph-section-head">
                <p>Impact Snapshot</p>
                <h2>Measured outcomes from coordinated youth health action.</h2>
              </div>

              <div className="ugph-stat-grid">
                {impactStats.map((stat) => (
                  <article key={stat.label} className="ugph-stat-card">
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="volunteer" className="ugph-cta">
            <div className="ugph-shell ugph-cta-inner">
              <div>
                <p className="ugph-kicker">Ready to Contribute?</p>
                <h2>Support community wellness with UGPH.</h2>
                <p>
                  Whether you are a student, clinician, or partner organization, there is a place
                  for your contribution.
                </p>
              </div>

              <div className="ugph-cta-actions">
                <a href="mailto:hello@ugph.example" className="ugph-primary-btn">
                  Contact UGPH Team
                </a>
                <a
                  href="https://www.figma.com/design/3aBshbSOxiRR46xb3kZnNy/UGPH-website?node-id=0-1&p=f&t=5ZhDJvUlOL7mURGf-0"
                  target="_blank"
                  rel="noreferrer"
                  className="ugph-outline-btn"
                >
                  Open Original Figma
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}