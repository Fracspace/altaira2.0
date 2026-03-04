"use client";

import { useState, useEffect } from "react";

import AltairaLogo from "../../../public/images/logo/Altaira2Logo.webp";

import Link from "next/link";

import Image from "next/image";

interface LiveStreamProps {
  src?: string;
  endTime: string | null;
}

type ReactionType = "❤️" | "🔥" | "👏" | "😍";

interface Reaction {
  id: number;
  type: ReactionType;
  x: number; //horizontal position
}

const LiveStream = ({ src, endTime }: LiveStreamProps) => {
  const [seconds, setSeconds] = useState(0);
  const [reactions, setReactions] = useState<Reaction[]>([]);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    if (!endTime) return;

    const endTimestamp = new Date(endTime).getTime();

    // console.log("endtimestamp",endTimestamp);

    // console.log("now",Date.now());

    // console.log("diff between now and endtimestamp",(endTimestamp-Date.now())/(1000*60*60*24));

    const checkInterval = setInterval(() => {
      const now = Date.now();
      if (now >= endTimestamp) {
        setIsLive(true);
        clearInterval(checkInterval);
      }
    }, 1000);

    return () => clearInterval(checkInterval);
  }, [endTime]);

  useEffect(() => {
    if (!isLive) return;
    setSeconds(0);
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isLive]);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const addReaction = (type: ReactionType) => {
    // if (!isLive) return;
    const newReaction: Reaction = {
      id: Date.now(),
      type,
      x: Math.random() * 80 + 10
    };

    setReactions((prev) => [...prev, newReaction]);

    setTimeout(() => {
      setReactions((prev) =>
        prev.filter((reaction) => reaction.id !== newReaction.id)
      );
    }, 3000);
  };

  return (
    <div>
      <div className="ml-10 mt-5">
        <Link href="/">
          <Image
            src={AltairaLogo}
            alt="logo"
            className="w-[40vw] h-[10vh] md:w-[20vw] md:h-[10vh] lg:w-[20vw] lg:h-[10vh] xl:w-[10vw] cursor-pointer"
          />
        </Link>
      </div>
      <h2 className="text-center font-bold text-4xl">Live Stream has ended</h2>
      <div className="min-h-screen w-[98vw] flex  items-center justify-center  sm:px-6 ">
        <div className=" mx-auto w-full md:w-auto px-2 md:max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="relative min-h-[600px] md:min-h-[400px] lg:min-h-[500px] aspect-video overflow-hidden rounded-lg shadow-lg">
              {/* {isLive && (
                <div className="absolute top-4 left-4 bg-red-600 z-50 text-white px-3 py-1 rounded-md text-sm font-semibold flex items-center gap-2">
                  <span className="animate-pulse">🔴</span>
                  LIVE
                </div>
              )} */}
              <iframe
                src={src}
                className="absolute inset-0  w-full h-full border-none"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen
              />
              {reactions.map((reaction) => (
                <span
                  key={reaction.id}
                  className="absolute bottom-4 text-3xl animate-float pointer-events-none"
                  style={{ left: `${reaction.x}%` }}
                >
                  {reaction.type}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-6 justify-center mt-4 text-2xl">
            <button onClick={() => addReaction("❤️")}>❤️</button>
            <button onClick={() => addReaction("🔥")}>🔥</button>
            <button onClick={() => addReaction("👏")}>👏</button>
            <button onClick={() => addReaction("😍")}>😍</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStream;
