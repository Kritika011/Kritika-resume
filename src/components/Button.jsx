export function Button({ children, onClick, className, variant }) {
    const baseStyles = "px-4 py-2 rounded-lg font-semibold transition duration-300";
    const variants = {
      primary: "bg-blue-500 hover:bg-blue-700 text-white",
      outline: "border border-gray-500 text-gray-900 hover:bg-gray-200",
    };
  
    return (
      <button onClick={onClick} className={`${baseStyles} ${variants[variant] || ""} ${className}`}>
        {children}
      </button>
    );
  }
  