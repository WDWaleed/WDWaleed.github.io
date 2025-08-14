"use client";

import React from "react";
import { ThemeToggle } from "./ThemeToggle";

export default function Test() {
  return (
    <div className="bg-main-bg text-primary-text min-h-screen p-6 space-y-8 font-body">
      {/* Navbar */}
      <nav className="bg-component-bg  shadow-md  border-b border-component-border  p-4 flex justify-between items-center rounded-lg">
        <h1 className="text-heading-text font-heading font-bold text-2xl">
          <span className="text-accent font-extrabold">WD</span>Waleed
        </h1>
        <ThemeToggle />
        <button className="bg-btn-bg hover:bg-btn-hover text-btn-text px-4 py-2 rounded-full transition-colors duration-300 ">
          Get Started
        </button>
      </nav>

      {/* Card */}
      <div className="bg-component-bg p-6 rounded-lg shadow-lg border border-component-border max-w-md">
        <h2 className="text-xl font-heading font-semibold mb-2 text-heading-text">
          Welcome
        </h2>
        <p className="mb-4">
          This is a dark theme preview using custom Tailwind theme variables.
          Built for accessibility and style.
        </p>
        <button className="bg-btn-bg hover:bg-btn-hover text-btn-text px-6 py-3    rounded-full transition-colors duration-300 ">
          Learn More
        </button>
      </div>

      {/* Input Field */}
      <div className="bg-component-bg p-6 border border-component-border rounded-lg shadow-lg  max-w-md">
        <label className="block mb-2 font-heading">Your Name</label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full bg-input-bg border border-input-border placeholder-input-placeholder px-4 py-2 rounded-lg focus:outline-2 focus:outline-input-outline"
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
