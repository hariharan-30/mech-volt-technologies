import FadeRight from "../../animations/FadeRight";
import { whyChooseData } from "./whyChooseData";

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 md:py-20 xl:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">
          <span className="uppercase tracking-[4px] text-orange-500 font-semibold text-sm">
            Why Choose Us
          </span>

          <h2
            className="
              mt-5

              text-3xl
              sm:text-4xl
              xl:text-5xl

              font-bold

              text-slate-900

              leading-tight
            "
          >
            Engineering Excellence That Drives Innovation
          </h2>

          <p
            className="
              mt-6

              text-base
              md:text-lg

              leading-8

              text-slate-600
            "
          >
            We combine innovation, engineering expertise and advanced automation
            technologies to deliver world-class industrial solutions.
          </p>
        </div>

        {/* Cards */}

        <FadeRight>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8 mt-14 xl:mt-20">
            {whyChooseData.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                  group

                  h-full

                  rounded-3xl

                  border
                  border-slate-200

                  bg-slate-50

                  p-8

                  transition-all
                  duration-300

                  hover:-translate-y-2
                  hover:border-orange-500
                  hover:shadow-2xl
                "
                >
                  {/* Icon */}

                  <div
                    className="
                    flex
                    items-center
                    justify-center

                    w-16
                    h-16

                    rounded-2xl

                    bg-[#005BAC]

                    transition-all
                    duration-300

                    group-hover:bg-orange-500
                    group-hover:rotate-6
                  "
                  >
                    <Icon className="text-3xl text-white" />
                  </div>

                  {/* Title */}

                  <h3
                    className="
                    mt-6

                    text-xl
                    xl:text-2xl

                    font-bold

                    text-slate-900
                  "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                    mt-4

                    text-slate-600

                    leading-8

                    text-[15px]
                    md:text-base
                  "
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeRight>
      </div>
    </section>
  );
};

export default WhyChooseUs;
