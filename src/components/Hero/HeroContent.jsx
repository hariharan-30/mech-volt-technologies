import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import HeroStats from "./HeroStats";
import { heroData } from "./heroData";

import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";
import SectionBadge from "../ui/SectionBadge";

const HeroContent = () => {
  return (
    <div className="max-w-2xl">
      {/* Badge */}

      <SectionBadge>{heroData.subtitle}</SectionBadge>

      {/* Heading */}

      <h1
        className="
          mt-8

          text-5xl
          sm:text-6xl
          lg:text-7xl

          font-black

          tracking-[-2px]

          leading-[1.05]

          text-white
        "
      >
        Engineering Smart
        <span
          className="
            block

            bg-linear-to-r

            from-cyan-300
            via-sky-400
            to-[#005BAC]

            bg-clip-text

            text-transparent
          "
        >
          Automation Solutions
        </span>
        <span className="block">For Modern Industries</span>
      </h1>

      {/* Description */}

      <p
        className="
          mt-8

          max-w-xl

          text-lg

          leading-9

          text-slate-300
        "
      >
        {heroData.description}
      </p>

      {/* Features */}

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="flex items-center gap-3 text-slate-200">
          <FaCheckCircle className="text-cyan-400" />
          <span>Industrial Automation</span>
        </div>

        <div className="flex items-center gap-3 text-slate-200">
          <FaCheckCircle className="text-cyan-400" />
          <span>PLC Programming</span>
        </div>

        <div className="flex items-center gap-3 text-slate-200">
          <FaCheckCircle className="text-cyan-400" />
          <span>SPM Machine Design</span>
        </div>

        <div className="flex items-center gap-3 text-slate-200">
          <FaCheckCircle className="text-cyan-400" />
          <span>Turnkey Projects</span>
        </div>
      </div>

      {/* Buttons */}

      <div className="mt-12 flex flex-col gap-5 sm:flex-row">
        <PrimaryButton to="/contact">
          Get Free Consultation
          <FaArrowRight />
        </PrimaryButton>

        <SecondaryButton to="/services">
          Explore Services
          <FaArrowRight />
        </SecondaryButton>
      </div>

      {/* Stats */}

      <HeroStats />
    </div>
  );
};

export default HeroContent;
