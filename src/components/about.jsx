import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

const skills = [
  { icon: FaHtml5, color: "#e34c26", label: "HTML" },
  { icon: FaCss3Alt, color: "#264de4", label: "CSS" },
  { icon: FaJs, color: "#f0db4f", label: "JavaScript" },
  { icon: FaReact, color: "#61DBFB", label: "React" },
  { icon: FaGitAlt, color: "#f1502f", label: "Git" },
];

function About() {
  return (
    <section
      id="about"
      className="relative bg-slate-900 py-20 overflow-hidden"
    >
      {/* background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6">

        {/* About */}
        <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>

        <p className="text-gray-300 leading-relaxed">
          I am a recent Computer Science graduate passionate about developing responsive web applications
          using React and JavaScript. Through academic and personal projects, I have built web applications,
          implemented REST APIs, and collaborated using Git. I enjoy solving problems, writing clean code, and
          continuously learning modern development practices.
        </p>

        <p className="mt-4 text-gray-300 leading-relaxed">
          Currently improving my skills in React and working on personal projects to strengthen my portfolio and prepare for real-world development work.
        </p>

        {/* Skills */}
        <h3 className="text-2xl font-semibold mt-10 mb-6 text-white">Skills</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {skills.map(({ icon: Icon, color, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-800 border border-slate-700 hover:border-slate-500 hover:-translate-y-1 transition-all duration-300"
            >
              <Icon size={28} color={color} />
              <span className="text-sm text-gray-300">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;