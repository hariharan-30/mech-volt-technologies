import { useState } from "react";
import { categories } from "../../data/categories";
import { projects } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";

const ProjectFilter = () => {
  const [active, setActive] = useState("All");

  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Browse Projects
          </span>

          <h2 className="text-5xl font-bold mt-4 text-slate-900">
            Explore by Category
          </h2>

        </div>

        {/* Filter Buttons */}

        <div className="flex flex-wrap justify-center gap-4 mb-16">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setActive(category)}
              className={`px-6 py-3 rounded-full font-semibold transition duration-300
              ${
                active === category
                  ? "bg-[#005BAC] text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-orange-500 hover:text-white"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

        {/* Projects */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {filteredProjects.map((project) => (
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

export default ProjectFilter;