import timelineHeroImage from "../../../public/images/timeline/timelineHeroImage.webp";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  return (
    <div className="min-h-screen w-full relative">
      <Image
        src={timelineHeroImage}
        className="object-cover"
        fill
        priority
        alt="timeline hero image"
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="absolute z-20 w-full flex items-center justify-center text-center inset-0 px-5">
        <div className="text-white flex flex-col items-center justify-center max-w-4xl">
          <h2 className="font-cormorant md:text-5xl lg:text-5xl text-3xl">
            Project Timeline
          </h2>
          <i className="block pt-4 text-md md:text-lg font-inter 2xl:text-2xl">
            Watch Altaira rise from vision to reality
          </i>
        </div>
      </div>
    </div>
  );
};

export default Hero;
