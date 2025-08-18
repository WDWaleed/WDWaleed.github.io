"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn";
  delay?: number;
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fadeInUp",
  delay = 0,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const animationClasses: Record<string, string> = {
    fadeInUp: "translate-y-8 opacity-0",
    fadeInLeft: "-translate-x-8 opacity-0",
    fadeInRight: "translate-x-8 opacity-0",
    scaleIn: "scale-95 opacity-0",
  };

  const baseClasses = "transition-all duration-700 ease-out";
  const initialClasses = !isVisible ? animationClasses[animation] : "";
  const finalClasses = isVisible
    ? "translate-y-0 translate-x-0 scale-100 opacity-100"
    : "";

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${initialClasses} ${finalClasses} ${className}`}
    >
      {children}
    </div>
  );
}
