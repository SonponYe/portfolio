import { useState, useEffect } from 'react'
import SectionWrapper from './SectionWrapper'
import TypingEffect from './TypingEffect'

export default function About(){
  const [showTyping, setShowTyping] = useState(false)
  const [showTechTyping, setShowTechTyping] = useState(false)

  useEffect(() => {
    // Randomly show typing effect on about section
    setShowTyping(Math.random() > 0.4)
    setShowTechTyping(Math.random() > 0.5)
  }, [])

  return (
    <SectionWrapper id="about">
      <div>
        <div>
          <h2 className="section-title text-xl sm:text-2xl">About</h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--text)]/90 leading-relaxed">
            {showTyping ? (
              <TypingEffect 
                text="Motivated Computer Science student specializing in software development, AI integration, and UI/UX design. Seeking an internship to apply technical skills in real-world projects and gain industry mentorship. Passionate about problem-solving, technology innovation, and collaborative work." 
                speed={20}
                loop={false}
              />
            ) : (
              'Motivated Computer Science student specializing in software development, AI integration, and UI/UX design. Seeking an internship to apply technical skills in real-world projects and gain industry mentorship. Passionate about problem-solving, technology innovation, and collaborative work.'
            )}
          </p>

          <h3 className="mt-6 font-semibold text-sm sm:text-base">Education</h3>
          <p className="text-sm sm:text-base text-[var(--text)]/80">University of Ghana — BSc Computer Science (Expected 2027) </p>

          <h3 className="mt-4 font-semibold text-sm sm:text-base">Technical Skills</h3>
          <p className="text-sm sm:text-base text-[var(--text)]/80">
            {showTechTyping ? (
              <TypingEffect 
                text="Python • C++ • JavaScript • React • React Native • Supabase • MySQL • LLM APIs • ElevenLabs • Figma • Git" 
                speed={25}
                loop={false}
              />
            ) : (
              'Python • C++ • JavaScript • React • React Native • Supabase • MySQL • LLM APIs • ElevenLabs • Figma • Git'
            )}
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
