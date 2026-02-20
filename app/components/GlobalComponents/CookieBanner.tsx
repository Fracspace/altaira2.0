

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    window.dispatchEvent(new Event("cookie-consent-granted"));
    setShow(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      className="
        fixed bottom-4 right-4 left-4 sm:left-auto
        sm:max-w-md z-50
        animate-[cookieSlide_0.6s_ease-out]
      "
    >
      <div
        className="
          rounded-2xl
          bg-black/80 backdrop-blur-xl
          border border-white/10
          shadow-[0_20px_60px_rgba(0,0,0,0.6)]
          p-5 text-white
        "
      >
        {/* Description */}
        <p className="text-sm text-white/80 leading-relaxed">
          Altaira uses cookies and similar technologies to enhance your browsing
          experience, analyze site traffic, and understand user behavior. By
          clicking <span className="text-white">Accept</span>, you consent to
          analytics cookies.
        </p>

        {/* Links */}
        <div className="mt-2 text-xs text-white/60">
          Read our{" "}
          <Link href="/privacypolicy" className="underline hover:text-white">
            Privacy Policy
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-5 justify-end">
          <button
            onClick={reject}
            className="
              px-4 py-2 text-sm rounded-lg
              border border-white/20
              hover:bg-white/10
              transition-all duration-300
            "
          >
            Reject
          </button>

          <button
            onClick={accept}
            className="
              px-5 py-2 text-sm rounded-lg
              bg-[#AD9273]
              hover:bg-[#9d8468]
              text-black font-medium
              transition-all duration-300
              shadow-lg
            "
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
