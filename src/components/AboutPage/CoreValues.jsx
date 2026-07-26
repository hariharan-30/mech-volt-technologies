import {
    FaHandshake,
    FaLightbulb,
    FaShieldAlt,
    FaUsers,
    FaAward,
    FaLeaf,
  } from "react-icons/fa";
  
  const values = [
    {
      icon: FaHandshake,
      title: "Integrity",
      description:
        "We build lasting relationships through honesty, transparency and ethical engineering practices.",
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description:
        "We continuously adopt modern automation technologies to create smarter industrial solutions.",
    },
    {
      icon: FaShieldAlt,
      title: "Quality",
      description:
        "Every project is delivered with strict quality standards, precision and reliability.",
    },
    {
      icon: FaUsers,
      title: "Customer First",
      description:
        "Understanding customer needs and delivering practical solutions is our highest priority.",
    },
    {
      icon: FaAward,
      title: "Engineering Excellence",
      description:
        "Our experienced engineers focus on performance, efficiency and long-term value.",
    },
    {
      icon: FaLeaf,
      title: "Sustainability",
      description:
        "We promote energy-efficient automation systems that support sustainable manufacturing.",
    },
  ];
  
  const CoreValues = () => {
    return (
      <section className="py-24 bg-white">
  
        <div className="max-w-7xl mx-auto px-6">
  
          {/* Heading */}
  
          <div className="text-center max-w-3xl mx-auto mb-16">
  
            <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
              Our Core Values
            </span>
  
            <h2 className="text-5xl font-bold mt-4 text-slate-900">
              Principles That Drive Every Project
            </h2>
  
            <p className="mt-6 text-slate-600 leading-8">
              Our values define how we work, innovate and build long-term
              partnerships with industries across diverse sectors.
            </p>
  
          </div>
  
          {/* Cards */}
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  
            {values.map((value) => {
              const Icon = value.icon;
  
              return (
                <div
                  key={value.title}
                  className="group bg-slate-50 rounded-3xl p-8 hover:bg-[#005BAC] hover:-translate-y-2 transition-all duration-300 shadow-md hover:shadow-2xl"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#005BAC] group-hover:bg-orange-500 flex items-center justify-center transition">
  
                    <Icon className="text-white text-3xl" />
  
                  </div>
  
                  <h3 className="text-2xl font-bold mt-6 text-slate-900 group-hover:text-white">
                    {value.title}
                  </h3>
  
                  <p className="mt-4 leading-8 text-slate-600 group-hover:text-blue-100">
                    {value.description}
                  </p>
  
                </div>
              );
            })}
  
          </div>
  
        </div>
  
      </section>
    );
  };
  
  export default CoreValues;