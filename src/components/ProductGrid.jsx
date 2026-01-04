// src/components/ProductGrid.jsx
import React from 'react';

const PRODUCTS = [
  { id: 1, name: "Obsidian Chrono", price: "12,500" },
  { id: 2, name: "Gold Leaf Essence", price: "850" },
  { id: 3, name: "Midnight Silhouette", price: "4,200" },
];

export default function ProductGrid() {
  return (
    <section className="bg-obsidian py-32 px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif italic gold-gradient-text mb-16 text-center">The Essentials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative bg-white/5 border border-white/10 p-8 rounded-sm hover:shadow-gold-glow transition-all duration-500">
              <div className="aspect-[4/5] bg-neutral-900 mb-6 overflow-hidden">
                {/* Product Image placeholder with a hover zoom effect */}
                <div className="w-full h-full bg-neutral-800 group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h4 className="text-xl font-serif italic text-white group-hover:text-gold-leaf transition-colors">{product.name}</h4>
              <p className="text-gold-leaf font-light tracking-widest mt-2">${product.price}</p>
              
              <button className="w-full mt-6 py-3 border border-gold-leaf/30 text-gold-leaf text-[10px] uppercase tracking-widest hover:bg-gold-leaf hover:text-black transition-all">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}