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
      <div className="absolute z-10 inset-0 bg-black/50"></div>
      <div className="absolute z-20 w-full flex items-center justify-center text-center px-5 inset-0">
        <div ref={heroSectionRef} className="text-white flex flex-col items-center justify-center max-w-4xl">
          <h2 className="font-cormorant md:text-5xl lg:text-6xl text-3xl">A Resort Carved Into the Hills</h2>
          <i className="block mt-3 font-inter text-lg md:text-2xl">A Hilltop World, Thoughtfully Composed</i>
        </div>
      </div>
    </div>
  )
}

export default Resort