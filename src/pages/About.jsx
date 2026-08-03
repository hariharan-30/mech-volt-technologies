import AboutHero from "../components/AboutPage/AboutHero";
import CompanyOverview from "../components/AboutPage/CompanyOverview";
import CoreValues from "../components/AboutPage/CoreValues";
import Expertise from "../components/AboutPage/Expertise";
import Timeline from "../components/AboutPage/Timeline";
import WhyPartner from "../components/AboutPage/WhyPartner";
import Contact from "../components/Contact/Contact";
import CTA from "../components/CTA/CTA";
import SEO from "../components/SEO/SEO";

const About = () => {
  return (
    <>
      <SEO
        title="About Mech Volt Technologies | Industrial Automation Company"
        description="Learn about Mech Volt Technologies, a trusted industrial automation company specializing in PLC Programming, HMI, SCADA, Robotics Integration, SPM Machine Design and Control Panel Manufacturing."
        keywords="Mech Volt Technologies, About Mech Volt, Industrial Automation Company, PLC Programming, HMI, SCADA, Robotics Integration, SPM Machine Design, Control Panel Manufacturing"
      />
      <AboutHero />
      <CompanyOverview />
      <Timeline />
      {/* <CoreValues /> */}
      {/* <Expertise /> */}
      {/* <WhyPartner /> */}

      {/* <CTA /> */}
      {/* <Contact /> */}
    </>
  );
};

export default About;
