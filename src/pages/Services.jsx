import Contact from "../components/Contact/Contact";
import CTA from "../components/CTA/CTA";
import AutomationService from "../components/ServicesPage/AutomationService";
import Capabilities from "../components/ServicesPage/Capabilities";
import ControlPanel from "../components/ServicesPage/ControlPanel";
import FAQ from "../components/ServicesPage/FAQ";
import Industries from "../components/ServicesPage/Industries";
import PLCService from "../components/ServicesPage/PLCService";
import ServiceCTA from "../components/ServicesPage/ServiceCTA";
import ServicesHero from "../components/ServicesPage/ServicesHero";
import SPMService from "../components/ServicesPage/SPMService";
import WorkProcess from "../components/ServicesPage/WorkProcess";
import SEO from "../components/SEO/SEO";

const Services = () => {
  return (
    <>
      <SEO
        title="Industrial Automation Services | Mech Volt Technologies"
        description="Explore our Industrial Automation Services including PLC Programming, HMI & SCADA Development, Robotics Integration, Control Panel Manufacturing, Electrical Engineering and SPM Machine Design."
        keywords="Industrial Automation Services, PLC Programming Services, HMI Development, SCADA Solutions, Robotics Integration, Control Panel Manufacturing, Electrical Engineering, SPM Machine Design"
      />
      <ServicesHero />
      {/* <Capabilities /> */}
      <AutomationService />
      {/* <PLCService /> */}
      <SPMService />
      {/* <ControlPanel /> */}
      {/* <Industries /> */}
      <WorkProcess />
      {/* <FAQ /> */}
      {/* <ServiceCTA /> */}
      {/* <Contact /> */}
    </>
  );
};

export default Services;
