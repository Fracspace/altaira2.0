import React from "react";
import carousalImgOne from "../../../public/images/residences/carousalImg1.webp";
import Image from "next/image";

function ResidencesHero() {
  return (
    <div className="p-10">
      <h2 className="text-center font-bold text-lg md:text-4xl">
        Private Villas, Thoughtfully Positioned
      </h2>
      <p className="text-center text-lg mt-4">
        A limited collection of private villas set along the ridge - designed
        for ownership, privacy, and uninterrupted views. Altaira Private
        Residences are not standalone homes. They are fully integrated into a
        luxury hilltop resort ecosystem - combining the calm of private living
        with the privileges of a destination retreat.
      </p>
      <div className="mt-8">
        <Image src={carousalImgOne} className="h-[50vh] object-cover md:h-auto" alt="carousal image one" />
      </div>
    </div>
  );
}

export default ResidencesHero;
