import { useEffect, useState } from "react";

function Hero() {
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setOffset(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-slate-900 flex items-center justify-center px-6 overflow-hidden"
    >
      {/* background accents */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* TEXT */}
        <div
          style={{
            transform: isMobile ? "none" : `translate3d(0, ${offset * 0.15}px, 0)`,
          }}
          className={`text-center md:text-left transition-all duration-700 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block px-3 py-1 mb-4 rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-300 text-sm font-mono">
            &lt;FrontendDeveloper /&gt;
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Dhane Kian Hellie
          </h1>

          <p className="mt-4 text-gray-400 max-w-md">
            I build responsive, modern web experiences with React and Next.js,
            turning ideas into clean and functional interfaces.
          </p>

          <div className="mt-5 flex gap-3 justify-center md:justify-start text-gray-500 text-sm">
            <span className="px-2 py-1 rounded bg-white/5">React</span>
            <span className="px-2 py-1 rounded bg-white/5">Next.js</span>
            <span className="px-2 py-1 rounded bg-white/5">Tailwind</span>
            <span className="px-2 py-1 rounded bg-white/5">JavaScript</span>
          </div>

          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-lg bg-white text-slate-900 font-medium hover:bg-blue-400 hover:text-white transition-colors duration-300">
              View My Work
            </a>

            <button
              onClick={scrollToContact}
              className="px-5 py-2.5 rounded-lg border-2 border-gray-500 text-white font-medium hover:border-white hover:bg-white/5 transition-colors duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div
          style={{
            transform: isMobile ? "none" : `translate3d(0, ${offset * -0.1}px, 0)`,
          }}
          className={`flex justify-center transition-all duration-700 ease-out delay-150 ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-400 to-blue-300 opacity-40 blur-xl" />
            <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="/kiks.jpg"
                alt="Dhane Kian Hellie, Frontend Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;