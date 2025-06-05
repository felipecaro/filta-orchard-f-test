import imageOne from "../assets/hero-1.jpg";
import imageTwo from "../assets/hero-2.jpg";
import imageThree from "../assets/hero-3.jpg";

const GaleryHero = () => (
  <div className="grid grid-flow-col grid-rows-2 grid-cols-2 gap-3">
    <div className="row-span-3">
      <img
        className="h-full max-w-full object-cover object-center"
        src={imageOne}
        alt="gallery-photo"
      />
    </div>
    <div className="col-span-2">
      <img
        className="h-full max-w-full object-cover object-center"
        src={imageTwo}
        alt="gallery-photo"
      />
    </div>
    <div className="col-span-2 row-span-2">
      <img
        className="h-full max-w-full object-cover object-center"
        src={imageThree}
        alt="gallery-photo"
      />
    </div>
  </div>
);

export default GaleryHero;
