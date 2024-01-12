const FeatureCard = ({ img, heading, info }) => {
  return (
    <div className="flex gap-4 items-center max-sm:flex-col">
      <img src={img} alt="Hello" width={110} />
      <div className="flex flex-col">
        <h2 className="font-poppins font-bold text-2xl max-sm:text-center">{heading}</h2>
        <p className="mt-3 max-w-sm text-slate-500 max-sm:text-center">{info}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
