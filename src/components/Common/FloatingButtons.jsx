// import { FaWhatsapp, FaArrowUp } from "react-icons/fa";
// import { useEffect, useState } from "react";

// const FloatingButtons = () => {
//   const [showTop, setShowTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowTop(window.scrollY > 400);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <>
//       {/* WhatsApp */}

//       <a
//         href="https://wa.me/919876543210?text=Hello%20Mech%20Volt,%20I%20need%20Industrial%20Automation%20Solutions."
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:scale-110 transition"
//       >
//         <FaWhatsapp className="text-white text-4xl" />
//       </a>

//       {/* Back To Top */}

//       {showTop && (
//         <button
//           onClick={scrollTop}
//           className="fixed bottom-28 right-6 z-50 w-14 h-14 rounded-full bg-[#005BAC] text-white shadow-xl hover:bg-orange-500 transition"
//         >
//           <FaArrowUp className="mx-auto text-xl" />
//         </button>
//       )}
//     </>
//   );
// };

// export default FloatingButtons;

import { FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappNumber = "91XXXXXXXXXX"; // Company WhatsApp number
  const whatsappMessage =
    "Hello Mech Volt, I need details about Industrial Automation Solutions.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300"
      >
        <FaWhatsapp className="text-white text-4xl" />
      </a>

      {/* Back To Top Button */}
      {showTop && (
        <button
          onClick={scrollTop}
          aria-label="Back to top"
          className="fixed bottom-28 right-6 z-50 w-14 h-14 rounded-full bg-[#005BAC] text-white shadow-xl hover:bg-orange-500 hover:scale-110 transition duration-300"
        >
          <FaArrowUp className="mx-auto text-xl" />
        </button>
      )}
    </>
  );
};

export default FloatingButtons;
