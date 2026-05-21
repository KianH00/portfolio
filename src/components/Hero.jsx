function Hero() {
  return (
    <section className="flex items-center justify-between max-w-6xl mx-auto px-6 py-20 flex-col md:flex-row gap-10">

      <div className="text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold text-white-500">
          Dhane Kian Hellie 
        </h1>

        <h2 className="text-xl mt-4 text-white-600">
          Frontend Developer
        </h2>

        <p className="mt-4 text-white-500 max-w-md">
          I build responsive, clean, and user-friendly web applications using React and modern frontend tools.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <a href="#projects" className="px-5 py-2 rounded-lg bg-black text-white hover:opacity-80 transition">
            View Projects
          </a>
          <a href="#contact" className="px-5 py-2 rounded-lg border border-gray-300 hover:border-black transition">
            Contact Me
          </a>
        </div>
      </div>

      
      <div className="flex justify-center">
        <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
          <img
            src="/your-photo.jpg"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </section>
  );
}

export default Hero;