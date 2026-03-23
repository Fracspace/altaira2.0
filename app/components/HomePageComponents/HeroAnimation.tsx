"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import Hls from "hls.js";

gsap.registerPlugin(ScrollTrigger);

export default function HeroAnimation() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textAnimRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [showVideo, setShowVideo] = useState(false);

  // ✅ delay video for LCP safety
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // ✅ fade video when ready
  useEffect(() => {
    if (!showVideo || !videoRef.current) return;

    const video = videoRef.current;
    const videoSrc =
      "https://duixj37yn5405.cloudfront.net/hls-videos/b795a08b-216f-4cce-899c-1e9382562d13/1080p/index.m3u8";

    let hls: Hls | null = null;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari
      video.src = videoSrc;
      video.addEventListener("loadeddata", () => {
        video.play().catch(() => {});
        gsap.to(video, { opacity: 1, duration: 1.2 });
      });
    } else if (Hls.isSupported()) {
      hls = new Hls({ debug: true });

      hls.loadSource(videoSrc);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
        gsap.to(video, { opacity: 1, duration: 1.2 });
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        console.error("HLS ERROR:", data);
      });
    }

    return () => {
      if (hls) hls.destroy();
    };
  }, [showVideo]);
  // useEffect(() => {

  //   if (!videoRef.current) return;

  //   videoRef.current.oncanplay = () => {
  //     gsap.to(videoRef.current, {
  //       opacity: 1,
  //       duration: 1.2,
  //       ease: "power2.out"
  //     });
  //   };

  // }, [showVideo]);

  // ✅ GSAP scroll animation
  useGSAP(() => {
    if (!heroRef.current || !textAnimRef.current) return;

    gsap.to(textAnimRef.current, {
      opacity: 0,
      y: -80,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom 50%",
        scrub: true
      }
    });
  }, []);

  return (
    <div ref={heroRef} className="absolute inset-0 z-[0]">
      {showVideo && (
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-0"
          // src="https://duixj37yn5405.cloudfront.net/hls-videos/b795a08b-216f-4cce-899c-1e9382562d13/1080p/index.m3u8"
          autoPlay
          muted
          loop
          playsInline
        />
      )}

      {/* invisible GSAP target */}
      <div ref={textAnimRef} />
    </div>
  );
}
