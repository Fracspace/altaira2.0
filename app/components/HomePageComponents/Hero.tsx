"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";
import resortImg from "../../../public/images/homepage/resort3.webp";
// import resortVideo from '../../../public/altairaVideo.mp4';

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const cloudSectionRef = useRef<HTMLDivElement>(null);
  const textSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(textSectionRef.current, {
      opacity: 0,
      y: -80,
      scrollTrigger: {
        trigger: heroSectionRef.current,
        start: "top top",
        end: "bottom 50%",
        scrub: true
      }
    });

    gsap.to(cloudSectionRef.current, {
      height: "80%",
      scrollTrigger: {
        trigger: heroSectionRef.current,
        start: "top top",
        end: "bottom 60%",
        scrub: true
      }
    });
  }, []);

  return (
    // <div>
    //   <div
    //     ref={heroSectionRef}
    //     className="relative bg-cover bg-center h-[100vh] w-full"
    //     style={{ backgroundImage: `url(${resortImg.src})` }}
    //   >

    //     <div className="absolute inset-0 bg-black/30"></div>

    //     <div ref={textSectionRef} className="relative z-10 ">
    //       <h2 className="font-cormorant text-6xl text-white font-500 text-center w-[60vw] ml-[20vw] mr-[20vw] pt-[40vh] leading-[1.3] ">
    //         {" "}
    //         Above The Clouds. Rooted in Nature.
    //       </h2>
    //       <h3 className="font-inter text-white text-center italic text-xl pt-4">
    //         A hilltop destination where nature, stay, and experience come
    //         together
    //       </h3>
    //     </div>

    //     <div
    //       ref={cloudSectionRef}
    //       className="absolute bottom-0 bg-gradient-to-t from-white to white/60 w-full h-[25vh]"
    //     ></div>
    //   </div>
    // </div>

    <div>
      <div
        ref={heroSectionRef}
        className="relative h-[100vh] w-full overflow-hidden"
      >
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/altairaVideo.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

<<<<<<< HEAD
        {/* Text */}
        <div ref={textSectionRef} className="relative z-10">
          <h2 className="font-cormorant text-6xl text-white font-500 text-center w-[60vw] ml-[20vw] mr-[20vw] pt-[40vh] leading-[1.3]">
=======
        <div ref={textSectionRef} className="relative z-10 ">
          <h2 className="font-cormorant text-3xl md:text-6xl text-white font-500 text-center w-full md:w-[60vw] md:ml-[20vw] md:mr-[20vw] pt-[40vh] leading-[1.3] ">
            {" "}
>>>>>>> f571c068c313ee5f90ef558619b929e0bfe9df21
            Above The Clouds. Rooted in Nature.
          </h2>
          <h3 className="font-inter text-white text-center italic text-lg pt-4">
            A hilltop destination where nature, stay, and experience come
            together
          </h3>
        </div>

        {/* Cloud/Gradient Section */}
        {/* <div
          ref={cloudSectionRef}
          className="absolute bottom-0 w-full h-[25vh] bg-gradient-to-t from-white to-white/60"
        ></div> */}
      </div>
    </div>
  );
};

export default Hero;
