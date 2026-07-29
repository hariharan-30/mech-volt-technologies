import hero from "../../assets/images/services-banner.webp";

const ServicesHero = () => {
  return (
    <section
      className="relative min-h-[70vh] overflow-hidden bg-cover bg-center pt-32 sm:pt-36 lg:pt-40 pb-16 flex items-center"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#071A2E]/90 via-[#0A294A]/80 to-[#114E8C]/70"></div>

      {/* Decorative Blur */}
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Label */}

          <span className="inline-block uppercase tracking-[5px] text-orange-400 font-semibold text-sm">
            Our Services
          </span>

          {/* Heading */}

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Smart Industrial
            <br />
            Automation Solutions
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-3xl text-base sm:text-lg lg:text-xl leading-8 text-slate-200">
            We provide complete industrial automation, PLC programming, SCADA
            development, SPM machine design, electrical engineering, control
            panel manufacturing and Industry 4.0 solutions for modern
            manufacturing industries.
          </p>

          {/* Stats */}

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5 text-center">
              <h3 className="text-3xl font-bold text-orange-400">50+</h3>
              <p className="mt-2 text-sm text-slate-200">Projects</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5 text-center">
              <h3 className="text-3xl font-bold text-orange-400">20+</h3>
              <p className="mt-2 text-sm text-slate-200">Clients</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5 text-center">
              <h3 className="text-3xl font-bold text-orange-400">8+</h3>
              <p className="mt-2 text-sm text-slate-200">Years Experience</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5 text-center">
              <h3 className="text-3xl font-bold text-orange-400">24/7</h3>
              <p className="mt-2 text-sm text-slate-200">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
