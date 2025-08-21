import { useState, useRef } from 'react';
import { FiSend, FiTwitter, FiLinkedin, FiGithub, FiDribbble } from 'react-icons/fi';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'; 
import contactIllustration from '../images/Contact us-rafiki.svg';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      "service_hpjn2zh",       
      "template_eozg4yi",       
      formRef.current,
      "d37svRYu9bsFt3_kh"        
    )
    .then(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      formRef.current.reset();
      setTimeout(() => setSubmitSuccess(false), 3000);
    })
    .catch((error) => {
      setIsSubmitting(false);
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again later.");
    });
  };


  return (
    <div id="contact" className="text-center pt-24 mb-8">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
          Contact
        </span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-purple mx-auto rounded-full mb-12"></div>

    <div className="relative min-h-screen overflow-hidden flex items-center justify-center p-4 sm:p-6">
      

      {/* Main Glass Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative w-full max-w-6xl bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden z-10 flex flex-col lg:flex-row"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)'
        }}
      >
      {/* Illustration Section (Left) */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="w-full bg-gradient-to-br from-indigo-400/5 to-purple-400/5 flex flex-col items-center justify-center p-8 md:p-12 min-h-[400px]"
      > 
        {/* Text Section */}
        <div className="text-center mb-10">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl pb-2 font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70"
          >
            Let's Work Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-white/80 max-w-md mx-auto"
          >
            Get in touch to discuss your project or just say hello!
          </motion.p>
        </div>

        {/* Image Section */}
        <motion.img 
          src={contactIllustration} 
          alt="Contact illustration"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
          className="w-full max-w-[4600px] sm:max-w-[700px] lg:max-w-[700px] max-h-[450px] object-contain drop-shadow-xl"
        />
      </motion.div>

        <div className="w-full lg:w-3/5 p-8 ">
    
          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full px-5 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-300 placeholder-white/30"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full px-5 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-300 placeholder-white/30"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Hi there, I'd love to work with you on..."
                required
                className="w-full px-5 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-300 placeholder-white/30"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="pt-2"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-white/10 cursor-not-allowed'
                    : 'bg-white/10 hover:bg-white/20 active:scale-95 shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="text-lg" />
                    Send Message
                  </>
                )}
              </button>
            </motion.div>
          </form>

          {/* Success Message */}
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-6 p-4 bg-green-500/10 border border-green-400/30 rounded-lg text-green-100 text-center"
            >
              Message sent successfully! I'll get back to you soon.
            </motion.div>
          )}

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center gap-6 mt-12"
          >
            {[
              { icon: <FiTwitter />, label: 'Twitter' },
              { icon: <FiLinkedin />, label: 'LinkedIn' },
              { icon: <FiGithub />, label: 'GitHub' },
              { icon: <FiDribbble />, label: 'Dribbble' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="text-xl p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 12s ease infinite;
        }
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)' opacity='0.2'/%3E%3C/svg%3E");
        }
      `}</style>
    </div>
    </div>
  );
};

export default ContactPage;