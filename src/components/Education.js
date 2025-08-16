import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science",
    institution: "ABC Institute of Technology",
    duration: "2021 – 2025",
    score: "8.9 CGPA",
    icon: <FaUniversity className="text-3xl" />,
    color: "text-neon-yellow",
    bgColor: "bg-neon-yellow/10",
    borderColor: "border-neon-yellow"
  },
  {
    degree: "Higher Secondary (Class 12)",
    institution: "XYZ Senior Secondary School",
    duration: "2019 – 2021",
    score: "93.4%",
    icon: <FaSchool className="text-3xl" />,
    color: "text-neon-pink",
    bgColor: "bg-neon-pink/10",
    borderColor: "border-neon-pink"
  },
  {
    degree: "Secondary (Class 10)",
    institution: "XYZ Senior Secondary School",
    duration: "2017 – 2019",
    score: "95.6%",
    icon: <FaGraduationCap className="text-3xl" />,
    color: "text-neon-cyan",
    bgColor: "bg-neon-cyan/10",
    borderColor: "border-neon-cyan"
  },
];

export default function Education() {
  return (
    <section id="education" className="relative  text-white  px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-yellow rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-neon-pink rounded-full filter blur-3xl animate-float-delay"></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-cyan">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`group relative overflow-hidden rounded-xl ${edu.bgColor} backdrop-blur-sm border ${edu.borderColor}/30 hover:${edu.borderColor}/50 transition-all duration-300`}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-0.5 ${edu.color} rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              <div className="relative p-6 flex flex-col md:flex-row gap-6">
                <div className={`flex items-center justify-center w-16 h-16 ${edu.color} ${edu.bgColor} rounded-full shrink-0`}>
                  {edu.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className={`text-xl md:text-2xl font-semibold mb-1 ${edu.color}`}>
                    {edu.degree}
                  </h3>
                  <p className="text-gray-300 mb-3">{edu.institution}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
                      <span className="text-sm text-gray-400">{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-neon-pink animate-pulse"></span>
                      <span className={`text-sm font-medium ${edu.color}`}>{edu.score}</span>
                    </div>
                  </div>
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
      `}</style>
    </section>
  );
}