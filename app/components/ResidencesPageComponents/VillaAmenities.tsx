"use client";

import React, { useRef } from "react";
import Image from "next/image";
import amenitiesImg from "../../../public/images/residences/amenities.webp";
import poolIcon from "../../../public/images/residences/poolIcon.png";
import furnishedHomeIcon from "../../../public/images/residences/furnishedHomeIcon.png";
import smartHomeIcon from "../../../public/images/residences/automatedHomeIcon.png";
import carParkIcon from "../../../public/images/residences/carParkingIcon.png";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

function VillaAmenities() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 120 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 40%",
          end: "bottom top",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="mt-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row ">
        <div ref={contentRef} className="basis-[40%]">
          <h2 className="mt-5 text-center xl:text-2xl text-[#AD9273] font-semibold">
            VALLEY VIEW VILLA AMENITIES
          </h2>
          <div className="flex w-full justify-around flex-wrap mt-12">
            <div className="flex max-w-[150px] w-[80px] md:w-[10vw] flex-col items-center">
              <Image
                src={poolIcon}
                alt="pool icon"
                className=" border-2 border-[#AD9273] p-4"
              />
              <p className="mt-2 text-md dark:text-white  text-gray-500 text-center">
                Valley Facing Plunge Pool
              </p>
            </div>

            <div className="flex flex-col items-center max-w-[150px] w-[80px] md:w-[10vw]">
              <Image
                src={furnishedHomeIcon}
                alt="pool icon"
                className=" border-2 border-[#AD9273] p-4"
              />
              <p className="  text-md dark:text-white  mt-2 text-gray-500 text-center">
                Fully Furnished Homes
              </p>
            </div>
          </div>
          <div className="flex justify-around mt-12 w-full ">
            <div className="flex flex-col items-center max-w-[150px] w-[80px] md:w-[10vw]">
              <Image
                src={smartHomeIcon}
                alt="pool icon"
                className="  border-2 border-[#AD9273] p-4"
              />
              <p className=" text-md dark:text-white  mt-2 text-gray-500 text-center">
                Fully Automated Smart Homes
              </p>
            </div>

            <div className="flex flex-col items-center max-w-[150px] w-[80px] md:w-[10vw]">
              <Image
                src={carParkIcon}
                alt="pool icon"
                className="border-2 border-[#AD9273] p-4"
              />
              <p className="text-md dark:text-white  mt-2 text-gray-500 text-center">
                2 Dedicated Car Parks
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden basis-[60%] h-auto">
          <Image
            src={amenitiesImg}
            alt="amenities"
            className=" hover:scale-110 transition-transform duration-700 ease-out mt-5 md:mt-0 w-full h-full "
          />
        </div>
      </div>
    </div>
  );
}

export default VillaAmenities;
