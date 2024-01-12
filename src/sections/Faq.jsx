import { arr } from "../constants/data";
import { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleQuestionClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="bg-white py-16 pb-20">
      <div className="flex flex-col max-w-6xl mx-auto items-center max-sm:mx-4">
        <div className="flex flex-col font-poppins">
          <p className="text-center font-semibold text-2xl mb-4">FAQ</p>
          <h2 className="text-center font-bold max-md:leading-normal max-md:text-4xl text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-lg:mx-4 text-center max-md:text-md text-lg max-w-4xl mx-auto mt-6 text-slate-500">
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </p>
        </div>
        <div className="flex flex-col mt-10 bg-white min-w-[80%] shadow-xl">
          {arr.map((item, index) => (
            <div key={index}>
              <div
                className={`flex min-w-3xl gap-4 justify-between hover:cursor-pointer py-4 px-12  shadow-sm ${
                  openIndex === index
                    ? "bg-coral-red text-white shadow-coral-red shadow-md"
                    : ""
                }`}
                onClick={() => handleQuestionClick(index)}
              >
                <p className="font-poppins font-medium  text-lg">
                  {index + 1}. {item.question}
                </p>
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
                  className={`tabler-icon tabler-icon-chevron-down transform ${
                    openIndex === index
                      ? "rotate-180 transition-transform duration-300 ease-in-out"
                      : ""
                  }`}
                >
                  <path d="M6 9l6 6l6 -6"></path>
                </svg>
              </div>
              {openIndex === index && (
                <div className="max-w-4xl max-lg:max-w-2xl px-12 py-7 text-slate-500 text-md font-rubik">
                  {item.ans}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
