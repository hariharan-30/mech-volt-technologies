import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineX } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { navLinks } from "./navLinks";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 xl:hidden"
          />

          {/* Drawer */}

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="fixed top-0 right-0 w-[320px] max-w-full h-screen bg-white shadow-2xl z-50 xl:hidden flex flex-col"
          >
            {/* Header */}

            <div className="flex items-center justify-between px-6 py-5 border-b">
              <h3 className="text-xl font-bold text-slate-900">
                Menu
              </h3>

              <button
                onClick={() => setIsOpen(false)}
                className="text-3xl text-slate-700 hover:text-orange-500 transition"
                aria-label="Close menu"
              >
                <HiOutlineX />
              </button>
            </div>

            {/* Navigation */}

            <nav className="flex-1 px-6 py-8">
              <div className="flex flex-col gap-2">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `rounded-xl px-5 py-4 font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-[#005BAC] text-white"
                          : "text-slate-700 hover:bg-slate-100 hover:text-[#005BAC]"
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
            </nav>

            {/* CTA */}

            <div className="p-6 border-t">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-[#005BAC] hover:bg-orange-500 text-white py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Request Quote
                <FaArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;