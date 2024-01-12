import img1 from "../images/testimonials/pfp1.jpg";
import img2 from "../images/testimonials/pfp2.jpg";
import ReviewCard from "../components/ReviewCard";

const data = [
  {
    img: img1,
    name: "Harry Potter",
    place: "Belgrade",
    info: "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.",
  },
  {
    img: img2,
    name: "Ron Rizzly",
    place: "Novi Sad",
    info: "The car was in great condition and made our trip even better. Highly recommend for this car rental website!",
  },
];

const Testimonial = () => {
  return (
    <div className="mt-20 flex flex-col mb-20">
      <div className="max-w-2xl mx-auto">
        <p className="text-center font-rubik font-semibold text-2xl mb-4">
          Reviewed by People
        </p>
        <h2 className="text-center font-poppins font-bold text-5xl max-sm:text-4xl">
          Client&apos;s Testimonial
        </h2>
        <p className="text-center mt-6 font-rubik text-slate-500 max-sm:mx-3">
          Discover the positive impact we&apos;ve made on the our clients by
          reading through their testimonials. Our clients have experienced our
          service and results, and they&apos;re eager to share their positive
          experiences with you.
        </p>
      </div>
      <div className="flex max-w-5xl mx-auto mt-10 gap-10 max-lg-2:mx-4 max-[912px]:container max-[912px]:mx-auto max-[912px]:justify-center max-[912px]:mx-20">
        <div className="flex-1 ">
          <ReviewCard
            img={data[0].img}
            name={data[0].name}
            info={data[0].info}
            place={data[0].place}
          />
        </div>
        <div className="flex-1  max-[912px]:hidden max-sm:hidden">
          <ReviewCard
            img={data[1].img}
            name={data[1].name}
            info={data[1].info}
            place={data[1].place}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
