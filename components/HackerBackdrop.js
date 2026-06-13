import { useEffect, useMemo, useState } from 'react'

const POPUP_LINES = [
  '[scan ports] complete',
  '[decrypt packet] active',
  '[inject payload] queued',
  '[trace bypass] success',
  '[proxy rotate] standby',
  '[auth token] refreshed'
]

const popupSeed = [
  { title: 'HUB', x: '6%', y: '12%', width: 190 },
  { title: 'DICTIONARY CRACKER', x: '64%', y: '18%', width: 210 },
  { title: 'MISSION FEED', x: '14%', y: '63%', width: 220 },
  { title: 'NODE STATUS', x: '60%', y: '68%', width: 200 }
]

const MATRIX_CHARS = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ$#*+?'

const buildColumnText = (seed) => {
  const chars = []
  for (let i = 0; i < 36; i += 1) {
    const pick = (seed * (i + 3) + i * 7) % MATRIX_CHARS.length
    chars.push(MATRIX_CHARS[pick])
  }
  return chars.join('\n')
}

export default function HackerBackdrop() {
  const [activePopup, setActivePopup] = useState(0)
  const [lineIndex, setLineIndex] = useState(0)

  const columns = useMemo(
    () =>
      Array.from({ length: 32 }, (_, i) => ({
        id: i,
        left: `${(i * 100) / 32}%`,
        duration: `${8 + (i % 7) * 1.6}s`,
        delay: `${-(i % 10) * 1.05}s`,
        text: buildColumnText(i + 11)
      })),
    []
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePopup((value) => (value + 1) % popupSeed.length)
      setLineIndex((value) => (value + 1) % POPUP_LINES.length)
    }, 2200)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <div className="hacker-matrix" aria-hidden="true">
        {columns.map((column) => (
          <span
            key={column.id}
            className="hacker-column"
            style={{
              left: column.left,
              animationDuration: column.duration,
              animationDelay: column.delay
            }}
          >
            {column.text}
          </span>
        ))}
      </div>

      <div className="hacker-popups" aria-hidden="true">
        {popupSeed.map((popup, index) => (
          <div
            key={popup.title}
            className={`hacker-popup ${activePopup === index ? 'active' : ''}`}
            style={{ left: popup.x, top: popup.y, width: popup.width }}
          >
            <div className="hacker-popup-header">
              <span>{popup.title}</span>
              <span>X</span>
            </div>
            <div className="hacker-popup-body">
              <mark>{POPUP_LINES[(lineIndex + index) % POPUP_LINES.length]}</mark>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
