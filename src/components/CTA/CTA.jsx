import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import FadeUp from "../../animations/FadeUp";

const CTA = () => {
  return (
    <FadeUp>
      <section className="relative overflow-hidden bg-[#005BAC] py-24">
        {/* Background Shapes */}

        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl"></div>

        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}

            <div>
              <span className="uppercase tracking-[5px] text-orange-400 font-semibold">
                Ready to Get Started?
              </span>

              <h2 className="text-5xl lg:text-6xl font-bold text-white mt-6 leading-tight">
                Let's Build Smarter
                <br />
                Industrial Solutions
                <br />
                Together.
              </h2>

              <p className="text-blue-100 text-lg leading-8 mt-8">
                Whether you need Industrial Automation, PLC Programming, Control
                Panel Design, SPM Machine Development or Plant Commissioning,
                our engineering experts are ready to help.
              </p>
            </div>

            {/* Right */}

            <div className="bg-white rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-bold text-slate-900">
                Request a Free Consultation
              </h3>

              <p className="text-slate-500 mt-4 leading-7">
                Discuss your automation requirements with our experienced
                engineering team.
              </p>

              <div className="mt-10 flex flex-col gap-5">
                <button className="bg-[#005BAC] hover:bg-[#00488a] text-white py-4 rounded-xl flex items-center justify-center gap-3 font-semibold transition">
                  Request a Quote
                  <FaArrowRight />
                </button>

                <button className="border-2 border-[#005BAC] text-[#005BAC] hover:bg-[#005BAC] hover:text-white py-4 rounded-xl flex items-center justify-center gap-3 font-semibold transition">
                  <FaPhoneAlt />
                  Call Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeUp>
  );
};

export default CTA;
