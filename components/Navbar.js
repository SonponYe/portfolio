import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar(){
  const router = useRouter()
  const isProjectsRoute = router.pathname === '/projects'

  return (
    <header className="py-4 md:py-6">
      <div className="container-wide flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
        <div className="text-lg sm:text-xl font-bold text-[var(--text)] nav-brand">Ye<span className="text-sm text-muted">...</span></div>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-6 text-sm sm:text-base text-[var(--text)]/90">
          {isProjectsRoute ? (
            <>
              <Link href="/" className="nav-link">Home</Link>
              <span className="nav-link" aria-current="page">Projects</span>
            </>
          ) : (
            <>
              <a href="#about" className="nav-link">About</a>
              <a href="#projects" className="nav-link">Projects</a>
              <Link href="/projects" className="nav-link">Projects Page</Link>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#contact" className="nav-link">Contact</a>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
