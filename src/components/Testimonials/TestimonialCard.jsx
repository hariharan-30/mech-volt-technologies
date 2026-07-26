
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ item }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-10 h-full border border-slate-200 hover:shadow-2xl duration-300">

      <FaQuoteLeft className="text-5xl text-orange-500 mb-6" />

      <p className="text-slate-600 leading-8 italic">
        "{item.review}"
      </p>

      <div className="flex items-center mt-8">

        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div className="ml-5">

          <h4 className="font-bold text-lg">
            {item.name}
          </h4>

          <p className="text-slate-500 text-sm">
            {item.company}
          </p>

          <div className="flex text-orange-400 mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

        </div>

      </div>

    </div>
  );
};

export default TestimonialCard;