import { heroData } from "./heroData";

const HeroImage = () => {
  return (
    <div className="relative flex items-center justify-center mt-12 xl:mt-0">
      {/* Background Glow */}

      <div className="absolute h-105 w-105 rounded-full bg-[#005BAC]/15 blur-3xl"></div>

      {/* Main Image */}

      <img
        src={heroData.image}
        alt="Industrial Automation"
        className="
          relative
          z-10

          w-full
          max-w-[320px]
          sm:max-w-105
          lg:max-w-130
          xl:max-w-155

          object-contain

          drop-shadow-[0_35px_60px_rgba(0,0,0,0.45)]

          transition-transform
          duration-500

          hover:scale-[1.02]
        "
      />

      {/* PLC Card */}

      <div
        className="
          absolute
          top-6
          left-2

          hidden
          md:block

          rounded-2xl
          border
          border-white/20

          bg-white/95

          px-6
          py-5

          shadow-2xl
          backdrop-blur-md
        "
      >
        <h4 className="text-xl font-bold text-[#005BAC]">PLC</h4>

        <p className="mt-1 text-sm text-slate-500">Programming</p>
      </div>

      {/* SPM Card */}

      <div
        className="
          absolute
          bottom-6
          right-2

          hidden
          md:block

          rounded-2xl

          bg-orange-500

          px-6
          py-5

          text-white

          shadow-2xl
        "
      >
        <h4 className="text-xl font-bold">SPM</h4>

        <p className="mt-1 text-sm">Machine Design</p>
      </div>

      {/* Automation Badge */}

      <div
        className="
          absolute
          -bottom-6
          left-1/2
          -translate-x-1/2

          hidden
          lg:flex

          items-center
          gap-3

          rounded-full

          border
          border-white/10

          bg-[#071A2E]/90

          px-6
          py-3

          text-white

          backdrop-blur-md

          shadow-xl
        "
      >
        <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></span>

        <span className="text-sm font-medium">Smart Industrial Automation</span>
      </div>
    </div>
  );
};

export default HeroImage;
