import React from 'react';
// 1. Correct the import path to be relative
import AnimatedBackground from './AnimatedBackground'; 

function Contact() {
  return (
    <>
      
      <section id="contact" className="relative z+10 flex items-center justify-center min-h-screen">
        {/* Your contact form and content go here */}
        <div className="text-center">
            <h1 className="text-5xl font-bold text-white">Contact Me</h1>
            <p className="text-neon-cyan mt-4">Let's build something amazing together.</p>
        </div>
      </section>
    </>
  );
}

export default Contact;