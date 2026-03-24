"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import InvestmentForm from "../GlobalComponents/InvestmentForm";

interface PopupFormProps {
  onClose: () => void;
}

function PopupForm({ onClose }: PopupFormProps) {
  const popupRef = useRef(null);

  // ✅ Slide up on mount
  useEffect(() => {
    gsap.fromTo(
      popupRef.current,
      { y: "180%" }, // start fully below screen
      {
        y: "0%",
        duration: 4, // slower = smoother
        ease: "power4.out"
      }
    );
  }, []);

  // ✅ Slide down on close
  const handleClose = () => {
    gsap.to(popupRef.current, {
      y: "100%",
      duration: 0.6,
      ease: "power3.in",
      onComplete: onClose
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div
        ref={popupRef}
        className="
          pointer-events-auto
          w-full max-w-xl mx-4 mb-6
          rounded-2xl bg-white
          dark:text-black
          max-h-[60dvh]
          md:max-h-[80dvh]
          flex flex-col
          overflow-hidden
          shadow-2xl
        "
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4">
          <div className="text-xl font-inter text-center mx-auto font-semibold text-[#AD9273]">
            Begin Your Altaira Journey
          </div>

          <button
            onClick={handleClose}
            className="w-9 h-9 cursor-pointer flex items-center dark:text-black justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            ✕
          </button>
        </div>
        {/* <p className="ml-2 mr-2  md:ml-6 md:mr-6 text-center text-[#AD9273]">
          Submit your enquiry and our team will reach out to you at the earliest
          convenience.
        </p> */}

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6">
          {/* <div className="text-center mb-4 text-[#AD9273]">
            Please fill this form to download the brochure.
          </div> */}

          <InvestmentForm />
        </div>
      </div>
    </div>
  );
}

export default PopupForm;
