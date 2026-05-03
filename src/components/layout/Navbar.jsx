// src/components/layout/Navbar.jsx
export const Navbar = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-0 w-full z-[100] border-b border-slate-200 shadow-[0_4_20px_rgba(0,0,0,0.03)]">
      <div className="flex justify-between items-center h-16 px-8 max-w-screen-2xl mx-auto w-full">
        <div className="text-xl font-bold tracking-tighter text-[#0052D4]">As Tecnologías</div>
        <div className="hidden md:flex items-center gap-8">
          <a className="font-['Inter'] text-sm font-medium tracking-tight text-slate-500 hover:text-[#0052D4] transition-colors" href="#">Catalog</a>
          <a className="font-['Inter'] text-sm font-medium tracking-tight text-slate-500 hover:text-[#0052D4] transition-colors" href="#">My Learning</a>
          <a className="font-['Inter'] text-sm font-medium tracking-tight text-slate-500 hover:text-[#0052D4] transition-colors" href="#">Resources</a>
          <a className="font-['Inter'] text-sm font-medium tracking-tight text-[#0052D4] border-b-2 border-[#0052D4] pb-1" href="#">Enterprise</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-[#0052D4] text-white px-6 py-2 rounded-lg font-medium transition-transform active:scale-95">Sign In</button>
        </div>
      </div>
    </nav>
  );
};