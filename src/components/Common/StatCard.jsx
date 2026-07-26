const StatCard = ({ number, label, dark = false, className = "" }) => {
  return (
    <div
      className={`
          group
          rounded-3xl
          border
          p-8
          text-center
          transition-all
          duration-500
          hover:-translate-y-2
          hover:shadow-2xl
          ${
            dark
              ? "border-white/10 bg-white/10 backdrop-blur text-white hover:bg-white/20"
              : "border-slate-200 bg-white hover:border-orange-500"
          }
          ${className}
        `}
    >
      <h3
        className={`text-4xl font-extrabold ${
          dark ? "text-orange-400" : "text-[#005BAC]"
        }`}
      >
        {number}
      </h3>

      <p
        className={`mt-3 text-lg ${dark ? "text-slate-300" : "text-slate-600"}`}
      >
        {label}
      </p>
    </div>
  );
};

export default StatCard;
