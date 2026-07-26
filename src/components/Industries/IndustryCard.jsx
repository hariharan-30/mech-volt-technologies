import { FaArrowRight } from "react-icons/fa";

const IndustryCard = ({ industry }) => {
  const Icon = industry.icon;

  return (
    <div className="group relative rounded-3xl overflow-hidden h-107.5 cursor-pointer">

      {/* Background Image */}

      <img
        src={industry.image}
        alt={industry.title}
        className="w-full h-full object-cover group-hover:scale-110 duration-700"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-linear-to-t from-[#081C33] via-[#081c3390] to-transparent"></div>

      {/* Content */}

      <div className="absolute bottom-0 p-8 text-white">

        <div className="w-16 h-16 rounded-xl bg-orange-500 flex items-center justify-center mb-6">

          <Icon className="text-3xl" />

        </div>

        <h3 className="text-3xl font-bold">

          {industry.title}

        </h3>

        <button className="mt-6 flex items-center gap-3 text-orange-400 font-semibold">

          View Solutions

          <FaArrowRight className="group-hover:translate-x-2 duration-300"/>

        </button>

      </div>

    </div>
  );
};

export default IndustryCard;