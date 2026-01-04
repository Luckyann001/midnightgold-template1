import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-black/40 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-4 cursor-pointer text-white" onClick={() => setIsOpen(true)}>
          <Menu className="text-gold-leaf" size={20} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Menu</span>
        </div>
        <h2 className="text-2xl font-serif italic gold-gradient-text">Midas & Co.</h2>
        <div className="w-[80px]"></div> {/* Spacer */}
      </nav>

      <div className={`fixed inset-0 z-[100] transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/95 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsOpen(false)} />
        <div className={`absolute left-0 top-0 h-full w-full max-w-[350px] bg-obsidian border-r border-white/10 p-12 transition-transform duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <X className="text-white mb-16 cursor-pointer" onClick={() => setIsOpen(false)} />
          <nav className="flex flex-col gap-8">
            {['Collections', 'Bespoke', 'Our Story'].map((item) => (
              <a key={item} href="#" className="text-4xl font-serif italic text-white hover:text-gold-leaf transition-all">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}