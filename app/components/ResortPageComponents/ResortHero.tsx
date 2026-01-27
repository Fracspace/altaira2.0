"use client"

import resortHeroImage from "../../../public/images/resort/resortHeroImage.webp"

import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


import Image from "next/image"

const Resort = () => {
  const heroSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!heroSectionRef.current) return;
    const items = gsap.utils.toArray<HTMLElement>(heroSectionRef.current.children)
    gsap.from(
      items, {
      opacity: 0,
      y: 30,
      filter: "blur(8px)",
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, { scope: heroSectionRef });

  return (
    <div className="min-h-screen w-full relative">
      <Image src={resortHeroImage} alt="resort img" fill priority className="object-cover" />
      <div className="absolute w-full flex items-center justify-center text-center px-5 inset-0">
        <div ref={heroSectionRef} className="text-white flex flex-col items-center justify-center max-w-4xl">
          <h2 className="font-bold font-cormorant md:text-6xl text-2xl">A Resort Carved Into the Hills</h2>
          <i className="block mt-3 font-normal font-inter text-xl md:text-2xl">A Hilltop World, Thoughtfully Composed</i>
        </div>
      </div>
    </div>
  )
}

export default Resort