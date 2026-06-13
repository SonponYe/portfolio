import { motion } from 'framer-motion'

export default function ProjectCard({ project, index }){
  const CardContainer = project.link ? motion.a : motion.div
  const linkProps = project.link
    ? { href: project.link, target: '_blank', rel: 'noreferrer' }
    : {}

  return (
    <CardContainer
      {...linkProps}
      whileHover={{ y: -4 }}
      className="block project-card p-4 sm:p-5 rounded-md border bg-black/40 group relative overflow-hidden"
    >
      {/* scanline sweep on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'repeating-linear-gradient(to bottom, rgba(0,255,65,0.03) 0, rgba(0,255,65,0.03) 1px, transparent 1px, transparent 4px)'
        }}
      />

      {/* image / icon area */}
      {project.icon ? (
        <div className="w-full h-32 sm:h-36 md:h-40 rounded-sm overflow-hidden bg-[var(--accent)]/6 flex items-center justify-center border border-[var(--accent)]/10">
          <img src={project.icon} alt={`${project.title} icon`} className="w-14 h-14 sm:w-16 sm:h-16 object-contain" />
        </div>
      ) : project.image ? (
        <div className="w-full h-32 sm:h-36 md:h-40 rounded-sm overflow-hidden bg-[var(--accent)]/6 border border-[var(--accent)]/10">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
      ) : null}

      <div className="mt-3 sm:mt-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-base sm:text-lg text-[var(--text)] leading-snug">{project.title}</h3>
          <span className="flex-shrink-0 text-[10px] text-[var(--accent)]/50 font-mono mt-0.5">
            [{String(index + 1).padStart(2, '0')}]
          </span>
        </div>
        <p className="mt-2 text-xs sm:text-sm text-[var(--text)]/68 leading-relaxed">{project.desc}</p>
        <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5">
          {project.tech.map(techItem => (
            <span
              key={techItem}
              className="text-[10px] sm:text-xs px-2 py-0.5 bg-[var(--text)]/8 text-[var(--text)]/80 border border-[var(--accent)]/18 rounded-sm"
            >
              {techItem}
            </span>
          ))}
        </div>
      </div>
    </CardContainer>
  )
}
