import SectionWrapper from './SectionWrapper'

export default function About(){
  return (
    <SectionWrapper id="about">
      <div>
        <div>
          <h2 className="section-title text-xl sm:text-2xl">About</h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--text)]/90 leading-relaxed">Motivated Computer Science student specializing in software development, AI integration, and UI/UX design. Seeking an internship to apply technical skills in real-world projects and gain industry mentorship. Passionate about problem-solving, technology innovation, and collaborative work.</p>

          <h3 className="mt-6 font-semibold text-sm sm:text-base">Education</h3>
          <p className="text-sm sm:text-base text-[var(--text)]/80">University of Ghana — BSc Computer Science (Expected 2027) </p>

          <h3 className="mt-4 font-semibold text-sm sm:text-base">Technical Skills</h3>
          <p className="text-sm sm:text-base text-[var(--text)]/80">Python • C++ • JavaScript • React • React Native • Supabase • MySQL • LLM APIs • ElevenLabs • Figma • Git</p>
        </div>
      </div>
    </SectionWrapper>
  )
}
