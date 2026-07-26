import { FaChartLine, FaBolt, FaCheckCircle, FaIndustry } from "react-icons/fa";

const icons = [FaChartLine, FaBolt, FaIndustry, FaCheckCircle];

const ProjectResults = ({ project }) => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[4px] text-orange-500 font-semibold text-sm">
            Results
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Project Achievements
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            The implemented solution delivered measurable improvements in
            productivity, efficiency and overall plant performance.
          </p>
        </div>

        {/* Result Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {project.results.map((result, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={index}
                className="group rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl hover:border-orange-500 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#005BAC] group-hover:bg-orange-500 flex items-center justify-center transition">
                  <Icon className="text-3xl text-white" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {result}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  Successfully achieved through optimized engineering,
                  automation and industrial best practices.
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}

        <div className="mt-20 rounded-3xl bg-linear-to-r from-[#005BAC] to-[#0A79D8] p-10 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold">
            Delivering Measurable Industrial Performance
          </h3>

          <p className="mt-5 max-w-3xl mx-auto leading-8 text-blue-100">
            Every project is designed with productivity, safety, scalability and
            long-term operational efficiency in mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectResults;
