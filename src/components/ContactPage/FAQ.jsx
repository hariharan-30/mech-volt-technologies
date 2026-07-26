import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "Which industries do you serve?",
    answer:
      "We serve automotive, manufacturing, food processing, pharmaceuticals, packaging, textiles and other industrial sectors.",
  },
  {
    question: "Do you provide turnkey automation projects?",
    answer:
      "Yes. We provide complete turnkey industrial automation solutions from design to commissioning.",
  },
  {
    question: "Which PLC platforms do you work with?",
    answer:
      "We work with Siemens, ABB, Mitsubishi, Delta, Omron, Schneider Electric and Allen Bradley platforms.",
  },
  {
    question: "Do you provide after-sales support?",
    answer:
      "Yes. We provide installation, commissioning, maintenance and technical support.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            FAQ
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-5">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow">
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-semibold text-lg">{faq.question}</span>

                <FaChevronDown
                  className={`transition ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {active === index && (
                <div className="px-6 pb-6 text-slate-600 leading-8">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
