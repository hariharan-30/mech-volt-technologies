import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaBullseye,
  FaEye,
  FaAward,
  FaIndustry,
  FaUsers,
  FaProjectDiagram,
} from "react-icons/fa";

import { aboutData } from "./aboutData";

const About = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white via-slate-50 to-white py-24 lg:py-32">
      {/* Background Decorations */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-50" />

        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-orange-100 blur-3xl opacity-50" />

        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#0f172a_1px,transparent_1px)] bg-size-[32px_32px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 xl:grid-cols-2">
          {/* ================= LEFT IMAGE ================= */}

          <div className="relative">
            {/* Main Image */}

            <div className="overflow-hidden rounded-[34px] shadow-[0_35px_80px_rgba(15,23,42,0.18)]">
              <img
                src={aboutData.image}
                alt="Mech Volt Technologies"
                className="h-160 w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Experience Card */}

            {/* <div className="absolute left-6 top-6 rounded-3xl bg-white/95 backdrop-blur-xl px-7 py-6 shadow-2xl border border-slate-200">
              <h2 className="text-5xl font-black text-[#0B4F6C]">
                {aboutData.experience}
              </h2>

              <p className="mt-2 text-xs font-semibold uppercase tracking-[4px] text-slate-500">
                Years Experience
              </p>
            </div> */}

            {/* Projects Card */}

            {/* <div className="absolute -right-5 top-1/2 rounded-3xl bg-[#0B4F6C] px-8 py-7 text-white shadow-2xl">
              <FaProjectDiagram className="mb-3 text-3xl text-cyan-300" />

              <h3 className="text-4xl font-black">12+</h3>

              <p className="mt-2 text-sm text-slate-200">Automation Projects</p>
            </div> */}

            {/* Clients Card */}

            {/* <div className="absolute bottom-8 left-8 rounded-3xl bg-white px-8 py-6 shadow-2xl border border-slate-200">
              <FaUsers className="mb-3 text-3xl text-orange-500" />

              <h3 className="text-4xl font-black text-slate-900">10+</h3>

              <p className="mt-2 text-sm text-slate-500">Happy Clients</p>
            </div> */}
          </div>

          {/* ================= RIGHT CONTENT ================= */}

          <div>
            <span className="inline-flex rounded-full bg-cyan-100 px-5 py-2 text-xs font-bold uppercase tracking-[4px] text-[#0B4F6C]">
              {aboutData.subtitle}
            </span>

            <h2 className="mt-8 text-4xl font-black leading-tight text-slate-900 lg:text-5xl xl:text-6xl">
              {aboutData.title}
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              {aboutData.description}
            </p>

            {/* Features */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {aboutData.features.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm border border-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <FaCheckCircle className="mt-1 shrink-0 text-xl text-cyan-600" />

                  <span className="font-medium leading-7 text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Mission Vision Quality */}

            {/* <div className="mt-12 grid gap-5 md:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition">
                <FaBullseye className="text-3xl text-orange-500" />

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  Mission
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Deliver intelligent automation systems that improve
                  productivity, efficiency and long-term business growth.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition">
                <FaEye className="text-3xl text-cyan-600" />

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  Vision
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Become India's most trusted industrial automation partner
                  through innovation, engineering excellence and customer
                  success.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition">
                <FaAward className="text-3xl text-amber-500" />

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  Quality
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Every project follows strict engineering standards, reliable
                  components and professional execution.
                </p>
              </div>
            </div> */}

            {/* Statistics */}

            {/* <div className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <FaProjectDiagram className="mx-auto text-3xl text-cyan-600" />

                <h3 className="mt-4 text-4xl font-black text-slate-900">
                  250+
                </h3>

                <p className="mt-2 text-sm uppercase tracking-[3px] text-slate-500">
                  Projects
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <FaUsers className="mx-auto text-3xl text-orange-500" />

                <h3 className="mt-4 text-4xl font-black text-slate-900">
                  150+
                </h3>

                <p className="mt-2 text-sm uppercase tracking-[3px] text-slate-500">
                  Clients
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <FaIndustry className="mx-auto text-3xl text-emerald-600" />

                <h3 className="mt-4 text-4xl font-black text-slate-900">20+</h3>

                <p className="mt-2 text-sm uppercase tracking-[3px] text-slate-500">
                  Experts
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <FaAward className="mx-auto text-3xl text-amber-500" />

                <h3 className="mt-4 text-4xl font-black text-slate-900">8+</h3>

                <p className="mt-2 text-sm uppercase tracking-[3px] text-slate-500">
                  Years
                </p>
              </div>
            </div> */}

            {/* CTA */}

            <div className="mt-16 flex flex-col gap-5 sm:flex-row">
              <Link
                to="/about"
                className="
      inline-flex
      items-center
      justify-center
      gap-3

      rounded-2xl

      bg-[#0B4F6C]

      px-8
      py-4

      font-semibold
      text-white

      shadow-xl

      transition-all
      duration-300

      hover:-translate-y-1
      hover:bg-[#168AAD]
    "
              >
                Explore Our Company
                <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="
      inline-flex
      items-center
      justify-center
      gap-3

      rounded-2xl

      border
      border-slate-300

      bg-white

      px-8
      py-4

      font-semibold

      text-slate-800

      transition-all
      duration-300

      hover:border-[#168AAD]
      hover:text-[#168AAD]
      hover:shadow-lg
    "
              >
                Get Free Consultation
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
