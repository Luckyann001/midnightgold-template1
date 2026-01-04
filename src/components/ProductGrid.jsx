import React from 'react';

const PRODUCTS = [
  { id: 1, name: "Obsidian Chrono", price: "12,500", img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1000" },
  { id: 2, name: "Gold Leaf Essence", price: "850", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000" },
  { id: 3, name: "Midnight Silhouette", price: "4,200", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000" },
];

export default function ProductGrid() {
  return (
    <section id="products" className="bg-obsidian py-24 px-6">
      <div className="max-w-6xl mx-auto"> {/* The Container that stops stretching */}
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.4em] text-gold-leaf uppercase mb-2">Curated Selection</p>
          <h2 className="text-4xl font-serif italic text-white">The Essentials</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="group flex flex-col items-center bg-white/5 p-6 border border-white/10 hover:border-gold-leaf/50 transition-all duration-500 shadow-gold-glow">
              <div className="aspect-[3/4] w-full overflow-hidden mb-6 rounded-sm">
                <img src={p.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={p.name} />
              </div>
              <h4 className="text-xl font-serif italic text-white mb-2">{p.name}</h4>
              <p className="text-gold-leaf text-sm tracking-widest mb-6 font-bold">${p.price}</p>
              <button className="w-full py-3 border border-gold-leaf/40 text-gold-leaf text-[10px] uppercase tracking-widest font-bold hover:bg-gold-leaf hover:text-black transition-all">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}