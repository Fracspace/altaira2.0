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

import { TrackEvent } from "../GlobalComponents/TrackEvent";

import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);
function VillaOwnership() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const bottomContainerRef = useRef<HTMLDivElement>(null);
  const bottomContentRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

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
          trigger: bottomContentRef.current,
          start: "top 30%",
          end: "bottom top",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  const RegisterInterest = () => {
    TrackEvent(
      "Register Interest",
      "CTA",
      "Residences Page Register to buy villa"
    );
    router.push("/contact?source=buyvilla");
  };

  return (
    <div ref={containerRef} className="mt-14 w-full">
      <div ref={contentRef} className="ml-5 mr-5 md:mx-auto max-w-7xl">
        <h2 className="text-center text-xl text-[#AD9273]">PURCHASE A VILLA</h2>
        <h3 className="text-center mt-2 text-3xl md:text-4xl  font-cormorant">
          Villa Ownership at Altaira
        </h3>
        <p className="text-center px-4 mx-auto max-w-5xl  text-md lg:text-lg mt-4">
          A rare opportunity to own a private villa within a fully integrated
          luxury hilltop resort. Altaira Private Residences combine the
          independence of ownership with lifetime access to resort experiences,
          wellness, dining, and landscapes - all set high above the valley.
        </p>
      </div>
      <div
        style={{ backgroundImage: `url(${villaOwnershipImg.src})` }}
        className="relative min-h-[300px] lg:min-h-[600px] w-full  bg-cover bg-center mt-12 "
      >
        <div className="absolute w-full h-full bg-black/20"></div>
        <div className="absolute w-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
          <h2 className="text-center text-white text-3xl md:text-4xl lg:text-5xl">
            Begin Your Ascent
          </h2>
          <div className="flex items-center justify-center">
            <button
              onClick={RegisterInterest}
              className="flex cursor-pointer items-center justify-between text-center mt-8 bg-white px-4 py-2  rounded-lg dark:text-black  transition-all duration-300 ease-out
              hover:text-[#AD9273]
             hover:shadow-md hover:-translate-y-[1px]"
            >
              Register Your Interest
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={bottomContainerRef}
        className="mt-8 mb-10 flex mx-auto max-w-5xl items-center justify-center"
      >
        <h2
          ref={bottomContentRef}
          className="text-2xl font-cormorant xl:text-4xl text-[#67777E] dark:text-white  text-center leading-[1.3]"
        >
          More than a villa. A way of <br></br>
          <span className="text-gray-400 dark:text-white">
            living above the valley.
          </span>
        </h2>
      </div>
    </div>
  );
}

export default VillaOwnership;
