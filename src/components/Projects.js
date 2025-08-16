import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { useState, useEffect } from "react";

// --- DATA ---
const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek personal portfolio built with React, Tailwind CSS, and Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "#",
    live: "#",
    accentColor: "pink", // Use simple names for mapping
    images: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
    ]
  },
  {
    title: "Attendance Tracker",
    description: "A full-stack class attendance tracking app with real-time updates.",
    tech: ["React", "Appwrite", "Tailwind"],
    github: "#",
    live: "#",
    accentColor: "cyan", // Use simple names for mapping
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
    ]
  },
  {
    title: "Blog Platform",
    description: "A blogging platform with Django backend and PostgreSQL database.",
    tech: ["Django", "PostgreSQL", "Bootstrap"],
    github: "#",
    live: "#",
    accentColor: "purple", // Use simple names for mapping
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ]
  },
];

// --- IMPORTANT: Helper object to map color names to actual Tailwind classes ---
// This prevents Tailwind from purging the dynamic classes during the build process.
const colorVariants = {
  pink: {
    bg: "bg-neon-pink",
    text: "text-neon-pink",
    border: "hover:border-neon-pink/40",
    tagBg: "bg-neon-pink/10",
    dot: "bg-neon-pink"
  },
  cyan: {
    bg: "bg-neon-cyan",
    text: "text-neon-cyan",
    border: "hover:border-neon-cyan/40",
    tagBg: "bg-neon-cyan/10",
    dot: "bg-neon-cyan"
  },
  purple: {
    bg: "bg-neon-purple",
    text: "text-neon-purple",
    border: "hover:border-neon-purple/40",
    tagBg: "bg-neon-purple/10",
    dot: "bg-neon-purple"
  }
};


// --- CARD COMPONENT ---
const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const colors = colorVariants[project.accentColor] || colorVariants.cyan; // Fallback to cyan

  // Image slideshow logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500); // Slightly slower interval for a more relaxed feel
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="group relative h-full"
    >
      {/* Neon glow effect on hover */}
      <div className={`absolute -inset-1.5 ${colors.bg} rounded-xl blur opacity-0 group-hover:opacity-25 transition-opacity duration-300 z-0`}></div>
      
      {/* Main card container with improved contrast */}
      <div className={`relative bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-xl h-full flex flex-col overflow-hidden ${colors.border} transition-colors duration-300 z-10`}>
        
        {/* Image slideshow */}
        <div className="relative h-48 sm:h-52 overflow-hidden">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0,
                scale: index === currentImageIndex ? 1 : 1.05
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }} // Smoother fade transition
              className="absolute inset-0"
            >
              <img 
                src={image} 
                alt={`${project.title} screenshot ${index + 1}`} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Gradient overlay for better text visibility on dots */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </motion.div>
          ))}
          {/* Image indicator dots */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2 z-10">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex ? `${colors.dot} w-4` : 'bg-slate-500 hover:bg-slate-400'}`}
                aria-label={`View image ${index + 1}`}
                aria-current={index === currentImageIndex ? "true" : "false"}
              />
            ))}
          </div>
        </div>

        {/* Text content section */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className={`text-xl font-bold mb-2 ${colors.text}`}>
            {project.title}
          </h3>
          <p className="text-slate-300 mb-4 text-sm leading-relaxed flex-grow">
            {project.description}
          </p>
          
          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className={`${colors.tagBg} ${colors.text} px-3 py-1 rounded-full text-xs font-medium`}
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Links section */}
          <div className="mt-auto flex justify-between items-center pt-4 border-t border-slate-800">
            <div className="flex items-center space-x-4">
              <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href={project.github} target="_blank" rel="noopener noreferrer" className={`text-slate-400 hover:${colors.text} text-xl transition-colors`} aria-label="GitHub">
                <FaGithub />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href={project.live} target="_blank" rel="noopener noreferrer" className={`text-slate-400 hover:${colors.text} text-xl transition-colors`} aria-label="Live Demo">
                <FaExternalLinkAlt />
              </motion.a>
            </div>
            <motion.a whileHover={{ x: 4 }} href={project.live} target="_blank" rel="noopener noreferrer" className={`flex items-center text-sm font-semibold ${colors.text}`}>
              View Project <FiArrowRight className="ml-1.5" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


// --- MAIN SECTION COMPONENT ---
export default function Projects() {
  return (
    <section id="projects" className="relative text-white py-16  px-4 sm:px-6 overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-green">
              My Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      {/* Using <style> is fine, but for Next.js/Create React App, prefer global CSS files */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(15px) translateX(-10px); }
        }
        .animate-float { animation: float 10s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 10s ease-in-out infinite 2s; }
      `}</style>
    </section>
  );
}