import { useEffect, useState } from "react";

function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6"
    >

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* TEXT */}
        <div
          style={{
            transform: `translateY(${offset * 0.15}px)`
          }}
          className="text-center md:text-left transition-transform duration-300"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Dhane Kian Hellie
          </h1>

          <h2 className="text-xl mt-4 text-gray-200">
            Frontend Developer
          </h2>

          <p className="mt-4 text-gray-400 max-w-md">
            I build responsive, clean, and user-friendly web applications using React and modern frontend tools.
          </p>

          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-5 py-2 rounded-lg bg-black text-white hover:opacity-80 transition"
            >
              View Projects
            </a>

            <button
              onClick={scrollToContact}
              className="px-5 py-2 rounded-lg border border-gray-400 text-white hover:border-white transition"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div
          style={{
            transform: `translateY(${offset * -0.1}px)`
          }}
          className="flex justify-center transition-transform duration-300"
        >
          <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg">
            <img
              src="/your-photo.jpg"
              className="w-full h-full object-cover"
              alt="Profile"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;