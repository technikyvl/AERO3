"use client"

import React, { useState } from "react"

export default function LandingPage() {
  const [clickedNav, setClickedNav] = useState<string | null>(null)
  const [clickedMain, setClickedMain] = useState(false)
  const [copiedItem, setCopiedItem] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState<'home' | 'contact' | 'form' | 'privacy'>('home')
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
  const [isEnglish, setIsEnglish] = useState(false)

  // Translation dictionary
  const translations = {
    // Navigation
    'Strona Główna': 'Home',
    'Kontakt': 'Contact',
    
    // Hero Section
    'SKALUJEMY FIRMY ONLINE': 'WE SCALE COMPANIES ONLINE',
    'Strategie marketingowe, które docierają do ludzi, przynoszą konkretne efekty i pomagają skalować twoją firmę.': 'Marketing strategies that reach people, deliver concrete results and help scale your business.',
    
    // Apply Section
    'ZAAPLIKUJ TERAZ': 'APPLY NOW',
    'Rozpocznij swoją podróż do sukcesu online': 'Start your journey to online success',
    'WYPEŁNIJ FORMULARZ': 'FILL OUT FORM',
    
    // Contact Section
    'KONTAKT': 'CONTACT',
    'Email': 'Email',
    'Telefon': 'Phone',
    'Instagram': 'Instagram',
    'Facebook': 'Facebook',
    'KOPIUJ': 'COPY',
    'SKOPIOWANO': 'COPIED',
    
    // Form Section
    'FORMULARZ': 'FORM',
    'Jak masz na imię?': 'What is your name?',
    'Jaki jest Twój adres email?': 'What is your email address?',
    'Jaki rodzaj usługi cię interesuje?': 'What type of service are you interested in?',
    'Strona internetowa': 'Website',
    'Kampania reklamowa': 'Advertising campaign',
    'Numer telefonu:': 'Phone number:',
    'URL do Instagram/strony internetowej twojej firmy': 'URL to Instagram/website of your company',
    'Ile pieniędzy możesz przeznaczyć na skalowanie twojej marki?': 'How much money can you allocate to scaling your brand?',
    'WSTECZ': 'BACK',
    'DALEJ': 'NEXT',
    'WYŚLIJ': 'SEND',
      'WYSYŁANIE...': 'SENDING...',
      'Pytanie': 'Question',
      'z': 'of',
      'ODWIEDŹ': 'VISIT',
    
    // Success Section
    'DZIĘKUJEMY!': 'THANK YOU!',
    'To wszystko. Skontaktujemy się z tobą wkrótce.': 'That\'s all. We will contact you soon.',
    'WRÓĆ DO STRONY GŁÓWNEJ': 'BACK TO HOME PAGE',
    
    // Privacy Policy
    'REGULAMIN': 'PRIVACY POLICY',
    'REGULAMIN PRZECHOWYWANIA DANYCH': 'DATA STORAGE REGULATIONS',
    '1. ADMINISTRATOR DANYCH': '1. DATA ADMINISTRATOR',
    'Administratorem danych osobowych jest Aero Digital z siedzibą w Polsce.': 'The administrator of personal data is Aero Digital based in Poland.',
    '2. CEL PRZETWARZANIA DANYCH': '2. PURPOSE OF DATA PROCESSING',
    'Dane osobowe są przetwarzane w celu:': 'Personal data is processed for the purpose of:',
    '• Kontaktu z klientem w sprawie oferowanych usług': '• Contacting the client regarding offered services',
    '• Przedstawienia oferty handlowej': '• Presenting commercial offers',
    '• Realizacji usług marketingowych': '• Providing marketing services',
    '• Analizy potrzeb klienta': '• Analyzing customer needs',
    '3. PODSTAWY PRAWNE': '3. LEGAL BASIS',
    'Przetwarzanie danych odbywa się na podstawie:': 'Data processing is based on:',
    '• Zgody osoby, której dane dotyczą (art. 6 ust. 1 lit. a RODO)': '• Consent of the data subject (Art. 6(1)(a) GDPR)',
    '• Wykonania umowy lub podjęcia działań przed zawarciem umowy (art. 6 ust. 1 lit. b RODO)': '• Performance of contract or taking steps prior to entering into a contract (Art. 6(1)(b) GDPR)',
    '4. RODZAJE DANYCH': '4. TYPES OF DATA',
    'Przetwarzamy następujące dane osobowe:': 'We process the following personal data:',
    '• Imię i nazwisko': '• First and last name',
    '• Adres e-mail': '• Email address',
    '• Numer telefonu': '• Phone number',
    '• Informacje o firmie i jej potrzebach': '• Information about the company and its needs',
    '5. OKRES PRZECHOWYWANIA': '5. RETENTION PERIOD',
    'Dane osobowe będą przechowywane przez okres:': 'Personal data will be stored for the period of:',
    '• 3 lata od ostatniego kontaktu z klientem': '• 3 years from the last contact with the client',
    '• Do momentu wycofania zgody': '• Until consent is withdrawn',
    '• Do momentu zrealizowania celu przetwarzania': '• Until the processing purpose is fulfilled',
    '6. PRAWA OSOBY, KTÓREJ DANE DOTYCZĄ': '6. RIGHTS OF THE DATA SUBJECT',
    'Osoba, której dane dotyczą, ma prawo do:': 'The data subject has the right to:',
    '• Dostępu do swoich danych': '• Access to their data',
    '• Sprostowania nieprawidłowych danych': '• Rectification of incorrect data',
    '• Usunięcia danych': '• Erasure of data',
    '• Ograniczenia przetwarzania': '• Restriction of processing',
    '• Przenoszenia danych': '• Data portability',
    '• Wycofania zgody w dowolnym momencie': '• Withdrawing consent at any time',
    '• Wniesienia skargi do organu nadzorczego': '• Lodging a complaint with the supervisory authority',
    '7. BEZPIECZEŃSTWO DANYCH': '7. DATA SECURITY',
    'Zapewniamy odpowiednie środki techniczne i organizacyjne w celu ochrony danych osobowych przed:': 'We ensure appropriate technical and organizational measures to protect personal data against:',
    '• Nieuprawnionym dostępem': '• Unauthorized access',
    '• Utratą danych': '• Data loss',
    '• Zniszczeniem danych': '• Data destruction',
    '• Nieuprawnioną modyfikacją': '• Unauthorized modification',
    '8. UDOSTĘPNIANIE DANYCH': '8. DATA SHARING',
    'Dane osobowe nie są udostępniane podmiotom trzecim bez zgody osoby, której dane dotyczą, chyba że wymaga tego prawo.': 'Personal data is not shared with third parties without the consent of the data subject, unless required by law.',
    '9. KONTAKT': '9. CONTACT',
    'W sprawach dotyczących przetwarzania danych osobowych można się kontaktować:': 'For matters regarding personal data processing, you can contact:',
    '• E-mail: kontakt@aerodigital.pl': '• Email: kontakt@aerodigital.pl',
    '• Telefon: 510830344': '• Phone: 510830344',
    '10. ZMIANY W REGULAMINIE': '10. CHANGES TO THE REGULATIONS',
    'Regulamin może być zmieniany. O zmianach będziemy informować na stronie internetowej.': 'The regulations may be changed. We will inform about changes on the website.',
    'Ostatnia aktualizacja: 1 stycznia 2025 r.': 'Last updated: January 1, 2025',
    
    // Form Placeholders
    'Wprowadź swoje imię': 'Enter your name',
    'Wprowadź swój email': 'Enter your email',
    'Wprowadź numer telefonu': 'Enter phone number',
    'Wprowadź URL strony/Instagrama': 'Enter website/Instagram URL',
    'Wprowadź budżet': 'Enter budget'
  }

  const translateText = (text: string) => {
    if (!isEnglish) return text
    return translations[text as keyof typeof translations] || text
  }

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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formspree.io/f/mkgveked', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.serviceType,
          phone: formData.phoneNumber,
          url: formData.websiteUrl,
          budget: formData.budget
        })
      })
      
      if (response.ok) {
        setIsSubmitted(true)
      } else {
        console.error('Failed to send form to Formspree')
      }
    } catch (error) {
      console.error('Error sending form to Formspree:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextQuestion = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault()
    }
    
    if (currentQuestion < 5) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      handleFormSubmit(e || new Event('submit') as any)
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
          <div className="fixed top-4 left-4 z-50 md:top-8 md:left-8">
            <button
              onClick={() => setCurrentPage('home')}
              className="text-lg md:text-2xl font-dm-sans font-bold text-white hover:text-white/70 transition-colors duration-300"
            >
              <span className="uppercase">AERO</span><span className="font-normal">DIGITAL</span>
            </button>
          </div>

          {/* Translation Button */}
          <div className="fixed top-4 right-4 z-50 md:top-8 md:right-8">
            <button
              onClick={() => setIsEnglish(!isEnglish)}
              className="liquid-glass-dark rounded-full px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-ascender text-white hover:bg-white/10 transition-all duration-300 ios-scale"
            >
              {isEnglish ? 'PL' : 'EN'}
            </button>
          </div>

          {/* Navigation */}
          <nav className="fixed top-4 left-4 z-50 md:top-8 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2">
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
                    {translateText(item)}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Success Message */}
          <div className="relative z-10 flex items-center justify-center min-h-screen px-4 md:px-6 pt-20 md:pt-32">
            <div className="text-center max-w-2xl">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white font-ascender tracking-wide mb-6 md:mb-8">
                {translateText('DZIĘKUJEMY!')}
              </h1>
              <p className="text-lg md:text-2xl text-white/80 font-inter mb-8 md:mb-12">
                {translateText('To wszystko. Skontaktujemy się z tobą wkrótce.')}
              </p>
              <button
                onClick={resetForm}
                className="liquid-glass-dark rounded-2xl px-8 py-4 md:px-12 md:py-6 text-lg md:text-2xl font-ascender text-white hover:bg-white/10 transition-all duration-300 w-full max-w-md mx-auto"
              >
                {translateText('WRÓĆ DO STRONY GŁÓWNEJ')}
              </button>
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

    return (
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

        {/* Translation Button */}
        <div className="fixed top-4 right-4 z-50 md:top-8 md:right-8">
          <button
            onClick={() => setIsEnglish(!isEnglish)}
            className="liquid-glass-dark rounded-full px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-ascender text-white hover:bg-white/10 transition-all duration-300 ios-scale"
          >
            {isEnglish ? 'PL' : 'EN'}
          </button>
        </div>

        {/* Navigation */}
        <nav className="fixed top-4 left-4 z-50 md:top-8 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2">
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
                  {translateText(item)}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Form Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 md:px-6 pt-20 md:pt-32">
          <div className="text-center max-w-2xl w-full">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white font-ascender tracking-wide mb-12 md:mb-16 smooth-transition">
              {translateText('FORMULARZ')}
            </h1>
            
            <form onSubmit={nextQuestion}>
              {/* Hidden inputs for Formspree */}
              <input type="hidden" name="name" value={formData.name} />
              <input type="hidden" name="email" value={formData.email} />
              <input type="hidden" name="service" value={formData.serviceType} />
              <input type="hidden" name="phone" value={formData.phoneNumber} />
              <input type="hidden" name="url" value={formData.websiteUrl} />
              <input type="hidden" name="budget" value={formData.budget} />
              
              <div className="liquid-glass-dark rounded-2xl p-4 md:p-8 mb-6 md:mb-8 smooth-transition">
                <h2 className="text-xl md:text-3xl font-ascender text-white mb-6 md:mb-8">
                  {translateText(currentQ.question)}
                </h2>
                
                {currentQ.type === 'select' ? (
                  <div className="space-y-3 md:space-y-4">
                    {currentQ.options?.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setFormData({...formData, [currentQ.id]: option})
                          setTimeout(() => nextQuestion(), 500)
                        }}
                        className={`w-full metallic-button rounded-xl p-3 md:p-4 text-lg md:text-xl font-ascender text-white smooth-transition ${
                          formData[currentQ.id as keyof typeof formData] === option ? 'bg-white/20' : ''
                        }`}
                      >
                        {translateText(option)}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4 md:space-y-6">
                    <input
                      type="text"
                      value={formData[currentQ.id as keyof typeof formData]}
                      onChange={(e) => setFormData({...formData, [currentQ.id]: e.target.value})}
                      placeholder={translateText(currentQ.placeholder || '')}
                      className="w-full liquid-glass-dark rounded-xl p-3 md:p-4 text-lg md:text-xl font-ascender text-white placeholder-white/50 bg-transparent border-none outline-none focus:ring-2 focus:ring-white/20 smooth-transition"
                      autoFocus
                    />
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      {currentQuestion > 0 && (
                        <button
                          type="button"
                          onClick={prevQuestion}
                          className="metallic-button rounded-xl px-6 py-3 md:px-8 md:py-3 text-base md:text-lg font-ascender text-white smooth-transition w-full sm:w-auto"
                        >
                          {translateText('WSTECZ')}
                        </button>
                      )}
                      <button
                        type="submit"
                        disabled={!formData[currentQ.id as keyof typeof formData]}
                        className="metallic-button rounded-xl px-6 py-3 md:px-8 md:py-3 text-base md:text-lg font-ascender text-white smooth-transition disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                      >
                        {isSubmitting ? translateText('WYSYŁANIE...') : currentQuestion === 5 ? translateText('WYŚLIJ') : translateText('DALEJ')}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </form>
            
            <div className="text-white/60 font-inter smooth-transition">
              {translateText('Pytanie')} {currentQuestion + 1} {translateText('z')} {questions.length}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Contact Page Component
  const ContactPage = () => (
    <div className="min-h-screen bg-black text-white relative overflow-y-auto">
      {/* Logo - Desktop only */}
      <div className="hidden md:block fixed top-8 left-8 z-50">
        <button
          onClick={() => setCurrentPage('home')}
          className="text-lg md:text-2xl font-dm-sans font-bold text-white hover:text-white/70 transition-colors duration-300"
        >
          <span className="uppercase">AERO</span><span className="font-normal">DIGITAL</span>
        </button>
      </div>

      {/* Translation Button */}
      <div className="fixed top-4 right-4 z-50 md:top-8 md:right-8">
        <button
          onClick={() => setIsEnglish(!isEnglish)}
          className="liquid-glass-dark rounded-full px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-ascender text-white hover:bg-white/10 transition-all duration-300 ios-scale"
        >
          {isEnglish ? 'PL' : 'EN'}
        </button>
      </div>

      {/* Navigation */}
      <nav className="fixed top-4 left-4 z-50 md:top-8 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2">
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
                {translateText(item)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Contact Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 md:px-6 pt-20 md:pt-32">
        <div className="text-center max-w-2xl w-full">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white font-ascender tracking-wide mb-12 md:mb-16">
            {translateText('KONTAKT')}
          </h1>
          
          <div className="space-y-4 md:space-y-6">
            {/* Email */}
            <div className="liquid-glass-dark rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-left">
                  <h3 className="text-xl md:text-2xl font-ascender mb-2 text-white">{translateText('Email')}</h3>
                  <p className="text-lg md:text-xl font-inter text-white/80 break-all">kontakt@aerodigital.pl</p>
                </div>
                <button
                  onClick={() => copyToClipboard('kontakt@aerodigital.pl', 'email')}
                  className="liquid-glass-dark rounded-xl px-4 py-2 md:px-6 md:py-3 text-white font-ascender text-xs md:text-sm uppercase tracking-wider hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
                >
                  {copiedItem === 'email' ? translateText('SKOPIOWANO') : translateText('KOPIUJ')}
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="liquid-glass-dark rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-left">
                  <h3 className="text-xl md:text-2xl font-ascender mb-2 text-white">{translateText('Telefon')}</h3>
                  <p className="text-lg md:text-xl font-inter text-white/80">510830344</p>
                </div>
                <button
                  onClick={() => copyToClipboard('510830344', 'phone')}
                  className="liquid-glass-dark rounded-xl px-4 py-2 md:px-6 md:py-3 text-white font-ascender text-xs md:text-sm uppercase tracking-wider hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
                >
                  {copiedItem === 'phone' ? translateText('SKOPIOWANO') : translateText('KOPIUJ')}
                </button>
              </div>
            </div>

            {/* Instagram */}
            <div className="liquid-glass-dark rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-left">
                  <h3 className="text-xl md:text-2xl font-ascender mb-2 text-white">{translateText('Instagram')}</h3>
                  <p className="text-lg md:text-xl font-inter text-white/80">aerodigital.pl</p>
                </div>
                <button
                  onClick={() => window.open('https://www.instagram.com/aerodigital.pl/', '_blank')}
                  className="liquid-glass-dark rounded-xl px-4 py-2 md:px-6 md:py-3 text-white font-ascender text-xs md:text-sm uppercase tracking-wider hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
                >
                  {translateText('ODWIEDŹ')}
                </button>
              </div>
            </div>

            {/* Facebook */}
            <div className="liquid-glass-dark rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-left">
                  <h3 className="text-xl md:text-2xl font-ascender mb-2 text-white">{translateText('Facebook')}</h3>
                  <p className="text-lg md:text-xl font-inter text-white/80">Aero Digital</p>
                </div>
                <button
                  onClick={() => window.open('https://www.facebook.com/profile.php?id=61576407853036', '_blank')}
                  className="liquid-glass-dark rounded-xl px-4 py-2 md:px-6 md:py-3 text-white font-ascender text-xs md:text-sm uppercase tracking-wider hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
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
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="text-white/60 font-inter text-sm text-center md:text-right">
              Wojciech Zaniewski & Jakub Eliasik
            </div>
            <button
              onClick={() => setCurrentPage('privacy')}
              className="text-white/60 hover:text-white font-inter text-sm underline transition-colors duration-300"
            >
              {translateText('REGULAMIN')}
            </button>
          </div>
        </div>
      </footer>
    </div>
  )

  // Privacy Policy Page Component
  const PrivacyPage = () => (
    <div className="min-h-screen bg-black text-white relative overflow-y-auto">
      {/* Logo - Desktop only */}
      <div className="hidden md:block fixed top-8 left-8 z-50">
        <button
          onClick={() => setCurrentPage('home')}
          className="text-lg md:text-2xl font-dm-sans font-bold text-white hover:text-white/70 transition-colors duration-300"
        >
          <span className="uppercase">AERO</span><span className="font-normal">DIGITAL</span>
        </button>
      </div>

      {/* Translation Button */}
      <div className="fixed top-4 right-4 z-50 md:top-8 md:right-8">
        <button
          onClick={() => setIsEnglish(!isEnglish)}
          className="liquid-glass-dark rounded-full px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-ascender text-white hover:bg-white/10 transition-all duration-300 ios-scale"
        >
          {isEnglish ? 'PL' : 'EN'}
        </button>
      </div>

      {/* Navigation */}
      <nav className="fixed top-4 left-4 z-50 md:top-8 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2">
        <div className="liquid-glass-dark rounded-full px-4 py-2 md:px-8 md:py-4">
          <div className="flex space-x-4 md:space-x-8">
            {['Strona Główna', 'Kontakt'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`text-xs md:text-sm font-ascender text-white hover:text-white/70 transition-all duration-300 ${
                  clickedNav === item ? 'click-glass' : ''
                } ${currentPage === (item === 'Strona Główna' ? 'home' : 'contact') ? 'text-white' : 'text-white/70'}`}
              >
                {translateText(item)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Privacy Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 md:px-6 pt-20 md:pt-32">
        <div className="text-center max-w-4xl w-full">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white font-ascender tracking-wide mb-12 md:mb-16">
            {translateText('REGULAMIN PRZECHOWYWANIA DANYCH')}
          </h1>
          
          <div className="space-y-8 text-left">
            {/* Section 1 */}
            <div className="liquid-glass-dark rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-ascender mb-4 text-white">{translateText('1. ADMINISTRATOR DANYCH')}</h2>
              <p className="text-lg md:text-xl font-inter text-white/80">{translateText('Administratorem danych osobowych jest Aero Digital z siedzibą w Polsce.')}</p>
            </div>

            {/* Section 2 */}
            <div className="liquid-glass-dark rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-ascender mb-4 text-white">{translateText('2. CEL PRZETWARZANIA DANYCH')}</h2>
              <p className="text-lg md:text-xl font-inter text-white/80 mb-4">{translateText('Dane osobowe są przetwarzane w celu:')}</p>
              <ul className="space-y-2 text-lg md:text-xl font-inter text-white/80">
                <li>• {translateText('Kontaktu z klientem w sprawie oferowanych usług')}</li>
                <li>• {translateText('Przedstawienia oferty handlowej')}</li>
                <li>• {translateText('Realizacji usług marketingowych')}</li>
                <li>• {translateText('Analizy potrzeb klienta')}</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="liquid-glass-dark rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-ascender mb-4 text-white">{translateText('3. PODSTAWY PRAWNE')}</h2>
              <p className="text-lg md:text-xl font-inter text-white/80 mb-4">{translateText('Przetwarzanie danych odbywa się na podstawie:')}</p>
              <ul className="space-y-2 text-lg md:text-xl font-inter text-white/80">
                <li>• {translateText('Zgody osoby, której dane dotyczą (art. 6 ust. 1 lit. a RODO)')}</li>
                <li>• {translateText('Wykonania umowy lub podjęcia działań przed zawarciem umowy (art. 6 ust. 1 lit. b RODO)')}</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="liquid-glass-dark rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-ascender mb-4 text-white">{translateText('4. RODZAJE DANYCH')}</h2>
              <p className="text-lg md:text-xl font-inter text-white/80 mb-4">{translateText('Przetwarzamy następujące dane osobowe:')}</p>
              <ul className="space-y-2 text-lg md:text-xl font-inter text-white/80">
                <li>• {translateText('Imię i nazwisko')}</li>
                <li>• {translateText('Adres e-mail')}</li>
                <li>• {translateText('Numer telefonu')}</li>
                <li>• {translateText('Informacje o firmie i jej potrzebach')}</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="liquid-glass-dark rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-ascender mb-4 text-white">{translateText('5. OKRES PRZECHOWYWANIA')}</h2>
              <p className="text-lg md:text-xl font-inter text-white/80 mb-4">{translateText('Dane osobowe będą przechowywane przez okres:')}</p>
              <ul className="space-y-2 text-lg md:text-xl font-inter text-white/80">
                <li>• {translateText('3 lata od ostatniego kontaktu z klientem')}</li>
                <li>• {translateText('Do momentu wycofania zgody')}</li>
                <li>• {translateText('Do momentu zrealizowania celu przetwarzania')}</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="liquid-glass-dark rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-ascender mb-4 text-white">{translateText('6. PRAWA OSOBY, KTÓREJ DANE DOTYCZĄ')}</h2>
              <p className="text-lg md:text-xl font-inter text-white/80 mb-4">{translateText('Osoba, której dane dotyczą, ma prawo do:')}</p>
              <ul className="space-y-2 text-lg md:text-xl font-inter text-white/80">
                <li>• {translateText('Dostępu do swoich danych')}</li>
                <li>• {translateText('Sprostowania nieprawidłowych danych')}</li>
                <li>• {translateText('Usunięcia danych')}</li>
                <li>• {translateText('Ograniczenia przetwarzania')}</li>
                <li>• {translateText('Przenoszenia danych')}</li>
                <li>• {translateText('Wycofania zgody w dowolnym momencie')}</li>
                <li>• {translateText('Wniesienia skargi do organu nadzorczego')}</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="liquid-glass-dark rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-ascender mb-4 text-white">{translateText('7. BEZPIECZEŃSTWO DANYCH')}</h2>
              <p className="text-lg md:text-xl font-inter text-white/80 mb-4">{translateText('Zapewniamy odpowiednie środki techniczne i organizacyjne w celu ochrony danych osobowych przed:')}</p>
              <ul className="space-y-2 text-lg md:text-xl font-inter text-white/80">
                <li>• {translateText('Nieuprawnionym dostępem')}</li>
                <li>• {translateText('Utratą danych')}</li>
                <li>• {translateText('Zniszczeniem danych')}</li>
                <li>• {translateText('Nieuprawnioną modyfikacją')}</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div className="liquid-glass-dark rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-ascender mb-4 text-white">{translateText('8. UDOSTĘPNIANIE DANYCH')}</h2>
              <p className="text-lg md:text-xl font-inter text-white/80">{translateText('Dane osobowe nie są udostępniane podmiotom trzecim bez zgody osoby, której dane dotyczą, chyba że wymaga tego prawo.')}</p>
            </div>

            {/* Section 9 */}
            <div className="liquid-glass-dark rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-ascender mb-4 text-white">{translateText('9. KONTAKT')}</h2>
              <p className="text-lg md:text-xl font-inter text-white/80 mb-4">{translateText('W sprawach dotyczących przetwarzania danych osobowych można się kontaktować:')}</p>
              <ul className="space-y-2 text-lg md:text-xl font-inter text-white/80">
                <li>• {translateText('E-mail: kontakt@aerodigital.pl')}</li>
                <li>• {translateText('Telefon: 510830344')}</li>
              </ul>
            </div>

            {/* Section 10 */}
            <div className="liquid-glass-dark rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-ascender mb-4 text-white">{translateText('10. ZMIANY W REGULAMINIE')}</h2>
              <p className="text-lg md:text-xl font-inter text-white/80 mb-4">{translateText('Regulamin może być zmieniany. O zmianach będziemy informować na stronie internetowej.')}</p>
              <p className="text-lg md:text-xl font-inter text-white/60">{translateText('Ostatnia aktualizacja: 1 stycznia 2025 r.')}</p>
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
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="text-white/60 font-inter text-sm text-center md:text-right">
              Wojciech Zaniewski & Jakub Eliasik
            </div>
            <button
              onClick={() => setCurrentPage('privacy')}
              className="text-white/60 hover:text-white font-inter text-sm underline transition-colors duration-300"
            >
              {translateText('REGULAMIN')}
            </button>
          </div>
        </div>
      </footer>
    </div>
  )

  // Home Page Component
  const HomePage = () => (
    <div className="min-h-screen bg-black text-white relative overflow-y-auto">
      {/* Logo - Desktop only */}
      <div className="hidden md:block fixed top-8 left-8 z-50">
        <button
          onClick={() => setCurrentPage('home')}
          className="text-lg md:text-2xl font-dm-sans font-bold text-white hover:text-white/70 transition-colors duration-300"
        >
          <span className="uppercase">AERO</span><span className="font-normal">DIGITAL</span>
        </button>
      </div>

      {/* Translation Button */}
      <div className="fixed top-4 right-4 z-50 md:top-8 md:right-8">
        <button
          onClick={() => setIsEnglish(!isEnglish)}
          className="liquid-glass-dark rounded-full px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-ascender text-white hover:bg-white/10 transition-all duration-300 ios-scale"
        >
          {isEnglish ? 'PL' : 'EN'}
        </button>
      </div>

      {/* Navigation */}
      <nav className="fixed top-4 left-4 z-50 md:top-8 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2">
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
                {translateText(item)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="hero-section" className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-6 pt-20 md:pt-32">
        <div className="text-center max-w-6xl w-full">
          {/* Hero content - Layout like the image */}
          <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Left side - Text content */}
            <div className="flex-1 text-left w-full lg:w-auto">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white font-ascender tracking-normal mb-6 md:mb-8 leading-tight">
                {translateText('SKALUJEMY FIRMY ONLINE')}
              </h1>
              <p className="text-lg md:text-xl text-white/80 font-inter mb-6 md:mb-8 leading-relaxed">
                {translateText('Strategie marketingowe, które docierają do ludzi, przynoszą konkretne efekty i pomagają skalować twoją firmę.')}
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
      <div id="apply-section" className="relative z-10 flex items-center justify-center min-h-[80vh] px-4 md:px-6">
        <div className="text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white font-ascender tracking-wide mb-6 md:mb-8">
            {translateText('ZAAPLIKUJ TERAZ')}
          </h2>
          <p className="text-lg md:text-2xl text-white/80 font-inter mb-8 md:mb-12">
            {translateText('Rozpocznij swoją podróż do sukcesu online')}
          </p>
          <button 
            onClick={() => setCurrentPage('form')}
            className="glassmorphism-button rounded-2xl px-8 py-4 md:px-12 md:py-6 text-lg md:text-2xl font-ascender text-white hover:bg-white/10 transition-all duration-300 w-full max-w-md mx-auto"
          >
            {translateText('WYPEŁNIJ FORMULARZ')}
          </button>
          
          {/* Back to Top Arrow */}
          <div className="flex justify-center mt-16">
            <div 
              className="bounce-arrow-up text-white text-4xl"
              onClick={() => {
                const heroSection = document.querySelector('#hero-section') || document.querySelector('.min-h-screen');
                if (heroSection) {
                  heroSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              ↑
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
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="text-white/60 font-inter text-sm text-center md:text-right">
              Wojciech Zaniewski & Jakub Eliasik
            </div>
            <button
              onClick={() => setCurrentPage('privacy')}
              className="text-white/60 hover:text-white font-inter text-sm underline transition-colors duration-300"
            >
              {translateText('REGULAMIN')}
            </button>
          </div>
        </div>
      </footer>
    </div>
  )

  // Main render with conditional page display
  if (currentPage === 'contact') return <ContactPage />
  if (currentPage === 'form') return <FormPage />
  if (currentPage === 'privacy') return <PrivacyPage />
  return <HomePage />
}