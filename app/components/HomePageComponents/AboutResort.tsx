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
    <div ref={containerRef} className="mt-10 sm:ml-5 sm:mr-5 ">
      <div className="ml-5 mr-5 lg:ml-0 lg:mr-0">
        <h2 className=" md:max-w-5xl mx-auto text-center text-3xl lg:text-4xl xl:text-4xl font-cormorant">
          A Hilltop Destination Close to Nature
        </h2>
        <div className="max-w-5xl mx-auto text-center text-lg xl:text-lg  mt-5 ">
          Altaira unfolds as a complete hilltop retreat. A 5-acre luxury resort
          with ridge-facing suites, wellness spaces, and a limited collection of
          private villas, all connected by nature trails, open skies, and
          moments of adventure and restoration.
        </div>
        <div
          ref={subContainerRef}
          style={{ backgroundImage: `url(${resortImage.src})` }}
          className="relative max-w-7xl lg:max-h-[700px] h-auto py-8  md:py-12 lg:py-16 mx-auto mt-10 flex items-center justify-center bg-center bg-cover"
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative ">
            <h2
              ref={headerText}
              className="text-3xl px-2 mx-auto max-w-5xl text-white text-center lg:text-4xl  pt-15 font-cormorant"
            >
              Surrounded By What Matters
            </h2>
            <h3
              ref={subHeader}
              className="text-white mx-auto max-w-5xl px-2 md:text-content text-lg text-center mt-2"
            >
              Altaira unfolds as a series of connected realms - arrival,
              retreat, exploration, and elevation.
            </h3>

            <div className="grid grid-cols-1 pt-20 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 ">
              <div
                ref={resortAmenity1Ref}
                className="w-full  bg-black/60 rounded-lg pl-2 pr-2"
              >
                <div className="flex items-center justify-center pt-8">
                  <div className="bg-[#4C3D2D] p-4 rounded-[50%]">
                    <Image src={Icon1} alt="resort icon" />
                  </div>
                </div>
                <div className="text-center text-lg sm:text-2xl xl:text-2xl font-semibold text-white font-cormorant mt-2">
                  Integrated Destination
                </div>
                <div className="text-center text-sm md:text-md text-white  font-inter pb-6">
                  Resort living, private villas, and curated nature.
                </div>
              </div>

              <div
                ref={resortAmenity2Ref}
                className="w-full  bg-black/60 rounded-lg pl-2 pr-2"
              >
                <div className="flex items-center justify-center pt-8">
                  <div className="bg-[#4C3D2D] p-4 rounded-[50%]">
                    <Image src={Icon2} alt="resort icon" />
                  </div>
                </div>
                <div className="text-center font-semibold text-lg sm:text-2xl text-white font-cormorant mt-2">
                  Exclusive Villa
                </div>
                <div className="text-center text-white text-sm sm:text-md font-inter pb-6">
                  Private luxury villas crafted for elevated hilltop living.
                </div>
              </div>

              <div
                ref={resortAmenity3Ref}
                className="w-full bg-black/60 rounded-lg pl-2 pr-2"
              >
                <div className="flex items-center justify-center pt-8">
                  <div className="bg-[#4C3D2D] p-4 rounded-[50%]">
                    <Image src={Icon3} alt="resort icon" />
                  </div>
                </div>
                <div className="text-center font-semibold sm:text-2xl text-white text-lg font-cormorant mt-2">
                  World Class Dining
                </div>
                <div className="text-center text-white text-sm  md:text-md font-inter pb-6">
                  Curated dining experiences rooted in fresh, seasonal
                  ingredients.
                </div>
              </div>

              <div
                ref={resortAmenity4Ref}
                className="w-full  bg-black/60 rounded-lg pl-2 pr-2"
              >
                <div className="flex items-center justify-center pt-8">
                  <div className="bg-[#4C3D2D] p-4 rounded-[50%]">
                    <Image src={Icon4} alt="resort icon" />
                  </div>
                </div>
                <div className="text-center font-semibold text-white sm:text-2xl text-lg font-cormorant mt-2">
                  Curated Experiences
                </div>
                <div className="text-center text-white text-sm  md:text-md font-inter pb-6">
                  A collection of nature, wellness, and adventure-led
                  experiences.
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
