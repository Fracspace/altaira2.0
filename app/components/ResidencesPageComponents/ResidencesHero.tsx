"use client";

import React, { useRef } from "react";
import carousalImgOne from "../../../public/images/residences/carousalImg1.webp";
import carousalImgTwo from "../../../public/images/residences/villaImgOne.webp";
import carousalImgThree from "../../../public/images/residences/villaImgTwo.webp";
import Image from "next/image";

import "react-multi-carousel/lib/styles.css";

import dynamic from "next/dynamic";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

// Dynamically import carousel only on client
const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

gsap.registerPlugin(ScrollTrigger);

function ResidencesHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      contentRef.current,
      {
        opacity: 0,
        y: 120
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom top",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="ml-2 mr-2 mt-4 md:p-10">
      <div ref={contentRef}>
        <h2 className=" text-center font-cormorant  text-3xl md:text-5xl">
          Private Villas, Thoughtfully Positioned
        </h2>
        <p className="text-center text-md md:text-lg xl:text-xl mt-4">
          A limited collection of private villas set along the ridge - designed
          for ownership, privacy, and uninterrupted views. Altaira Private
          Residences are not standalone homes. They are fully integrated into a
          luxury hilltop resort ecosystem - combining the calm of private living
          with the privileges of a destination retreat.
        </p>
      </div>
      <div>
        <div className="mt-8">
          {/* <Image src={carousalImgOne} alt="carousal image one" /> */}
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {[carousalImgOne, carousalImgTwo, carousalImgThree].map(
              (img, index) => (
                <div key={index} className="flex justify-center">
                  <div className="relative w-[90vw] h-[80vh] md:h-[80vh]">
                    <Image
                      src={img}
                      alt={`Carousel Image ${index + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-xl h-[60vh] md:w-[90vw] max-w-[1200px] max-h-[800px] md:h-[80vh]"
                    />
                  </div>
                </div>
              )
            )}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default ResidencesHero;
