import React from "react";

interface TimelineEntry {
  year: number;
  institution: string;
  title: string;
  duration: string;
  description: string;
  shortTitle: string;
  shortCategory: string;
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

  const TimelineNode: React.FC<{
    entry: TimelineEntry;
    color: string;
    index: number;
    total: number;
  }> = ({ entry, color, index, total }) => {
    // Adjust tooltip position to avoid overflow
    let tooltipPosition = "left-1/2 -translate-x-1/2";
    if (index === 0) tooltipPosition = "left-4 translate-x-0";
    else if (index === total - 1) tooltipPosition = "right-4 translate-x-0";

    return (
      <div className="flex flex-col items-center relative">
        {/*
          This div is now the 'group'. When you hover over it, the tooltip inside will appear.
          It is positioned relatively to contain the absolutely positioned tooltip.
        */}
        <div
          className={`w-16 h-16 bg-${color}-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer border-4 border-white z-10 group relative`}
        >
          <span className="text-white font-bold text-xs">{entry.year}</span>
          {/* This is the tooltip. It is initially invisible (opacity-0) and has pointer-events-none 
            so it doesn't block hover events on the circle. It becomes visible on 'group-hover'.
          */}
          <div
            className={`absolute top-20 ${tooltipPosition} bg-white p-4 rounded-lg shadow-xl border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none w-64 z-50`}
          >
            <h4 className="font-bold text-gray-900 mb-2">{entry.institution}</h4>
            <p className={`text-${color}-600 font-medium mb-1`}>{entry.title}</p>
            <p className="text-sm text-gray-500 mb-2">{entry.duration}</p>
            <p className="text-sm text-gray-700">{entry.description}</p>
          </div>
        </div>

        {/* This div is outside the group, so it won't trigger the tooltip */}
        <div className="mt-6 text-center">
          <h4 className="font-semibold text-gray-900 text-sm">
            {entry.shortTitle}
          </h4>
          <p className={`text-xs text-${color}-600`}>{entry.shortCategory}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="px-6 mb-4 sm:min-h-screen flex items-center bg-gray-50 relative">
      {/* Education Timeline Line */}
      <svg
        className="absolute left-0 w-[90vw] h-8 transform sm:-translate-y-1/2 -translate-y-12  z-0"
        style={{ top: "38%" }}
        viewBox="0 0 800 32"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 16 Q 100 8 200 16 T 400 16 T 600 16 T 800 16"
          stroke="#A855F7"
          strokeWidth="3"
          fill="none"
          strokeDasharray="8,4"
        />
      </svg>

      {/* Experience Timeline Line */}
      <svg
        className="absolute left-0 w-[90vw] h-8 transform sm:-translate-y-1/2 -translate-y-2  z-0"
        style={{ bottom: "17%" }}
        viewBox="0 0 800 32"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 16 Q 100 24 200 16 T 400 16 T 600 16 T 800 16"
          stroke="#3B82F6"
          strokeWidth="3"
          fill="none"
          strokeDasharray="8,4"
        />
      </svg>

      <div className="max-w-6xl mx-auto w-full z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-purple-700">My Journey</h2>
          <p className="text-gray-600">Education & Experience Timeline</p>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-purple-600 mb-8 text-center">Education</h3>
          <div className="flex justify-between items-center relative">
            {educationData.map((entry, index) => (
              <TimelineNode
                key={index}
                entry={entry}
                color="purple"
                index={index}
                total={educationData.length}
              />
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl font-bold text-blue-600 mb-8 text-center">Experience</h3>
          <div className="flex justify-between items-center relative">
            {experienceData.map((entry, index) => (
              <TimelineNode
                key={index}
                entry={entry}
                color="blue"
                index={index}
                total={experienceData.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 