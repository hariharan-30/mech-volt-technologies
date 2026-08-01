import { FaCheckCircle, FaBullseye, FaEye } from "react-icons/fa";
import companyImg from "../../assets/images/company-overview.avif";

const services = [
  "Industrial Robotics Programming Services",
  "SPM Machine Design & Industrial Automation",
  "Jigs and Fixtures",
  "All Types Of Conveyors",
  "All Type of Guns and Services",
  "PLC Programming and Control panel Services",
];

const CompanyOverview = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Decoration */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 right-0 h-80 w-80 rounded-full bg-[#2A6F97]/5 blur-3xl"></div>

        <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-orange-500/5 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Image */}

          <div className="relative">
            <div className="overflow-hidden rounded-[36px] shadow-[0_35px_80px_rgba(0,0,0,0.15)]">
              <img
                src={companyImg}
                alt="Company Overview"
                className="h-162.5 w-full object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>

          {/* Right */}

          <div>
            <span className="inline-flex rounded-full bg-orange-50 px-5 py-2 text-xs font-bold uppercase tracking-[4px] text-orange-600">
              Company Overview
            </span>

            <h2 className="mt-8 text-4xl md:text-5xl font-extrabold leading-tight text-[#12344D]">
              Engineering Innovation
              <span className="block text-[#2A6F97]">
                For Smarter Industries
              </span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              Mech Volt Technologies is a leading Industrial Automation and
              Engineering company delivering innovative automation solutions for
              modern manufacturing industries. Our expertise includes PLC
              Programming, HMI & SCADA, Robotics Integration, SPM Machine
              Design, Industrial Electrical Panels and Turnkey Automation
              Projects. We help industries improve productivity, operational
              efficiency and manufacturing reliability through advanced
              engineering solutions.
            </p>

            {/* Services */}

            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {services.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 text-cyan-500 shrink-0" />

                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;

// [
//   "SPM Machine Design & Manufacturing",
//   "Robotics Integration",
//   "Industrial Automation Solutions",
//   "PLC, HMI & SCADA Integration",
//   "Electrical Control Panel Manufacturing",
//   "Annual Maintenance & Technical Support",
// ]
