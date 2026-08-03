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
        title="Automation Projects | Mech Volt Technologies"
        description="Explore our successful industrial automation projects including PLC automation, HMI & SCADA systems, robotics integration, SPM machines and control panel solutions."
        keywords="Automation Projects, PLC Projects, SCADA Projects, HMI Projects, Robotics Projects, Industrial Automation Case Studies, SPM Machine Projects"
      />
      <Hero />
      {/* <Stats /> */}
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
