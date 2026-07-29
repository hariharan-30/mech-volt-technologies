import { heroData } from "./heroData";

const HeroStats = () => {
  return (
    <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {heroData.stats.map((item) => (
        <div
          key={item.title}
          className="
            group

            rounded-2xl

            border border-white/10

            bg-white/4

            backdrop-blur-xl

            px-5
            py-4

            transition-all
            duration-300

            hover:border-cyan-400/30
            hover:bg-white/8
            hover:-translate-y-1
          "
        >
          {/* Number */}

          <div className="flex items-end gap-1">
            <h3
              className="
                text-2xl
                lg:text-3xl

                font-bold

                text-white

                group-hover:text-cyan-300

                transition
              "
            >
              {item.number}
            </h3>
          </div>

          {/* Small Divider */}

          <div className="mt-2 mb-3 h-0.5 w-8 rounded-full bg-cyan-400" />

          {/* Title */}

          <p
            className="
              text-xs
              lg:text-sm

              leading-5

              text-slate-400

              group-hover:text-slate-200

              transition
            "
          >
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;
