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
        title="About Us | Mech Volt Technologies"
        description="Learn about Mech Volt Technologies, our engineering expertise and industrial automation solutions."
        keywords="About Mech Volt, Industrial Automation Company, Automation Experts"
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
