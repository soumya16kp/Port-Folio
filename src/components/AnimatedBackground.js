// components/AnimatedBackground.jsx
import React from 'react';
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-dark -z-50 overflow-hidden">
      {/* Cyberpunk grid overlay */}
      <div className="absolute inset-0 opacity-5 bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" 
           style={{backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)'}}>
      </div>

      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon-pink rounded-full filter blur-md animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-neon-cyan rounded-full filter blur-md animate-float-delay"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-neon-yellow rounded-full filter blur-3xl animate-float-delay"></div>
      </div>

              <motion.div
          className="fixed -left-20 bottom-40 w-80 h-80 bg-neon-green rounded-full mix-blend-screen filter blur-2xl opacity-20 z-0"
          animate={{
            opacity: [0.25, 0.4, 0.25],
            scale: [0.95, 1.0, 0.95],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

      {/* Radial glow effects without circular shapes */}
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] pointer-events-none">
        <div className="absolute inset-0 bg-neon-purple/10 rounded-full animate-pulse-slow" 
             style={{
               boxShadow: '0 0 200px 150px rgba(176, 0, 240, 0.1)',
               filter: 'blur(60px)'
             }}></div>
      </div>
      
      <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] pointer-events-none">
        <div className="absolute inset-0 bg-neon-cyan/10 rounded-full animate-pulse-slow-delay" 
             style={{
               boxShadow: '0 0 200px 150px rgba(0, 247, 255, 0.1)',
               filter: 'blur(60px)'
             }}></div>
      </div>
      
      {/* Cyberpunk stars with neon glow */}
      {[...Array(150)].map((_, i) => {
        const size = 0.5 + Math.random() * 1.5;
        const color = [
          'neon-cyan', 
          'neon-pink', 
          'neon-purple', 
          'neon-yellow', 
          'neon-green'
        ][Math.floor(Math.random() * 5)];
        return (
          <div
            key={`star-${i}`}
            className={`absolute rounded-full bg-${color} text-${color} drop-shadow-neon-sm animate-twinkle`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.7,
              animationDuration: `${3 + Math.random() * 7}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        );
      })}
      
      {/* Shooting stars with neon trails */}
      {[...Array(8)].map((_, i) => {
        const color = [
          'neon-cyan', 
          'neon-pink', 
          'neon-purple'
        ][Math.floor(Math.random() * 3)];
        
        return (
          <div
            key={`shooting-${i}`}
            className={`absolute w-1 h-1 rounded-full bg-${color} text-${color} drop-shadow-neon animate-shooting-star`}
            style={{
              top: `${5 + Math.random() * 80}%`,
              left: `${5 + Math.random() * 80}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          ></div>
        );
      })}
      
      {/* Abstract neon light beams */}
      {[...Array(12)].map((_, i) => {
        const length = 50 + Math.random() * 150;
        const angle = Math.random() * 360;
        const color = [
          'neon-cyan', 
          'neon-pink', 
          'neon-purple'
        ][Math.floor(Math.random() * 3)];
        return (
          <div
            key={`beam-${i}`}
            className={`absolute bg-${color}/10 animate-pulse-slow`}
            style={{
              width: `${length}px`,
              height: '1px',
              top: `${10 + Math.random() * 80}%`,
              left: `${10 + Math.random() * 80}%`,
              transform: `rotate(${angle}deg)`,
              transformOrigin: 'left center',
              boxShadow: `0 0 15px 2px var(--tw-${color})`,
              filter: 'blur(1px)',
              animationDuration: `${10 + Math.random() * 20}s`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default AnimatedBackground;