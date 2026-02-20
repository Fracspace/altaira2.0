import React, { useRef } from "react";
import villaImg from "../../../public/images/homepage/villa2.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import { TrackEvent } from "../GlobalComponents/TrackEvent";

function OwnVilla() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  useGSAP(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.in",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 30%",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  const knowMore = () => {
    TrackEvent("Know More button click", "CTA", "Homepage Own a Villa");
    router.push("/residences");
  };

  return (
    <div className="mt-10" ref={containerRef}>
      <div
        style={{ backgroundImage: `url(${villaImg.src})` }}
        className="relative w-full  min-h-[600px] bg-cover bg-center flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black/35"></div>
        <div ref={contentRef} className="z-10">
          <h3 className="text-center mx-auto max-w-5xl font-inter text-white">
            EXCLUSIVE VALLEY VIEW VILLA
          </h3>
          <h2 className="text-center pt-5 mx-auto max-w-5xl text-3xl lg:text-4xl text-white font-cormorant">
            Own A Piece Of Paradise
          </h2>
          <h3 className="text-center text-lg pt-5 px-2 mx-auto max-w-5xl text-white font-inter">
            Designed as fully serviced smart homes, each villa is positioned to
            capture uninterrupted valley and cloud views.
          </h3>
          <div className="flex items-center justify-center mt-8">
            <button
              onClick={knowMore}
              className="bg-white text-md px-2 py-1 rounded cursor-pointer
             transition-all duration-300 ease-out
             dark:text-[#AD9273]
              hover:text-[#AD9273]
             hover:shadow-md hover:-translate-y-[1px]"
            >
              know more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnVilla;
