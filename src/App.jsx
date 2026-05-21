import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/about";
import Certificates from "./components/certificates";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Certificates />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;