import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { useEffect, useRef } from "react";

export default function About() {
  const pinkDotRef = useRef(null);
  const cyanDotRef = useRef(null);

  useEffect(() => {
    const updatePosition = (time) => {
      if (pinkDotRef.current && cyanDotRef.current) {
        // Planetary motion parameters
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const radius = 150;
        const speed = 0.0005;
        
        // Pink dot orbits around center
        const pinkAngle = time * speed;
        const pinkX = centerX + Math.cos(pinkAngle) * radius;
        const pinkY = centerY + Math.sin(pinkAngle) * radius;
        
        // Cyan dot orbits around pink dot (moon-like)
        const cyanAngle = time * speed * 2;
        const cyanX = pinkX + Math.cos(cyanAngle) * radius * 0.6;
        const cyanY = pinkY + Math.sin(cyanAngle) * radius * 0.6;
        
        pinkDotRef.current.style.transform = `translate(${pinkX}px, ${pinkY}px)`;
        cyanDotRef.current.style.transform = `translate(${cyanX}px, ${cyanY}px)`;
      }
      requestAnimationFrame(updatePosition);
    };
    
    const animationId = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center bg-gray-900 px-6 py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {/* Planetary motion dots */}
        <motion.div
          ref={pinkDotRef}
          className="absolute w-16 h-16 bg-neon-pink rounded-full mix-blend-screen filter blur-xl"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          ref={cyanDotRef}
          className="absolute w-20 h-20 bg-neon-cyan rounded-full mix-blend-screen filter blur-xl"
          animate={{
            opacity: [0.2, 0.9, 0.2],
            scale: [0.7, 1.1, 0.7]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-5xl mx-auto z-10"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
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