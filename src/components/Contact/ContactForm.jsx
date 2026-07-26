const ContactForm = () => {
  return (
    <div className="rounded-3xl bg-white p-6 sm:p-8 lg:p-10 shadow-2xl">
      <h3 className="mb-8 text-2xl sm:text-3xl font-bold text-slate-900">
        Send an Inquiry
      </h3>

      <form className="space-y-5">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-[#005BAC]"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-[#005BAC]"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-[#005BAC]"
        />

        <input
          type="text"
          placeholder="Company Name"
          className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-[#005BAC]"
        />

        <textarea
          rows={5}
          placeholder="Tell us about your project..."
          className="w-full resize-none rounded-xl border border-slate-300 p-4 outline-none transition focus:border-[#005BAC]"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-[#005BAC] py-4 font-semibold text-white transition-all duration-300 hover:bg-[#00488A] hover:-translate-y-1 hover:shadow-lg"
        >
          Send Inquiry
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
