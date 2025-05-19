import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Experience() {
  const experiences = [
    {
      title: "Freelance Front-end Developer & Digital Marketer",
      company: "Self-Employed (Remote)",
      period: "Feb 2024 - Oct 2024",
      location: "Remote",
      duties: [
        "Met with clients to gather requirements and turned sketches into user-friendly pages",
        "Set up Node.js back ends to handle contact forms and basic API integration",
        "Optimized images and applied code splitting to speed up page loads by around 30%",
        "Managed Meta Ads and Google Ads to drive targeted traffic for clients",
        "Delivered all projects on time while providing regular client updates"
      ],
      current: true
    },
    {
      title: "General Assistant (Soldier)",
      company: "Brazilian Army",
      period: "Mar 2023 - Jan 2024",
      location: "Rio de Janeiro, Brazil",
      duties: [
        "Built a secure login page for military event registration that helped 300+ people sign up",
        "Wrote Node.js scripts to automate data-entry tasks, reducing manual work by nearly half",
        "Created intuitive user interfaces for information systems used by officers",
        "Designed and organized Office documents and presentations for team preparation",
        "Implemented IT tools under strict security protocols in a high-pressure environment"
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-blue-50 -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Work Experience
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-blue-600 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          ></motion.div>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My professional journey has equipped me with versatile skills in web development,
            automation, and efficient project management.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform md:translate-x-[-50%] hidden md:block"></div>

          {/* Experience items */}
          <div className="space-y-12 relative">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2" style={{ top: `${index * 200 + 24}px` }}>
                  <div className={`w-5 h-5 rounded-full ${exp.current ? 'bg-blue-600' : 'bg-blue-400'} border-4 border-white`}></div>
                </div>

                {/* Content */}
                <div className="md:w-1/2 p-4 md:p-6">
                  <div className={`p-6 rounded-lg shadow-lg ${exp.current ? 'bg-white border-l-4 border-blue-600' : 'bg-white'}`}>
                    <div className="mb-4">
                      {exp.current && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold mb-2 inline-block">
                          CURRENT
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                      <p className="text-lg text-blue-600">{exp.company}</p>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2 text-blue-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-blue-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 text-gray-600">
                      {exp.duties.map((duty, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2 mt-2"></span>
                          <span>{duty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Empty div for timeline layout */}
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education section */}
        <motion.div 
          className="mt-16 p-8 bg-white rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Education</h3>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-xl font-semibold text-gray-800">High School Diploma</h4>
              <p className="text-gray-600">Baron of Santa Margarida Municipal School</p>
              <p className="text-gray-500">Rio de Janeiro, Brazil | February 2023</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Languages</h4>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 mr-4">Portuguese:</span>
                  <span className="text-blue-600 font-medium">Native</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 mr-4">English:</span>
                  <span className="text-blue-600 font-medium">B2 (Independent User)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
