import { useState } from "react";
import { ChevronLeft,ChevronRight } from 'lucide-react';
import Image from "next/image";
const images = [
  "/images/experiences/adventureZone.webp",
  "/images/experiences/cloudWalkways.webp",
  "/images/experiences/infinityPool.webp",
]

const ModalMonth = ({ title, onClose }: { title: string; onClose: () => void }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white w-[90%] md:w-[700px] rounded-md overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-semibold dark:text-black">{title}</h3>
          <button onClick={onClose} className="text-xl dark:text-black">✕</button>
        </div>
        
        <div className="relative h-[250px] md:h-[320px]">
          <Image
            src={images[index]}
            alt="project image"
            fill
            className="object-cover"
          />

          <button
            onClick={prev}
            className="absolute left-3 top-1/2 dark:bg-white -translate-y-1/2 bg-white/80 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
          >
            <ChevronLeft className="dark:text-black"/>
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-white flex items-center justify-center w-10 h-10 rounded-full cursor-pointer"
          >
            <ChevronRight className="dark:text-black"/>
          </button>
        </div>

        <div className="p-5 space-y-3">
          <h4 className="text-lg dark:text-black font-semibold">
            Land Acquisition Complete
          </h4>
          <p className="text-gray-600">
            In January 2026, we successfully secured 26 acres of land located in
            the serene hilltops of Bulathkohupitiya. This milestone marked a
            crucial step in bringing the project vision to life.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ModalMonth;