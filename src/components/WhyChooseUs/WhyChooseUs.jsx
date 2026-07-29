import FadeRight from "../../animations/FadeRight";
import { whyChooseData } from "./whyChooseData";

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 xl:py-32">
      {/* Background Decoration */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#dbeafe_0%,transparent_35%)] opacity-70" />

      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-100 blur-3xl opacity-40" />

      <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-sky-100 blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex rounded-full bg-[#12344D]/5 px-5 py-2 text-xs font-semibold uppercase tracking-[4px] text-[#2A6F97]">
            WHY MECH VOLT
          </span>

          <h2 className="mt-7 text-4xl md:text-5xl xl:text-6xl font-black leading-tight text-slate-900">
            Why Leading Industries
            <span className="block text-[#12344D]">Choose Mech Volt</span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            We deliver reliable industrial automation, custom engineering,
            precision manufacturing and complete turnkey solutions with
            uncompromising quality.
          </p>
        </div>

        {/* Cards */}

        <FadeRight>
          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {whyChooseData.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-9 transition-all duration-500 hover:-translate-y-3 hover:border-[#2A6F97]/30 hover:shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
                >
                  {/* Top Accent */}

                  <div className="absolute left-0 top-0 h-1 w-0 bg-linear-to-r from-[#12344D] to-[#F59E0B] transition-all duration-500 group-hover:w-full" />

                  {/* Number */}

                  <span className="text-sm font-bold tracking-[3px] text-slate-300">
                    0{index + 1}
                  </span>

                  {/* Icon */}

                  <div className="mt-7 flex h-18 w-18 items-center justify-center rounded-3xl bg-linear-to-br from-[#12344D] to-[#2A6F97] shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="text-3xl text-white" />
                  </div>

                  {/* Title */}

                  <h3 className="mt-8 text-2xl font-bold leading-snug text-slate-900">
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-5 leading-8 text-slate-600">
                    {item.description}
                  </p>

                  {/* Bottom Line */}

                  <div className="mt-10 flex items-center gap-3">
                    <div className="h-0.5 w-10 bg-[#F59E0B] transition-all duration-500 group-hover:w-20" />

                    <span className="text-sm font-semibold uppercase tracking-[3px] text-[#2A6F97]">
                      Mech Volt
                    </span>
                  </div>

                  {/* Glow */}

                  <div className="absolute -right-16 -bottom-16 h-36 w-36 rounded-full bg-[#F59E0B]/10 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />
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
