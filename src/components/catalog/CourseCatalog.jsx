const CourseCard = ({ title, category, level, duration, description, image, color, instructors }) => (
  <div className="bg-white rounded-xl border border-slate-200 shadow-[0_4_20px_rgba(0,0,0,0.03)] overflow-hidden group hover:shadow-[0_10_30px_rgba(0,0,0,0.08)] transition-all duration-300">
    <div className="h-48 bg-slate-100 overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className={`absolute top-4 left-4 ${color} backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded`}>
        {category}
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="bg-blue-50 text-[#0052D4] text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-tight">
          {level}
        </span>
        <div className="flex items-center text-slate-400">
          <span className="material-symbols-outlined text-sm mr-1">Horario</span>
          <span className="text-[12px] font-medium">{duration}</span>
        </div>
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#0052D4] transition-colors line-clamp-1">
        {title}
      </h3>
      <p className="text-sm text-slate-500 mb-6 line-clamp-2">
        {description}
      </p>
      <div className="flex items-center justify-between pt-6 border-t border-slate-100">
        <div className="flex -space-x-2">
          {instructors.map((src, i) => (
            <img key={i} className="w-8 h-8 rounded-full border-2 border-white object-cover" src={src} alt="Instructor" />
          ))}
        </div>
        <button className="text-[#0052D4] font-bold text-sm flex items-center hover:gap-2 transition-all">
          View Details <span className="material-symbols-outlined ml-1">➡️</span>
        </button>
      </div>
    </div>
  </div>
);

export const CourseCatalog = () => {
  const categories = ["All Tracks", "Office 365", "Data Analytics", "Digital Security"];
  
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-slate-900 mb-4 tracking-tight">Course Catalog</h1>
        <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
          Explore our comprehensive curriculum designed for the modern TIC specialist. Master the tools of the trade.
        </p>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          {categories.map((cat, i) => (
            <button key={cat} className={`${i === 0 ? 'bg-[#0052D4] text-white' : 'border border-slate-200 text-slate-600 hover:border-[#0052D4]'} px-5 py-2 rounded-full font-bold text-sm transition-all`}>
              {cat}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-400 font-medium">Sort by:</span>
          <select className="bg-slate-50 border-none text-sm rounded-lg py-2 pl-3 pr-8 focus:ring-2 focus:ring-blue-100 cursor-pointer">
            <option>Most Popular</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <CourseCard 
          title="Advanced Big Data Architectures"
          category="Data Analytics"
          level="Advanced"
          duration="24h 30m"
          color="bg-blue-600/90"
          description="Master complex data pipelines and distributed storage systems using professional TIC industry standards."
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuA_ovslGHdGYCSCpIAWxUrWKwEGG5elCXBCq0DKvc0YvcFHzTgDRmShv0Idn2fvrfAQQ3N9w3EbYptWFU4hCdCyPthf-yGLDrhVwLhOVvNxBSjS_mwlnF1uW_7DTlOW7uMfxAGJqv93w_syJd97UrFEVKOz0gYlc73Mxrcjm8MYmsw5kLus7P39STLOC9Pji-coqQSpHulDT5U39kVlTNp9CV0FXm_oewDoU4P9ypDnbDaT1jpKPGRuftX8Rs2asbIIscxJTmdpbBY"
          instructors={["https://lh3.googleusercontent.com/aida-public/AB6AXuCQBa5Uy_Z7Oc7QZdN-NGZJ2TnCwirBm1QPmhLuQhB3zWMZOz_u2eXAQmBC93oq1rLhO3cKZphRqDD5f-5KgiI1UmaZ4ITZQjqusKg5DfsSlHYzB5OL5koJVhWpKrNMnPLjJrcDNhIAwxhVNbQM8oqf8DW1XuQfqLFJ2_54Ruc5ensnrI6pGh2b8OrkzE1UeW0W-_BHsL5LpWvYSU1ICw18PGlngQhXsLK4FQXUJeu3nOzprB8WAe5-0kiiznppx2Uqmk9qnBuoNuc"]}
        />
        <CourseCard 
          title="Zero Trust Infrastructure"
          category="Digital Security"
          level="Specialist"
          duration="18h 15m"
          color="bg-red-600/90"
          description="Implementing robust security frameworks for enterprise environments using the latest encryption protocols."
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuAvuDRMice_FFGD1S_uHbWVMUs1j6T786LnzT4f1G8Gxf3r8uJ4ow15_TnStnoTpxIz8pVH-BLuEmZJmzYSgP3QzJ5Ia-j1V-l-IWO0FB35GC77OBwyWU_1KnOFdvfYHDYlAVrbz34B7AzvgtMIU8A7yyfceiuiBCqdydn-nJKWlv_q47q7OhgurZOt4wfoxQEBvYG9wVS5tWyUnpG_OlRf5JxbNzYi6RnRPWQKFmx8TCK3SeY_Lq1kehHgjXehxzmEOK0C0zOuFZE"
          instructors={["https://lh3.googleusercontent.com/aida-public/AB6AXuDiDAuyzJrVJkLOxR_agOFOpBHPfX2AWibTuIKkAQ6JQkQkmPdnzcYhYMc9SO7geR4VmwaNqMm2c-uWrxlOnPm5EDAdtI5gLykxwgf2y4R5mBa_04Q-5sCac4hNpl3sty1NQRmNE6_KFdxBCY47NMxBio8036I60XIrVVA9fuUDuysQ5Znf0G4gYrhxt1QvDFz_RNEvxAM_8q0ET37Ds8Z8OS4XOTbMQPz4xYWspWtMiL2LuxQEFkp8-Ui2atHb5KYjIZe5rygFim4"]}
        />
        {/* Agrega más cards según necesites */}
      </div>

      {/* Pagination */}
      <div className="mt-16 flex items-center justify-center gap-2">
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:border-[#0052D4] transition-all">
          <span className="material-symbols-outlined">➡️</span>
        </button>
        {[1, 2, 3].map(n => (
          <button key={n} className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold text-sm ${n === 1 ? 'bg-[#0052D4] text-white' : 'border border-slate-200 text-slate-600'}`}>
            {n}
          </button>
        ))}
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:border-[#0052D4] transition-all">
          <span className="material-symbols-outlined">➡️</span>
        </button>
      </div>
    </div>
  );
};