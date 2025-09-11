"use client"

import { useState, useEffect } from "react"
import FloatingElements from "./floating-elements"

export default function LandingPage() {
  const [showContent, setShowContent] = useState(false)
  const [showElements, setShowElements] = useState(false)

  useEffect(() => {
    const contentTimer = setTimeout(() => setShowContent(true), 200)
    const elementsTimer = setTimeout(() => setShowElements(true), 800)
    
    return () => {
      clearTimeout(contentTimer)
      clearTimeout(elementsTimer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Liquid glass background elements */}
        <div className={`absolute top-10 left-10 w-64 h-64 liquid-glass rounded-full glass-float ${showElements ? 'opacity-30' : 'opacity-0'}`} 
             style={{ animationDelay: '0s' }} />
        <div className={`absolute bottom-20 right-20 w-48 h-48 liquid-glass rounded-full glass-float ${showElements ? 'opacity-20' : 'opacity-0'}`} 
             style={{ animationDelay: '2s' }} />
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 liquid-glass rounded-full glass-float ${showElements ? 'opacity-25' : 'opacity-0'}`} 
             style={{ animationDelay: '4s' }} />
      </div>

      {/* Navigation */}
      <nav className={`relative z-10 flex items-center justify-between p-6 border-b border-gray-800/50 liquid-glass-dark ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} transition-all duration-1000`}>
        <div className="text-2xl font-bold font-saira text-gradient">
          AD
        </div>
        <div className="flex space-x-8">
          <a
            href="#"
            className="hover:text-primary transition-all duration-300 font-saira font-medium ios-scale"
          >
            Strona Główna
          </a>
          <a
            href="#"
            className="hover:text-primary transition-all duration-300 font-saira font-medium ios-scale"
          >
            Portfolio
          </a>
          <a
            href="#"
            className="hover:text-primary transition-all duration-300 font-saira font-medium ios-scale"
          >
            O Nas
          </a>
          <a
            href="#"
            className="hover:text-primary transition-all duration-300 font-saira font-medium ios-scale"
          >
            Kontakt
          </a>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
        <div className="text-center max-w-6xl">
          {/* Main heading with enhanced effects */}
          <h1
            className={`text-6xl md:text-8xl font-bold text-white tracking-wider font-saira text-reveal ${showContent ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '0.5s' }}
          >
            AERODIGITAL
          </h1>
          
          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-gray-300 mt-8 font-saira font-light ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-1000`}
             style={{ transitionDelay: '1s' }}>
            Digital Agency Specializing in Cutting-Edge Web Experiences
          </p>
          
          {/* Metallic accent elements */}
          <div className={`flex justify-center space-x-4 mt-12 ${showElements ? 'opacity-100' : 'opacity-0'} transition-all duration-1000`}
               style={{ transitionDelay: '1.5s' }}>
            <div className="w-16 h-1 metallic-shine"></div>
            <div className="w-8 h-1 metallic-shine"></div>
            <div className="w-16 h-1 metallic-shine"></div>
          </div>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mt-12 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-1000`}
               style={{ transitionDelay: '2s' }}>
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-black font-saira font-semibold rounded-full ios-scale liquid-glass hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
              Zobacz Portfolio
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-saira font-semibold rounded-full ios-scale liquid-glass-dark hover:border-primary hover:text-primary transition-all duration-300">
              Skontaktuj się
            </button>
          </div>
        </div>
      </div>

      {/* Floating metallic elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 metallic rounded-full liquid-morph ${showElements ? 'opacity-100' : 'opacity-0'}`}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              transitionDelay: `${2 + i * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* Global floating elements */}
      <FloatingElements />
    </div>
  )
}
