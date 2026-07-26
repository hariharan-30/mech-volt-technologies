import {
  FaRocket,
  FaCogs,
  FaIndustry,
  FaUsers,
  FaGlobeAsia,
} from "react-icons/fa";

const timeline = [
  {
    year: "2024",
    title: "Company Established",
    icon: FaRocket,
    description:
      "Mech Volt Technologies was founded with a vision to deliver innovative industrial automation and machine design solutions.",
  },
  {
    year: "2024",
    title: "Automation Projects",
    icon: FaCogs,
    description:
      "Successfully delivered PLC, HMI and SCADA projects across multiple manufacturing industries.",
  },
  {
    year: "2025",
    title: "SPM Machine Development",
    icon: FaIndustry,
    description:
      "Expanded our expertise into Special Purpose Machine (SPM) design, manufacturing and commissioning.",
  },
  {
    year: "2025",
    title: "Growing Client Network",
    icon: FaUsers,
    description:
      "Partnered with leading industries and OEMs, delivering reliable automation solutions with long-term support.",
  },
  {
    year: "Future",
    title: "Towards Smart Manufacturing",
    icon: FaGlobeAsia,
    description:
      "Focused on Industry 4.0, IIoT, Robotics Integration and Digital Factory Solutions for the future of manufacturing.",
  },
];

const Timeline = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Our Journey
          </span>

          <h2 className="text-5xl font-bold mt-4 text-slate-900">
            Milestones That Define Our Growth
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            Every milestone reflects our commitment to innovation, engineering
            excellence and customer success.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative">
          {/* Center Line */}

          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-[#005BAC]/20 -translate-x-1/2"></div>

          <div className="space-y-14">
            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.year}
                  className={`flex flex-col lg:flex-row items-center ${
                    index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}

                  <div className="lg:w-1/2 px-6">
                    <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">
                      <span className="text-orange-500 font-bold text-lg">
                        {item.year}
                      </span>

                      <h3 className="text-2xl font-bold mt-3 mb-4 text-[#005BAC]">
                        {item.title}
                      </h3>

                      <p className="text-slate-600 leading-8">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon */}

                  <div className="relative z-10 my-8 lg:my-0">
                    <div className="w-20 h-20 rounded-full bg-[#005BAC] flex items-center justify-center shadow-xl">
                      <Icon className="text-white text-3xl" />
                    </div>
                  </div>

                  <div className="lg:w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
