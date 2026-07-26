import {
  FaChartLine,
  FaClock,
  FaShieldAlt,
  FaTools,
  FaLeaf,
  FaCheckCircle,
} from "react-icons/fa";

const icons = [
  FaChartLine,
  FaClock,
  FaShieldAlt,
  FaTools,
  FaLeaf,
  FaCheckCircle,
];

const ServiceBenefits = ({ service }) => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[4px] text-orange-500 font-semibold text-sm">
            Benefits
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Why Businesses Choose Our Solutions
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our automation and engineering solutions are designed to deliver
            measurable improvements in productivity, quality and operational
            efficiency.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {service.benefits?.map((benefit, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={benefit}
                className="group rounded-3xl bg-white border border-slate-200 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#005BAC]/10 group-hover:bg-orange-500 transition">
                  <Icon className="text-3xl text-[#005BAC] group-hover:text-white transition" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {benefit}
                </h3>

                <p className="mt-5 text-slate-600 leading-8">
                  This benefit helps industries achieve higher productivity,
                  better operational efficiency and long-term business growth.
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight */}

        <div className="mt-20 rounded-3xl bg-linear-to-r from-[#005BAC] to-[#0A79D8] p-10 text-white shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-bold">
                Engineering That Delivers Results
              </h3>

              <p className="mt-5 text-blue-100 leading-8">
                Every solution is developed with quality, safety and future
                scalability in mind, helping your business stay competitive in
                today's industrial environment.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <h4 className="text-4xl font-bold">99%</h4>
                <p className="mt-2 text-blue-100">Customer Satisfaction</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <h4 className="text-4xl font-bold">24/7</h4>
                <p className="mt-2 text-blue-100">Technical Support</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <h4 className="text-4xl font-bold">100+</h4>
                <p className="mt-2 text-blue-100">Industrial Solutions</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <h4 className="text-4xl font-bold">10+</h4>
                <p className="mt-2 text-blue-100">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
