import { technologies } from "../../data/technologiesData";

const Technologies = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Technologies We Work With
          </span>

          <h2 className="text-5xl font-bold mt-4 text-slate-900">
            Trusted Industrial Automation Platforms
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            We develop automation solutions using globally recognized
            industrial hardware and software platforms to ensure
            reliability, scalability and long-term performance.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {technologies.map((tech) => (

            <div
              key={tech.name}
              className="group bg-slate-50 rounded-3xl p-8 shadow hover:shadow-xl transition duration-300 flex flex-col items-center justify-center hover:-translate-y-2"
            >

              <img
                src={tech.logo}
                alt={tech.name}
                className="h-16 object-contain grayscale group-hover:grayscale-0 transition duration-300"
              />

              <h3 className="mt-6 text-lg font-semibold text-slate-700 text-center">
                {tech.name}
              </h3>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Technologies;