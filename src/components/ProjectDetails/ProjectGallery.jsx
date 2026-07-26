const ProjectGallery = ({ project }) => {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Heading */}
  
          <div className="text-center max-w-3xl mx-auto">
            <span className="uppercase tracking-[4px] text-orange-500 font-semibold text-sm">
              Project Gallery
            </span>
  
            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Project Showcase
            </h2>
  
            <p className="mt-6 text-slate-600 leading-8">
              Explore key moments from this project including installation,
              commissioning and completed automation systems.
            </p>
          </div>
  
          {/* Gallery */}
  
          <div className="grid lg:grid-cols-3 gap-6 mt-16">
            {/* Large Image */}
  
            <div className="lg:col-span-2 overflow-hidden rounded-3xl">
              <img
                src={project.gallery[0]}
                alt={project.title}
                className="h-112.5 w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>
  
            {/* Right Images */}
  
            <div className="grid gap-6">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={project.gallery[1]}
                  alt={project.title}
                  className="h-53 w-full object-cover transition duration-700 hover:scale-110"
                />
              </div>
  
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={project.gallery[2]}
                  alt={project.title}
                  className="h-53 w-full object-cover transition duration-700 hover:scale-110"
                />
              </div>
            </div>
          </div>
  
          {/* Bottom Gallery */}
  
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {project.gallery.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="h-72 w-full object-cover transition duration-700 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ProjectGallery;