import { projects } from "./projectsData";
import ProjectCard from "./ProjectCard";
import FadeUp from "../../animations/FadeUp";
import StaggerContainer from "../../animations/StaggerContainer";

const Projects = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
          <div>
            <FadeUp>
              <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
                Featured Projects
              </span>
            </FadeUp>

            <h2 className="text-5xl font-bold mt-5 text-slate-900">
              Delivering Engineering Excellence
            </h2>

            <p className="text-slate-600 mt-6 max-w-2xl leading-8">
              Explore some of our successfully completed automation, machine
              design and industrial electrical projects.
            </p>
          </div>

          <button className="bg-[#005BAC] hover:bg-[#00498a] text-white px-8 py-4 rounded-xl">
            View All Projects
          </button>
        </div>

        <StaggerContainer>
          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Projects;
