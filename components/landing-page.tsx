"use client"

export default function LandingPage() {

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Subtle liquid glass background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating liquid glass orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 liquid-glass rounded-full glass-float opacity-20"></div>
        <div className="absolute bottom-32 right-24 w-24 h-24 liquid-glass rounded-full glass-float opacity-15" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-16 w-16 h-16 liquid-glass rounded-full glass-float opacity-10" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 liquid-glass rounded-full glass-float opacity-12" style={{ animationDelay: '6s' }}></div>
        
        {/* Metallic accent lines */}
        <div className="absolute top-1/4 left-1/4 w-1 h-32 lightning-vertical opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-1 lightning opacity-25" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 left-1/2 w-1 h-24 lightning-vertical opacity-20" style={{ animationDelay: '5s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-8">
        <div className="liquid-glass-dark rounded-full px-16 py-8 backdrop-blur-xl">
          <div className="flex space-x-20">
            <a
              href="#"
              className="text-white hover:text-white/60 transition-all duration-300 font-saira font-bold text-xl tracking-widest uppercase text-glass"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              Strona Główna
            </a>
            <a
              href="#"
              className="text-white hover:text-white/60 transition-all duration-300 font-saira font-bold text-xl tracking-widest uppercase text-glass"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center">
          {/* Main heading with liquid glass effect */}
          <div className="liquid-glass-dark rounded-3xl p-16 mx-4 backdrop-blur-xl">
            <h1
              className="text-8xl md:text-9xl font-bold text-white tracking-widest text-glass"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              AERODIGITAL
            </h1>
          </div>
        </div>
      </div>

    </div>
  )
}
