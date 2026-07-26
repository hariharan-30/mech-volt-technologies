// import {
//   FaCalendarAlt,
//   FaIndustry,
//   FaMapMarkerAlt,
//   FaUserTie,
// } from "react-icons/fa";

// const ProjectHero = ({ project }) => {
//   return (
//     <section className="relative overflow-hidden bg-linear-to-br from-[#081C33] via-[#0B2745] to-[#0F3B63] pt-36 pb-20">
//       {/* Background Blur */}

//       <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl"></div>

//       <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#005BAC]/30 blur-3xl"></div>

//       <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
//         {/* Breadcrumb */}

//         <p className="text-sm text-slate-300">
//           Home
//           <span className="mx-2">/</span>
//           Projects
//           <span className="mx-2">/</span>
//           <span className="text-orange-400">{project.title}</span>
//         </p>

//         <div className="grid lg:grid-cols-2 gap-14 items-center mt-8">
//           {/* Left */}

//           <div>
//             <span className="inline-block rounded-full bg-orange-500/20 border border-orange-500/30 px-5 py-2 text-sm font-semibold tracking-wider uppercase text-orange-300">
//               {project.category}
//             </span>

//             <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-white">
//               {project.title}
//             </h1>

//             <p className="mt-8 text-lg leading-9 text-slate-300">
//               {project.overview}
//             </p>

//             {/* Info */}

//             <div className="mt-12 grid grid-cols-2 gap-5">
//               <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5">
//                 <FaUserTie className="text-orange-400 text-2xl" />

//                 <h4 className="mt-4 text-sm uppercase tracking-wider text-slate-400">
//                   Client
//                 </h4>

//                 <p className="mt-2 text-lg font-semibold text-white">
//                   {project.client}
//                 </p>
//               </div>

//               <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5">
//                 <FaIndustry className="text-orange-400 text-2xl" />

//                 <h4 className="mt-4 text-sm uppercase tracking-wider text-slate-400">
//                   Industry
//                 </h4>

//                 <p className="mt-2 text-lg font-semibold text-white">
//                   {project.industry}
//                 </p>
//               </div>

//               <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5">
//                 <FaMapMarkerAlt className="text-orange-400 text-2xl" />

//                 <h4 className="mt-4 text-sm uppercase tracking-wider text-slate-400">
//                   Location
//                 </h4>

//                 <p className="mt-2 text-lg font-semibold text-white">
//                   {project.location}
//                 </p>
//               </div>

//               <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5">
//                 <FaCalendarAlt className="text-orange-400 text-2xl" />

//                 <h4 className="mt-4 text-sm uppercase tracking-wider text-slate-400">
//                   Duration
//                 </h4>

//                 <p className="mt-2 text-lg font-semibold text-white">
//                   {project.duration}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right */}

//           <div className="relative">
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full rounded-3xl shadow-2xl object-cover h-70 sm:h-95 lg:h-120"
//             />

//             {/* Floating Badge */}

//             <div className="absolute -bottom-6 left-8 rounded-2xl bg-white px-6 py-5 shadow-2xl">
//               <p className="text-sm text-slate-500">Project Status</p>

//               <h3 className="mt-2 text-xl font-bold text-green-600">
//                 ✔ Successfully Completed
//               </h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectHero;



import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaIndustry,
  FaMapMarkerAlt,
  FaUserTie,
} from "react-icons/fa";

const ProjectHero = ({ project }) => {
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

          <Link to="/projects" className="hover:text-white transition">
            Projects
          </Link>

          <span>/</span>

          <span className="text-orange-400">{project.title}</span>
        </div>

        {/* Hero */}

        <div className="grid lg:grid-cols-2 gap-14 items-center mt-10">
          {/* Left */}

          <div>
            <span className="inline-block rounded-full bg-orange-500/20 border border-orange-400/30 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-orange-300">
              {project.category}
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-white">
              {project.title}
            </h1>

            <p className="mt-8 text-lg leading-9 text-slate-300">
              {project.shortDescription}
            </p>

            {/* Info */}

            <div className="grid grid-cols-2 gap-5 mt-12">
              <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5">
                <FaUserTie className="text-orange-400 text-2xl" />

                <p className="mt-4 text-sm text-slate-300">Client</p>

                <h4 className="mt-1 font-semibold text-white">
                  {project.client}
                </h4>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5">
                <FaIndustry className="text-orange-400 text-2xl" />

                <p className="mt-4 text-sm text-slate-300">Industry</p>

                <h4 className="mt-1 font-semibold text-white">
                  {project.industry}
                </h4>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5">
                <FaMapMarkerAlt className="text-orange-400 text-2xl" />

                <p className="mt-4 text-sm text-slate-300">Location</p>

                <h4 className="mt-1 font-semibold text-white">
                  {project.location}
                </h4>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5">
                <FaCalendarAlt className="text-orange-400 text-2xl" />

                <p className="mt-4 text-sm text-slate-300">Duration</p>

                <h4 className="mt-1 font-semibold text-white">
                  {project.duration}
                </h4>
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-4xl object-cover shadow-[0_25px_80px_rgba(0,0,0,0.35)] border border-white/10"
            />

            {/* Floating Badge */}

            <div className="absolute -bottom-6 left-8 rounded-2xl bg-white px-6 py-4 shadow-2xl">
              <p className="text-sm text-slate-500">
                Successfully Completed
              </p>

              <h3 className="text-xl font-bold text-[#005BAC]">
                Engineering Project
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;