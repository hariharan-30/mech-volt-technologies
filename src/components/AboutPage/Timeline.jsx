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
      "Mech Volt Technologies was founded with a vision to deliver innovative industrial automation and engineering solutions.",
  },
  {
    year: "2024",
    title: "Automation Projects",
    icon: FaCogs,
    description:
      "Successfully delivered PLC, HMI, SCADA and industrial automation projects for manufacturing industries.",
  },
  {
    year: "2025",
    title: "SPM Machine Development",
    icon: FaIndustry,
    description:
      "Expanded into Special Purpose Machine design, manufacturing and commissioning for industrial applications.",
  },
  {
    year: "2025",
    title: "Growing Client Network",
    icon: FaUsers,
    description:
      "Partnered with industries across multiple sectors delivering reliable automation solutions and technical support.",
  },
  {
    year: "Future",
    title: "Industry 4.0 Vision",
    icon: FaGlobeAsia,
    description:
      "Driving the future through Robotics Integration, IIoT, Smart Manufacturing and Digital Factory Solutions.",
  },
];

const Timeline = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-[#2A6F97]/5 blur-3xl"></div>

        <div className="absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-orange-500/5 blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full bg-orange-50 px-5 py-2 text-xs font-bold uppercase tracking-[4px] text-orange-600">
            Our Journey
          </span>

          <h2 className="mt-8 text-4xl md:text-5xl font-extrabold text-[#12344D]">
            Milestones That
            <span className="block text-[#2A6F97]">Define Our Growth</span>
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            Every milestone reflects our commitment to engineering excellence,
            innovation and building long-term partnerships with industries.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mt-24">
          {/* Vertical Line */}

          <div className="absolute left-8 top-0 bottom-0 w-1 rounded-full bg-linear-to-b from-[#12344D] via-[#2A6F97] to-orange-500"></div>

          <div className="space-y-12">
            {timeline.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="relative flex gap-8">
                  {/* Icon */}

                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#12344D] shadow-xl">
                    <Icon className="text-2xl text-white" />
                  </div>

                  {/* Card */}

                  <div className="flex-1 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-2xl">
                    <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600">
                      {item.year}
                    </span>

                    <h3 className="mt-5 text-2xl font-bold text-[#12344D]">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-8 text-slate-600">
                      {item.description}
                    </p>
                  </div>
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
