"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import liveAboveValleyImage from "../../../public/images/residences/liveAboveValleyImage.webp";
import higherWayOfLivingImage from "../../../public/images/residences/higherWayOfLivingImage.webp";

gsap.registerPlugin(ScrollTrigger);

import OrganicWhiteBackgroundImg1 from "../../../public/images/residences/OrganicWhiteBackgroundImg1.webp";

const LiveAboveValley = () => {
  const liveAboveValleyRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const privateResidencesRef = useRef<HTMLDivElement>(null);
  const imageEl = useRef<HTMLImageElement | null>(null);

  useGSAP(() => {
    if (!liveAboveValleyRef.current) return;
    const img = imageEl.current;
    if (!img) return;

    gsap.fromTo(
      liveAboveValleyRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: liveAboveValleyRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );

    gsap.set(img, {
      transformOrigin: "center center",
      scale: 1
    });
    const enter = () => {
      gsap.to(img, {
        scale: 1.15,
        duration: 0.6,
        ease: "power3.out"
      });
    };
    const leave = () => {
      gsap.to(img, {
        scale: 1,
        duration: 0.6,
        ease: "power3.out"
      });
    };
    img.addEventListener("mouseenter", enter);
    img.addEventListener("mouseleave", leave);

    if (!textRef.current) return;
    gsap.from(textRef.current?.children, {
      opacity: 0,
      y: 50,
      ease: "power3.out",
      duration: 1,
      stagger: 0.15,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%"
      }
    });
    if (!privateResidencesRef.current) return;
    // let ctx: gsap.Context | null = null;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: privateResidencesRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true
        }
      });
      tl.from(".residences-content > *", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12
      });
      tl.from(
        ".residences-image",
        {
          scale: 1.15,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
        },
        0.2
      );
    }, privateResidencesRef);
    return () => {
      ctx.revert();
      img.removeEventListener("mouseenter", enter);
      img.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div ref={liveAboveValleyRef}>
      <div>
        <div className="flex p-10 flex-col gap-2">
          <h2 className="text-center font-cormorant font-bold text-3xl md:text-4xl">
            Live Above the Valley
          </h2>
          <p className="text-center leading-relaxed para">
            A limited collection of private villas set along the ridge -
            designed for ownership, privacy, and uninterrupted views. Altaira
            Private Residences are not standalone homes. They are fully
            integrated into a luxury hilltop resort ecosystem - combining the
            calm of private living with the privileges of a destination retreat.
          </p>
        </div>
        <div className="relative">
          <Image
            src={liveAboveValleyImage}
            alt="live above valley Img"
            className="w-full h-[80vh] object-cover"
          />
          <div
            ref={textRef}
            className="absolute w-full lg:w-[50vw] text-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col text-white gap-5 p-5">
              <h2 className="text-3xl font-bold md:text-5xl font-cormorant">
                Private Villas, Thoughtfully Positioned
              </h2>
              <p className="leading-relaxed font-normal font-inter">
                Altaira’s Private Residences are set along the ridge, designed
                for those who value space, silence, and a deeper connection with
                the landscape.
              </p>
            </div>
          </div>
        </div>
        <div
          ref={privateResidencesRef}
          className="flex p-10 flex-col lg:flex-row gap-5"
        >
          <div className="flex flex-col gap-5 w-full lg:w-[50vw] residences-content">
            <p className="text-[#AD9273] para">PRIVATE RESIDENCES</p>
            <h2 className="font-bold text-2xl md:text-3xl font-cormorant">
              A Higher Way of Living
            </h2>
            <p className="para">
              Set apart from the resort’s active zones, the villas enjoy a sense
              of calm and seclusion, while remaining deeply connected to the
              surrounding landscape. The positioning ensures that every home
              opens toward light, air, and uninterrupted valley horizons.
            </p>
            <i className="font-bold text-[#AD9273]">
              Life here unfolds at a slower rhythm.
            </i>
            <div className="flex items-center gap-5 feature-item">
              <div className="w-1 h-12 rounded bg-[#AD9273]"></div>
              <div className="flex flex-col">
                <h2 className="font-cormorant text-xl md:text-2xl">
                  Valley-Facing Plunge Pool
                </h2>
                <p className="para">
                  Positioned for privacy, sky views, and quiet moments
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 feature-item">
              <div className="w-1 h-12 rounded bg-[#AD9273]"></div>
              <div className="flex flex-col">
                <h2 className="font-cormorant text-xl md:text-2xl">
                  3,600 sq. ft. Living Space
                </h2>
                <p className="para">
                  Open, flowing interiors designed around light and air
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 feature-item">
              <div className="w-1 h-12 rounded bg-[#AD9273]"></div>
              <div className="flex flex-col">
                <h2 className="font-cormorant text-xl md:text-2xl">
                  2 Dedicated Car Parks
                </h2>
                <p className="para">
                  Secure, reserved parking for each residence
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 feature-item">
              <div className="w-1 h-12 rounded bg-[#AD9273]"></div>
              <div className="flex flex-col">
                <h2 className="font-cormorant text-xl md:text-2xl">
                  Entrance Courtyard
                </h2>
                <p className="para">
                  A private arrival that brings nature into the home
                </p>
              </div>
            </div>
          </div>
          <div className="w-auto lg:w-[50vw] overflow-hidden">
            <Image
              ref={imageEl}
              src={higherWayOfLivingImage}
              alt="higher way of living"
              className="w-full h-auto md:h-[70vh] lg:w-[50vw] lg:h-[80vh] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveAboveValley;
