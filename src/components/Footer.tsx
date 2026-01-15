import * as React from 'react';
// 🧞‍♂️ Define the interface so TypeScript understands the storeName prop
interface FooterProps {
  storeName: string;
}

export default function Footer({ storeName }: FooterProps) {
  return (
    <footer className="py-20 border-t border-white/5 text-center">
      <h4 className="font-serif italic text-xl gold-gradient-text mb-4">{storeName}</h4>
      <p className="text-[9px] uppercase tracking-[0.5em] text-gray-600">
        Powered by ShopGenie Spark — Elite Artisan Edition
      </p>
    </footer>
  );
}