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
