import { motion } from 'motion/react';
import { EXPERIENCE } from '../constants/data';

export const Experience = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <h4 className="text-accent-pink font-bold tracking-[0.2em] uppercase text-xs mb-4">— My Journey</h4>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
            Creative <span className="accent-text italic">Journey</span> & Experience
          </h2>
          <p className="text-text-muted mb-8 leading-relaxed font-medium">
            Collaborating with boutique startups and global agencies to craft digital solutions that bridge the gap between aesthetics and raw performance.
          </p>
          
          <div className="flex flex-col gap-4">
             <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-accent-purple group-hover:scale-110 transition-transform">
                   <div className="w-2 h-2 rounded-full bg-accent-purple" />
                </div>
                <span className="font-bold text-white uppercase tracking-widest text-[10px]">Strategic Problem Solving</span>
             </div>
             <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-accent-pink group-hover:scale-110 transition-transform">
                   <div className="w-2 h-2 rounded-full bg-accent-pink" />
                </div>
                <span className="font-bold text-white uppercase tracking-widest text-[10px]">User-centric logic</span>
             </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-4 relative">
          {/* Vertical Line */}
          <div className="absolute left-[24px] top-6 bottom-6 w-px bg-linear-to-b from-accent-purple via-accent-pink to-transparent opacity-10 h-full hidden md:block" />

          {EXPERIENCE.map((item, idx) => (
            <motion.div
              key={item.role + item.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative md:pl-16 group"
            >
              {/* Point */}
              <div className="absolute left-0 top-6 w-12 h-12 rounded-lg glass flex items-center justify-center z-10 hidden md:flex group-hover:border-accent-purple/50 transition-colors">
                <span className="text-[10px] font-black text-white">{idx + 1}</span>
              </div>

              <div className="p-8 rounded-[24px] glass group-hover:bg-white/5 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-[18px] font-bold text-white tracking-tight">{item.role}</h3>
                    <p className="accent-text font-bold text-xs uppercase tracking-wider">{item.company}</p>
                  </div>
                  <span className="text-[10px] font-black bg-white/5 px-3 py-1 rounded-lg text-text-muted uppercase tracking-tighter">
                    {item.duration}
                  </span>
                </div>
                <p className="text-text-muted text-[13px] leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
