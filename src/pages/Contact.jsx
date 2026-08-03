import Hero from "../components/ContactPage/Hero";
import ContactCards from "../components/ContactPage/ContactCards";
import ContactSection from "../components/ContactPage/ContactSection";
import GoogleMap from "../components/ContactPage/GoogleMap";
import FAQ from "../components/ContactPage/FAQ";
import CTA from "../components/CTA/CTA";
import SEO from "../components/SEO/SEO";

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Mech Volt Technologies | Industrial Automation Experts"
        description="Contact Mech Volt Technologies for Industrial Automation, PLC Programming, Robotics Integration, Control Panel Manufacturing, HMI & SCADA Development and engineering solutions."
        keywords="Contact Mech Volt Technologies, Industrial Automation Company Chennai, PLC Experts, Robotics Company, Automation Solutions, Engineering Support"
      />
      <Hero />
      {/* <ContactCards /> */}
      <ContactSection />
      <GoogleMap />
      {/* <FAQ /> */}
      {/* <CTA /> */}
    </>
  );
};

export default Contact;
