import { heroData } from "./heroData";

const HeroStats = () => {
  return (
    <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5">
      {heroData.stats.map((item) => (
        <div
          key={item.title}
          className="
            group

            relative
            overflow-hidden

            rounded-3xl

            border
            border-white/10

            bg-white/5
            backdrop-blur-md

            p-6

            text-center

            transition-all
            duration-500

            hover:-translate-y-2
            hover:border-orange-500/40
            hover:bg-white/10
            hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]
          "
        >
          {/* Top Accent */}

          <div
            className="
              absolute
              left-0
              top-0

              h-1
              w-0

              bg-orange-500

              transition-all
              duration-500

              group-hover:w-full
            "
          />

          {/* Number */}

          <h2
            className="
              text-3xl
              lg:text-4xl

              font-extrabold

              text-white

              transition

              group-hover:text-orange-400
            "
          >
            {item.number}
          </h2>

          {/* Divider */}

          <div className="mx-auto my-4 h-px w-10 bg-white/20 transition-all duration-300 group-hover:w-16 group-hover:bg-orange-500"></div>

          {/* Title */}

          <p
            className="
              text-sm
              lg:text-base

              font-medium

              tracking-wide

              text-slate-300

              transition

              group-hover:text-white
            "
          >
            {item.title}
          </p>

          {/* Background Glow */}

          <div
            className="
              absolute
              -bottom-10
              -right-10

              h-24
              w-24

              rounded-full

              bg-orange-500/10

              blur-2xl

              opacity-0

              transition-all
              duration-500

              group-hover:opacity-100
            "
          />
        </div>
      ))}
    </div>
  );
};

export default HeroStats;
