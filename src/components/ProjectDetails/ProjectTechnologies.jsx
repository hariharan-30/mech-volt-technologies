import {
    FaMicrochip,
    FaCogs,
    FaBolt,
    FaRobot,
  } from "react-icons/fa";
  
  const icons = [
    FaMicrochip,
    FaCogs,
    FaBolt,
    FaRobot,
  ];
  
  const ProjectTechnologies = ({ project }) => {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Heading */}
  
          <div className="text-center max-w-3xl mx-auto">
            <span className="uppercase tracking-[4px] text-orange-500 font-semibold text-sm">
              Technologies
            </span>
  
            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Technologies Used
            </h2>
  
            <p className="mt-6 text-slate-600 leading-8">
              We utilize industry-leading automation hardware and software
              to deliver reliable, scalable and future-ready industrial
              solutions.
            </p>
          </div>
  
          {/* Technology Cards */}
  
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {project.technologies.map((tech, index) => {
              const Icon = icons[index % icons.length];
  
              return (
                <div
                  key={tech}
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-2xl"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#005BAC] transition group-hover:bg-orange-500">
                    <Icon className="text-3xl text-white" />
                  </div>
  
                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {tech}
                  </h3>
  
                  <p className="mt-3 text-slate-500 text-sm leading-7">
                    Integrated as part of the automation solution to
                    improve performance, reliability and productivity.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };
  
  export default ProjectTechnologies;