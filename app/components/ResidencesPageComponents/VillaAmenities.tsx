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
    <div ref={containerRef} className="mt-8">
      <div className="flex flex-col md:flex-row ml-[2vw] mr-[2vw]">
        <div ref={contentRef} className="w-full md:w-[40vw]">
          <h2 className="mt-5 text-center xl:text-2xl text-[#AD9273] font-semibold">
            VALLEY VIEW VILLA AMENITIES
          </h2>
          <div className="flex  justify-around flex-wrap mt-12">
            <div className="flex flex-col items-center w-1/2">
              <Image
                src={poolIcon}
                alt="pool icon"
                className="w-[30vw] md:w-[8vw] h-[15vh] border-2 border-[#AD9273] p-4"
              />
              <p className="mt-2 w-[30vw]  md:w-[12vw] text-md xl:text-lg text-gray-500 text-center">
                Valley Facing Plunge Pool
              </p>
            </div>

            <div className="flex flex-col items-center w-1/2">
              <Image
                src={furnishedHomeIcon}
                alt="pool icon"
                className="w-[30vw] md:w-[8vw] h-[15vh] border-2 border-[#AD9273] p-4"
              />
              <p className="w-[30vw] md:w-[12vw] text-md xl:text-lg mt-2 text-gray-500 text-center">
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
              <p className="w-[30vw] md:w-[12vw] text-md xl:text-lg mt-2 text-gray-500 text-center">
                Fully Automated Smart Homes
              </p>
            </div>

            <div className="flex flex-col items-center w-1/2">
              <Image
                src={carParkIcon}
                alt="pool icon"
                className="w-[30vw] md:w-[8vw] h-[15vh] border-2 border-[#AD9273] p-4"
              />
              <p className="w-[30vw] md:w-[12vw] text-md xl:text-lg mt-2 text-gray-500 text-center">
                2 Dedicated Car Parks
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={amenitiesImg}
            alt="amenities"
            className=" mt-5 md:mt-0 w-full md:w-[58vw] h-[50vh] md:h-[70vh]"
          />
        </div>
      </div>
    </div>
  );
}

export default VillaAmenities;
