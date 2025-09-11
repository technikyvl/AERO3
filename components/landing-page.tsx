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
              className="text-white hover:text-white/60 transition-all duration-300 font-saira font-bold text-xl tracking-widest uppercase"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              Strona Główna
            </a>
            <a
              href="#"
              className="text-white hover:text-white/60 transition-all duration-300 font-saira font-bold text-xl tracking-widest uppercase"
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
          {/* Main heading - perfectly centered */}
          <h1
            className="text-8xl md:text-9xl font-bold text-white tracking-widest"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            AERODIGITAL
          </h1>
        </div>
      </div>

    </div>
  )
}
