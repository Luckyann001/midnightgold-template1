import * as React from 'react';

// 🧞‍♂️ This is the master definition the Bot looks for
export interface Product {
  id: string | number;
  name: string;
  price: string | number;
  image_url: string;
}

interface ProductGridProps {
  // We use the local Product interface
  products: Product[]; 
}

export default function ProductGrid({ products = [] }: ProductGridProps) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      {/* 🧞‍♂️ Safety check: ensures the map only runs if products is a valid array */}
      {Array.isArray(products) && products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {products.map((p) => (
            <div key={p.id} className="group cursor-pointer flex flex-col items-center text-center">
              <div className="aspect-[3/4] w-full bg-neutral-900 border border-white/5 overflow-hidden">
                <img 
                  src={p.image_url} 
                  alt={p.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                />
              </div>
              <h3 className="mt-8 text-xl font-serif italic">{p.name}</h3>
              <p className="text-[#D4AF37] font-mono text-sm mt-2 font-bold tracking-widest">${p.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl">
          <p className="text-gray-500 italic uppercase tracking-widest text-[10px]">
            Inventory currently under curation...
          </p>
        </div>
      )}
    </section>
  );
}