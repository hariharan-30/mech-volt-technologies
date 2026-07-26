import {
    FaRobot,
    FaMicrochip,
    FaDesktop,
    FaIndustry,
    FaBolt,
    FaTools,
    FaArrowRight,
  } from "react-icons/fa";
  
  const services = [
    {
      icon: FaRobot,
      title: "Industrial Automation",
      description:
        "Complete automation solutions to improve productivity, efficiency and operational reliability.",
    },
    {
      icon: FaMicrochip,
      title: "PLC Programming",
      description:
        "PLC software development, commissioning and troubleshooting for industrial applications.",
    },
    {
      icon: FaDesktop,
      title: "HMI & SCADA",
      description:
        "Interactive HMI interfaces and SCADA systems for monitoring and controlling industrial processes.",
    },
    {
      icon: FaIndustry,
      title: "SPM Machine Design",
      description:
        "Custom Special Purpose Machines designed to meet your production requirements.",
    },
    {
      icon: FaBolt,
      title: "Control Panel Manufacturing",
      description:
        "Design and manufacturing of PCC, MCC, PLC and automation control panels.",
    },
    {
      icon: FaTools,
      title: "Electrical Engineering",
      description:
        "Complete electrical design, installation, testing and commissioning services.",
    },
  ];
  
  const Capabilities = () => {
    return (
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
  
          {/* Heading */}
  
          <div className="text-center max-w-3xl mx-auto mb-16">
  
            <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
              What We Do
            </span>
  
            <h2 className="text-5xl font-bold text-slate-900 mt-4">
              Engineering Services
            </h2>
  
            <p className="mt-6 text-slate-600 leading-8">
              We provide end-to-end industrial automation and engineering
              services tailored to modern manufacturing industries.
            </p>
  
          </div>
  
          {/* Cards */}
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  
            {services.map((service) => {
              const Icon = service.icon;
  
              return (
                <div
                  key={service.title}
                  className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border border-slate-100"
                >
                  {/* Icon */}
  
                  <div className="w-16 h-16 rounded-2xl bg-[#005BAC] group-hover:bg-orange-500 flex items-center justify-center transition">
  
                    <Icon className="text-white text-3xl" />
  
                  </div>
  
                  {/* Title */}
  
                  <h3 className="text-2xl font-bold mt-8 text-slate-900">
                    {service.title}
                  </h3>
  
                  {/* Description */}
  
                  <p className="mt-5 text-slate-600 leading-8">
                    {service.description}
                  </p>
  
                  {/* Read More */}
  
                  <button className="mt-8 flex items-center gap-3 text-[#005BAC] font-semibold group-hover:text-orange-500 transition">
  
                    Learn More
  
                    <FaArrowRight className="group-hover:translate-x-2 transition" />
  
                  </button>
  
                </div>
              );
            })}
  
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Capabilities;