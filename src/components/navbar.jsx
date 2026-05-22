import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-20 w-full border-b border-gray-800 bg-slate-900">
      <nav className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="#home" className="text-xl font-bold text-white">
          KIAN
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <li><a href="#about" className="text-gray-300 hover:text-white">ABOUT</a></li>
          <li><a href="#certificates" className="text-gray-300 hover:text-white">CERTIFICATES</a></li>
          <li><a href="#projects" className="text-gray-300 hover:text-white">PROJECTS</a></li>
          <li><a href="#contact" className="text-gray-300 hover:text-white">CONTACT</a></li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-gray-800 px-6 py-4">
          <ul className="flex flex-col space-y-4 text-sm font-medium">
            <li><a onClick={() => setOpen(false)} href="#about" className="text-gray-300 hover:text-white">ABOUT</a></li>
            <li><a onClick={() => setOpen(false)} href="#certificates" className="text-gray-300 hover:text-white">CERTIFICATES</a></li>
            <li><a onClick={() => setOpen(false)} href="#projects" className="text-gray-300 hover:text-white">PROJECTS</a></li>
            <li><a onClick={() => setOpen(false)} href="#contact" className="text-gray-300 hover:text-white">CONTACT</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;