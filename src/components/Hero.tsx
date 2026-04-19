import { motion } from 'motion/react';
import { MousePointer2, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-display font-black leading-[1.1] mb-8">
            Hello, I’m <br />
            <span className="accent-text">
              Rishit Beotra
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-muted font-medium mb-10 max-w-lg leading-relaxed">
            Web Developer & Creative Strategist specializing in building high-conversion Shopify stores and bespoke WordPress experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-lg bg-linear-to-r from-accent-purple via-accent-pink to-accent-blue text-white font-bold inline-flex items-center gap-2 shadow-[0_10px_20px_rgba(168,85,247,0.4)] transition-all"
            >
              Let's Talk <ArrowRight size={20} />
            </motion.a>
            <Link
              to="/resume"
              className="px-10 py-4 rounded-lg glass border-border-thin text-white font-bold inline-flex items-center gap-2 backdrop-blur-md hover:scale-105 transition-transform"
            >
              View Full CV <Download size={20} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <BrandLogo />
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
        <span className="text-[10px] uppercase font-bold tracking-widest">Scroll Down</span>
      </motion.div>
    </section>
  );
};
