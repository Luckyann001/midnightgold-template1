import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12 px-12 text-gray-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-8">
          <h2 className="text-4xl font-serif italic gold-gradient-text tracking-tighter">Midas & Co.</h2>
          <p className="text-xs tracking-[0.2em] font-light">SUBSCRIBE FOR EARLY ACCESS</p>
          <div className="border-b border-gray-800 flex py-2">
            <input className="bg-transparent outline-none w-full text-white text-xs" placeholder="ENTER YOUR EMAIL" />
          </div>
        </div>
        <div className="flex gap-20 text-[10px] font-bold uppercase tracking-widest">
          <div className="space-y-4">
            <p className="text-[#D4AF37]">The Brand</p>
            <p>Our Story</p>
            <p>Bespoke</p>
          </div>
          <div className="space-y-4">
            <p className="text-[#D4AF37]">Legal</p>
            <p>Privacy</p>
            <p>Terms</p>
          </div>
        </div>
      </div>
    </footer>
  );
}