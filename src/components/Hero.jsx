// src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-black">
      {/* Background Image with a Gradient Overlay for Contrast */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=2000')" }}
      />
      
      {/* The "Contrast Layer": ensures the menu and text are visible */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

      {/* Content Layer */}
      <div className="relative z-20 max-w-4xl space-y-4">
        <h1 className="text-6xl md:text-8xl font-serif italic gold-gradient-text tracking-tighter leading-none">
          Timeless Elegance
        </h1>
        <h2 className="text-2xl md:text-4xl font-serif text-white opacity-95 italic">
          The Essentials
        </h2>
        <p className="text-gray-300 text-[10px] md:text-xs uppercase tracking-[0.5em] font-light pt-4">
          Manifesting the future of bespoke luxury.
        </p>

        <a 
          href="#products" 
          className="inline-block mt-10 px-12 py-3 border border-[#D4AF37] text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#D4AF37] hover:text-black transition-all duration-500"
        >
          Explore Collection
        </a>
      </div>
    </section>
  );
}