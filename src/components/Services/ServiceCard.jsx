import { Link } from "react-router-dom";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group overflow-hidden rounded-[28px] bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-900/20 to-transparent"></div>

        <span className="absolute top-5 left-5 rounded-full bg-white/90 backdrop-blur-md px-4 py-2 text-xs font-bold tracking-[3px] uppercase text-[#0B4F6C]">
          {service.category}
        </span>

        <div className="absolute bottom-5 left-5 w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xl">
          <Icon className="text-3xl text-[#168AAD]" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-8">
        <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>

        <p className="mt-4 text-slate-600 leading-7 flex-1">
          {service.shortDescription}
        </p>

        {/* Features */}
        <div className="mt-6 space-y-3">
          {service.features.slice(0, 3).map((item) => (
            <div key={item} className="flex items-center gap-3 text-slate-700">
              <div className="w-6 h-6 rounded-full bg-[#168AAD]/10 flex items-center justify-center">
                <FaCheck className="text-[#168AAD] text-xs" />
              </div>

              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
          <span className="font-semibold text-[#0B4F6C]">Explore Service</span>

          <div className="w-11 h-11 rounded-full bg-[#0B4F6C] text-white flex items-center justify-center group-hover:bg-[#FF8A00] transition">
            <FaArrowRight className="group-hover:translate-x-1 transition" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
