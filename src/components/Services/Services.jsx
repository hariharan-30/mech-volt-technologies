import { services } from "./servicesData";
import ServiceCard from "./ServiceCard";
import StaggerContainer from "../../animations/StaggerContainer";
import FadeUp from "../../animations/FadeUp";

const Services = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <span className="inline-flex rounded-full bg-[#168AAD]/10 text-[#168AAD] px-5 py-2 text-sm font-semibold tracking-[3px] uppercase">
              Engineering Services
            </span>
          </FadeUp>

          <h2 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-tight">
            Complete Industrial
            <span className="block text-[#0B4F6C]">Automation Solutions</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 max-w-3xl mx-auto">
            We specialize in Industrial Robotics Programming, PLC Programming,
            and SPM Machine Design, delivering reliable engineering solutions
            that improve productivity, efficiency, and long-term operational
            performance.
          </p>
        </div>

        {/* Cards */}

        <StaggerContainer>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Services;
