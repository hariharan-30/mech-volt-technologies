import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const SecondaryButton = ({
  children,
  to,
  onClick,
  icon = true,
  light = false,
  className = "",
}) => {
  const baseClasses = `
    inline-flex items-center justify-center gap-3
    rounded-2xl
    border-2
    px-7 py-4
    font-semibold
    transition-all
    duration-300
    hover:-translate-y-1
    active:scale-95
    ${className}
  `;

  const darkTheme =
    "border-[#005BAC] text-[#005BAC] hover:bg-[#005BAC] hover:text-white";

  const lightTheme =
    "border-white text-white hover:bg-white hover:text-[#005BAC]";

  const classes = `${baseClasses} ${
    light ? lightTheme : darkTheme
  }`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {icon && <FaArrowRight size={14} />}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      {icon && <FaArrowRight size={14} />}
    </button>
  );
};

export default SecondaryButton;