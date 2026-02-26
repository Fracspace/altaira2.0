import HomePageClient from "./components/HomePageComponents/HomePageClient";

export const metadata = {
  title: "Altaira Sri Lanka | Luxury Resort Investment Opportunity",
  description:
    "Discover Altaira — a premium hilltop luxury resort in Sri Lanka offering fractional ownership, high rental yields, and world-class hospitality experiences.",
  keywords: [
    "Altaira Sri Lanka",
    "luxury resort investment Sri Lanka",
    "fractional ownership Sri Lanka",
    "hilltop villas Sri Lanka",
    "resort investment opportunity"
  ],
  openGraph: {
    title: "Altaira Sri Lanka | Above the Clouds",
    description:
      "Own a share in Altaira’s luxury resort ecosystem with managed rental income and premium hilltop living.",
    url: "https://altaira.lk/",
    siteName: "Altaira",
    type: "website"
  }
};

export default function HomePage() {
  return <HomePageClient />;
}
