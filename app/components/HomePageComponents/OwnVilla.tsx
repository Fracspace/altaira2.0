import React from "react";
import villaImg from "../../../public/images/homepage/villa.webp";

function OwnVilla() {
  return (
    <div className="mt-10">
      <div
        style={{ backgroundImage: `url(${villaImg.src})` }}
        className="relative w-[100%] h-[80vh] bg-cover bg-center flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="z-10">
          <h3 className="text-center font-inter text-white">
            EXCLUSIVE VALLEY VIEW VILLA
          </h3>
          <h2 className="text-center pt-5 text-6xl text-white font-cormorant">
            Own A Piece Of Paradise
          </h2>
          <h3 className="text-center pt-5 text-white font-inter">
            Designed as fully serviced smart homes, each villa is positioned to
            capture uninterrupted valley and cloud views.
          </h3>
          <div className="flex items-center justify-center mt-8">
            <button className="bg-white pl-2 pr-2 pt-1 pb-1 rounded cursor-pointer">
              View Villa Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnVilla;
