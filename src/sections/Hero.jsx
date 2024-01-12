import heroImg from "../images/hero/main-car.png";

const Hero = () => {
  return (
    <div
      className="flex sm:container items-center min-h-[80vh] mx-auto pt-15 mt-10 max-[1124px]:mx-0
    max-[1124px]:justify-between max-lg-2:mx-auto max-lg-2:container-xl max-md-2:mx-auto max-sm:mx-2"
    >
      <div className="flex  flex-col gap-3 max-lg-3:ml-7 max-lg-2:flex-1 max-md-2:ml-0">
        <p className="font-rubik text-2xl font-bold max-md-2:text-center">Plan your trip now</p>
        <h1 className="font-poppins text-5xl leading-[1.3] max-md-2:text-center font-bold">
          Save <span className="text-coral-red">big</span> with our car rental
        </h1>
        <p className="font-rubik tracking-wide max-md-2:text-center text-slate-500 mt-4">
          Rent the car of your dreams. Unbeatable prices, unlimited miles,
          flexible pick-up options and much more.
        </p>
        <div className="mt-8 flex gap-7 max-lg:flex-col max-md-2:flex-row max-md-2:justify-center max-xs:flex-col max-xs:items-center">
          <button className="text-white font-rubik font-bold text-md rounded-[3px] shadow-sm shadow-coral-red bg-coral-red border-2 border-coral-red px-8 flex gap-2 capitalize max-lg-2:justify-center py-5">
            Book ride
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-circle-check "
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M9 12l2 2l4 -4"></path>
            </svg>
          </button>
          <button className="text-white font-rubik border-2 border-black font-bold text-md rounded-[3px] bg-coral-black px-8 flex gap-2 capitalize py-5 hover:bg-white hover:text-black max-lg-2:font-semibold max-lg-2:justify-center">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-chevron-right max-lg:text-center"
            >
              <path d="M9 6l6 6l-6 6"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="max-lg-2:flex-1 max-md-2:hidden">
        <img
          src={heroImg}
          alt="Car Hero"
          className="max-w-3xl max-xl:max-w-2xl max-lg-3:max-w-xl max-lg-2:max-w-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
