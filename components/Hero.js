import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import { useEffect, useRef, useState } from 'react'

export default function Hero({ revealed = false }){
  const titles = ['software engineer', 'UI/UX designer', 'systems designer', 'Prompt engineer','game developer', 'anime watcher', 'product designer','full stack developer', '#ETTU']
  const appendSuffix = ' .... ish'

  const [display, setDisplay] = useState('')
  const [mode, setMode] = useState('idle')
  const titleIndex = useRef(0)
  const charIndex = useRef(0)
  const mounted = useRef(true)

  useEffect(()=>{
    mounted.current = true
    if(!revealed){
      setMode('idle')
      setDisplay('')
      return
    }
    if(mode === 'idle'){
      setMode('typing')
    }
    let timer
    const currentTitle = titles[titleIndex.current]

    if(mode === 'typing'){
      timer = setInterval(()=>{
        charIndex.current += 1
        setDisplay(currentTitle.slice(0, charIndex.current))
        if(charIndex.current >= currentTitle.length){
          clearInterval(timer)
          if(currentTitle === 'game developer') setMode('pauseBeforeAppend')
          else setMode('pause')
        }
      }, 60)
      return ()=> clearInterval(timer)
    }

    if(mode === 'pause'){
      timer = setTimeout(()=> setMode('deleting'), 1000)
      return ()=> clearTimeout(timer)
    }

    if(mode === 'pauseBeforeAppend'){
      timer = setTimeout(()=> setMode('appendTyping'), 800)
      return ()=> clearTimeout(timer)
    }

    if(mode === 'appendTyping'){
      let appendIndex = 0
      timer = setInterval(()=>{
        appendIndex += 1
        setDisplay(prev => prev + appendSuffix.slice(prev.length - currentTitle.length, appendIndex))
        if(appendIndex >= appendSuffix.length){
          clearInterval(timer)
          setMode('appendPause')
        }
      }, 70)
      return ()=> clearInterval(timer)
    }

    if(mode === 'appendPause'){
      timer = setTimeout(()=> setMode('appendDeleting'), 1000)
      return ()=> clearTimeout(timer)
    }

    if(mode === 'appendDeleting'){
      timer = setInterval(()=>{
        setDisplay(prev => {
          if(prev.length <= currentTitle.length){
            clearInterval(timer)
            setTimeout(()=> setMode('deleting'), 180)
            return prev
          }
          return prev.slice(0, -1)
        })
      }, 50)
      return ()=> clearInterval(timer)
    }

    if(mode === 'deleting'){
      timer = setInterval(()=>{
        setDisplay(prev => {
          if(prev.length <= 0){
            clearInterval(timer)
            titleIndex.current = (titleIndex.current + 1) % titles.length
            charIndex.current = 0
            setMode('typing')
            return ''
          }
          return prev.slice(0, -1)
        })
      }, 40)
      return ()=> clearInterval(timer)
    }

    return ()=>{ mounted.current = false }
  },[mode, revealed])

  return (
    <section className="section min-h-[72vh] md:min-h-[75vh] flex items-center relative overflow-hidden animated-border hero-bg">
      <div className="hero-decor" aria-hidden="true" />
      <div className="container-wide relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20">
          <div className="flex-shrink-0">
            <div className="avatar-ring">
              <img src="/picture.png" alt="profile" className="avatar-image" />
            </div>
          </div>

          <div className="text-center md:text-left flex-1 w-full">
            <Parallax speed={-8}>
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="hero-prompt-prefix">$ whoami</span>
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                  Hi, I&apos;m <span className="text-[var(--accent)]">Sonpon</span> Ye-shua Chief
                </h1>
                <p className="mt-3 text-base sm:text-lg md:text-xl text-[var(--text)]/90">
                  Computer Science student — end-to-end Code Alchemist
                </p>
                <p className="mt-2 text-xs sm:text-sm text-[var(--text)]/60">
                  University of Ghana • BSc Computer Science &quot;Expected 2027&quot;
                </p>

                <div className="mt-4 text-base sm:text-lg text-[var(--text)]/85 h-7 hero-role-line">
                  <span className="hero-role-prefix">role:&gt;</span>
                  <span className="font-medium">{display}</span>
                  <span className="ml-0.5">{revealed && <span className="animate-pulse">|</span>}</span>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3 sm:gap-4">
                  <a href="#projects" className="btn-press text-white inline-flex items-center gap-2">
                    View Projects
                  </a>
                  <a
                    href="#about"
                    className="inline-flex items-center gap-2 border border-[var(--text)]/60 text-[var(--text)] px-4 py-2 rounded-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-150"
                  >
                    About Me
                  </a>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <span className="status-badge">
                    <span className="status-dot" aria-hidden="true" />
                    open to internships
                  </span>
                  <span className="status-badge">
                    <span className="status-dot" aria-hidden="true" />
                    Ghana
                  </span>
                  <span className="status-badge">
                    <span className="status-dot" aria-hidden="true" />
                    #ETTU
                  </span>
                </div>
              </motion.div>
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  )
}
