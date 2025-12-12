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
  const baseStyles =
    "inline-flex items-center gap-2 rounded-md transition-all font-medium select-none disabled:opacity-60";

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  const variants = {
    default: "border border-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200",
    outline: "border border-gray-400 text-gray-700 bg-white hover:bg-gray-50",
    ghost: "text-gray-700 hover:bg-gray-100 border border-transparent",
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
          <span className="loader w-4 h-4 border-2 border-t-transparent border-gray-600 rounded-full animate-spin"></span>
          {loadingLabel}
        </>
      ) : (
        <>
          {Icon && <Icon className="text-xl" color={iconColor} />}
          {label}
        </>
      )}
    </button>
  );
};

export default Button;
