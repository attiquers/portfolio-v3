"use client"

import React from "react"

export default function StickySideNavigation() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-4">
      <div className="group relative">
        <button
          onClick={() => scrollToSection("home")}
          className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300 border border-gray-200"
        >
          <span className="text-xl">🏠</span>
        </button>
        <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Home
        </div>
      </div>

      <div className="group relative">
        <button
          onClick={() => scrollToSection("skills")}
          className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300 border border-gray-200"
        >
          <span className="text-xl">🎯</span>
        </button>
        <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Skills
        </div>
      </div>

      <div className="group relative">
        <button
          onClick={() => scrollToSection("services")}
          className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300 border border-gray-200"
        >
          <span className="text-xl">⚙️</span>
        </button>
        <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Timeline
        </div>
      </div>

      <div className="group relative">
        <button
          onClick={() => scrollToSection("portfolio")}
          className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300 border border-gray-200"
        >
          <span className="text-xl">💼</span>
        </button>
        <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Portfolio
        </div>
      </div>

      <div className="group relative">
        <button
          onClick={() => scrollToSection("contact")}
          className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300 border border-gray-200"
        >
          <span className="text-xl">📧</span>
        </button>
        <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Contact
        </div>
      </div>
    </div>
  )
}