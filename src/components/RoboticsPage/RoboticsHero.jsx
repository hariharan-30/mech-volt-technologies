import { Link } from "react-router-dom";
import { FaArrowRight, FaRobot } from "react-icons/fa";
import { roboticsData } from "./roboticsData";

const RoboticsHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC]">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-[#F8FAFC] via-[#EEF6FB] to-[#EAF4FB]" />

        <div className="absolute -top-40 -left-40 h-125 w-125 rounded-full bg-[#2A6F97]/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-105 w-105 rounded-full bg-[#F59E0B]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}

          <div>
            <span className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-lg border border-slate-200">
              <FaRobot className="text-[#2A6F97]" />

              <span className="text-sm font-semibold uppercase tracking-[4px] text-[#2A6F97]">
                {roboticsData.hero.subtitle}
              </span>
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-black leading-tight text-[#12344D]">
              Industrial
              <span className="block bg-linear-to-r from-[#2A6F97] to-[#5CA9D6] bg-clip-text text-transparent">
                Robotics
              </span>
              Programming
            </h1>

            <p className="mt-8 text-lg leading-9 text-slate-600 max-w-xl">
              {roboticsData.hero.description}
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-col sm:flex-row gap-5">
              <Link
                to="/contact"
                className="rounded-full bg-[#12344D] px-8 py-4 text-white font-semibold flex items-center justify-center gap-3 hover:bg-[#F59E0B] duration-300"
              >
                Get Consultation
                <FaArrowRight />
              </Link>

              <Link
                to="/projects"
                className="rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-[#12344D] hover:bg-[#12344D] hover:text-white duration-300 flex items-center justify-center gap-3"
              >
                View Projects
                <FaArrowRight />
              </Link>
            </div>

            {/* Trust */}

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Robot Programming",
                "PLC Integration",
                "Commissioning",
                "Machine Vision",
                "24×7 Support",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm border border-slate-200"
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}

          <div className="relative">
            {/* Glow */}

            <div className="absolute inset-0 rounded-full bg-[#2A6F97]/10 blur-[80px]" />

            <img
              src={roboticsData.hero.image}
              alt="Industrial Robotics"
              className="relative z-20 w-full max-w-162.5 mx-auto animate-[float_5s_ease-in-out_infinite]"
            />

            {/* FANUC */}

            <div className="absolute top-10 -left-8 bg-white rounded-3xl p-5 shadow-2xl border border-slate-200 z-30 hidden lg:block">
              <h4 className="font-bold text-[#12344D]">FANUC</h4>

              <p className="text-sm text-slate-500">Robot Programming</p>
            </div>

            {/* ABB */}

            <div className="absolute bottom-12 -right-8 bg-[#12344D] rounded-3xl p-5 shadow-2xl z-30 hidden lg:block">
              <h4 className="font-bold text-white">ABB RAPID</h4>

              <p className="text-sm text-slate-300">Robot Integration</p>
            </div>
          </div>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {roboticsData.stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white border border-slate-200 p-8 text-center shadow-sm"
            >
              <h2 className="text-4xl font-black text-[#12344D]">
                {item.number}
              </h2>

              <p className="mt-3 text-slate-500">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoboticsHero;
