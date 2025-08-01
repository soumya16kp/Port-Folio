import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek personal portfolio built with React, Tailwind CSS, and Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "#",
    live: "#",
    accentColor: "neon-pink",
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
    accentColor: "neon-cyan",
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
    accentColor: "neon-purple",
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ]
  },
];

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative overflow-hidden h-full"
    >
      {/* Neon background effect (only behind image) */}
      <div className={`absolute -inset-0.5 bg-${project.accentColor} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0`}></div>
      
      {/* Project card container */}
      <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl h-full flex flex-col overflow-hidden hover:border-neon-cyan/30 transition-all duration-300 z-10">
        {/* Image slideshow section */}
        <div className="relative h-48 overflow-hidden">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: index === currentImageIndex ? 1 : 0,
                scale: index === currentImageIndex ? 1 : 1.05
              }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <img 
                src={image} 
                alt={`${project.title} screenshot ${index + 1}`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </motion.div>
          ))}
          {/* Image indicator dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? `bg-${project.accentColor} w-4` : 'bg-gray-500'}`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Info section (no neon background here) */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-semibold mb-3">
            <span className={`text-${project.accentColor}`}>{project.title}</span>
          </h3>
          <p className="text-gray-300 mb-5 text-sm leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`bg-${project.accentColor}/10 text-${project.accentColor} px-3 py-1 rounded-full text-xs font-medium`}
              >
                {tech}
              </motion.span>
            ))}
          </div>
          
          <div className="mt-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 hover:text-${project.accentColor} text-lg`}
                aria-label="GitHub"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 hover:text-${project.accentColor} text-lg`}
                aria-label="Live Demo"
              >
                <FaExternalLinkAlt />
              </motion.a>
            </div>
            <motion.a
              whileHover={{ x: 5 }}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center text-sm font-medium text-${project.accentColor}`}
            >
              View Project <FiArrowRight className="ml-1" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="relative bg-black text-white py-28 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-pink rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-neon-cyan rounded-full filter blur-3xl animate-float-delay"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-green">
              My Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(-10px); }
          50% { transform: translateY(10px); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 8s ease-in-out infinite 2s; }
      `}</style>
    </section>
  );
}