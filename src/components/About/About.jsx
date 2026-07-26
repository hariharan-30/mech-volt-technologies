import { Link } from "react-router-dom";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { aboutData } from "./aboutData";

const About = () => {
  return (
    <section className="bg-slate-50 py-16 md:py-20 xl:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-14 xl:gap-20 items-center">
          {/* Left */}

          <div className="relative">
            <img
              src={aboutData.image}
              alt="About Mech Volt Technologies"
              className="
                w-full
                rounded-3xl
                shadow-2xl
                object-cover

                h-105
                sm:h-125
                lg:h-145
                xl:h-162.5
              "
            />

            {/* Experience Card */}

            <div
              className="
                absolute
                left-5
                bottom-5
                sm:left-8
                sm:bottom-8

                bg-orange-500
                text-white

                rounded-2xl

                px-6
                sm:px-8

                py-5

                shadow-2xl
              "
            >
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold">
                {aboutData.experience}
              </h2>

              <p className="mt-2 uppercase tracking-[3px] text-xs sm:text-sm">
                Years Experience
              </p>
            </div>
          </div>

          {/* Right */}

          <div className="max-w-2xl">
            <span className="uppercase tracking-[4px] text-orange-500 font-semibold text-sm">
              {aboutData.subtitle}
            </span>

            <h2
              className="
                mt-6

                text-3xl
                sm:text-4xl
                xl:text-5xl

                font-bold

                leading-tight

                text-slate-900
              "
            >
              {aboutData.title}
            </h2>

            <p
              className="
                mt-8

                text-slate-600

                text-base
                md:text-lg

                leading-8
              "
            >
              {aboutData.description}
            </p>

            {/* Features */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
              {aboutData.features.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <FaCheckCircle className="text-orange-500 mt-1 shrink-0" />

                  <span className="text-slate-700 leading-7">{item}</span>
                </div>
              ))}
            </div>

            {/* Button */}

            <Link
              to="/about"
              className="
                mt-12

                inline-flex

                items-center
                justify-center

                gap-3

                w-full
                sm:w-auto

                bg-[#005BAC]

                hover:bg-orange-500

                text-white

                px-8
                py-4

                rounded-xl

                font-semibold

                shadow-lg

                hover:shadow-xl

                hover:-translate-y-1

                transition-all
                duration-300
              "
            >
              Learn More
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
