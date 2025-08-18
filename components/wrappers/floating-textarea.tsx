import React from "react";

interface FloatingTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const FloatingTextarea: React.FC<FloatingTextareaProps> = ({
  id,
  label,
  rows = 4,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className="relative mb-6 w-full">
      <textarea
        id={id}
        rows={rows}
        placeholder=" "
        className={`peer text-primary-text block w-full rounded-md border-b-2 bg-transparent pt-5 pb-2 text-sm focus:outline-none ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-input-border focus:border-input-focus"
        } ${className}`}
        {...props}
      />
      <label
        htmlFor={id}
        className={`peer-placeholder-shown:text-input-placeholder absolute top-0 text-sm transition-all peer-placeholder-shown:top-0 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:-left-2 peer-focus:scale-75 ${
          error
            ? "text-red-500 peer-focus:text-red-500"
            : "text-input-placeholder peer-focus:text-input-focus"
        }`}
      >
        {label}
      </label>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};
