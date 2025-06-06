import ColorBox from "../components/colorBox";
import colorRed from "../assets/color-red.jpg";
import colorGreen from "../assets/color-green.jpg";
import colorWhite from "../assets/color-white.jpg";
import { motion } from "motion/react";

function ColorsSection() {
  return (
    <div className="py-10 px-12 lg:py-28 lg:px-22 xl:py-32 xl:px-36 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <div className="sm:col-span-2 lg:col-span-3 text-center overflow-hidden">
        <motion.h2
          initial={{ y: "-200", opacity: 0 }}
          animate={{ y: [100, 100, 0] }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeInOut",
          }}
          className="text-2xl lg:text-3xl font-light uppercase mb-8 pb-8 border-b border-white inline-block"
        >
          Taste the colours
        </motion.h2>
      </div>
      <ColorBox
        title="RED"
        description="Red foods remind us of berries and soft fruits, so we anticipate a sweet taste."
        colorImg={colorRed}
      />
      <ColorBox
        title="Green"
        description="Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours"
        colorImg={colorGreen}
      />
      <ColorBox
        title="White"
        description="White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat."
        colorImg={colorWhite}
      />
    </div>
  );
}

export default ColorsSection;
