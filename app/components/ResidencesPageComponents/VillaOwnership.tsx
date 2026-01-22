"use client"
import gsap from "gsap"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"

import villaOwnershipImage from "../../../public/images/residences/villaOwnershipImage.webp"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

import OrganicWhiteBackgroundImg2 from "../../../public/images/residences/OrganicWhiteBackgroundImg1.webp"

const VillaOwnership = () => {
    const villaOwnershipRef = useRef<HTMLDivElement>(null);
    const villaImgRef = useRef<HTMLImageElement | null>(null);

    useGSAP(() => {
        if (!villaOwnershipRef.current) return;
        const items = gsap.utils.toArray<HTMLElement>(villaOwnershipRef.current.querySelectorAll(".animate-item"));
        const lateText = villaOwnershipRef.current?.querySelector(".late-text")
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: villaOwnershipRef.current,
                start: "top bottom",
                once: true,
            }
        });
        tl.from(items, {
            opacity: 0,
            y: 50,
            stagger: 0.15
        })
            .from(lateText, {
                opacity: 0,
                y: 70,
                duration: 1,
            }, "+=0.4");

        const villaImg = villaImgRef.current;
        if (!villaImg) return;

        const enter = () => {
            gsap.to(villaImg, {
                scale: 1.15,
                duration: 0.6,
                ease: "power3.out"
            })
        }

        const leave = () => {
            gsap.to(villaImg, {
                scale: 1,
                duration: 0.6,
                ease: "power3.out"
            })
        }

        villaImg.addEventListener("mouseenter", enter)
        villaImg.addEventListener("mouseleave", leave)
        return () => {
            villaImg.removeEventListener("mouseenter", enter)
            villaImg.removeEventListener("mouseleave", leave)
        }
    }, { scope: villaOwnershipRef })


    return (
        <div ref={villaOwnershipRef}>
            <div className="p-10">
                <div className="flex flex-col items-center text-center gap-5">
                    <p className="para animate-item font-inter text-center text-[#AD9273]">PURCHASE A VILLA</p>
                    <h2 className="text-xl animate-item font-cormorant md:text-3xl font-bold text-center">Villa Ownership at Altaira</h2>
                    <p className="para animate-item md:w-[70vw] leading-relaxed">A rare opportunity to own a private villa within a fully integrated luxury hilltop resort. Altaira Private Residences combine the independence of ownership with lifetime access to resort experiences, wellness, dining, and landscapes - all set high above the valley.</p>
                    <div className="overflow-hidden w-full">
                        <Image ref={villaImgRef} src={villaOwnershipImage} alt="villa img" className="w-full animate-item rounded-md object-cover md:h-[80vh] h-[50vh]" />
                    </div>
                    <h2 className="font-cormorant late-text text-3xl md:text-6xl text-[#67777E]">More than a villa. A way of <br /> <i className="text-[#A3A4A8]">living above the valley.</i></h2>
                </div>
            </div>
        </div>
    )
}

export default VillaOwnership