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
    <div className="relative z-50 md:hidden">
      {/* Hamburger button */}
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        className="w-12 h-12 flex items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
      >
        {/* Animated hamburger -> X */}
        <div className="relative w-6 h-6">
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 650, damping: 30 }}
            className="block absolute left-0 top-0 w-6 h-0.5 bg-current origin-center"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.12 }}
            className="block absolute left-0 top-2 w-6 h-0.5 bg-current"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 650, damping: 30 }}
            className="block absolute left-0 top-4 w-6 h-0.5 bg-current origin-center"
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
              className="absolute right-4 top-20 w-48 bg-white/95 dark:bg-slate-900/95 rounded-2xl shadow-2xl p-4 backdrop-blur-md"
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
                      className="flex items-center gap-3 text-lg font-medium px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                      onClick={() => setOpen(false)}
                    >
                      <Icon className="w-5 h-5" /> {label}
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
