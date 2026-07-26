import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import { services } from "../Services/servicesData";

const RelatedServices = ({ service }) => {
  // Current service remove pannrom
  const relatedServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[4px] text-orange-500 font-semibold text-sm">
            Related Services
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Explore More Engineering Solutions
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Discover more automation and industrial engineering services
            designed to improve productivity, efficiency and reliability.
          </p>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {relatedServices.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.id}
                to={`/services/${item.slug}`}
                className="group rounded-3xl bg-white border border-slate-200 p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-orange-500 hover:shadow-2xl"
              >
                {/* Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#005BAC]/10 transition group-hover:bg-orange-500">
                  <Icon className="text-3xl text-[#005BAC] transition group-hover:text-white" />
                </div>

                {/* Category */}

                <span className="mt-8 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
                  {item.category}
                </span>

                {/* Title */}

                <h3 className="mt-5 text-2xl font-bold text-slate-900 transition group-hover:text-[#005BAC]">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-5 text-slate-600 leading-8">
                  {item.shortDescription}
                </p>

                {/* Button */}

                <div className="mt-8 flex items-center gap-3 font-semibold text-[#005BAC] transition group-hover:text-orange-500">
                  Learn More
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
