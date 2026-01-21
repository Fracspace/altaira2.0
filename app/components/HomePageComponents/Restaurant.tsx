import React from "react";
import restaurantImg from "../../../public/images/homepage/restaurantImg.webp";

function Restaurant() {
  return (
    <div className="mt-8">
      <h2></h2>
      <div
        style={{ backgroundImage: `url(${restaurantImg.src})` }}
        className="relative w-[90vw] h-[80vh] ml-[5vw] mr-[5vw] pt-6 bg-cover bg-center"
      >
        <div className="w-[40vw] h-[70vh] bg-black/30 ml-8 mt-4 rounded-lg z-20">
          <div className="text-[#E7D2AD] text-4xl text-center pt-6 z-10">
            Gather. Savour. Linger
          </div>
          <p className="ml-5 mr-3 mt-4 text-white">
            From relaxed moments by the waterfall to refined meals overlooking
            the valley, dining at Altaira is shaped by place, pace, and flavour.
          </p>
          <div className="flex ml-5 mt-5">
            <div className="w-[5px] h-[32vh] bg-[#E7D2AD]"></div>
            <div className="ml-4">
              <div className="mt-4">
                <h2 className="font-cormorant text-3xl text-white">
                  Waterfall Cafe & Bar
                </h2>
                <p className="font-inter text-white mt-2">
                  Casual, Atmospheric, Natural
                </p>
              </div>
              <div className="mt-6">
                <h2 className="font-cormorant text-3xl text-white">
                  All Day Restaurant
                </h2>
                <p className="font-inter text-white mt-2">
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
