import { Link } from "react-router-dom";
import { FaArrowRight, FaRobot } from "react-icons/fa";

const RoboticsCard = ({ data }) => {
  return (
    <Link
      to={data.link}
      className="
        group
        block
        overflow-hidden
        rounded-4xl
        bg-white
        border
        border-slate-200
        shadow-sm
        hover:shadow-2xl
        hover:border-[#2A6F97]
        transition-all
        duration-500
      "
    >
      <img
        src={data.image}
        alt={data.title}
        className="h-72 w-full object-cover duration-700 group-hover:scale-105"
      />

      <div className="p-8">
        <div className="w-16 h-16 rounded-2xl bg-[#12344D] flex items-center justify-center">
          <FaRobot className="text-3xl text-white" />
        </div>

        <p className="mt-6 uppercase tracking-[4px] text-sm text-[#2A6F97] font-semibold">
          {data.subtitle}
        </p>

        <h3 className="mt-3 text-3xl font-black text-[#12344D]">
          {data.title}
        </h3>

        <p className="mt-5 leading-8 text-slate-600">{data.description}</p>

        <div className="mt-8 flex items-center gap-3 font-semibold text-[#2A6F97] group-hover:text-orange-500">
          {data.button}

          <FaArrowRight className="group-hover:translate-x-2 duration-300" />
        </div>
      </div>
    </Link>
  );
};

export default RoboticsCard;
