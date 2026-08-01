import { roboticsData } from "./roboticsData";
import { FaArrowRight } from "react-icons/fa";

const RobotApplications = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#2A6F97]">
            Applications
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#12344D]">
            Robotics Applications
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            We build robotic automation solutions across multiple industrial
            applications to improve productivity, precision and manufacturing
            efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {roboticsData.applications.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                group

                bg-white

                rounded-3xl

                p-8

                border

                border-slate-200

                shadow-sm

                transition-all

                duration-500

                hover:-translate-y-3

                hover:border-[#2A6F97]

                hover:shadow-2xl
              "
              >
                <div className="w-16 h-16 rounded-2xl bg-[#12344D] group-hover:bg-[#F59E0B] flex items-center justify-center transition">
                  <Icon className="text-3xl text-white" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#12344D]">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-8">
                  Advanced robotic automation solutions for modern manufacturing
                  industries.
                </p>
{/* 
                <div className="mt-8 flex items-center gap-3 text-[#2A6F97] font-semibold group-hover:text-[#F59E0B]">
                  Learn More
                  <FaArrowRight className="group-hover:translate-x-2 duration-300" />
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RobotApplications;
