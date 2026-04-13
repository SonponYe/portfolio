import { useState } from 'react'
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

  return (
    <div className="min-h-screen relative">
      <IntroSequence onComplete={() => setRevealed(true)} />
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
