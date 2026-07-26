import {
  FaClipboardList,
  FaDraftingCompass,
  FaCogs,
  FaIndustry,
  FaRocket,
} from "react-icons/fa";

const process = [
  {
    number: "01",
    icon: FaClipboardList,
    title: "Requirement Analysis",
    desc: "Understanding customer requirements, production goals and existing process challenges.",
  },
  {
    number: "02",
    icon: FaDraftingCompass,
    title: "Engineering & Design",
    desc: "Mechanical, electrical and automation design using industry-standard CAD and EPLAN software.",
  },
  {
    number: "03",
    icon: FaCogs,
    title: "Manufacturing",
    desc: "Fabrication, panel building, assembly and software development under strict quality standards.",
  },
  {
    number: "04",
    icon: FaIndustry,
    title: "Installation & Commissioning",
    desc: "Complete installation, PLC commissioning, testing and production trial at customer site.",
  },
  {
    number: "05",
    icon: FaRocket,
    title: "Support & Optimization",
    desc: "After-sales support, preventive maintenance and performance optimization.",
  },
];

const WorkProcess = () => {
  return (
    <section className="py-24 bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="uppercase tracking-[5px] text-orange-400 font-semibold">
            Our Process
          </span>

          <h2 className="text-5xl font-bold mt-4">
            From Concept to Commissioning
          </h2>

          <p className="mt-6 text-slate-300 leading-8">
            Every project follows a structured engineering workflow to ensure
            quality, efficiency and long-term reliability.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {process.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative bg-slate-800 rounded-3xl p-8 hover:bg-[#005BAC] transition duration-300"
              >
                <span className="absolute top-5 right-5 text-5xl font-bold text-white/10">
                  {step.number}
                </span>

                <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center mb-6">
                  <Icon className="text-3xl text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>

                <p className="text-slate-300 leading-7">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
