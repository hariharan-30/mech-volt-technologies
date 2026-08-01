// const ContactForm = () => {
//   return (
//     <div className="rounded-3xl bg-white p-6 sm:p-8 lg:p-10 shadow-2xl">
//       <h3 className="mb-8 text-2xl sm:text-3xl font-bold text-slate-900">
//         Send an Inquiry
//       </h3>

//       <form className="space-y-5">
//         <input
//           type="text"
//           placeholder="Your Name"
//           className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-[#005BAC]"
//         />

//         <input
//           type="email"
//           placeholder="Email Address"
//           className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-[#005BAC]"
//         />

//         <input
//           type="text"
//           placeholder="Phone Number"
//           className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-[#005BAC]"
//         />

//         <input
//           type="text"
//           placeholder="Company Name"
//           className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-[#005BAC]"
//         />

//         <textarea
//           rows={5}
//           placeholder="Tell us about your project..."
//           className="w-full resize-none rounded-xl border border-slate-300 p-4 outline-none transition focus:border-[#005BAC]"
//         />

//         <button
//           type="submit"
//           className="w-full rounded-xl bg-[#005BAC] py-4 font-semibold text-white transition-all duration-300 hover:bg-[#00488A] hover:-translate-y-1 hover:shadow-lg"
//         >
//           Send Inquiry
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import { sendContactEmail } from "../../services/emailService";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (formData.name.trim().length < 3) {
      toast.error("Please enter a valid name.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    const phoneRegex = /^[0-9+\-\s()]{10,15}$/;

    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid phone number.");
      return false;
    }

    if (!formData.subject) {
      toast.error("Please select a service.");
      return false;
    }

    if (formData.message.trim().length < 20) {
      toast.error("Message should contain at least 20 characters.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      await sendContactEmail(formData);

      toast.success("Thank you! Your Inquiry has been submitted successfully.");

      setFormData(initialForm);
    } catch (error) {
      console.error(error);

      toast.error("Failed to send inquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl lg:p-10">
      <h3 className="mb-8 text-3xl font-bold">Send Us an Inquiry</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#005BAC]"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#005BAC]"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          autoComplete="tel"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#005BAC]"
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          autoComplete="organization"
          value={formData.company}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#005BAC]"
        />

        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#005BAC]"
        >
          <option value="">Select a Service</option>

          <option>Industrial Robotics Programming Services</option>

          <option>SPM Machine Design And Industrial Automation</option>

          <option>Jigs and Fixtures</option>

          <option>All Types Of Conveyors</option>

          <option>All Type of Paint Guns and Services</option>

          <option>PLC Programming and Control panel Services</option>

          {/* <option>General Inquiry</option> */}
        </select>

        <textarea
          rows={5}
          name="message"
          placeholder="Tell us about your project..."
          value={formData.message}
          onChange={handleChange}
          className="w-full resize-none rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#005BAC]"
        />

        <button
          type="submit"
          disabled={loading}
          className={`flex w-full items-center justify-center gap-3 rounded-xl py-4 font-semibold text-white transition-all duration-300 ${
            loading
              ? "cursor-not-allowed bg-slate-400"
              : "bg-[#005BAC] hover:-translate-y-1 hover:bg-[#004a8f] hover:shadow-xl"
          }`}
        >
          {loading ? (
            <>
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
              Sending...
            </>
          ) : (
            "Send Inquiry"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
