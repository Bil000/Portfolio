import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export default function Navbar({ scrollY }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const mobileMenuVariants = {
    closed: { x: '100%', opacity: 0 },
    open: { x: 0, opacity: 1, transition: { type: 'tween', duration: 0.3 } }
  };

  return (
    <motion.header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'navbar-glass shadow-md' : 'bg-transparent'
      }`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="text-xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="#home">
              <span className={`font-bold ${isScrolled ? 'gradient-text' : 'text-white'}`}>
                Clebio Junior
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={`${
                  isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
                } font-medium transition-all duration-300`}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4 ml-4">
              <motion.a
                href="https://github.com/Bil000"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`${isScrolled ? 'text-gray-800' : 'text-white'} text-xl`}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/clebio-de-souza/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`${isScrolled ? 'text-gray-800' : 'text-white'} text-xl`}
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 text-2xl"
            onClick={handleToggle}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <HiX className={isScrolled ? "text-gray-800" : "text-white"} />
            ) : (
              <HiMenuAlt3 className={isScrolled ? "text-gray-800" : "text-white"} />
            )}
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
              >
                <motion.div
                  className="absolute right-0 top-0 h-screen w-2/3 bg-white shadow-lg p-6 z-50"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={mobileMenuVariants}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex flex-col space-y-6 mt-16">
                    {navItems.map((item) => (
                      <Link 
                        key={item.name} 
                        href={item.href}
                        className="text-gray-800 font-medium text-lg"
                        onClick={closeMenu}
                      >
                        {item.name}
                      </Link>
                    ))}
                    
                    <div className="flex items-center space-x-6 pt-4 border-t border-gray-200">
                      <a
                        href="https://github.com/Bil000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 text-2xl"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/clebio-de-souza/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 text-2xl"
                      >
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
