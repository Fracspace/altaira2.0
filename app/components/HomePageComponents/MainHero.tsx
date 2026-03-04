import Image from "next/image";
import dynamic from "next/dynamic";
import resortImg from "../../../public/images/homepage/heroBg.webp";

// client animation layer
const HeroAnimation = dynamic(() => import("./HeroAnimation"), {
  ssr: false
});

export default function MainHero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* ✅ LCP poster image */}
      <Image
        src={resortImg}
        alt="Altaira hilltop resort"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* text content (SEO safe) */}
      <div className="relative z-[2] w-full md:max-w-5xl md:w-[60vw] mx-auto text-center px-4">
        <h2 className="font-cormorant text-3xl lg:text-5xl text-white leading-[1.3]">
          Above The Clouds. Rooted in Nature.
        </h2>
        <h3 className="font-inter text-md md:text-lg 2xl:text-2xl text-white italic pt-4">
          A hilltop destination where nature, stay, and experience come together
        </h3>
      </div>

      {/* 🎬 client video + gsap */}
      <HeroAnimation />
    </section>
  );
}
