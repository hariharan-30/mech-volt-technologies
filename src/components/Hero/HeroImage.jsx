import { FaBolt, FaCog, FaAward, FaCheckCircle } from "react-icons/fa";

import GlassCard from "../Ui/GlassCard";
import { heroData } from "./heroData";

const HeroImage = () => {
  return (
    <div className="relative flex items-center justify-center mt-16 lg:mt-0">
      {/* Background Glow */}

      <div className="absolute h-155 w-155 rounded-full bg-cyan-400/10 blur-[120px]" />

      {/* Main Image */}

      <img
        src={heroData.image}
        alt="Industrial Automation"
        className="
          relative
          z-10

          w-full

          max-w-85
          sm:max-w-107.5
          lg:max-w-130
          xl:max-w-155

          object-contain

          drop-shadow-[0_45px_80px_rgba(0,0,0,.45)]

          transition-all
          duration-500

          hover:scale-[1.02]
        "
      />

      {/* PLC Card */}

      <GlassCard
        className="
          absolute

          top-4
          left-0

          hidden
          lg:block

          p-5

          w-56
        "
      >
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500">
            <FaBolt className="text-white text-lg" />
          </div>

          <div>
            <h4 className="font-bold text-white">PLC Programming</h4>

            <p className="text-sm text-slate-300">Siemens • Mitsubishi</p>
          </div>
        </div>
      </GlassCard>

      {/* Experience Card */}

      <GlassCard
        className="
          absolute

          bottom-16
          left-6

          hidden
          lg:block

          p-6

          text-center

          w-40
        "
      >
        <FaAward className="mx-auto text-3xl text-orange-400" />

        <h3 className="mt-3 text-4xl font-black text-white">8+</h3>

        <p className="mt-1 text-sm text-slate-300">Years Experience</p>
      </GlassCard>

      {/* SPM Card */}

      <GlassCard
        className="
          absolute

          right-0
          bottom-8

          hidden
          lg:block

          w-60

          p-5
        "
      >
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500">
            <FaCog className="text-white text-lg" />
          </div>

          <div>
            <h4 className="font-bold text-white">SPM Machine Design</h4>

            <p className="text-sm text-slate-300">Custom Industrial Machines</p>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <FaCheckCircle className="text-cyan-400" />
            Conveyor Systems
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-300">
            <FaCheckCircle className="text-cyan-400" />
            Robotic Automation
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-300">
            <FaCheckCircle className="text-cyan-400" />
            Turnkey Integration
          </div>
        </div>
      </GlassCard>

      {/* Bottom Badge */}

      <div
        className="
          absolute

          -bottom-8
          left-1/2

          hidden
          lg:flex

          -translate-x-1/2

          items-center
          gap-3

          rounded-full

          border
          border-cyan-400/20

          bg-white/5

          backdrop-blur-xl

          px-6
          py-3

          shadow-xl
        "
      >
        <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

        <span className="font-medium text-white">
          Smart Industrial Automation Solutions
        </span>
      </div>
    </div>
  );
};

export default HeroImage;
