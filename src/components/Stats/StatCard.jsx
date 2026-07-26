const StatCard = ({ item }) => {
    const Icon = item.icon;
  
    return (
      <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-orange-500 transition-all duration-300">
  
        <div className="w-16 h-16 mx-auto rounded-full bg-white flex items-center justify-center">
  
          <Icon className="text-3xl text-[#005BAC]" />
  
        </div>
  
        <h2 className="text-5xl font-bold text-white mt-6">
          {item.number}
        </h2>
  
        <p className="text-slate-200 mt-3">
          {item.title}
        </p>
  
      </div>
    );
  };
  
  export default StatCard;