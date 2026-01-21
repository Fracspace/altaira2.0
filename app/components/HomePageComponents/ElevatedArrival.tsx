import React from "react";
import helipadImg from "../../../public/images/homepage/helipad.webp";
import Image from "next/image";

function ElevatedArrival() {
  return (
    <section>
      <div className="flex ml-[5vw] mr-[5vw] mt-6">
        <div>
          <Image
            src={helipadImg}
            alt="helipad image"
            className="w-[50vw] h-[60vh]"
          />
        </div>
        <div className="mt-12">
          <h2 className="text-4xl font-cormorant text-center">
            An Elivated Arrival
          </h2>
          <p className="mt-6 ml-8 mr-3 w-[40vw]">
            Altaira is easily accessible by road - and those who value time and
            perspective, by helicopter.
          </p>
          <p className="mt-4 ml-8 mr-3 w-[40vw]">
            Dedicated helipad access allows select guests and owners to arrive
            directly above the clouds.
          </p>
          <div className="flex items-center ">
            <button className="mt-10 ml-8 border border-black px-4 py-2">
              Arrival Options
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 flex items-center justify-center">
        <h2 className="w-[70vw] text-[#67777E] text-center text-6xl font-cormorant">
          A place where the land leads and time slows down.
        </h2>
      </div>
    </section>
  );
}

export default ElevatedArrival;
