const ServiceGallery = ({ service }) => {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Heading */}
  
          <div className="text-center max-w-3xl mx-auto">
            <span className="uppercase tracking-[4px] text-orange-500 font-semibold text-sm">
              Service Gallery
            </span>
  
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
              Engineering In Action
            </h2>
  
            <p className="mt-6 text-lg leading-8 text-slate-600">
              A glimpse of our engineering expertise, automation projects and
              industrial solutions successfully delivered across multiple
              industries.
            </p>
          </div>
  
          {/* Gallery */}
  
          <div className="grid gap-6 mt-16 md:grid-cols-2 lg:grid-cols-3">
            {service.gallery?.map((image, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={image}
                    alt={`${service.title} ${index + 1}`}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
  
                <div className="bg-white p-6">
                  <h3 className="font-bold text-xl text-slate-900">
                    Project View {index + 1}
                  </h3>
  
                  <p className="mt-3 text-slate-600 leading-7">
                    High-quality industrial engineering execution with precision,
                    safety and performance.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ServiceGallery;