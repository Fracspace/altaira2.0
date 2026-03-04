"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!window.gtag) return;

    const query = searchParams.toString();
    const url = query ? `${pathname}?${query}` : pathname;

    window.gtag("config", "G-QYEB5GH7NN", {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return null;
}
