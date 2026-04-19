import { motion } from 'motion/react';
import { STATS } from '../constants/data';

export const Stats = () => {
  return (
    <section className="section-padding py-32 bg-linear-to-b from-transparent via-white/5 to-transparent">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
        {STATS.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="text-center relative group"
          >
            <div className="text-5xl md:text-6xl font-black font-display mb-2 text-white group-hover:accent-text transition-all duration-500">
              {stat.value}{stat.suffix}
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted group-hover:text-white transition-colors">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
