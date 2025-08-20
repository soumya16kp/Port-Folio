
import About from "./components/About";
import Project from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import TechStack from "./components/TechStack";
import Navbar from "./components/Navbar";
import Thanks from "./components/Thanks";
import AnimatedBackground from "./components/AnimatedBackground";


export default function App() {
  return (
    <div className="text-white min-h-screen font-sans">
      <AnimatedBackground/>
      <Navbar />
      <main className="pt-20  overflow-x-hidden">
        <About />
        <TechStack/>
        <Project/>
        <Education />
        <Contact />
        <Thanks/>

      </main>
    </div>
  );
}

