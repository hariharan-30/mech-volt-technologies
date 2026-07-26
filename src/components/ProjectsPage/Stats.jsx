import { projectStats } from "../../data/projectStats";

const Stats = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Our Performance
          </span>

          <h2 className="text-5xl font-bold mt-4 text-slate-900">
            Proven Engineering Excellence
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            Over the years, we have successfully delivered industrial automation
            and machine building projects across multiple sectors with a strong
            focus on quality and customer satisfaction.
          </p>
        </div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectStats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group bg-slate-50 rounded-3xl p-10 text-center hover:bg-[#005BAC] transition duration-300 shadow-md hover:shadow-xl"
              >
                <div className="w-20 h-20 mx-auto rounded-2xl bg-orange-500 flex items-center justify-center mb-6 group-hover:bg-white transition">
                  <Icon className="text-white text-4xl group-hover:text-[#005BAC]" />
                </div>

                <h3 className="text-5xl font-bold text-[#005BAC] group-hover:text-white">
                  {item.number}
                </h3>

                <p className="mt-4 text-lg font-medium text-slate-600 group-hover:text-slate-200">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
