import spmImage from "../../assets/images/Spm-machine.jpg";
import {
  FaDraftingCompass,
  FaCogs,
  FaIndustry,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

const process = [
  {
    icon: FaDraftingCompass,
    title: "Concept & Design",
    desc: "Understanding production requirements and creating optimized machine concepts using 3D CAD tools.",
  },
  {
    icon: FaCogs,
    title: "Manufacturing",
    desc: "Precision fabrication, assembly and integration of mechanical, pneumatic and electrical systems.",
  },
  {
    icon: FaIndustry,
    title: "Installation",
    desc: "On-site installation, alignment, testing and commissioning for smooth production startup.",
  },
  {
    icon: FaTools,
    title: "Support",
    desc: "Operator training, maintenance support and performance optimization for long-term reliability.",
  },
];

const SPMService = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}

          <div>
            <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
              SPM Machine Design
            </span>

            <h2 className="text-5xl font-bold mt-4 leading-tight text-slate-900">
              Custom Built Machines for Modern Manufacturing
            </h2>

            <p className="mt-8 text-slate-600 leading-8">
              We design and manufacture Special Purpose Machines (SPM) tailored
              to your production requirements. Our solutions increase
              productivity, improve consistency and reduce manual operations
              through intelligent automation.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-orange-500" />
                <span>Assembly Automation Machines</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-orange-500" />
                <span>Welding & Testing Stations</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-orange-500" />
                <span>Material Handling Systems</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-orange-500" />
                <span>Leak Testing Machines</span>
              </div>
            </div>
          </div>

          {/* Image */}

          <div>
            <img
              src={spmImage}
              alt="SPM Machine"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>

        {/* Process */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {process.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#005BAC] flex items-center justify-center mb-6">
                  <Icon className="text-white text-3xl" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

                <p className="text-slate-600 leading-8">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SPMService;
