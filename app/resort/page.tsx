import ResortHero from "../components/ResortPageComponents/ResortHero";
import AboveNoise from "../components/ResortPageComponents/AboveNoise";
import ShapedByLand from "../components/ResortPageComponents/ShapedByLand";
import AdventureZone from "../components/ResortPageComponents/AdventureZone";
import EventSpaces from "../components/ResortPageComponents/EventSpaces";

// app/resort/page.tsx

export const metadata = {
  title: "Altaira Luxury Resort | World-Class Hilltop Hospitality",
  description:
    "Experience Altaira’s luxury resort featuring infinity pool, spa, fine dining, and panoramic hilltop views in Sri Lanka.",
  keywords: [
    "Altaira resort",
    "luxury resort Sri Lanka",
    "hilltop resort Sri Lanka",
    "premium resort experience"
  ]
};

const page = () => {
  return (
    <div>
      <ResortHero />
      <AboveNoise />
      <ShapedByLand />
      <AdventureZone />
      <EventSpaces />
    </div>
  );
};

export default page;
