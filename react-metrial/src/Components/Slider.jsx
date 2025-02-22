import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slider = [
    {
        id: 1,
        heading: "Make more time for the work that matters most",
        disc: "Best software platform for running an internet business.",
        image: "/Make more time/Group 35.png",
    },
    {
        id: 2,
        heading: "Making more time for the work that matters most",
        disc: "Optimize your time and maximize productivity.",
        image: "/Make more time/Group 35.png",
    },
    {
        id: 3,
        heading: "Maked more time for the work that matters most",
        disc: "Seamless workflow with our AI-powered tools.",
        image: "/Make more time/Group 35.png",
    },
    {
        id: 4,
        heading: "Makes more time for the work that matters most",
        disc: "Transform the way you work with automation.",
        image: "/Make more time/Group 35.png",
    },
    ];

    const Sliders = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slider.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex === slider.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section className="max-w-[1400px] mx-auto bg-white md:py-20 py-10 px-6 md:px-18">
        <div className="flex flex-col md:flex-row justify-center items-center gap-20">
            {/* Left Side */}
            <div className="flex flex-col w-full md:w-1/2 justify-between md:space-y-8 space-y-2">
            <div className="flex gap-3 items-center mb-5">
                <img className="w-6" src="/Make more time/Shape (2).png" alt="Logo" />
                <p>Logo</p>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                <h1 className="text-2xl md:text-5xl font-semibold max-w-md md:leading-12 text-[#000000]">
                    {slider[currentIndex].heading}
                </h1>
                <p className="max-w-sm mt-3 md:mt-8 text-lg text-gray-400">{slider[currentIndex].disc}</p>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3">
                <button
                onClick={prevSlide}
                className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-all active:bg-gray-300 active:translate-y-0.5 cursor-pointer"
                >
                <ChevronLeftIcon className="text-black" />
                </button>
                <button
                onClick={nextSlide}
                className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-all active:bg-gray-300 active:translate-y-0.5 duration-300 cursor-pointer"
                >
                <ChevronRightIcon className="text-black" />
                </button>
            </div>
            </div>

            {/* Right Side (Image) */}
            <div className="w-full md:w-1/2">
            <AnimatePresence mode="wait">
                <motion.img
                key={currentIndex}
                src={slider[currentIndex].image}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full md:w-[85%] object-cover"
                />
            </AnimatePresence>
            </div>
        </div>
        </section>
    );
};

export default Sliders;
