"use client"

import { useState } from "react"

export default function LandingPage() {
  const [clickedNav, setClickedNav] = useState<string | null>(null)
  const [clickedMain, setClickedMain] = useState(false)
  const [copiedItem, setCopiedItem] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState<'home' | 'contact' | 'form'>('home')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    phoneNumber: '',
    websiteUrl: '',
    budget: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleFormSubmit = async () => {
    setIsSubmitting(true)
    
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
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < 5) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      handleFormSubmit()
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const resetForm = () => {
    setCurrentQuestion(0)
    setFormData({
      name: '',
      email: '',
      serviceType: '',
      phoneNumber: '',
      websiteUrl: '',
      budget: ''
    })
    setIsSubmitted(false)
    setCurrentPage('home')
  }

  // Form Page Component
  const FormPage = () => {
    const questions = [
      {
        id: 'name',
        question: 'Jak masz na imię?',
        type: 'text',
        placeholder: 'Wprowadź swoje imię'
      },
      {
        id: 'email',
        question: 'Jaki jest Twój adres email?',
        type: 'text',
        placeholder: 'Wprowadź swój email'
      },
      {
        id: 'serviceType',
        question: 'Jaki rodzaj usługi cię interesuje?',
        type: 'select',
        options: ['Strona internetowa', 'Kampania reklamowa']
      },
      {
        id: 'phoneNumber',
        question: 'Numer telefonu:',
        type: 'text',
        placeholder: 'Wprowadź swój numer telefonu'
      },
      {
        id: 'websiteUrl',
        question: 'URL do Instagram/strony internetowej twojej firmy',
        type: 'text',
        placeholder: 'Wprowadź URL'
      },
      {
        id: 'budget',
        question: 'Ile pieniędzy możesz przeznaczyć na skalowanie twojej marki?',
        type: 'text',
        placeholder: 'Wprowadź kwotę'
      }
    ]

    const currentQ = questions[currentQuestion]

    if (isSubmitted) {
  return (
        <div className="min-h-screen bg-black text-white relative overflow-y-auto">
          {/* Logo */}
          <div className="fixed top-8 left-8 z-50">
            <button
              onClick={() => setCurrentPage('home')}
              className="text-2xl font-dm-sans font-bold text-white hover:text-white/70 transition-colors duration-300"
            >
              <span className="uppercase">AERO</span><span className="font-normal">DIGITAL</span>
            </button>
          </div>

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

          {/* Success Message */}
          <div className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-32">
            <div className="text-center max-w-2xl">
              <h1 className="text-6xl md:text-8xl font-bold text-white font-ascender tracking-wide mb-8">
                DZIĘKUJEMY!
              </h1>
              <p className="text-2xl text-white/80 font-inter mb-12">
                To wszystko. Skontaktujemy się z tobą wkrótce.
              </p>
              <button
                onClick={resetForm}
                className="liquid-glass-dark rounded-2xl px-12 py-6 text-2xl font-ascender text-white hover:bg-white/10 transition-all duration-300"
              >
                WRÓĆ DO STRONY GŁÓWNEJ
              </button>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="min-h-screen bg-black text-white relative overflow-y-auto">
        {/* Logo */}
        <div className="fixed top-8 left-8 z-50">
          <button
            onClick={() => setCurrentPage('home')}
            className="text-2xl font-dm-sans font-bold text-white hover:text-white/70 transition-colors duration-300"
          >
            <span className="uppercase">AERO</span><span className="font-normal">DIGITAL</span>
          </button>
        </div>

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

        {/* Form Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-32">
          <div className="text-center max-w-2xl w-full">
            <h1 className="text-5xl md:text-7xl font-bold text-white font-ascender tracking-wide mb-16 smooth-transition">
              FORMULARZ
            </h1>
            
            <div className="liquid-glass-dark rounded-2xl p-8 mb-8 smooth-transition">
              <h2 className="text-3xl font-ascender text-white mb-8">
                {currentQ.question}
              </h2>
              
              {currentQ.type === 'select' ? (
                <div className="space-y-4">
                  {currentQ.options?.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setFormData({...formData, [currentQ.id]: option})
                        setTimeout(nextQuestion, 500)
                      }}
                      className={`w-full metallic-button rounded-xl p-4 text-xl font-ascender text-white smooth-transition ${
                        formData[currentQ.id as keyof typeof formData] === option ? 'bg-white/20' : ''
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  <input
                    type="text"
                    value={formData[currentQ.id as keyof typeof formData]}
                    onChange={(e) => setFormData({...formData, [currentQ.id]: e.target.value})}
                    placeholder={currentQ.placeholder}
                    className="w-full liquid-glass-dark rounded-xl p-4 text-xl font-ascender text-white placeholder-white/50 bg-transparent border-none outline-none focus:ring-2 focus:ring-white/20 smooth-transition"
                    autoFocus
                  />
                  <div className="flex gap-4 justify-center">
                    {currentQuestion > 0 && (
                      <button
                        onClick={prevQuestion}
                        className="metallic-button rounded-xl px-8 py-3 text-lg font-ascender text-white smooth-transition"
                      >
                        WSTECZ
                      </button>
                    )}
                    <button
                      onClick={nextQuestion}
                      disabled={!formData[currentQ.id as keyof typeof formData]}
                      className="metallic-button rounded-xl px-8 py-3 text-lg font-ascender text-white smooth-transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'WYSYŁANIE...' : currentQuestion === 5 ? 'WYŚLIJ' : 'DALEJ'}
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="text-white/60 font-inter smooth-transition">
              Pytanie {currentQuestion + 1} z {questions.length}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Contact Page Component
  const ContactPage = () => (
    <div className="min-h-screen bg-black text-white relative overflow-y-auto">
      {/* Logo */}
      <div className="fixed top-4 left-4 z-50 md:top-8 md:left-8">
        <button
          onClick={() => setCurrentPage('home')}
          className="text-lg md:text-2xl font-dm-sans font-bold text-white hover:text-white/70 transition-colors duration-300"
        >
          <span className="uppercase">AERO</span><span className="font-normal">DIGITAL</span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="fixed top-4 right-4 z-50 md:top-8 md:left-1/2 md:transform md:-translate-x-1/2">
        <div className="liquid-glass-dark rounded-full px-4 py-2 md:px-8 md:py-4">
          <div className="flex space-x-4 md:space-x-8">
            {['Strona Główna', 'Kontakt'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`font-ascender font-light text-xs md:text-sm tracking-wider uppercase ios-scale transition-all duration-300 ${
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
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 md:px-6 pt-20 md:pt-32">
        <div className="text-center max-w-2xl w-full">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white font-ascender tracking-wide mb-12 md:mb-16">
            KONTAKT
          </h1>
          
          <div className="space-y-4 md:space-y-6">
            {/* Email */}
            <div className="liquid-glass-dark rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-left">
                  <h3 className="text-xl md:text-2xl font-ascender mb-2 text-white">Email</h3>
                  <p className="text-lg md:text-xl font-inter text-white/80 break-all">kontakt@aerodigital.pl</p>
                </div>
                <button
                  onClick={() => copyToClipboard('kontakt@aerodigital.pl', 'email')}
                  className="liquid-glass-dark rounded-xl px-4 py-2 md:px-6 md:py-3 text-white font-ascender text-xs md:text-sm uppercase tracking-wider hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
                >
                  {copiedItem === 'email' ? 'SKOPIOWANO' : 'KOPIUJ'}
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="liquid-glass-dark rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <h3 className="text-2xl font-ascender mb-2 text-white">Telefon</h3>
                  <p className="text-xl font-inter text-white/80">510830344</p>
                </div>
                <button
                  onClick={() => copyToClipboard('510830344', 'phone')}
                  className="liquid-glass-dark rounded-xl px-6 py-3 text-white font-ascender text-sm uppercase tracking-wider hover:bg-white/20 transition-all duration-300"
                >
                  {copiedItem === 'phone' ? 'SKOPIOWANO' : 'KOPIUJ'}
                </button>
              </div>
            </div>

            {/* Instagram */}
            <div className="liquid-glass-dark rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <h3 className="text-2xl font-ascender mb-2 text-white">Instagram</h3>
                  <p className="text-xl font-inter text-white/80">aerodigital.pl</p>
                </div>
                <button
                  onClick={() => copyToClipboard('aerodigital.pl', 'instagram')}
                  className="liquid-glass-dark rounded-xl px-6 py-3 text-white font-ascender text-sm uppercase tracking-wider hover:bg-white/20 transition-all duration-300"
                >
                  {copiedItem === 'instagram' ? 'SKOPIOWANO' : 'KOPIUJ'}
                </button>
              </div>
            </div>

            {/* Facebook */}
            <div className="liquid-glass-dark rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <h3 className="text-2xl font-ascender mb-2 text-white">Facebook</h3>
                  <p className="text-xl font-inter text-white/80">Aero Digital</p>
                </div>
                <button
                  onClick={() => copyToClipboard('Aero Digital', 'facebook')}
                  className="liquid-glass-dark rounded-xl px-6 py-3 text-white font-ascender text-sm uppercase tracking-wider hover:bg-white/20 transition-all duration-300"
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
      {/* Logo */}
      <div className="fixed top-4 left-4 z-50 md:top-8 md:left-8">
        <button
          onClick={() => setCurrentPage('home')}
          className="text-lg md:text-2xl font-dm-sans font-bold text-white hover:text-white/70 transition-colors duration-300"
        >
          <span className="uppercase">AERO</span><span className="font-normal">DIGITAL</span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="fixed top-4 right-4 z-50 md:top-8 md:left-1/2 md:transform md:-translate-x-1/2">
        <div className="liquid-glass-dark rounded-full px-4 py-2 md:px-8 md:py-4">
          <div className="flex space-x-4 md:space-x-8">
            {['Strona Główna', 'Kontakt'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`font-ascender font-light text-xs md:text-sm tracking-wider uppercase ios-scale transition-all duration-300 ${
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-6 pt-20 md:pt-32">
        <div className="text-center max-w-6xl w-full">
          {/* Hero content - Layout like the image */}
          <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Left side - Text content */}
            <div className="flex-1 text-left w-full lg:w-auto">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white font-ascender tracking-wide mb-6 md:mb-8 leading-tight">
                SKALUJEMY FIRMY ONLINE
              </h1>
              <p className="text-lg md:text-xl text-white/80 font-inter mb-6 md:mb-8 leading-relaxed">
                Strategie marketingowe, które docierają do ludzi, przynoszą konkretne efekty i pomagają skalować twoją firmę.
              </p>
            </div>
            
            {/* Right side - Images */}
            <div className="flex-1 flex flex-col sm:flex-row lg:flex-row gap-4 md:gap-6 justify-center lg:justify-end w-full lg:w-auto">
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
      <div id="apply-section" className="relative z-10 flex items-center justify-center min-h-screen px-4 md:px-6">
        <div className="text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white font-ascender tracking-wide mb-6 md:mb-8">
            ZAAPLIKUJ TERAZ
          </h2>
          <p className="text-lg md:text-2xl text-white/80 font-inter mb-8 md:mb-12">
            Rozpocznij swoją podróż do sukcesu online
          </p>
          <button 
            onClick={() => setCurrentPage('form')}
            className="glassmorphism-button rounded-2xl px-8 py-4 md:px-12 md:py-6 text-lg md:text-2xl font-ascender text-white hover:bg-white/10 transition-all duration-300 w-full max-w-md mx-auto"
          >
            WYPEŁNIJ FORMULARZ
          </button>
        </div>
      </div>
    </div>
  )

  // Main render with conditional page display
  if (currentPage === 'contact') return <ContactPage />
  if (currentPage === 'form') return <FormPage />
  return <HomePage />
}