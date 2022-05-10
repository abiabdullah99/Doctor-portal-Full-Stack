import React from "react";
import chair from "../../../assets/images/chair.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner-info">
      <div className="md:flex justify-between px-20 items-center mt-20 md:mt-40 lg:mt-40">
      <div className="flex-1 md:ml-10 mb-10 md:mb-0 font-mono">
        <h1 className="text-5xl font-semibold">Your New Smile Starts Here</h1>
        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
          non.
        </p>
        <button className="mt-8 rounded px-10 py-4 bg-gradient-to-r from-primary to-secondary text-lg font-semibold text-white">GET STARTED</button>
      </div>
      <div className="banner-image flex-1 ">
        <img src={chair} alt="" />
      </div>
    </div>
    </div>
  );
};

export default Banner;
