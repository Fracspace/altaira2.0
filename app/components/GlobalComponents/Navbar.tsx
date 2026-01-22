"use client";
import { useEffect, useState } from "react"
import Link from "next/link";
import Image from "next/image";
import AltairaLogo from "../../../public/images/logo/AltairaLogo.webp"
import AltairaLogo1 from "../../../public/images/logo/AltairaLogo1.webp"
import { Menu } from 'lucide-react';
// import { useRouter } from "next/navigation";
import Modal from "./Modal";

const Navbar = () => {
    // const router = useRouter();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    //const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);
    // const handleOpenHamburgerMenu = () => {
    //     setOpenHamburgerMenu(prev => !prev);
    // }
    const handleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    }
    useEffect(() => {
        const handleScroll = () => {
            // const scrollTop = window.scrollY;
            // const totalHeight = document.body.scrollHeight - window.innerHeight
            // const percentage = totalHeight * 0.1;
            // if (scrollTop > percentage) {
            //     setScrolled(true);
            // } else {
            //     setScrolled(false);
            // }
            setScrolled(window.scrollY > 0)
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <nav className={`w-full h-20 text-white fixed left-0 z-50 flex items-center justify-between p-5 md:p-14 ${scrolled ? "bg-gradient-to-t from-black/0 via-black/40 to-black backdrop-blur-xl shadow-lg h-[15vh] md:h-[10vh]" : "bg-transparent h-[15vh] md:h-[10vh]"}`}>
            <div>
                {/* {scrolled ? <Link href="/">
                    <Image
                        src={AltairaLogo1}
                        alt="logo1"
                        className={`${scrolled ? "h-[10vh] w-[40vw]" : "w-[30vw] h-[10vh]"} md:w-[15vw] md:h-[10vh] lg:w-[10vw] lg:h-[10vh] cursor-pointer`}
                    />
                </Link> : <Link href="/"><Image
                    src={AltairaLogo1}
                    alt="logo"
                    className={`${scrolled ? "h-[10vh] w-[40vw]" : "w-[40vw] h-[10vh]"} md:w-[15vw] md:h-[10vh] lg:w-[10vw] lg:h-[10vh] cursor-pointer`}
                /></Link>} */}
                <Link href="/"><Image
                    src={AltairaLogo1}
                    alt="logo"
                    className={`${scrolled ? "h-[10vh] w-[40vw]" : "w-[40vw] h-[10vh]"} md:w-[15vw] md:h-[10vh] lg:w-[10vw] lg:h-[10vh] cursor-pointer`}
                /></Link>
            </div>

            {mobileMenu &&
                (
                    <Modal onClose={() => setMobileMenu(false)} />
                )}

            <span onClick={() => setMobileMenu(!mobileMenu)} className="md:rounded-lg text-white flex items-center gap-2 hover:bg-[#C6A667] px-6 py-2 cursor-pointer">
                <span className="block md:hidden">  <Menu size={25} /></span>
            </span>

            <div className="hidden md:block text-white">
                <div className="flex items-center justify-between gap-10">
                    <Link href="/"><span className="text-lg">Home</span></Link>
                    <Link href="/resort"><span className="text-lg">Resort</span></Link>
                    <Link href="/residences"><span className="text-lg">Residences</span></Link>
                    <Link href="/timeline"><span className="text-lg">Timeline</span></Link>
                    <Link href="/contact"><span className="text-lg">Contact</span></Link>
                    {/* <Link href="/agents"><span className="text-lg">Agents</span></Link> */}
                </div>
            </div>

            {/* mobile screen */}
            <div className={`md:hidden absolute top-20 left-0 w-full bg-black/80 backdrop-blur-lg py-6 flex flex-col items-center gap-6 text-xl animate-slideDown ${mobileMenu ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <Link href="/" onClick={handleMobileMenu}><span className="text-lg">Home</span></Link>
                <Link href="/about" onClick={handleMobileMenu}><span className="text-lg">About</span></Link>
                <Link href="/resort" onClick={handleMobileMenu}><span className="text-lg">Resort</span></Link>
                <Link href="/adventurePark" onClick={handleMobileMenu}><span className="text-lg">Adventure Park</span></Link>
                <Link href="/residences" onClick={handleMobileMenu}><span className="text-lg">Residences</span></Link>
            </div>
        </nav>
    )
}

export default Navbar