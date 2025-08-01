
import About from "./components/About";
import Project from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import TechStack from "./components/TechStack";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans">
      <Navbar />
      <main className="pt-20 space-y-28 overflow-x-hidden">
        <About />
        <TechStack/>
        <Project/>
        <Education />
        <Contact /> 
      </main>
    </div>
  );
}

