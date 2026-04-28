import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import TypingEffect from '../../components/TypingEffect'
import { projectGroups } from '../../data/projectsData'

const slugify = (value = '') =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const allProjects = projectGroups.flatMap((group) =>
  group.projects.map((project) => ({
    ...project,
    groupName: group.name,
    groupSummary: group.summary,
    slug: project.slug || slugify(project.title)
  }))
)

export default function ProjectDetailPage({ project }) {
  const [showTitleTyping, setShowTitleTyping] = useState(false)

  useEffect(() => {
    setShowTitleTyping(Math.random() > 0.4)
  }, [project?.slug])
  if (!project) {
    return (
      <>
        <Head>
          <title>Project Not Found | Ye</title>
        </Head>

        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 section">
            <div className="container-wide">
              <div className="rounded-2xl border-2 border-[var(--text)]/20 bg-white p-6 sm:p-8">
                <h1 className="text-2xl font-bold text-[var(--text)]">Project not found</h1>
                <p className="mt-3 text-[var(--text)]/80">That project does not exist anymore or the link is outdated.</p>
                <Link
                  href="/projects"
                  className="mt-5 inline-flex items-center rounded-full px-4 py-2 text-sm bg-[var(--text)] text-white"
                >
                  Back to projects
                </Link>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{`${project.title} | Projects | Ye`}</title>
        <meta name="description" content={project.desc} />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 section pb-16">
          <div className="container-wide">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center rounded-full px-3 py-1.5 text-xs sm:text-sm border border-[var(--accent)]/35 text-[var(--text)] hover:bg-[var(--accent)]/8 transition"
              >
                Back to all projects
              </Link>
              <span className="inline-flex items-center rounded-full px-3 py-1.5 text-xs sm:text-sm bg-[var(--accent)]/14 text-[var(--text)] font-semibold">
                {project.groupName}
              </span>
            </div>

            <article className="rounded-2xl border-2 border-[var(--text)]/20 bg-white p-5 sm:p-7 lg:p-9 shadow-[0_16px_36px_rgba(0,0,0,0.06)]">
              <div className="flex items-start justify-between gap-4 border-b-2 border-[var(--text)]/15 pb-5">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text)] leading-tight">
                    {showTitleTyping ? <TypingEffect text={project.title} speed={40} loop={false} /> : project.title}
                  </h1>
                  <p className="mt-3 text-sm sm:text-base text-[var(--text)]/85 max-w-3xl leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {project.icon ? (
                  <img
                    src={project.icon}
                    alt={`${project.title} icon`}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                  />
                ) : null}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech?.map((techItem) => (
                  <span
                    key={techItem}
                    className="text-xs sm:text-sm px-2.5 py-1.5 bg-[var(--text)]/7 text-[var(--text)] rounded font-medium"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              {project.details ? (
                <div className="mt-7 space-y-5">
                  <section>
                    <h2 className="text-base sm:text-lg font-bold uppercase tracking-wide text-[var(--text)]">
                      Overview
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-[var(--text)]/85 leading-relaxed">
                      {project.details.whatItIs}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-base sm:text-lg font-bold uppercase tracking-wide text-[var(--text)]">
                      Highlights
                    </h2>
                    <ul className="mt-2 space-y-2 list-disc pl-5 text-sm sm:text-base text-[var(--text)]/85 leading-relaxed">
                      {project.details.highlights?.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-base sm:text-lg font-bold uppercase tracking-wide text-[var(--text)]">
                      Impact
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-[var(--text)]/90 leading-relaxed">
                      {project.details.value}
                    </p>
                  </section>
                </div>
              ) : null}

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center rounded-full px-4 py-2 text-sm bg-[var(--text)] text-white hover:opacity-90 transition font-semibold"
                >
                  Visit external project link
                </a>
              ) : null}
            </article>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export function getStaticPaths() {
  return {
    paths: allProjects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false
  }
}

export function getStaticProps({ params }) {
  const project = allProjects.find((item) => item.slug === params.slug) || null

  return {
    props: {
      project
    }
  }
}
