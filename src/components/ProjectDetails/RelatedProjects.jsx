import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { projects } from "../Projects/projectsData";

const RelatedProjects = ({ currentProject }) => {
  const relatedProjects = projects
    .filter((item) => item.id !== currentProject.id)
    .slice(0, 3);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[4px] text-orange-500 font-semibold text-sm">
            More Projects
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Related Case Studies
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            Discover more automation, industrial engineering and electrical
            projects successfully completed by our team.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {relatedProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="group overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}

              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}

              <div className="p-8">
                <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
                  {project.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-slate-900 group-hover:text-[#005BAC] transition">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-8">
                  {project.shortDescription}
                </p>

                <div className="mt-6 flex items-center gap-3 font-semibold text-[#005BAC] group-hover:text-orange-500 transition">
                  View Project

                  <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;