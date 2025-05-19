import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "NovaEdge Media",
      description: "An AI-powered marketing assistant that helps marketers automate campaigns, generate content, optimize ad spend, and gain real-time insights.",
      image: "https://pixabay.com/get/g5e29ff65b3e5ea741a6d66a1421976091d601aec670790b4f064fe5d2f4ad6d4dfffea3c7a4eea3c41e99c66f40c2a313f4e97fc173882348735653682da21ec_1280.jpg",
      technologies: ["Next.js", "Node.js", "Tailwind CSS", "AI Integration"],
      link: "https://www.novaedgemedia.com/",
      github: null,
      status: "In Development",
      featured: true
    },
    {
      title: "Neural AI",
      description: "A planned AI chatbot focused on fat loss guidance. Designed to provide personalized advice and tracking for fitness enthusiasts.",
      image: "https://pixabay.com/get/g3fb2ff9ca9a5c8afdf777557064ef6ef9da52f92cbb78123308db9ee73db54d9d81076b11ab40dd4b3e4fe6b650dd2f1196ed5ab65e217fb4d475927a684e06e_1280.jpg",
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "HTML/JavaScript"],
      link: null,
      github: "https://github.com/Bil000/Neural.AI",
      status: "Planning Phase",
      featured: false
    },
    {
      title: "Military Event Registration",
      description: "A secure login system built for military event registration with automated data-entry and real-time information updates.",
      image: "https://pixabay.com/get/g5289bf3fb4e8fce17f46c25f09f73eb123c6a08a80b225878f01708ed71f69431c137026f3ab3ead47d96d1fae412da854ef5d693bd5119d01548aef53a1d948_1280.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
      link: null,
      github: null,
      status: "Completed",
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding bg-pattern relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Projects
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
            Check out some of my recent work. These projects demonstrate my skills in
            frontend and backend development, as well as my approach to problem-solving.
          </motion.p>
        </div>

        {/* Featured Project */}
        {projects.filter(p => p.featured).map((project, index) => (
          <motion.div 
            key={index}
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="order-2 md:order-1 p-8 flex flex-col justify-center">
                  <div className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full inline-block mb-4 text-xs font-semibold">
                    FEATURED PROJECT
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2">Technologies used:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-2 gradient-bg text-white rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300"
                      >
                        Visit Website
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-50 transition-all duration-300"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    style={{ minHeight: '300px' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.filter(p => !p.featured).map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
