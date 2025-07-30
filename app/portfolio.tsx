// src/app/Portfolio/page.tsx (or wherever your main Portfolio page component is located)
// This component serves as the main page for your portfolio, orchestrating different sections.

"use client"; // Marks this component for client-side rendering, essential for interactivity in Next.js App Router.

// Importing individual section components to compose the portfolio page.
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import TimelineSection from "../components/TimelineSection";
import PortfolioSection from "../components/PortfolioSection"; // The core portfolio display component.
import ContactSection from "../components/ContactSection";
import StickySideNavigation from "../components/StickySideNavigation";

// Importing project data from a local JSON file.
import projectsData from "../projects.json";

/**
 * Portfolio Page Component
 *
 * This component renders the complete portfolio page, integrating various sections
 * such as the hero, skills, timeline, projects, and contact information.
 * It also handles global styling for smooth scrolling and animations.
 */
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white px-8">
      {/* Global CSS styles for smooth scrolling and fade-in animation */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth; /* Enables smooth scrolling for anchor links */
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
          animation: fadeInUp 0.6s ease-out forwards; /* Applies the fade-in animation */
        }
      `}</style>

      {/* Renders the sticky side navigation for easy section access */}
      <StickySideNavigation />

      {/* Renders the main hero section of the portfolio */}
      <HeroSection />

      {/* Displays the skills section, showcasing various proficiencies */}
      <SkillsSection />

      {/* Presents the timeline of experiences and achievements */}
      <TimelineSection />

      {/* The portfolio projects section, displaying projects based on categories.
          It receives the full projects data and manages its own filtering and display logic internally. */}
      <PortfolioSection allProjects={projectsData} />

      {/* The contact section, allowing visitors to get in touch */}
      <ContactSection />
    </div>
  );
}