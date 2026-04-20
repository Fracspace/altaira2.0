"use client";
import React from "react";
import premiumLiving from "../../../public/images/yurt/premiumLiving.webp";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { usePopup } from "../GlobalComponents/PopupContext";
import { useExchange } from "@/app/context/ExchangeContext";

const PremiumLiving = () => {
  const { openPopup } = usePopup();

  const exchange = useExchange();

  const usdRate = exchange?.usdRate ?? 0.012;

  const coOwnUsd = (600000 * usdRate).toLocaleString();
  const fullOwnUsd = (5000000 * usdRate).toLocaleString();

  return (
    <div className="ml-5 mr-5 md:ml-10 md:mr-10">
      <div className=" w-[90vw] md:max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10">
          <Image
            src={premiumLiving}
            alt="Premium Living"
            className="w-full md:w-1/2 h-auto md:h-[70vh] rounded-md"
          />
          <div className="flex flex-col gap-10">
            <h2 className="text-3xl font-bold font-cormorant">
              Designed for Premium Living
            </h2>
            <p className="font-inter leading-loose text-[#67777E]">
              Two curated investment models. One extraordinary hilltop
              destination. Choose premium Full ownership or fractional ownership
              - both offering luxury personal stays, passive income, 70:30
              revenue share, and resort-managed peace of mind.
            </p>
            <div className="max-w-5xl md:max-w-2xl ">
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-sm">
                <div className="grid grid-cols-3 text-center font-medium bg-[#AD9273]/10">
                  <div className="p-3 md:p-4 border-r border-gray-300">
                    Yurt Type
                  </div>
                  <div className="p-3 md:p-4 pr-2 border-r border-gray-300">
                    Full Ownership
                  </div>
                  <div className="pl-1 pr-1 py-3 md:p-4 pr-2">Co-Ownership</div>
                </div>
                <div className="border-t border-gray-300"></div>
                <div className="grid grid-cols-3 text-center">
                  <div className="p-4 border-r border-gray-300 text-[#67777E]">
                    Luxury Yurt
                  </div>
                  <div className=" pl-1 pr-1 py-4 md:p-4 pr-2 border-r border-gray-300 text-[#67777E]">
                    ₹50,00,000 ($ {fullOwnUsd})
                  </div>
                  <div className="pl-1 pr-1 py-4 md:p-4 pr-2 text-[#67777E]">
                    ₹6,00,000 ($ {coOwnUsd})
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center md:inline">
              <button
                onClick={openPopup}
                className="rounded-md bg-[#AD9273] cursor-pointer transition hover:scale-105 duration-300 flex  items-center gap-2 text-white px-10 py-3"
              >
                Enquire Now <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumLiving;
