import React, { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Languages from './components/sections/Languages';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

import CVPage from './pages/CVPage';

function App() {
  const path = window.location.pathname;

  useEffect(() => {
    if (path === '/cv') return; // Don't run portfolio observers on CV page

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('section').forEach((el) => {
      el.classList.add('reveal'); // Ensure class is present
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [path]);

  if (path === '/cv') {
    return <CVPage />;
  }

  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Languages />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
