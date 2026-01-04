import React from 'react';

const PRODUCTS = [
  { id: 1, name: "Obsidian Chrono", price: "12,500", img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1000" },
  { id: 2, name: "Gold Leaf Essence", price: "850", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000" },
  { id: 3, name: "Midnight Silhouette", price: "4,200", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000" },
];

export default function ProductGrid() {
  return (
    <section id="products" className="bg-[#050505] py-24 px-6">
      <div className="max-w-6xl mx-auto"> {/* This centers the products */}
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase mb-2">Curated Selection</p>
          <h2 className="text-4xl font-serif italic text-white">The Essentials</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="group relative bg-[#0a0a0a] border border-white/5 p-6 rounded-sm hover:border-[#D4AF37]/50 transition-all duration-500 shadow-2xl">
              <div className="aspect-[3/4] w-full bg-neutral-900 mb-6 overflow-hidden">
                <img src={p.img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt={p.name} />
              </div>
              <div className="text-center">
                <h4 className="text-xl font-serif italic text-white mb-2">{p.name}</h4>
                <p className="text-[#D4AF37] text-sm tracking-widest mb-8">${p.price}</p>
                <button className="w-full py-3 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}