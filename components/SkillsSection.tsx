import React from "react"
import { Monitor, Code } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function SkillsSection() {
  return (
    // Changed h-screen to min-h-screen to ensure content doesn't overflow on small devices
    <section id="skills" className="px-6 min-h-screen flex items-center bg-white py-12"> {/* Added py-12 for vertical padding on all screens */}
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-10"> {/* Adjusted margin-bottom for better spacing */}
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">My Skills</h2> {/* Adjusted font size for responsiveness */}
          <p className="text-base sm:text-lg text-gray-600">Technologies and tools I work with</p> {/* Adjusted font size for responsiveness */}
        </div>

        {/* Changed grid-cols-1 on small screens, md:grid-cols-2 for medium and up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* AI/ML Skills */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"> {/* Adjusted padding */}
            <div className="text-center mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4"> {/* Adjusted icon container size */}
                <Code className="w-7 h-7 sm:w-8 sm:h-8 text-white" /> {/* Adjusted icon size */}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">AI & Machine Learning</h3> {/* Adjusted font size */}
              <p className="text-sm sm:text-base text-gray-600">Data Science & AI Development</p> {/* Adjusted font size */}
            </div>

            {/* Adjusted grid columns for skill icons: now 3 columns on extra small, 4 on small and up */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              <TooltipProvider>
                {/* Python */}
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center group">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"> {/* Adjusted icon box size */}
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                          alt="Python"
                          className="w-9 h-9 sm:w-10 sm:h-10" // Adjusted icon size
                        />
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Python</p>
                  </TooltipContent>
                </Tooltip>

                {/* TensorFlow */}
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center group">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
                          alt="TensorFlow"
                          className="w-9 h-9 sm:w-10 sm:h-10"
                        />
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>TensorFlow</p>
                  </TooltipContent>
                </Tooltip>

                {/* LangChain - Placeholder for src */}
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center group">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img
                          src="https://placehold.co/40x40/ffffff/A78BFA?text=LC" // Placeholder for LangChain
                          alt="LangChain"
                          className="w-9 h-9 sm:w-10 sm:h-10"
                        />
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>LangChain</p>
                  </TooltipContent>
                </Tooltip>

                {/* Jupyter */}
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center group">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"
                          alt="Jupyter"
                          className="w-9 h-9 sm:w-10 sm:h-10"
                        />
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Jupyter</p>
                  </TooltipContent>
                </Tooltip>

                {/* Streamlit */}
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center group">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img
                          src="https://streamlit.io/images/brand/streamlit-mark-color.svg"
                          alt="Streamlit"
                          className="w-9 h-9 sm:w-10 sm:h-10"
                        />
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Streamlit</p>
                  </TooltipContent>
                </Tooltip>

                {/* Pandas */}
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center group">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
                          alt="Pandas"
                          className="w-9 h-9 sm:w-10 sm:h-10"
                        />
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Pandas</p>
                  </TooltipContent>
                </Tooltip>

                {/* Scikit-learn */}
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center group">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
                          alt="Scikit-learn"
                          className="w-9 h-9 sm:w-10 sm:h-10"
                        />
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Scikit-learn</p>
                  </TooltipContent>
                </Tooltip>

                {/* NumPy */}
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center group">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
                          alt="NumPy"
                          className="w-9 h-9 sm:w-10 sm:h-10"
                        />
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>NumPy</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Web Development Skills */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"> {/* Adjusted padding */}
            <div className="text-center mb-8">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4"> {/* Adjusted icon container size */}
                <Monitor className="w-7 h-7 sm:w-8 sm:h-8 text-white" /> {/* Adjusted icon size */}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Web Development</h3> {/* Adjusted font size */}
              <p className="text-sm sm:text-base text-gray-600">Frontend & Backend Technologies</p> {/* Adjusted font size */}
            </div>

            {/* Adjusted grid columns for skill icons: now 3 columns on extra small, 4 on small and up */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              <TooltipProvider>
                {/* React */}
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center group">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                          alt="React"
                          className="w-9 h-9 sm:w-10 sm:h-10"
                        />
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>React</p>
                  </TooltipContent>
                </Tooltip>

                {/* Next.js */}
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center group">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                          alt="Next.js"
                          className="w-9 h-9 sm:w-10 sm:h-10"
                        />
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Next.js</p>
                  </TooltipContent>
                </Tooltip>

                {/* Tailwind CSS */}
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center group">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                          alt="Tailwind CSS"
                          className="w-9 h-9 sm:w-10 sm:h-10"
                        />
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Tailwind CSS</p>
                  </TooltipContent>
                </Tooltip>

                {/* Node.js */}
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center group">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                          alt="Node.js"
                          className="w-9 h-9 sm:w-10 sm:h-10"
                        />
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Node.js</p>
                  </TooltipContent>
                </Tooltip>

                {/* Git */}
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center group">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                          alt="Git"
                          className="w-9 h-9 sm:w-10 sm:h-10"
                        />
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Git</p>
                  </TooltipContent>
                </Tooltip>

                {/* Figma */}
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center group">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                          alt="Figma"
                          className="w-9 h-9 sm:w-10 sm:h-10"
                        />
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Figma</p>
                  </TooltipContent>
                </Tooltip>

                {/* MongoDB */}
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center group">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                          alt="MongoDB"
                          className="w-9 h-9 sm:w-10 sm:h-10"
                        />
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>MongoDB</p>
                  </TooltipContent>
                </Tooltip>

                {/* TypeScript */}
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center group">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                          alt="TypeScript"
                          className="w-9 h-9 sm:w-10 sm:h-10"
                        />
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>TypeScript</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
