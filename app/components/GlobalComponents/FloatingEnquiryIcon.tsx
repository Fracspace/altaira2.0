import React from "react";

interface FloatingEnquiryIconProps {
  onClick?: () => void;
}

function FloatingEnquiryIcon({ onClick }: FloatingEnquiryIconProps) {
  return (
    <div
      onClick={onClick}
      className="fixed bottom-5 right-4 md:bottom-6 md:right-6 z-50"
    >
      {/* outer ring */}
      <div className="p-[4px] animate-luxury-bounce rounded-full bg-gradient-to-br from-[#E6D6C5] via-[#AD9273] to-[#7F6850] shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
        {/* button */}
        <div
          className="
          relative flex items-center justify-center
          w-[64px] h-[64px]
          md:w-[80px] md:h-[80px]
          rounded-full
          bg-black
          cursor-pointer
          transition
          hover:scale-105
        "
        >
          {/* glass highlight */}
          {/* <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.35),transparent_55%)]" /> */}

          {/* text */}
          <div
            className="
            relative  text-center text-white font-semibold leading-tight
            text-[11px] md:text-[14px]
          "
          >
            Enquire <br /> Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default FloatingEnquiryIcon;
