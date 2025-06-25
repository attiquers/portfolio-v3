"use client"

import { useState } from "react"
import HeroSection from "../components/HeroSection"
import SkillsSection from "../components/SkillsSection"
import TimelineSection from "../components/TimelineSection"
import PortfolioSection from "../components/PortfolioSection"
import ContactSection from "../components/ContactSection"
import StickySideNavigation from "../components/StickySideNavigation"
import projectsData from "../projects.json" // Assuming projects.json is in the same directory

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Web development", "Web design", "Applications"]

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData.projects
      : projectsData.projects.filter((project) => project.category === selectedCategory)

  // Show only first 6 projects initially
  const displayedProjects = filteredProjects.slice(0, 6)

  const getCategoryEmoji = (category: string) => {
    switch (category) {
      case "Web development":
        return "💻"
      case "Web design":
        return "🎨"
      case "Applications":
        return "📱"
      default:
        return "🔧"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      <StickySideNavigation />

      <HeroSection />
      <SkillsSection />
      <TimelineSection />
      <PortfolioSection
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        displayedProjects={displayedProjects}
        filteredProjects={filteredProjects}
        getCategoryEmoji={getCategoryEmoji}
      />
      <ContactSection />
    </div>
  )
}