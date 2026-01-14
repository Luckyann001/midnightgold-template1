export default function Navbar({ storeName }) {
  return (
    <nav className="flex justify-between items-center px-10 py-8 border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0 z-50">
      <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500">Collection</div>
      <h1 className="text-2xl font-serif italic gold-gradient-text leading-none">{storeName}</h1>
      <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-leaf">Cart (0)</div>
    </nav>
  );
}