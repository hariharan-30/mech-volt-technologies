import {
    FaCar,
    FaIndustry,
    FaUtensils,
    FaCapsules,
    FaTshirt,
    FaBolt,
    FaBoxOpen,
    FaOilCan,
  } from "react-icons/fa";
  
  const industries = [
    {
      icon: FaCar,
      title: "Automotive",
      desc: "Automation solutions for automotive production lines, assembly stations and testing equipment.",
    },
    {
      icon: FaIndustry,
      title: "Manufacturing",
      desc: "Smart manufacturing systems designed to improve productivity and operational efficiency.",
    },
    {
      icon: FaUtensils,
      title: "Food & Beverage",
      desc: "Reliable automation ensuring hygiene, consistency and production optimization.",
    },
    {
      icon: FaCapsules,
      title: "Pharmaceutical",
      desc: "Precision control systems for pharmaceutical production and packaging processes.",
    },
    {
      icon: FaTshirt,
      title: "Textile",
      desc: "Industrial automation for textile machinery and process monitoring.",
    },
    {
      icon: FaBolt,
      title: "Electrical & Electronics",
      desc: "Automation solutions for panel manufacturing, testing and electronics assembly.",
    },
    {
      icon: FaOilCan,
      title: "Oil & Gas",
      desc: "Robust PLC, SCADA and process control solutions for demanding environments.",
    },
    {
      icon: FaBoxOpen,
      title: "Packaging",
      desc: "End-to-end automation for packaging machines and conveyor systems.",
    },
  ];
  
  const Industries = () => {
    return (
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
  
          {/* Heading */}
  
          <div className="text-center max-w-3xl mx-auto mb-16">
  
            <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
              Industries We Serve
            </span>
  
            <h2 className="text-5xl font-bold text-slate-900 mt-4">
              Delivering Automation Across Multiple Industries
            </h2>
  
            <p className="mt-6 text-slate-600 leading-8">
              Our engineering expertise enables us to design automation
              systems that meet the unique operational challenges of
              various industrial sectors.
            </p>
  
          </div>
  
          {/* Cards */}
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  
            {industries.map((industry) => {
              const Icon = industry.icon;
  
              return (
                <div
                  key={industry.title}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:bg-[#005BAC] hover:text-white transition duration-300 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center mb-6 group-hover:bg-white">
  
                    <Icon className="text-white text-3xl group-hover:text-[#005BAC]" />
  
                  </div>
  
                  <h3 className="text-2xl font-bold mb-4">
                    {industry.title}
                  </h3>
  
                  <p className="leading-7 text-slate-600 group-hover:text-slate-200">
                    {industry.desc}
                  </p>
  
                </div>
              );
            })}
  
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Industries;