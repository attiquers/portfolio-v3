import React from "react";

// Define interfaces for education and experience data
interface TimelineEntry {
  year: number;
  institution: string;
  title: string;
  duration: string;
  description: string;
  shortTitle: string; // Used for the text below the circle
  shortCategory: string; // Used for the category below the circle
}

export default function TimelineSection() {
  const educationData: TimelineEntry[] = [
    {
      year: 2018,
      institution: "IBA Community College",
      title: "Computer Science O-Level",
      duration: "2018 — 2019",
      description:
        "Completed O-Levels in Computer Science, laying the groundwork for my future studies in computer science and software development.",
      shortTitle: "IBA Community College",
      shortCategory: "O-Level CS",
    },
    {
      year: 2019,
      institution: "The City School",
      title: "Computer Science A-Level",
      duration: "2019 — 2022",
      description:
        "Completed A-Levels in Computer Science, gaining a strong foundation in programming and software development. 3 Bs in A2 and 3 As in A1.",
      shortTitle: "The City School",
      shortCategory: "A-Level CS",
    },
    {
      year: 2022,
      institution: "COMSATS Lahore",
      title: "Bachelor in Computer Science",
      duration: "2022 — 2026",
      description:
        "Presently, enrolled in BSCS, mastering in Artificial Intelligence and Machine Learning, with a focus on developing websites as hobby.",
      shortTitle: "COMSATS Lahore",
      shortCategory: "Bachelor in CS",
    },
  ];

  const experienceData: TimelineEntry[] = [
    {
      year: 2022,
      institution: "Skyline School",
      title: "IT Manager",
      duration: "April-Aug 2022",
      description:
        "Managed IT infrastructure of newly made school. Created whole school database, managed student records, and ensured smooth operation of all IT systems.",
      shortTitle: "Skyline School",
      shortCategory: "IT Manager",
    },
    {
      year: 2023,
      institution: "Skyline Academy",
      title: "Computer Science Teacher",
      duration: "May-July 2023",
      description:
        "Taught basic HTML and CSS to students, focusing on web development fundamentals. Developed engaging lesson plans and presentations.",
      shortTitle: "Skyline Academy",
      shortCategory: "CS Teacher",
    },
    {
      year: 2024,
      institution: "Skyline Academy",
      title: "Computer Science Teacher",
      duration: "May-July 2024",
      description:
        "Taught core programming fundamentals concepts to students, focusing on programming in C++ (arrays, loops, functions). Developed online lectures for them to revise too.",
      shortTitle: "Skyline Academy",
      shortCategory: "CS Teacher",
    },
    {
      year: 2025,
      institution: "Ilm O Irfan Technologies",
      title: "Social Media Manager",
      duration: "June 2025",
      description:
        "Creating engaging content and increasing brand awareness. Developed strategies to enhance online presence and engagement.",
      shortTitle: "Ilm O Irfan Tech",
      shortCategory: "Social Media Manager",
    },
  ];

  // Component to render a single timeline node
  const TimelineNode: React.FC<{ entry: TimelineEntry; color: string }> = ({ entry, color }) => (
    <div className="flex flex-col items-center group relative">
      <div
        className={`w-16 h-16 bg-${color}-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer border-4 border-white z-10`}
      >
        <span className="text-white font-bold text-xs">{entry.year}</span>
      </div>
      {/* Tooltip positioned relative to its parent node, allowing it to overflow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-white p-4 rounded-lg shadow-xl border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none w-64 z-20">
        <h4 className="font-bold text-gray-900 mb-2">{entry.institution}</h4>
        <p className={`text-${color}-600 font-medium mb-1`}>{entry.title}</p>
        <p className="text-sm text-gray-500 mb-2">{entry.duration}</p>
        <p className="text-sm text-gray-700">{entry.description}</p>
      </div>
      <div className="mt-6 text-center">
        <h4 className="font-semibold text-gray-900 text-sm">{entry.shortTitle}</h4>
        <p className={`text-xs text-${color}-600`}>{entry.shortCategory}</p>
      </div>
    </div>
  );

  return (
    <section id="services" className="px-6 min-h-screen flex items-center bg-gray-50 relative"> {/* Changed h-screen to min-h-screen and removed overflow-hidden */}
      {/* Education Timeline Curly Line (positioned absolutely to span full width) */}
      <svg
        className="absolute left-0 w-screen h-8 transform -translate-y-1/2 z-0"
        style={{ top: '38%' }} // Adjust vertical position as needed
        viewBox="0 0 800 32"
        preserveAspectRatio="none" // Allows stretching without maintaining aspect ratio
      >
        <path
          d="M 0 16 Q 100 8 200 16 T 400 16 T 600 16 T 800 16"
          stroke="#A855F7"
          strokeWidth="3"
          fill="none"
          strokeDasharray="8,4"
        />
      </svg>

      {/* Experience Timeline Curly Line (positioned absolutely to span full width) */}
      <svg
        className="absolute left-0 w-[90vw] h-8 transform -translate-y-1/2 z-0" // Changed w-[90vw] to w-screen
        style={{ bottom: '17%' }} // Adjust vertical position as needed. Changed from bottom:'16%'
        viewBox="0 0 800 32"
        preserveAspectRatio="none" // Allows stretching without maintaining aspect ratio
      >
        <path
          d="M 0 16 Q 100 24 200 16 T 400 16 T 600 16 T 800 16"
          stroke="#3B82F6"
          strokeWidth="3"
          fill="none"
          strokeDasharray="8,4"
        />
      </svg>

      <div className="max-w-6xl mx-auto w-full z-10 "> {/* Added py-16 for top/bottom padding to allow tooltip overflow */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 ">My Journey</h2> {/* Added mb-8 for consistent spacing */}
          <p className="text-gray-600">Education & Experience Timeline</p>
        </div>

        {/* Education Timeline */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-purple-600 mb-8 text-center">Education</h3>
          <div className="relative">
            <div className="flex justify-between items-center relative">
              {educationData.map((entry, index) => (
                <TimelineNode key={index} entry={entry} color="purple" />
              ))}
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h3 className="text-2xl font-bold text-blue-600 mb-8 text-center">Experience</h3>
          <div className="relative">
            <div className="flex justify-between items-center relative">
              {experienceData.map((entry, index) => (
                <TimelineNode key={index} entry={entry} color="blue" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
