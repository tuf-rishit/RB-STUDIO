import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

const TAGS = ['Web Design', 'Shopify', 'WordPress', 'Branding', 'UI/UX', 'Landing Page'];

export const Contact = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-accent-purple font-bold tracking-[0.2em] uppercase text-xs mb-4">— Get in touch</h4>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Say Hi! and tell me <br />
              <span className="accent-text italic">your idea</span>
            </h2>
            <p className="text-text-muted text-lg mb-12 max-w-md font-medium">
              Have a project in mind? Let's build something extraordinary together.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                 <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-white group-hover:accent-text transition-all">
                    <Send size={24} />
                 </div>
                 <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-1">Email Me</p>
                    <p className="text-lg font-bold text-white uppercase tracking-tighter">rishitbeotra@gmail.com</p>
                 </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[32px] glass relative"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-4">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-border-thin rounded-xl px-6 py-4 outline-hidden focus:border-accent-purple transition-colors text-white text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-4">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-border-thin rounded-xl px-6 py-4 outline-hidden focus:border-accent-purple transition-colors text-white text-sm"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-4">What's in your mind?</label>
                <div className="flex flex-wrap gap-2">
                  {TAGS.map(tag => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className={`px-4 py-2 rounded-lg text-[10px] font-bold transition-all border uppercase tracking-widest ${
                        selectedTags.includes(tag) 
                          ? 'bg-linear-to-r from-accent-purple to-accent-pink border-transparent text-white shadow-lg' 
                          : 'bg-white/5 border-border-thin text-text-muted hover:border-white/20'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-4">Message</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell me more about your project..."
                  className="w-full bg-white/5 border border-border-thin rounded-xl px-6 py-4 outline-hidden focus:border-accent-purple transition-colors text-white resize-none text-sm"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={submitted}
                className="w-full py-5 rounded-xl bg-linear-to-r from-accent-purple via-accent-pink to-accent-blue text-white font-black text-sm uppercase tracking-[4px] shadow-[0_10px_30px_rgba(168,85,247,0.3)] transition-all flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>Message Sent <CheckCircle2 size={24} /></>
                ) : (
                  <>Send Message <Send size={20} /></>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
