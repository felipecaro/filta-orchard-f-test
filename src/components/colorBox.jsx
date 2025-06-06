const ColorBox = ({ title, description, colorImg }) => (
  <div className="flex flex-col text-center">
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
  </div>
);

export default ColorBox;
