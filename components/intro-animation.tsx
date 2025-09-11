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
      {/* Enhanced liquid glass and metallic animations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Liquid glass orbs with enhanced animations */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-6 h-6 liquid-glass rounded-full glass-float liquid-morph ${showLiquidGlass ? 'opacity-100' : 'opacity-0'}`}
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.6}s`,
              transitionDelay: `${0.5 + i * 0.2}s`
            }}
          />
        ))}
        
        {/* Metallic lightning elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`lightning-${i}`}
            className={`absolute lightning-vertical ${showMetallic ? 'opacity-100' : 'opacity-0'}`}
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 2) * 35}%`,
              width: '1px',
              height: '40px',
              animationDelay: `${i * 0.8}s`,
              transitionDelay: `${1 + i * 0.3}s`
            }}
          />
        ))}
        
        {/* Horizontal lightning elements */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`h-lightning-${i}`}
            className={`absolute lightning ${showMetallic ? 'opacity-100' : 'opacity-0'}`}
            style={{
              left: `${20 + i * 20}%`,
              top: `${25 + i * 15}%`,
              width: '60px',
              height: '1px',
              animationDelay: `${i * 1.2}s`,
              transitionDelay: `${1.5 + i * 0.4}s`
            }}
          />
        ))}
      </div>

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
