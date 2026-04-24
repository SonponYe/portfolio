import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function IntroSequence({ onComplete }){
  const phrase = 'vibing to the rhythm of life'
  const [stage, setStage] = useState('typing') // typing | pause | deleting
  const [display, setDisplay] = useState('')
  const [visible, setVisible] = useState(true)
  const indexRef = useRef(0)

  useEffect(()=>{
    if(stage === 'typing'){
      const t = setInterval(()=>{
        indexRef.current += 1
        setDisplay(phrase.slice(0, indexRef.current))
        if(indexRef.current >= phrase.length){
          clearInterval(t)
          setStage('pause')
        }
      }, 60)
      return ()=> clearInterval(t)
    }

    if(stage === 'pause'){
      const timeout = setTimeout(()=>{
        setStage('deleting')
      }, 1200)
      return ()=> clearTimeout(timeout)
    }

    if(stage === 'deleting'){
      const t2 = setInterval(()=>{
        indexRef.current -= 1
        if(indexRef.current < 0){
          clearInterval(t2)
          setDisplay('')
          setVisible(false)
          setTimeout(()=>{
            onComplete && onComplete()
          }, 650)
          return
        }
        setDisplay(phrase.slice(0, indexRef.current))
      }, 40)
      return ()=> clearInterval(t2)
    }
  },[stage, onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
          className="fixed inset-0 bg-black z-50 flex items-center justify-center intro-json"
        >
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--text)] glow-green">
              <span>{display}</span>
              <span className="ml-1"><span className="animate-pulse">|</span></span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
