import { useMemo, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { projectGroups, totalProjects } from '../data/projectsData'

export default function ProjectsPage() {
  const defaultOpen = useMemo(() => {
    const firstTitle = projectGroups[0]?.projects[0]?.title
    return firstTitle ? { [firstTitle]: true } : {}
  }, [])

  const [openProjects, setOpenProjects] = useState(defaultOpen)

  const toggleProject = (projectTitle) => {
    setOpenProjects((previous) => ({
      ...previous,
      [projectTitle]: !previous[projectTitle]
    }))
  }

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
                  <h1 className="section-title text-2xl sm:text-3xl">All Projects</h1>
                  <p className="mt-2 text-sm sm:text-base text-[var(--text)]/80">
                    Expanded project breakdowns, goals, and outcomes.
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
                    className="rounded-xl border border-[var(--text)]/10 p-4 sm:p-5 lg:p-6 bg-white"
                  >
                    <h2 className="text-lg sm:text-xl font-semibold text-[var(--text)]">
                      {group.name}
                    </h2>
                    <p className="text-sm text-[var(--text)]/75 mt-1">{group.summary}</p>

                    <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                      {group.projects.map((project) => {
                        const isOpen = Boolean(openProjects[project.title])

                        return (
                          <article
                            key={project.title}
                            className="rounded-lg border border-[var(--accent)]/15 bg-white p-4 sm:p-5"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h3 className="font-semibold text-base sm:text-lg text-[var(--text)] leading-snug">
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
                                  className="text-xs px-2 py-1 bg-[var(--text)]/6 text-[var(--text)] rounded"
                                >
                                  {techItem}
                                </span>
                              ))}
                            </div>

                            <div className="mt-4 flex flex-wrap items-center gap-3">
                              <button
                                type="button"
                                onClick={() => toggleProject(project.title)}
                                aria-expanded={isOpen}
                                className="inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm border border-[var(--accent)]/30 text-[var(--text)] hover:bg-[var(--accent)]/8 transition"
                              >
                                {isOpen ? 'Hide details' : 'Expand details'}
                              </button>

                              {project.link ? (
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm bg-[var(--accent)]/14 text-[var(--text)] hover:bg-[var(--accent)]/22 transition"
                                >
                                  Visit project
                                </a>
                              ) : null}
                            </div>

                            <AnimatePresence initial={false}>
                              {isOpen && project.details ? (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                                  className="overflow-hidden"
                                >
                                  <div className="mt-4 pt-4 border-t border-[var(--text)]/10">
                                    <p className="text-sm text-[var(--text)]/85 leading-relaxed">
                                      {project.details.whatItIs}
                                    </p>

                                    <ul className="mt-3 space-y-2 text-sm text-[var(--text)]/80 list-disc pl-5">
                                      {project.details.highlights.map((highlight) => (
                                        <li key={highlight}>{highlight}</li>
                                      ))}
                                    </ul>

                                    <p className="mt-3 text-sm text-[var(--text)]/90">
                                      <span className="font-semibold">Impact:</span> {project.details.value}
                                    </p>
                                  </div>
                                </motion.div>
                              ) : null}
                            </AnimatePresence>
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
