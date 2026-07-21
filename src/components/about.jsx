import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">

      {/* About */}
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <p className="text-gray-600 leading-relaxed">
        I am a recent Computer Science graduate passionate about developing responsive web applications
        using React and JavaScript. Through academic and personal projects, I have built web applications, 
        implemented REST APIs, and collaborated using Git. I enjoy solving problems, writing clean code, and 
        continuously learning modern development practices.
      </p>

      <p className="mt-4 text-gray-600 leading-relaxed">
        Currently improving my skills in React and working on personal projects to strengthen my portfolio and prepare for real-world development work.
      </p>

      {/* Skills */}
      <h3 className="text-2xl font-semibold mt-10 mb-6">Skills</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">

        <div className="flex flex-col items-center gap-2 p-4 border rounded-xl hover:shadow-md transition">
          <FaHtml5 size={28} color="#e34c26" />
          <span className="text-sm">HTML</span>
        </div>

        <div className="flex flex-col items-center gap-2 p-4 border rounded-xl hover:shadow-md transition">
          <FaCss3Alt size={28} color="#264de4" />
          <span className="text-sm">CSS</span>
        </div>

        <div className="flex flex-col items-center gap-2 p-4 border rounded-xl hover:shadow-md transition">
          <FaJs size={28} color="#f0db4f" />
          <span className="text-sm">JavaScript</span>
        </div>

        <div className="flex flex-col items-center gap-2 p-4 border rounded-xl hover:shadow-md transition">
          <FaReact size={28} color="#61DBFB" />
          <span className="text-sm">React</span>
        </div>

        <div className="flex flex-col items-center gap-2 p-4 border rounded-xl hover:shadow-md transition">
          <FaGitAlt size={28} color="#f1502f" />
          <span className="text-sm">Git</span>
        </div>

      </div>

    </section>
  );
}

export default About;