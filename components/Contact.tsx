import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for reaching out! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-32 bg-brand-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-brand-accent/5 to-transparent rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl md:text-8xl font-serif mb-8 leading-none">
              Let's create <br />
              <span className="text-brand-gray text-stroke">magic.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-md">
              Got a project in mind? Looking for a design partner? 
              Drop me a line and let's discuss how we can elevate your brand.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-brand-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-1">Email</h4>
                  <p className="text-xl font-medium">hello@graphicgod.studio</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-brand-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-1">Studio</h4>
                  <p className="text-xl font-medium">123 Design District, New York</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-brand-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-1">Phone</h4>
                  <p className="text-xl font-medium">+1 (555) 000-1234</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2 group-focus-within:text-brand-accent transition-colors">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-brand-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="group">
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2 group-focus-within:text-brand-accent transition-colors">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-brand-accent transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div className="group">
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2 group-focus-within:text-brand-accent transition-colors">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-brand-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-brand-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-brand-accent text-brand-black font-bold text-lg rounded-lg hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;