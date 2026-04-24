import { useEffect, useState } from 'react'

export default function TypingEffect({ 
  text, 
  delay = 0, 
  speed = 50, 
  deleteSpeed = 30, 
  pauseTime = 1500,
  loop = true,
  className = ''
}) {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let timer
    
    // Initial delay before starting
    if (index === 0 && !displayText && delay > 0) {
      timer = setTimeout(() => {
        setIndex(1)
      }, delay)
      return () => clearTimeout(timer)
    }

    // Typing effect
    if (!isDeleting && index < text.length) {
      timer = setTimeout(() => {
        setDisplayText(text.substring(0, index + 1))
        setIndex(index + 1)
      }, speed)
    }
    // Pause at end before deleting
    else if (!isDeleting && index >= text.length && !isPaused) {
      timer = setTimeout(() => {
        setIsPaused(true)
      }, pauseTime)
    }
    // Start deleting
    else if (!isDeleting && isPaused) {
      timer = setTimeout(() => {
        setIsDeleting(true)
        setIsPaused(false)
      }, 200)
    }
    // Deleting effect
    else if (isDeleting && index > 0) {
      timer = setTimeout(() => {
        setDisplayText(text.substring(0, index - 1))
        setIndex(index - 1)
      }, deleteSpeed)
    }
    // Loop back to typing or stop
    else if (isDeleting && index === 0) {
      if (loop) {
        timer = setTimeout(() => {
          setIsDeleting(false)
          setIndex(1)
        }, 500)
      } else {
        setDisplayText('')
        setIsDeleting(false)
      }
    }

    return () => clearTimeout(timer)
  }, [index, isDeleting, isPaused, displayText, text, speed, deleteSpeed, pauseTime, loop, delay])

  return (
    <span className={`typing-effect ${className}`}>
      {displayText}
      <span className="cursor">█</span>
    </span>
  )
}
