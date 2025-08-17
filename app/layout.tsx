import type { Metadata } from "next";
import { Providers } from "./providers";
import { poppins, spaceGrotesk } from "@/lib/utils/fonts";
import "./globals.css";
import Navbar from "@/components/NavBar";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "WDWaleed | Full-Stack Web Developer",
  description:
    "Portfolio website of WDWaleed - Full-Stack Web Developer specializing in MERN stack and modern web technologies.",
  keywords: [
    "WDWaleed",
    "Portfolio",
    "Full-Stack Developer",
    "Web Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "Express.js",
    "React Query",
  ],
  authors: [{ name: "WDWaleed" }],
  openGraph: {
    title: "WDWaleed | Full-Stack Web Developer",
    description:
      "WDWaleed, a Full-Stack Web Developer skilled in MERN stack and Next.js",
    url: "https://wdwaleed.vercel.app", // replace with your real domain
    siteName: "WDWaleed Portfolio",
    images: [
      {
        url: "https://wdwaleed.vercel.app/og-image.png", // replace with your preview image
        width: 1200,
        height: 630,
        alt: "WDWaleed Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WDWaleed | Full-Stack Web Developer",
    description:
      "Portfolio of WDWaleed, showcasing projects in MERN and Next.js",
    images: ["https://wdwaleed.vercel.app/og-image.png"], // same as OG
    creator: "@yourTwitterHandle", // optional
  },
  metadataBase: new URL("https://wdwaleed.vercel.app"), // replace with your real domain
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Providers>
          <Navbar />
          {children}

          <Toaster position="top-center" reverseOrder={false} />
        </Providers>
      </body>
    </html>
  );
}
