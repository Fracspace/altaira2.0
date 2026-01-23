"use client"
import ridgeSuites1 from "../../../public/images/resort/ridgeSuites1.webp"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


import Image from 'next/image'

const AboveNoise = () => {
  const aboveNoiseSectionRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  useGSAP(() => {
    // fade in section
    gsap.fromTo(
      aboveNoiseSectionRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboveNoiseSectionRef.current,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.to(imageWrapperRef.current, {
      y: 60,
      ease: "none",
      scrollTrigger: {
        trigger: aboveNoiseSectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    })

    gsap.set(imageWrapperRef.current, { scale: 1 })

    const onEnter = () => {
      gsap.to(imageRef.current, {
        scale: 1.1,
        duration: 0.6,
        ease: "power3.out"
      })
    }

    const onLeave = () => {
      gsap.to(imageRef.current, {
        scale: 1,
        duration: 0.6,
        ease: "power3.out"
      })
    }


    // image parallax
    gsap.to(".parallax-image", {
      y: 60,
      ease: "none",
      scrollTrigger: {
        trigger: aboveNoiseSectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // text parallax
    gsap.to(".parallax-text", {
      y: 60,
      ease: "none",
      scrollTrigger: {
        trigger: aboveNoiseSectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    imageWrapperRef.current?.addEventListener("mouseenter", onEnter);
    imageWrapperRef.current?.addEventListener("mouseleave", onLeave);

    return () => {
      imageWrapperRef.current?.removeEventListener("mouseenter", onEnter);
      imageWrapperRef.current?.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={aboveNoiseSectionRef}>
      <div className='p-10'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-2xl font-cormorant md:text-4xl text-center font-bold'>Above the Noise, Beyond the Ordinary</h2>
          <p className='para'>Designed as a slow-living resort with immersive landscapes, Altaira blends luxury stays, curated wellness, and high-adrenaline adventure - all shaped by elevation, forest, and sky.</p>
        </div>
        <div className='flex flex-col md:h-[60vh] mt-10 md:flex-row md:items-stretch gap-10'>
          <div className="overflow-hidden rounded-md md:w-[50vw] flex" >
            <Image
              // ref={imageRef}
              src={ridgeSuites1}
              alt="ridge suites"
              className="w-full experience-image rounded-md object-cover h-[50vh] md:h-full"
            />
          </div>
          <div className="flex flex-col gap-5 md:w-[50vw]">
            <div className='flex flex-col gap-3'>
              <p className='text-[#AD9273] font-inter'>PRIVATE, ELEVATED, IMMERSED IN THE VIEW</p>
              <h2 className='font-cormorant text-3xl font-bold'>Ridge Suites</h2>
              <p className='para leading-relaxed'>The Ridge Suites are positioned along the natural contours of the hill, offering uninterrupted valley views and complete privacy.</p>
              <p className='para leading-relaxed'>Designed for slow mornings and quiet evenings, each suite opens to forest light, drifting mist, and the changing moods of the landscape. Interiors are understated, refined, and fully serviced - allowing nature to remain the hero.</p>
              <p className='para'>Highlights (light list, not feature dump)</p>
              <ul className='list-disc md:pl-5 leading-relaxed'>
                <li className='para'>Valley-facing layouts</li>
                <li className='para'>Private plunge pools</li>
                <li className='para'>Fully serviced resort living</li>
                <li className='para'>Seamless access to all experiences</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboveNoise