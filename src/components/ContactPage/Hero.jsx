import heroImage from "../../assets/images/contact-hero.webp";

const Hero = () => {
  return (
    <section
      className="relative min-h-[70vh] overflow-hidden bg-cover bg-center pt-32 sm:pt-36 lg:pt-40 pb-16 flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-linear-to-r from-[#071A2E]/95 via-[#0B2E52]/85 to-[#005BAC]/70"></div>

      {/* Decorative Blur */}

      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center mx-auto">
          {/* Label */}

          <span className="inline-block uppercase tracking-[5px] text-orange-400 font-semibold text-sm">
            Contact Us
          </span>

          {/* Heading */}

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Let's Build Your Next
            <br />
            Automation Project
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-8 text-slate-200">
            Get in touch with our engineering experts for industrial automation,
            PLC programming, SPM machine design, control panel manufacturing and
            complete turnkey engineering solutions tailored to your business.
          </p>

          {/* Contact Highlights */}

          {/* <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-6">
              <h3 className="text-3xl font-bold text-orange-400">24/7</h3>

              <p className="mt-2 text-slate-200">Technical Support</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-6">
              <h3 className="text-3xl font-bold text-orange-400">Fast</h3>

              <p className="mt-2 text-slate-200">Response Time</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-6">
              <h3 className="text-3xl font-bold text-orange-400">PAN India</h3>

              <p className="mt-2 text-slate-200">Service Network</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
