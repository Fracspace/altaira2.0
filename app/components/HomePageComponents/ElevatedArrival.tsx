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
      <div
        ref={containerRef}
        className="flex flex-col md:flex-row md:ml-[5vw] md:mr-[5vw] mt-6"
      >
        <div className="ml-[5vw] mr-[5vw] w-[90vw] md:ml-0 md:mr-0 md:w-[50vw]">
          <Image
            src={helipadImg}
            alt="helipad image"
            className="w-full h-[clamp(400px,50vh,600px)] max-w-[800px]"
          />
        </div>
        <div className="mt-12 ">
          <h2 className=" text-3xl md:text-5xl xl:text-header font-cormorant text-center">
            An Elivated Arrival
          </h2>
          <p className="mt-6 ml-[3vw] mr-[3vw] text-lg xl:text-content md:ml-8 md:mr-3 w-full md:w-[40vw]">
            Altaira is easily accessible by road - and those who value time and
            perspective, by helicopter.
          </p>
          <p className="mt-4 ml-[3vw] mr-[3vw] text-lg xl:text-content md:ml-8 md:mr-3 w-full md:w-[40vw]">
            Dedicated helipad access allows select guests and owners to arrive
            directly above the clouds.
          </p>
          <div className="flex items-center justify-center">
            <button className="mt-10  md:ml-8 text-lg  border border-black px-4 py-2">
              Arrival Options
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 mb-12 flex items-center justify-center">
        <h2
          ref={contentRef}
          className="lg:w-[80vw] text-[#67777E] text-center text-3xl md:text-6xl font-cormorant"
        >
          A place where the land leads <br></br>
          <span className="text-gray-400"> and time slows down. </span>
        </h2>
      </div>
    </section>
  );
}

export default ElevatedArrival;
