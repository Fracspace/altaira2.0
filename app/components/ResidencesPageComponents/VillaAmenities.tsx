import React from "react";
import Image from "next/image";
import amenitiesImg from "../../../public/images/residences/amenities.webp";
import poolIcon from "../../../public/images/residences/poolIcon.png";
import furnishedHomeIcon from "../../../public/images/residences/furnishedHomeIcon.png";
import smartHomeIcon from "../../../public/images/residences/automatedHomeIcon.png";
import carParkIcon from "../../../public/images/residences/carParkingIcon.png";

function VillaAmenities() {
  return (
    <div className="mt-8">
      <div className="flex flex-col md:flex-row ml-[2vw] mr-[2vw]">
        <div className="w-full md:w-[40vw]">
          <h2 className="mt-5 text-center text-[#AD9273] font-semibold">
            VALLEY VIEW VILLA AMENITIES
          </h2>
          <div className="flex  justify-around flex-wrap mt-12">
            <div className="flex flex-col items-center w-1/2">
              <Image
                src={poolIcon}
                alt="pool icon"
                className="w-[30vw] md:w-[8vw] h-[15vh] border-2 border-[#AD9273] p-4"
              />
              <p className="mt-2 w-[30vw] md:w-[12vw] text-gray-500 text-center">
                Valley Facing Plunge Pool
              </p>
            </div>

            <div className="flex flex-col items-center w-1/2">
              <Image
                src={furnishedHomeIcon}
                alt="pool icon"
                className="w-[30vw] md:w-[8vw] h-[15vh] border-2 border-[#AD9273] p-4"
              />
              <p className="w-[30vw] md:w-[12vw] mt-2 text-gray-500 text-center">
                Fully Furnished Homes
              </p>
            </div>
          </div>
          <div className="flex mt-12">
            <div className="flex flex-col items-center w-1/2">
              <Image
                src={smartHomeIcon}
                alt="pool icon"
                className="w-[30vw] md:w-[8vw] h-[15vh] border-2 border-[#AD9273] p-4"
              />
              <p className="w-[30vw] md:w-[12vw] mt-2 text-gray-500 text-center">
                Fully Automated Smart Homes
              </p>
            </div>

            <div className="flex flex-col items-center w-1/2">
              <Image
                src={carParkIcon}
                alt="pool icon"
                className="w-[30vw] md:w-[8vw] h-[15vh] border-2 border-[#AD9273] p-4"
              />
              <p className="w-[30vw] md:w-[12vw] mt-2 text-gray-500 text-center">
                2 Dedicated Car Parks
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={amenitiesImg}
            alt="amenities"
            className="w-full md:w-[58vw] h-[50vh] md:h-[70vh]"
          />
        </div>
      </div>
    </div>
  );
}

export default VillaAmenities;
