import { motion } from "motion/react";

const ColorBox = ({ title, description, colorImg }) => (
  <div className="overflow-hidden relative">
    <motion.div
      className="flex flex-col text-center"
      initial={{ opacity: 0 }}
      animate={{ y: [500, 0, 0] }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.4,
        ease: "easeInOut",
      }}
    >
      <img
        className="h-auto max-w-full object-cover object-center mb-3"
        src={colorImg}
        alt="color-photo"
      />
      <h3 className="text-lg lg:text-xl font-bold pb-2.5 px-5 lg:px-7">
        {title}
      </h3>
      <p className="text-lg lg:text-xl font-light pb-2.5 px-5 lg:px-7">
        {description}
      </p>
    </motion.div>
  </div>
);

export default ColorBox;
