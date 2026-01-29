"use client";

import React, { useRef } from "react";
import villaDetails from "../../../public/images/residences/villaDetails.webp";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function VillaDimensions() {
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 120 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          end: "bottom top",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <div ref={containerRef}>
      <div className="p-10 flex flex-col md:flex-row">
        <div>
          <Image
            src={villaDetails}
            alt="villa details"
            className="w-full max-h-[800px] md:w-[50vw] h-[50vh] md:h-[75vh] ml-[2vw]"
          />
        </div>
        <div
          ref={contentRef}
          className="w-full md:w-[40vw] mt-4 md:ml-[5vw] md:mr-[2vw]"
        >
          <h2 className="text-3xl md:text-4xl font-cormorant">
            A Higher Way Of Living
          </h2>
          <p className="mt-4 text-md xl:text-lg leading-[2]">
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
