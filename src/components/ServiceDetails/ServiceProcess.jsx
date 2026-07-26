import {
    FaClipboardList,
    FaDraftingCompass,
    FaLaptopCode,
    FaTools,
    FaCogs,
    FaCheckCircle,
  } from "react-icons/fa";
  
  const icons = [
    FaClipboardList,
    FaDraftingCompass,
    FaLaptopCode,
    FaTools,
    FaCogs,
    FaCheckCircle,
  ];
  
  const ServiceProcess = ({ service }) => {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Heading */}
  
          <div className="text-center max-w-3xl mx-auto">
            <span className="uppercase tracking-[4px] text-orange-500 font-semibold text-sm">
              Our Process
            </span>
  
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
              How We Execute Every Project
            </h2>
  
            <p className="mt-6 text-lg text-slate-600 leading-8">
              Every engineering solution follows a structured process to ensure
              quality, efficiency and successful delivery.
            </p>
          </div>
  
          {/* Timeline */}
  
          <div className="relative mt-20">
            <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-slate-200 lg:block"></div>
  
            <div className="space-y-10">
              {service.process?.map((step, index) => {
                const Icon = icons[index % icons.length];
  
                return (
                  <div
                    key={step}
                    className={`flex flex-col lg:flex-row items-center gap-8 ${
                      index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Card */}
  
                    <div className="w-full lg:w-5/12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl">
                      <div className="flex items-center gap-5">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#005BAC]/10">
                          <Icon className="text-3xl text-[#005BAC]" />
                        </div>
  
                        <div>
                          <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
                            Step {index + 1}
                          </span>
  
                          <h3 className="mt-2 text-2xl font-bold text-slate-900">
                            {step}
                          </h3>
                        </div>
                      </div>
  
                      <p className="mt-6 leading-8 text-slate-600">
                        Our experienced engineering team carefully performs this
                        phase to ensure reliable, safe and efficient industrial
                        solutions.
                      </p>
                    </div>
  
                    {/* Center */}
  
                    <div className="hidden lg:flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-orange-500 text-xl font-bold text-white shadow-xl">
                      {index + 1}
                    </div>
  
                    <div className="hidden lg:block lg:w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ServiceProcess;