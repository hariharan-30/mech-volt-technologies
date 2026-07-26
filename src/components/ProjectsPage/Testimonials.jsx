import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { testimonials } from "../../data/testimonialsData";

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Client Testimonials
          </span>

          <h2 className="text-5xl font-bold mt-4 text-slate-900">
            What Our Clients Say
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            We build long-term relationships by delivering reliable, innovative
            and high-quality industrial automation solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition duration-300"
            >
              <FaQuoteLeft className="text-4xl text-orange-500 mb-6" />

              <p className="text-slate-600 leading-8 mb-8">"{item.review}"</p>

              <div className="flex gap-1 text-orange-500 mb-5">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              <div className="border-t pt-5">
                <h4 className="text-xl font-bold">{item.name}</h4>

                <p className="text-slate-500">{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
