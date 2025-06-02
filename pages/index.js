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
