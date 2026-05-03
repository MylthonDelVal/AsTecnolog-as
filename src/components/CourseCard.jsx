export const CourseCard = ({ title, level, progress, image }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all group">
      <div className="relative h-40 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded text-[10px] font-bold uppercase text-blue-600">
          {level}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-slate-800 mb-4 line-clamp-2 h-12">{title}</h3>
        
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-medium text-slate-500">
            <span>Progreso</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-blue-600 h-full rounded-full transition-all duration-700" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        <button className="w-full mt-5 py-2.5 bg-slate-900 text-white rounded-xl font-semibold text-sm hover:bg-blue-600 transition-colors">
          Continuar aprendiendo
        </button>
      </div>
    </div>
  );
};