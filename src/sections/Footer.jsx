const Footer = () => {
  return (
    <div className="bg-white max-sm:px-4">
      <div className="grid grid-cols-4 max-lg-3:grid-cols-3 max-[685px]:grid-cols-1 max-[685]:justify-center max-[1100px]:mx-8 max-lg:grid-cols-2 py-16 container mx-auto max-sm:mx-auto gap-10">
        <div className="flex flex-col gap-4 max-sm:items-center">
          <h2 className="text-2xl">
            <span className="font-poppins font-bold">CAR</span> Rental
          </h2>
          <p className="font-poppins text-slate-500 max-sm:text-center">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p>
          <div>
            <p className="mb-2">
              <a
                href=""
                className="font-rubik font-semibold max-sm:text-center hover:text-coral-red"
              >
                (123)-456-789
              </a>
            </p>
            <p>
              <a
                href=""
                className="font-rubik font-semibold max-sm:text-center hover:text-coral-red"
              >
                carental@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col mx-auto gap-3 max-lg:mx-0 max-sm:items-center">
          <h2 className="text-2xl font-poppins max-sm:text-center font-bold">
            COMPANY
          </h2>
          <ul className="flex flex-col gap-3 font-poppins max-sm:text-center">
            <li className="hover:text-coral-red cursor-pointer">New York</li>
            <li className="hover:text-coral-red cursor-pointer">Careers</li>
            <li className="hover:text-coral-red cursor-pointer">Mobile</li>
            <li className="hover:text-coral-red cursor-pointer">Blog</li>
            <li className="hover:text-coral-red cursor-pointer">How we work</li>
          </ul>
        </div>
        <div className="flex flex-col mx-auto gap-3 max-lg:mx-0 max-sm:items-center">
          <h2 className="text-2xl font-poppins font-bold">WORKING HOURS</h2>
          <p>Mon - Fri: 9:00AM - 9:00PM</p>
          <p>Sat: 9:00AM - 7:00PM</p>
          <p>Sun: Closed</p>
        </div>
        <div className="flex flex-col mx-auto gap-3  max-sm:items-center">
          <h2 className="text-2xl font-poppins font-bold">SUBSCRIPTION</h2>
          <p>Subscribe your Email address for latest news & updates.</p>
          <input
            type="email"
            placeholder="Enter email address"
            className="text-sm outline-none  py-4 bg-[#ECECEC] text-center font-slate-500 max-sm:min-w-full max-[840px]:mx-10"
          />
          <button className="text-white bg-coral-red py-3 shadow-sm shadow-coral-red rounded-sm font-rubik font-semibold max-sm:min-w-full max-[840px]:mx-4">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
