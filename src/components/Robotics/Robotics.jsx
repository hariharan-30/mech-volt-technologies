import RoboticsCard from "./RoboticsCard";
import { roboticsData } from "./roboticsData";

const Robotics = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Robotics
          </span>

          <h2 className="mt-5 text-5xl font-black text-[#12344D]">
            Industrial Robotics Solutions
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Expand your production capabilities with industrial robot
            programming, robotic cell integration and smart automation
            solutions.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <RoboticsCard data={roboticsData} />
        </div>
      </div>
    </section>
  );
};

export default Robotics;
