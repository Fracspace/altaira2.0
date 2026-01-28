"use client"
import AltairaLogo1 from "../../../public/images/logo/AltairaLogo1.webp"
import Image from "next/image"
import { useRouter } from "next/navigation"

import Link from "next/link"

const linkClasses = "cursor-pointer hover:text-[#C6A667]"

const contactClasses = "hover:text-[#C6A667]"

const Footer = () => {
    const router = useRouter();
    return (
        <div className='bg-[#0E2019] text-white p-10'>
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr_1fr] gap-10">
                <div className="flex flex-col gap-5">
                    <Image onClick={() => router.push("/")} src={AltairaLogo1} alt="altaira logo" className="md:w-[20vw] md:h-[10vh] lg:w-[10vw] lg:h-[10vh] h-[10vh] w-[40vw] cursor-pointer" />
                    <p className="font-montserrat leading-loose">Altaira is a luxury hilltop resort and residence destination set nearly 2,000 feet above sea level. Designed for stillness, discovery, and elevated living, Altaira blends nature, wellness, and adventure into one timeless experience.</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h2 className="font-montserrat font-semibold text-xl">Quick Links</h2>
                    <ul className="flex flex-col gap-3 text-base">
                        <Link href="/" className={linkClasses}>Home</Link>
                        <Link href="/resort" className={linkClasses}>Resort</Link>
                        <Link href="/residences" className={linkClasses}>Residences</Link>
                        <Link href="/timeline" className={linkClasses}>Timeline</Link>
                        <Link href="/contact" className={linkClasses}>Contact</Link>
                        {/* <Link href="/agents" className={linkClasses}>Agents</Link> */}
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <h2 className="font-montserrat font-semibold text-xl">Contact</h2>
                    <ul className="flex flex-col gap-3 cursor-pointer">
                        <li className={contactClasses} onClick={() => window.open("mailto:altaira.lk@fracspace.com")}>Email: altaira.lk@fracspace.com</li>
                        <li className={contactClasses} onClick={() => window.open("tel:+919880626111")}>Phone: +91 9880626111</li>
                        <li onClick={() => router.push("/privacypolicy")} className={contactClasses}>Privacy Policy</li>
                        <li onClick={()=>router.push("/terms-and-conditions")} className={contactClasses}>Terms of Service</li>
                        <li onClick={()=>router.push("/refunds")} className={contactClasses}>Refund Policy</li>
                    </ul>
                </div>
                {/* <div className="md:h-[40vh] h-[50vh] responsiveMapWidth responsiveMapHeight lg:h-auto">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7918.357570206037!2d80.3310226383134!3d7.1052682180792655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae30efe5a2e1cab%3A0x66e4b8966396e2ea!2sBulathkohupitiya%2C%20Sri%20Lanka!5e0!3m2!1sen!2sin!4v1764817133800!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                        allowFullScreen={true}
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Location Map"
                    />
                </div> */}
            </div>
        </div>
    )
}

export default Footer