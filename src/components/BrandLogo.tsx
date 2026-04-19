import { motion } from 'motion/react';

export const BrandLogo = () => {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center">
      {/* Structural Background Glows - Muted for focus */}
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[90%] h-[90%] bg-accent-blue/10 blur-[100px] rounded-full"
      />

      {/* Main Logo Architecture */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full h-full glass border-border-thin rounded-[40px] flex flex-col items-center justify-center overflow-hidden shadow-2xl bg-white/[0.02]"
      >
        {/* Technical Grid Overlay - Subtle for that "engineered" feel */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-50" />
        
        {/* Monogram Section */}
        <div className="relative flex flex-col items-center">
          <div className="flex items-baseline relative">
            <motion.h2 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-[9rem] md:text-[13rem] font-black tracking-tighter leading-none text-white selection:bg-accent-blue"
            >
              R
            </motion.h2>
            <motion.h2 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-[9rem] md:text-[13rem] font-black tracking-tighter leading-none text-accent-blue selection:bg-white -ml-6 md:-ml-8"
            >
              B
            </motion.h2>
          </div>
          
          {/* Precise Divider */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 140 }}
            transition={{ delay: 1, duration: 1, ease: "circOut" }}
            className="h-[2px] bg-linear-to-r from-transparent via-accent-cyan to-transparent mb-6"
          />
          
          {/* Professional Wordmark */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col items-center gap-1"
          >
            <span className="text-[14px] md:text-[16px] font-black tracking-[10px] uppercase text-white/90">
              BEOTRA
            </span>
            <span className="text-[9px] font-bold tracking-[8px] uppercase text-accent-cyan/80">
              SYSTEMS & DESIGN
            </span>
          </motion.div>
        </div>

        {/* Polished Glass Reflection */}
        <motion.div 
          animate={{ x: [-600, 600] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 6, ease: "linear" }}
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/[0.03] to-transparent skew-x-[25deg] pointer-events-none"
        />
        
        {/* Corner Accents - Engineering Markers */}
        <div className="absolute top-8 left-8 w-4 h-[1px] bg-white/20" />
        <div className="absolute top-8 left-8 w-[1px] h-4 bg-white/20" />
        <div className="absolute bottom-8 right-8 w-4 h-[1px] bg-white/20" />
        <div className="absolute bottom-8 right-8 w-[1px] h-4 bg-white/20" />
      </motion.div>

      {/* Floating Status Indicator - Subtle Tech Detail */}
      <motion.div 
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-2 -right-2 p-2 glass border-border-thin rounded-full flex items-center justify-center shadow-xl z-20"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
      </motion.div>
    </div>
  );
};

