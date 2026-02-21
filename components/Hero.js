import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import { useEffect, useRef, useState } from 'react'

export default function Hero({ revealed = false }){
  // Titles to show in the hero after intro overlay is dismissed
  // added extra playful roles per user request
  const titles = ['software engineer', 'UI/UX designer', 'systems designer', 'game dev', 'anime watcher', 'product designer','full stack developer', '#ETTU']
  // Append suffix applied only to the 'game dev' title
  const appendSuffix = ' .... ish'

  const [display, setDisplay] = useState('')
  const [mode, setMode] = useState('idle') // idle until revealed, then typing | pause | deleting | appendTyping | appendPause | appendDeleting
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
    // start the loop when revealed becomes true
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
          if(currentTitle === 'game dev') setMode('pauseBeforeAppend')
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
    <section className="section min-h-[75vh] flex items-center relative overflow-hidden animated-border hero-bg">
      <div className="hero-decor" aria-hidden="true" />
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="flex-shrink-0">
            <div className="avatar-ring">
              <img src="/profile.svg" alt="profile" className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover" />
            </div>
          </div>

          <div className="text-left flex-1">
            <Parallax speed={-8}>
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">Hi, I&apos;m <span className="text-[var(--accent)]">Sonpon</span> Ye-shua Chief</h1>
                <p className="mt-3 text-lg md:text-xl text-[var(--text)]/90">Computer Science student — software development, AI integration & UI/UX</p>
                <p className="mt-2 text-sm text-[var(--text)]/70">University of Ghana • BSc Computer Science (Expected 2027) </p>

                {/* typed role loop appears here after intro revealed */}
                <div className="mt-4 text-lg text-[var(--text)]/85 h-7">
                  <span className="font-medium">{display}</span>
                  <span className="ml-1">{revealed && <span className="animate-pulse">|</span>}</span>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <a href="#projects" className="btn-press text-white inline-flex items-center gap-2">View Projects</a>
                  <a href="#about" className="inline-flex items-center gap-2 border border-[var(--text)] text-[var(--text)] px-4 py-2 rounded-full hover:scale-105 transition-transform">About Me</a>
                </div>
              </motion.div>
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  )
}
