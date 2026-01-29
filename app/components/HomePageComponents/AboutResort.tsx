"use client";

import React, { useRef } from "react";
import Image from "next/image";
import resortImage from "../../../public/images/homepage/resort4.webp";
import Icon1 from "../../../public/images/homepage/icon1.png";
import Icon2 from "../../../public/images/homepage/icon2.png";
import Icon3 from "../../../public/images/homepage/icon3.png";
import Icon4 from "../../../public/images/homepage/icon4.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function AboutResort() {
  const headerText = useRef<HTMLHeadingElement>(null);
  const subHeader = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const subContainerRef = useRef<HTMLDivElement>(null);

  const resortAmenity1Ref = useRef<HTMLDivElement>(null);
  const resortAmenity2Ref = useRef<HTMLDivElement>(null);
  const resortAmenity3Ref = useRef<HTMLDivElement>(null);
  const resortAmenity4Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      headerText.current,
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom top",
          toggleActions: "play none none none"
        }
      }
    );

    gsap.fromTo(
      subHeader.current,
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom top",
          toggleActions: "play none none none"
        }
      }
    );

    gsap.fromTo(
      resortAmenity1Ref.current,
      {
        opacity: 0,
        x: -30
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: subContainerRef.current,
          start: "top 30%",
          end: "bottom top",
          toggleActions: "play none none none"
        }
      }
    );

    gsap.fromTo(
      resortAmenity2Ref.current,
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1.3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: subContainerRef.current,
          start: "top 30%",
          end: "bottom top",
          toggleActions: "play none none none"
        }
      }
    );

    gsap.fromTo(
      resortAmenity3Ref.current,
      { opacity: 0, x: -80 },
      {
        opacity: 1,
        x: 0,
        duration: 1.3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: subContainerRef.current,
          start: "top 30%",
          end: "bottom top",
          toggleActions: "play none none none"
        }
      }
    );

    gsap.fromTo(
      resortAmenity4Ref.current,
      { opacity: 0, x: -80 },
      {
        opacity: 1,
        x: 0,
        duration: 1.4,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: subContainerRef.current,
          start: "top 30%",
          end: "bottom top",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="mt-10">
      <div>
        <h2 className="text-center text-3xl md:text-5xl font-cormorant">
          A Hilltop Destination Close to Nature
        </h2>
        <div className="ml-[2vw] mr-[2vw] text-center text-content md:ml-[10vw] md:mr-[10vw] md:w-[80vw] mt-5 ">
          Altaira unfolds as a complete hilltop retreat. A 5-acre luxury resort
          with ridge-facing suites, wellness spaces, and a limited collection of
          private villas, all connected by nature trails, open skies, and
          moments of adventure and restoration.
        </div>
        <div
          ref={subContainerRef}
          style={{ backgroundImage: `url(${resortImage.src})` }}
          className="relative h-auto pb-5 md:h-[100vh] w-[100%] mt-10 bg-center bg-cover"
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative ">
            <h2
              ref={headerText}
              className="text-3xl text-white text-center md:text-5xl pt-15 font-cormorant"
            >
              Surrounded By What Matters
            </h2>
            <h3
              ref={subHeader}
              className="text-white md:text-content xl:text-xl text-center mt-2"
            >
              Altaira unfolds as a series of connected realms - arrival,
              retreat, exploration, and elevation.
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ml-15 mr-15 mt-[15%]">
              <div
                ref={resortAmenity1Ref}
                className="w-full md:w-[40vw] lg:w-[16vw] bg-black/60 rounded-lg pl-2 pr-2"
              >
                <div className="flex items-center justify-center pt-8">
                  <div className="bg-[#4C3D2D] p-4 rounded-[50%]">
                    <Image src={Icon1} alt="resort icon" />
                  </div>
                </div>
                <div className="text-center text-lg xl:text-2xl font-semibold text-white font-cormorant mt-2">
                  Resort 26 Acres
                </div>
                <div className="text-center text-sm xl:text-md text-white 2xl:text-lg font-inter pb-6">
                  Pristine hilltop sanctuary surrounded by untouched nature
                </div>
              </div>

              <div
                ref={resortAmenity2Ref}
                className="w-full md:w-[40vw] lg:w-[16vw] bg-black/60 rounded-lg pl-2 pr-2"
              >
                <div className="flex items-center justify-center pt-8">
                  <div className="bg-[#4C3D2D] p-4 rounded-[50%]">
                    <Image src={Icon2} alt="resort icon" />
                  </div>
                </div>
                <div className="text-center font-semibold text-lg xl:text-2xl text-white font-cormorant mt-2">
                  Exclusive Villa
                </div>
                <div className="text-center text-white text-sm xl:text-md 2xl:text-lg font-inter pb-6">
                  Pristine hilltop sanctuary surrounded by untouched nature
                </div>
              </div>

              <div
                ref={resortAmenity3Ref}
                className="w-full md:w-[40vw] lg:w-[16vw] bg-black/60 rounded-lg pl-2 pr-2"
              >
                <div className="flex items-center justify-center pt-8">
                  <div className="bg-[#4C3D2D] p-4 rounded-[50%]">
                    <Image src={Icon3} alt="resort icon" />
                  </div>
                </div>
                <div className="text-center font-semibold xl:text-2xl text-white text-lg font-cormorant mt-2">
                  World Class Dining
                </div>
                <div className="text-center text-white xl:text-md 2xl:text-lg text-sm font-inter pb-6">
                  Pristine hilltop sanctuary surrounded by untouched nature
                </div>
              </div>

              <div
                ref={resortAmenity4Ref}
                className="w-full md:w-[40vw] lg:w-[16vw] bg-black/60 rounded-lg pl-2 pr-2"
              >
                <div className="flex items-center justify-center pt-8">
                  <div className="bg-[#4C3D2D] p-4 rounded-[50%]">
                    <Image src={Icon4} alt="resort icon" />
                  </div>
                </div>
                <div className="text-center font-semibold text-white xl:text-2xl text-lg font-cormorant mt-2">
                  Curated Experiences
                </div>
                <div className="text-center text-white text-sm xl:text-md 2xl:text-lg font-inter pb-6">
                  Pristine hilltop sanctuary surrounded by untouched nature
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutResort;
