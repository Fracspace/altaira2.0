"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function AnalyticsLoader() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    const checkConsent = () => {
      const stored = localStorage.getItem("cookie-consent");
      setConsent(stored);
    };

    checkConsent();

    window.addEventListener("cookie-consent-updated", checkConsent);
    return () =>
      window.removeEventListener("cookie-consent-updated", checkConsent);
  }, []);

  if (consent !== "accepted") return null;


  return (
    <>
      {/* Google Analytics */}

      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-QYEB5GH7NN`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());

              gtag('config', 'G-QYEB5GH7NN', {
                linker: {
                  domains: ['altaira.in', 'altaira.lk']
                }
              });
            `}
        </Script>
      </>

      {/* Microsoft Clarity */}

      <Script id="clarity" strategy="afterInteractive">
        {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;
              t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vi4191b7r3");
          `}
      </Script>
    </>
  );
}
