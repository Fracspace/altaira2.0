import Hero from "../components/TimelinePageComponents/Hero";
import Timeline from "../components/TimelinePageComponents/Timeline";

// app/timeline/page.tsx

export const metadata = {
  title: "Altaira Project Timeline | Development Progress",
  description:
    "Track Altaira’s development milestones, construction updates, and upcoming phases of this premium Sri Lanka resort project.",
  keywords: [
    "Altaira timeline",
    "Altaira construction progress",
    "resort development Sri Lanka"
  ]
};

const page = () => {
  return (
    <div>
      <Hero />
      <Timeline />
    </div>
  );
};

export default page;
