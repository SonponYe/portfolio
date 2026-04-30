import { useEffect, useRef, useState } from 'react'
import '../styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax'
import HackerBackdrop from '../components/HackerBackdrop'

export default function App({ Component, pageProps }){
  const [majorGlitchActive, setMajorGlitchActive] = useState(false)
  const glitchTimerRef = useRef(null)

  useEffect(() => {
    const durationMs = 1500

    const scheduleNextGlitch = () => {
      const nextInterval = 10000 + Math.floor(Math.random() * 5000)
      glitchTimerRef.current = window.setTimeout(() => {
        setMajorGlitchActive(true)
        window.setTimeout(() => {
          setMajorGlitchActive(false)
        }, durationMs)
        scheduleNextGlitch()
      }, nextInterval)
    }

    scheduleNextGlitch()

    return () => {
      if (glitchTimerRef.current) {
        window.clearTimeout(glitchTimerRef.current)
      }
    }
  }, [])

  return (
    <ParallaxProvider>
      <div className={`hacker-shell min-h-full relative ${majorGlitchActive ? 'major-glitch-active' : ''}`}>
        <HackerBackdrop />
        <div
          className={`major-glitch-overlay ${majorGlitchActive ? 'active' : ''}`}
          aria-hidden="true"
        />
        <Component {...pageProps} />
      </div>
    </ParallaxProvider>
  )
}
