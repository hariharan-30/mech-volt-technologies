const TechnologyCard = ({ tech }) => {
    const Icon = tech.icon;
  
    return (
      <div className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#005BAC] hover:shadow-xl transition duration-300">
  
        <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-[#005BAC] transition">
  
          <Icon className="text-3xl text-[#005BAC] group-hover:text-white" />
  
        </div>
  
        <h3 className="text-2xl font-bold mt-6 text-slate-900">
          {tech.title}
        </h3>
  
        <p className="text-slate-600 leading-8 mt-4">
          {tech.description}
        </p>
  
      </div>
    );
  };
  
  export default TechnologyCard;