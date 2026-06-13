export default function Footer(){
  return (
    <footer className="footer-terminal py-6 md:py-8">
      <div className="container-wide">
        <p className="text-[var(--text)]/28 text-xs tracking-widest mb-4 select-none">
          {'// ──────────────────────────────────────────────── //'}
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-[var(--text)]/60">
          <span>
            <span className="text-[var(--accent)]/50">©</span>{' '}
            {new Date().getFullYear()} Sonpon Ye-shua Chief
          </span>
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <a
              href="https://github.com/SonponYe-shuaChief"
              className="text-[var(--text)]/55 hover:text-[var(--accent)] transition-colors duration-150"
            >
              # github
            </a>
            <span className="text-[var(--text)]/25">|</span>
            <span className="text-[var(--text)]/40">#ETTU</span>
            <span className="text-[var(--text)]/25">|</span>
            <span className="text-[var(--text)]/35">end-to-end</span>
          </div>
        </div>
        <p className="text-[var(--text)]/28 text-xs tracking-widest mt-4 select-none">
          {'// ──────────────────────────────────────────────── //'}
        </p>
      </div>
    </footer>
  )
}
