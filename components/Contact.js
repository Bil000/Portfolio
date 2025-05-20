import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setIsError(false);
      
      try {
        // Send form data to our API route
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formState),
        });
        
        const data = await response.json();
        
        if (response.ok) {
          // Form submission successful
          setSubmitMessage(data.message || 'Thank you for your message! I will get back to you soon.');
          setFormState({ name: '', email: '', message: '' });
          setIsError(false);
        } else {
          // Form submission failed
          setSubmitMessage(data.message || 'Something went wrong. Please try again.');
          setIsError(true);
        }
      } catch (error) {
        // Error submitting form
        console.error('Error submitting form:', error);
        setSubmitMessage('Network error. Please check your connection and try again.');
        setIsError(true);
      } finally {
        setIsSubmitting(false);
        
        // Clear message after 5 seconds
        setTimeout(() => {
          setSubmitMessage('');
        }, 5000);
      }
    }
  };

  return (
    <section id="contact" className="section-padding gradient-bg text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <svg
          className="absolute right-0 top-0 h-full w-1/2 transform translate-x-1/4 text-white text-opacity-5"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
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
            Get In Touch
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
            I'm currently available for freelance work and exciting opportunities.
            Whether you have a project in mind or just want to connect, feel free to reach out!
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            
            {submitMessage && (
              <div className={`mb-6 p-4 rounded-lg text-white ${isError ? 'bg-red-500 bg-opacity-20' : 'bg-green-500 bg-opacity-20'}`}>
                {submitMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className={`w-full p-3 bg-white/5 border ${
                    errors.name ? 'border-red-400' : 'border-white/20'
                  } rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-colors`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className={`w-full p-3 bg-white/5 border ${
                    errors.email ? 'border-red-400' : 'border-white/20'
                  } rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-colors`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full p-3 bg-white/5 border ${
                    errors.message ? 'border-red-400' : 'border-white/20'
                  } rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-colors`}
                  placeholder="How can I help you?"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Email</h4>
                    <a 
                      href="mailto:clebiodesouza22@gmail.com" 
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      clebiodesouza22@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Phone</h4>
                    <a 
                      href="tel:+353838261019" 
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      (+353) 0838261019
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <FaLinkedin className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/clebio-de-souza/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      /clebio-de-souza
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <FaGithub className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">GitHub</h4>
                    <a 
                      href="https://github.com/Bil000" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      github.com/Bil000
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Availability</h3>
              <p className="text-blue-100 mb-4">
                I'm currently available for part-time work on weekdays and weekends.
                My work approach is flexible, allowing me to adapt to various project needs.
              </p>
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="font-medium mb-2">Quick Response Time</h4>
                <p className="text-sm text-blue-100">
                  I typically respond to inquiries within 24 hours. For urgent matters,
                  please mention "Urgent" in your message subject.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
