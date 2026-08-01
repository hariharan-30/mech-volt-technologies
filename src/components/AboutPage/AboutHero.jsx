import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaIndustry,
  FaRobot,
  FaMicrochip,
  FaCogs,
} from "react-icons/fa";

import aboutHero from "../../assets/images/about-banner.webp";

// const highlights = [
//   "Industrial Automation",
//   "PLC • HMI • SCADA",
//   "Robotics Integration",
//   "SPM Machine Design",
// ];

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50 pt-36 pb-24">
      {/* Background Decoration */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 -left-28 h-72 w-72 rounded-full bg-[#2A6F97]/10 blur-3xl"></div>

        <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl"></div>

        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#12344D]/5 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Breadcrumb */}

        <div className="flex items-center gap-3 text-sm text-slate-500">
          <Link to="/" className="hover:text-[#12344D] transition">
            Home
          </Link>

          <span>/</span>

          <span className="font-medium text-orange-500">About Us</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mt-12">
          {/* LEFT */}

          <div>
            {/* Subtitle */}

            <div className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-orange-50 px-5 py-2">
              <div className="h-2.5 w-2.5 rounded-full bg-orange-500"></div>

              <span className="uppercase tracking-[4px] text-xs font-bold text-orange-600">
                ABOUT MECH VOLT TECHNOLOGIES
              </span>
            </div>

            {/* Heading */}

            <h1 className="mt-8 text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight text-[#12344D]">
              Building Smarter
              <span className="block text-[#2A6F97]">Industries Through</span>
              Engineering Excellence
            </h1>

            {/* Description */}

            <p className="mt-8 text-lg leading-9 text-slate-600 max-w-2xl">
              Mech Volt Technologies delivers innovative SPM Machine Design, PLC
              Programming, Robotics Integration, Industrial Automation and
              Electrical Engineering Solutions that improve productivity,
              reliability and manufacturing efficiency.
            </p>

            {/* Highlights */}

            {/* <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-500 text-lg shrink-0" />

                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div> */}

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                to="/services"
                className="inline-flex items-center gap-3 rounded-xl bg-[#12344D] px-8 py-4 font-semibold text-white transition hover:bg-[#2A6F97]"
              >
                Explore Services
                <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center rounded-xl border-2 border-[#12344D] px-8 py-4 font-semibold text-[#12344D] transition hover:bg-[#12344D] hover:text-white"
              >
                Contact Us
              </Link>
            </div>

            {/* Bottom Info */}

            {/* <div className="mt-16 grid grid-cols-3 gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#12344D] text-white">
                  <FaIndustry className="text-2xl" />
                </div>

                <div>
                  <h4 className="font-bold text-[#12344D]">Automation</h4>

                  <p className="text-sm text-slate-500">Industrial Solutions</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white">
                  <FaRobot className="text-2xl" />
                </div>

                <div>
                  <h4 className="font-bold text-[#12344D]">Robotics</h4>

                  <p className="text-sm text-slate-500">Smart Integration</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2A6F97] text-white">
                  <FaMicrochip className="text-2xl" />
                </div>

                <div>
                  <h4 className="font-bold text-[#12344D]">PLC</h4>

                  <p className="text-sm text-slate-500">Advanced Control</p>
                </div>
              </div>
            </div> */}
          </div>

          {/* RIGHT */}

          <div className="relative">
            <div className="relative overflow-hidden rounded-[36px] shadow-[0_35px_80px_rgba(0,0,0,0.15)]">
              <img
                src={aboutHero}
                alt="About Mech Volt Technologies"
                className="h-175 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
