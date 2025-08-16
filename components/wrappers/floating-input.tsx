import React from "react";

interface FloatingInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string; // <-- new prop for error handling
}

export function FloatingInput({
  label,
  id,
  className = "",
  error,
  ...props
}: FloatingInputProps) {
  return (
    <div className="relative z-0 w-full mb-5 group">
      <input
        id={id}
        placeholder=" "
        className={`block py-2.5 px-0 w-full text-sm text-primary-text bg-transparent border-0 
          border-b-2 appearance-none focus:outline-none focus:ring-0 peer 
          ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-input-border focus:border-input-focus"
          } 
          ${className}`}
        {...props}
      />
      <label
        htmlFor={id}
        className={`peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75 peer-focus:-translate-y-6 text-input-placeholder peer-focus:text-input-focus
          }`}
      >
        {label}
      </label>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
