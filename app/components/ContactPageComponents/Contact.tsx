"use client"

import Image from "next/image"

import contactImg from "../../../public/images/contact/contact.webp"
import gsap from "gsap"

import { useGSAP } from "@gsap/react"


const Contact = () => {
    return (
        <div>
            <div className="relative">
                <Image src={contactImg} alt="contact img" className="object-cover min-h-screen w-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 flex flex-col gap-3 -translate-y-1/2">
                    <h2 className="font-serif text-white text-xl font-bold md:text-5xl">Get in Touch</h2>
                    <p><em className="text-white text-xl font-sans">Begin your journey to Altaira</em></p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
                <div className="bg-white rounded-md">
                    <h2 className="font-sans text-xl">I'm interested in</h2>
                    <p className="rounded"></p>
                </div>
            </div>
        </div>
    )
}

export default Contact