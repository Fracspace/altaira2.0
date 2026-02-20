"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";

import { X } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface Card {
  endTime: string | null;
  liveStreamUrl?: string;
}

interface ApiData {
  cards: Card[];
}

interface ApiResponse {
  success: boolean;
  data: ApiData;
}

const LiveBanner = () => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isLive, setIsLive] = useState(false);

  const [launchDate, setLaunchDate] = useState<Date | null>(null);

  const [showCountDown, setShowCountDown] = useState(true);

  const handleClose = (): void => {
    setShowCountDown(false);
  };

  //const [liveStreamUrl, setLiveStreamUrl] = useState<string>('')

  const apiUrl =
    "https://apitest.fracspace.com/api/altaira/promo/ui/getCarouselUi";

  useEffect(() => {
    async function fetchLaunchDate(apiUrl: string): Promise<void> {
      //not returning anything (void)
      try {
        const response = await axios.get<ApiResponse>(apiUrl, {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Fracspace@2024"
          }
        });
        const data: ApiResponse = response.data;
        // console.log("API Response:", data);
        const endTime = data.success ? data.data?.cards[0]?.endTime : null;

        //const streamUrl = data.success? data.data?.cards[0]?.liveStreamUrl:null;
        // if(streamUrl){
        //     setLiveStreamUrl(streamUrl);
        //     //setIsLive(true);
        // }
        // console.log("end time",endTime);
        if (endTime) {
          const date = new Date(endTime);
          // console.log("launch date",date)
          setLaunchDate(date);
        }
      } catch (error) {
        console.error(error, "failed to fetch launch date");
      }
    }

    fetchLaunchDate(apiUrl);
  }, []);

  useEffect(() => {

    if (!launchDate) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = launchDate.getTime() - now;

      if (diff <= 0) {
        setIsLive(true);
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(interval);

  }, [launchDate]);

  return (
    <div className="absolute top-30 md:top-20 left-1/2 -translate-x-1/2 z-50">
      {showCountDown &&
        (isLive ? (
          <div
            onClick={() => router.push(`/live-stream`)}
            className="cursor-pointer bg-red-600 hover:bg-red-700 text-white px-6 py-3 flex items-center gap-3 shadow-lg transition rounded-md"
          >
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-white opacity-75"></span>
            <span className="relative flex h-3 w-3">
              <span className="animate-pulse inline-flex h-3 w-3 rounded-full bg-white"></span>
            </span>
            <span className="ml-2 font-semibold text-sm">
              Altaira Soft Launch is Live.{" "}
              <span className="font-bold">Click to Watch.</span>
            </span>
          </div>
        ) : (
          <div className="relative rounded-xl overflow-hidden shadow-xl w-full max-w-[320px] sm:max-w-sm md:max-w-md mx-auto">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-20 cursor-pointer text-white/80 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full w-8 h-8 flex items-center justify-center transition"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Luxury Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A1612] via-[#2A221A] to-[#120F0C]"></div>

            {/* Warm Gold Glow */}
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-[#AD9273]/20 rounded-full blur-3xl"></div>

            {/* Subtle Amber Depth */}
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#8B7355]/20 rounded-full blur-3xl"></div>

            {/* Content */}
            <div className="relative flex flex-col items-center gap-3 px-6 py-6 text-white">
              <h3 className="text-xs md:text-sm font-bold uppercase tracking-[2px] ">
                Altaira Soft Launch
              </h3>

              <h2 className="text-lg md:text-xl font-bold text-white tracking-wide bg-gradient-to-r from-[#C6A77D] via-[#AD9273] to-[#8B7355] bg-clip-text text-transparent">
                Countdown Begins
              </h2>

              <div className="flex gap-4 mt-2">
                {timeLeft &&
                  Object.entries(timeLeft).map(([label, value]) => (
                    <div
                      key={label}
                      className="flex flex-col items-center bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg border border-white/20 shadow-lg"
                    >
                      <span className="text-lg md:text-xl font-bold">
                        {String(value).padStart(2, "0")}
                      </span>

                      <span className="text-[5px] md:text-[10px] uppercase tracking-widest text-[#C6A77D] mt-1">
                        {label}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          // <div className="relative rounded-xl overflow-hidden shadow-xl w-full max-w-[320px] sm:max-w-sm md:max-w-md mx-auto">
          //     <button
          //         onClick={handleClose}
          //         className="absolute top-3 right-3 z-20 cursor-pointer text-white/80 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full w-8 h-8 flex items-center justify-center transition"
          //         aria-label="Close"
          //     >
          //         <X size={20} />
          //     </button>
          //     <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900"></div>
          //     <div className="absolute -top-16 -left-16 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl"></div>
          //     <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-emerald-400/20 rounded-full blur-3xl"></div>
          //     <div className="relative flex flex-col items-center gap-3 px-6 py-6 text-white">
          //         <h3 className="text-xs md:text-sm font-light uppercase tracking-[2px] text-cyan-300">
          //             Altaira Soft Launch
          //         </h3>
          //         <h2 className="text-lg md:text-xl font-bold tracking-wide bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
          //             Countdown Begins
          //         </h2>
          //         <div className="flex gap-4 mt-2">
          //             {timeLeft &&
          //                 Object.entries(timeLeft).map(([label, value]) => (
          //                     <div
          //                         key={label}
          //                         className="flex flex-col items-center bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg border border-white/20 shadow-lg"
          //                     >
          //                         <span className="text-lg md:text-xl font-bold">
          //                             {String(value).padStart(2, "0")}
          //                         </span>
          //                         <span className="text-[5px] md:text-[10px] uppercase tracking-widest text-cyan-200 mt-1">
          //                             {label}
          //                         </span>
          //                     </div>
          //                 ))}
          //         </div>
          //     </div>
          // </div>
        ))}
    </div>
  );
};

export default LiveBanner;
