"use client";
import ridgeSuites1 from "../../../public/images/resort/ridgeSuites1.webp";
import valleyFacing from "../../../public/images/resort/valleyFacing.webp";
import plungePool from "../../../public/images/resort/plungePool.webp";
import fullyServiced from "../../../public/images/resort/fullyServiced.webp";
import resortAccess from "../../../public/images/resort/resortAccess.webp";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Image from "next/image";

const AboveNoise = () => {
  const aboveNoiseSectionRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  useGSAP(() => {
    // fade in section
    gsap.fromTo(
      aboveNoiseSectionRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboveNoiseSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );

    gsap.to(imageWrapperRef.current, {
      y: 60,
      ease: "none",
      scrollTrigger: {
        trigger: aboveNoiseSectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    gsap.set(imageWrapperRef.current, { scale: 1 });

    const onEnter = () => {
      gsap.to(imageRef.current, {
        scale: 1.1,
        duration: 0.6,
        ease: "power3.out"
      });
    };

    const onLeave = () => {
      gsap.to(imageRef.current, {
        scale: 1,
        duration: 0.6,
        ease: "power3.out"
      });
    };

    // image parallax
    gsap.to(".parallax-image", {
      y: 60,
      ease: "none",
      scrollTrigger: {
        trigger: aboveNoiseSectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    // text parallax
    gsap.to(".parallax-text", {
      y: 60,
      ease: "none",
      scrollTrigger: {
        trigger: aboveNoiseSectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    imageWrapperRef.current?.addEventListener("mouseenter", onEnter);
    imageWrapperRef.current?.addEventListener("mouseleave", onLeave);

    return () => {
      imageWrapperRef.current?.removeEventListener("mouseenter", onEnter);
      imageWrapperRef.current?.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={aboveNoiseSectionRef}>
      <div className="ml-10 mr-10 py-15">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col max-w-5xl mx-auto gap-5 text-center">
            <h2 className="text-3xl font-cormorant md:text-4xl xl:text-5xl">
              Above the Noise, Beyond the Ordinary
            </h2>
            <p className="text-lg xl:text-xl">
              Designed as a slow-living resort with immersive landscapes,
              Altaira blends luxury stays, curated wellness, and high-adrenaline
              adventure - all shaped by elevation, forest, and sky.
            </p>
          </div>
          <div className="flex flex-col pt-15 xl:flex-row gap-10">
            <div className="overflow-hidden xl:w-1/2">
              <Image
                src={ridgeSuites1}
                alt="ridge suites"
                className="w-full experience-image object-cover min-h-[400px] md:min-h-[500px] lg:h-full"
              />
            </div>
            <div className="flex flex-col gap-5 xl:w-1/2">
              <p className="text-[#AD9273] font-inter text-lg xl:text-xl">
                PRIVATE, ELEVATED, IMMERSED IN THE VIEW
              </p>
              <h2 className="font-cormorant text-3xl lg:text-4xl xl:text-3xl">
                Ridge Suites
              </h2>
              <p className="text-lg xl:text-xl leading-relaxed">
                The Ridge Suites are positioned along the natural contours of
                the hill, offering uninterrupted valley views and complete
                privacy.
              </p>
              <p className="text-lg xl:text-xl leading-relaxed">
                Designed for slow mornings and quiet evenings, each suite opens
                to forest light, drifting mist, and the changing moods of the
                landscape. Interiors are understated, refined, and fully
                serviced - allowing nature to remain the hero.
              </p>
              <p className="text-3xl font-cormorant lg:text-4xl xl:text-3xl">
                Highlights
              </p>
              <div className="rounded-md w-full flex flex-col justify-center md:gap-10 md:flex-row shadow-md">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex flex-col items-center gap-2 p-5">
                    <Image
                      src={valleyFacing}
                      alt="Valley Facing"
                      className="w-[20vw] h-[15vh] md:w-[10vw] xl:w-[3vw] xl:h-[10vh] object-contain rounded-xl"
                    />
                    <p className="text-xl md:text-base text-[#67777E] dark:text-white">
                      Valley-facing
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-5">
                    <Image
                      src={plungePool}
                      alt="Plunge Pool"
                      className="w-[20vw] h-[15vh] md:w-[10vw] xl:w-[3vw] xl:h-[10vh] object-contain rounded-xl"
                    />
                    <p className="text-xl md:text-base text-[#67777E] dark:text-white">
                      {" "}
                      Plunge Pool
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-5">
                    <Image
                      src={fullyServiced}
                      alt="Fully Serviced"
                      className="w-[20vw] h-[15vh] md:w-[10vw] xl:w-[3vw] xl:h-[10vh] object-contain rounded-xl"
                    />
                    <p className="text-xl md:text-base text-[#67777E] dark:text-white">
                      Fully Serviced
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-5">
                    <Image
                      src={resortAccess}
                      alt="Resort Access"
                      className="w-[20vw] h-[15vh] md:w-[10vw] xl:w-[3vw] xl:h-[10vh] object-contain rounded-xl"
                    />
                    <p className="text-xl md:text-base text-[#67777E] dark:text-white">
                      Resort Access
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboveNoise;
