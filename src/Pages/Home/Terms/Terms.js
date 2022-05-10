import React from "react";
import treatment from "../../../assets/images/treatment.png";
const Terms = () => {
  return (
    <div className="banner-info">
      <div className="md:flex justify-between px-20 items-center mt-20 md:mt-40 lg:mt-40">
        <div className="flex-1 mb-10">
          <img className="w-10/12 md:ml-10" src={treatment} alt="" />
        </div>
        <div className="flex-1 md:ml-10 mb-10 md:mb-0 font-mono">
          <h1 className="text-5xl font-semibold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="text-xl mt-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="mt-8 rounded px-10 py-4 bg-gradient-to-r from-primary to-secondary text-lg font-semibold text-white">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default Terms;
