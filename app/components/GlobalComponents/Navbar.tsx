"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AltairaLogo1 from "../../../public/images/logo/AltairaLogo1.webp";
import { Menu } from "lucide-react";
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
          className={`${scrolled ? "h-[10vh] w-[40vw]" : "w-[40vw] h-[10vh]"} md:w-[20vw] md:h-[10vh] lg:w-[10vw] lg:h-[10vh] ipadProImageWidth cursor-pointer`}
        /></Link>
      </div>

      {/* laptop screen */}
      {/* {openHamburgerMenu &&
                (
                    <Modal onClose={() => setOpenHamburgerMenu(false)} />
                )} */}

      {/* <span onClick={() => setOpenHamburgerMenu(!openHamburgerMenu)} className="md:rounded-lg text-white flex items-center gap-2 hover:bg-[#C6A667] md:border md:border-white px-6 py-2 cursor-pointer">
                <span className="hidden md:block"> Menu</span> <Menu size={20} />
            </span> */}

      {/* mobile menu button */}
      <div className="lg:hidden">
        <Menu
          size={28}
          className="text-white cursor-pointer"
          onClick={() => setMobileMenu(true)}
        />
      </div>

      <div
        className={`hidden lg:block text-black ${scrolled ? "text-white" : "text-black"}`}
      >
        <div className="flex items-center justify-between gap-10">
          <Link href="/">
            <span className="text-lg text-white">Home</span>
          </Link>
          <Link href="/resort">
            <span className="text-lg text-white">Resort</span>
          </Link>
          <Link href="/residences">
            <span className="text-lg text-white">Residences</span>
          </Link>
          <Link href="/timeline">
            <span className="text-lg text-white">Timeline</span>
          </Link>
          <Link href="/contact">
            <span className="text-lg text-white">Contact</span>
          </Link>
        </div>
      </div>

      {/* mobile screen */}
      {/* mobile modal menu */}
      {mobileMenu && (
        <Modal onClose={() => setMobileMenu(false)} />
      )}

      {mobileMenu && (
        <div className="flex flex-col items-center gap-6 text-xl text-white">
          <Link href="/" onClick={() => setMobileMenu(false)}>Home</Link>
          <Link href="/about" onClick={() => setMobileMenu(false)}>About</Link>
          <Link href="/resort" onClick={() => setMobileMenu(false)}>Resort</Link>
          <Link href="/adventurePark" onClick={() => setMobileMenu(false)}>Adventure Park</Link>
          <Link href="/residences" onClick={() => setMobileMenu(false)}>Residences</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
