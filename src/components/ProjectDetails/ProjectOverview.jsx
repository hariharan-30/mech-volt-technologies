import { FaBullseye, FaLightbulb } from "react-icons/fa";

const ProjectOverview = ({ project }) => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="uppercase tracking-[4px] text-orange-500 font-semibold text-sm">
            Project Overview
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Engineering Excellence in Action
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every project is executed with a focus on innovation, quality,
            safety and long-term operational performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300">
            <h3 className="text-3xl font-bold text-slate-900">Overview</h3>

            <p className="mt-8 text-slate-600 leading-9 text-lg">
              {project.overview}
            </p>
          </div>

          {/* Right */}

          <div className="space-y-8">
            {/* Challenge */}

            <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100">
                  <FaBullseye className="text-3xl text-red-500" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Challenge
                  </h3>

                  <p className="text-slate-500">
                    Understanding the Client's Needs
                  </p>
                </div>
              </div>

              <p className="mt-8 leading-8 text-slate-600">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}

            <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
                  <FaLightbulb className="text-3xl text-green-600" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Solution
                  </h3>

                  <p className="text-slate-500">Our Engineering Approach</p>
                </div>
              </div>

              <p className="mt-8 leading-8 text-slate-600">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
