import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition duration-300">
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
        />
      </div>

      <div className="p-8">
        <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-2 rounded-full">
          {project.category}
        </span>

        <h3 className="text-2xl font-bold mt-5">{project.title}</h3>

        <p className="text-slate-500 mt-3">{project.client}</p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <button className="mt-8 flex items-center gap-3 text-[#005BAC] font-semibold hover:text-orange-500 transition">
          View Project
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
