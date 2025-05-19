import { motion } from 'framer-motion';
import SkillBar from './SkillBar';

export default function Skills() {
  const frontendSkills = [
    { name: "Next.js", percentage: 85 },
    { name: "Tailwind CSS", percentage: 90 },
    { name: "React", percentage: 80 },
    { name: "JavaScript (ES6+)", percentage: 85 },
    { name: "HTML5/CSS3", percentage: 90 }
  ];

  const backendSkills = [
    { name: "Node.js", percentage: 80 },
    { name: "Express.js", percentage: 75 },
    { name: "Git", percentage: 85 },
    { name: "Python", percentage: 60 },
    { name: "AI/ML Basics", percentage: 55 }
  ];

  return (
    <section id="skills" className="section-padding gradient-bg text-white relative overflow-hidden">
      {/* Decorative SVG blob */}
      <div className="absolute top-0 right-0 opacity-10">
        <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFFFF" d="M42.8,-57.2C55.9,-50.3,67.2,-38.5,73.6,-24C80,-9.6,81.6,7.5,76.8,22.6C72,37.7,60.8,50.8,47,57.2C33.1,63.6,16.6,63.3,0.6,62.4C-15.3,61.6,-30.7,60.2,-43.9,53.1C-57.1,46.1,-68.2,33.3,-72.6,18.1C-77,2.8,-74.7,-14.9,-66.7,-29C-58.6,-43.1,-44.9,-53.6,-31.2,-60.3C-17.5,-67,-8.7,-69.8,2.9,-73.8C14.5,-77.8,29.7,-84.1,42.8,-57.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Technical Skills
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-white mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          ></motion.div>
          <motion.p 
            className="text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I specialize in modern web technologies and focus on creating 
            responsive, user-friendly interfaces with clean, maintainable code.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Frontend Development</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Backend & Tools</h3>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional info */}
        <motion.div 
          className="text-center mt-16 bg-white/5 backdrop-blur-sm p-8 rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-4">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['UI/UX Design', 'Responsive Design', 'Performance Optimization', 'SEO', 
              'API Integration', 'Version Control', 'Digital Marketing'].map((item, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
