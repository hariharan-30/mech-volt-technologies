import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

const ServiceCTA = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}

      <div className="absolute inset-0 bg-linear-to-r from-[#081C33] via-[#005BAC] to-[#0A79D8]" />

      {/* Glow */}

      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl p-12 lg:p-16 text-center shadow-[0_30px_80px_rgba(0,0,0,.25)]">
          <span className="uppercase tracking-[4px] text-orange-300 font-semibold text-sm">
            Let's Work Together
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready To Transform Your Industrial Process?
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-lg leading-9 text-slate-200">
            Whether you need PLC Programming, Industrial Automation, Control
            Panels or Custom Machine Design, our engineering experts are ready
            to deliver reliable and future-ready solutions tailored to your
            business.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600 flex items-center gap-3"
            >
              Get Free Consultation
              <FaArrowRight />
            </Link>

            <a
              href="tel:+918056257501"
              className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#081C33] flex items-center gap-3"
            >
              <FaPhoneAlt />
              Call Now
            </a>
          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div>
              <h3 className="text-4xl font-bold text-orange-400">10+</h3>

              <p className="mt-2 text-slate-300">Years Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange-400">100+</h3>

              <p className="mt-2 text-slate-300">Projects Delivered</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange-400">24/7</h3>

              <p className="mt-2 text-slate-300">Technical Support</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange-400">99%</h3>

              <p className="mt-2 text-slate-300">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
