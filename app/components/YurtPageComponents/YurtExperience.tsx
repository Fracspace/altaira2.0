"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import yurtExperience from "../../../public/images/yurt/yurtExperience.webp";
import { usePopup } from "../GlobalComponents/PopupContext";

const YurtExperience = () => {
  const { openPopup } = usePopup();
  return (
    <div className="ml-10 mr-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-5 py-10">
          <h2 className="text-center text-4xl font-bold font-cormorant">
            The Yurt Experience
          </h2>
          <p className="font-inter text-center text-[#67777E] leading-loose text-lg">
            Each yurt is crafted for comfort, privacy, and an elevated stay
            experience making it an attractive asset for both personal enjoyment
            and consistent hospitality-driven returns.
          </p>
          <div className="relative">
            <Image
              src={yurtExperience}
              alt="Yurt Experience"
              className="md:w-full  md:h-auto  md:object-cover rounded-md"
            />
            <div className="md:absolute bottom-10 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
              <div className="flex flex-col items-center gap-3">
                <h2 className="font-cormorant mt-4 md:mt-0 text-2xl md:text-4xl font-bold md:text-white text-center">
                  Ready to Begin Your Ownership Journey?
                </h2>
                <button
                  onClick={openPopup}
                  className="rounded-md w-fit cursor-pointer transition hover:scale-105 duration-300 bg-[#AD9273] text-white text-base flex items-center px-5 py-3"
                >
                  Register Your Interest <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="text-center text-2xl md:text-4xl  font-cormorant">
            <span className="text-[#67777E]">Own a Yurt.</span>{" "}
            <span className="text-[#67777E]/60">Live the Luxury.</span>
            <span className="text-[#67777E]"> Earn Returns.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YurtExperience;
