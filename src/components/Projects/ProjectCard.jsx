// import { FaArrowRight } from "react-icons/fa";

// const ProjectCard = ({ project }) => {
//   return (
//     <div className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl duration-500">
//       <div className="overflow-hidden">
//         <img
//           src={project.image}
//           alt=""
//           className="h-72 w-full object-cover group-hover:scale-110 duration-700"
//         />
//       </div>

//       <div className="p-8">
//         <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
//           {project.category}
//         </span>

//         <h3 className="text-2xl font-bold mt-5">{project.title}</h3>

//         <p className="text-slate-600 mt-4 leading-8">{project.description}</p>

//         <button className="mt-7 flex items-center gap-3 font-semibold text-[#005BAC] hover:text-orange-500">
//           View Case Study
//           <FaArrowRight className="group-hover:translate-x-2 duration-300" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-orange-500"
    >
      {/* Image */}

      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}

      <div className="p-8">
        <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
          {project.category}
        </span>

        <h3 className="mt-5 text-2xl font-bold text-slate-900 group-hover:text-[#005BAC] transition-colors">
          {project.title}
        </h3>

        <p className="mt-4 text-slate-600 leading-8">
          {project.shortDescription}
        </p>

        <div className="mt-7 flex items-center gap-3 font-semibold text-[#005BAC] group-hover:text-orange-500 transition-colors">
          View Case Study
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
