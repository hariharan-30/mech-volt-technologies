// import logo from "../../assets/images/logo.png";

// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
// } from "react-icons/fa";

// import FooterLinks from "./FooterLinks";
// import { quickLinks, services, industries } from "./footerData";

// const Footer = () => {
//   return (
//     <footer className="bg-[#081C33] text-white">
//       {/* Top */}

//       <div className="max-w-7xl mx-auto px-6 py-20">
//         <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
//           {/* Company */}

//           <div>
//             <img src={logo} alt="logo" className="w-48 mb-6" />

//             <p className="text-slate-300 leading-8">
//               Mech Volt Technologies specializes in Industrial Automation, PLC
//               Programming, SPM Machine Design, Electrical Control Panels and
//               Smart Manufacturing Solutions.
//             </p>

//             <div className="flex gap-4 mt-8">
//               <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 duration-300 cursor-pointer">
//                 <FaFacebookF />
//               </div>

//               <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 duration-300 cursor-pointer">
//                 <FaInstagram />
//               </div>

//               <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 duration-300 cursor-pointer">
//                 <FaLinkedinIn />
//               </div>
//             </div>
//           </div>

//           {/* Links */}

//           <FooterLinks title="Quick Links" links={quickLinks} />

//           <FooterLinks title="Our Services" links={services} />

//           {/* Contact */}

//           <div>
//             <h3 className="text-xl font-semibold mb-6">Contact Info</h3>

//             <div className="space-y-5">
//               <div className="flex gap-4">
//                 <FaMapMarkerAlt className="text-orange-500 mt-1" />

//                 <p className="text-slate-300">Chennai, Tamil Nadu, India</p>
//               </div>

//               <div className="flex gap-4">
//                 <FaPhoneAlt className="text-orange-500 mt-1" />

//                 <p className="text-slate-300">8056257501</p>
//               </div>

//               <div className="flex gap-4">
//                 <FaEnvelope className="text-orange-500 mt-1" />

//                 <p className="text-slate-300">
//                   mechvolttechnologies2024@gmail.com
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom */}

//       <div className="border-t border-white/10">
//         <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-slate-400">
//             © {new Date().getFullYear()} Mech Volt Technologies. All Rights
//             Reserved.
//           </p>

//           <p className="text-slate-500 mt-3 md:mt-0">
//             Designed & Developed by Mech Volt Technologies
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import logo from "../../assets/images/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import FooterLinks from "./FooterLinks";
import { quickLinks, services } from "./footerData";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Top */}

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20 xl:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-16">
          {/* Company */}

          <div className="sm:col-span-2 xl:col-span-1">
            <img
              src={logo}
              alt="Mech Volt Technologies"
              className="w-44 xl:w-48 object-contain"
            />

            <p className="mt-6 text-slate-400 leading-8 text-[15px]">
              Mech Volt Technologies specializes in Industrial Automation, PLC
              Programming, Control Panel Manufacturing, SPM Machine Design and
              Smart Manufacturing Solutions.
            </p>

            <div className="flex gap-4 mt-8">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <div
                  key={index}
                  className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-orange-500 hover:-translate-y-1 hover:border-orange-500"
                >
                  <Icon />
                </div>
              ))}
            </div>
          </div>

          {/* Links */}

          <FooterLinks title="Quick Links" links={quickLinks} />

          <FooterLinks title="Our Services" links={services} />

          {/* Contact */}

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-orange-500 mt-1 shrink-0" />

                <p className="text-slate-400 leading-7">
                  Chennai, Tamil Nadu, India
                </p>
              </div>

              <a
                href="tel:+918056257501"
                className="flex gap-4 text-slate-400 hover:text-orange-500 transition"
              >
                <FaPhoneAlt className="mt-1 text-orange-500 shrink-0" />
                +91 8056257501
              </a>

              <a
                href="mailto:mechvolttechnologies2024@gmail.com"
                className="flex gap-4 text-slate-400 hover:text-orange-500 transition break-all"
              >
                <FaEnvelope className="mt-1 text-orange-500 shrink-0" />
                mechvolttechnologies2024@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Mech Volt Technologies. All Rights
            Reserved.
          </p>

          <p className="text-slate-600 text-sm">
            Designed & Developed by{" "}
            <span className="text-orange-500 font-medium">
              Mech Volt Technologies
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
