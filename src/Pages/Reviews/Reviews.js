import React from "react";
import "./Review.css";
import people1 from "../../assets/images/people-1.png";
import people2 from "../../assets/images/people-2.png";
import people3 from "../../assets/images/people-3.png";
import ReviewsShow from "./ReviewsShow";
const Reviews = () => {
  const reviews = [
    {
      _id: 1,
      name: "Javed Ahmed",
      reviw:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, magnam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, magnam",
      img: people1,
      location: "Barisal, Bangladesh",
    },
    {
      _id: 2,
      name: "Kate Pretty",
      reviw:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, magnam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, magnam",
      img: people2,
      location: "Bhola, Bangladesh",
    },
    {
      _id: 3,
      name: "Nila Wiston",
      reviw:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, magnam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, magnam",
      img: people3,
      location: "Dhaka, Bangladesh",
    },
  ];
  return (
    <div className="mt-28 font-mono px-10 md:px-20">
      <div className="reviews-info pb-10">
        <h1 className="text-secondary text-2xl font-bold">Testimonial</h1>
        <h1 className="text-accent text-2xl font-semibold">
          What Our Patients Says
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
        {reviews.map((review) => (
          <ReviewsShow key={review._id} review={review}></ReviewsShow>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
