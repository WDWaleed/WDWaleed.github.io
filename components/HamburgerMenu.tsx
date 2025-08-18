"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Home, FolderGit2, Mail, LucideIcon } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export default function HamburgerMenu() {
  const [open, setOpen] = useState<boolean>(false);

  const menuVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number = 1) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.04 * i,
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    }),
    exit: { opacity: 0, x: 20, transition: { duration: 0.15 } },
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0, backdropFilter: "blur(0px)" },
    visible: {
      opacity: 1,
      backdropFilter: "blur(4px)",
      transition: { type: "spring", stiffness: 120 },
    },
    exit: { opacity: 0, transition: { duration: 0.18 } },
  };

  const navItems: NavItem[] = [
    { label: "Home", href: "#home", icon: Home },
    { label: "Projects", href: "#projects", icon: FolderGit2 },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <div className="bg-component-bg text-primary-text relative z-50 md:hidden">
      {/* Hamburger button */}
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        className="flex h-12 w-12 items-center justify-center rounded-md focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:outline-none"
      >
        {/* Animated hamburger -> X */}
        <div className="relative h-6 w-6">
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 650, damping: 30 }}
            className="absolute top-0 left-0 block h-0.5 w-6 origin-center bg-current"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.12 }}
            className="absolute top-2 left-0 block h-0.5 w-6 bg-current"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 650, damping: 30 }}
            className="absolute top-4 left-0 block h-0.5 w-6 origin-center bg-current"
          />
        </div>
      </button>

      {/* Overlay + dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            className="fixed inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          >
            <motion.nav
              className="bg-component-bg text-primary-text absolute top-20 right-4 w-48 rounded-2xl p-4 shadow-2xl backdrop-blur-md"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: -10, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { type: "spring", stiffness: 220, damping: 20 },
              }}
              exit={{ y: -10, opacity: 0, transition: { duration: 0.12 } }}
            >
              <ul className="space-y-3">
                {navItems.map(({ label, href, icon: Icon }, i) => (
                  <motion.li
                    key={label}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuVariants}
                  >
                    <a
                      href={href}
                      className="hover:bg-component-hover flex items-center gap-3 rounded-md px-3 py-2 text-lg font-medium transition-colors duration-100"
                      onClick={() => setOpen(false)}
                    >
                      <Icon className="h-5 w-5" /> {label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
