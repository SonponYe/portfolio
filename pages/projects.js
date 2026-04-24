import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TypingEffect from '../components/TypingEffect'
import { projectGroups, totalProjects } from '../data/projectsData'

export default function ProjectsPage() {
  const [showTitleTyping, setShowTitleTyping] = useState(false)
  const [showDescTyping, setShowDescTyping] = useState(false)

  useEffect(() => {
    setShowTitleTyping(Math.random() > 0.4)
    setShowDescTyping(Math.random() > 0.4)
  }, [])
  return (
    <>
      <Head>
        <title>Projects | Ye</title>
        <meta
          name="description"
          content="Dedicated projects page with expanded details about each build."
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 pb-16">
          <section className="section">
            <div className="container-wide">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h1 className="section-title text-2xl sm:text-3xl">
                    {showTitleTyping ? <TypingEffect text="All Projects" speed={70} loop={false} /> : 'All Projects'}
                  </h1>
                  <p className="mt-2 text-sm sm:text-base text-[var(--text)]/80">
                    {showDescTyping ? (
                      <TypingEffect 
                        text="Expanded project breakdowns, goals, and outcomes."
                        speed={30}
                        loop={false}
                      />
                    ) : (
                      'Expanded project breakdowns, goals, and outcomes.'
                    )}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm bg-[var(--text)]/8 text-[var(--text)]">
                    {totalProjects} total
                  </span>
                  <Link
                    href="/#projects"
                    className="inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm border border-[var(--accent)]/30 text-[var(--text)] hover:bg-[var(--accent)]/8 transition"
                  >
                    Back to home section
                  </Link>
                </div>
              </div>

              <div className="mt-8 space-y-8">
                {projectGroups.map((group) => (
                  <section
                    key={group.name}
                    className="rounded-2xl border-2 border-[var(--text)]/20 p-4 sm:p-5 lg:p-6 bg-white"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[var(--text)]/15 pb-4">
                      <h2 className="text-lg sm:text-xl font-bold text-[var(--text)] tracking-wide uppercase">
                        {group.name}
                      </h2>
                      <span className="inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm bg-[var(--accent)]/15 text-[var(--text)] font-semibold">
                        {group.projects.length} project{group.projects.length > 1 ? 's' : ''}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text)]/75 mt-3">{group.summary}</p>

                    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                      {group.projects.map((project) => {
                        const projectSlug = project.slug || project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

                        return (
                          <article
                            key={project.title}
                            className="rounded-xl border-2 border-[var(--accent)]/20 bg-white p-4 sm:p-5 shadow-[0_10px_24px_rgba(0,0,0,0.04)]"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h3 className="font-bold text-base sm:text-lg text-[var(--text)] leading-snug">
                                  {project.title}
                                </h3>
                                <p className="mt-2 text-sm text-[var(--text)]/80 leading-relaxed">
                                  {project.desc}
                                </p>
                              </div>

                              {project.icon ? (
                                <img
                                  src={project.icon}
                                  alt={`${project.title} icon`}
                                  className="w-10 h-10 object-contain"
                                />
                              ) : null}
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2">
                              {project.tech.map((techItem) => (
                                <span
                                  key={techItem}
                                  className="text-xs px-2 py-1 bg-[var(--text)]/7 text-[var(--text)] rounded font-medium"
                                >
                                  {techItem}
                                </span>
                              ))}
                            </div>

                            <div className="mt-5 flex flex-wrap items-center gap-3">
                              <Link
                                href={`/projects/${projectSlug}`}
                                className="inline-flex items-center rounded-full px-4 py-2 text-xs sm:text-sm bg-[var(--text)] text-white hover:opacity-90 transition font-semibold"
                              >
                                Open full project
                              </Link>

                              {project.link ? (
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center rounded-full px-3 py-2 text-xs sm:text-sm border border-[var(--accent)]/40 text-[var(--text)] hover:bg-[var(--accent)]/8 transition"
                                >
                                  External link
                                </a>
                              ) : null}
                            </div>
                          </article>
                        )
                      })}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
