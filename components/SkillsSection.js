import SectionWrapper from './SectionWrapper'
import SkillBadge from './SkillBadge'

const skills = ['React','Next.js','Tailwind','Framer Motion','UI Design','Accessibility']

export default function SkillsSection(){
  return (
    <SectionWrapper id="skills">
      <h2 className="section-title text-xl sm:text-2xl">Skills</h2>
      <div className="mt-5 sm:mt-6 flex gap-3 sm:gap-4 overflow-x-auto py-3 sm:py-4 -mx-1 px-1">
        {skills.map(s => <SkillBadge key={s} name={s} />)}
      </div>
    </SectionWrapper>
  )
}
