import SpotlightCard from "./SpotlightCard";

const projects = [
  {
    title: "Bookify Hotel Booking System",
    description:
      "A hotel booking system designed to allow users to browse available rooms, make reservations, and manage booking information.",
    image: "/Bookify.jpg",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    live: "https://hotelbooking-8d8y.vercel.app/",
    github: "https://github.com/KianH00/hotelbooking",
  },

  {
    title: "UniSpend Expense Tracker",
    description:
      "A web-based expense tracking application designed to help students manage and monitor their personal expenses.",
    image: "/UXT.jpg",
    technologies: ["React", "JavaScript", "CSS"],
    live: "https://studentexpense-beige.vercel.app/",
    github: "https://github.com/KianH00/studentexpense",
  },

  {
    title: "Non-Contact Overloading Detection System",
    description:
      "A computer vision-based system using YOLOv8 to detect passenger overloading in public utility buses.",
    image: "/inventory.png",
    technologies: ["Python", "YOLOv8", "OpenCV", "Raspberry Pi"],
    manuscript: "/Ncontact.pdf",
    video1: "/demo1.mp4",
    video2: "/demo2.mp4",
  },
];

export default function Projects() {
  return (
    <section className="relative min-h-screen bg-slate-900 py-24">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6">

        {/* Section heading */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-200">
            Projects
          </h1>

          <p className="mt-4 text-slate-400">
            Some of the projects I've built using modern web technologies.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
          {projects.map((project) => (
            <SpotlightCard
              key={project.title}
              image={project.image}
              title={project.title}
              description={project.description}
              buttonHref={project.live}
              githubHref={project.github}
              manuscriptHref={project.manuscript}
              video1Href={project.video1}
              video2Href={project.video2}
            />
          ))}
        </div>

      </div>
    </section>
  );
}