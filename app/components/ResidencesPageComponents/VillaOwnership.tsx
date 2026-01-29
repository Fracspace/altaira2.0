"use client";

import React, { useRef } from "react";
import Image from "next/image";
import villaOwnershipImg from "../../../public/images/residences/villaOwnership.webp";
import heroImg from "../../../public/images/residences/residenceHeroImg.webp";
import { MoveRight } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function VillaOwnership() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const bottomContainerRef = useRef<HTMLDivElement>(null);
  const bottomContentRef = useRef<HTMLDivElement>(null);

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
          start: "top 40%",
          end: "bottom top",
          toggleActions: "play none none none"
        }
      }
    );

    gsap.fromTo(
      bottomContentRef.current,
      { opacity: 0, y: 120 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger:bottomContentRef.current,
          start: "top 30%",
          end: "bottom top",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="mt-14">
      <div ref={contentRef}>
        <h2 className="text-center text-xl text-[#AD9273]">PURCHASE A VILLA</h2>
        <h3 className="text-center mt-2 text-3xl xl:text-5xl font-cormorant">
          Villa Ownership at Altaira
        </h3>
        <p className="text-center text-md xl:text-xl mt-4 ml-[2vw] mr-[2vw] md:ml-[10vw] md:mr-[10vw]">
          A rare opportunity to own a private villa within a fully integrated
          luxury hilltop resort. Altaira Private Residences combine the
          independence of ownership with lifetime access to resort experiences,
          wellness, dining, and landscapes - all set high above the valley.
        </p>
      </div>
      <div
        style={{ backgroundImage: `url(${villaOwnershipImg.src})` }}
        className="relative w-[95vw] h-[50vh] md:h-[90vh] ml-[2vw] mr-[2vw] bg-cover bg-center mt-12 "
      >
        <div className="absolute w-full h-full bg-black/20"></div>
        <div className="absolute w-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
          <h2 className="text-center text-white text-3xl md:text-6xl">
            Begin Your Ascent
          </h2>
          <div className="flex items-center justify-center">
            <button className="flex cursor-pointer items-center justify-between text-center mt-8 bg-white pl-2 pr-2 pt-1 pb-1 rounded-lg">
              Register Your Interest
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={bottomContainerRef}
        className="mt-8 mb-10 flex items-center justify-center"
      >
        <h2
          ref={bottomContentRef}
          className="text-2xl font-cormorant xl:text-5xl text-[#67777E] w-[90vw] md:w-[60vw] text-center leading-[1.3]"
        >
          More than a villa. A way of <br></br>
          <span className="text-gray-400">living above the valley.</span>
        </h2>
      </div>
    </div>
  );
}

export default VillaOwnership;
