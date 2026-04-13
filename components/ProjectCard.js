import { motion } from 'framer-motion'

export default function ProjectCard({ project, index }){
  const CardContainer = project.link ? motion.a : motion.div
  const linkProps = project.link
    ? { href: project.link, target: '_blank', rel: 'noreferrer' }
    : {}

  return (
    <CardContainer
      {...linkProps}
      whileHover={{ y:-6 }}
      className="block project-card p-3 sm:p-4 rounded-lg border bg-white shadow-sm"
    >
      {/* image area */}
      {project.icon ? (
        <div className="w-full h-36 sm:h-40 md:h-48 rounded-md overflow-hidden bg-[var(--accent)]/6 flex items-center justify-center">
          <img src={project.icon} alt={`${project.title} icon`} className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
        </div>
      ) : project.image ? (
        <div className="w-full h-36 sm:h-40 md:h-48 rounded-md overflow-hidden bg-[var(--accent)]/6">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
      ) : null}
      <div className="mt-3 sm:mt-4 p-1 sm:p-2">
        <h3 className="font-semibold text-base sm:text-lg text-[var(--text)] leading-snug">{project.title}</h3>
        <p className="mt-2 text-xs sm:text-sm text-[var(--text)]/80 leading-relaxed">{project.desc}</p>
        <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
          {project.tech.map(techItem => (
            <span key={techItem} className="text-xs px-2 py-1 bg-[var(--text)]/6 text-[var(--text)] rounded">{techItem}</span>
          
          ))}
        </div>
      </div>
    </CardContainer>
  )
}
