import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <img 
            src="https://res.cloudinary.com/dytmmuosl/image/upload/v1726528748/background_profile_ktqoeb.png"
            alt="Abstract tech background" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-10 w-64 h-64 bg-blue-700 rounded-full filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="inline-block text-blue-200 text-lg md:text-xl mb-4 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Hello, I&apos;m
              </motion.span>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Clebio Junior
              </motion.h1>
              
              <motion.h2 
                className="text-2xl md:text-3xl font-semibold text-blue-100 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                Full-Stack Developer
              </motion.h2>
              
              <motion.p 
                className="text-lg text-white/90 mb-10 max-w-lg mx-auto md:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
              >
                Self-motivated and adaptable developer with expertise in 
                Next.js, Tailwind CSS, Node.js, and modern web technologies.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.8 }}
              >
                <a 
                  href="#contact" 
                  className="px-8 py-3 bg-white text-blue-700 font-medium rounded-full hover:bg-blue-50 hover:shadow-lg transition-all duration-300 text-center"
                >
                  Get in Touch
                </a>
                <a 
                  href="#projects" 
                  className="px-8 py-3 border border-white text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 text-center"
                >
                  View Projects
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Hero image or decoration */}
          <div 
            className="md:w-2/5 mt-12 md:mt-0 flex justify-center items-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
              <img 
                src="https://res.cloudinary.com/dytmmuosl/image/upload/v1747678389/GIF_20240819_110350_680_fw9yum.gif" 
                alt="Developer workspace" 
                className="relative z-10 rounded-2xl shadow-2xl max-w-[75%] mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ transform: 'rotate(0deg)' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaArrowDown className="text-2xl" />
        </motion.div>
      </motion.div>
    </section>
  );
}
