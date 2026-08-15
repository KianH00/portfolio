export default function Footer() {
  return (
    <footer className="border-t border-slate-700 mt-10 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-400">
            © 2026 Dhane Kian Hellie
          </p>

          <p className="text-xs text-gray-500 mt-1">
            Junior Frontend Developer • Built with React & Tailwind CSS
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">

          <a
            href="https://github.com/KianH00"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="www.linkedin.com/in/kian-hellie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:kianhellie00@gmail.com"
            className="text-gray-300 hover:text-white transition"
          >
            Email
          </a>

        </div>

      </div>
    </footer>
  );
}