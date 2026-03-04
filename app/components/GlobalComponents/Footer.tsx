"use client";
import AltairaLogo1 from "../../../public/images/logo/Altaira1Logo.webp";
import Image from "next/image";

import Link from "next/link";

const linkClasses = "cursor-pointer hover:text-[#AD9273]";

const contactClasses = "hover:text-[#AD9273]";

const Footer = () => {
  return (
    <div className="bg-[#221E1F] text-white py-10 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr_1fr] gap-10">
          <div className="flex flex-col gap-5">
            <Link href="/">
              <Image
                src={AltairaLogo1}
                alt="altaira logo"
                className="w-40
        sm:w-48
        md:w-56
        lg:w-60
        xl:w-64
        h-auto
        cursor-pointer"
              />
            </Link>
            <p className="font-inter leading-loose">
              Altaira is a luxury hilltop resort and residence destination set
              nearly 2,000 feet above sea level. Designed for stillness,
              discovery, and elevated living, Altaira blends nature, wellness,
              and adventure into one timeless experience.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-inter font-semibold text-xl">Quick Links</h2>
            <ul className="flex flex-col gap-3 text-base">
              <Link href="/" className={linkClasses}>
                Home
              </Link>
              <Link href="/resort" className={linkClasses}>
                Resort
              </Link>
              <Link href="/residences" className={linkClasses}>
                Residences
              </Link>
              <Link href="/timeline" className={linkClasses}>
                Timeline
              </Link>
              <Link href="/faq" className={linkClasses}>
                FAQ
              </Link>
              <Link href="/contact" className={linkClasses}>
                Contact
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-inter font-semibold text-xl">Contact</h2>
            <ul className="flex flex-col gap-3 cursor-pointer">
              <li className={contactClasses}>
                <a href="mailto:altaira.lk@fracspace.com">
                  Email: altaira.lk@fracspace.com
                </a>
              </li>
              <li className={contactClasses}>
                <a href="tel:+919880626111">
                  Phone: +91 9880626111,
                  <br /> +94-76031 2345
                </a>
              </li>
              <li className={contactClasses}>
                <Link href="/privacypolicy">Privacy Policy</Link>
              </li>
              <li className={contactClasses}>
                <Link href="/terms-and-conditions">Terms of Service</Link>
              </li>
              <li className={contactClasses}>
                <Link href="/refunds">Refund Policy</Link>
              </li>
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
        <hr className="w-full mt-10 hidden md:block" />
        <div className="flex flex-col gap-5 md:flex-row items-start md:items-center mt-5 justify-between">
          <h2 className="font-inter">
            © Copyright 2026, All Rights Reserved by Altaira
          </h2>
          <p className="font-inter">A Fracspace Development</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
