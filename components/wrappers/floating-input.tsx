import React from "react";

interface FloatingInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function FloatingInput({
  label,
  id,
  className = "",
  ...props
}: FloatingInputProps) {
  return (
    <div className="relative z-0 w-full mb-5 group">
      <input
        id={id}
        placeholder=" "
        className={`block py-2.5 px-0 w-full text-sm text-primary-text bg-transparent border-0 
          border-b-2 border-input-border appearance-none    
           focus:outline-none focus:ring-0 focus:border-input-focus peer ${className}`}
        {...props}
      />
      <label
        htmlFor={id}
        className="peer-focus:font-medium absolute text-sm text-input-placeholder  duration-300 
          transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 
          peer-focus:text-input-focus peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
}
