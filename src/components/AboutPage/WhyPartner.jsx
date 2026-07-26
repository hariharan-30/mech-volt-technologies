import {
    FaProjectDiagram,
    FaTools,
    FaHeadset,
    FaCertificate,
  } from "react-icons/fa";
  
  const features = [
    {
      icon: FaProjectDiagram,
      title: "Complete Project Execution",
      description:
        "From concept and design to manufacturing, installation, commissioning and support, we handle the complete automation lifecycle.",
    },
    {
      icon: FaTools,
      title: "Customized Engineering",
      description:
        "Every solution is engineered to match your production process, ensuring maximum efficiency, reliability and flexibility.",
    },
    {
      icon: FaCertificate,
      title: "Quality & Safety",
      description:
        "We follow industry standards, quality control procedures and engineering best practices for every project.",
    },
    {
      icon: FaHeadset,
      title: "Lifetime Technical Support",
      description:
        "Our relationship doesn't end after delivery. We provide maintenance, troubleshooting and continuous technical support.",
    },
  ];
  
  const WhyPartner = () => {
    return (
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-6">
  
          {/* Heading */}
  
          <div className="text-center max-w-3xl mx-auto mb-16">
  
            <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
              Why Choose Mech Volt
            </span>
  
            <h2 className="text-5xl font-bold mt-5">
              Your Trusted Automation Partner
            </h2>
  
            <p className="mt-6 text-slate-300 leading-8">
              We combine engineering expertise, advanced automation
              technologies and customer-focused solutions to help industries
              achieve higher productivity, better quality and sustainable
              growth.
            </p>
  
          </div>
  
          {/* Cards */}
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  
            {features.map((item) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={item.title}
                  className="bg-slate-800 rounded-3xl p-8 hover:bg-[#005BAC] transition duration-300 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center mb-6">
  
                    <Icon className="text-3xl text-white" />
  
                  </div>
  
                  <h3 className="text-2xl font-bold mb-4">
                    {item.title}
                  </h3>
  
                  <p className="text-slate-300 group-hover:text-white leading-8">
                    {item.description}
                  </p>
                </div>
              );
            })}
  
          </div>
  
          {/* Bottom CTA */}
  
          <div className="mt-20 bg-[#005BAC] rounded-3xl px-10 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
  
            <div>
  
              <h3 className="text-4xl font-bold">
                Ready to Transform Your Industry?
              </h3>
  
              <p className="mt-3 text-blue-100">
                Let's build smarter, safer and more efficient manufacturing
                solutions together.
              </p>
  
            </div>
  
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold transition">
              Contact Our Engineers
            </button>
  
          </div>
  
        </div>
      </section>
    );
  };
  
  export default WhyPartner;