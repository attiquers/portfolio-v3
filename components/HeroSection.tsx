import React from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="px-6 h-screen flex items-center">
      {/* Changed flex-row to flex-col for small screens, and flex-row for medium and up */}
      {/* Added items-center and justify-center for centering content on mobile */}
      {/* Added justify-center for vertical alignment on mobile screens within the 100vh */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between w-full text-center md:text-left justify-center">
        {/* Image section - order-first on mobile, then normal order on md and up */}
        <div className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0 md:order-last">
          <div className="relative">
            <img
              src="/me.jpg" // Using a placeholder for demonstration
              alt="Attique Sahito portrait"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl" // Adjusted size for mobile
            />
          </div>
        </div>

        {/* Text content section */}
        <div className="flex-1 mt-8 md:mt-0 md:order-first"> {/* Adjusted margin-top for spacing on mobile */}
          <p className="text-purple-600 font-medium mb-2">I Am</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"> {/* Adjusted font size for mobile */}
            Attique Sahito
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-purple-700 mb-4"> {/* Adjusted font size for mobile */}
            FullStack Gen AI Developer & Agentic AI Developer
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-xl mx-auto md:mx-0"> {/* Adjusted font size and centering for mobile */}
            I specialize in full stack development and Machine Learning, dedicated to crafting elegant, efficient
            solutions with a strong foundation in front-end, back-end, and artificial intelligence.
            <br /><br />
            My experience spans social media management, teaching computer science, and IT infrastructure management.
            I hold a BS in Computer Science focused on AI/ML, and have completed A-Levels and O-Levels in Computer Science.
          </p>

          <div className="flex space-x-4 mb-8 justify-center md:justify-start"> {/* Centered buttons for mobile */}
            <a
              href="https://docs.google.com/document/d/1hrVVy0rQvi9tQqXVq5wbAiavwq6kCeeBvH3z0GdO2u4/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-purple-600 hover:bg-purple-700">Download Resume</Button>
            </a>
          </div>

          <div className="flex space-x-4 justify-center md:justify-start"> {/* Centered icons for mobile */}
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
      </div>
    </section>
  )
}
