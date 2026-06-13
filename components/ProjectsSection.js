import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import SectionWrapper from './SectionWrapper'
import ProjectCard from './ProjectCard'
import { projectGroups, totalProjects } from '../data/projectsData'

export default function ProjectsSection(){
  const [openGroups, setOpenGroups] = useState(['AI Products'])

  const toggleGroup = (groupName) => {
    setOpenGroups((previous) =>
      previous.includes(groupName)
        ? previous.filter((name) => name !== groupName)
        : [...previous, groupName]
    )
  }

  return (
    <SectionWrapper id="projects">
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        <h2 className="section-title text-xl sm:text-2xl">Projects</h2>
        <span className="inline-flex items-center rounded-sm px-3 py-1 text-xs sm:text-sm bg-[var(--text)]/10 border border-[var(--accent)]/20 text-[var(--text)]">
          {totalProjects} total
        </span>
        <Link
          href="/projects"
          className="inline-flex items-center rounded-sm px-3 py-1 text-xs sm:text-sm border border-[var(--accent)]/30 text-[var(--text)] hover:bg-[var(--accent)]/10 transition"
        >
          Open full projects page
        </Link>
      </div>

      <div className="mt-6 sm:mt-8 space-y-8 sm:space-y-10">
        {projectGroups.map(group => (
          <section key={group.name} className="project-group p-4 sm:p-5 lg:p-6">
            <button
              type="button"
              onClick={() => toggleGroup(group.name)}
              className="w-full text-left flex items-start justify-between gap-3"
              aria-expanded={openGroups.includes(group.name)}
            >
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[var(--text)]">{group.name}</h3>
                <p className="text-xs sm:text-sm text-[var(--text)]/75 mt-1">{group.summary}</p>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <span className="inline-flex items-center rounded-sm px-2.5 py-1 text-xs bg-[var(--accent)]/12 border border-[var(--accent)]/30 text-[var(--text)]">
                  {group.projects.length} project{group.projects.length > 1 ? 's' : ''}
                </span>
                <motion.span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-sm bg-[var(--text)]/12 border border-[var(--accent)]/25 text-[var(--text)] text-sm"
                  animate={{ rotate: openGroups.includes(group.name) ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  ↓
                </motion.span>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {openGroups.includes(group.name) ? (
                <motion.div
                  key={`${group.name}-content`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {group.projects.map((project, index) => (
                      <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </section>
        ))}
      </div>
    </SectionWrapper>
  )
}
