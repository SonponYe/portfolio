import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const router = useRouter()
  const isHomeRoute = router.pathname === '/'
  const isProjectsRoute = router.pathname.startsWith('/projects')
  const isBlogRoute = router.pathname.startsWith('/blog')
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme') || 'dark'
    setTheme(saved)
    document.documentElement.dataset.theme = saved
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.dataset.theme = next
    localStorage.setItem('portfolio-theme', next)
  }

  return (
    <header className={`sticky top-0 z-30 py-3 md:py-4 transition-all duration-200 ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container-wide flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
        <Link href="/" className="nav-brand text-lg sm:text-xl font-bold tracking-wide">
          <span className="text-[var(--text)]/35 font-normal">~/</span>
          <span className="text-[var(--accent)]">ye-shua</span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-6 text-sm text-[var(--text)]/90">
            <Link href="/" className={`nav-link ${isHomeRoute ? 'is-active' : ''}`} aria-current={isHomeRoute ? 'page' : undefined}>home</Link>
            <Link href="/#about" className="nav-link">about</Link>
            <Link href="/projects" className={`nav-link ${isProjectsRoute ? 'is-active' : ''}`} aria-current={isProjectsRoute ? 'page' : undefined}>projects</Link>
            <Link href="/blog" className={`nav-link ${isBlogRoute ? 'is-active' : ''}`} aria-current={isBlogRoute ? 'page' : undefined}>blog</Link>
            <Link href="/#skills" className="nav-link">skills</Link>
            <Link href="/#contact" className="nav-link">contact</Link>
          </nav>

          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex-shrink-0 text-[var(--text)]/55 hover:text-[var(--text)] text-xs px-2 py-1 border border-[var(--text)]/22 rounded-sm hover:border-[var(--text)]/45 transition-colors duration-150 tracking-widest"
          >
            {theme === 'dark' ? '// light' : '// dark'}
          </button>
        </div>
      </div>
    </header>
  )
}
