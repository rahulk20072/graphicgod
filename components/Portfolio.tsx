import React from 'react';
import { Project } from '../types';
import { ExternalLink, Eye } from 'lucide-react';

const projects: Project[] = [
  { id: 1, title: 'Neon Horizon', category: 'Brand Identity', imageUrl: 'https://picsum.photos/600/800?random=1', size: 'large' },
  { id: 2, title: 'Vortex UI', category: 'Web Design', imageUrl: 'https://picsum.photos/600/400?random=2', size: 'small' },
  { id: 3, title: 'Ethereal', category: 'Art Direction', imageUrl: 'https://picsum.photos/600/600?random=3', size: 'medium' },
  { id: 4, title: 'Cyber Soul', category: 'Illustration', imageUrl: 'https://picsum.photos/600/700?random=4', size: 'medium' },
  { id: 5, title: 'Mono Type', category: 'Typography', imageUrl: 'https://picsum.photos/600/500?random=5', size: 'small' },
  { id: 6, title: 'Flux App', category: 'Product Design', imageUrl: 'https://picsum.photos/600/800?random=6', size: 'large' },
];

const Portfolio: React.FC = () => {
  return (
    <section className="py-32 bg-brand-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
             <h2 className="text-5xl md:text-7xl font-serif mb-4">Selected Works</h2>
             <div className="h-1 w-20 bg-brand-accent"></div>
          </div>
          <p className="text-gray-400 mt-6 md:mt-0 max-w-sm text-right">
            A curation of projects defining the visual language of modern brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative overflow-hidden rounded-sm cursor-pointer ${
                project.size === 'large' ? 'row-span-2' : ''
              } ${index % 3 === 1 ? 'md:mt-12' : ''}`}
            >
              <div className="relative w-full h-full overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-brand-accent text-xs uppercase tracking-widest mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {project.category}
                  </span>
                  <div className="flex justify-between items-end">
                    <h3 className="text-3xl font-serif text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                      <button className="p-2 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-colors">
                        <ExternalLink size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="text-sm font-bold uppercase tracking-widest border-b border-white/30 pb-1 hover:text-brand-accent hover:border-brand-accent transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;