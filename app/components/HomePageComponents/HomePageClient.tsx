"use client";

import { useEffect, useState } from "react";

import MainHero from "../HomePageComponents/MainHero";
import dynamic from "next/dynamic";

// app/page.tsx

export const metadata = {
  title: "Altaira Sri Lanka | Luxury Resort Investment Opportunity",
  description:
    "Discover Altaira — a premium hilltop luxury resort in Sri Lanka offering fractional ownership, high rental yields, and world-class hospitality experiences.",
  keywords: [
    "Altaira Sri Lanka",
    "luxury resort investment Sri Lanka",
    "fractional ownership Sri Lanka",
    "hilltop villas Sri Lanka",
    "resort investment opportunity"
  ],
  openGraph: {
    title: "Altaira Sri Lanka | Above the Clouds",
    description:
      "Own a share in Altaira’s luxury resort ecosystem with managed rental income and premium hilltop living.",
    url: "https://altaira.lk/",
    siteName: "Altaira",
    type: "website"
  }
};

export default function HomePageClient() {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    // const hasSeen = sessionStorage.getItem("altaira_popup_seen");
    // if (hasSeen) return;

    const timer = setTimeout(() => {
      setShowPopup(true);
      // sessionStorage.setItem("altaira_popup_seen", "true");
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const AboutHeroSection = dynamic(
    () => import("../HomePageComponents/AboutResort"),
    { loading: () => <div className="h-[60vh]"></div> }
  );
  const ExperiencesSection = dynamic(
    () => import("../HomePageComponents/Experiences"),
    { loading: () => <div className="h-[60vh]"></div> }
  );
  const OwnVillaSection = dynamic(
    () => import("../HomePageComponents/OwnVilla"),
    { loading: () => <div className="h-[60vh]"></div> }
  );
  const RestaurantSection = dynamic(
    () => import("../HomePageComponents/Restaurant"),
    { loading: () => <div className="h-[60vh]"></div> }
  );
  const ElevatedArriavalSection = dynamic(
    () => import("../HomePageComponents/ElevatedArrival"),
    { loading: () => <div className="h-[60vh]"></div> }
  );

  return (
    <div>
      {/* <Hero /> */}
      <MainHero />

      {/* <AboutResort />
      <Experiences />
      <OwnVilla />
      <Restaurant />
      <ElevatedArrival /> */}

      <AboutHeroSection />

      {/* <FloatingEnquiryIcon /> */}

      <ExperiencesSection />
      <OwnVillaSection />
      <RestaurantSection />
      {/* {showPopup && <PopupForm onClose={() => setShowPopup(false)} />} */}
      <ElevatedArriavalSection />
    </div>
  );
}
