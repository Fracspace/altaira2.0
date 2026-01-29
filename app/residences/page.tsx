import React from "react";
import heroImg from "../../public/images/residences/residenceHeroImg.webp";
import ResidencesHero from "../components/ResidencesPageComponents/ResidencesHero";
import VillaAmenities from "../components/ResidencesPageComponents/VillaAmenities";
import VillaDimensions from "../components/ResidencesPageComponents/VillaDimensions";
import VillaOwnership from "../components/ResidencesPageComponents/VillaOwnership";

function page() {
  return (
    <div>
      <div
        className="w-full h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg.src})` }}
      >
        <div className="absolute inset-0 bg-black/20 "></div>
        <h2 className="absolute w-full text-center font-cormorant text-5xl md:text-6xl text-white pt-[50%] left-1/2 -translate-x-1/2 md:pt-[30%]  z-10">
          Altaira Private Residences
        </h2>
        <h3 className="absolute w-full text-center font-inter text-lg md:text-xl text-white pt-[90%] left-1/2 -translate-x-1/2 md:pt-[37%] z-10">
          A limited collection of private ridge villas, where ownership meets
          elevation, privacy, and uninterrupted views.
        </h3>
      </div>
      <div>
        <ResidencesHero />
      </div>
      <div>
        <VillaAmenities />
      </div>
      <div>
        <VillaDimensions />
      </div>
      <div>
        <VillaOwnership />
      </div>
    </div>
  );
}

export default page;
