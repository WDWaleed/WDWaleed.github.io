"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class" // this will add/remove "light" or "dark" to <html>
      defaultTheme="dark" // your default theme
      enableSystem={true} // allow system preference
    >
      {children}
    </ThemeProvider>
  );
}
