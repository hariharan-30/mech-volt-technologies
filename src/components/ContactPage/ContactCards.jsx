import { contactInfo } from "../../data/contactData";

const ContactCards = () => {
  return (
    <section className="relative -mt-20 z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white rounded-3xl shadow-xl p-8  hover:-translate-y-3 transition duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6`}
                >
                  <Icon className="text-white text-2xl" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">{item.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactCards;
