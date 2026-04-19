import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="w-20 h-20 rounded-full glass border-white/10 flex items-center justify-center mx-auto mb-12 text-accent-purple"
        >
          <Quote size={32} />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-display font-medium text-white mb-12 leading-relaxed"
        >
          “Working with Rishit was a game-changer for our Shopify store. <span className="italic text-accent-purple">The attention to detail</span> and technical expertise brought our brand to a whole new level of digital excellence.”
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <h5 className="text-xl font-bold text-white mb-1">Samriddhi Nagdev</h5>
          <p className="text-sm text-gray-400 font-semibold tracking-widest uppercase">Founder & Creative Head</p>
        </motion.div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-purple/10 blur-[120px] -z-10 rounded-full" />
    </section>
  );
};
