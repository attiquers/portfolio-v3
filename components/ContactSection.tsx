import React from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="px-6 py-12 bg-white text-gray-800 dark:bg-background dark:text-foreground"
    >
      <div className="max-w-3xl mx-auto w-full text-center"> {/* Adjusted max-width and added text-center */}
        <h2 className="text-3xl font-bold mb-8 text-purple-600 dark:text-primary">
          Contact Me
        </h2>
        <p className="text-gray-600 mb-8 dark:text-gray-300 max-w-2xl mx-auto"> {/* Added max-width and mx-auto for paragraph */}
          I would love if you reached out to me. Even if it's just to say "Hey!". Don't hesitate, drop me a line
          and I'll get back to you ASAP.
        </p>

        <div className="space-y-4 mb-8 text-lg"> {/* Increased text size and adjusted spacing */}
          <div className="flex items-center justify-center gap-3"> {/* Centered items */}
            <MapPin className="w-6 h-6 text-purple-600 dark:text-primary" /> {/* Increased icon size */}
            <span>Lahore, Pakistan</span>
          </div>
          <div className="flex items-center justify-center gap-3"> {/* Centered items */}
            <Mail className="w-6 h-6 text-purple-600 dark:text-primary" /> {/* Increased icon size */}
            <span>sahitoattique@gmail.com</span>
          </div>
          <div className="flex items-center justify-center gap-3"> {/* Centered items */}
            <Phone className="w-6 h-6 text-purple-600 dark:text-primary" /> {/* Increased icon size */}
            <span>0308 3872646</span>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mt-8"> {/* Centered social icons and increased spacing */}
          <a href="https://github.com/attiquers" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <Github className="w-8 h-8 text-gray-500 hover:text-purple-600 transition-colors duration-300 dark:text-gray-400 dark:hover:text-primary" /> {/* Increased icon size */}
          </a>
          <a href="https://www.linkedin.com/in/attique-sahito/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <Linkedin className="w-8 h-8 text-gray-500 hover:text-purple-600 transition-colors duration-300 dark:text-gray-400 dark:hover:text-primary" /> {/* Increased icon size */}
          </a>
          <a href="https://www.instagram.com/ateiksah/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
            <Instagram className="w-8 h-8 text-gray-500 hover:text-purple-600 transition-colors duration-300 dark:text-gray-400 dark:hover:text-primary" /> {/* Increased icon size */}
          </a>
        </div>
      </div>
    </section>
  )
}