import { Link } from "react-router-dom";

const PrimaryButton = ({
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

        bg-orange-500
        hover:bg-orange-600

        px-8
        py-4

        font-semibold
        text-white

        shadow-lg

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-2xl

        ${className}
      `}
    >
      {children}
    </Link>
  );
};

export default PrimaryButton;