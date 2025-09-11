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
        {/* Large liquid glass panels */}
        <div className={`absolute top-0 left-0 w-1/2 h-full liquid-glass rounded-r-3xl glass-float ${showLiquidGlass ? 'opacity-20' : 'opacity-0'}`} 
             style={{ animationDelay: '0s' }} />
        <div className={`absolute top-0 right-0 w-1/3 h-2/3 liquid-glass rounded-l-3xl glass-float ${showLiquidGlass ? 'opacity-15' : 'opacity-0'}`} 
             style={{ animationDelay: '2s' }} />
        <div className={`absolute bottom-0 left-1/3 w-1/2 h-1/2 liquid-glass rounded-t-3xl glass-float ${showLiquidGlass ? 'opacity-10' : 'opacity-0'}`} 
             style={{ animationDelay: '4s' }} />
        
        {/* Lightning elements */}
        <div className={`absolute top-1/4 left-1/2 w-1 h-32 lightning-vertical ${showMetallic ? 'opacity-100' : 'opacity-0'}`} 
             style={{ animationDelay: '1s' }} />
        <div className={`absolute top-1/2 right-1/4 w-32 h-1 lightning ${showMetallic ? 'opacity-100' : 'opacity-0'}`} 
             style={{ animationDelay: '2.5s' }} />
        <div className={`absolute bottom-1/4 left-1/4 w-1 h-24 lightning-vertical ${showMetallic ? 'opacity-100' : 'opacity-0'}`} 
             style={{ animationDelay: '3.5s' }} />
        
        {/* Large metallic panels */}
        <div className={`absolute top-1/4 right-0 w-48 h-48 metallic-chrome rounded-l-3xl liquid-morph ${showMetallic ? 'opacity-30' : 'opacity-0'}`} 
             style={{ animationDelay: '1s' }} />
        <div className={`absolute bottom-0 left-0 w-64 h-32 metallic rounded-tr-3xl liquid-morph ${showMetallic ? 'opacity-25' : 'opacity-0'}`} 
             style={{ animationDelay: '2s' }} />
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
