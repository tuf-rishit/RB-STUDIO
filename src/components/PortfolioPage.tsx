import { motion } from 'motion/react';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { PROJECTS } from '../constants/data';
import { Link } from 'react-router-dom';

export const PortfolioPage = () => {
  return (
    <div className="pt-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link to="/" className="inline-flex items-center gap-2 text-accent-pink font-bold uppercase tracking-widest text-[10px] mb-6 hover:text-white transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
            Curated <span className="accent-text">Portfolio</span>
          </h1>
          <p className="text-text-muted text-lg font-medium max-w-xl">
            A comprehensive collection of my professional work, ranging from complex data analysis to premium web experiences.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative"
          >
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden glass mb-6 group-hover:shadow-[0_20px_50px_rgba(30,30,30,0.4)] transition-all duration-500">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-linear-to-t from-bg-dark via-bg-dark/20 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-xs font-bold text-accent-pink uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-2xl font-black text-white mb-6 leading-tight">{project.title}</h3>
                <motion.a
                  href={project.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-lg bg-linear-to-r from-accent-purple to-accent-pink flex items-center justify-center text-white"
                >
                  <ExternalLink size={20} />
                </motion.a>
              </div>
            </div>

            <div className="flex justify-between items-start px-4">
              <div>
                 <h3 className="text-[18px] font-bold text-white mb-1 group-hover:accent-text transition-colors uppercase tracking-tight">{project.title}</h3>
                 <span className="text-[11px] text-text-muted uppercase tracking-widest font-bold">{project.category}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
