const Greeting = ({ title, heroText, subTitle, subTitleText }) => (
  <div className="flex flex-col pl-5">
    <h1 className="text-3xl font-light uppercase mb-8 pb-8 border-b border-white">
      {title}
    </h1>
    <p className="text-xl font-light pb-8">{heroText}</p>
    <h2 className="text-sm font-bold text-red-700 pb-2.5 uppercase">
      {subTitle}
    </h2>
    <p className="text-xl font-bold pb-8">{subTitleText}</p>
  </div>
);

export default Greeting;
