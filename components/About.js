import SectionWrapper from './SectionWrapper'

export default function About(){
  return (
    <SectionWrapper id="about">
      <h2 className="section-title text-xl sm:text-2xl">About</h2>

      <div className="terminal-window mt-6 max-w-3xl">
        <div className="terminal-titlebar">
          <div className="terminal-dots" aria-hidden="true">
            <span className="terminal-dot td-red" />
            <span className="terminal-dot td-yellow" />
            <span className="terminal-dot td-green" />
          </div>
          about.sh — bash
        </div>

        <div className="terminal-body">
          <div className="term-line">
            <span className="term-prompt">$</span>
            <span className="term-cmd">cat bio.txt</span>
          </div>
          <p className="term-output">
            Motivated Computer Science student specializing in software development,
            AI integration, and UI/UX design. Seeking an internship to apply
            technical skills in real-world projects and gain industry mentorship.
            Passionate about problem-solving, technology innovation, and
            collaborative work.
          </p>

          <div className="term-line">
            <span className="term-prompt">$</span>
            <span className="term-cmd">echo $education</span>
          </div>
          <p className="term-output">
            University of Ghana — BSc Computer Science<br />
            <span className="text-[var(--accent)]/75">Expected: 2027</span>
          </p>

          <div className="term-line">
            <span className="term-prompt">$</span>
            <span className="term-cmd">cat stack.txt</span>
          </div>
          <p className="term-output">
            Python • C++ • JavaScript • React • React Native • Supabase
            • MySQL • LLM APIs • ElevenLabs • Figma • Git
          </p>

          <div className="term-line">
            <span className="term-prompt">$</span>
            <span className="term-cmd animate-pulse">_</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
