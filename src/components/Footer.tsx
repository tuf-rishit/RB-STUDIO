import { motion } from 'motion/react';
import { Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
           <a href="#home" className="text-xl font-display font-black tracking-tighter accent-text">RB / STUDIO</a>
           <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Engineering Intelligent Web Systems & Data-Driven Insights</p>
        </div>

        <div className="flex gap-6">
          {[
            { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/rishit-beotra-a28524346?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
            { icon: <Instagram size={20} />, href: 'https://www.instagram.com/rishit_beotra?igsh=MW85bHcyNmw2dzB5MA==&utm_source=qr' },
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#A855F7' }}
              className="text-text-muted transition-colors hover:text-white"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">
          Personal Portfolio © {currentYear}
        </div>
      </div>
    </footer>
  );
};
