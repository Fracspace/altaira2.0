"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import teaEstate from "../../../public/images/resort/teaEstate.webp";
import cloudWalkways from "../../../public/images/resort/cloudWalkways.webp";
import infinityPool from "../../../public/images/resort/infinityPool.webp";
import rainForestSpa from "../../../public/images/resort/rainForestSpa.webp";

gsap.registerPlugin(ScrollTrigger);

export default function ShapedByLand() {
  const shapedByLandRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // SECTION INTRO
    gsap.from(shapedByLandRef.current, {
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: shapedByLandRef.current,
        start: "top 85%",
      },
    });

    // EACH ROW APPEARS ONE BY ONE
    gsap.utils.toArray<HTMLElement>(".experience-row").forEach((row) => {
      gsap.from(row, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: row,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // IMAGE PARALLAX
    gsap.to(".experience-image", {
      y: 60,
      ease: "none",
      scrollTrigger: {
        trigger: shapedByLandRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // HOVER ZOOM (INSIDE FRAME)
    gsap.utils.toArray<HTMLImageElement>(".experience-image").forEach((img) => {
      const wrapper = img.parentElement as HTMLElement;
      if (!wrapper) return;

      gsap.set(wrapper, { overflow: "hidden" });

      const enter = () =>
        gsap.to(img, {
          scale: 1.1,
          duration: 0.6,
          ease: "power3.out",
        });

      const leave = () =>
        gsap.to(img, {
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
        });

      wrapper.addEventListener("mouseenter", enter);
      wrapper.addEventListener("mouseleave", leave);
    });
  }, []);

  return (
    <div ref={shapedByLandRef} className="bg-[#F5F3F0]">
      {/* HEADER */}
      <div className="p-10">
        <div className="flex flex-col gap-5 text-center">
          <p className="text-[#AD9273] font-sans">EXPERIENCES</p>
          <h2 className="font-serif text-3xl font-bold">
            Shaped by Land, Elevation, and Time
          </h2>
          <p className="font-sans text-lg text-[#67777E] mx-auto">
            Some experiences invite movement. Others invite stillness. At Altaira,
            every experience is guided by the terrain - unfolding naturally through
            forest paths, open skies, and quiet valleys.
          </p>
        </div>
      </div>

      {/* ROW 1 */}
      <div className="experience-row flex flex-col p-10 md:flex-row gap-10">
        <div className="overflow-hidden rounded-md md:w-[50vw]">
          <Image
            src={teaEstate}
            alt="Tea Estate"
            className="experience-image hidden md:block w-full object-cover h-[50vh] md:h-[50vh]"
          />
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-[#AD9273] font-sans">PRIVATE, ELEVATED, IMMERSED IN THE VIEW</p>
          <h2 className="font-serif text-2xl font-bold">Tea Estate Trails</h2>
          <p className="para leading-relaxed">
           Walk through living tea landscapes, where mist, elevation, and heritage meet under open skies. Each step reveals the rhythm of the land, shaped by seasons, slopes, and generations of craft.
          </p>
          <em className="para">Where the land tells its story</em>
            <Image
            src={teaEstate}
            alt="Tea Estate"
            className="experience-image block md:hidden w-full object-cover h-[50vh] md:h-[50vh]"
          />
        </div>
      </div>

      {/* ROW 2 */}
      <div className="experience-row flex flex-col p-10 md:flex-row gap-10">
        <div className="flex flex-col gap-5">
          <p className="text-[#AD9273] font-sans">PRIVATE, ELEVATED, IMMERSED IN THE VIEW</p>
          <h2 className="font-serif text-2xl font-bold">Cloud Walkways</h2>
          <p className="para leading-relaxed">
           Suspended pathways that float above the valley - designed for unhurried walks, sunrise moments, and night-lit reflections. Here, movement slows, and the horizon becomes part of the journey.
          </p>
          <em className="para">Walk among the clouds</em>
           <Image
            src={cloudWalkways}
            alt="Cloud Walkways"
            className="experience-image block md:hidden w-full object-cover h-[50vh] md:h-[50vh]"
          />
        </div>
        <div className="overflow-hidden rounded-md md:w-[50vw]">
          <Image
            src={cloudWalkways}
            alt="Cloud Walkways"
            className="experience-image hidden md:block w-full object-cover h-[50vh] md:h-[50vh]"
          />
        </div>
      </div>

      {/* ROW 3 */}
      <div className="experience-row flex flex-col p-10 md:flex-row gap-2 md:gap-10">
        <div className="overflow-hidden rounded-md md:w-[50vw]">
          <Image
            src={infinityPool}
            alt="Infinity Pool"
            className="experience-image hidden md:block w-full object-cover h-auto md:h-[50vh]"
          />
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-[#AD9273] font-sans">PRIVATE, ELEVATED, IMMERSED IN THE VIEW</p>
          <h2 className="font-serif text-2xl font-bold">Infinity Pool</h2>
          <p className="para leading-relaxed">
           An edge-less pool where water meets sky, overlooking layered hills and endless horizon. Time dissolves as the landscape stretches beyond the pool's edge.
          </p>
          <em className="para">Where horizons disappear</em>
          <Image
            src={infinityPool}
            alt="Infinity Pool"
            className="experience-image block md:hidden w-full object-cover h-[50vh] md:h-[50vh]"
          />
        </div>
      </div>

      <div className="experience-row flex flex-col p-10 md:flex-row gap-2 md:gap-10">
        <div className="flex flex-col gap-5">
          <p className="text-[#AD9273] font-sans">PRIVATE, ELEVATED, IMMERSED IN THE VIEW</p>
          <h2 className="font-serif text-2xl font-bold">Rainforest Spa & Onsen</h2>
          <p className="para leading-relaxed">A forest sanctuary with a temperature-controlled onsen for deep relaxation and renewal. Guided by nature and ritual, each moment restores balance to body and mind. </p>
          <em className="para">Wellness in its purest form</em>
        </div>
        <div className="overflow-hidden rounded-md md:w-[50vw]">
          <Image
            src={rainForestSpa}
            alt="Rainforest Spa"
            className="experience-image w-full object-cover h-[50vh] md:h-[50vh]"
          />
        </div>
      </div>
    </div>
  );
}