import { FaIndustry, FaLightbulb, FaCog, FaChartLine } from "react-icons/fa";

import projectImage from "../../assets/images/Case-study.jpg";
const CaseStudy = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Featured Case Study
          </span>

          <h2 className="text-5xl font-bold mt-4 text-slate-900">
            Automotive Assembly Line Automation
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto leading-8">
            A complete industrial automation solution designed to improve
            productivity, reduce manual intervention and increase process
            reliability for an automotive manufacturing facility.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}

          <div>
            <img
              src={projectImage}
              alt="Case Study"
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>

          {/* Content */}

          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="w-16 h-16 rounded-2xl bg-[#005BAC] flex items-center justify-center">
                <FaIndustry className="text-white text-2xl" />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">Customer Challenge</h3>

                <p className="text-slate-600 leading-8">
                  The customer required an automated assembly system to
                  eliminate manual operations, improve production speed and
                  reduce process errors.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center">
                <FaLightbulb className="text-white text-2xl" />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">Our Solution</h3>

                <p className="text-slate-600 leading-8">
                  Designed a fully automated conveyor system with Siemens PLC,
                  HMI, servo drives, barcode verification and pneumatic assembly
                  stations.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-16 h-16 rounded-2xl bg-[#005BAC] flex items-center justify-center">
                <FaCog className="text-white text-2xl" />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">Technologies Used</h3>

                <p className="text-slate-600">
                  Siemens PLC • Siemens HMI • Servo Drives • Pneumatics •
                  Sensors • VFD • Industrial Ethernet
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <FaChartLine className="text-orange-500 text-3xl" />

                <h3 className="text-2xl font-bold">Results Achieved</h3>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-4xl font-bold text-[#005BAC]">+35%</h4>

                  <p className="text-slate-600">Production Efficiency</p>
                </div>

                <div>
                  <h4 className="text-4xl font-bold text-[#005BAC]">-20%</h4>

                  <p className="text-slate-600">Downtime</p>
                </div>

                <div>
                  <h4 className="text-4xl font-bold text-[#005BAC]">99%</h4>

                  <p className="text-slate-600">System Reliability</p>
                </div>

                <div>
                  <h4 className="text-4xl font-bold text-[#005BAC]">45 Days</h4>

                  <p className="text-slate-600">Project Completion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
