"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AltairaLogo1 from "../../../public/images/logo/AltairaLogo1.webp";
import { Menu } from "lucide-react";
import Modal from "./Modal";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  const isStaticBlackPage = pathname === "/privacypolicy" || pathname === "/terms-and-conditions" || pathname === "/refunds";

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`w-full h-20 fixed left-0 z-50 flex items-center justify-between p-5 md:p-14 ${isStaticBlackPage ? "bg-black" : scrolled  ? "bg-gradient-to-t from-black/0 via-black/40 to-black backdrop-blur-xl shadow-lg h-[15vh] md:h-[10vh]" : "bg-transparent h-[15vh] md:h-[10vh]"}`}>
      <div>
        <Link href="/"><Image
          src={AltairaLogo1}
          alt="logo"
          className="w-[40vw] h-[10vh] md:w-[20vw] md:h-[10vh] lg:w-[20vw] lg:h-[10vh] xl:w-[10vw] cursor-pointer"
        /></Link>
      </div>

      <button
        onClick={handleMobileMenu}
        className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition"
        aria-label="Open menu"
      >
        <Menu size={28} />
      </button>

      {mobileMenu && (
        <Modal onClose={() => setMobileMenu(false)} />
      )}

      <div
        className="hidden lg:block text-white"
      >
        <div className="flex items-center justify-between gap-10">
          <Link href="/">
            <span className="text-lg">Home</span>
          </Link>
          <Link href="/resort">
            <span className="text-lg">Resort</span>
          </Link>
          <Link href="/residences">
            <span className="text-lg">Residences</span>
          </Link>
          <Link href="/timeline">
            <span className="text-lg">Timeline</span>
          </Link>
          <Link href="/faq">
            <span className="text-lg">Faq's</span>
          </Link>
          <Link href="/contact">
            <span className="text-lg">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
