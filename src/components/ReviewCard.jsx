import quotes from "../images/testimonials/quotes.svg";

const ReviewCard = ({ img, place, name, info }) => {
  return (
    <div className="shadow-lg flex flex-col py-10 px-12 bg-white  min-h-full justify-between">
      <p className="font-poppins font-medium text-[22px]">&quot;{info}&quot;</p>
      <div className="flex justify-between mt-10">
        <div className="flex items-center gap-4">
          <img src={img} alt="" width={70} className="rounded-full" />
          <div>
            <p className="font-bold">{name}</p>
            <p className="text-slate-500">{place}</p>
          </div>
        </div>
        <div className="text-coral-red">
          <img src={quotes} alt=""  />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
