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
        {/* Large liquid glass panels */}
        <div className={`absolute top-0 left-0 w-1/3 h-full liquid-glass rounded-r-3xl glass-float ${showElements ? 'opacity-15' : 'opacity-0'}`} 
             style={{ animationDelay: '0s' }} />
        <div className={`absolute top-0 right-0 w-1/2 h-2/3 liquid-glass rounded-l-3xl glass-float ${showElements ? 'opacity-10' : 'opacity-0'}`} 
             style={{ animationDelay: '2s' }} />
        <div className={`absolute bottom-0 left-1/2 w-1/2 h-1/3 liquid-glass rounded-t-3xl glass-float ${showElements ? 'opacity-8' : 'opacity-0'}`} 
             style={{ animationDelay: '4s' }} />
        
        {/* Lightning elements */}
        <div className={`absolute top-1/3 left-1/4 w-1 h-40 lightning-vertical ${showElements ? 'opacity-100' : 'opacity-0'}`} 
             style={{ animationDelay: '1s' }} />
        <div className={`absolute top-1/2 right-1/3 w-48 h-1 lightning ${showElements ? 'opacity-100' : 'opacity-0'}`} 
             style={{ animationDelay: '2.5s' }} />
        <div className={`absolute bottom-1/3 right-1/4 w-1 h-32 lightning-vertical ${showElements ? 'opacity-100' : 'opacity-0'}`} 
             style={{ animationDelay: '3.5s' }} />
        
        {/* Large metallic panels */}
        <div className={`absolute top-1/4 right-0 w-64 h-64 metallic-chrome rounded-l-3xl liquid-morph ${showElements ? 'opacity-20' : 'opacity-0'}`} 
             style={{ animationDelay: '1.5s' }} />
        <div className={`absolute bottom-0 left-0 w-80 h-40 metallic rounded-tr-3xl liquid-morph ${showElements ? 'opacity-15' : 'opacity-0'}`} 
             style={{ animationDelay: '3s' }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-6 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} transition-all duration-1000`}>
        <div className="liquid-glass-dark rounded-full px-8 py-4 backdrop-blur-xl">
          <div className="flex space-x-12">
            <a
              href="#"
              className="text-white/80 hover:text-white transition-all duration-300 font-saira font-light text-sm tracking-wider uppercase ios-scale"
            >
              Strona Główna
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-all duration-300 font-saira font-light text-sm tracking-wider uppercase ios-scale"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-all duration-300 font-saira font-light text-sm tracking-wider uppercase ios-scale"
            >
              O Nas
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-all duration-300 font-saira font-light text-sm tracking-wider uppercase ios-scale"
            >
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
        <div className="text-center max-w-6xl">
          {/* Main heading with enhanced effects */}
          <h1
            className={`text-6xl md:text-8xl font-bold text-white tracking-wider text-reveal ${showContent ? 'opacity-100' : 'opacity-0'}`}
            style={{ fontFamily: "Helvetica, Arial, sans-serif", transitionDelay: '0.5s' }}
          >
            AERODIGITAL
          </h1>
          
          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-gray-400 mt-8 font-saira font-light ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-1000`}
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
            <button className="px-8 py-4 bg-white text-black font-saira font-medium rounded-full ios-scale liquid-glass hover:bg-gray-100 transition-all duration-300">
              Zobacz Portfolio
            </button>
            <button className="px-8 py-4 border border-white/30 text-white font-saira font-medium rounded-full ios-scale liquid-glass-dark hover:border-white hover:bg-white/5 transition-all duration-300">
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
