import React from "react";
import { Link } from "react-router-dom";
import Doctor from "../../../assets/images/doctor.png";
import "./Appointment.css";
const Appointment = () => {
  return (
    <div className="appoinment">
      <div className="md:flex justify-between px-20 items-center mt-20 md:mt-40 lg:mt-40">
        <div className="flex-1 mb-10">
          <img
            className="md:ml-10 mt-[-160px] hidden md:block"
            src={Doctor}
            alt=""
          />
        </div>
        <div className="flex-1 md:ml-10 mb-10 md:mb-0 font-mono text-white">
          <h1 className="text-3xl text-secondary font-bold mb-4">
            Appointment
          </h1>
          <h1 className="text-4xl font-semibold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="mt-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Link to="/appointment">
            <button className="mt-8 rounded px-10 py-4 bg-gradient-to-r from-primary to-secondary text-lg font-semibold text-white">
              GET STARTED
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
