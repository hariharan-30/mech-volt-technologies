// import {
//     FaUserTie,
//     FaIndustry,
//     FaMapMarkerAlt,
//     FaCalendarAlt,
//   } from "react-icons/fa";

//   const info = [
//     {
//       key: "client",
//       title: "Client",
//       icon: FaUserTie,
//     },
//     {
//       key: "industry",
//       title: "Industry",
//       icon: FaIndustry,
//     },
//     {
//       key: "location",
//       title: "Location",
//       icon: FaMapMarkerAlt,
//     },
//     {
//       key: "duration",
//       title: "Duration",
//       icon: FaCalendarAlt,
//     },
//   ];

//   const ProjectInfo = ({ project }) => {
//     return (
//       <section className="py-20 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
//           {/* Heading */}

//           <div className="text-center max-w-3xl mx-auto">
//             <span className="uppercase tracking-[4px] text-orange-500 font-semibold text-sm">
//               Project Information
//             </span>

//             <h2 className="mt-4 text-4xl font-bold text-slate-900">
//               Project Summary
//             </h2>

//             <p className="mt-6 text-slate-600 leading-8">
//               Key project information including client details, industry,
//               project duration and deployment location.
//             </p>
//           </div>

//           {/* Cards */}

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
//             {info.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.key}
//                   className="group rounded-3xl bg-white border border-slate-200 p-8 text-center shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
//                 >
//                   <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#005BAC]/10 group-hover:bg-orange-500 transition">
//                     <Icon className="text-3xl text-[#005BAC] group-hover:text-white transition" />
//                   </div>

//                   <h3 className="mt-6 text-lg font-semibold text-slate-500">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 text-xl font-bold text-slate-900">
//                     {project[item.key]}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     );
//   };

//   export default ProjectInfo;

import {
  FaUserTie,
  FaIndustry,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const info = [
  {
    key: "client",
    title: "Client",
    icon: FaUserTie,
  },
  {
    key: "industry",
    title: "Industry",
    icon: FaIndustry,
  },
  {
    key: "location",
    title: "Location",
    icon: FaMapMarkerAlt,
  },
  {
    key: "duration",
    title: "Duration",
    icon: FaCalendarAlt,
  },
];

const ProjectInfo = ({ project }) => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[4px] text-orange-500 font-semibold text-sm">
            Project Information
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Project Summary
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Complete project information including client, industry, deployment
            location and execution timeline.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-16">
          {info.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.key}
                className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-orange-400 hover:shadow-2xl"
              >
                {/* Background Accent */}

                <div className="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-[#005BAC] to-orange-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>

                {/* Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#005BAC]/10 group-hover:bg-orange-500 transition">
                  <Icon className="text-3xl text-[#005BAC] group-hover:text-white transition" />
                </div>

                {/* Title */}

                <p className="mt-8 uppercase tracking-wider text-sm text-slate-500 font-semibold">
                  {item.title}
                </p>

                {/* Value */}

                <h3 className="mt-3 text-2xl font-bold text-slate-900 leading-snug">
                  {project[item.key]}
                </h3>

                {/* Bottom Line */}

                <div className="mt-8 h-0.5 w-16 bg-orange-500 rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectInfo;
