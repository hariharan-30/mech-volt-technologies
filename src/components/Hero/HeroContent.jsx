import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HeroStats from "./HeroStats";
import { heroData } from "./heroData";

const HeroContent = () => {
  return (
    <div className="max-w-2xl">
      {/* Subtitle */}

      <span className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[4px] text-orange-400 sm:text-sm">
        {heroData.subtitle}
      </span>

      {/* Heading */}

      <h1 className="mt-8 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
        Engineering Smart
        <span className="block text-orange-400">Automation Solutions</span>
        For Modern Industries
      </h1>

      {/* Description */}

      <p className="mt-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
        {heroData.description}
      </p>

      {/* Buttons */}

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          to="/contact"
          className="
            inline-flex
            items-center
            justify-center
            gap-3

            rounded-2xl

            bg-orange-500

            px-8
            py-4

            font-semibold
            text-white

            shadow-lg

            transition-all
            duration-300

            hover:-translate-y-1
            hover:bg-orange-600
            hover:shadow-2xl
          "
        >
          Get Free Consultation
          <FaArrowRight className="text-sm" />
        </Link>

        <Link
          to="/services"
          className="
            inline-flex
            items-center
            justify-center
            gap-3

            rounded-2xl

            border
            border-white/20

            bg-white/5
            backdrop-blur-md

            px-8
            py-4

            font-semibold

            text-white

            transition-all
            duration-300

            hover:bg-white
            hover:text-[#071A2E]
            hover:shadow-xl
          "
        >
          Explore Services
          <FaArrowRight className="text-sm" />
        </Link>
      </div>

      {/* Stats */}

      <HeroStats />
    </div>
  );
};

export default HeroContent;
