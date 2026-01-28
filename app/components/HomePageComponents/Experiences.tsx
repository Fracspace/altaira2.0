import React, { useRef } from "react";

import bunjeeImg from "../../../public/images/homepage/bunjee2.webp";
import cloudwalkwayImg from "../../../public/images/homepage/cloudwalkway2.webp";
import infinityPoolImg from "../../../public/images/homepage/infinityPool2.webp";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Experiences() {
  const containerRef = useRef<HTMLDivElement>(null);
  const adventureZoneRef = useRef<HTMLDivElement>(null);
  const cloudwalkwayRef = useRef<HTMLDivElement>(null);
  const infinityPoolRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      adventureZoneRef.current,
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1.3,
        ease: "power3.in",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom top",
          toggleActions: "play none none none"
        }
      }
    );

    gsap.fromTo(
      cloudwalkwayRef.current,
      { opacity: 0, x: 120 },
      {
        opacity: 1,
        x: 0,
        duration: 1.4,
        ease: "power3.in",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom top",
          toggleActions: "play none none none"
        }
      }
    );

    gsap.fromTo(
      infinityPoolRef.current,
      { opacity: 0, x: 160 },
      {
        opacity: 1,
        x: 0,
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
    
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden relative">
      <div>
        <h2 className="font-cormorant text-5xl text-center mt-12">
          A World of Experiences, Shaped by the Land
        </h2>
        <h3 className="font-inter w-[80vw] mt-6 mb-4 text-center ml-[9vw] mr-[9vw]">
          From calm moments above the valley to adrenaline within the forest,
          experiences at Altaira unfold at your pace. Some are meant to quicken
          the pulse, others to slow time - all shaped by the land that surrounds
          you. Each moment emerges naturally, guided by elevation, forest paths,
          and open skies.
        </h3>
      </div>
      <div className="flex overflow-hidden relative group ml-[5vw] mr-[5vw] mr-15 mt-6">
        <div
          ref={adventureZoneRef}
          style={{ backgroundImage: `url(${bunjeeImg.src})` }}
          className="relative w-[45vw] h-[82vh] bg-center bg-cover"
        >
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute bottom-0 ml-3 mb-2 z-10">
            <h3 className="text-white font-inter">
              THRILL THE HEIGHTS.EMBRACE THE CALM
            </h3>
            <h2 className="text-white font-cormorant text-3xl">
              Adventure Zone
            </h2>
          </div>
        </div>
        <div className="ml-4">
          <div
            ref={cloudwalkwayRef}
            style={{ backgroundImage: `url(${cloudwalkwayImg.src})` }}
            className="relative w-[45vw] h-[40vh] bg-center bg-cover "
          >
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute bottom-0 ml-3 mb-2 z-10">
              <h3 className="text-white font-inter">
                SUSPENDED PATHS ABOVE THE VALLEY
              </h3>
              <h2 className="text-white font-cormorant text-3xl">
                Cloud Walkway
              </h2>
            </div>
          </div>
          <div
            ref={infinityPoolRef}
            style={{ backgroundImage: `url(${infinityPoolImg.src})` }}
            className="relative w-[45vw] h-[40vh] bg-center bg-cover mt-3"
          >
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="absolute bottom-0 ml-3 mb-2 z-10">
              <h3 className="text-white font-inter">WATER MEETS SKY</h3>
              <h2 className="text-white font-cormorant text-3xl">
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
