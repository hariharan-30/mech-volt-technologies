import { industries } from "./industriesData";
import IndustryCard from "./IndustryCard";

const Industries = () => {
  return (
    <section className="py-24 bg-[#081C33]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">

            Industries We Serve

          </span>

          <h2 className="text-5xl font-bold text-white mt-5">

            Engineering Solutions Across Diverse Industries

          </h2>

          <p className="text-slate-300 mt-6 leading-8">

            We deliver customized automation and engineering solutions
            to industries that demand precision, reliability and innovation.

          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {industries.map((industry) => (

            <IndustryCard
              key={industry.title}
              industry={industry}
            />

          ))}

        </div>

      </div>

    </section>
  );
};

export default Industries;