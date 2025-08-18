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
    <div className="group relative z-0 mb-5 w-full">
      <input
        id={id}
        placeholder=" "
        className={`text-primary-text peer block w-full appearance-none border-0 border-b-2 bg-transparent px-0 py-2.5 text-sm focus:ring-0 focus:outline-none ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-input-border focus:border-input-focus"
        } ${className}`}
        {...props}
      />
      <label
        htmlFor={id}
        className={`text-input-placeholder peer-focus:text-input-focus } absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium`}
      >
        {label}
      </label>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
