"use client"

import { useState, useEffect } from "react"

export default function IntroAnimation() {
  const [showText, setShowText] = useState(false)
  const [glitchActive, setGlitchActive] = useState(false)

  useEffect(() => {
    const showTimer = setTimeout(() => setShowText(true), 500)
    const glitchTimer = setTimeout(() => setGlitchActive(true), 1500)
    const stopGlitchTimer = setTimeout(() => setGlitchActive(false), 3500)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(glitchTimer)
      clearTimeout(stopGlitchTimer)
    }
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      {showText && (
        <h1
          className={`
            text-6xl md:text-8xl font-bold text-white
            ${glitchActive ? "glitch-animation neon-glow" : "neon-glow"}
          `}
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          AERODIGITAL
        </h1>
      )}
    </div>
  )
}
