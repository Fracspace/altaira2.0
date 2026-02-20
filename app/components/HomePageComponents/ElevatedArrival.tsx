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
    <section className="ml-5 mr-5">
      <div
        ref={containerRef}
        className="flex flex-col  mx-auto max-w-7xl md:flex-row mt-6"
      >
        <div className="overflow-hidden w-full md:w-1/2">
          <Image
            src={helipadImg}
            alt="helipad image"
            className="w-full  transition-transform duration-700 ease-out
    hover:scale-110 min-h-[200px]  md:min-h-[350px] max-w-[800px]"
          />
        </div>
        <div className="mt-12 w-full md:w-1/2">
          <h2 className="text-3xl lg:text-4xl  font-cormorant text-center">
            An Elivated Arrival
          </h2>
          <p className="mt-6 ml-[3vw] mr-[3vw] text-lg  ">
            Altaira is easily accessible by road - and those who value time and
            perspective, by helicopter.
          </p>
          <p className="mt-4 ml-[3vw] mr-[3vw] text-lg   ">
            Dedicated helipad access allows select guests and owners to arrive
            directly above the clouds.
          </p>
          <p className="mt-4 ml-[3vw] mr-[3vw] text-lg  ">
            Planned with future connectivity and high-value access in mind.
          </p>
          <div className="flex items-center justify-center">
            {/* <button className="mt-10  md:ml-8 text-lg  border border-black px-4 py-2">
              Arrival Options
            </button> */}
          </div>
        </div>
      </div>
      <div className="mt-12 mb-12 mx-auto max-w-5xl flex items-center justify-center">
        <h2
          ref={contentRef}
          className=" text-[#67777E] dark:text-white text-center text-3xl lg:text-4xl font-cormorant"
        >
          A place where the land leads <br></br>
          <span className="text-gray-400 dark:text-white"> and time slows down. </span>
        </h2>
      </div>
    </section>
  );
}

export default ElevatedArrival;
