import { motion } from 'framer-motion';

export default function Hero({ title, subtitle }) {
  return (
    <header className="py-32 text-center border-b border-white/5 bg-gradient-to-b from-black to-[#050505]">
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[10px] uppercase tracking-[0.5em] text-gray-500 mb-6 font-bold"
      >
        {subtitle}
      </motion.p>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-7xl font-serif italic mb-8 leading-tight max-w-4xl mx-auto px-4 gold-gradient-text"
      >
        {title}
      </motion.h2>
      
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: 100 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="h-[1px] bg-[#D4AF37] mx-auto"
      />
    </header>
  );
}