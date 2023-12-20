const ButtonCustom = ({
  className,
  onClick,
  children,
  onMouseEnter,
  onMouseLeave,
}) => {
  const buttonClasses = `border border-slate-500 p-3 rounded-lg mt-10 text-white text-sm hover:bg-sky-300 hover:text-slate-800 transition-all hover:duration-700 active:duration-100 ease-in active:bg-sky-600 active:outline-none shadow active:shadow-outline ${className}`;
  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
};

export default ButtonCustom;
