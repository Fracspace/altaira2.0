"use client";

import AboutResort from "./components/HomePageComponents/AboutResort";
import ElevatedArrival from "./components/HomePageComponents/ElevatedArrival";
import Experiences from "./components/HomePageComponents/Experiences";
import Hero from "./components/HomePageComponents/Hero";
import OwnVilla from "./components/HomePageComponents/OwnVilla";
import Restaurant from "./components/HomePageComponents/Restaurant";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AboutResort />
      <Experiences />
      <OwnVilla />
      <Restaurant />
      <ElevatedArrival />
    </div>
  );
}
