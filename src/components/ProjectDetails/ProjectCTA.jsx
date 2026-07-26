import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

const ProjectCTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-4xl bg-linear-to-r from-[#005BAC] via-[#0A6CC4] to-[#081C33] px-8 py-16 lg:px-16">
          {/* Background Blur */}

          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>

          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            {/* Left */}

            <div>
              <span className="uppercase tracking-[4px] text-orange-300 font-semibold">
                Let's Work Together
              </span>

              <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-white leading-tight">
                Need a Similar
                <br />
                Industrial Solution?
              </h2>

              <p className="mt-8 text-blue-100 leading-8 max-w-xl">
                Our automation experts are ready to discuss your project,
                understand your requirements and deliver reliable,
                cost-effective engineering solutions.
              </p>
            </div>

            {/* Right */}

            <div className="flex flex-col sm:flex-row gap-5 justify-start lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
              >
                Request Quote
                <FaArrowRight />
              </Link>

              <a
                href="tel:+918056257501"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#081C33]"
              >
                <FaPhoneAlt />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCTA;
