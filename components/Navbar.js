import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar(){
  const router = useRouter()
  const isHomeRoute = router.pathname === '/'
  const isProjectsRoute = router.pathname.startsWith('/projects')
  const isBlogRoute = router.pathname.startsWith('/blog')

  return (
    <header className="py-4 md:py-6">
      <div className="container-wide flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
        <Link href="/" className="text-lg sm:text-xl font-bold text-[var(--text)] nav-brand">
          Ye<span className="text-sm text-muted">...</span>
        </Link>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-6 text-sm sm:text-base text-[var(--text)]/90">
          {isHomeRoute ? (
            <span className="nav-link" aria-current="page">Home</span>
          ) : (
            <Link href="/" className="nav-link">Home</Link>
          )}

          <Link href="/#about" className="nav-link">About</Link>

          {isProjectsRoute ? (
            <span className="nav-link" aria-current="page">Projects</span>
          ) : (
            <Link href="/projects" className="nav-link">Projects</Link>
          )}

          {isBlogRoute ? (
            <span className="nav-link" aria-current="page">Blog</span>
          ) : (
            <Link href="/blog" className="nav-link">Blog</Link>
          )}

          <Link href="/#skills" className="nav-link">Skills</Link>
          <Link href="/#contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
