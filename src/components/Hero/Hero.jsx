import FadeUp from "../../animations/FadeUp";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B1120]">
      {/* Grid Pattern */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)]
          bg-size-[38px_38px]
        "
      />

      {/* Top Left Glow */}

      <div
        className="
          absolute
          -top-40
          -left-40

          h-125
          w-125

          rounded-full

          bg-cyan-400/10

          blur-[140px]
        "
      />

      {/* Bottom Right Glow */}

      <div
        className="
          absolute
          bottom-0
          right-0

          h-105
          w-105

          rounded-full

          bg-[#005BAC]/15

          blur-[130px]
        "
      />

      {/* Orange Accent */}

      <div
        className="
          absolute
          top-40
          right-32

          h-40
          w-40

          rounded-full

          bg-orange-500/10

          blur-[90px]
        "
      />

      {/* Main */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className="
            min-h-svh

            grid

            items-center

            gap-16

            lg:grid-cols-2

            pt-32
            lg:pt-36

            pb-20
          "
        >
          <FadeUp>
            <HeroContent />
          </FadeUp>

          <FadeUp>
            <HeroImage />
          </FadeUp>
        </div>
      </div>

      {/* Bottom Gradient */}

      <div
        className="
          absolute
          bottom-0
          left-0

          h-32
          w-full

          bg-linear-to-t
          from-[#0B1120]
          to-transparent
        "
      />
    </section>
  );
};

export default Hero;
