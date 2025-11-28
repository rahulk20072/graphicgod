import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';
import { NavItem } from '../types';

interface HeaderProps {
  activeSection: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Calculate position with offset for fixed header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      // Update URL without page reload
      window.history.pushState(null, '', href);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? 'bg-brand-black/80 backdrop-blur-md border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group"
        >
          <div className="relative">
            <Hexagon className="w-8 h-8 text-white stroke-[1.5] group-hover:text-brand-accent transition-colors duration-300" />
            <div className="absolute inset-0 bg-brand-accent/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="text-2xl font-bold tracking-tighter font-serif">
            Graphic<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-purple">God</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-sm uppercase tracking-widest font-semibold transition-colors duration-300 relative group ${
                activeSection === item.href.substring(1) 
                  ? 'text-brand-accent' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-brand-accent transform origin-left transition-transform duration-300 ${
                 activeSection === item.href.substring(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-6 py-2 border border-white/20 hover:border-brand-accent hover:bg-brand-accent/10 text-white rounded-full transition-all duration-300 text-sm font-semibold uppercase tracking-wider"
          >
            Let's Talk
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white hover:text-brand-accent transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-brand-black border-b border-white/10 overflow-hidden transition-all duration-300 ${
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <nav className="flex flex-col p-6 gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-lg font-medium transition-colors ${
                activeSection === item.href.substring(1) 
                  ? 'text-brand-accent' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;