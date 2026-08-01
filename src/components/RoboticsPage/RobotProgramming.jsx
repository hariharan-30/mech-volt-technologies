import { roboticsData } from "./roboticsData";
import { FaCode, FaMicrochip, FaNetworkWired, FaRobot } from "react-icons/fa";

const RobotProgramming = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-sky-100 blur-[120px]" />

        <div className="absolute bottom-0 -left-40 h-96 w-96 rounded-full bg-orange-100 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#2A6F97]">
            Programming & Integration
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#12344D]">
            Complete Robotics Engineering Solutions
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            Our robotics engineers specialize in programming, PLC integration,
            industrial networking and complete robotic cell commissioning.
          </p>
        </div>

        {/* Cards */}

        {/* <div className="grid lg:grid-cols-2 gap-10 mt-20"> */}
        {/* Programming */}

        {/* <div className="rounded-4xl border border-slate-200 bg-white shadow-lg p-10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#12344D] flex items-center justify-center">
                <FaCode className="text-white text-2xl" />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#12344D]">
                  Robot Programming
                </h3>

                <p className="text-slate-500">
                  Multi Brand Programming Expertise
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {roboticsData.programming.map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-slate-50 px-5 py-4 font-medium text-slate-700 border border-slate-100 hover:border-[#2A6F97] hover:bg-sky-50 transition"
                >
                  {item}
                </div>
              ))}
            </div>
          </div> */}

        {/* Integration */}

        {/* <div className="rounded-4xl border border-slate-200 bg-white shadow-lg p-10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#F59E0B] flex items-center justify-center">
                <FaNetworkWired className="text-white text-2xl" />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#12344D]">
                  System Integration
                </h3>

                <p className="text-slate-500">Industrial Connectivity</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {roboticsData.integration.map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-slate-50 px-5 py-4 font-medium text-slate-700 border border-slate-100 hover:border-[#F59E0B] hover:bg-orange-50 transition"
                >
                  {item}
                </div>
              ))}
            </div>
          </div> */}
        {/* </div> */}

        {/* Bottom Feature Strip */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="rounded-3xl bg-[#12344D] p-8 text-white">
            <FaRobot className="text-4xl" />

            <h3 className="mt-6 text-2xl font-bold">Robot Commissioning</h3>

            <p className="mt-4 text-slate-300 leading-8">
              Complete installation, commissioning and production support.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
            <FaMicrochip className="text-4xl text-[#2A6F97]" />

            <h3 className="mt-6 text-2xl font-bold text-[#12344D]">
              PLC Integration
            </h3>

            <p className="mt-4 text-slate-600 leading-8">
              Seamless integration with Siemens, Mitsubishi, ABB and Allen
              Bradley PLCs.
            </p>
          </div>

          <div className="rounded-3xl bg-[#F59E0B] p-8 text-white">
            <FaNetworkWired className="text-4xl" />

            <h3 className="mt-6 text-2xl font-bold">Industrial Networking</h3>

            <p className="mt-4 text-orange-100 leading-8">
              Ethernet/IP, PROFINET, Modbus TCP, EtherCAT and industrial
              communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RobotProgramming;
