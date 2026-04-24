import { motion } from 'framer-motion'

export default function ProjectCard({ project, index }){
  const CardContainer = project.link ? motion.a : motion.div
  const linkProps = project.link
    ? { href: project.link, target: '_blank', rel: 'noreferrer' }
    : {}

  return (
    <CardContainer
      {...linkProps}
      whileHover={{ y:-4 }}
      className="block project-card p-4 sm:p-5 rounded-lg border bg-black/40 shadow-lg"
    >
      {/* image area */}
      {project.icon ? (
        <div className="w-full h-32 sm:h-36 md:h-44 rounded-md overflow-hidden bg-[var(--accent)]/8 flex items-center justify-center">
          <img src={project.icon} alt={`${project.title} icon`} className="w-14 h-14 sm:w-16 sm:h-16 object-contain" />
        </div>
      ) : project.image ? (
        <div className="w-full h-32 sm:h-36 md:h-44 rounded-md overflow-hidden bg-[var(--accent)]/8">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
      ) : null}
      <div className="mt-3 sm:mt-4">
        <h3 className="font-semibold text-base sm:text-lg text-[var(--text)] leading-snug">{project.title}</h3>
        <p className="mt-2 text-xs sm:text-sm text-[var(--text)]/70 leading-relaxed">{project.desc}</p>
        <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
          {project.tech.map(techItem => (
            <span key={techItem} className="text-xs px-2 py-1 bg-[var(--text)]/10 text-[var(--text)] rounded-sm border border-[var(--accent)]/20">{techItem}</span>
          
          ))}
        </div>
      </div>
    </CardContainer>
  )
}
