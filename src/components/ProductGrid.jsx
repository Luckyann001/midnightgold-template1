// src/components/ProductGrid.jsx
export default function ProductGrid({ products = [] }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {products.map((p) => (
            <div key={p.id} className="group cursor-pointer flex flex-col items-center text-center">
              <div className="aspect-[3/4] w-full bg-neutral-900 border border-white/5 overflow-hidden group-hover:border-gold-leaf/30 transition-all duration-700">
                <img 
                  src={p.image_url} 
                  alt={p.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                />
              </div>
              <h3 className="mt-8 text-xl font-serif italic">{p.name}</h3>
              <p className="text-gold-leaf font-mono text-sm mt-2 font-bold tracking-widest">
                ${p.price}
              </p>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State: Shown if the entrepreneur removes all products */
        <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl">
          <p className="text-gray-500 italic uppercase tracking-widest text-[10px]">
            Inventory currently under curation...
          </p>
        </div>
      )}
    </section>
  );
}