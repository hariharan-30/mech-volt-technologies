const SectionHeader = ({
  badge,
  title,
  description,
  center = false,
  light = false,
}) => {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {/* Badge */}

      <span
        className="
          inline-flex
          items-center

          rounded-full

          border
          border-orange-500/20

          bg-orange-500/10

          px-4
          py-2

          text-xs
          font-semibold
          uppercase
          tracking-[4px]

          text-orange-500
        "
      >
        {badge}
      </span>

      {/* Title */}

      <h2
        className={`
          mt-6

          font-bold

          leading-tight

          text-3xl
          sm:text-4xl
          lg:text-5xl

          ${light ? "text-white" : "text-slate-900"}
        `}
      >
        {title}
      </h2>

      {/* Description */}

      {description && (
        <p
          className={`
            mt-6

            text-lg

            leading-8

            ${light ? "text-slate-300" : "text-slate-600"}
          `}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
