import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
            {project.status}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-4 mt-auto">
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
            >
              <FaExternalLinkAlt className="mr-2" />
              Visit Site
            </a>
          )}
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium"
            >
              <FaGithub className="mr-2" />
              View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
