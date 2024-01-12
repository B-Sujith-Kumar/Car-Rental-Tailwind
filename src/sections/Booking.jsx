const car = [
  "Select your car type",
  "Audi A1 S-Line",
  "VW Golf 6",
  "Toyota Camry",
  "BMW 320 ModernLine",
  "Mercedes-Benz GLK",
  "VW Passat CC",
];

const pickup = [
  "Select pick up location",
  "Belgrade",
  "Novi Sad",
  "Nis",
  "Kragujevac",
  "Subotica",
];

const Booking = () => {
  return (
    <div className="sm:container px-12 py-8 font-poppins max-sm:mx-4 bg-white max-w-lg max-xs:max-w-sm mx-auto bg-[url('./images/book-car/book-bg.png')] shadow-lg">
      <h2 className="font-bold text-2xl">Book a car</h2>
      <div className="grid grid-cols-3  max-lg-2:grid-cols-2 max-sm:grid-cols-1 mt-6 gap-6">
        <div>
          <p className="text-md font-semibold">
            Select your Car Type <span className="text-coral-red">*</span>
          </p>
          <select
            name=""
            id=""
            className="font-sm font-rubik mt-3 outline-none border-[1px] border-slate-200 px-3 min-w-full py-2 rounded-sm text-slate-400"
          >
            {car.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p className="text-md font-semibold">
            Pick-up <span className="text-coral-red">*</span>
          </p>
          <select
            name=""
            id=""
            className="font-sm mt-3 font-rubik outline-none border-[1px] border-slate-200 px-3 min-w-full py-2 rounded-sm text-slate-400"
          >
            {pickup.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p className="text-md font-semibold">
            Drop-of <span className="text-coral-red">*</span>
          </p>
          <select
            name=""
            id=""
            className="font-sm font-rubik mt-3 outline-none border-[1px] border-slate-200 px-3 min-w-full py-2 rounded-sm text-slate-400"
          >
            {pickup.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="text-md font-semibold">
          <p>
            Pick-up Date <span className="text-coral-red">*</span>
          </p>
          <input
            type="date"
            className="font-sm font-rubik mt-3 outline-none border-[1px] border-slate-200 px-3 min-w-full py-2 rounded-sm text-slate-400"
          />
        </div>
        <div className="text-md font-semibold">
          <p>
            Drop-of Date <span className="text-coral-red">*</span>
          </p>
          <input
            type="date"
            className="font-sm font-rubik mt-3 outline-none border-[1px] border-slate-200 px-3 min-w-full py-2 rounded-sm text-slate-400"
          />
        </div>
        <div className="self-end">
          <button className="bg-coral-red shadow-md text-white font-semibold font-rubik min-w-full py-3 px-3 ">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
