import timelineHeroImage from "../../../public/images/timeline/timelineHeroImage.webp"
import Image from "next/image"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const Hero = () => {
    return (
        <div className="min-h-screen w-full relative">
            <Image src={timelineHeroImage} className="object-cover" fill priority alt="timeline hero image" />
            <div className="absolute w-full flex items-center justify-center text-center inset-0 px-5">
                <div className="text-white flex flex-col items-center justify-center max-w-4xl">
                    <h2 className="font-cormorant font-bold text-2xl md:text-6xl">Project Timeline</h2>
                    <i className="mt-5 text-lg md:text-xl font-inter">Watch Altaira rise from vision to reality</i>
                </div>
            </div>
        </div>
    )
}

export default Hero