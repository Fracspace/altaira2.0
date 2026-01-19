"use client"

import resortImg from "../../../public/images/resort/resortImg.webp"

import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


import Image from "next/image"

const Resort = () => {
    const heroSectionRef = useRef<HTMLDivElement>(null);

    useGSAP(
    () => {
      gsap.fromTo(
        heroSectionRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.98,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
        }
      );
    },
    { scope: heroSectionRef }
  );
    return (
        <div className="min-h-screen w-full">
            <div className="relative">
                <Image src={resortImg} alt="resort img" className="object-cover min-h-screen" />
                <div ref={heroSectionRef} className="absolute flex flex-col gap-1 w-full md:w-auto p-10 md:p-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                    <h2 className="font-bold font-serif md:text-4xl text-2xl text-white">A Resort Carved Into the Hills</h2>
                    <em className="font-semibold font-sans text-xl md:text-xl text-white md:pl-10 md:pr-10">A Hilltop World, Thoughtfully Composed</em>
                </div>
            </div>
        </div>
    )
}

export default Resort