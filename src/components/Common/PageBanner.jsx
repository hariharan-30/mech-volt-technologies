import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const PageBanner = ({ title, subtitle, backgroundImage, currentPage }) => {
  return (
    <section className="relative h-105 overflow-hidden">
      {/* Background */}

      <img
        src={backgroundImage}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-linear-to-r from-[#081C33]/95 via-[#081C33]/80 to-[#005BAC]/60" />

      {/* Pattern */}

      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-size-[35px_35px]" />

      {/* Content */}

      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
          {/* Breadcrumb */}

          <div className="flex items-center gap-3 text-sm text-slate-300">
            <Link to="/" className="hover:text-orange-400 transition">
              Home
            </Link>

            <FaChevronRight className="text-xs" />

            <span className="text-orange-400">{currentPage}</span>
          </div>

          {/* Title */}

          <h1 className="mt-8 text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-4xl">
            {title}
          </h1>

          {/* Subtitle */}

          <p className="mt-6 text-lg md:text-xl leading-9 text-slate-300 max-w-3xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
