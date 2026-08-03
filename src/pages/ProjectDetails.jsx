import { Navigate, useParams } from "react-router-dom";

import { projects } from "../components/Projects/projectsData";

import ProjectHero from "../components/ProjectDetails/ProjectHero";
import ProjectOverview from "../components/ProjectDetails/ProjectOverview";
import ProjectInfo from "../components/ProjectDetails/ProjectInfo";
import ProjectTechnologies from "../components/ProjectDetails/ProjectTechnologies";
import ProjectGallery from "../components/ProjectDetails/ProjectGallery";
import ProjectResults from "../components/ProjectDetails/ProjectResults";
import RelatedProjects from "../components/ProjectDetails/RelatedProjects";
import ProjectCTA from "../components/ProjectDetails/ProjectCTA";
import SEO from "../components/SEO/SEO";

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <SEO
        title="Industrial Automation Project | Mech Volt Technologies"
        description="View detailed industrial automation projects including PLC programming, HMI, SCADA, robotics integration and custom automation solutions."
        keywords="Industrial Automation Project, PLC Automation Project, Robotics Project, SCADA Project, HMI Project"
      />
      <ProjectHero project={project} />

      {/* <ProjectOverview project={project} /> */}

      {/* <ProjectInfo project={project} /> */}

      <ProjectTechnologies project={project} />

      {/* <ProjectGallery project={project} /> */}

      {/* <ProjectResults project={project} /> */}

      <RelatedProjects currentProject={project} />

      {/* <ProjectCTA /> */}
    </>
  );
};

export default ProjectDetails;
