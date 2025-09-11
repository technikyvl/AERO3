"use client"

import { useState, useEffect } from "react"

export default function FloatingElements() {
  const [showElements, setShowElements] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowElements(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {/* Floating liquid glass orbs */}
      <div className={`absolute top-20 right-20 w-20 h-20 liquid-glass rounded-full glass-float ${showElements ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`} 
           style={{ animationDelay: '0s' }} />
      <div className={`absolute bottom-32 left-16 w-16 h-16 liquid-glass rounded-full glass-float ${showElements ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`} 
           style={{ animationDelay: '2s' }} />
      <div className={`absolute top-1/3 left-8 w-12 h-12 liquid-glass rounded-full glass-float ${showElements ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`} 
           style={{ animationDelay: '4s' }} />
      
      {/* Metallic floating elements */}
      <div className={`absolute top-40 left-1/4 w-8 h-8 metallic rounded-full liquid-morph ${showElements ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`} 
           style={{ animationDelay: '1s' }} />
      <div className={`absolute bottom-40 right-1/3 w-6 h-6 metallic-chrome rounded-lg liquid-morph ${showElements ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`} 
           style={{ animationDelay: '3s' }} />
      
      {/* Floating action button */}
      <div className={`absolute bottom-8 right-8 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-1000`}
           style={{ transitionDelay: '2s' }}>
        <button className="w-16 h-16 liquid-glass-dark rounded-full flex items-center justify-center ios-scale hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
          <div className="w-6 h-6 metallic-shine rounded-full"></div>
        </button>
      </div>
    </div>
  )
}
