"use client"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Image from "next/image"

import eventSpacesImg1 from "../../../public/images/resort/eventSpacesImg1.webp"

import eventSpacesImg2 from "../../../public/images/resort/eventSpacesImg2.webp"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const EventSpaces = () => {
    const eventSpacesRef = useRef<HTMLDivElement>(null);
    const arriveLaterRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        if (!eventSpacesRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: eventSpacesRef.current,
                start: "top 80%",
                once: true
            }
        });

        tl.from(
            eventSpacesRef.current.children,
            {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.15
            }
        );


        if (!arriveLaterRef.current) return;

        gsap.from(arriveLaterRef.current, {
            opacity: 0,
            duration: 0.9,
            y: 60,
            ease: "power3.out",
            scrollTrigger: {
                trigger: arriveLaterRef.current,
                start: "top bottom",
                once: true
            }
        });

        gsap.utils.toArray<HTMLImageElement>(".imageRef").forEach((img) => {
            const wrapper = img.parentElement as HTMLElement;
            if (!wrapper) return;

            gsap.set(wrapper, { overflow: "hidden" });
            gsap.set(img, { transformOrigin: "center center", willChange: "transform" });

            wrapper.addEventListener("mouseenter", () => {
                gsap.to(img, { scale: 1.1, duration: 0.6, ease: "power3.out" });
            });

            wrapper.addEventListener("mouseleave", () => {
                gsap.to(img, { scale: 1, duration: 0.6, ease: "power3.out" });
            });
        });

        gsap.to("eventSpaceimage", {
            ease: 'none',
            scrollTrigger: {
                trigger: eventSpacesRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            }
        })

        gsap.utils.toArray<HTMLImageElement>(".eventSpaceImage").forEach((img) => {
            const wrapper = img.parentElement as HTMLElement;
            if (!wrapper) return;
            gsap.set(wrapper, { overflow: "hidden" })
            gsap.set(img, {
                transformOrigin: "center center",
                willChange: "transform"
            })
            const enter = () =>
                gsap.to(img, {
                    scale: 1.1,
                    duration: 0.6,
                    ease: "power3.out",
                });

            const leave = () =>
                gsap.to(img, {
                    scale: 1,
                    duration: 0.6,
                    ease: "power3.out",
                });

            wrapper.addEventListener("mouseenter", enter);
            wrapper.addEventListener("mouseleave", leave);
        })

        gsap.from(".text-item h2,.text-item p", {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".text-animate",
                start: "top bottom",
                once: true
            }
        })

        gsap.from("em", {
            opacity: 0,
            y: 30,
            delay: 0.4,
            scrollTrigger: { trigger: arriveLaterRef.current }
        })
    }, []);

    return (
        <div className="ml-10 mr-10" ref={eventSpacesRef}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-2">
                    <p className="text-center text-lg text-[#AD9273] xl:text-xl font-inter">EVENT SPACES</p>
                    <h2 className="text-center text-3xl lg:text-4xl xl:text-3xl font-cormorant">Gather Above the World</h2>
                </div>
                <div className="flex flex-col py-10 lg:flex-row gap-5">
                    <div className="min-w-[300px] lg:w-1/2 min-h-[220px] md:min-h-[300px] lg:min-h-[350px]">
                        <Image src={eventSpacesImg1} alt="event space img1" className="w-full h-full eventSpaceImage object-cover" />
                    </div>
                    <div className="min-w-[300px] min-h-[220px] md:min-h-[300px] lg:min-h-[350px] lg:w-1/2">
                        <Image src={eventSpacesImg2} alt="event space img2" className="w-full h-full eventSpaceImage object-cover" />
                    </div>
                </div>
                <div>
                    <div className="p-10 shadow-md">
                        <div className="flex text-animate flex-col w-full gap-5 lg:gap-10 md:divide-y md:divide-y-0 md:divide-x divide-[#AD9273] md:flex-row">
                            <div className="flex flex-col w-full md:pr-5 gap-5 text-item">
                                <h2 className="font-cormorant text-2xl lg:text-4xl xl:text-3xl font-bold">Weddings</h2>
                                <p className="font-inter text-[#67777E] dark:text-white xl:text-lg">Intimate hilltop ceremonies and celebrations framed by forest, sky, and open light.</p>
                            </div>
                            <div className="flex flex-col md:pr-5 w-full gap-5 text-item">
                                <h2 className="font-cormorant text-2xl lg:text-4xl xl:text-3xl font-bold">Private Gatherings</h2>
                                <p className="font-inter text-[#67777E] dark:text-white xl:text-lg">Birthdays, anniversaries, and milestone moments, hosted in spaces that feel personal and unhurried.</p>
                            </div>
                            <div className="flex flex-col w-full gap-5 text-item">
                                <h2 className="font-cormorant text-2xl lg:text-4xl xl:text-3xl font-bold">Retreats</h2>
                                <p className="font-inter text-[#67777E] dark:text-white xl:text-lg">A quiet setting for wellness, leadership, and creative retreats - designed for focus and flow.</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-10" ref={arriveLaterRef}><h2 className="text-2xl xl:text-4xl text-[#67777E] dark:text-white text-center font-cormorant">Arrive lighter. <em className="text-2xl xl:text-4xl text-[#A3A4A8] dark:text-white text-center font-cormorant">Leave restored</em> </h2></div>
                </div>
            </div>
        </div>
    )
}

export default EventSpaces