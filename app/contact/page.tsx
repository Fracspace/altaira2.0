import Hero from "../components/ContactPageComponents/Hero";
import Contact from "../components/ContactPageComponents/Contact";
import { Suspense } from "react";

// app/contact/page.tsx (or invest)

export const metadata = {
  title: "Invest in Altaira | Sri Lanka Luxury Resort Investment",
  description:
    "Join Altaira’s exclusive investor community and earn managed rental income from Sri Lanka’s premium hilltop resort.",
  keywords: [
    "invest in Altaira",
    "Sri Lanka resort investment",
    "fractional ownership investment",
    "Altaira investment opportunity"
  ]
};

const page = () => {
  return (
    <div>
      <Hero />
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default page;
