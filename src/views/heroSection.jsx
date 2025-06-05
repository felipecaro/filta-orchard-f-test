import Greeting from "../components/Greeting";
import GalleryHero from "../components/galleryHero";

function HeroSection() {
  return (
    <div className="py-32 px-36 grid grid-cols-3 gap-3">
      <div className="col-span-2">
        <GalleryHero />
      </div>
      <Greeting
        title="What does cooking mean?"
        heroText="Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg..."
        subTitle="The perfect egg"
        subTitleText="Keep water between 67 and 68°C for a flavourful, tender yolk"
      />
    </div>
  );
}

export default HeroSection;
