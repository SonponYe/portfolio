import SectionWrapper from './SectionWrapper'
import SkillBadge from './SkillBadge'

const skills = ['React','Next.js','Tailwind','Framer Motion','UI Design','Figma','Git','Node.js','Express','Python','SQL', 'Supabase', 'AI Prompting']

export default function SkillsSection(){
  return (
    <SectionWrapper id="skills">
      <h2 className="section-title text-xl sm:text-2xl">Skills</h2>
      <p className="skills-subhead mt-4">Toolchain and craft focus for product builds.</p>
      <div className="skills-grid mt-5 sm:mt-6" aria-label="Skills list">
        {skills.map((skill, index) => (
          <SkillBadge key={skill} name={skill} tone={index % 3} />
        ))}
      </div>
      <div className="skills-footer mt-5">
        <span className="skills-footer-dot" aria-hidden="true" />
        <span>Always shipping with accessibility, performance, and clean UX in mind.</span>
      </div>
      <div className="skills-scanline" aria-hidden="true">
        <div className="skills-scanline-run" />
      </div>
    </SectionWrapper>
  )
}