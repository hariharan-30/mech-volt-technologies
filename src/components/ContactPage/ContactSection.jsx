// import { useState } from "react";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import { sendContactEmail } from "../../services/emailService";
// import toast from "react-hot-toast";

// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     subject: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);

//     try {
//       await sendContactEmail(formData);

//       toast.success(
//         "Thank you! Your inquiry has been submitted. Our team will contact you shortly.",
//       );
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         company: "",
//         subject: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to send inquiry. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="py-24 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-14">
//           {/* Left */}
//           {/* Left */}

//           <div>
//             <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
//               Get In Touch
//             </span>

//             <h2 className="text-5xl font-bold text-slate-900 mt-5 leading-tight">
//               Let's Discuss Your
//               <br />
//               Next Industrial Project
//             </h2>

//             <p className="mt-8 text-slate-600 leading-8">
//               Whether you require Industrial Automation, PLC Programming,
//               Control Panel Manufacturing, or Special Purpose Machine Design,
//               our engineers are ready to deliver reliable and efficient
//               solutions.
//             </p>

//             <div className="space-y-8 mt-12">
//               {/* Phone */}

//               <div className="flex items-center gap-5">
//                 <div className="w-16 h-16 rounded-2xl bg-[#005BAC] flex items-center justify-center">
//                   <FaPhoneAlt className="text-white text-xl" />
//                 </div>

//                 <div>
//                   <h4 className="font-bold text-xl">Phone</h4>

//                   <p className="text-slate-600">+91 8056257501</p>
//                 </div>
//               </div>

//               {/* Email */}

//               <div className="flex items-center gap-5">
//                 <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center">
//                   <FaEnvelope className="text-white text-xl" />
//                 </div>

//                 <div>
//                   <h4 className="font-bold text-xl">Email</h4>

//                   <p className="text-slate-600 break-all">
//                     mechvolttechnologies2024@gmail.com
//                   </p>
//                 </div>
//               </div>

//               {/* Office */}

//               <div className="flex items-center gap-5">
//                 <div className="w-16 h-16 rounded-2xl bg-[#005BAC] flex items-center justify-center">
//                   <FaMapMarkerAlt className="text-white text-xl" />
//                 </div>

//                 <div>
//                   <h4 className="font-bold text-xl">Office</h4>

//                   <p className="text-slate-600">Chennai, Tamil Nadu, India</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right */}

//           <div className="bg-white rounded-3xl shadow-xl p-10">
//             <h3 className="text-3xl font-bold mb-8">Send Us an Inquiry</h3>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Name */}

//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Full Name"
//                 required
//                 className="w-full border rounded-xl px-5 py-4 outline-none focus:border-[#005BAC]"
//               />

//               {/* Email */}

//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email Address"
//                 required
//                 className="w-full border rounded-xl px-5 py-4 outline-none focus:border-[#005BAC]"
//               />

//               {/* Phone */}

//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="Phone Number"
//                 required
//                 className="w-full border rounded-xl px-5 py-4 outline-none focus:border-[#005BAC]"
//               />

//               {/* Company */}

//               <input
//                 type="text"
//                 name="company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 placeholder="Company Name"
//                 className="w-full border rounded-xl px-5 py-4 outline-none focus:border-[#005BAC]"
//               />

//               {/* Service */}

//               <select
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded-xl px-5 py-4 outline-none focus:border-[#005BAC]"
//               >
//                 <option value="">Select Service</option>
//                 <option value="Industrial Automation">
//                   Industrial Automation
//                 </option>
//                 <option value="PLC Programming">PLC Programming</option>
//                 <option value="Control Panel Manufacturing">
//                   Control Panel Manufacturing
//                 </option>
//                 <option value="SPM Machine Design">SPM Machine Design</option>
//                 <option value="Turnkey Projects">Turnkey Projects</option>
//               </select>

//               {/* Message */}

//               <textarea
//                 rows={5}
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Tell us about your project..."
//                 required
//                 className="w-full border rounded-xl px-5 py-4 outline-none resize-none focus:border-[#005BAC]"
//               />

//               {/* Submit Button */}

//               {/* <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-[#005BAC] hover:bg-[#004a8f] disabled:bg-slate-400 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold transition-all duration-300"
//               >
//                 {loading ? "Sending..." : "Send Inquiry"}
//               </button> */}

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-[#005BAC] hover:bg-[#004a8f] disabled:bg-slate-400 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold flex justify-center items-center gap-3 transition-all duration-300"
//               >
//                 {loading ? (
//                   <>
//                     <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
//                     Sending...
//                   </>
//                 ) : (
//                   "Send Inquiry"
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

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

const ContactSection = () => {
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
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* Left */}

          <div>
            <span className="text-sm font-semibold uppercase tracking-[4px] text-orange-500">
              Get In Touch
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Let's Discuss Your
              <br />
              Next Industrial Project
            </h2>

            <p className="mt-8 leading-8 text-slate-600">
              Whether you require Industrial Automation, PLC Programming,
              Control Panel Manufacturing, or Special Purpose Machine Design,
              our engineers are ready to deliver reliable and efficient
              solutions.
            </p>

            <div className="mt-12 space-y-8">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#005BAC]">
                  <FaPhoneAlt className="text-xl text-white" />
                </div>

                <div>
                  <h4 className="text-xl font-bold">Phone</h4>

                  <p className="text-slate-600">+91 8056257501</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500">
                  <FaEnvelope className="text-xl text-white" />
                </div>

                <div>
                  <h4 className="text-xl font-bold">Email</h4>

                  <p className="break-all text-slate-600">
                    mechvolttechnologies2024@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#005BAC]">
                  <FaMapMarkerAlt className="text-xl text-white" />
                </div>

                <div>
                  <h4 className="text-xl font-bold">Office</h4>

                  <p className="text-slate-600">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}

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

                <option>Industrial Automation</option>

                <option>PLC, HMI & SCADA</option>

                <option>SPM Machine Design</option>

                <option>Control Panel Manufacturing</option>

                <option>Turnkey Projects</option>

                <option>Maintenance & AMC</option>

                <option>General Inquiry</option>
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
