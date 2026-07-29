import panelImage from "../../assets/images/panel.webp";
import {
  FaBolt,
  FaPlug,
  FaMicrochip,
  FaChargingStation,
  FaCheckCircle,
} from "react-icons/fa";

const panels = [
  {
    icon: FaBolt,
    title: "PCC Panels",
    desc: "Reliable Power Control Centre panels for industrial power distribution.",
  },
  {
    icon: FaPlug,
    title: "MCC Panels",
    desc: "Motor Control Centres designed for safe and efficient motor operation.",
  },
  {
    icon: FaMicrochip,
    title: "PLC Control Panels",
    desc: "Custom-built PLC automation panels for machine and process control.",
  },
  {
    icon: FaChargingStation,
    title: "VFD Panels",
    desc: "Variable Frequency Drive panels for precise motor speed control and energy savings.",
  },
];

const ControlPanel = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Control Panel Manufacturing
          </span>

          <h2 className="text-5xl font-bold mt-4 text-slate-900">
            Safe, Reliable & Intelligent Electrical Panels
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            We design, manufacture, test and commission industrial
            electrical control panels that meet international safety
            standards and customer-specific requirements.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <img
              src={panelImage}
              alt="Control Panel"
              className="rounded-3xl shadow-2xl w-full"
            />

          </div>

          {/* Right */}

          <div>

            <div className="space-y-6">

              {panels.map((item) => {
                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="flex gap-5 bg-slate-50 rounded-2xl p-6 hover:bg-[#005BAC] hover:text-white transition duration-300 group"
                  >

                    <div className="w-16 h-16 rounded-xl bg-[#005BAC] group-hover:bg-orange-500 flex items-center justify-center">

                      <Icon className="text-white text-2xl" />

                    </div>

                    <div>

                      <h3 className="text-2xl font-bold mb-2">
                        {item.title}
                      </h3>

                      <p className="leading-7 text-slate-600 group-hover:text-slate-100">
                        {item.desc}
                      </p>

                    </div>

                  </div>

                );
              })}

            </div>

            {/* Features */}

            <div className="grid md:grid-cols-2 gap-4 mt-10">

              {[
                "IEC Standards",
                "Factory Acceptance Testing",
                "Site Installation",
                "Commissioning Support",
                "Energy Efficient Design",
                "24/7 Technical Assistance",
              ].map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-3"
                >

                  <FaCheckCircle className="text-orange-500" />

                  <span>{feature}</span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ControlPanel;