import imageOne from "../assets/hero-1.jpg";
import imageTwo from "../assets/hero-2.jpg";
import imageThree from "../assets/hero-3.jpg";
import { motion } from "motion/react";

const GaleryHero = () => (
  <div className="grid grid-flow-col grid-rows-2 grid-cols-2 gap-3">
    <div className="row-span-3 relative">
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: "easeInOut",
        }}
        className="h-full max-w-full object-cover object-center"
        src={imageOne}
        alt="gallery-photo-1"
      ></motion.img>
    </div>
    <div className="col-span-2">
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: "easeInOut",
        }}
        className="h-full max-w-full object-cover object-center"
        src={imageTwo}
        alt="gallery-photo-2"
      ></motion.img>
    </div>
    <div className="col-span-2 row-span-2">
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeInOut",
        }}
        className="h-full max-w-full object-cover object-center"
        src={imageThree}
        alt="gallery-photo-3"
      ></motion.img>
    </div>
  </div>
);

export default GaleryHero;
