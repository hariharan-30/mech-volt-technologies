import { FaArrowRight } from "react-icons/fa";

const IndustryCard = ({ industry }) => {
  const Icon = industry.icon;

  return (
    <div className="group relative h-120 overflow-hidden rounded-[30px] cursor-pointer shadow-lg">
      {/* Image */}

      <img
        src={industry.image}
        alt={industry.title}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-linear-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent" />

      {/* Hover Overlay */}

      <div className="absolute inset-0 bg-[#12344D]/20 opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Content */}

      <div className="absolute bottom-0 left-0 right-0 p-8">
        {/* Icon */}

        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20">
          <Icon className="text-3xl text-white" />
        </div>

        {/* Title */}

        <h3 className="text-3xl font-bold text-white">{industry.title}</h3>

        {/* Description */}

        <p className="mt-4 leading-7 text-slate-300">{industry.description}</p>

        {/* CTA */}

        <div className="mt-8 flex items-center gap-3 text-[#F59E0B] font-semibold">
          Explore Industry
          <FaArrowRight className="transition duration-300 group-hover:translate-x-2" />
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;
