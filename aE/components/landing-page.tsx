"use client"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white fade-in">
      <nav className="flex items-center justify-between p-6 border-b border-gray-800">
        <div className="text-2xl font-bold" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
          AD
        </div>
        <div className="flex space-x-8">
          <a
            href="#"
            className="hover:text-primary transition-colors"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            Strona Główna
          </a>
          <a
            href="#"
            className="hover:text-primary transition-colors"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            Portfolio
          </a>
        </div>
      </nav>

      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="text-center">
          <h1
            className="text-8xl font-bold text-white tracking-wider"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            AERODIGITAL
          </h1>
        </div>
      </div>
    </div>
  )
}
