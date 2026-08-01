import { Link } from "react-router-dom";
import { FaArrowRight, FaCogs, FaRobot, FaMicrochip, FaCheckCircle } from "react-icons/fa";
import heroImg from "../../assets/images/services-banner.webp";

const ServiceHero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50 pt-36 pb-24">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute -top-24 left-0 h-80 w-80 rounded-full bg-[#2A6F97]/10 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#12344D]/5 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Breadcrumb */}

        <div className="flex items-center gap-3 text-sm text-slate-500">
          <Link to="/" className="hover:text-[#12344D] transition">
            Home
          </Link>

          <span>/</span>

          <span className="text-orange-500 font-semibold">Services</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mt-12">
          {/* Left */}

          <div>
            <span className="inline-flex rounded-full bg-orange-50 px-5 py-2 text-xs font-bold uppercase tracking-[4px] text-orange-600">
              Industrial Engineering Services
            </span>

            <h1 className="mt-8 text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-[#12344D]">
              Complete Industrial
              <span className="block text-[#2A6F97]">Automation Solutions</span>
            </h1>

            <p className="mt-8 text-lg leading-9 text-slate-600 max-w-2xl">
              We provide end-to-end Industrial Automation, PLC Programming, HMI,
              SCADA, Robotics, Control Panel Manufacturing and Special Purpose
              Machine solutions that improve productivity, quality and
              operational efficiency.
            </p>

            {/* Highlights */}

            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {[
                "PLC Programming",
                "HMI & SCADA",
                "Robotics Integration",
                "SPM Machine Design",
                "Control Panels",
                "Industrial Automation",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400" />

                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-xl bg-[#12344D] px-8 py-4 font-semibold text-white hover:bg-[#2A6F97] transition"
              >
                Get Free Consultation
                <FaArrowRight />
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center rounded-xl border-2 border-[#12344D] px-8 py-4 font-semibold text-[#12344D] hover:bg-[#12344D] hover:text-white transition"
              >
                View Projects
              </Link>
            </div>
          </div>

          {/* Right */}

          <div className="relative">
            <div className="overflow-hidden rounded-[36px] shadow-[0_35px_80px_rgba(0,0,0,0.15)]">
              <img
                src={heroImg}
                alt="Industrial Automation Services"
                className="h-175 w-full object-cover"
              />
            </div>

            {/* Card 1 */}

            {/* <div className="absolute top-8 left-8 rounded-3xl bg-white px-7 py-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#12344D]">
                  <FaCogs className="text-white text-2xl" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-[#12344D]">100+</h3>

                  <p className="text-slate-500">Projects</p>
                </div>
              </div>
            </div> */}

            {/* Card 2 */}

            {/* <div className="absolute bottom-8 left-8 rounded-3xl bg-[#12344D] text-white px-8 py-6 shadow-2xl">
              <div className="flex items-center gap-5">
                <FaRobot className="text-4xl text-orange-400" />

                <div>
                  <h3 className="font-bold text-2xl">Robotics</h3>

                  <p className="text-slate-300 text-sm">
                    Integration Solutions
                  </p>
                </div>
              </div>
            </div> */}

            {/* Card 3 */}

            {/* <div className="absolute right-8 top-24 rounded-3xl bg-white px-7 py-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2A6F97]">
                  <FaMicrochip className="text-white text-2xl" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#12344D]">PLC</h3>

                  <p className="text-slate-500 text-sm">Smart Automation</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
