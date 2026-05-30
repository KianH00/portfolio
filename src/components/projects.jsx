import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Hotel Booking Website",
      description:
        "A frontend hotel reservation system with login simulation, booking UI, and responsive design.",
      tools: ["HTML", "CSS", "JavaScript"],
      live: "https://hotelbooking-8d8y.vercel.app",
      github: "https://github.com/KianH00/hotelbooking",
      type: "Web Application"
    },

    {
      id: 2,
      title: "Student Expense Tracker",
      description:
        "A simple expense tracking web application that helps students manage daily expenses and monitor their spending habits efficiently.",
      tools: ["React", "Tailwind", "Vite"],
      live: "https://studentexpense-beige.vercel.app/",
      github: "https://github.com/KianH00/studentexpense",
      type: "Web Application"
    },

    {
      id: 3,
      title: "Non-Contact Overloading Detection System",
      description:
        "An undergraduate thesis project using Raspberry Pi and IoT sensors to monitor environmental conditions and send real-time mobile alerts. The system was designed to improve early warning and remote monitoring capabilities through hardware and software integration.",
      tools: ["Raspberry Pi 4", "Python", "Firebase", "Expo", "Sensors"],
      documentation: "/Ncontact.pdf",
      type: "Hardware and Mobile Application Thesis"
}
  ];

  const [selected, setSelected] = useState(projects[0]);

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-16 text-white"
    >
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelected(project)}
              className={`min-w-[180px] md:w-full text-left p-4 rounded-2xl border transition-all duration-300 whitespace-nowrap ${
                selected.id === project.id
                  ? "bg-white text-black border-white shadow-xl"
                  : "bg-slate-800 text-white border-slate-700 hover:bg-slate-700"
              }`}
            >
              <p className="font-semibold text-sm md:text-base">
                {project.title}
              </p>

              {project.type && (
                <span className="text-xs opacity-70">
                  {project.type}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-2 bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8 min-h-[320px]">

          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >

              {/* BADGE */}
              {selected.type && (
                <span className="inline-block text-xs px-3 py-1 rounded-full border border-slate-600 bg-slate-700 mb-4">
                  {selected.type}
                </span>
              )}

              {/* TITLE */}
              <h3 className="text-2xl font-semibold">
                {selected.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-300 mt-4 leading-relaxed">
                {selected.description}
              </p>

              {/* TOOLS */}
              <div className="flex flex-wrap gap-2 mt-6">
                {selected.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-slate-700 border border-slate-600"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">

                {/* PROJECT 3 SPECIAL */}
                {selected.id === 3 ? (
                  <>
                    <a
                      href={selected.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-white text-black rounded-xl hover:opacity-80 transition text-center font-medium"
                    >
                      Show
                    </a>

                    <a
                      href={selected.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 border border-slate-600 rounded-xl hover:bg-slate-700 transition text-center"
                    >
                      Documentation
                    </a>

                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 border border-slate-600 rounded-xl hover:bg-slate-700 transition text-center"
                    >
                      GitHub
                    </a>
                  </>
                ) : (
                  <>
                    {/* LIVE DEMO */}
                    {selected.live && selected.live !== "#" && (
                      <a
                        href={selected.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-white text-black rounded-xl hover:opacity-80 transition text-center font-medium"
                      >
                        Live Demo
                      </a>
                    )}

                    {/* GITHUB */}
                    {selected.github && (
                      <a
                        href={selected.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 border border-slate-600 rounded-xl hover:bg-slate-700 transition text-center"
                      >
                        GitHub
                      </a>
                    )}
                  </>
                )}

              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}

export default Projects;