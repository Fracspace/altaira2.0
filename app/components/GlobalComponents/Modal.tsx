"use client";
import Image from "next/image";
import AltairaLogo from "../../../public/images/logo/AltairaLogo.webp";
import { X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

type ModalProps = {
  onClose: () => void;
}

const Modal = ({ onClose }: ModalProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (href: string) => {
    if (pathname === href) {
      onClose();
      return;
    } else {
      router.push(href);
      onClose();
    }
  }

  return (
    <div className="fixed h-20 inset-0 z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute right-0 top-0 h-screen w-full bg-[#244936]">
        <div className="w-full md:h-[10vh] flex items-center justify-between p-5 md:p-14">
          <Image
            onClick={() => handleNavigation("/")}
            src={AltairaLogo}
            alt="altaira logo"
            className="w-[20vw] h-[10vh] md:w-[15vw] md:h-[10vh] lg:w-[6vw] lg:h-[10vh] cursor-pointer"
          />

          <button
            onClick={onClose}
            className="md:rounded-lg text-white flex items-center gap-2 px-6 py-2 cursor-pointer"
          >
            <span className="hidden md:block"></span>
            <X size={24} />
          </button>
        </div>

        <ul className="px-5 md:px-14 pt-5 space-y-8 text-white text-lg">
          <li onClick={() => handleNavigation("/")} className="cursor-pointer">Home</li>
          <li onClick={() => handleNavigation("/about")} className="cursor-pointer">About Altaira</li>
          <li onClick={() => handleNavigation("/resort")} className="cursor-pointer">Resort</li>
          <li onClick={() => handleNavigation("/residences")} className="cursor-pointer">Residences</li>
          <li onClick={() => handleNavigation("/experiences")} className="cursor-pointer">Experiences</li>
          <li onClick={() => handleNavigation("/timeline")} className="cursor-pointer">Timeline</li>
          <li onClick={() => handleNavigation("/blogs")} className="cursor-pointer">Blogs</li>
          <li onClick={() => handleNavigation("/contact")} className="cursor-pointer">Contact</li>
          <li onClick={() => handleNavigation("/faq")} className="cursor-pointer">FAQ's</li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
