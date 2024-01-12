import ProcedureCard from "../components/ProcedureCard";
import icon1 from "../images/plan/icon1.png";
import icon2 from "../images/plan/icon2.png";
import icon3 from "../images/plan/icon3.png";
const arr = [
  {
    icon: icon1,
    title: "Select car",
    info: "We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs",
  },
  {
    icon: icon2,
    title: "Contact Operator",
    info: "Our knowledgeable and friendly operators are always ready to help with any questions or concerns",
  },
  {
    icon: icon3,
    title: "Let's Drive",
    info: "Whether you're hitting the open road, we've got you covered with our wide range of cars",
  },
];

const Procedure = () => {
  return (
    <div className="container mx-auto mt-36">
      <p className="text-center font-rubik text-2xl font-semibold">
        Plan your trip now
      </p>
      <h2 className="text-center font-poppins text-4xl mt-5 font-bold">
        Quick & easy car rental
      </h2>
      <div className="flex flex-wrap mx-auto items-center gap-20 justify-evenly mt-20 max-sm:gap-12">
        <ProcedureCard icon={icon1} title={arr[0].title} info={arr[0].info} />
        <ProcedureCard icon={icon2} title={arr[1].title} info={arr[1].info} />
        <ProcedureCard icon={icon3} title={arr[2].title} info={arr[2].info} />
      </div>
    </div>
  );
};

export default Procedure;
