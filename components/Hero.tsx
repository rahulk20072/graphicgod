import React from 'react';
import { ArrowDown, MoveRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
        {/* Grain overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
            <span className="text-xs uppercase tracking-widest text-gray-300">Available for freelance</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium leading-[0.9] mb-8 tracking-tight">
            Design that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">Defies Gravity</span>.
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-12 font-light">
            I craft digital experiences that merge <span className="text-brand-accent">artistic intuition</span> with strategic precision. Elevate your brand beyond the noise.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#portfolio"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-brand-accent transition-colors duration-300"
            >
              View Selected Works
              <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="flex items-center justify-center gap-3 px-8 py-4 border border-white/20 rounded-full font-bold text-lg hover:bg-white/10 transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Scroll</span>
        <ArrowDown className="w-4 h-4 text-brand-accent" />
      </div>
    </section>
  );
};

export default Hero;