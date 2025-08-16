"use client";

import React from "react";

interface FloatingTextareaProps {
  id: string;
  label: string;
  required?: boolean;
  rows?: number;
}

export const FloatingTextarea: React.FC<FloatingTextareaProps> = ({
  id,
  label,
  required = false,
  rows = 4,
}) => {
  return (
    <div className="relative w-full mb-6">
      <textarea
        id={id}
        rows={rows}
        required={required}
        placeholder=" "
        className="peer block w-full rounded-md border-b-2 border-input-border bg-transparent  pt-5 pb-2 text-sm text-primary-text focus:border-input-focus focus:outline-none"
      />
      <label
        htmlFor={id}
        className="absolute peer-focus:font-medium  top-0 text-input-placeholder text-sm transition-all peer-placeholder-shown:top-0 peer-placeholder-shown:text-input-placeholder peer-placeholder-shown:text-sm peer-focus:-top-3  peer-focus:scale-75 peer-focus:-left-2  peer-focus:text-input-focus"
      >
        {label}
      </label>
    </div>
  );
};
