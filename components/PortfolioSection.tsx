import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ChevronRight } from "lucide-react"

interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
  link: string
}

interface PortfolioSectionProps {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  categories: string[]
  displayedProjects: Project[]
  filteredProjects: Project[]
  getCategoryEmoji: (category: string) => string
}

export default function PortfolioSection({
  selectedCategory,
  setSelectedCategory,
  categories,
  displayedProjects,
  filteredProjects,
  getCategoryEmoji,
}: PortfolioSectionProps) {
  return (
    <section id="portfolio" className="px-6 h-screen flex flex-col pt-16 bg-white relative">
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col">
        <div className="text-center mb-6 pt-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="flex justify-center flex-wrap gap-4 mb-6">
            {categories.map((category) => (
              <Badge
                key={category}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-600 hover:bg-purple-50"
                }`}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                    <span className="text-lg">{getCategoryEmoji(project.category)}</span>
                  </div>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-40 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <Button
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 bg-white text-gray-900 hover:bg-gray-100"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* More Projects Arrow */}
      {filteredProjects.length > 6 && (
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
          <div className="group cursor-pointer">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition-all duration-300 hover:scale-110">
              <ChevronRight className="w-6 h-6 text-white" />
            </div>
            <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              More Projects ({filteredProjects.length - 6})
            </div>
          </div>
        </div>
      )}
    </section>
  )
}