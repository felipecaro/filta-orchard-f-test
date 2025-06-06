import Greeting from "../components/Greeting";
import GalleryHero from "../components/galleryHero";

function HeroSection() {
  return (
    <div className="py-10 px-12 lg:py-28 lg:px-22 xl:py-32 xl:px-36 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <div className="col-span-2 order-2 lg:order-1">
        <GalleryHero />
      </div>
      <div className="order-1 lg:order-2 col-span-2 lg:col-span-1">
        <Greeting
          title="What does cooking mean?"
          heroText="Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg..."
          subTitle="The perfect egg"
          subTitleText="Keep water between 67 and 68°C for a flavourful, tender yolk"
        />
      </div>
    </div>
  );
}

export default HeroSection;
