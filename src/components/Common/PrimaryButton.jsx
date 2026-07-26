import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const PrimaryButton = ({
  children,
  to,
  onClick,
  icon = true,
  className = "",
}) => {
  const classes = `
    inline-flex items-center justify-center gap-3
    rounded-2xl
    bg-[#005BAC]
    px-7 py-4
    font-semibold
    text-white
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-1
    hover:bg-[#004b8c]
    hover:shadow-2xl
    active:scale-95
    ${className}
  `;

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

export default PrimaryButton;
