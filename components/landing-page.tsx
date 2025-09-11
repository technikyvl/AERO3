"use client"

import { useState } from "react"

export default function LandingPage() {
  const [clickedNav, setClickedNav] = useState<string | null>(null)
  const [clickedMain, setClickedMain] = useState(false)
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  const handleNavClick = (item: string) => {
    setClickedNav(item)
    setTimeout(() => setClickedNav(null), 600)
  }

  const handleMainClick = () => {
    setClickedMain(true)
    setTimeout(() => setClickedMain(false), 800)
  }

  const copyToClipboard = async (text: string, item: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItem(item)
      setTimeout(() => setCopiedItem(null), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
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
              <p className="text-xl text-white/80 font-inter mb-8 leading-relaxed">
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

          {/* Animated arrow */}
          <div className="flex justify-center mt-8">
            <div 
              className="bounce-arrow text-white text-4xl"
              onClick={() => {
                const applySection = document.getElementById('apply-section');
                applySection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              ↓
            </div>
          </div>
        </div>
      </div>

      {/* Apply Now Section */}
      <div id="apply-section" className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center">
          <h2 className="text-6xl md:text-8xl font-bold text-white font-ki-bold tracking-wide mb-8">
            ZAAPLIKUJ TERAZ
          </h2>
          <p className="text-2xl text-white/80 font-inter mb-12">
            Rozpocznij swoją podróż do sukcesu online
          </p>
          <button className="glassmorphism-button rounded-2xl px-12 py-6 text-2xl font-ki-bold text-white hover:bg-white/10 transition-all duration-300">
            WYPEŁNIJ FORMULARZ
          </button>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold text-white font-ki-bold tracking-wide mb-16">
            KONTAKT
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <div className="glassmorphism-button rounded-2xl p-8 text-left">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-ki-bold text-white mb-2">Email</h3>
                  <p className="text-xl font-inter text-white/80">kontakt@aerodigital.pl</p>
                </div>
                <button
                  onClick={() => copyToClipboard('kontakt@aerodigital.pl', 'email')}
                  className="text-white hover:text-white/70 transition-colors duration-300 text-2xl"
                >
                  {copiedItem === 'email' ? '✓' : '📋'}
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="glassmorphism-button rounded-2xl p-8 text-left">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-ki-bold text-white mb-2">Telefon</h3>
                  <p className="text-xl font-inter text-white/80">510830344</p>
                </div>
                <button
                  onClick={() => copyToClipboard('510830344', 'phone')}
                  className="text-white hover:text-white/70 transition-colors duration-300 text-2xl"
                >
                  {copiedItem === 'phone' ? '✓' : '📋'}
                </button>
              </div>
            </div>

            {/* Instagram */}
            <div className="glassmorphism-button rounded-2xl p-8 text-left">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-ki-bold text-white mb-2">Instagram</h3>
                  <p className="text-xl font-inter text-white/80">aerodigital.pl</p>
                </div>
                <button
                  onClick={() => copyToClipboard('aerodigital.pl', 'instagram')}
                  className="text-white hover:text-white/70 transition-colors duration-300 text-2xl"
                >
                  {copiedItem === 'instagram' ? '✓' : '📋'}
                </button>
              </div>
            </div>

            {/* Facebook */}
            <div className="glassmorphism-button rounded-2xl p-8 text-left">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-ki-bold text-white mb-2">Facebook</h3>
                  <p className="text-xl font-inter text-white/80">aerodigital.pl</p>
                </div>
                <button
                  onClick={() => copyToClipboard('aerodigital.pl', 'facebook')}
                  className="text-white hover:text-white/70 transition-colors duration-300 text-2xl"
                >
                  {copiedItem === 'facebook' ? '✓' : '📋'}
                </button>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="mt-12">
            <p className="text-2xl font-inter text-white/80">
              Czynne całodobowo
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
