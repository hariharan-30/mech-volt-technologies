import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { roboticsData } from "./roboticsData";

const RobotProjects = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-sky-100 blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-100 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#2A6F97]">
            Robotics Projects
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#12344D]">
            Recent Robotics Integrations
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            Explore some of our industrial robotic automation projects
            successfully delivered across manufacturing industries.
          </p>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-10 mt-20">
          {roboticsData.projects.map((project) => (
            <div
              key={project.title}
              className="
                group

                overflow-hidden

                rounded-[30px]

                bg-white

                border

                border-slate-200

                shadow-sm

                transition-all

                duration-500

                hover:-translate-y-3

                hover:shadow-2xl

                hover:border-[#2A6F97]
              "
            >
              {/* Image */}

              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-72

                    w-full

                    object-cover

                    duration-700

                    group-hover:scale-110
                  "
                />
              </div>

              {/* Body */}

              <div className="p-8">
                <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
                  {project.industry}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-[#12344D]">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-8">
                  {project.description}
                </p>

                {/* Details */}

                <div className="mt-8 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Robot</span>

                    <span className="font-semibold">{project.robot}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">PLC</span>

                    <span className="font-semibold">{project.plc}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">Cycle Time</span>

                    <span className="font-semibold">{project.cycleTime}</span>
                  </div>
                </div>

                {/* Results */}

                <div className="mt-8 border-t border-slate-200 pt-6">
                  {project.results.map((item) => (
                    <div key={item} className="flex items-center gap-3 mb-3">
                      <FaCheckCircle className="text-green-500" />

                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}

                <button
                  className="
                    mt-8

                    flex

                    items-center

                    gap-3

                    font-semibold

                    text-[#2A6F97]

                    group-hover:text-orange-500

                    transition
                  "
                >
                  View Project
                  <FaArrowRight className="group-hover:translate-x-2 duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RobotProjects;
