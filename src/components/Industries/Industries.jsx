import { industries } from "./industriesData";
import IndustryCard from "./IndustryCard";

const Industries = () => {
  return (
    <section className="py-24 bg-[#081C33]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#F59E0B]">
            Industries We Serve
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-black leading-tight text-white">
            Automation Solutions
            <span className="block text-[#7DD3FC]">Across Every Industry</span>
          </h2>

          <p className="mt-7 text-lg leading-8 text-slate-300 max-w-3xl mx-auto">
            We design and deliver intelligent automation, electrical engineering
            and turnkey solutions tailored to the unique operational needs of
            diverse industrial sectors.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {industries.map((industry) => (
            <IndustryCard key={industry.title} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
