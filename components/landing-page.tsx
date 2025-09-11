"use client"

import { useState } from "react"

export default function LandingPage() {
  const [clickedNav, setClickedNav] = useState<string | null>(null)
  const [clickedMain, setClickedMain] = useState(false)
  const [copiedItem, setCopiedItem] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState<'home' | 'contact'>('home')

  const handleNavClick = (item: string) => {
    setClickedNav(item)
    setTimeout(() => setClickedNav(null), 600)
    
    if (item === 'Kontakt') {
      setCurrentPage('contact')
    } else if (item === 'Strona Główna') {
      setCurrentPage('home')
    }
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

  // Contact Page Component
  const ContactPage = () => (
    <div className="min-h-screen bg-black text-white relative overflow-y-auto">
      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="liquid-glass-dark rounded-full px-8 py-4">
          <div className="flex space-x-8">
            {['Strona Główna', 'Kontakt'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`font-ascender font-light text-sm tracking-wider uppercase ios-scale transition-all duration-300 ${
                  clickedNav === item ? 'click-glass' : ''
                } ${currentPage === item ? 'text-white font-bold' : 'text-white/70'} hover:text-white`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Contact Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-32">
        <div className="text-center max-w-2xl w-full">
          <h1 className="text-6xl md:text-8xl font-bold text-white font-ki-bold tracking-wide mb-16">
            KONTAKT
          </h1>
          
          <div className="space-y-6">
            {/* Email */}
            <div className="liquid-glass-dark rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <h3 className="text-2xl font-ki-bold mb-2 text-white">Email</h3>
                  <p className="text-xl font-inter text-white/80">kontakt@aerodigital.pl</p>
                </div>
                <button
                  onClick={() => copyToClipboard('kontakt@aerodigital.pl', 'email')}
                  className="liquid-glass-dark rounded-xl px-6 py-3 text-white font-ki-bold text-sm uppercase tracking-wider hover:bg-white/20 transition-all duration-300"
                >
                  {copiedItem === 'email' ? 'SKOPIOWANO' : 'KOPIUJ'}
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="liquid-glass-dark rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <h3 className="text-2xl font-ki-bold mb-2 text-white">Telefon</h3>
                  <p className="text-xl font-inter text-white/80">510830344</p>
                </div>
                <button
                  onClick={() => copyToClipboard('510830344', 'phone')}
                  className="liquid-glass-dark rounded-xl px-6 py-3 text-white font-ki-bold text-sm uppercase tracking-wider hover:bg-white/20 transition-all duration-300"
                >
                  {copiedItem === 'phone' ? 'SKOPIOWANO' : 'KOPIUJ'}
                </button>
              </div>
            </div>

            {/* Instagram */}
            <div className="liquid-glass-dark rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <h3 className="text-2xl font-ki-bold mb-2 text-white">Instagram</h3>
                  <p className="text-xl font-inter text-white/80">aerodigital.pl</p>
                </div>
                <button
                  onClick={() => copyToClipboard('aerodigital.pl', 'instagram')}
                  className="liquid-glass-dark rounded-xl px-6 py-3 text-white font-ki-bold text-sm uppercase tracking-wider hover:bg-white/20 transition-all duration-300"
                >
                  {copiedItem === 'instagram' ? 'SKOPIOWANO' : 'KOPIUJ'}
                </button>
              </div>
            </div>

            {/* Facebook */}
            <div className="liquid-glass-dark rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <h3 className="text-2xl font-ki-bold mb-2 text-white">Facebook</h3>
                  <p className="text-xl font-inter text-white/80">aerodigital.pl</p>
                </div>
                <button
                  onClick={() => copyToClipboard('aerodigital.pl', 'facebook')}
                  className="liquid-glass-dark rounded-xl px-6 py-3 text-white font-ki-bold text-sm uppercase tracking-wider hover:bg-white/20 transition-all duration-300"
                >
                  {copiedItem === 'facebook' ? 'SKOPIOWANO' : 'KOPIUJ'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Home Page Component
  const HomePage = () => (
    <div className="min-h-screen bg-black text-white relative overflow-y-auto">
      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="liquid-glass-dark rounded-full px-8 py-4">
          <div className="flex space-x-8">
            {['Strona Główna', 'Kontakt'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`font-ascender font-light text-sm tracking-wider uppercase ios-scale transition-all duration-300 ${
                  clickedNav === item ? 'click-glass' : ''
                } ${currentPage === item ? 'text-white font-bold' : 'text-white/70'} hover:text-white`}
              >
                {item}
              </button>
            ))}
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
    </div>
  )

  // Main render with conditional page display
  return currentPage === 'contact' ? <ContactPage /> : <HomePage />
}