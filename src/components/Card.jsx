export function Cards({ children, className }) {
    return (
      <div className={`border rounded-lg shadow-md p-4 bg-white dark:bg-gray-800 ${className}`}>
        {children}
      </div>
    );
  }
  
  export function CardContents({ children }) {
    return <div className="p-2">{children}</div>;
  }
  