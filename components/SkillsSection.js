import SectionWrapper from './SectionWrapper'
import SkillBadge from './SkillBadge'

const skills = ['React','Next.js','Tailwind','Framer Motion','UI Design','Figma','Git','Node.js','Express','Python','SQL']
const loopedSkills = [...skills, ...skills]

export default function SkillsSection(){
  return (
    <SectionWrapper id="skills">
      <h2 className="section-title text-xl sm:text-2xl">Skills</h2>
      <div className="skills-belt-wrap mt-5 sm:mt-6 py-3 sm:py-4" aria-label="Skills conveyor belt">
        <div className="skills-belt-track">
          {loopedSkills.map((skill, idx) => (
            <SkillBadge key={`${skill}-${idx}`} name={skill} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}