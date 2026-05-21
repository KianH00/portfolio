function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-20 w-full border-b border-gray-800 bg-slate-900">
      <nav className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4">
        
        <a href="#home" className="text-xl font-bold text-white">
          KIAN
        </a>

        <ul className="flex items-center space-x-8 text-sm font-medium">

           <li>
            <a href="#about" className="text-gray-300 transition hover:text-white">
              ABOUT
            </a>
          </li>

           <li>
            <a href="#certificates" className="text-gray-300 transition hover:text-white">
              CERTIFICATES
            </a>
          </li>

          <li>
            <a href="#projects" className="text-gray-300 transition hover:text-white">
              PROJECTS
            </a>
          </li>

          <li>
            <a href="#contact" className="text-gray-300 transition hover:text-white">
              CONTACT
            </a>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Navbar;