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
        className="w-full min-h-[80vh] lg:min-h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg.src})` }}
      >
        <div className="absolute inset-0 h-[80vh] lg:h-[100vh] lg:flex items-center justify-center bg-black/20 "></div>
        <div className="pt-[65%] lg:pt-[25%]">
          <h2 className="absolute w-full text-center font-cormorant text-3xl md:text-4xl lg:text-5xl text-white  left-1/2 -translate-x-1/2  z-10">
            Altaira Private Residences
          </h2>
          <h3 className="absolute w-full max-w-5xl text-center font-inter text-md  md:mt-0 md:text-xl text-white  pt-14 lg:pt-18 left-1/2 -translate-x-1/2  z-10">
            A limited collection of private ridge villas, where ownership meets
            elevation, privacy, and uninterrupted views.
          </h3>
        </div>
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
