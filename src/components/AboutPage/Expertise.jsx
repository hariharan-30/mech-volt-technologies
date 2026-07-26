import {
    FaRobot,
    FaMicrochip,
    FaCogs,
    FaBolt,
    FaIndustry,
    FaCheckCircle,
  } from "react-icons/fa";
  
  import expertiseImg from "../../assets/images/expertise.webp";
  
  const expertise = [
    "Industrial Automation",
    "PLC Programming",
    "HMI & SCADA Development",
    "SPM Machine Design",
    "Electrical Control Panels",
    "Robotics Integration",
  ];
  
  const stats = [
    {
      number: "100+",
      title: "Projects Delivered",
    },
    {
      number: "50+",
      title: "Satisfied Clients",
    },
    {
      number: "20+",
      title: "Industries Served",
    },
    {
      number: "10+",
      title: "Years Experience",
    },
  ];
  
  const Expertise = () => {
    return (
      <section className="py-24 bg-slate-100">
  
        <div className="max-w-7xl mx-auto px-6">
  
          <div className="grid lg:grid-cols-2 gap-20 items-center">
  
            {/* Left */}
  
            <div className="relative">
  
              <img
                src={expertiseImg}
                alt="Engineering Team"
                className="rounded-3xl shadow-2xl w-full"
              />
  
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl px-8 py-6">
  
                <h2 className="text-4xl font-bold text-[#005BAC]">
                  Engineering
                </h2>
  
                <p className="text-slate-600 mt-2">
                  Excellence Since Day One
                </p>
  
              </div>
  
            </div>
  
            {/* Right */}
  
            <div>
  
              <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
                Engineering Expertise
              </span>
  
              <h2 className="text-5xl font-bold mt-5 leading-tight">
                Delivering Smart
                Automation Solutions
              </h2>
  
              <p className="mt-7 text-slate-600 leading-8">
                Our multidisciplinary engineering team delivers
                complete automation solutions from concept,
                design and manufacturing to installation,
                commissioning and after-sales support.
              </p>
  
              {/* Expertise */}
  
              <div className="grid md:grid-cols-2 gap-5 mt-10">
  
                {expertise.map((item) => (
  
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
  
                    <FaCheckCircle className="text-orange-500" />
  
                    <span className="font-medium">
                      {item}
                    </span>
  
                  </div>
  
                ))}
  
              </div>
  
            </div>
  
          </div>
  
          {/* Bottom Stats */}
  
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
  
            {stats.map((item) => (
  
              <div
                key={item.title}
                className="bg-white rounded-3xl p-8 text-center shadow-lg hover:-translate-y-2 transition"
              >
  
                <h2 className="text-5xl font-bold text-[#005BAC]">
  
                  {item.number}
  
                </h2>
  
                <p className="mt-3 text-slate-600">
  
                  {item.title}
  
                </p>
  
              </div>
  
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  };
  
  export default Expertise;