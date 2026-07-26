import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group relative block bg-white rounded-2xl p-8 border border-slate-200 hover:border-orange-500 hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {" "}
      {/* Top Border Animation */}
      <div className="absolute top-0 left-0 w-0 h-1 bg-orange-500 group-hover:w-full transition-all duration-500"></div>
      {/* Icon */}
      <div className="w-16 h-16 rounded-xl bg-blue-100 group-hover:bg-orange-500 flex items-center justify-center transition">
        <Icon className="text-3xl text-[#005BAC] group-hover:text-white transition" />
      </div>
      {/* Title */}
      <h3 className="text-2xl font-bold text-slate-900 mt-6">
        {service.title}
      </h3>
      {/* Description */}
      <p className="text-slate-600 leading-8 mt-5">{service.description}</p>
      {/* Button */}
      <button className="mt-8 flex items-center gap-3 text-[#005BAC] font-semibold group-hover:text-orange-500 transition">
        Learn More
        <FaArrowRight className="group-hover:translate-x-2 transition" />
      </button>
    </Link>
  );
};

export default ServiceCard;
