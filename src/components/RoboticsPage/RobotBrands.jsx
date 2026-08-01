import { roboticsData } from "./roboticsData";

const RobotBrands = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute -top-40 left-0 h-80 w-80 rounded-full bg-sky-100 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-100 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#2A6F97]">
            Robot Platforms
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-black text-[#12344D]">
            Supported Industrial Robot Brands
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            We develop, integrate and commission multi-brand industrial robotic
            automation systems for manufacturing industries.
          </p>
        </div>

        {/* Brand Cards */}

        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {roboticsData.brands.map((brand) => (
            <div
              key={brand.name}
              className="
                group

                rounded-3xl

                bg-white

                border

                border-slate-200

                p-8

                shadow-sm

                transition-all

                duration-500

                hover:-translate-y-3

                hover:border-[#2A6F97]

                hover:shadow-2xl
              "
            >
              <div className="h-24 flex items-center justify-center">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="
                    max-h-16

                    object-contain

                    grayscale

                    transition-all

                    duration-500

                    group-hover:grayscale-0

                    group-hover:scale-110
                  "
                />
              </div>

              <div className="mt-8 text-center">
                <h3 className="text-xl font-bold text-[#12344D]">
                  {brand.name}
                </h3>

                <p className="mt-3 text-sm text-slate-500">
                  Programming & Integration
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Strip */}

        <div className="mt-20 rounded-4xl bg-linear-to-r from-[#12344D] to-[#2A6F97] p-10 text-center">
          <h3 className="text-3xl font-bold text-white">
            Multi-Brand Robotics Expertise
          </h3>

          <p className="mt-5 max-w-3xl mx-auto text-slate-200 leading-8">
            Our robotics engineers provide programming, commissioning,
            optimization and PLC integration for leading industrial robot
            platforms used across automotive, pharmaceutical, packaging,
            electronics and manufacturing industries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RobotBrands;
