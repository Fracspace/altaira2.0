// "use client";

export const dynamic = "force-static";

import Script from "next/script";

import type { Metadata } from "next";
import "./globals.css";

import { Suspense } from "react";

import GoogleAnalytics from "./components/GlobalComponents/GoogleAnalytics";

import Navbar from "./components/GlobalComponents/Navbar";
import Footer from "./components/GlobalComponents/Footer";

import { Cormorant_Garamond, Inter } from "next/font/google";
import ScrollTracker from "./components/GlobalComponents/ScrollTracker";
import AnalyticsLoader from "./components/GlobalComponents/AnalyticsLoader";
import CookieBanner from "./components/GlobalComponents/CookieBanner";

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

export const metadata: Metadata = {
  icons: {
    icon: "./favicon.png"
  },
  title: "Altaira",
  description:
    "Altaira luxury resort and private residences offer hilltop villas, wellness experiences, fine dining, and panoramic valley views."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/homepage/heroBg.webp"
          fetchPriority="high"
        />
        <link
          rel="preconnect"
          href="https://duixj37yn5405.cloudfront.net/hls-videos/b795a08b-216f-4cce-899c-1e9382562d13/1080p/index.m3u8"
        />
      </head>
      <body>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <ScrollTracker />
        <Navbar />
        {children}
        <AnalyticsLoader />
        <CookieBanner />

        <Footer />
      </body>
    </html>
  );
}
