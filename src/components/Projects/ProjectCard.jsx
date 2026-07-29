import { Link } from "react-router-dom";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
    >
      {/* Image */}

      <div className="relative h-72 overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent" />

        {/* Badge */}

        <span className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[3px] text-[#12344D] backdrop-blur-xl">
          {project.category}
        </span>

        {/* Status */}

        <span className="absolute right-6 top-6 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
          {project.badge}
        </span>

      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-8">

        <div className="flex items-center gap-2 text-sm text-slate-500">

          <FaMapMarkerAlt />

          {project.location}

          <span className="mx-2">•</span>

          {project.year}

        </div>

        <h3 className="mt-5 text-2xl font-bold text-slate-900 group-hover:text-[#12344D] transition">

          {project.title}

        </h3>

        <p className="mt-5 flex-1 leading-8 text-slate-600">

          {project.shortDescription}

        </p>

        {/* Tech */}

        <div className="mt-6 flex flex-wrap gap-2">

          {project.technologies.slice(0,3).map((tech)=>(

            <span
              key={tech}
              className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-600"
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Footer */}

        <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6">

          <span className="font-semibold text-[#12344D]">
            View Case Study
          </span>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#12344D] text-white transition group-hover:bg-[#F59E0B]">

            <FaArrowRight className="transition group-hover:translate-x-1"/>

          </div>

        </div>

      </div>

    </Link>
  );
};

export default ProjectCard;