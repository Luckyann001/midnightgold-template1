import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

export default function App({ globalProps = {} }) {
  // 1. Logic for Editable Hero Text
  const heroTitle = globalProps.heroTitle || "Excellence in Every Detail.";
  const heroSubtitle = globalProps.heroSubtitle || "ESTABLISHED 2026";
  const storeName = globalProps.storeName || "Midas & Co.";

  // 2. Logic for Editable/Removable Products
  // If the entrepreneur has added ANY products, use theirs. Otherwise, show examples.
  const displayProducts = globalProps.products?.length > 0 
    ? globalProps.products 
    : [
        { 
          id: "ex-1", 
          name: "The Obsidian Watch", 
          price: "1,250", 
          image_url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000" 
        },
        { 
          id: "ex-2", 
          name: "Gold Leaf Fountain Pen", 
          price: "450", 
          image_url: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=1000" 
        }
      ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar storeName={storeName} />
      <Hero title={heroTitle} subtitle={heroSubtitle} />
      <main>
        <ProductGrid products={displayProducts} />
      </main>
      <Footer storeName={storeName} />
    </div>
  );
}