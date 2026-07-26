import { FaCheckCircle } from "react-icons/fa";
import overviewImg from "../../assets/images/company-overview.avif";

const CompanyOverview = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}

          <div className="relative">
            <img
              src={overviewImg}
              alt="Company Overview"
              className="rounded-3xl shadow-2xl w-full"
            />

            {/* Experience Card */}

            <div className="absolute -bottom-8 -right-6 bg-[#005BAC] text-white rounded-2xl px-8 py-6 shadow-xl">
              <h2 className="text-4xl font-bold">3+</h2>

              <p className="text-sm mt-1">Years of Engineering Excellence</p>
            </div>
          </div>

          {/* Content */}

          <div>
            <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
              Company Overview
            </span>

            <h2 className="text-5xl font-bold text-slate-900 mt-4 leading-tight">
              Engineering Innovative Automation Solutions
            </h2>

            <p className="text-slate-600 leading-8 mt-8">
              Mech Volt Technologies is a trusted industrial automation company
              specializing in PLC Programming, HMI & SCADA, SPM Machine Design,
              Control Panel Manufacturing and Electrical Engineering Solutions.
              We help industries improve productivity, reduce downtime, optimize
              processes and achieve smarter manufacturing through innovative
              automation technologies.
            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {[
                "Industrial Automation",
                "PLC & SCADA Integration",
                "SPM Machine Design",
                "Control Panel Manufacturing",
                "Robotics Integration",
                "After Sales Support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FaCheckCircle className="text-orange-500 text-lg" />

                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Mission & Vision */}

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="bg-slate-100 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-[#005BAC] mb-3">
                  Our Mission
                </h3>

                <p className="text-slate-600 leading-7">
                  Deliver innovative automation solutions that enhance
                  productivity, safety and operational efficiency for
                  industries.
                </p>
              </div>

              <div className="bg-slate-100 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-[#005BAC] mb-3">
                  Our Vision
                </h3>

                <p className="text-slate-600 leading-7">
                  Become one of India's leading industrial automation and smart
                  manufacturing solution providers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
