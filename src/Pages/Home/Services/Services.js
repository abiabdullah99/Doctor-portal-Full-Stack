import React from "react";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import fluoride from "../../../assets/images/fluoride.png";
const Services = () => {
  return (
    <div className="font-mono text-center mt-28">
      <h1 className="text-secondary text-4xl font-bold">Our Services</h1>
      <p className="text-accent text-4xl font-semibold">Services We Provided</p>
      <div className="md:flex justify-around md:px-20 mt-24 gap-10">
        <div class="card w-9/12 bg-base-100 shadow-xl mb-8 md:mb-0 mx-auto">
          <figure class="px-10 pt-10">
            <img src={cavity} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Fluoride Treatment</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div class="card w-9/12 bg-base-100 shadow-xl mb-8 md:mb-0 mx-auto">
          <figure class="px-10 pt-10">
            <img src={whitening} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Cavity Filling</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div class="card w-9/12 bg-base-100 shadow-xl mb-8 md:mb-0 mx-auto">
          <figure class="px-10 pt-10">
            <img src={fluoride} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Teeth Whitening</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
