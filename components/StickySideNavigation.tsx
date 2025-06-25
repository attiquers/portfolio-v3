"use client"

import React, { useEffect, useState } from "react"
import { Home, Hammer, Calendar, Briefcase, Mail } from "lucide-react"

const sections = [
  { id: "home", label: "Home", icon: Home },
  { id: "skills", label: "Skills", icon: Hammer },
  { id: "services", label: "Timeline", icon: Calendar },
  { id: "portfolio", label: "Projects", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
]

export default function StickySideNavigation() {
  const [activeSection, setActiveSection] = useState<string>("home")

  useEffect(() => {
    const handleScroll = () => {
      let current = "home"
      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
            current = section.id
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="fixed right-2 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-4">
      {sections.map(({ id, label, icon: Icon }) => {
        const isActive = activeSection === id

        return (
          <div key={id} className="group flex items-center space-x-2 justify-end relative">
            <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-sm bg-gray-900 text-white px-3 py-1 rounded-l absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none">
              {label}
            </span>
            <button
              onClick={() => scrollToSection(id)}
              className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg border border-gray-200 transition-all duration-300 transform group-hover:translate-x-[-0.5rem] ${
                isActive
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-800 hover:text-white hover:bg-purple-600"
              }`}
            >
              <Icon className="w-5 h-5" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
