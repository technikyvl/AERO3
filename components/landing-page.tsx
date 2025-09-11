"use client"

import { useState } from "react"

export default function LandingPage() {
  const [clickedNav, setClickedNav] = useState<string | null>(null)
  const [clickedMain, setClickedMain] = useState(false)

  const handleNavClick = (item: string) => {
    setClickedNav(item)
    setTimeout(() => setClickedNav(null), 600)
  }

  const handleMainClick = () => {
    setClickedMain(true)
    setTimeout(() => setClickedMain(false), 800)
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-y-auto">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-8">
        <div className="liquid-glass-dark rounded-full px-16 py-8 backdrop-blur-xl">
          <div className="flex space-x-20">
            <a
              href="#"
              onClick={() => handleNavClick('strona')}
              className={`text-white hover:text-white/60 transition-all duration-300 font-ascender text-lg tracking-widest uppercase ${clickedNav === 'strona' ? 'click-glass' : ''}`}
            >
              Strona Główna
            </a>
            <a
              href="#"
              onClick={() => handleNavClick('kontakt')}
              className={`text-white hover:text-white/60 transition-all duration-300 font-ascender text-lg tracking-widest uppercase ${clickedNav === 'kontakt' ? 'click-glass' : ''}`}
            >
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-32">
        <div className="text-center max-w-6xl">
          {/* Hero content - Layout like the image */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            {/* Left side - Text content */}
            <div className="flex-1 text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-white font-ki-bold tracking-wide mb-8 leading-tight">
                SKALUJEMY FIRMY ONLINE
              </h1>
              <p className="text-xl text-white/80 font-ki-bold mb-8 leading-relaxed">
                Dedykowane strategie marketingowe, które łączą się z odbiorcami, generują mierzalne rezultaty i wspierają znaczący wzrost.
              </p>
            </div>
            
            {/* Right side - Images */}
            <div className="flex-1 flex gap-6 justify-center lg:justify-end">
              <div className="glassmorphism-button rounded-2xl p-4 w-96 h-96 flex items-center justify-center">
                <img 
                  src="/kampania.png" 
                  alt="Kampanie Reklamowe" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="glassmorphism-button rounded-2xl p-4 w-96 h-96 flex items-center justify-center">
                <img 
                  src="/stat.png" 
                  alt="Statystyki" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Service buttons */}
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* Kampanie Reklamowe Button */}
            <div 
              className="glassmorphism-button rounded-2xl p-8 cursor-pointer min-w-[300px] text-center"
              onClick={() => handleMainClick()}
            >
              <h2 className="text-2xl font-bold text-white font-ki-bold tracking-wide">
                KAMPANIE REKLAMOWE
              </h2>
            </div>
            
            {/* Strony Internetowe Button */}
            <div 
              className="glassmorphism-button rounded-2xl p-8 cursor-pointer min-w-[300px] text-center"
              onClick={() => handleMainClick()}
            >
              <h2 className="text-2xl font-bold text-white font-ki-bold tracking-wide">
                STRONY INTERNETOWE
              </h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
