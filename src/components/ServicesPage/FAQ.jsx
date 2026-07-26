import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "Do you provide turnkey industrial automation solutions?",
    answer:
      "Yes. We handle complete turnkey projects including design, PLC programming, control panel manufacturing, installation, commissioning and after-sales support.",
  },
  {
    question: "Which PLC and HMI brands do you work with?",
    answer:
      "We work with Siemens, Mitsubishi, Delta, Allen Bradley, Omron, Schneider Electric and other leading automation brands.",
  },
  {
    question: "Do you design custom SPM machines?",
    answer:
      "Yes. Every Special Purpose Machine is designed according to your production process and manufacturing requirements.",
  },
  {
    question: "Do you provide on-site installation and commissioning?",
    answer:
      "Absolutely. Our engineers handle installation, testing, commissioning and operator training at your facility.",
  },
  {
    question: "Do you offer Annual Maintenance Contracts (AMC)?",
    answer:
      "Yes. We provide preventive maintenance, breakdown support, software upgrades and long-term AMC services.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(0);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            FAQ
          </span>

          <h2 className="text-5xl font-bold mt-4 text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            Find answers to the most common questions about our
            industrial automation and engineering services.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >

              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <h3 className="text-xl font-semibold text-slate-800">
                  {faq.question}
                </h3>

                {active === index ? (
                  <FaMinus className="text-orange-500" />
                ) : (
                  <FaPlus className="text-[#005BAC]" />
                )}

              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  active === index
                    ? "max-h-60 pb-6 px-6"
                    : "max-h-0"
                }`}
              >

                <p className="text-slate-600 leading-8">
                  {faq.answer}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQ;