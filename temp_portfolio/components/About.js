import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaBrain } from 'react-icons/fa';

export default function About() {
  const features = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      description: "Writing clean, maintainable, and efficient code following best practices and standards."
    },
    {
      icon: <FaLaptopCode />,
      title: "Full-Stack Skills",
      description: "Expertise in both frontend and backend technologies for complete web application development."
    },
    {
      icon: <FaBrain />,
      title: "Problem Solver",
      description: "Analytical thinker with a knack for finding elegant solutions to complex problems."
    }
  ];

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-100 opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-blue-100 opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-blue-600 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Self-motivated, adaptable full-stack enthusiast
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate web developer with hands-on experience in modern web technologies. 
              My journey in web development has equipped me with expertise in Next.js, Tailwind CSS, 
              Node.js, HTML5, and JavaScript (ES6+), complemented by a solid foundation in React and 
              a growing focus on AI/ML integration.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              What sets me apart is my ability to work independently and collaboratively, 
              delivering performant, user-centric interfaces that provide exceptional user experiences. 
              I'm available for part-time work and always ready to take on challenging projects
              that push my skills to new heights.
            </p>
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 gradient-bg text-white font-medium rounded-full hover:shadow-lg transition-all duration-300"
            >
              Let's Connect
            </a>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="p-6 rounded-xl blue-shadow bg-white hover:transform hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
              >
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4 text-xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
