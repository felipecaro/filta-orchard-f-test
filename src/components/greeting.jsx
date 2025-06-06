import { motion } from "motion/react";

const Greeting = ({ title, heroText, subTitle, subTitleText }) => (
  <div className="flex flex-col lg:pl-5">
    <div className="text-2xl lg:text-3xl font-light uppercase mb-8 pb-8 border-b border-white overflow-hidden">
      <motion.h1
        initial={{ y: "-200", opacity: 0 }}
        animate={{ y: [100, 100, 0] }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          ease: "easeInOut",
        }}
      >
        {title}
      </motion.h1>
    </div>
    <motion.div
      transition={{
        duration: 0.8,
        delay: 0.4,
        ease: "easeInOut",
      }}
      animate={{ scale: 1 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      layout
      style={{ x: 0 }}
    >
      <p className="text-lg lg:text-xl font-light pb-8">{heroText}</p>
      <h2 className="text-sm font-bold text-red-700 pb-2.5 uppercase">
        {subTitle}
      </h2>
      <p className="text-lg lg:text-xl font-bold pb-8">{subTitleText}</p>
    </motion.div>
  </div>
);

export default Greeting;
