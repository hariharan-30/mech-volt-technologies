import {
    FaCheckCircle,
    FaCogs,
    FaIndustry,
    FaMicrochip,
    FaTools,
    FaProjectDiagram,
    FaRobot,
  } from "react-icons/fa";
  
  const icons = [
    FaRobot,
    FaMicrochip,
    FaIndustry,
    FaCogs,
    FaProjectDiagram,
    FaTools,
  ];
  
  const ServiceFeatures = ({ service }) => {
    return (
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Heading */}
  
          <div className="text-center max-w-3xl mx-auto">
            <span className="uppercase tracking-[4px] text-orange-500 font-semibold text-sm">
              Key Features
            </span>
  
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
              What We Deliver
            </h2>
  
            <p className="mt-6 text-lg text-slate-600 leading-8">
              Every service is carefully planned and executed to deliver maximum
              performance, reliability and long-term value.
            </p>
          </div>
  
          {/* Cards */}
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {service.features?.map((feature, index) => {
              const Icon = icons[index % icons.length];
  
              return (
                <div
                  key={feature}
                  className="group rounded-3xl bg-white border border-slate-200 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500 hover:shadow-2xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#005BAC]/10 group-hover:bg-orange-500 transition">
                    <Icon className="text-3xl text-[#005BAC] group-hover:text-white transition" />
                  </div>
  
                  <h3 className="mt-8 text-2xl font-bold text-slate-900">
                    {feature}
                  </h3>
  
                  <p className="mt-5 text-slate-600 leading-8">
                    Our engineering experts implement {feature.toLowerCase()} using
                    industry best practices, ensuring reliability, efficiency and
                    future scalability.
                  </p>
  
                  <div className="mt-8 flex items-center gap-3 text-orange-500 font-semibold">
                    <FaCheckCircle />
  
                    <span>Professional Implementation</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };
  
  export default ServiceFeatures;