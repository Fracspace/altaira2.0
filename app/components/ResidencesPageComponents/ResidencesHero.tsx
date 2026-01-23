import React from "react";
import carousalImgOne from "../../../public/images/residences/carousalImg1.webp";
import Image from "next/image";

function ResidencesHero() {
  return (
    <div>
      <h2 className="text-center text-4xl mt-10">
        Private Villas, Thoughtfully Positioned
      </h2>
      <p className="text-center text-lg mt-4 ml-10 mr-10">
        A limited collection of private villas set along the ridge - designed
        for ownership, privacy, and uninterrupted views. Altaira Private
        Residences are not standalone homes. They are fully integrated into a
        luxury hilltop resort ecosystem - combining the calm of private living
        with the privileges of a destination retreat.
      </p>
      <div className="mt-8">
        <Image src={carousalImgOne} alt="carousal image one" />
      </div>
    </div>
  );
}

export default ResidencesHero;
