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
            className="w-[50vw] h-[75vh] ml-[2vw]"
          />
        </div>
        <div className="w-[40vw] mt-4 ml-5 mr-5">
          <h2 className="text-4xl font-cormorant">A Higher Way Of Living</h2>
          <p className="mt-4 leading-[2]">
            Set apart from the resort’s active zones, the villas enjoy a sense
            of calm & seclusion, while remaining deeply connected to the
            surrounding landscape. The positioning ensures that every home opens
            toward light, air, & uninterrupted valley horizons.
          </p>
          <div className="mt-8">
            <div className="w-full max-w-4xl border border-[#AD9273] rounded-lg overflow-hidden">
              <div className="grid grid-cols-3">
                <div className="bg-[#AD9273]/40 border-r border-[#AD9273] border-b p-4 text-center">
                  Villa Type
                </div>
                <div className="bg-[#AD9273]/40 border-r border-b border-[#AD9273] p-4 text-center">
                  Area
                </div>
                <div className="bg-[#AD9273]/40 border-b border-[#AD9273] p-4 text-center">
                  Price
                </div>

                <div className="border-r text-[#67777E] border-[#AD9273] bg-[#AD9273]/10 p-4 text-center">
                  Valley View Villa
                </div>
                <div className="border-r text-[#67777E] border-[#AD9273] bg-[#AD9273]/10 p-4 text-center">
                  2690 sq.ft
                </div>
                <div className="p-4 text-[#67777E] text-center bg-[#AD9273]/10 ">
                  $2,50,000
                </div>
              </div>
            </div>
          </div>
          <button className="mt-10 bg-[#AD9273] rounded-lg p-3 text-white cursor-pointer">
            View Brochure
          </button>
        </div>
      </div>
    </div>
  );
}

export default VillaDimensions;
