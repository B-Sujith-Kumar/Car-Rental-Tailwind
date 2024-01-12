import img from "../images/chooseUs/main.png";
import icon1 from "../images/chooseUs/icon1.png";
import icon2 from "../images/chooseUs/icon2.png";
import icon3 from "../images/chooseUs/icon3.png";
import FeatureCard from "../components/FeatureCard";

const Features = () => {
  return (
    <div className="bg-[url('./images/chooseUs/bg.png')] bg-white bg-no-repeat bg-center pb-16">
      <div className="flex items-center">
        <img src={img} alt="" width={1152} className="mx-auto mt-20" />
      </div>
      <div className="max-w-5xl flex mt-8 mx-auto gap-16 max-lg-2:flex-col max-lg-2:items-center max-sm:m-5">
        <div className="flex flex-col flex-1 max-lg-2:items-center max-lg-2:">
          <p className="font-rubik font-semibold text-[22px] mb-3">
            Why Choose Us
          </p>
          <h2 className="font-poppins text-[42px] max-lg-2:max-w-lg max-lg-2:text-center leading-[50px] font-bold">
            Best valued deals you will ever find
          </h2>
          <p className="mt-6 text-slate-500 max-lg-2:max-w-lg max-lg-2:text-center">
            Discover the best deals you&apos;ll ever find with our unbeatable
            offers. We&apos;re dedicated to providing you with the best value
            for your money, so you can enjoy top-quality services and products
            without breaking the bank. Our deals are designed to give you the
            ultimate renting experience, so don&apos;t miss out on your chance
            to save big.
          </p>
          <button className="text-white font-rubik font-bold text-md rounded-[3px] shadow-md shadow-coral-red bg-coral-red border-2 border-coral-red px-8 mt-8 capitalize py-3 w-44">
            Find Details
          </button>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-10">
            <FeatureCard
              img={icon1}
              heading="Cross Country Drive"
              info="Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures."
            />
            <FeatureCard
              img={icon2}
              heading="All Inclusive Pricing"
              info="Get everything you need in one convenient, transparent price with our all-inclusive pricing policy."
            />
            <FeatureCard
              img={icon3}
              heading="No Hidden Charges"
              info="Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
