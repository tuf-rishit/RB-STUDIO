import { motion } from 'motion/react';
import { Layout, ShoppingBag, Figma, Zap } from 'lucide-react';
import { SERVICES } from '../constants/data';

const iconMap = {
  Layout: <Layout size={32} />,
  ShoppingBag: <ShoppingBag size={32} />,
  Figma: <Figma size={32} />,
  Zap: <Zap size={32} />,
};

export const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-accent-blue font-bold tracking-[0.2em] uppercase text-xs mb-4">— My Expertise</h4>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Creative <span className="accent-text italic">Specialties</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-text-muted max-w-md font-medium"
          >
            Integrating bespoke web development with data-driven research to build intelligent, futuristic digital solutions.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[24px] glass group hover:bg-white/5 transition-all cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-10 text-accent-purple border border-border-thin group-hover:bg-accent-purple/10 transition-all">
                {iconMap[service.icon as keyof typeof iconMap]}
              </div>
              <h3 className="text-lg font-bold mb-4 tracking-tight uppercase group-hover:text-accent-purple transition-colors">{service.title}</h3>
              <p className="text-text-muted leading-relaxed text-[13px] font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
