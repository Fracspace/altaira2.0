"use client";

import React, { useRef, useState } from "react";
import villaDetails from "../../../public/images/residences/villaDetails.webp";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import BrochureDownload from "./BrochureDownload";

gsap.registerPlugin(ScrollTrigger);

function VillaDimensions() {
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [openRegForm, setOpenRegForm] = useState(false);

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
    <div ref={containerRef} className="mx-auto md:max-w-7xl mt-10 relative">
      <div className="p-10  w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 overflow-hidden">
          <Image
            src={villaDetails}
            alt="villa details"
            className="w-full hover:scale-110 transition-transform duration-700 ease-out"
          />
        </div>
        <div ref={contentRef} className="w-full lg:max-w-1/2 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-cormorant mt-4">
            A Higher Way Of Living
          </h2>
          <p className="mt-4 text-md xl:text-lg leading-[2]">
            Set apart from the resort’s active zones, the villas enjoy a sense
            of calm & seclusion, while remaining deeply connected to the
            surrounding landscape. The positioning ensures that every home opens
            toward light, air, & uninterrupted valley horizons.
          </p>
          <div className="mt-8">
            <div className="w-full md:max-w-5xl border border-[#AD9273] rounded-lg overflow-hidden">
              <div className="w-full grid grid-cols-3">
                <div className="bg-[#AD9273]/40 border-r border-[#AD9273] border-b p-2 md:p-4 text-sm md:text-lg text-center">
                  Villa Type
                </div>
                <div className="bg-[#AD9273]/40 border-r border-b border-[#AD9273] p-2 md:p-4 text-sm md:text-lg text-center">
                  Area
                </div>
                <div className="bg-[#AD9273]/40 border-b border-[#AD9273] p-2 pr-2 text-sm md:text-lg md:p-4 text-center">
                  Positioning
                </div>

                <div className="border-r text-[#67777E] border-[#AD9273] bg-[#AD9273]/10 p-2 md:p-4 text-sm md:text-lg text-center">
                  Valley View Villa
                </div>
                <div className="border-r text-[#67777E] border-[#AD9273] bg-[#AD9273]/10 p-2 md:p-4 text-sm md:text-lg text-center">
                  2400 sq.ft
                </div>
                <div className="md:p-4 text-[#67777E] text-center bg-[#AD9273]/10 p-2 pr-2 text-sm md:text-lg">
                  Elevated & Private
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start">
            <button
              onClick={() => setOpenRegForm(true)}
              className="mt-10 bg-[#AD9273] rounded-lg p-3 text-white cursor-pointer
             transition-all duration-300 ease-out
             hover:bg-[#9C8266]
             hover:shadow-lg hover:shadow-[#AD927350]
             hover:-translate-y-[2px]
             active:translate-y-0"
            >
              View Brochure
            </button>
          </div>
        </div>
      </div>
      {openRegForm && (
        <div className="fixed top-20 z-300 left-1/2 -translate-x-1/2 px-8 py-4 bg-white rounded-lg border border-[#AD9273]">
          {/* <div className="text-center mt-6 mb-2 text-[#AD9273]">
            Please Fill This Form To Download Brochure
          </div> */}
          <div
            onClick={() => setOpenRegForm(false)}
            className="absolute top-0 right-0 mr-4 mt-2 px-4 py-2 mb-4 bg-[#AD9273] text-white text-md rounded-[50%] cursor-pointer"
          >
            x
          </div>
          <BrochureDownload onClose={() => setOpenRegForm(false)} />
        </div>
      )}
    </div>
  );
}

export default VillaDimensions;
