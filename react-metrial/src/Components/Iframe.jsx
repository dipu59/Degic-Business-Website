import { useState } from "react";
const Iframe = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const thumbnailUrl = `/Mask Group (1).png`;
    const videoUrl = `https://www.youtube.com/embed/tOM-nWPcR4U?si=ldvNNNxB9UaYUXie&autoplay=1`;

    return (
        <section className="bg-gray-50 max-w-[1500px]">
        <div className="p-10 md:p-24">
            <h1 className="text-center text-xl pb-6 md:pb-12 md:text-5xl font-semibold">
            Use illustrations in UI design
            </h1>
            <div className="w-full max-w-[1300px]  mx-auto">
            {isPlaying ? (
                // iframe লোড হলে YouTube ভিডিও দেখাবে
                <iframe
                className="w-full h-50 md:h-[655px] border rounded-lg shadow-lg"
                src={videoUrl}
                title="YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                />
            ) : (
                // Thumbnail দেখাবে, ক্লিক করলে iframe চালু হবে
                <div
                className="relative w-full h-50 md:h-[600px] cursor-pointer group"
                onClick={() => setIsPlaying(true)}
                >
                {/* Thumbnail Image */}
                <img
                    src={thumbnailUrl}
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                    className="w-16 h-16 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
                </div>
            )}
            </div>
        </div>
        </section>
    );
    };

export default Iframe;
