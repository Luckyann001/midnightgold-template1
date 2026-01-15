import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  // We wrap the content in a standard div to ensure the hooks have a stable parent
  return (
    <header className="py-32 text-center border-b border-white/5 bg-gradient-to-b from-black to-[#050505]">
      <div className="max-w-4xl mx-auto px-4">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] uppercase tracking-[0.5em] text-gray-500 mb-6 font-bold"
        >
          {subtitle}
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-7xl font-serif italic mb-8 leading-tight gold-gradient-text"
        >
          {title}
        </motion.h2>
        
        <div className="h-[1px] bg-[#D4AF37] w-24 mx-auto" />
      </div>
    </header>
  );
}