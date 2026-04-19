import { motion } from 'motion/react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants/data';
import { Link } from 'react-router-dom';

export const Projects = () => {
  return (
    <section id="projects" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-accent-pink font-bold tracking-[0.2em] uppercase text-xs mb-4">— My Case Studies</h4>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Selected <span className="accent-text italic">Gallery</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/portfolio"
              className="group flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-accent-cyan hover:text-white transition-colors"
            >
              Explore All Projects <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden glass mb-6 group-hover:shadow-[0_20px_50px_rgba(30,30,30,0.4)] transition-all duration-500">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-bg-dark via-bg-dark/20 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-xs font-bold text-accent-pink uppercase tracking-widest mb-2">{project.category}</span>
                  <h3 className="text-2xl font-black text-white mb-6 leading-tight">{project.title}</h3>
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-lg bg-linear-to-r from-accent-purple to-accent-pink flex items-center justify-center text-white shadow-lg"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>

              <div className="flex justify-between items-start px-4">
                <div>
                   <h3 className="text-[16px] font-bold text-white mb-1 group-hover:accent-text transition-colors uppercase tracking-tight">{project.title}</h3>
                   <span className="text-[11px] text-text-muted uppercase tracking-widest font-bold">{project.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
