// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

export default function App({ globalProps = {} }) {
  // 🧞‍♂️ ARTISAN LOGIC: If the entrepreneur provides data, use it. 
  // Otherwise, show these high-end examples to keep the store beautiful.
  
  const storeName = globalProps.storeName || "Midas & Co.";
  const heroTitle = globalProps.heroTitle || "Excellence in Every Detail.";
  const heroSubtitle = globalProps.heroSubtitle || "ESTABLISHED 2026";

  const displayProducts = globalProps.products?.length > 0 
    ? globalProps.products 
    : [
        { 
          id: "sample-1", 
          name: "The Obsidian Chronograph", 
          price: "1,250", 
          image_url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000" 
        },
        { 
          id: "sample-2", 
          name: "Gold Leaf Fountain Pen", 
          price: "450", 
          image_url: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=1000" 
        }
      ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar storeName={storeName} />
      {/* Pass the editable text to the Hero */}
      <Hero title={heroTitle} subtitle={heroSubtitle} />
      <main>
        {/* The Grid will show samples until the entrepreneur adds their first product */}
        <ProductGrid products={displayProducts} />
      </main>
      <Footer storeName={storeName} />
    </div>
  );
}