import { processSteps } from "./processData";
import ProcessCard from "./ProcessCard";

const Process = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Our Process
          </span>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">
            From Concept to Commissioning
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our proven engineering workflow ensures every project is delivered
            with precision, quality and reliability.
          </p>
        </div>

        {/* Timeline */}

        <div className="grid lg:grid-cols-2 gap-16 mt-20">
          {processSteps.map((step) => (
            <ProcessCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
