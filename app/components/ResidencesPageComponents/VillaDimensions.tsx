import React from "react";
import villaDetails from "../../../public/images/residences/villaDetails.webp";
import Image from "next/image";

function VillaDimensions() {
  return (
    <div>
      <div className="mt-12 flex">
        <div>
          <Image
            src={villaDetails}
            alt="villa details"
            className="w-[50vw] ml-[2vw]"
          />
        </div>
        <div className="w-[40vw] ml-5 mr-5">
          <h2 className="text-4xl font-cormorant">A Higher Way Of Living</h2>
          <p className="mt-4 leading-[1.8]">
            Set apart from the resort’s active zones, the villas enjoy a sense
            of calm & seclusion, while remaining deeply connected to the
            surrounding landscape. The positioning ensures that every home opens
            toward light, air, & uninterrupted valley horizons.
          </p>
          <div>
            <div className="flex items-center justify-between">
              <div className="text-center py-3 border-r border-black/20 mr-2">
                Villa Type
              </div>
              <div className="text-center">Area</div>
              <div className="text-center">Price</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-center">Valley View Villa</div>
              <div className="text-center">2690 sq.ft</div>
              <div className="text-center">$2,50,000</div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default VillaDimensions;
