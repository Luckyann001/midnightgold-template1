import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid, { Product } from './components/ProductGrid'; // 🧞‍♂️ Import the type from the Grid
import Footer from './components/Footer';

interface GlobalProps {
  storeName?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  products?: Product[];
}

interface AppProps {
  globalProps?: GlobalProps;
}

export default function App({ globalProps = {} }: AppProps) {
  const storeName = globalProps.storeName || "Midas & Co.";
  const heroTitle = globalProps.heroTitle || "Excellence in Every Detail.";
  const heroSubtitle = globalProps.heroSubtitle || "ESTABLISHED 2026";

  const samples: Product[] = [
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

  // Force the type to ensure it never defaults to 'never[]'
  const displayProducts: Product[] = (globalProps.products && globalProps.products.length > 0)
    ? (globalProps.products as Product[]) 
    : samples;

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