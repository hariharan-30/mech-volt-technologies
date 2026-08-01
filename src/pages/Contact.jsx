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
        title="Contact | Mech Volt Technologies"
        description="Contact Mech Volt Technologies for Industrial Automation, PLC Programming and Engineering Services."
        keywords="Contact Mech Volt, Automation Company Chennai"
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
