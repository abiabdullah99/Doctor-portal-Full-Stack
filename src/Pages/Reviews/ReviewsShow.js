import React from "react";

const ReviewsShow = ({ review }) => {
  const { name, img, reviw, location } = review;
  return (
    <div class="card w-11/12 bg-base-100 shadow-xl">
      <div class="card-body">
        <p className="text-justify">{reviw}</p>
        <div class="card-actions justify-between mt-5 items-center">
          <img className="rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2" src={img} alt="" />
          <div>
            <h2 class="card-title">{name}</h2>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsShow;
