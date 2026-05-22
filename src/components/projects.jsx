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
      live: "https://your-vercel-link.vercel.app",
      github: "https://github.com/KianH00/hotelbooking"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React and Tailwind showcasing my projects and skills.",
      tools: ["React", "Tailwind", "Vite"],
      live: "#",
      github: "#"
    }
  ];

  const [selected, setSelected] = useState(projects[0]);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      {/* MOBILE = STACK, DESKTOP = GRID */}
      <div className="flex flex-col md:grid md:grid-cols-3 gap-6">

        {/* PROJECT SELECTOR */}
        <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelected(project)}
              className={`min-w-[180px] md:w-full text-left p-3 rounded-lg border transition-all duration-300 whitespace-nowrap ${
                selected.id === project.id
                  ? "bg-black text-white shadow-lg"
                  : "hover:bg-gray-100"
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* DETAILS */}
        <div className="md:col-span-2 border rounded-xl p-5 md:p-6 min-h-[250px]">

          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold">
                {selected.title}
              </h3>

              <p className="text-gray-600 mt-3 text-sm md:text-base">
                {selected.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {selected.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 border rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* BUTTONS STACK ON MOBILE */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <a
                  href={selected.live}
                  className="px-4 py-2 bg-black text-white rounded-lg hover:opacity-80 transition text-center"
                >
                  Live Demo
                </a>

                <a
                  href={selected.github}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition text-center"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}

export default Projects;