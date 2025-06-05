import ColorBox from "../components/colorBox";
import colorRed from "../assets/color-red.jpg";
import colorGreen from "../assets/color-green.jpg";
import colorWhite from "../assets/color-white.jpg";

function ColorsSection() {
  return (
    <div className="py-32 px-36 grid grid-cols-3 gap-3">
      <div className="col-span-3 text-center">
        <h2 className="text-3xl font-light uppercase mb-8 pb-8 border-b border-white inline-block">
          Taste the colours
        </h2>
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
