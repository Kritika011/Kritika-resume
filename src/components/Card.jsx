export function Cards({ children, className }) {
    return (
      <div className={` ${className}`}>
        {children}
      </div>
    );
  }
  
  export function CardContents({ children }) {
    return <div className="p-2">{children}</div>;
  }
  