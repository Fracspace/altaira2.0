import Hero from "../components/ContactPageComponents/Hero";
import Contact from "../components/ContactPageComponents/Contact";
import { Suspense } from "react";

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
