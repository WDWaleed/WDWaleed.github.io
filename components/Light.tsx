"use client";

import React from "react";
import { ThemeToggle } from "./ThemeToggle";

export default function Light() {
  return (
    <div className="bg-slate-200 text-gray-700 min-h-screen p-6 space-y-8 font-body">
      {/* Navbar */}
      <nav className="bg-slate-100  shadow-md  p-4 flex justify-between items-center rounded-lg">
        <h1 className="text-gray-700 font-heading font-bold text-2xl">
          <span className="text-indigo-500 font-extrabold">WD</span>Waleed
        </h1>
        <ThemeToggle />
        <button className="bg-indigo-500 hover:bg-indigo-500/65 text-white px-4 py-2 rounded-full transition-colors duration-300 ">
          Get Started
        </button>
      </nav>

      {/* Card */}
      <div className="bg-slate-100 p-6 rounded-lg shadow-lg border border-indigo-500/20 max-w-md">
        <h2 className="text-xl font-heading font-semibold mb-2 text-gray-800">
          Welcome
        </h2>
        <p className="mb-4">
          This is a dark theme preview using custom Tailwind theme variables.
          Built for accessibility and style.
        </p>
        <button className="bg-indigo-500 hover:bg-indigo-500/65 text-white px-6 py-3    rounded-full transition-colors duration-300 ">
          Learn More
        </button>
      </div>

      {/* Input Field */}
      <div className="bg-slate-100 p-6 rounded-lg shadow-lg border border-indigo-500/20 max-w-md">
        <label className="block mb-2 font-heading">Your Name</label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full bg-slate-200 border border-slate-300  placeholder-gray-500 px-4 py-2 rounded-lg  focus:outline-2 focus:outline-indigo-500/40"
        />
      </div>

      {/* Status Badges */}
      <div className="flex space-x-3">
        <span className="px-3 py-1 rounded-full bg-success/20 text-success border border-success/30 text-sm">
          Success
        </span>
        <span className="px-3 py-1 rounded-full bg-warning/20 text-warning border border-warning/30 text-sm">
          Warning
        </span>
        <span className="px-3 py-1 rounded-full bg-danger/20 text-danger border border-danger/30 text-sm">
          Error
        </span>
      </div>
    </div>
  );
}
