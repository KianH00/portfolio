import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/about";
import Certificates from "./components/certificates";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <div className="w-full min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Navbar />

      {/* MAIN CONTENT WRAPPER */}
      <main className="pt-16 md:pt-20 w-full">
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