"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import teaEstateImg from "../../../public/images/resort/teaEstateImg.webp";
import cloudWalkwaysImage from "../../../public/images/resort/cloudWalkwaysImage.webp";
import infinityPoolImage from "../../../public/images/resort/infinityPoolmage.webp"
import rainForestImg from "../../../public/images/resort/rainForestImg.webp"
import spaImg from "../../../public/images/resort/spaImg.webp"

gsap.registerPlugin(ScrollTrigger);

export default function ShapedByLand() {
  const shapedByLandRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // SECTION INTRO
    gsap.from(shapedByLandRef.current, {
      opacity: 0,
      y: 80,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: shapedByLandRef.current,
        start: "top bottom",
        toggleActions: "play none none none"
      },
    });

    // EACH ROW APPEARS ONE BY ONE
    gsap.utils.toArray<HTMLElement>(".experience-row").forEach((row) => {
      gsap.from(row.children, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
        clearProps: "all",
        scrollTrigger: {
          trigger: row,
          start: "top bottom",
          toggleActions: "play none none none",
          once: true,
        },
      });
      gsap.from(row.querySelectorAll(".experience-content > *"), {
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: row,
          start: "top bottom",
        },
      });
    });

    // IMAGE PARALLAX
    gsap.to(".experience-image", {
      // y: 60,
      ease: "none",
      scrollTrigger: {
        trigger: shapedByLandRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.utils.toArray<HTMLImageElement>(".experience-image").forEach((img) => {
      const wrapper = img.parentElement as HTMLElement;
      if (!wrapper) return;

      gsap.set(wrapper, { overflow: "hidden" });

      gsap.set(img, {
        transformOrigin: "center center",
        willChange: "transform"
      })

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
    <div className="bg-[#F5F3F0] w-full">
      <div className="ml-10 mr-10 py-15">
        <div ref={shapedByLandRef} className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 items-center text-center">
            <p className="text-[#AD9273] text-lg xl:text-xl font-inter">EXPERIENCES</p>
            <h2 className="font-cormorant dark:text-[#67777E] text-3xl md:text-3xl lg:text-4xl xl:text-3xl">
              Shaped by Land, Elevation, and Time
            </h2>
            <p className="font-inter text-[#67777E] max-w-5xl text-lg xl:text-xl">
              Some experiences invite movement. Others invite stillness. At Altaira,
              every experience is guided by the terrain - unfolding naturally through
              forest paths, open skies, and quiet valleys.
            </p>
          </div>

          <div className="flex flex-col pt-15 gap-10">
            <div className="experience-row flex flex-col xl:flex-row gap-2 md:gap-10">
              <div className="overflow-hidden hidden xl:block xl:w-[50vw] h-[50vh]">
                <Image
                  src={teaEstateImg}
                  alt="Tea Estate"
                  className="experience-image hidden lg:block w-full h-full object-cover"
                />
              </div>
              <div className="experience-content flex flex-col xl:max-w-[720px] mx-auto gap-5">
                <p className="text-[#AD9273] font-inter text-lg xl:text-xl">PRIVATE, ELEVATED, IMMERSED IN THE VIEW</p>
                <h2 className="font-cormorant dark:text-[#67777E] text-3xl xl:text-3xl font-bold">Tea Estate Trails</h2>
                <p className="dark:text-[#67777E] xl:text-xl text-lg leading-relaxed">
                  Walk through living tea landscapes, where mist, elevation, and heritage meet under open skies.
                  Each step reveals the rhythm of the land, shaped by seasons, slopes, and generations of craft.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-7 rounded bg-[#AD9273]"></div>
                  <i className="text-lg dark:text-[#67777E] xl:text-xl">Where the land tells its story</i>
                </div>

                {/* Mobile image */}
                <Image
                  src={teaEstateImg}
                  alt="Tea Estate"
                  className="block xl:hidden w-full h-[50vh] object-cover"
                />
              </div>
            </div>

            {/* ROW 2 */}
            <div className="experience-row flex flex-col xl:flex-row gap-2 items-stretch md:gap-10">
              <div className="experience-content flex flex-col xl:max-w-[720px] mx-auto gap-5">
                <p className="text-[#AD9273] text-lg xl:text-2xl font-inter">PRIVATE, ELEVATED, IMMERSED IN THE VIEW</p>
                <h2 className="font-cormorant dark:text-[#67777E] text-3xl xl:text-3xl font-bold">Cloud Walkways</h2>
                <p className="text-lg dark:text-[#67777E] xl:text-xl leading-relaxed">
                  Suspended pathways that float above the valley - designed for unhurried walks,
                  sunrise moments, and night-lit reflections. Here, movement slows, and the horizon
                  becomes part of the journey.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-7 rounded bg-[#AD9273]"></div>
                  <i className="text-lg dark:text-[#67777E] xl:text-xl">Walk among the clouds</i>
                </div>
              </div>
              <div className="overflow-hidden mt-3 xl:w-[50vw] h-[50vh]">
                <Image
                  src={cloudWalkwaysImage}
                  alt="Cloud Walkways"
                  className="experience-image w-full h-full object-cover"
                />
              </div>
            </div>

            {/* ROW 3 */}
            <div className="experience-row flex flex-col xl:flex-row md:items-stretch gap-2 md:gap-10">
              <div className="overflow-hidden hidden xl:block h-[50vh]">
                <Image
                  src={infinityPoolImage}
                  alt="Infinity Pool"
                  className="experience-image md:hidden xl:block w-full h-full object-cover"
                />
              </div>
              <div className="experience-content flex flex-col gap-5 xl:max-w-[720px] mx-auto">
                <p className="text-[#AD9273] font-inter text-lg xl:text-xl">PRIVATE, ELEVATED, IMMERSED IN THE VIEW</p>
                <h2 className="font-cormorant dark:text-[#67777E] text-3xl xl:text-3xl font-bold">Infinity Pool</h2>
                <p className="text-lg dark:text-[#67777E] xl:text-xl leading-relaxed">
                  An edge-less pool where water meets sky, overlooking layered hills and endless horizon. Time dissolves as the landscape stretches beyond the pool's edge.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-7 rounded bg-[#AD9273]"></div>
                  <i className="text-lg dark:text-[#67777E] xl:text-xl">Where horizons disappear</i>
                </div>
                <Image
                  src={infinityPoolImage}
                  alt="Infinity Pool"
                  className="block xl:hidden w-full object-cover h-[50vh]"
                />
              </div>
            </div>

            <div className="experience-row flex flex-col xl:flex-row items-stretch gap-2 md:gap-10">
              <div className="experience-content flex flex-col gap-5 xl:max-w-[720px] mx-auto">
                <p className="text-[#AD9273] font-inter text-lg xl:text-xl">PRIVATE, ELEVATED, IMMERSED IN THE VIEW</p>
                <h2 className="font-cormorant dark:text-[#67777E] text-3xl xl:text-3xl font-bold">Rainforest Spa & Onsen</h2>
                <p className="text-lg dark:text-[#67777E] xl:text-xl leading-relaxed">
                  A forest sanctuary with a temperature-controlled onsen for deep relaxation and renewal.
                  Guided by nature and ritual, each moment restores balance to body and mind.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-7 rounded bg-[#AD9273]"></div>
                  <i className="text-lg dark:text-[#67777E] xl:text-xl">Wellness in its purest form</i>
                </div>
              </div>
              <div className="overflow-hidden mt-3 xl:w-[50vw] h-[50vh] lg:h-[50vh]">
                <Image
                  src={spaImg}
                  alt="Rainforest Spa"
                  className="w-full experience-image h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}