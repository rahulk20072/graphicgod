import React from 'react';
import { PenTool, Layout, Monitor, Aperture } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Layout className="w-10 h-10" />,
      title: "UI/UX Design",
      desc: "Intuitive, user-centric interfaces designed for web and mobile applications that drive engagement.",
      tags: ["Figma", "Prototyping", "Design Systems"]
    },
    {
      icon: <PenTool className="w-10 h-10" />,
      title: "Brand Identity",
      desc: "Complete visual identity systems including logo design, typography, and brand guidelines.",
      tags: ["Logo", "Strategy", "Guidelines"]
    },
    {
      icon: <Monitor className="w-10 h-10" />,
      title: "Web Development",
      desc: "Bringing designs to life with clean, semantic code using modern frameworks and best practices.",
      tags: ["React", "Tailwind", "Motion"]
    },
    {
      icon: <Aperture className="w-10 h-10" />,
      title: "Art Direction",
      desc: "Strategic visual leadership for campaigns, photoshoots, and digital content creation.",
      tags: ["Concept", "Photography", "Styling"]
    }
  ];

  return (
    <section className="py-32 bg-brand-dark border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <span className="text-brand-accent uppercase tracking-widest text-sm font-semibold mb-4 block">What I Do</span>
          <h2 className="text-5xl md:text-6xl font-serif max-w-3xl leading-tight">
            Comprehensive design solutions for the bold and ambitious.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-accent/30 transition-all duration-300 rounded-lg flex flex-col h-full"
            >
              <div className="mb-8 text-brand-accent group-hover:scale-110 transition-transform duration-300 origin-left">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;