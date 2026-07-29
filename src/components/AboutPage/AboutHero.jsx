import { Link } from "react-router-dom";
import banner from "../../assets/images/about-banner.webp";

const AboutHero = () => {
  return (
    <section
      className="relative min-h-[70vh] flex items-center bg-cover bg-center pt-32 sm:pt-36 lg:pt-40 pb-16 overflow-hidden"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#081C33]/90 via-[#0A2747]/80 to-[#0D3A68]/70"></div>

      {/* Decorative Blur */}
      <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl text-center mx-auto">
          {/* Label */}

          <span className="inline-block uppercase tracking-[5px] text-orange-400 font-semibold text-sm">
            About Mech Volt Technologies
          </span>

          {/* Heading */}

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Engineering Innovation
            <br />
            Driving Industrial Excellence
          </h1>

          {/* Description */}

          <p className="mt-8 text-base sm:text-lg lg:text-xl leading-8 text-slate-200 max-w-3xl mx-auto">
            We deliver cutting-edge industrial automation, PLC programming, SPM
            machine design, electrical control panel solutions and smart
            manufacturing systems that improve productivity, efficiency and
            operational reliability across industries.
          </p>

          {/* Breadcrumb */}

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm sm:text-base text-white">
            <Link to="/" className="transition hover:text-orange-400">
              Home
            </Link>

            <span className="text-slate-400">/</span>

            <span className="text-orange-400 font-medium">About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
