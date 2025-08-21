import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiAppwrite,
  SiC,
  SiCplusplus,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Languages",
    items: [
      { icon: <FaJsSquare size={48} />, name: "JavaScript", color: "text-yellow-400" },
      { icon: <SiTypescript size={48} />, name: "TypeScript", color: "text-blue-500" },
      { icon: <FaPython size={48} />, name: "Python", color: "text-blue-400" },
      { icon: <SiC size={48} />, name: "C", color: "text-blue-600" },
      { icon: <SiCplusplus size={48} />, name: "C++", color: "text-indigo-400" },
    ]
  },
  {
    title: "Frontend",
    items: [
      { icon: <FaHtml5 size={48} />, name: "HTML5", color: "text-orange-500" },
      { icon: <FaCss3Alt size={48} />, name: "CSS3", color: "text-blue-500" },
      { icon: <FaReact size={48} />, name: "React", color: "text-cyan-400" },
      { icon: <SiNextdotjs size={48} />, name: "Next.js", color: "text-white" },
      { icon: <SiTailwindcss size={48} />, name: "Tailwind", color: "text-teal-300" },
    ]
  },
  {
    title: "Backend",
    items: [
      { icon: <FaNodeJs size={70} />, name: "Node.js", color: "text-green-500" },
      { icon: <SiExpress size={75} />, name: "Express", color: "text-gray-300" },
      { icon: <SiDjango size={75} />, name: "Django", color: "text-green-700" },
      { icon: <SiAppwrite size={75} />, name: "Appwrite", color: "text-pink-500" },
    ]
  },
  {
    title: "Databases & Tools",
    items: [
      { icon: <SiMongodb size={75} />, name: "MongoDB", color: "text-green-600" },
      { icon: <SiPostgresql size={75} />, name: "PostgreSQL", color: "text-blue-600" },
      { icon: <SiMysql size={75} />, name: "MySQL", color: "text-yellow-500" },
      { icon: <FaGithub size={75} />, name: "GitHub", color: "text-white" },
      { icon: <FaDocker size={75} />, name: "Docker", color: "text-blue-400" },
    ]
  }
];

export default function TechStack() {
  return (
    <section id="techstack" className="relative  text-white py-24 px-6 overflow-hidden">
      {/* Background elements */}
      
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
              Tech Stack
            </span>
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-neon-pink to-neon-purple mx-auto rounded-full"></div>
        </motion.div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{               
                // delay: index * 0.1,
                duration: 0.5,
                ease: "easeInOut"
              }}
              
              viewport={{ once: true, margin: "-50px" }}
              className="
               
                bg-white/5 backdrop-blur-xl border-2 border-white/20 rounded-xl p-6
                transition-colors duration-0
                hover:border-neon-cyan/30 
              "
               style={{
                    transition: 'box-shadow 0s linear',
                  }}
                whileHover={{ scale: 1.05 }}
            >

              <h3 className="text-2xl pb-2 font-semibold border-b-2 border-gray-700 text-white mb-6 flex items-center">
                <span className="w-3 h-3  bg-neon-pink rounded-full mr-3 animate-pulse"></span>
                {category.title}
              </h3>
              
              <div className="overflow-x-auto pb-4">
                <div className="flex space-x-4 w-max min-w-full pt-2">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-neon-cyan/50 transition-all min-w-[140px]"
                    >
                      <div className={`${item.color} mb-4 text-5xl drop-shadow-[0_0_12px_rgba(0,255,255,0.4)]`}>
                        {item.icon}
                      </div>
                      <span className="text-md text-gray-300 text-center font-medium">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
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
        
        /* Custom scrollbar */
        .overflow-x-auto::-webkit-scrollbar {
          height: 6px;
        }
        .overflow-x-auto::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.5);
          border-radius: 10px;
        }
        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: rgba(34, 211, 238, 0.6);
          border-radius: 10px;
        }
        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(34, 211, 238, 0.8);
        }
      `}</style>
    </section>
  );
}