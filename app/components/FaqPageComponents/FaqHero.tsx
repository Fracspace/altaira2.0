import React from "react";
import faqHeroImg from "../../../public/images/faq/faq.webp";

function FaqHero() {
  return (
    <div
      className="w-full min-h-[80vh] lg:min-h-[100vh]  bg-cover bg-center"
      style={{ backgroundImage: `url(${faqHeroImg.src})` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative min-h-[100vh] flex items-center justify-center">
        <div>
          <h2 className="text-3xl text-center lg:text-5xl text-white font-cormorant">
            Frequently Asked Questions?
          </h2>
          <p className="italic max-w-5xl text-center font-inter text-md md:text-lg 2xl:text-2xl text-white mt-4">
            Understanding Altaira, At a Glance
          </p>
        </div>
      </div>
    </div>
  );
}

export default FaqHero;
