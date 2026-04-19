import { motion } from 'motion/react';

export const BackgroundEffect = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-bg-dark">
      {/* Mesh Gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 40%)
          `
        }}
      />
      
      {/* Dynamic Glows */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[10%] left-[30%] w-[60%] h-[60%] rounded-full bg-accent-purple/10 blur-[150px]"
      />
    </div>
  );
};
