import React from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="px-6 h-screen flex items-center ">
      <div className="max-w-6xl mx-auto flex items-center justify-between w-full">
        <div className="flex-1">
          <p className="text-purple-600 font-medium mb-2">I Am</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Attique Sahito
          </h1>
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            FullStack Gen AI Developer & Agentic AI Developer
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl">
            I specialize in full stack development and Machine Learning, dedicated to crafting elegant, efficient
            solutions with a strong foundation in front-end, back-end, and artificial intelligence.
            <br /><br />
            My experience spans social media management, teaching computer science, and IT infrastructure management.
            I hold a BS in Computer Science focused on AI/ML, and have completed A-Levels and O-Levels in Computer Science.
          </p>

          <div className="flex space-x-4 mb-8">
            <a
              href="https://docs.google.com/document/d/1hrVVy0rQvi9tQqXVq5wbAiavwq6kCeeBvH3z0GdO2u4/edit?usp=sharing"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security best practice for target="_blank"
            > 
            <Button className="bg-purple-600 hover:bg-purple-700">Download Resume</Button>
            </a>
            
          </div>

          <div className="flex space-x-4">
            <a href="https://github.com/attiquers" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 text-gray-600 hover:text-purple-600 cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/attique-sahito/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-gray-600 hover:text-purple-600 cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/ateiksah/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 text-gray-600 hover:text-purple-600 cursor-pointer" />
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-end">
          <div className="relative">
            <img
              src="/me.jpg"
              alt="Attique Sahito portrait"
              className="rounded-full w-80 h-80 object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
