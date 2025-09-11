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
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Liquid glass orbs */}
        <div className={`absolute top-1/4 left-1/4 w-32 h-32 liquid-glass rounded-full glass-float ${showLiquidGlass ? 'opacity-100' : 'opacity-0'}`} 
             style={{ animationDelay: '0s' }} />
        <div className={`absolute top-3/4 right-1/4 w-24 h-24 liquid-glass rounded-full glass-float ${showLiquidGlass ? 'opacity-100' : 'opacity-0'}`} 
             style={{ animationDelay: '1s' }} />
        <div className={`absolute top-1/2 right-1/3 w-16 h-16 liquid-glass rounded-full glass-float ${showLiquidGlass ? 'opacity-100' : 'opacity-0'}`} 
             style={{ animationDelay: '2s' }} />
        
        {/* Metallic elements */}
        <div className={`absolute top-1/3 right-1/4 w-20 h-20 metallic-chrome rounded-lg liquid-morph ${showMetallic ? 'opacity-100' : 'opacity-0'}`} 
             style={{ animationDelay: '0.5s' }} />
        <div className={`absolute bottom-1/3 left-1/3 w-12 h-12 metallic rounded-full liquid-morph ${showMetallic ? 'opacity-100' : 'opacity-0'}`} 
             style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Main content */}
      {showText && (
        <div className="relative z-10 text-center">
          {/* Liquid glass container */}
          <div className={`liquid-glass-dark rounded-3xl p-12 mx-4 transition-all duration-1000 ${showLiquidGlass ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <h1
              className={`
                text-6xl md:text-8xl font-bold text-white font-saira
                ${glitchActive ? "glitch-animation neon-glow" : "neon-glow text-reveal"}
              `}
            >
              AERODIGITAL
            </h1>
            
            {/* Metallic accent line */}
            <div className={`w-32 h-1 mx-auto mt-6 metallic-shine ${showMetallic ? 'opacity-100' : 'opacity-0'}`} 
                 style={{ transitionDelay: '1s' }} />
          </div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 liquid-glass rounded-full liquid-drip ${showLiquidGlass ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 40}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${3 + i * 0.5}s`
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
