import plcImage from "../../assets/images/plc-service.webp";
import {
  FaMicrochip,
  FaDesktop,
  FaServer,
  FaCheckCircle,
} from "react-icons/fa";

const plcFeatures = [
  "Siemens S7-1200 / S7-1500",
  "Mitsubishi PLC",
  "Delta PLC",
  "Allen Bradley PLC",
];

const hmiFeatures = [
  "Siemens HMI",
  "Weintek",
  "Delta HMI",
  "Pro-face",
];

const scadaFeatures = [
  "Siemens WinCC",
  "Ignition SCADA",
  "FactoryTalk",
  "Wonderware",
];

const Card = ({ icon: Icon, title, features }) => (
  <div className="bg-slate-800 rounded-3xl p-8 hover:bg-[#005BAC] transition duration-300">

    <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center mb-6">

      <Icon className="text-white text-3xl" />

    </div>

    <h3 className="text-2xl font-bold mb-6">
      {title}
    </h3>

    <div className="space-y-4">

      {features.map((item) => (

        <div
          key={item}
          className="flex items-center gap-3"
        >

          <FaCheckCircle className="text-orange-400" />

          <span>{item}</span>

        </div>

      ))}

    </div>

  </div>
);

const PLCService = () => {
  return (
    <section className="bg-[#0F172A] py-24 text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="uppercase tracking-[4px] text-orange-400 font-semibold">
            PLC • HMI • SCADA
          </span>

          <h2 className="text-5xl font-bold mt-4 leading-tight">
            Intelligent Industrial Control Systems
          </h2>

          <p className="text-slate-300 leading-8 mt-6">
            We develop complete industrial control systems,
            from PLC programming to HMI visualization
            and SCADA monitoring for smart manufacturing.
          </p>

        </div>

        {/* Top Layout */}

        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">

          <img
            src={plcImage}
            alt="PLC Programming"
            className="rounded-3xl shadow-2xl"
          />

          <div>

            <h3 className="text-4xl font-bold">
              Smart Control.
              <br />
              Better Productivity.
            </h3>

            <p className="text-slate-300 leading-8 mt-6">
              Our engineers develop reliable PLC logic,
              intuitive HMI interfaces and centralized
              SCADA systems to improve machine
              performance, production visibility
              and operational safety.
            </p>

            <button className="mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold transition">

              Discuss Your Project

            </button>

          </div>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          <Card
            icon={FaMicrochip}
            title="PLC Programming"
            features={plcFeatures}
          />

          <Card
            icon={FaDesktop}
            title="HMI Development"
            features={hmiFeatures}
          />

          <Card
            icon={FaServer}
            title="SCADA Solutions"
            features={scadaFeatures}
          />

        </div>

      </div>

    </section>
  );
};

export default PLCService;