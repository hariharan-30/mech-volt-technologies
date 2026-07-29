import { clients } from "./clientData";

const Clients = () => {
  const logos = [...clients, ...clients];

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[4px] text-[#0A7EA4] font-semibold text-sm">
            Trusted By
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
            Trusted By Industry Leaders
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Delivering world-class industrial automation and engineering
            solutions for leading manufacturing companies across India.
          </p>
        </div>
      </div>

      {/* Fade Left */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-28 bg-linear-to-r from-white to-transparent z-10" />

      {/* Fade Right */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-28 bg-linear-to-l from-white to-transparent z-10" />

      {/* Marquee */}

      <div className="group mt-16 overflow-hidden">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {logos.map((client, index) => (
            <div
              key={index}
              className="mx-12 flex h-20 w-40 items-center justify-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="
                  max-h-12
                  object-contain
                  grayscale
                  opacity-70
                  transition-all
                  duration-300

                  hover:grayscale-0
                  hover:opacity-100
                  hover:scale-110
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
