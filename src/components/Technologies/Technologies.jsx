import { technologies } from "./technologiesData";
import TechnologyCard from "./TechnologyCard";

const Technologies = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Technology Expertise
          </span>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">
            Advanced Technologies We Work With
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our expertise spans across industrial automation platforms,
            intelligent control systems and advanced engineering technologies.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {technologies.map((tech) => (
            <TechnologyCard
              key={tech.title}
              tech={tech}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Technologies;