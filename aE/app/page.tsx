"use client"

import { useState, useEffect } from "react"
import IntroAnimation from "@/components/intro-animation"
import LandingPage from "@/components/landing-page"

export default function Home() {
  const [showLanding, setShowLanding] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(true)
    }, 4000) // 4 seconds for intro animation

    return () => clearTimeout(timer)
  }, [])

  return <main className="min-h-screen bg-black">{!showLanding ? <IntroAnimation /> : <LandingPage />}</main>
}
