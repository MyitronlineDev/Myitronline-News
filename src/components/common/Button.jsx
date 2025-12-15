const Button = ({
  fn = null,
  label = "",
  loadingLabel = "Loading...",
  loading = false,
  icon: Icon = null,
  iconColor = "currentColor",
  className = "",
  variant = "default",
  size = "md",
  ...props
}) => {
  const baseStyles = `
    inline-flex items-center gap-2
    rounded-md
    font-medium
    select-none
    transition-all duration-200 ease-out
    disabled:opacity-50 disabled:cursor-not-allowed
    focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-400
  `;

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base",
  };

  const variants = {
    // Primary neutral button
    default: `
      bg-gray-100 text-gray-800
      border border-gray-200
      shadow-sm
      hover:bg-gray-200 hover:shadow
      active:bg-gray-300
    `,

    // Outline / secondary
    outline: `
      bg-white text-gray-700
      border border-gray-300
      hover:bg-gray-50 hover:shadow-sm
      active:bg-gray-100
    `,

    // Ghost (icon / inline actions)
    ghost: `
      text-gray-700
      hover:bg-gray-100
      active:bg-gray-200
    `,
  };

  return (
    <button
      disabled={loading}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
      onClick={(e) => !loading && fn && fn(e)}
    >
      {loading ? (
        <>
          <span className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
          <span>{loadingLabel}</span>
        </>
      ) : (
        <>
          {Icon && <Icon className="text-lg text-gray-600" />}
          <span>{label}</span>
        </>
      )}
    </button>
  );
};

export default Button;
