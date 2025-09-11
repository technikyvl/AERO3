"use client"

export default function LandingPage() {

  return (
    <div className="min-h-screen bg-black text-white relative">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-8">
        <div className="liquid-glass-dark rounded-full px-16 py-8 backdrop-blur-xl">
          <div className="flex space-x-20">
            <a
              href="#"
              className="text-white hover:text-white/60 transition-all duration-300 font-ascender text-lg tracking-widest uppercase text-glass"
            >
              Strona Główna
            </a>
            <a
              href="#"
              className="text-white hover:text-white/60 transition-all duration-300 font-ascender text-lg tracking-widest uppercase text-glass"
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
