import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const ContactInfo = () => {
  // const info = [
  //   {
  //     icon: FaMapMarkerAlt,
  //     title: "Office Address",
  //     value: "Chennai, Tamil Nadu, India",
  //   },
  //   {
  //     icon: FaPhoneAlt,
  //     title: "Call Us",
  //     value: "+91 8056257501",
  //   },
  //   {
  //     icon: FaEnvelope,
  //     title: "Email",
  //     value: "mechvolttechnologies2024@gmail.com",
  //   },
  //   {
  //     icon: FaClock,
  //     title: "Working Hours",
  //     value: "Mon - Sat : 9:00 AM - 6:30 PM",
  //   },
  // ];

  return (
    <div>
      <span className="uppercase tracking-[4px] text-orange-500 font-semibold text-sm">
        Contact Us
      </span>

      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
        Let's Discuss Your Next Project
      </h2>

      <p className="mt-6 text-slate-600 leading-7 lg:leading-8">
        Whether you need PLC programming, industrial automation, SPM machine
        design or electrical engineering support, our experts are ready to
        assist you.
      </p>

      {/* <div className="mt-10 space-y-5">
        {info.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-[#005BAC]">
                <Icon className="text-lg sm:text-xl text-white" />
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-1 text-sm sm:text-base text-slate-600 wrap-break-word">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default ContactInfo;
