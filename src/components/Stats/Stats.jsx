import { stats } from "./statsData";
import StatCard from "./StatCard";

const Stats = () => {
  return (
    <section className="py-24 bg-[#081C33] relative overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-size-[30px_30px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Our Achievements
          </span>

          <h2 className="text-5xl font-bold text-white mt-5">
            Numbers That Reflect Our Excellence
          </h2>

          <p className="text-slate-300 mt-6 max-w-3xl mx-auto leading-8">
            Every successful project strengthens our commitment to
            delivering reliable industrial automation and engineering
            solutions.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {stats.map((item) => (
            <StatCard
              key={item.title}
              item={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Stats;