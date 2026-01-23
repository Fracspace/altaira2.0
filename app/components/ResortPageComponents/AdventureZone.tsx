"use client"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"

import Image from "next/image"

import adventureZoneImage from "../../../public/images/resort/adventureZoneImage.webp"
import bungeeJump from "../../../public/images/resort/bungeeJump.webp"
import ziplineImg from "../../../public/images/resort/ziplineImg.webp"
import atvTrails from "../../../public/images/resort/atvTrails.webp"
import ziplineRuns from "../../../public/images/resort/ziplineRuns.webp"

// import adventureZone from "../../../public/images/resort/adventureZone.webp"

gsap.registerPlugin(ScrollTrigger);


const AdventureZone = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    //useGSAP hook

    useGSAP(() => {
        gsap.to(".adventure-bg", {
            y: 80,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        })

        gsap.from(textRef.current?.children || [], {
            opacity: 0,
            y: 50,  //moves up
            duration: 1,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%"
            }
        })

        gsap.from(cardsRef.current?.children || [], {
            opacity: 0,
            y: 80,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%"
            }
        })

        gsap.utils.toArray<HTMLDivElement>(".adventure-card").forEach((card) => {
            card.addEventListener("mouseenter", () => {
                gsap.to(card, { y: -10, duration: 0.3, ease: "power2.out" })
            })

            card.addEventListener("mouseleave", () => {
                gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" })
            })
        })

    }, [])

    return (
        <div ref={sectionRef} className="p-10">
            <div className="relative overflow-hidden rounded-md">
                <Image src={adventureZoneImage} alt="adventure zone" className="adventure-bg object-cover h-[100vh] rounded-md w-full" />
                <div ref={textRef} className="absolute flex flex-col w-full text-center top-10 hidden md:block">
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-[#4C3D2D] font-inter">THE ADVENTURE ZONE</p>
                        <h2 className="font-cormorant text-xl md:text-4xl text-white">Where the Land Quickens the Pulse</h2>
                        {/* <p className="text-lg md:font-normal text-white para leading-relaxed">Hidden within the surrounding landscape lies Altaira’s Adventure Zone - a space where elevation, speed, and adrenaline come alive.</p> */}
                    </div>
                </div>
                <div ref={cardsRef} className="absolute bottom-0 md:bottom-10 p-10 w-full flex flex-col md:flex-row gap-5">
                    <div className="adventure-card bg-black/20 p-5 flex flex-col gap-5 rounded-md w-full md:w-[30vw]">
                        <Image src={bungeeJump} alt="bungee jump" className="w-[10vw] md:w-[2vw] object-cover" />
                        <p className="text-white font-inter">Bungee Jump</p>
                        <p className="font-inter text-sm md:font-normal text-white">Leap from a purpose-built platform suspended over a dramatic valley, with the forest unfolding beneath you.</p>
                    </div>
                    <div className="adventure-card bg-black/20 p-5 flex flex-col gap-5 rounded-md w-full md:w-[30vw]">
                        <Image src={atvTrails} alt="atv trails" className="w-[10vw] md:w-[2vw] object-cover" />
                        <p className="text-white font-inter">ATV Trails</p>
                        <p className="font-inter text-sm md:font-normal text-white">Navigate winding forest trails, mud paths, and open clearings on guided ATV routes.</p>
                    </div>
                    <div className="adventure-card bg-black/20 p-5 flex flex-col gap-5 rounded-md w-full md:w-[30vw]">
                        <Image src={ziplineRuns} alt="zipline runs" className="w-[10vw] md:w-[2vw] object-cover" />
                        <p className="text-white font-inter">Zipline Runs</p>
                        <p className="font-inter text-sm md:font-normal text-white">Soar across the valley on high-tension zip lines, suspended above treetops and flowing streams.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdventureZone