import { projects } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Featured Projects
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Delivering Engineering Excellence
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            A selection of industrial automation, control panel,
            PLC programming and SPM machine projects successfully
            delivered for clients across various industries.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturedProjects;