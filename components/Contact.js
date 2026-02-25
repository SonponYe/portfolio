import SectionWrapper from './SectionWrapper'
export default function Contact(){
  return (
    <SectionWrapper id="contact">
      <div className="text-center px-1">
        <h2 className="section-title text-xl sm:text-2xl">Let’s build something together</h2>
        <p className="mt-4 text-sm sm:text-base text-[var(--text)]/80">Digital Address: <span className="font-medium">GA-579-4945</span></p>
        <p className="mt-2 text-sm sm:text-base text-[var(--text)]/80">Phone: <a href="tel:+233537460511" className="underline break-words">+233 537 460 511</a></p>
        <p className="mt-2 text-sm sm:text-base text-[var(--text)]/80">Email: <a href="mailto:sonponyeshua@gmail.com" className="underline break-all">sonponyeshua@gmail.com</a></p>

        <div className="mt-5 flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
          <a href="https://github.com/SonponYe-shuaChief" target="_blank" rel="noreferrer" className="text-[var(--text)] hover:scale-105 transition-transform">GitHub</a>
          <a href="https://www.linkedin.com/in/ye-shua-sonpon" target="_blank" rel="noreferrer" className="text-[var(--text)] hover:scale-105 transition-transform">LinkedIn</a>
          <a href="https://www.figma.com/design/MHyWNFmcRCuaquKlXWJH1O/Untitled" target="_blank" rel="noreferrer" className="text-[var(--text)] hover:scale-105 transition-transform">Figma</a>
        </div>
      </div>
    </SectionWrapper>
  )
}
