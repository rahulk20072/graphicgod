import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'portfolio', 'services', 'contact'];
      // Trigger selection when the section is 1/3rd up the screen, or at least past the header
      const scrollPosition = window.scrollY + (window.innerHeight / 3);

      // Special check: if we are at the bottom of the page, activate the last section
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
        setActiveSection('contact');
        return;
      }
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break; 
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to set initial active section
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black relative overflow-x-hidden">
      <Header activeSection={activeSection} />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        
        <div id="portfolio">
          <Portfolio />
        </div>
        
        <div id="services">
          <Services />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;