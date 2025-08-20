import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";


export default function About() {


  return (
    <section id="about" className=" min-h-screen flex items-center justify-center overflow-hidden pt-16 ">
      {/* Background elements */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-5xl mx-auto z-10"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center px-12 py-8 
                bg-white/10 backdrop-blur-md border border-white/20 
                rounded-2xl shadow-lg transition-all duration-300 
                hover:shadow-[0_0_15px_8px_rgba(128,0,255,0.5)]">

          {/* Text content */}
          <div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 10 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">About</span> Me
              </h2>
              
              <div className="w-20 h-1 bg-gradient-to-r from-neon-pink to-neon-purple mb-8 rounded-full"></div>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a <span className="text-neon-green font-medium">Fullstack developer</span> with a passion for creating immersive digital experiences that blend aesthetics with functionality.
              </p>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Specializing in modern web technologies, I build performant, accessible, and visually stunning applications that leave lasting impressions.
              </p>
            </motion.div>
            
            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex space-x-6"
            >
              <a
                href="#"
                className="text-gray-400 hover:text-neon-cyan text-2xl transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-neon-purple text-2xl transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-neon-purple text-2xl transition-all duration-300 hover:-translate-y-1"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-neon-pink text-2xl transition-all duration-300 hover:-translate-y-1"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}