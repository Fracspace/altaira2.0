import React, { useRef } from "react";
import restaurantImg from "../../../public/images/homepage/restaurantImg2.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

function Restaurant() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 90 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.in",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="mt-8">
      <h2></h2>
      <div
        style={{ backgroundImage: `url(${restaurantImg.src})` }}
        className="relative w-[90vw] h-auto md:h-[80vh] ml-[5vw] mr-[5vw] pt-6 bg-cover bg-center"
      >
        <div
          ref={contentRef}
          className="w-full md:w-[40vw] h-auto md:h-[70vh] xl:h-auto bg-black/30 ml-0 md:ml-8 mt-4 rounded-lg z-20"
        >
          <div className="text-[#E7D2AD] xl:text-header text-4xl text-center pt-6 z-10">
            Gather. Savour. Linger
          </div>
          <p className="ml-5 mr-3 mt-4 xl:text-xl text-white">
            From relaxed moments by the waterfall to refined meals overlooking
            the valley, dining at Altaira is shaped by place, pace, and flavour.
          </p>
          <div className="flex ml-5 mt-5">
            <div className="w-[5px] max-h-[300px] h-auto bg-[#E7D2AD]"></div>
            <div className="ml-4">
              <div className="mt-4">
                <h2 className="font-cormorant text-3xl xl:text-4xl text-white">
                  Waterfall Cafe & Bar
                </h2>
                <p className="font-inter text-white xl:text-lg mt-2">
                  Casual, Atmospheric, Natural
                </p>
              </div>
              <div className="mt-6">
                <h2 className="font-cormorant text-3xl xl:text-4xl text-white">
                  All Day Restaurant
                </h2>
                <p className="font-inter text-white xl:text-lg mt-2">
                  Local Flavours,Global Techniques
                </p>
              </div>
            </div>
          </div>
          <div>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
