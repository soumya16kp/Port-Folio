import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Me from "../images/320f3ec297b9d62fda6f65876920c580.jpg";
export default function About() {

  return (
    <section id="about" className=" min-h-screen flex items-center justify-center overflow-hidden pt-16 ">
      {/* Background elements */}

      <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        className="relative max-w-5xl mx-auto z-10"
      >
        <div className="grid md:grid-cols-[5fr_2fr] gap-12 items-center px-12 py-8 
                bg-white/5 backdrop-blur-md border border-white/20 
                rounded-2xl shadow-lg transition-all duration-300 
                hover:shadow-[0_0_15px_8px_rgba(128,0,255,0.5)]">

          {/* Text content */}
          <div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 2 }}
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
              className="flex items-center gap-4 mt-6"
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
                className="text-gray-400 hover:text-neon-cyan text-2xl transition-all duration-300 hover:-translate-y-1"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="/resume.pdf"
                download
                className="relative inline-flex items-center gap-2 px-6 py-3 mb-2 rounded-xl
                          bg-white/10 backdrop-blur-md text-white/90
                          border border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.25)]
                          hover:bg-white/15 hover:border-white/30 hover:shadow-[0_0_24px_#00ffff40]
                          active:scale-95 transition-all duration-300"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        <div className="relative w-80 h-80 flex items-center justify-center">
          {/* Rotating + pulsing glow border */}
          <div className="absolute inset-0 rounded-full animate-spinGlow 
                          before:content-[''] before:absolute before:inset-0 
                          before:rounded-full 
                          before:bg-[conic-gradient(from_0deg,white,transparent,white)] 
                          before:blur-md 
                          before:animate-pulseGlow">
          </div>

          <img
            src={Me}
            alt="About_Image"
            className="w-80 h-80 rounded-full object-cover relative z-10 border-4 border-white/20"
          />
        </div>
        </div>
      </motion.div>
    </section>
  );
}