import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ServiceHero = ({ service }) => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#081C33] via-[#0A2E52] to-[#005BAC] pt-32 pb-20">
      {/* Background Blur */}

      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl"></div>

      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-blue-300/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Breadcrumb */}

        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>

          <span>/</span>

          <Link to="/services" className="hover:text-white transition">
            Services
          </Link>

          <span>/</span>

          <span className="text-orange-400">{service.title}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-12">
          {/* Left */}

          <div>
            <span className="inline-block rounded-full bg-orange-500/20 border border-orange-400/30 px-5 py-2 text-sm uppercase tracking-[3px] font-semibold text-orange-300">
              {service.category}
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-white">
              {service.title}
            </h1>

            <p className="mt-8 text-lg leading-9 text-slate-300">
              {service.shortDescription}
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                to="/contact"
                className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
              >
                Get Free Consultation
              </Link>

              <Link
                to="/projects"
                className="flex items-center gap-3 rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#081C33]"
              >
                View Projects
                <FaArrowRight />
              </Link>
            </div>
          </div>

          {/* Right */}

          <div className="relative">
            <img
              src={service.image}
              alt={service.title}
              className="w-full rounded-4xl object-cover border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,.35)]"
            />

            {/* Floating Card */}

            <div className="absolute -bottom-6 left-8 rounded-2xl bg-white px-6 py-5 shadow-2xl">
              <p className="text-sm text-slate-500">Professional Engineering</p>

              <h3 className="mt-1 text-xl font-bold text-[#005BAC]">
                Industrial Solution
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
