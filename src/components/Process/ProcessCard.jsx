const ProcessCard = ({ step }) => {
    const Icon = step.icon;
  
    return (
      <div className="relative group">
  
        {/* Vertical Line */}
        <div className="hidden lg:block absolute left-10 top-20 h-full w-0.5 bg-slate-200"></div>
  
        <div className="relative flex gap-6">
  
          {/* Circle */}
  
          <div className="relative z-10 w-20 h-20 rounded-full bg-[#005BAC] flex items-center justify-center shadow-xl group-hover:scale-110 duration-300">
  
            <Icon className="text-white text-3xl" />
  
          </div>
  
          {/* Content */}
  
          <div>
  
            <span className="text-orange-500 font-bold text-lg">
  
              {step.id}
  
            </span>
  
            <h3 className="text-2xl font-bold mt-2">
  
              {step.title}
  
            </h3>
  
            <p className="text-slate-600 leading-8 mt-3">
  
              {step.description}
  
            </p>
  
          </div>
  
        </div>
  
      </div>
    );
  };
  
  export default ProcessCard;