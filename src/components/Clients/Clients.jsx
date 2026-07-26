// import { clients } from "./clientData";

// const Clients = () => {
//   return (
//     <section className="bg-white py-20">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-14">
//           <span className="uppercase tracking-[4px] text-orange-500 font-semibold text-sm">
//             Trusted By
//           </span>

//           <h2 className="text-4xl font-bold text-slate-900 mt-4">
//             Industries We Work With
//           </h2>

//           <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
//             Delivering automation and engineering solutions to leading
//             manufacturing industries across multiple sectors.
//           </p>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
//           {clients.map((client) => (
//             <div
//               key={client.id}
//               className="bg-slate-50 border rounded-xl p-6 flex items-center justify-center hover:shadow-xl hover:-translate-y-2 duration-300"
//             >
//               <img
//                 src={client.logo}
//                 alt={client.name}
//                 className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;



import { clients } from "./clientData";

const Clients = () => {
  return (
    <section className="bg-white py-16 md:py-20 xl:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">
          <span className="uppercase tracking-[4px] text-orange-500 font-semibold text-sm">
            Trusted By
          </span>

          <h2
            className="
              mt-4

              text-3xl
              sm:text-4xl
              xl:text-5xl

              font-bold

              text-slate-900
            "
          >
            Industries We Work With
          </h2>

          <p
            className="
              mt-6

              text-base
              md:text-lg

              leading-8

              text-slate-600
            "
          >
            Delivering automation and engineering solutions to leading
            manufacturing industries across multiple sectors.
          </p>
        </div>

        {/* Clients */}

        <div
          className="
            mt-14

            grid

            grid-cols-2
            sm:grid-cols-3
            xl:grid-cols-6

            gap-5
            xl:gap-8
          "
        >
          {clients.map((client) => (
            <div
              key={client.id}
              className="
                group

                flex
                items-center
                justify-center

                rounded-2xl

                border
                border-slate-200

                bg-slate-50

                p-6

                transition-all
                duration-300

                hover:-translate-y-2
                hover:shadow-xl
                hover:border-orange-500
              "
            >
              <img
                src={client.logo}
                alt={client.name}
                className="
                  h-10
                  sm:h-12

                  object-contain

                  grayscale

                  transition-all
                  duration-300

                  group-hover:grayscale-0
                  group-hover:scale-105
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;