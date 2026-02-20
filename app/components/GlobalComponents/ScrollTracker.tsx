"use client";

import { useEffect, useRef } from "react";
import { TrackEvent } from "./TrackEvent";

export default function ScrollTracker() {
  const triggered = useRef<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percent = Math.round((scrollTop / docHeight) * 100);

      const checkpoints = [25, 50, 75, 90];

      checkpoints.forEach((point) => {
        if (percent >= point && !triggered.current.includes(point)) {
          triggered.current.push(point);

          TrackEvent(
            "scroll_depth",
            "Engagement",
            `${point}% - ${window.location.pathname}`
          );
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
