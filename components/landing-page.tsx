"use client"

import React, { useState } from "react"

export default function LandingPage() {
  const [currentPage, setCurrentPage] = useState('home')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isEnglish, setIsEnglish] = useState(false)
  const [clickedNav, setClickedNav] = useState<string | null>(null)
  const [copiedItem, setCopiedItem] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    phoneNumber: '',
    websiteUrl: '',
    budget: ''
  })

  const translations = {
    'SKALUJEMY FIRMY ONLINE': 'WE SCALE COMPANIES ONLINE',
    'Strategie marketingowe, które docierają do ludzi, przynoszą konkretne efekty i pomagają skalować twoją firmę.': 'Marketing strategies that reach people, deliver concrete results and help scale your business.',
    'WYPEŁNIJ FORMULARZ': 'FILL OUT FORM',
    'Kontakt': 'Contact',
    'Strona Główna': 'Home',
    'FORMULARZ': 'FORM',
    'Jaki rodzaj usługi cię interesuje?': 'What type of service interests you?',
    'Strona internetowa': 'Website',
    'Kampania reklamowa': 'Advertising campaign',
    'Numer telefonu': 'Phone number',
    'URL do Instagram/strony internetowej twojej firmy': 'URL to Instagram/website of your company',
    'Ile pieniędzy możesz przeznaczyć na skalowanie twojej marki?': 'How much money can you allocate to scaling your brand?',
    'Adres email': 'Email address',
    'Imię': 'Name',
    'Wprowadź swoje imię': 'Enter your name',
    'Wprowadź swój adres email': 'Enter your email address',
    'Wprowadź numer telefonu': 'Enter phone number',
    'Wprowadź URL': 'Enter URL',
    'Wprowadź budżet': 'Enter budget',
    'Dalej': 'Next',
    'Wyślij': 'Send',
    'To wszystko. Skontaktujemy się z tobą wkrótce.': 'That\'s all. We will contact you soon.',
    'Email': 'Email',
    'Telefon': 'Phone',
    'Instagram': 'Instagram',
    'Facebook': 'Facebook',
    'KOPIUJ': 'COPY',
    'Powrót': 'Back',
    'Wojciech Zaniewski & Jakub Eliasik': 'Wojciech Zaniewski & Jakub Eliasik'
  }

  const translateText = (text: string) => {
    return isEnglish ? (translations[text as keyof typeof translations] || text) : text
  }

  const handleNavClick = (page: string) => {
    setCurrentPage(page)
    setClickedNav(page)
    setTimeout(() => setClickedNav(null), 300)
  }

  const copyToClipboard = async (text: string, item: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItem(item)
      setTimeout(() => setCopiedItem(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const questions = [
    {
      id: 'serviceType',
      question: translateText('Jaki rodzaj usługi cię interesuje?'),
      type: 'select',
      options: [
        translateText('Strona internetowa'),
        translateText('Kampania reklamowa')
      ]
    },
    {
      id: 'name',
      question: translateText('Imię'),
      type: 'text',
      placeholder: translateText('Wprowadź swoje imię')
    },
    {
      id: 'email',
      question: translateText('Adres email'),
      type: 'email',
      placeholder: translateText('Wprowadź swój adres email')
    },
    {
      id: 'phoneNumber',
      question: translateText('Numer telefonu'),
      type: 'tel',
      placeholder: translateText('Wprowadź numer telefonu')
    },
    {
      id: 'websiteUrl',
      question: translateText('URL do Instagram/strony internetowej twojej firmy'),
      type: 'url',
      placeholder: translateText('Wprowadź URL')
    },
    {
      id: 'budget',
      question: translateText('Ile pieniędzy możesz przeznaczyć na skalowanie twojej marki?'),
      type: 'text',
      placeholder: translateText('Wprowadź budżet')
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'kontakt@aerodigital.pl',
          subject: 'Nowy formularz kontaktowy',
          data: formData
        })
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        console.error('Failed to send email')
      }
    } catch (error) {
      console.error('Error sending email:', error)
    }
  }

  const scrollToApply = () => {
    const element = document.getElementById('apply-section')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (currentPage === 'contact') {
    return (
      <div className="min-h-screen bg-black text-white relative flex flex-col overflow-y-auto">
        {/* Logo - Desktop only */}
        <div className="hidden md:block fixed top-8 left-8 z-50">
          <button
            onClick={() => setCurrentPage('home')}
            className="text-xl font-dm-sans font-bold text-white hover:text-white/70 transition-colors duration-300"
          >
            <span className="uppercase">AERO</span><span className="font-normal">DIGITAL</span>
          </button>
        </div>

        {/* Translation Button - Desktop */}
        <div className="hidden md:block fixed top-8 right-8 z-50">
          <button
            onClick={() => setIsEnglish(!isEnglish)}
            className="liquid-glass px-4 py-2 rounded-full text-white font-ascender text-sm hover:scale-105 transition-all duration-300"
          >
            {isEnglish ? 'PL' : 'EN'}
          </button>
        </div>

        {/* Navigation */}
        <nav className="fixed top-4 left-4 md:top-16 md:left-1/2 md:transform md:-translate-x-1/2 z-40">
          <div className="flex gap-6 md:gap-8">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-sm md:text-base font-ascender transition-all duration-300 ${
                clickedNav === 'home' ? 'click-glass' : ''
              } ${
                currentPage === 'home' ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {translateText('Strona Główna')}
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`text-sm md:text-base font-ascender transition-all duration-300 ${
                clickedNav === 'contact' ? 'click-glass' : ''
              } ${
                currentPage === 'contact' ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {translateText('Kontakt')}
            </button>
          </div>
        </nav>

        {/* Translation Button - Mobile */}
        <div className="md:hidden fixed top-4 right-4 z-50">
          <button
            onClick={() => setIsEnglish(!isEnglish)}
            className="liquid-glass px-3 py-2 rounded-full text-white font-ascender text-xs hover:scale-105 transition-all duration-300"
          >
            {isEnglish ? 'PL' : 'EN'}
          </button>
        </div>

        {/* Contact Content */}
        <div className="flex-1 pt-24 md:pt-32 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-white font-ascender mb-12 text-center">
              {translateText('Kontakt')}
            </h1>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="liquid-glass-dark p-6 rounded-2xl">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-ascender text-white mb-2">{translateText('Email')}</h3>
                    <p className="text-white/80 font-inter">kontakt@aerodigital.pl</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard('kontakt@aerodigital.pl', 'email')}
                    className="liquid-glass px-4 py-2 rounded-lg text-white font-ascender text-sm hover:scale-105 transition-all duration-300"
                  >
                    {copiedItem === 'email' ? '✓' : translateText('KOPIUJ')}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="liquid-glass-dark p-6 rounded-2xl">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-ascender text-white mb-2">{translateText('Telefon')}</h3>
                    <p className="text-white/80 font-inter">510830344</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard('510830344', 'phone')}
                    className="liquid-glass px-4 py-2 rounded-lg text-white font-ascender text-sm hover:scale-105 transition-all duration-300"
                  >
                    {copiedItem === 'phone' ? '✓' : translateText('KOPIUJ')}
                  </button>
                </div>
              </div>

              {/* Instagram */}
              <div className="liquid-glass-dark p-6 rounded-2xl">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-ascender text-white mb-2">{translateText('Instagram')}</h3>
                    <p className="text-white/80 font-inter">aerodigital.pl</p>
                  </div>
                  <button
                    onClick={() => window.open('https://www.instagram.com/aerodigital.pl/', '_blank')}
                    className="liquid-glass px-4 py-2 rounded-lg text-white font-ascender text-sm hover:scale-105 transition-all duration-300"
                  >
                    {translateText('ODWIEDŹ')}
                  </button>
                </div>
              </div>

              {/* Facebook */}
              <div className="liquid-glass-dark p-6 rounded-2xl">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-ascender text-white mb-2">{translateText('Facebook')}</h3>
                    <p className="text-white/80 font-inter">Aero Digital</p>
                  </div>
                  <button
                    onClick={() => window.open('https://www.facebook.com/profile.php?id=61576407853036', '_blank')}
                    className="liquid-glass px-4 py-2 rounded-lg text-white font-ascender text-sm hover:scale-105 transition-all duration-300"
                  >
                    {translateText('ODWIEDŹ')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black border-t border-white/10 py-8 px-4 mt-auto">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCurrentPage('home')}
                className="text-xl font-dm-sans font-bold text-white hover:text-white/70 transition-colors duration-300"
              >
                <span className="uppercase">AERO</span><span className="font-normal">DIGITAL</span>
              </button>
              <span className="text-white/60 font-ascender text-sm">2025</span>
            </div>
            <div className="text-white/60 font-inter text-sm text-center md:text-right">
              Wojciech Zaniewski & Jakub Eliasik
            </div>
          </div>
        </footer>
      </div>
    )
  }

  if (currentPage === 'form') {
    return (
      <div className="min-h-screen bg-black text-white relative flex flex-col overflow-y-auto">
        {/* Logo - Desktop only */}
        <div className="hidden md:block fixed top-8 left-8 z-50">
          <button
            onClick={() => setCurrentPage('home')}
            className="text-xl font-dm-sans font-bold text-white hover:text-white/70 transition-colors duration-300"
          >
            <span className="uppercase">AERO</span><span className="font-normal">DIGITAL</span>
          </button>
        </div>

        {/* Translation Button - Desktop */}
        <div className="hidden md:block fixed top-8 right-8 z-50">
          <button
            onClick={() => setIsEnglish(!isEnglish)}
            className="liquid-glass px-4 py-2 rounded-full text-white font-ascender text-sm hover:scale-105 transition-all duration-300"
          >
            {isEnglish ? 'PL' : 'EN'}
          </button>
        </div>

        {/* Navigation */}
        <nav className="fixed top-4 left-4 md:top-16 md:left-1/2 md:transform md:-translate-x-1/2 z-40">
          <div className="flex gap-6 md:gap-8">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-sm md:text-base font-ascender transition-all duration-300 ${
                clickedNav === 'home' ? 'click-glass' : ''
              } ${
                currentPage === 'home' ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {translateText('Strona Główna')}
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`text-sm md:text-base font-ascender transition-all duration-300 ${
                clickedNav === 'contact' ? 'click-glass' : ''
              } ${
                currentPage === 'contact' ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {translateText('Kontakt')}
            </button>
          </div>
        </nav>

        {/* Translation Button - Mobile */}
        <div className="md:hidden fixed top-4 right-4 z-50">
          <button
            onClick={() => setIsEnglish(!isEnglish)}
            className="liquid-glass px-3 py-2 rounded-full text-white font-ascender text-xs hover:scale-105 transition-all duration-300"
          >
            {isEnglish ? 'PL' : 'EN'}
          </button>
        </div>

        {/* Form Content */}
        <div className="flex-1 pt-24 md:pt-32 px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-white font-ascender mb-12 text-center">
              {translateText('FORMULARZ')}
            </h1>
            
            {!isSubmitted ? (
              <div className="space-y-8">
                <div className="liquid-glass-dark p-8 rounded-2xl">
                  <h2 className="text-xl font-ascender text-white mb-6">
                    {questions[currentQuestion].question}
                  </h2>
                  
                  {questions[currentQuestion].type === 'select' ? (
                    <div className="space-y-4">
                      {questions[currentQuestion].options?.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setFormData(prev => ({
                              ...prev,
                              [questions[currentQuestion].id]: option
                            }))
                          }}
                          className={`w-full p-4 rounded-lg text-left font-inter transition-all duration-300 ${
                            formData[questions[currentQuestion].id as keyof typeof formData] === option
                              ? 'liquid-glass text-white'
                              : 'bg-white/10 text-white/80 hover:bg-white/20'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <input
                      type={questions[currentQuestion].type}
                      name={questions[currentQuestion].id}
                      value={formData[questions[currentQuestion].id as keyof typeof formData]}
                      onChange={handleInputChange}
                      placeholder={questions[currentQuestion].placeholder || ''}
                      className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-white/60 font-inter border border-white/20 focus:border-white/40 focus:outline-none transition-all duration-300"
                    />
                  )}
                </div>
                
                <div className="flex justify-between">
                  {currentQuestion > 0 && (
                    <button
                      onClick={() => setCurrentQuestion(currentQuestion - 1)}
                      className="metallic-button px-6 py-3 rounded-lg text-white font-ascender hover:scale-105 transition-all duration-300"
                    >
                      {translateText('Powrót')}
                    </button>
                  )}
                  
                  {currentQuestion < questions.length - 1 ? (
                    <button
                      onClick={handleNext}
                      className="metallic-button px-6 py-3 rounded-lg text-white font-ascender hover:scale-105 transition-all duration-300 ml-auto"
                    >
                      {translateText('Dalej')}
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="metallic-button px-6 py-3 rounded-lg text-white font-ascender hover:scale-105 transition-all duration-300 ml-auto"
                    >
                      {translateText('Wyślij')}
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="liquid-glass-dark p-8 rounded-2xl text-center">
                <h2 className="text-2xl font-ascender text-white mb-4">
                  {translateText('To wszystko. Skontaktujemy się z tobą wkrótce.')}
                </h2>
                <button
                  onClick={() => {
                    setCurrentPage('home')
                    setCurrentQuestion(0)
                    setIsSubmitted(false)
                    setFormData({
                      name: '',
                      email: '',
                      serviceType: '',
                      phoneNumber: '',
                      websiteUrl: '',
                      budget: ''
                    })
                  }}
                  className="metallic-button px-6 py-3 rounded-lg text-white font-ascender hover:scale-105 transition-all duration-300 mt-6"
                >
                  {translateText('Strona Główna')}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black border-t border-white/10 py-8 px-4 mt-auto">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCurrentPage('home')}
                className="text-xl font-dm-sans font-bold text-white hover:text-white/70 transition-colors duration-300"
              >
                <span className="uppercase">AERO</span><span className="font-normal">DIGITAL</span>
              </button>
              <span className="text-white/60 font-ascender text-sm">2025</span>
            </div>
            <div className="text-white/60 font-inter text-sm text-center md:text-right">
              Wojciech Zaniewski & Jakub Eliasik
            </div>
          </div>
        </footer>
      </div>
    )
  }

  // Main Home Page
  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col overflow-y-auto">
      {/* Logo - Desktop only */}
      <div className="hidden md:block fixed top-8 left-8 z-50">
        <button
          onClick={() => setCurrentPage('home')}
          className="text-xl font-dm-sans font-bold text-white hover:text-white/70 transition-colors duration-300"
        >
          <span className="uppercase">AERO</span><span className="font-normal">DIGITAL</span>
        </button>
      </div>

      {/* Translation Button - Desktop */}
      <div className="hidden md:block fixed top-8 right-8 z-50">
        <button
          onClick={() => setIsEnglish(!isEnglish)}
          className="liquid-glass px-4 py-2 rounded-full text-white font-ascender text-sm hover:scale-105 transition-all duration-300"
        >
          {isEnglish ? 'PL' : 'EN'}
        </button>
      </div>

      {/* Navigation */}
      <nav className="fixed top-4 left-4 md:top-16 md:left-1/2 md:transform md:-translate-x-1/2 z-40">
        <div className="flex gap-6 md:gap-8">
          <button
            onClick={() => handleNavClick('home')}
            className={`text-sm md:text-base font-ascender transition-all duration-300 ${
              clickedNav === 'home' ? 'click-glass' : ''
            } ${
              currentPage === 'home' ? 'text-white' : 'text-white/60 hover:text-white'
            }`}
          >
            {translateText('Strona Główna')}
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`text-sm md:text-base font-ascender transition-all duration-300 ${
              clickedNav === 'contact' ? 'click-glass' : ''
            } ${
              currentPage === 'contact' ? 'text-white' : 'text-white/60 hover:text-white'
            }`}
          >
            {translateText('Kontakt')}
          </button>
        </div>
      </nav>

      {/* Translation Button - Mobile */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsEnglish(!isEnglish)}
          className="liquid-glass px-3 py-2 rounded-full text-white font-ascender text-xs hover:scale-105 transition-all duration-300"
        >
          {isEnglish ? 'PL' : 'EN'}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 pt-20 md:pt-32 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="mb-16 md:mb-24">
            {/* Hero Section layout (images left, text right) */}
            <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 mb-12 md:mb-16">
              {/* Left side - Images */}
              <div className="flex-1 flex flex-col sm:flex-row lg:flex-row gap-4 md:gap-6 justify-center lg:justify-start w-full lg:w-auto">
                <div className="glassmorphism-button rounded-2xl p-3 md:p-4 w-full max-w-[300px] h-[300px] sm:max-w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] flex items-center justify-center mx-auto lg:mx-0">
                  <img
                    src="/kampania.png"
                    alt="Kampanie Reklamowe"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <div className="glassmorphism-button rounded-2xl p-3 md:p-4 w-full max-w-[300px] h-[300px] sm:max-w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] flex items-center justify-center mx-auto lg:mx-0">
                  <img
                    src="/stat.png"
                    alt="Statystyki"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
              </div>

              {/* Right side - Text content */}
              <div className="flex-1 text-left w-full lg:w-auto">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white font-ascender tracking-normal mb-6 md:mb-8 leading-tight">
                  {translateText('SKALUJEMY FIRMY ONLINE')}
                </h1>
                <p className="text-lg md:text-xl text-white/80 font-inter mb-6 md:mb-8 leading-relaxed">
                  {translateText('Strategie marketingowe, które docierają do ludzi, przynoszą konkretne efekty i pomagają skalować twoją firmę.')}
                </p>
              </div>
            </div>

            {/* Scroll down arrow */}
            <div className="flex justify-center">
              <button
                onClick={scrollToApply}
                className="bounce-arrow text-white/80 hover:text-white transition-colors duration-300"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Apply Now Section */}
          <div id="apply-section" className="mb-16 md:mb-24">
            <div className="text-center">
              <button
                onClick={() => setCurrentPage('form')}
                className="metallic-button px-8 py-4 rounded-2xl text-white font-ascender text-lg hover:scale-105 transition-all duration-300"
              >
                {translateText('WYPEŁNIJ FORMULARZ')}
              </button>
            </div>

            {/* Back to top arrow */}
            <div className="flex justify-center mt-32">
              <button
                onClick={scrollToTop}
                className="bounce-arrow-up text-white/80 hover:text-white transition-colors duration-300"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-8 px-4 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentPage('home')}
              className="text-xl font-dm-sans font-bold text-white hover:text-white/70 transition-colors duration-300"
            >
              <span className="uppercase">AERO</span><span className="font-normal">DIGITAL</span>
            </button>
            <span className="text-white/60 font-ascender text-sm">2025</span>
          </div>
          <div className="text-white/60 font-inter text-sm text-center md:text-right">
            Wojciech Zaniewski & Jakub Eliasik
          </div>
        </div>
      </footer>
    </div>
  )
}