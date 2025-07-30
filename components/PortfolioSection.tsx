// src/components/PortfolioSection.tsx
"use client";

import React, { useRef, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ChevronRight, ChevronLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  category: "Generative AI" | "Web Development" | "Machine Learning" ;
  image: string;
  description: string;
  link: string;
}

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
          <div className="relative w-full max-h-[400px] overflow-auto rounded-md bg-muted flex items-center justify-center">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="object-contain max-h-[400px] w-full"
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

interface PortfolioSectionProps {
  allProjects: Project[];
}

export default function PortfolioSection({ allProjects }: PortfolioSectionProps) {
  const categories = ["All", "Generative AI","Web Development", "Machine Learning"] as const;
  type CategoryType = (typeof categories)[number];

  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getCategoryEmoji = (category: CategoryType) => {
    switch (category) {
      case "All":
        return "🔧";
      case "Web Development":
        return "💻";
      case "Machine Learning":
        return "🧠";
      case "Generative AI":
        return "✨";
      default:
        return "";
    }
  };

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return allProjects;
    }
    return allProjects.filter((project) => project.category === selectedCategory);
  }, [allProjects, selectedCategory]);

  const handleScroll = (direction: "left" | "right") => {
    const scrollAmount = 300 + 16;
    scrollContainerRef.current?.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
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
      scrollContainerRef.current.scrollLeft = scrollLeftStart - walk;
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
    if ((e.target as HTMLElement).closest("button")?.textContent?.includes("View Project")) {
      return;
    }
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="portfolio" className="px-6 sm:h-screen flex flex-col bg-white dark:bg-background">
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
                onClick={(e) => handleCardClick(project, e)}
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
                        e.stopPropagation();
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
                  <p className="text-gray-600 text-sm leading-relaxed sm:line-clamp-3 line-clamp-2 dark:text-gray-400">
                    {project.description.split("*")[0]}
                  </p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-purple-600 hover:text-purple-700 dark:text-primary dark:hover:text-primary/90"
                    onClick={(e) => handleCardClick(project, e)}
                  >
                    See More
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length > 3 && (
            <>
              <div className="absolute left-0 top-36 transform z-20">
                <div className="group cursor-pointer" onClick={() => handleScroll("left")}>
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition-all duration-300 hover:scale-110 dark:bg-primary dark:hover:bg-primary/90">
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-36 transform z-20">
                <div className="group cursor-pointer" onClick={() => handleScroll("right")}>
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition-all duration-300 hover:scale-110 dark:bg-primary dark:hover:bg-primary/90">
                    <ChevronRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </>
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
