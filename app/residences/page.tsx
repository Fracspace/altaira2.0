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
        className="w-full min-h-[80vh] lg:min-h-[100vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImg.src})` }}
      >
        <div className="absolute inset-0 h-[80vh] lg:h-[100vh] lg:flex items-center justify-center bg-black/20 "></div>
        <div className="relative z-10 w-full md:max-w-5xl md:w-[60vw] mx-auto">
          <h2 className=" w-full text-center font-cormorant text-3xl md:text-4xl lg:text-5xl text-white z-10">
            Altaira Private Residences
          </h2>
          <h3 className="italic w-full max-w-5xl text-center font-inter text-md  md:mt-0 md:text-lg 2xl:text-2xl text-white  pt-4 z-10">
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
