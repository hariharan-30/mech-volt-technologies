import { FaPhoneAlt, FaEnvelope, FaArrowRight } from "react-icons/fa";

const ServiceCTA = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-linear-to-r from-[#003B73] via-[#005BAC] to-[#0077CC]">
      {/* Background Decoration */}

      <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-orange-500/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}

          <div>
            <span className="uppercase tracking-[5px] text-orange-400 font-semibold">
              Let's Work Together
            </span>

            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight mt-5">
              Ready to Automate
              <br />
              Your Manufacturing Process?
            </h2>

            <p className="text-blue-100 text-lg leading-9 mt-8 max-w-xl">
              Whether you need Industrial Automation, PLC Programming, Control
              Panel Manufacturing, or Custom SPM Machines, our engineering team
              is ready to deliver innovative and reliable solutions tailored to
              your business.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition">
                Request a Quote
                <FaArrowRight />
              </button>

              <button className="bg-white hover:bg-slate-100 text-[#005BAC] px-8 py-4 rounded-xl font-semibold transition">
                Explore Projects
              </button>
            </div>
          </div>

          {/* Right */}

          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <h3 className="text-3xl font-bold text-slate-900">
              Talk With Our Experts
            </h3>

            <p className="text-slate-600 mt-5 leading-8">
              Have a project in mind? Let's discuss your automation
              requirements.
            </p>

            <div className="space-y-8 mt-10">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center">
                  <FaPhoneAlt className="text-white text-2xl" />
                </div>

                <div>
                  <p className="text-slate-500">Call Us</p>

                  <h4 className="text-2xl font-bold">+91 98765 43210</h4>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-[#005BAC] flex items-center justify-center">
                  <FaEnvelope className="text-white text-2xl" />
                </div>

                <div>
                  <p className="text-slate-500">Email Us</p>

                  <h4 className="text-xl font-semibold">info@mechvolt.com</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
