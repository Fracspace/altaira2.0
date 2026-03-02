"use client"

export const dynamic = "force-static";

import type { Metadata } from "next";
import "./globals.css";

import { usePathname } from "next/navigation";

import Navbar from "./components/GlobalComponents/Navbar";
import Footer from "./components/GlobalComponents/Footer";

import { Cormorant_Garamond, Inter } from "next/font/google";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"]
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"]
});

// export const metadata: Metadata = {
//   title: "Altaira",
//   description:
//     "Altaira luxury resort and private residences offer hilltop villas, wellness experiences, fine dining, and panoramic valley views."
// };

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname=usePathname();
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
       {!pathname.startsWith("/live-stream") &&  <Navbar />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
