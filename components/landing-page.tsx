"use client"

import { useState, useEffect } from "react"

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
    <div className="min-h-screen bg-black text-white relative">

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-8 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} transition-all duration-1000`}>
        <div className="liquid-glass-dark rounded-full px-12 py-6 backdrop-blur-xl">
          <div className="flex space-x-16">
            <a
              href="#"
              className="text-white hover:text-white/70 transition-all duration-500 font-saira font-bold text-lg tracking-widest uppercase ios-scale"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              Strona Główna
            </a>
            <a
              href="#"
              className="text-white hover:text-white/70 transition-all duration-500 font-saira font-bold text-lg tracking-widest uppercase ios-scale"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              Portfolio
            </a>
            <a
              href="#"
              className="text-white hover:text-white/70 transition-all duration-500 font-saira font-bold text-lg tracking-widest uppercase ios-scale"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
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

    </div>
  )
}
