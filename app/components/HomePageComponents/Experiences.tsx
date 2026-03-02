import React, { useRef } from "react";

import bunjeeImg from "../../../public/images/homepage/bunjee2.webp";
import cloudwalkwayImg from "../../../public/images/homepage/cloudwalkway2.webp";
import infinityPoolImg from "../../../public/images/homepage/infinityPool2.webp";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Experiences() {
  // const containerRef = useRef<HTMLDivElement>(null);
  // const adventureZoneRef = useRef<HTMLDivElement>(null);
  // const cloudwalkwayRef = useRef<HTMLDivElement>(null);
  // const infinityPoolRef = useRef<HTMLDivElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const topRightRef = useRef<HTMLDivElement>(null);
  const bottomRightRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      leftRef.current,
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%"
        }
      }
    );

    gsap.fromTo(
      topRightRef.current,
      { opacity: 0, x: 120 },
      {
        opacity: 1,
        x: 0,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%"
        }
      }
    );

    gsap.fromTo(
      bottomRightRef.current,
      { opacity: 0, x: 160 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%"
        }
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden relative ml-5 mr-5">
      <div>
        <h2 className="font-cormorant mx-auto lg:max-w-5xl text-3xl lg:text-4xl text-center mt-12">
          A World of Experiences, Shaped by the Land
        </h2>
        <h3 className="font-inter mx-auto max-w-5xl  md:text-lg  mt-6 mb-4 text-center">
          From calm moments above the valley to adrenaline within the forest,
          experiences at Altaira unfold at your pace. Some are meant to quicken
          the pulse, others to slow time - all shaped by the land that surrounds
          you. Each moment emerges naturally, guided by elevation, forest paths,
          and open skies.
        </h3>
      </div>
      {/* GRID */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto mt-6 gap-4">
        {/* LEFT IMAGE */}
        <div
          ref={leftRef}
          className="relative w-full md:w-1/2 min-h-[400px] md:min-h-[600px] overflow-hidden group"
        >
          <div
            style={{ backgroundImage: `url(${cloudwalkwayImg.src})` }}
            className="absolute inset-0 bg-cover bg-center
                       transition-transform duration-700 ease-out
                       group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="absolute bottom-0 left-3 bottom-3 z-20">
            <h3 className="text-white font-inter">
              SUSPENDED PATHS ABOVE THE VALLEY
            </h3>
            <h2 className="text-white font-cormorant text-3xl font-bold">
              Cloud Walkway
            </h2>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col w-full md:w-1/2 gap-4">
          {/* TOP RIGHT */}
          <div
            ref={topRightRef}
            className="relative min-h-[300px] overflow-hidden group"
          >
            <div
              style={{ backgroundImage: `url(${bunjeeImg.src})` }}
              className="absolute inset-0 bg-cover bg-center
                         transition-transform duration-700 ease-out
                         group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 z-10" />
            <div className="absolute bottom-0 left-3 bottom-3 z-20">
              <h3 className="text-white font-inter">
                THRILL THE HEIGHTS. EMBRACE THE CALM
              </h3>
              <h2 className="text-white font-cormorant text-3xl font-bold">
                Adventure Zone
              </h2>
            </div>
          </div>

          {/* BOTTOM RIGHT */}
          <div
            ref={bottomRightRef}
            className="relative min-h-[300px] overflow-hidden group"
          >
            <div
              style={{ backgroundImage: `url(${infinityPoolImg.src})` }}
              className="absolute inset-0 bg-cover bg-center
                         transition-transform duration-700 ease-out
                         group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 z-10" />
            <div className="absolute bottom-0 left-3 bottom-3 z-20">
              <h3 className="text-white font-inter">WATER MEETS SKY</h3>
              <h2 className="text-white font-cormorant text-3xl font-bold">
                Infinity Pool
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
