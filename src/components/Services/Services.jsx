import { services } from "./servicesData";
import ServiceCard from "./ServiceCard";
import StaggerContainer from "../../animations/StaggerContainer";
import FadeUp from "../../animations/FadeUp";

const Services = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <FadeUp>
            <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
              Our Services
            </span>
          </FadeUp>

          <h2 className="text-5xl font-bold mt-5 text-slate-900">
            Innovative Industrial Engineering Solutions
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            We provide comprehensive industrial automation, machine design,
            electrical engineering and turnkey solutions tailored to your
            manufacturing needs.
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
