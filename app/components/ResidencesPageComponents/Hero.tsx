"use client"

import gsap from "gsap"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import residencesHeroImage1 from "../../../public/images/residences/residencesHeroImage1.webp"

gsap.registerPlugin(ScrollTrigger)

import Image from "next/image"

const Hero = () => {
    const heroSectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!heroSectionRef.current) return;
        const items = gsap.utils.toArray<HTMLElement>(heroSectionRef.current.children)
        gsap.from(
            items, {
            opacity: 0,
            y: 30,
            filter: "blur(8px)",
            duration: 1.2,
            stagger: 0.4,
            ease: "power3.out",
        });
    }, { scope: heroSectionRef });
    return (
        <div className="min-h-screen w-full relative">
            <Image src={residencesHeroImage1} fill priority alt="residences hero img" className="object-cover" />
            <div className="absolute z-10 inset-0 bg-black/50"></div>
            <div className="absolute z-20 w-full flex items-center justify-center text-center px-5 inset-0">
                <div ref={heroSectionRef} className="text-white flex flex-col items-center justify-center max-w-4xl">
                    <h2 className="font-bold font-cormorant md:text-6xl text-3xl">Altaira Private Residences</h2>
                    <i className="block mt-3 font-inter font-normal md:text-xl">A limited collection of private ridge villas, where ownership <br /> meets elevation, privacy, and uninterrupted views.</i>
                </div>
            </div>
        </div>
    )
}

export default Hero