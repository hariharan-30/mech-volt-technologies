import { Navigate, useParams } from "react-router-dom";
import { services } from "../components/Services/servicesData";

import ServiceHero from "../components/ServiceDetails/ServiceHero";
import ServiceOverview from "../components/ServiceDetails/ServiceOverview";
import ServiceFeatures from "../components/ServiceDetails/ServiceFeatures";
import ServiceProcess from "../components/ServiceDetails/ServiceProcess";
import ServiceBenefits from "../components/ServiceDetails/ServiceBenefits";
import ServiceGallery from "../components/ServiceDetails/ServiceGallery";
import RelatedServices from "../components/ServiceDetails/RelatedServices";
import ServiceCTA from "../components/ServiceDetails/ServiceCTA";
import SEO from "../components/SEO/SEO";

const ServiceDetails = () => {
  const { slug } = useParams();

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <SEO
        title={`${service.title} | Mech Volt Technologies`}
        description={service.description}
        keywords={service.technologies.join(", ")}
      />
      <ServiceHero service={service} />

      <ServiceOverview service={service} />

      <ServiceFeatures service={service} />

      <ServiceProcess service={service} />

      <ServiceBenefits service={service} />

      <ServiceGallery service={service} />

      <RelatedServices service={service} />
      <ServiceCTA />
    </>
  );
};

export default ServiceDetails;
