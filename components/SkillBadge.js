export default function SkillBadge({ name }){
  return (
    <div className="min-w-[100px] sm:min-w-[116px] px-3 sm:px-4 py-2 sm:py-2.5 bg-[var(--text)]/8 border border-[var(--accent)]/25 rounded-md text-[var(--text)] text-xs sm:text-sm text-center hover:border-[var(--accent)]/50 transition-colors duration-200">{name}</div>
  )
}
