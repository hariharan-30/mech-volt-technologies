// import { FaArrowRight } from "react-icons/fa";

// import heroImage from "../../assets/images/projects-hero.jpg";

// const Hero = () => {
//   return (
//     <section
//       className="relative h-[65vh] bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${heroImage})`,
//       }}
//     >
//       {/* Overlay */}

//       <div className="absolute inset-0 bg-linear-to-r from-[#001B36]/90 via-[#003B73]/80 to-[#005BAC]/60"></div>

//       {/* Content */}

//       <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">

//         <div className="max-w-3xl">

//           <span className="uppercase tracking-[5px] text-orange-400 font-semibold">

//             Our Portfolio

//           </span>

//           <h1 className="text-5xl lg:text-7xl font-bold text-white mt-6 leading-tight">

//             Engineering Projects
//             <br />
//             That Drive Industrial
//             <span className="text-orange-400"> Excellence</span>

//           </h1>

//           <p className="text-xl text-slate-200 mt-8 leading-9 max-w-2xl">

//             Explore our successful industrial automation,
//             PLC programming, SPM machine design,
//             control panel manufacturing and turnkey
//             engineering projects delivered across
//             multiple industries.

//           </p>

//           <div className="flex gap-5 flex-wrap mt-10">

//             <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-3 transition">

//               View Projects

//               <FaArrowRight />

//             </button>

//             <button className="border border-white text-white hover:bg-white hover:text-[#005BAC] px-8 py-4 rounded-xl font-semibold transition">

//               Request Consultation

//             </button>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default Hero;

import { FaArrowRight } from "react-icons/fa";
import heroImage from "../../assets/images/projects-hero.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-[75vh] overflow-hidden bg-cover bg-center pt-32 sm:pt-36 lg:pt-40 pb-20 flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-linear-to-r from-[#071A2E]/95 via-[#0B2E52]/85 to-[#005BAC]/70"></div>

      {/* Decorative Blur */}

      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Label */}

          <span className="inline-block uppercase tracking-[5px] text-orange-400 font-semibold text-sm">
            Our Portfolio
          </span>

          {/* Heading */}

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white">
            Engineering Projects
            <br />
            That Drive Industrial
            <span className="text-orange-400"> Excellence</span>
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-3xl text-base sm:text-lg lg:text-xl leading-8 text-slate-200">
            Explore our successful industrial automation, PLC programming, SPM
            machine design, control panel manufacturing and turnkey engineering
            projects delivered across multiple industries.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="w-full sm:w-auto rounded-2xl bg-orange-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl flex items-center justify-center gap-3">
              View Projects
              <FaArrowRight />
            </button>

            <button className="w-full sm:w-auto rounded-2xl border border-white/40 bg-white/5 backdrop-blur-sm px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#005BAC]">
              Request Consultation
            </button>
          </div>

          {/* Stats */}

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5 text-center">
              <h3 className="text-3xl font-bold text-orange-400">100+</h3>

              <p className="mt-2 text-sm text-slate-200">Projects</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5 text-center">
              <h3 className="text-3xl font-bold text-orange-400">50+</h3>

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

export default Hero;
