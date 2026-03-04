"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import LiveStream from "../components/LiveStream/LiveStream";

interface Card {
    liveStreamUrl?: string;
    endTime:string|null;
}

interface ApiResponse {
    success: boolean;
    data: {
        cards: Card[];
    };
}

const LiveStreamPage = () => {
    const [streamUrl, setStreamUrl] = useState<string | null>(null);
    const [endTime,setEndTime]=useState<string|null>(null);

    const apiUrl =
        "https://apitest.fracspace.com/api/altaira/promo/ui/getCarouselUi";

    useEffect(() => {
        async function fetchStream() {
            try {
                const response = await axios.get<ApiResponse>(apiUrl, {
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": "Fracspace@2024",
                    },
                });
                const streamUrl =
                    response.data.success &&
                    response.data.data?.cards[0]?.liveStreamUrl;

                    const endTime =response.data.success && response.data.data?.cards[0]?.endTime

                    if(endTime){
                        setEndTime(endTime)
                    }

                if (streamUrl) {
                    setStreamUrl(streamUrl);
                }
            } catch (error) {
                console.error("Failed to fetch stream URL", error);
            }
        }
        fetchStream();
    }, []);

    if (!streamUrl) {
        return <div className="text-center pt-20">Loading stream...</div>;
    }

    return <LiveStream src={streamUrl} endTime={endTime} />;
}

export default LiveStreamPage;
