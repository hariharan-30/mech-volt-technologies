import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { navLinks } from "./navLinks";
import MobileMenu from "./MobileMenu";
import logo from "../../assets/images/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const transparentNavbar = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          transparentNavbar
            ? "bg-transparent py-5 xl:py-6"
            : "bg-white/80 backdrop-blur-2xl border-b border-white/30 shadow-[0_10px_40px_rgba(15,23,42,.08)] py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}

          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Mech Volt Technologies"
              className={`object-contain transition-all duration-300 ${
                scrolled
                  ? "w-10 h-10 xl:w-11 xl:h-11"
                  : "w-12 h-12 xl:w-14 xl:h-14"
              }`}
            />

            <div>
              <h2
                className={`font-extrabold
                  tracking-wide transition-all duration-300 ${
                    transparentNavbar ? "text-white" : "text-slate-900"
                  } text-xl xl:text-xl`}
              >
                Mech Volt
              </h2>

              <p
                className={`uppercase tracking-[4px] text-[10px] xl:text-xs transition-all duration-300 ${
                  transparentNavbar ? "text-slate-300" : "text-slate-500"
                }`}
              >
                Technologies
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden xl:flex items-center gap-10">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative pb-2 text-[15px] font-semibold tracking-wide transition-all duration-300

                  ${transparentNavbar ? "text-white" : "text-slate-700"}

                  hover:text-[#005BAC]

                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-0.75
                  after:rounded-full
                  after:bg-linear-to-r
                after:from-orange-400
                after:to-orange-600
                  after:transition-all
                  after:duration-300

                  ${
                    isActive
                      ? "after:w-full text-[#005BAC]"
                      : "after:w-0 hover:after:w-full"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}

          <div className="hidden xl:block">
            <Link
              to="/contact"
              className="bg-[#005BAC] hover:hover:bg-[#00498A] text-white px-6 xl:px-7 py-3 rounded-2xl font-semibold shadow-[0_12px_30px_rgba(0,91,172,.30)] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu */}

          <button
            onClick={() => setIsOpen(true)}
            className={`xl:hidden p-2 rounded-lg transition ${
              transparentNavbar ? "text-white" : "text-slate-800"
            }`}
            aria-label="Open menu"
          >
            <HiOutlineMenuAlt3 className="text-3xl" />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
