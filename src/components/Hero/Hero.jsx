import FadeUp from "../../animations/FadeUp";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#071A2E]">
      {/* Background Pattern */}

      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-size-[35px_35px]" />

      {/* Left Glow */}

      <div className="absolute -top-40 -left-40 h-105 w-105 rounded-full bg-[#005BAC]/20 blur-3xl" />

      {/* Right Glow */}

      <div className="absolute -bottom-40 -right-40 h-105 w-105 rounded-full bg-orange-500/10 blur-3xl" />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div
          className="
            min-h-screen
            pt-32
            sm:pt-36
            lg:pt-40
            pb-16

            grid
            grid-cols-1
            xl:grid-cols-2

            items-center
            gap-16
            xl:gap-20
          "
        >
          {/* Left */}

          <HeroContent />

          {/* Right */}

          <HeroImage />
        </div>
      </div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 h-24 w-full bg-linear-to-t from-[#071A2E] to-transparent"></div>
    </section>
  );
};

export default Hero;
