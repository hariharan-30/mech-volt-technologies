import { FaCheckCircle, FaLightbulb } from "react-icons/fa";

const ServiceOverview = ({ service }) => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="uppercase tracking-[4px] text-orange-500 font-semibold text-sm">
            Service Overview
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Smart Engineering Solutions for Modern Industries
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We deliver innovative automation and engineering services designed
            to improve productivity, quality and operational efficiency.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}

          <div>
            <h3 className="text-3xl font-bold text-slate-900">
              About This Service
            </h3>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              {service.overview}
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {service.features?.slice(0, 6).map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 border border-slate-200"
                >
                  <FaCheckCircle className="mt-1 text-orange-500" />

                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}

          <div className="rounded-3xl bg-linear-to-br from-[#081C33] to-[#005BAC] p-10 text-white shadow-2xl">
            <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center">
              <FaLightbulb className="text-4xl text-orange-400" />
            </div>

            <h3 className="mt-8 text-3xl font-bold">
              Why Choose This Service?
            </h3>

            <p className="mt-6 leading-8 text-slate-300">
              Our engineering team combines practical industry experience,
              advanced automation technologies and quality-driven execution to
              deliver reliable industrial solutions.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Experienced Engineering Team",
                "Customized Industrial Solutions",
                "Latest Automation Technologies",
                "Reliable After Sales Support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FaCheckCircle className="text-orange-400" />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
