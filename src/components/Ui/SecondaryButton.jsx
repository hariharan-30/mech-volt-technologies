import { Link } from "react-router-dom";

const SecondaryButton = ({
  to,
  children,
  className = "",
  ...props
}) => {
  return (
    <Link
      to={to}
      {...props}
      className={`
        inline-flex
        items-center
        justify-center
        gap-3

        rounded-2xl

        border
        border-white/10

        bg-white/5
        backdrop-blur-xl

        px-8
        py-4

        font-semibold
        text-white

        transition-all
        duration-300

        hover:bg-white
        hover:text-slate-900
        hover:shadow-xl

        ${className}
      `}
    >
      {children}
    </Link>
  );
};

export default SecondaryButton;