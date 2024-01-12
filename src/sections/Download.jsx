import android from "../images/download/googleapp.svg";
import iphone from "../images/download/appstore.svg";

const Download = () => {
  return (
    <div className="py-20 px-24 max-md:px-10 ">
      <div className="flex flex-col max-w-2xl max-sm:w-[100%]">
        <h2 className="max-md:text-center font-poppins text-5xl leading-normal font-bold">Download our app to get most out of it</h2>
        <p className="font-rubik max-md:text-center text-slate-500 mt-6">
          Thrown shy denote ten ladies though ask saw. Or by to he going think
          order event music. Incommode so intention defective at convinced. Led
          income months itself and houses you.
        </p>
        <div className="max-md:flex-col max-md:justify-center max-md:items-center flex mt-10 justify-start gap-8">
            <img src={android} alt="" className="max-md:w-[50%]" />
            <img src={iphone} alt="" className="max-md:w-[50%]" />
        </div>
      </div>
    </div>
  );
};

export default Download;
