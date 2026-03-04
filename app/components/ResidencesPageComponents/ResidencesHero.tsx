"use client";

import React, { useRef } from "react";
import carousalImgOne from "../../../public/images/residences/liveAboveValleyImage.webp";
import carousalImgTwo from "../../../public/images/residences/villaImgOne.webp";
import carousalImgThree from "../../../public/images/residences/villaImgTwo.webp";
import carousalImgFour from "../../../public/images/residences/resdenc2.webp";

import Image from "next/image";

import "react-multi-carousel/lib/styles.css";

import dynamic from "next/dynamic";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useMediaQuery } from "react-responsive";

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

  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  const mobileImages = [carousalImgFour, carousalImgTwo, carousalImgThree];

  const laptopImages = [carousalImgOne, carousalImgTwo, carousalImgThree];

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
    <div ref={containerRef} className="mx-auto px-4 md:max-w-5xl  lg:py-16">
      <div ref={contentRef}>
        <h2 className=" text-center font-cormorant  text-3xl md:text-4xl mt-6">
          Private Villas, Thoughtfully Positioned
        </h2>
        <p className="text-center text-md md:text-lg mt-4">
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
            className="residences-carousal"
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
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {(isMobile ? mobileImages : laptopImages).map((img, index) => (
              <div key={index} className="flex justify-center">
                <div className="relative mx-auto max-w-7xl w-[80vw] min-h-[400px] sm:min-h-[600px]">
                  <Image
                    src={img}
                    alt={`Carousel Image ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                    className=" w-full h-full"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default ResidencesHero;
