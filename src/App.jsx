import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
function App() {
  return (
    <main className="bg-obsidian min-h-screen selection:bg-gold-leaf selection:text-black">
      {/* 1. NAVIGATION: Fixed blurred bar */}
      <Navbar />

      {/* 2. HERO: Cinematic luxury entrance */}
      <Hero />

      {/* 3. PRODUCT GRID: Glassmorphism display */}
      <div id="collections" className="relative z-10">
        <ProductGrid />
      </div>

      {/* 4. FOOTER: Concierge & Newsletter */}
      <Footer />
      
      {/* Subtle Global Vignette for depth */}
      <div className="fixed inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] z-40" />
    </main>
  );
}

export default App;