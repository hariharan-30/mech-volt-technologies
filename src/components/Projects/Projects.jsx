import { projects } from "./projectsData";
import ProjectCard from "./ProjectCard";
import FadeUp from "../../animations/FadeUp";
import StaggerContainer from "../../animations/StaggerContainer";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
          <div className="max-w-3xl">
            <FadeUp>
              <span className="inline-flex rounded-full bg-[#12344D]/5 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#2A6F97]">
                Featured Projects
              </span>
            </FadeUp>

            <h2 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-black leading-tight text-slate-900">
              Engineering Projects
              <span className="block text-[#12344D]">
                Built For Performance
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Explore some of our successfully delivered industrial automation,
              machine design, control panel manufacturing and turnkey
              engineering projects across multiple industries.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-3 rounded-full bg-[#12344D] px-8 py-4 font-semibold text-white transition hover:bg-[#F59E0B]"
          >
            View All Projects
            <FaArrowRight />
          </Link>
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
