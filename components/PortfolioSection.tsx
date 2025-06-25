// src/components/PortfolioSection.tsx
"use client"; // Required for Next.js App Router for client-side interactivity

import React, { useRef, useState, useMemo } from "react";
import { Button } from "@/components/ui/button"; // Adjust path as per your project setup
import { Badge } from "@/components/ui/badge";   // Adjust path as per your project setup
import { ExternalLink, ChevronRight, ChevronLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"; // Adjust path as per your project setup

// Define the Project interface
interface Project {
  id: number;
  title: string;
  category: "Web Development" | "Machine Learning"; // Strictly defined categories
  image: string;
  description: string;
  link: string;
}

// ProjectModal Component - Defined directly within this file
const ProjectModal = ({
  isOpen,
  onClose,
  project,
}: {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}) => {
  if (!project) return null;

  // Function to format description with new lines
  const formatDescription = (description: string) => {
    return description.split("*").map((line, index) => (
      <React.Fragment key={index}>
        {line.trim()}
        {index < description.split("*").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] md:max-w-xl lg:max-w-2xl dark:bg-card dark:text-card-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-purple-700 dark:text-primary">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-600 dark:text-gray-400">
            {project.category}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="relative h-48 w-full overflow-hidden rounded-md">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-gray-700 dark:text-gray-300">
            <p className="text-sm leading-relaxed">
              {formatDescription(project.description)}
            </p>
          </div>
          <div className="flex justify-end pt-4">
            <Button
              onClick={() => window.open(project.link, "_blank")}
              className="bg-purple-600 text-white hover:bg-purple-700 dark:bg-primary dark:hover:bg-primary/90"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Go to Project
            </Button>
          </div>
        </div>
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground dark:text-gray-400 dark:hover:text-gray-200" />
      </DialogContent>
    </Dialog>
  );
};

// Props for the PortfolioSection component
interface PortfolioSectionProps {
  allProjects: Project[];
}

// PortfolioSection Component
export default function PortfolioSection({ allProjects }: PortfolioSectionProps) {
  // Define categories internally
  const categories = ["All", "Web Development", "Machine Learning"] as const;
  type CategoryType = (typeof categories)[number]; // Derived type for strong typing

  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);

  // State for the project modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Function to get emoji for the internally defined categories
  const getCategoryEmoji = (category: CategoryType) => {
    switch (category) {
      case "All":
        return "🔧";
      case "Web Development":
        return "💻";
      case "Machine Learning":
        return "🧠";
      default:
        return ""; // Should not happen with strict CategoryType
    }
  };

  // Memoize filtered projects to prevent unnecessary recalculations
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return allProjects;
    }
    return allProjects.filter((project) => project.category === selectedCategory);
  }, [allProjects, selectedCategory]);

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300 + 16; // Card width + gap
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300 + 16; // Card width + gap
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeftStart(scrollContainerRef.current?.scrollLeft || 0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.scrollBehavior = "auto";
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (scrollContainerRef.current) {
      scrollContainerRef.scrollLeft = scrollLeftStart - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.scrollBehavior = "smooth";
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.scrollBehavior = "smooth";
      }
    }
  };

  const handleCardClick = (project: Project, e: React.MouseEvent<HTMLDivElement>) => {
    // Only prevent modal if the click target is the "View Project" button specifically.
    // The "See More" button will now trigger the parent card's click.
    if ((e.target as HTMLElement).closest("button")?.textContent?.includes("View Project")) {
      return;
    }
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section
      id="portfolio"
      className="px-6 sm:h-screen flex flex-col bg-white relative dark:bg-background"
    >
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col">
        <div className="text-center mb-6 pt-8">
          <h2 className="text-3xl font-bold text-purple-700 mb-4 dark:text-foreground">
            My Projects
          </h2>
          <div className="flex justify-center flex-wrap gap-4 mb-6">
            {categories.map((category) => (
              <Badge
                key={category}
                className={`cursor-pointer transition-all duration-300 px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white shadow-md dark:bg-primary"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {getCategoryEmoji(category)} {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Horizontal scrollable container for projects */}
        <div className="flex-1 overflow-hidden relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scroll-smooth py-4 gap-4 pb-8 custom-scrollbar cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform flex-shrink-0 w-[200px] sm:w-[300px] dark:bg-card dark:border dark:border-border cursor-pointer"
                onClick={(e) => handleCardClick(project, e)} // Click handler for the whole card
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-40 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <Button
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 bg-white text-gray-900 hover:bg-gray-100 dark:bg-primary-foreground dark:text-background dark:hover:bg-primary-foreground/90"
                      onClick={(e) => {
                        e.stopPropagation(); // KEEP this to prevent opening modal AND navigating when View Project is clicked
                        window.open(project.link, "_blank");
                      }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="sm:text-lg text-sm font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300 dark:text-card-foreground dark:group-hover:text-primary">
                    {project.title}
                  </h3>
                  {/* Display the first part of the description on the card */}
                  <p className="text-gray-600 text-sm leading-relaxed sm:line-clamp-3 line-clamp-2 dark:text-gray-400">
                    {project.description.split("*")[0]}
                  </p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-purple-600 hover:text-purple-700 dark:text-primary dark:hover:text-primary/90"
                    // REMOVED e.stopPropagation() here
                    onClick={(e) => handleCardClick(project, e)} // Now this will correctly trigger the modal via the card's click
                  >
                    See More
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          {filteredProjects.length > 3 && (
            <div className="absolute left-0 top-36 transform z-20">
              <div className="group cursor-pointer" onClick={handleScrollLeft}>
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition-all duration-300 hover:scale-110 dark:bg-primary dark:hover:bg-primary/90">
                  <ChevronLeft className="w-6 h-6 text-white" />
                </div>
                <div className="absolute left-14 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap dark:bg-sidebar dark:text-sidebar-foreground">
                  Previous Projects
                </div>
              </div>
            </div>
          )}

          {/* Right Arrow */}
          {filteredProjects.length > 3 && (
            <div className="absolute right-0 transform top-36 z-20">
              <div className="group cursor-pointer" onClick={handleScrollRight}>
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition-all duration-300 hover:scale-110 dark:bg-primary dark:hover:bg-primary/90">
                  <ChevronRight className="w-6 h-6 text-white" />
                </div>
                <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap dark:bg-sidebar dark:text-sidebar-foreground">
                  More Projects
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
}