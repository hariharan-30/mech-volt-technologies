import { roboticsData } from "./roboticsData";
import {
  FaClipboardList,
  FaRobot,
  FaCode,
  FaMicrochip,
  FaPlayCircle,
  FaChartLine,
  FaTools,
} from "react-icons/fa";

const icons = [
  FaClipboardList,
  FaRobot,
  FaCode,
  FaMicrochip,
  FaPlayCircle,
  FaChartLine,
  FaTools,
];

const RobotProcess = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-100/60 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#2A6F97]">
            Our Workflow
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-black text-[#12344D]">
            Robotics Project Execution Process
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            Every robotics project follows a structured engineering workflow,
            ensuring reliable integration, efficient commissioning and long-term
            production performance.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mt-24">
          {/* Line */}

          <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-slate-200 rounded-full">
            <div className="h-full w-full bg-linear-to-r from-[#12344D] via-[#2A6F97] to-[#F59E0B] rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-8">
            {roboticsData.process.map((step, index) => {
              const Icon = icons[index];

              return (
                <div
                  key={step}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Circle */}

                  <div
                    className="
                      relative

                      z-20

                      w-24
                      h-24

                      rounded-full

                      bg-white

                      border-4

                      border-slate-200

                      shadow-lg

                      flex

                      items-center

                      justify-center

                      transition-all

                      duration-500

                      group-hover:border-[#F59E0B]

                      group-hover:-translate-y-2
                    "
                  >
                    <Icon className="text-4xl text-[#12344D] group-hover:text-[#F59E0B] transition" />
                  </div>

                  {/* Number */}

                  <div
                    className="
                      absolute

                      top-0

                      right-8

                      w-8

                      h-8

                      rounded-full

                      bg-[#12344D]

                      text-white

                      flex

                      items-center

                      justify-center

                      text-sm

                      font-bold
                    "
                  >
                    {index + 1}
                  </div>

                  {/* Title */}

                  <h3 className="mt-8 text-lg font-bold text-[#12344D]">
                    {step}
                  </h3>

                  {/* Description */}

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    Professional engineering execution with industry best
                    practices.
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Summary */}

        <div className="mt-24 rounded-4xl bg-linear-to-r from-[#12344D] to-[#2A6F97] p-12 text-center">
          <h3 className="text-3xl font-bold text-white">
            End-to-End Robotics Engineering
          </h3>

          <p className="mt-6 max-w-4xl mx-auto text-slate-200 leading-8">
            From initial feasibility study and robot programming to PLC
            integration, commissioning and production support, Mech Volt
            Technologies delivers complete robotics engineering solutions
            tailored to your manufacturing requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RobotProcess;
