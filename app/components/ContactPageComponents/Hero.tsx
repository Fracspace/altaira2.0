"use client";

import Image from "next/image";

import contactImg from "../../../public/images/contact/contactImg.webp";
// import gsap from "gsap"
// import ScrollTrigger from "gsap/ScrollTrigger"
// import { useRef } from "react"
// import { useGSAP } from "@gsap/react"

// gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  // const heroSectionRef = useRef<HTMLDivElement>(null);

    // useGSAP(()=>{
    //     if(!heroSectionRef.current) return;
    //     const texts = heroSectionRef.current.querySelectorAll(".hero-text");
    //     gsap.from(texts,{
    //         opacity:0, 
    //         duration:1.3,
    //         y:60,
    //         stagger:0.4,
    //         ease:"power3.out"
    //     })
    // },[])
    return (
        <div className="relative min-h-screen w-full">
            <Image src={contactImg} fill priority alt="contact img" className="object-cover" />
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <div className="absolute inset-0 z-20 w-full flex items-center justify-center text-center px-5">
                <div className="text-white flex flex-col items-center justify-center max-w-4xl">
                    <h2 className="hero-text font-cormorant text-3xl md:text-6xl lg:text-5xl"><span className="mr-1">Get</span> <span className="mr-1">in</span> Touch</h2>
                    <i className="hero-text pt-4 text-md md:text-lg 2xl:text-2xl font-inter">Begin your journey to Altaira</i>
                </div>
            </div>
        </div>
      

  );
};

export default Contact;
