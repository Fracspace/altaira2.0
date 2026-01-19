// "use client"

// import Image from "next/image";
// import heroImg from "../public/images/waterfall.webp";
// import { useRef } from "react";
// import gsap from "gsap";

// import adventureZone from "../public/images/experiences/adventureZone.webp"
// import cloudWalkways from "../public/images/experiences/cloudWalkways.webp"
// import infinityPool from "../public/images/experiences/infinityPool.webp"

// import { useGSAP } from "@gsap/react";

// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger)

// export default function Home() {
//   const boxRef = useRef<HTMLDivElement>(null);
//   //const hoverTween = useRef<gsap.core.Tween | null>(null);

//   const pulseRef = useRef<HTMLDivElement>(null);

//   const skyZiplineRef = useRef<HTMLDivElement>(null);

//   const suspendedPathsRef = useRef<HTMLDivElement>(null);
//   const cloudWalkwaysRef = useRef<HTMLDivElement>(null);

//   const infinityPoolRef = useRef<HTMLDivElement>(null);

//   const worldOfExperiencesRef = useRef<HTMLDivElement>(null);

//   const addHoverZoom = (ref: React.RefObject<HTMLDivElement | null>) => {
//     if (!ref.current) return;
//     const image = ref.current.querySelector(".image-wrap img");
//     if (!image) return;

//     gsap.set(image, { scale: 1.15 });

//     const tl = gsap.timeline({ paused: true });

//     tl.to(image, {
//       scale: 1.5,
//       duration: 1.2,
//       // ease:"power3.out"
//     })

//     const el = ref.current;

//     const onEnter = () => {
//       tl.play();
//     }

//     const onLeave = () => {
//       tl.reverse();
//     }

//     el.addEventListener("mouseenter", onEnter);
//     el.addEventListener("mouseleave", onLeave);

//     //clean up function

//     return () => {
//       el.removeEventListener("mouseenter", onEnter)
//       el.removeEventListener("mouseleave", onLeave)
//       tl.kill();
//     }
//   }

//   const animateCard = (ref: React.RefObject<HTMLDivElement | null>) => {
//     if (!ref.current) return;
//     const image = ref.current.querySelector(".image-wrap");
//     const content = ref.current.querySelector(".content");
//     if (!image || !content) return;
//     gsap.fromTo(image, {
//       opacity: 0,
//       y: 30,
//       scale: 1.05,
//     }, {
//       opacity: 1,
//       duration: 1,
//       scale: 1,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: ref.current,
//         start: "top 80%"
//       }
//     })

//     gsap.fromTo(content, {
//       opacity: 0,
//       y: 25,
//       filter: "blur(6px)"
//     }, {
//       opacity: 1,
//       duration: 0.8,
//       filter: "blur(0px)",
//       y: 0,
//       ease: "power3.out",
//       delay: 0.2,
//       scrollTrigger: {
//         trigger: ref.current,
//         start: "top 80%"
//       }
//     })
//   }

//   useGSAP(() => {
//     const ctx = gsap.context(() => {

//       if (boxRef.current) {
//         const tl = gsap.timeline();
//         gsap.set(boxRef.current, {
//           opacity: 0,
//           y: 20,
//           scale: 0.98,
//           filter: "blur(8px)"
//         });

//         tl.to(boxRef.current, {
//           duration: 1,
//           opacity: 1.4,
//           y: 0,
//           filter: "blur(0px)",
//           scale: 1,
//           ease: "power3.out"
//         });
//       }

//       if (pulseRef.current) {
//         gsap.fromTo(pulseRef.current.children, {
//           opacity: 0,
//           y: 40,
//           filter: "blur(6px)"
//         }, {
//           opacity: 1,
//           y: 0,
//           filter: "blur(0px)",
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: pulseRef.current,
//             start: "top 80%",
//           }
//         })
//       }

//       if (worldOfExperiencesRef.current) {
//         gsap.fromTo(worldOfExperiencesRef.current.children, {
//           opacity: 0,
//           y: 40,
//           filter: "blur(6px)"
//         }, {
//           opacity: 1,
//           y: 0,
//           filter: "blur(0px)",
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: worldOfExperiencesRef.current,
//             start: "top 80%",
//           }
//         })
//       }

//       if (skyZiplineRef.current) {
//         gsap.fromTo(skyZiplineRef.current.children, {
//           opacity: 0,
//           y: 40,
//           filter: "blur(6px)"
//         }, {
//           opacity: 1,
//           y: 0,
//           filter: "blur(0px)",
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: skyZiplineRef.current,
//             start: "top 80%",
//           }
//         })
//       }

//       animateCard(suspendedPathsRef);
//       animateCard(cloudWalkwaysRef);
//       animateCard(infinityPoolRef);

//       addHoverZoom(suspendedPathsRef)
//       addHoverZoom(cloudWalkwaysRef)
//       addHoverZoom(infinityPoolRef)
//     });

//     return () => ctx.revert();  //cleanup funtion , cleans side effects
//   }, []);

//   // const handleMouseEnter = () => {
//   //   if (!boxRef.current) return;
//   //   if (hoverTween.current) {
//   //     hoverTween.current.kill();
//   //   }

//   //   hoverTween.current = gsap.to(boxRef.current, {
//   //     duration: 0.3,
//   //     y: -50,
//   //     scale: 1.05,
//   //     ease: "power2.out"
//   //   })
//   // }
//   // const handleMouseLeave = () => {
//   //   if (!boxRef.current) return;
//   //   if (hoverTween.current) {
//   //     hoverTween.current.kill();
//   //   }

//   //   hoverTween.current = gsap.to(boxRef.current, {
//   //     duration: 0.3,
//   //     y: 0,
//   //     scale: 1,
//   //     ease: "power2.in"
//   //   })
//   // }

//   return (
//     <div className="space-y-40 flex flex-col items-center">
//       <div>
//         <div className="relative">
//           <Image src={heroImg} alt="hero" className="w-full min-h-screen"></Image>
//           <div ref={boxRef} className="absolute text-white flex flex-col gap-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//             <h2 className="text-4xl">Where the Hills Whisper Wealth</h2>
//             <p className="text-xl">A cinematic luxury escape</p>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div ref={pulseRef} className="flex flex-col gap-5">
//           <h2 className="text-4xl">Pulse of the Mountain</h2>
//           <p className="text-xl">Where luxury meets adrenaline. Experience the raw power of nature.</p>
//           <div className="flex flex-col md:flex-row gap-10">
//             <div className="rounded-md w-[30vw] h-[30vh] shadow-xl border border-red-200"></div>
//             <div className="flex flex-col gap-3">
//               <h2 className="text-3xl">ATV Jungle Trails</h2>
//               <p className="text-xl">Navigate rugged terrains through the dense rainforest on our high-performance ATVs.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div ref={skyZiplineRef} className="flex flex-col gap-5">
//           <div className="flex flex-col md:flex-row gap-10">
//             <div className="flex flex-col gap-3">
//               <h2 className="text-4xl">Sky Zip Line</h2>
//               <p className="text-xl">Soar above the canopy on one of the longest zip lines in the region.</p>
//             </div>
//             <div>
//               <Image src={heroImg} alt="normal img" className="w-[40vw] h-[30vh]"></Image>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div ref={worldOfExperiencesRef}>
//         <div className="flex flex-col items-center p-10 gap-5">
//           <h2 className="text-3xl">A World of Experiences, Shaped by the Land</h2>
//           <p className="text-xl">From calm moments above the valley to adrenaline within the forest, experiences at Altaira unfold at your pace. Some are meant to quicken the pulse, others to slow time - all shaped by the land that surrounds you. Each moment emerges naturally, guided by elevation, forest paths, and open skies.</p>
//         </div>
//         <div className="flex flex-col md:flex-row p-10 gap-5">
//           <div ref={suspendedPathsRef} className="relative overflow-hidden">
//             <div className="image-wrap">
//               <Image src={adventureZone} alt="adventure zone" className="w-[30vw] object-cover h-[120vh]" />
//             </div>
//             <div className="absolute text-white flex flex-col gap-3 bottom-0 left-10 content">
//               <h2>Suspended paths above the valley</h2>
//               <p>Cloud walkways</p>
//             </div>
//           </div>
//           <div className="flex flex-col gap-5">
//             <div ref={cloudWalkwaysRef} className="relative overflow-hidden">
//               <div className="image-wrap">
//                 <Image src={cloudWalkways} alt="cloud walkways" className="w-[70vw] object-cover h-[60vh]" />
//               </div>
//               <div className="absolute text-white flex flex-col gap-3 bottom-0 left-10 content">
//                 <h2>Thrill the heights, embrace the calm</h2>
//                 <p>adventure zone</p>
//               </div>
//             </div>
//             <div ref={infinityPoolRef} className="relative overflow-hidden">
//               <div className="image-wrap">
//                 <Image src={infinityPool} alt="infinity pool" className="w-[70vw] object-cover h-[60vh]" />
//               </div>
//               <div className="absolute text-white flex flex-col gap-3 bottom-0 left-10 content">
//                 <h2>Thrill the heights, embrace the calm</h2>
//                 <p>adventure zone</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div >
//   );
// }

import Hero from "./components/HomePageComponents/Hero"

export default function HomePage(){
  return (
    <div>
      <Hero/>
    </div>
  )
}
