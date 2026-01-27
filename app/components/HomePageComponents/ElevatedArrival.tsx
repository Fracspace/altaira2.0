import React, { useRef } from "react";
import helipadImg from "../../../public/images/homepage/helipad2.webp";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

function ElevatedArrival() {
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 120 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 40%",
          end: "bottom top",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <section>
      <div ref={containerRef} className="flex ml-[5vw] mr-[5vw] mt-6">
        <div>
          <Image
            src={helipadImg}
            alt="helipad image"
            className="w-[50vw] h-[60vh]"
          />
        </div>
        <div className="mt-12">
          <h2 className="text-4xl font-cormorant text-center">
            An Elivated Arrival
          </h2>
          <p className="mt-6 ml-8 mr-3 w-[40vw]">
            Altaira is easily accessible by road - and those who value time and
            perspective, by helicopter.
          </p>
          <p className="mt-4 ml-8 mr-3 w-[40vw]">
            Dedicated helipad access allows select guests and owners to arrive
            directly above the clouds.
          </p>
          <div className="flex items-center ">
            <button className="mt-10 ml-8 border border-black px-4 py-2">
              Arrival Options
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 mb-12 flex items-center justify-center">
        <h2
          ref={contentRef}
          className="w-[60vw] text-[#67777E] text-center text-6xl font-cormorant"
        >
          A place where the land leads <br></br>
          <span className="text-gray-400"> and time slows down. </span>
        </h2>
      </div>
    </section>
  );
}

export default ElevatedArrival;
