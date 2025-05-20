import '../styles/globals.css';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (
        target &&
        target.getAttribute('href')?.startsWith('#') &&
        target.getAttribute('href') !== '#'
      ) {
        e.preventDefault();
        const id = target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust for navbar height
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Component {...pageProps} key={router?.route} />
    </AnimatePresence>
  );
}

export default MyApp;
