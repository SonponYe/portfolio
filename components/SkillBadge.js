export default function SkillBadge({ name, tone = 0 }){
  const toneClass = `tone-${tone}`

  return (
    <div className={`skill-badge ${toneClass}`}>
      <span className="skill-badge-dot" aria-hidden="true" />
      <span>{name}</span>
    </div>
  )
}
