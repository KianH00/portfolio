function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">

      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">

        <ProjectCard
          title="Portfolio Website"
          description="A personal portfolio website built to showcase my skills and projects with a clean and responsive design."
          tools={["React", "Vite", "Tailwind"]}
          live="#"
          github="#"
        />

        <ProjectCard
          title="Todo App"
          description="A simple task manager with add, delete, and filter features."
          tools={["React", "JavaScript", "LocalStorage"]}
          live="#"
          github="#"
        />

      </div>

    </section>
  );
}

function ProjectCard({ title, description, tools, live, github }) {
  return (
    <div className="border rounded-xl p-5 hover:shadow-md transition duration-300 hover:scale-[1.02]">

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="text-gray-600 text-sm mt-2">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {tools.map((tool, i) => (
          <span key={i} className="text-xs px-2 py-1 border rounded-full">
            {tool}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-5">
        <a href={live} className="px-4 py-2 text-sm bg-black text-white rounded-lg">
          Live
        </a>

        <a href={github} className="px-4 py-2 text-sm border rounded-lg">
          GitHub
        </a>
      </div>

    </div>
  );
}

export default Projects;