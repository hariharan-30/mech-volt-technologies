const SectionBadge = ({
    children,
    className = "",
  }) => {
    return (
      <span
        className={`
          inline-flex
          items-center
  
          rounded-full
  
          border
          border-cyan-400/20
  
          bg-cyan-400/10
  
          px-5
          py-2
  
          text-xs
          sm:text-sm
  
          font-semibold
          uppercase
  
          tracking-[4px]
  
          text-cyan-300
  
          ${className}
        `}
      >
        {children}
      </span>
    );
  };
  
  export default SectionBadge;