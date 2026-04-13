export default function SkillBadge({ name }){
  return (
    <div className="min-w-[104px] sm:min-w-[120px] px-3 sm:px-4 py-2.5 sm:py-3 bg-[var(--text)]/6 rounded-lg text-[var(--text)] text-xs sm:text-sm text-center retro-badge">{name}</div>
  )
}
