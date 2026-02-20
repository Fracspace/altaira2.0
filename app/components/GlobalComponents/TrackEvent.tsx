import React from "react";

export const GA_MEASUREMENT_ID = "G-QYEB5GH7NN";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const TrackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  window.gtag?.("event", action, {
    event_category: category,
    event_label: label,
    value
  });
};
