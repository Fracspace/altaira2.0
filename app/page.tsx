"use client";

import AboutResort from "./components/HomePageComponents/AboutResort";
import ElevatedArrival from "./components/HomePageComponents/ElevatedArrival";
import Experiences from "./components/HomePageComponents/Experiences";
import Hero from "./components/HomePageComponents/Hero";
import OwnVilla from "./components/HomePageComponents/OwnVilla";
import Restaurant from "./components/HomePageComponents/Restaurant";
import MainHero from "./components/HomePageComponents/MainHero";
import dynamic from "next/dynamic";

export default function HomePage() {
  const AboutHeroSection = dynamic(
    () => import("./components/HomePageComponents/AboutResort"),
    { loading: () => <div className="h-[60vh]"></div> }
  );
  const ExperiencesSection = dynamic(
    () => import("./components/HomePageComponents/Experiences"),
    { loading: () => <div className="h-[60vh]"></div> }
  );
  const OwnVillaSection = dynamic(
    () => import("./components/HomePageComponents/OwnVilla"),
    { loading: () => <div className="h-[60vh]"></div> }
  );
  const RestaurantSection = dynamic(
    () => import("./components/HomePageComponents/Restaurant"),
    { loading: () => <div className="h-[60vh]"></div> }
  );
  const ElevatedArriavalSection = dynamic(
    () => import("./components/HomePageComponents/ElevatedArrival"),
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
      <ExperiencesSection />
      <OwnVillaSection />
      <RestaurantSection />
      <ElevatedArriavalSection />
    </div>
  );
}
