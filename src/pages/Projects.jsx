import CTA from "../components/CTA/CTA";
import CaseStudy from "../components/ProjectsPage/CaseStudy";
import FeaturedProjects from "../components/ProjectsPage/FeaturedProjects";
import Hero from "../components/ProjectsPage/Hero";
import ProjectFilter from "../components/ProjectsPage/ProjectFilter";
import Stats from "../components/ProjectsPage/Stats";
import Technologies from "../components/ProjectsPage/Technologies";
import Testimonials from "../components/ProjectsPage/Testimonials";
import SEO from "../components/SEO/SEO";

const Projects = () => {
  return (
    <>
      <SEO
        title="Projects | Mech Volt Technologies"
        description="Explore industrial automation, PLC, SCADA and turnkey engineering projects completed by Mech Volt Technologies."
        keywords="Automation Projects, PLC Projects, SPM Projects"
      />
      <Hero />
      <Stats />
      {/* <FeaturedProjects /> */}
      <ProjectFilter />
      {/* <CaseStudy /> */}
      {/* <Technologies /> */}
      {/* <Testimonials /> */}
      {/* <CTA /> */}
    </>
  );
};

export default Projects;
