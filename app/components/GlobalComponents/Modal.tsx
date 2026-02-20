"use client";
import Image from "next/image";
import AltairaLogo1 from "../../../public/images/logo/Altaira1Logo.webp";
import { X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import Link from "next/link";

const navItems = [
  { name: "Home", to: "/" },
  { name: "Resort", to: "/resort" },
  { name: "Residences", to: "/residences" },
  { name: "Timeline", to: "/timeline" },
  { name: "FAQ", to: "/faq" },
  { name: "Contact", to: "/contact" }
];

type ModalProps = {
  onClose: () => void;
};

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
  };

  return (
    <div className="fixed h-20 inset-0 z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute right-0 top-0 h-screen w-full bg-[#244936]">
        <div className="w-full md:h-[10vh] flex items-center justify-between p-5 md:p-14">
          <Link
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/");
            }}
            href="/"
          >
            <Image
              src={AltairaLogo1}
              alt="altaira logo"
              className=" w-40
        sm:w-48
        md:w-56
        lg:w-60
        xl:w-64
        h-auto
        cursor-pointer"
            />
          </Link>
          <button
            onClick={onClose}
            className="md:rounded-lg text-white flex items-center justify-between gap-2 cursor-pointer"
          >
            <span className="hidden md:block"></span>
            <X size={24} />
          </button>
        </div>

        <ul className="px-5 md:px-14 pt-5 space-y-8 text-white text-lg">
          {navItems.map(({ to, name }) => {
            return (
              <li key={to}>
                <Link
                  href={to}
                  className="cursor-pointer"
                  onClick={() => handleNavigation(to)}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
