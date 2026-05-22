import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/about";
import Certificates from "./components/certificates";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <div className="bg-slate-900 text-white overflow-x-hidden scroll-smooth">
      <Navbar />

      {/* MAIN CONTENT WRAPPER */}
      <main className="pt-16 md:pt-20">
        <Hero />
        <About />
        <Certificates />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;