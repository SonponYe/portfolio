import { useEffect, useRef, useState } from 'react'
import IntroSequence from '../components/IntroSequence'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home(){
  const [revealed, setRevealed] = useState(false)
  const [showIntro, setShowIntro] = useState(false)
  const [introChecked, setIntroChecked] = useState(false)
  const [majorGlitchActive, setMajorGlitchActive] = useState(false)
  const glitchScheduledRef = useRef(false)

  useEffect(() => {
    const introAlreadyPlayed = window.sessionStorage.getItem('introPlayed') === '1'

    if (introAlreadyPlayed) {
      setRevealed(true)
      setShowIntro(false)
    } else {
      setShowIntro(true)
    }

    setIntroChecked(true)
  }, [])

  const handleIntroComplete = () => {
    window.sessionStorage.setItem('introPlayed', '1')
    setShowIntro(false)
    setRevealed(true)
  }

  useEffect(() => {
    if (!introChecked || !revealed || glitchScheduledRef.current) {
      return
    }

    glitchScheduledRef.current = true

    const durationMs = 480
    const firstDelay = 2600 + Math.floor(Math.random() * 2700)
    const secondDelay = firstDelay + 1800 + Math.floor(Math.random() * 2500)
    const safeSecondDelay = Math.min(secondDelay, 9800)

    const runGlitch = () => {
      setMajorGlitchActive(true)
      window.setTimeout(() => {
        setMajorGlitchActive(false)
      }, durationMs)
    }

    const t1 = window.setTimeout(runGlitch, firstDelay)
    const t2 = window.setTimeout(runGlitch, safeSecondDelay)

    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [introChecked, revealed])

  return (
    <div className={`min-h-screen relative ${majorGlitchActive ? 'major-glitch-active' : ''}`}>
      {introChecked && showIntro ? <IntroSequence onComplete={handleIntroComplete} /> : null}
      <div
        className={`major-glitch-overlay ${majorGlitchActive ? 'active' : ''}`}
        aria-hidden="true"
      />
      <main className={`transition-opacity duration-700 ${revealed ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <Navbar />
        <Hero revealed={revealed} />
        <About />
        <ProjectsSection />
        <SkillsSection />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
