import automationImg from "../../assets/images/automation.avif";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  "PLC Based Automation Systems",
  "Servo & Motion Control",
  "Conveyor Automation",
  "Robotics Integration",
  "Process Automation",
  "Machine Retrofitting",
];

const AutomationService = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <div className="relative">

            <img
              src={automationImg}
              alt="Industrial Automation"
              className="rounded-3xl shadow-2xl w-full"
            />

            <div className="absolute bottom-6 left-6 bg-[#005BAC] text-white rounded-2xl px-8 py-5 shadow-lg">

              <h3 className="text-3xl font-bold">
                Industry 4.0
              </h3>

              <p className="text-sm mt-1">
                Smart Manufacturing Solutions
              </p>

            </div>

          </div>

          {/* Right Content */}

          <div>

            <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
              Industrial Automation
            </span>

            <h2 className="text-5xl font-bold text-slate-900 mt-4 leading-tight">
              Transforming Industries Through Intelligent Automation
            </h2>

            <p className="text-slate-600 leading-8 mt-8">
              We design and implement reliable industrial automation
              systems that improve productivity, reduce downtime,
              enhance safety and optimize manufacturing processes.
              Our solutions are tailored for automotive, textile,
              food processing, pharmaceuticals and engineering industries.
            </p>

            {/* Features */}

            <div className="grid md:grid-cols-2 gap-5 mt-10">

              {features.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-orange-500" />

                  <span className="font-medium text-slate-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            {/* CTA */}

            <button className="mt-10 bg-[#005BAC] hover:bg-[#00448A] text-white px-8 py-4 rounded-xl font-semibold transition">
              Request a Consultation
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AutomationService;