import { FaArrowRight } from "react-icons/fa";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  link,
  className = "",
}) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-orange-500 hover:shadow-2xl ${className}`}
    >
      {/* Top Accent */}

      <div className="absolute left-0 top-0 h-1 w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />

      {/* Icon */}

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#005BAC]/10 transition group-hover:bg-orange-500">
        <Icon className="text-3xl text-[#005BAC] transition group-hover:text-white" />
      </div>

      {/* Title */}

      <h3 className="mt-8 text-2xl font-bold text-slate-900 transition group-hover:text-[#005BAC]">
        {title}
      </h3>

      {/* Description */}

      <p className="mt-5 leading-8 text-slate-600">{description}</p>

      {/* Optional Link */}

      {link && (
        <div className="mt-8 flex items-center gap-3 font-semibold text-[#005BAC] transition group-hover:text-orange-500">
          {link}

          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
