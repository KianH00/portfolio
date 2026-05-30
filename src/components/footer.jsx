export default function Footer() {
  return (
    <footer className="border-t border-slate-700 mt-10 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* LEFT TEXT */}
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-400">
            © 2026 Dhane Kian Hellie
          </p>
          <p className="text-xs text-gray-500">
            Frontend Developer • Built with React & Tailwind
          </p>
        </div>

        {/* NAV LINKS */}
        <ul className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-gray-300">
          <li>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
          </li>

          <li>
            <a href="#certificates" className="hover:text-white transition">
              Certificates
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </li>
        </ul>

      </div>
    </footer>
  );
}