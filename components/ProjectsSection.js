import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import ProjectCard from './ProjectCard'

const projectGroups = [
  {
    name: 'AI Products',
    summary: 'AI-driven assistants and automation tools.',
    projects: [
      {
        title: 'Levi – AI-Powered Restaurant Assistant',
        desc: 'AI assistant to streamline restaurant operations: reminders, purchase logs, and analytics. Integrated ElevenLabs for human-like voice interactions.',
        tech: ['LLM APIs','ElevenLabs','React','Supabase'],
        icon: '/icons/ai.svg'
      },
      {
        title: 'Aya – AI Powered Store',
        desc: 'AI system assisting sellers with customer interactions and order facilitation.',
        tech: ['LLM APIs','React'],
        icon: '/icons/ai.svg'
      }
    ]
  },
  {
    name: 'Apps & Systems',
    summary: 'Mobile-first apps and operational systems.',
    projects: [
      {
        title: 'UG Navigate',
        desc: 'Campus shortest path finder using graph algorithms to compute optimal routes across campus.',
        tech: ['Algorithms','React Native'],
        icon: '/icons/mobile.svg'
      },
      {
        title: 'Restaurant Management System',
        desc: 'Full-stack solution built with React Native and Supabase featuring modern UI and automated reporting.',
        tech: ['React Native','Supabase'],
        icon: '/icons/web.svg'
      }
    ]
  },
  {
    name: 'Web & Client Work',
    summary: 'Business websites and production-ready client delivery.',
    projects: [
      {
        title: 'Sniris Website',
        desc: 'Company website for a London-based building and construction business.',
        link: 'https://www.sniris.com/',
        tech: ['Web Development','Business Website'],
        icon: '/icons/web.svg'
      },
      {
        title: 'Capital Business Group',
        desc: 'Website for a London-based auto mechanic firm.',
        link: 'https://capital-business-group.vercel.app/',
        tech: ['Web Development','Automotive'],
        icon: '/icons/web.svg'
      },
      {
        title: 'Quick Caterers',
        desc: 'Website for a London-based catering company.',
        link: 'https://benedictaentsie54.wixsite.com/quick-caterers',
        tech: ['Web Development','Catering'],
        icon: '/icons/web.svg'
      }
    ]
  },
  {
    name: 'Design',
    summary: 'UI and product design explorations.',
    projects: [
      {
        title: 'Figma Design — Restaurant App',
        desc: 'High-fidelity UI design created in Figma showcasing modern, user-centred screens.',
        link: 'https://www.figma.com/design/MHyWNFmcRCuaquKlXWJH1O/Untitled',
        tech: ['Figma','UI/UX'],
        icon: '/icons/figma.svg'
      }
    ]
  }
]

const totalProjects = projectGroups.reduce((count, group) => count + group.projects.length, 0)

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
        <span className="inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm bg-[var(--text)]/8 text-[var(--text)]">
          {totalProjects} total
        </span>
      </div>

      <div className="mt-6 sm:mt-8 space-y-8 sm:space-y-10">
        {projectGroups.map(group => (
          <section key={group.name} className="rounded-xl border border-[var(--text)]/10 p-4 sm:p-5 lg:p-6 bg-white/80">
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
                <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs bg-[var(--accent)]/12 text-[var(--text)]">
                  {group.projects.length} project{group.projects.length > 1 ? 's' : ''}
                </span>
                <motion.span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--text)]/8 text-[var(--text)] text-sm"
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
