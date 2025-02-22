import { motion } from "framer-motion";

const images = [
  "/Make more time/Brand.png",
  "/Make more time/Brand2.png",
  "/Make more time/Brand3.png",
  "/Make more time/Brand4.png",
  "/Make more time/Brand5.png",
  "/Make more time/Shape_5 (3).png",
  "/Make more time/Shape_10 (1).png",
];

export default function ImageCarousel() {
  return (
    <div className="relative overflow-hidden bg-white py-0 w-full pb-8 md:pb-20">
      <motion.div
        className="flex w-max space-x-8 md:space-x-12"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        {/* Responsive Design: Small Devices এর জন্য Width Adjust */}
        {[...images, ...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-16 sm:w-20 md:w-24 lg:w-32 h-auto object-contain rounded-xl transition-transform duration-300 hover:scale-110"
          />
        ))}
      </motion.div>
    </div>
  );
}
