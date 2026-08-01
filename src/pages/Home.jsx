import Hero from "../components/Hero/Hero";
import Clients from "../components/Clients/Clients";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Services from "../components/Services/Services";
import Industries from "../components/Industries/Industries";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Process from "../components/Process/Process";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";
import Contact from "../components/Contact/Contact";
import Stats from "../components/Stats/Stats";
import SEO from "../components/SEO/SEO";
import Robotics from "../components/Robotics/Robotics";

const Home = () => {
  return (
    <>
      <SEO
        title="Mech Volt Technologies | Industrial Automation Company"
        description="Mech Volt Technologies provides Industrial Automation, PLC Programming, SCADA, HMI, SPM Machine Design and Control Panel Manufacturing."
        keywords="Industrial Automation, PLC Programming, SCADA, HMI, SPM Machine, Control Panel, Automation Company Chennai"
      />
      <Hero />
      {/* <Clients /> */}
      <About />
      {/* <WhyChooseUs /> */}
      <Robotics />
      <Services />

      {/* <Industries /> */}
      <Projects />
      {/* <Stats /> */}
      {/* <Technologies /> */}
      {/* <Process /> */}
      {/* <Testimonials /> */}
      {/* <CTA /> */}
      <Contact />
    </>
  );
};

export default Home;
