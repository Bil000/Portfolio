import Head from 'next/head';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import AnimatedSection from '../components/AnimatedSection';

export default function Home() {
  // Add scroll observer for animation triggers
  useEffect(() => {
    // Preload key images for better UX
    const preloadImages = [
      'https://pixabay.com/get/geb4a66f0248fd946cbeba0044ab7d6c36c724645094ab393e16ef87c6248638b40513d208cc65f2a33e069251c1f0506ce85f0f5ae10b0c88f8036d08e85c40b_1280.jpg',
      'https://pixabay.com/get/g0f0a511a86ffc69037e4d9c5e031a3133b727cc52ee9b0c8e16d6e579789e5d9601bf6a3cac728b605d28f602985364e9bfa3e02426e63075fe0f26393011b1e_1280.jpg'
    ];
    
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <>
      <Head>
        <title>Clebio Junior | Front-End Developer</title>
        <meta name="description" content="Front-end developer portfolio showcasing skills in Next.js, Tailwind CSS, React, and web development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Background image for all sections, under everything else */}
      <div
        className="fixed inset-0 -z-10 w-full h-full"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dytmmuosl/image/upload/v1726528748/background_profile_ktqoeb.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2,
        }}
        aria-hidden="true"
      />

      <Layout>
        <Hero />
        
        <AnimatedSection>
          <About />
        </AnimatedSection>
        
        <AnimatedSection>
          <Skills />
        </AnimatedSection>
        
        <AnimatedSection>
          <Projects />
        </AnimatedSection>
        
        <AnimatedSection>
          <Experience />
        </AnimatedSection>
        
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </Layout>
    </>
  );
}
