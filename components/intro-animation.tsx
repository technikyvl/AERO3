"use client"

import { useState, useEffect } from "react"

export default function IntroAnimation() {
  const [showText, setShowText] = useState(false)
  const [glitchActive, setGlitchActive] = useState(false)
  const [showLiquidGlass, setShowLiquidGlass] = useState(false)
  const [showMetallic, setShowMetallic] = useState(false)

  useEffect(() => {
    const showTimer = setTimeout(() => setShowText(true), 300)
    const liquidTimer = setTimeout(() => setShowLiquidGlass(true), 800)
    const metallicTimer = setTimeout(() => setShowMetallic(true), 1200)
    const glitchTimer = setTimeout(() => setGlitchActive(true), 2000)
    const stopGlitchTimer = setTimeout(() => setGlitchActive(false), 3500)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(liquidTimer)
      clearTimeout(metallicTimer)
      clearTimeout(glitchTimer)
      clearTimeout(stopGlitchTimer)
    }
  }, [])

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black">

      {/* Main content */}
      {showText && (
        <div className="relative z-10 text-center">
          {/* Liquid glass container */}
          <div className={`liquid-glass-dark rounded-3xl p-12 mx-4 transition-all duration-1000 ${showLiquidGlass ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <h1
              className={`
                text-6xl md:text-8xl font-bold text-white
                ${glitchActive ? "glitch-animation" : "text-reveal"}
              `}
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              AERODIGITAL
            </h1>
            
            {/* Metallic accent line */}
            <div className={`w-32 h-1 mx-auto mt-6 metallic-shine ${showMetallic ? 'opacity-100' : 'opacity-0'}`} 
                 style={{ transitionDelay: '1s' }} />
          </div>
          
        </div>
      )}
    </div>
  )
}
