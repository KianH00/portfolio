import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Hotel Booking Website",
      description:
        "A responsive hotel booking web application featuring a simulated user authentication system, room reservation workflow, and an intuitive booking interface. Built to demonstrate modern frontend development practices and responsive UI design.",
      tools: ["HTML", "CSS", "JavaScript"],
      live: "https://hotelbooking-8d8y.vercel.app",
      github: "https://github.com/KianH00/hotelbooking",
      type: "Frontend Web Application",
      contribution:
        "Designed and developed the entire frontend, implemented the booking interface, responsive layouts, and interactive user experience."
    },

    {
      id: 2,
      title: "Student Expense Tracker",
      description:
        "A responsive expense tracking application that enables students to record, organize, and monitor daily expenses through a clean and user-friendly interface. Built using React with reusable components for efficient state management.",
      tools: ["React", "Tailwind CSS", "Vite"],
      live: "https://studentexpense-beige.vercel.app/",
      github: "https://github.com/KianH00/studentexpense",
      type: "React Web Application",
      contribution:
        "Developed the complete frontend, implemented reusable React components, managed application state, and created a responsive user interface."
    },

    {
      id: 3,
      title: "Non-Contact Overloading Detection System",
      description:
        "An IoT-based undergraduate thesis project that monitors electrical load conditions using Raspberry Pi and sensors while providing real-time mobile notifications through Firebase. The system integrates hardware and software to improve remote monitoring and early overload detection.",
      tools: ["Raspberry Pi 4", "Python", "Firebase", "Expo", "IoT Sensors"],
      documentation: "/Ncontact.pdf",
      type: "IoT & Mobile Application Thesis",
      contribution:
        "Collaborated in designing and developing the system by integrating Raspberry Pi, IoT sensors, Firebase cloud services, and the mobile application for real-time monitoring and alerts."
    }
  ];

  const [selected, setSelected] = useState(projects[0]);
  const [showVideos, setShowVideos] = useState(false);

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
              onClick={() => {
                setSelected(project);
                setShowVideos(false);
              }}
              className={`min-w-[180px] md:w-full text-left p-4 rounded-2xl border transition-all duration-300 whitespace-nowrap ${
                selected.id === project.id
                  ? "bg-white text-black border-white shadow-xl"
                  : "bg-slate-800 text-white border-slate-700 hover:bg-slate-700"
              }`}
            >
              <p className="font-semibold text-sm md:text-base">
                {project.title}
              </p>

              <span className="text-xs opacity-70">
                {project.type}
              </span>
            </button>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-2 bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8">

          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >

              <span className="inline-block text-xs px-3 py-1 rounded-full border border-slate-600 bg-slate-700 mb-4">
                {selected.type}
              </span>

              <h3 className="text-2xl font-semibold">
                {selected.title}
              </h3>

              <p className="text-gray-300 mt-4 leading-relaxed">
                {selected.description}
              </p>

              <div className="mt-6">
                <h4 className="font-semibold mb-2">My Contribution</h4>
                <p className="text-gray-300">
                  {selected.contribution}
                </p>
              </div>

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

              <div className="flex flex-wrap gap-3 mt-8">

                {selected.id === 3 ? (
                  <>
                    <button
                      onClick={() => setShowVideos(!showVideos)}
                      className="px-5 py-2.5 bg-white text-black rounded-xl hover:opacity-80 transition"
                    >
                      {showVideos ? "Hide Demo Videos" : "Show Demo Videos"}
                    </button>

                    <a
                      href={selected.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 border border-slate-600 rounded-xl hover:bg-slate-700 transition"
                    >
                      Documentation
                    </a>
                  </>
                ) : (
                  <>
                    <a
                      href={selected.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-white text-black rounded-xl hover:opacity-80 transition"
                    >
                      Live Demo
                    </a>

                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 border border-slate-600 rounded-xl hover:bg-slate-700 transition"
                    >
                      GitHub
                    </a>
                  </>
                )}

              </div>

              {selected.id === 3 && showVideos && (
                <div className="mt-8 space-y-8">

                  <div>
                    <h4 className="font-semibold mb-3">
                      Mobile Application Demo
                    </h4>

                    <video
                      controls
                      className="w-full rounded-xl border border-slate-700"
                    >
                      <source src="/demo1.mp4" type="video/mp4" />
                    </video>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">
                      Hardware Demonstration
                    </h4>

                    <video
                      controls
                      className="w-full rounded-xl border border-slate-700"
                    >
                      <source src="/demo2.mp4" type="video/mp4" />
                    </video>
                  </div>

                </div>
              )}

            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}

export default Projects;