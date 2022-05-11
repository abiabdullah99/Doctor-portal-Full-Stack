import React from "react";
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
const Info = () => {
  return (
    <div className="md:flex px-28 md:mt-40 text-white font-mono">
      <div class="card lg:card-side shadow-xl mb-10 mr-8 rounded bg-gradient-to-r from-primary to-secondary px-4 flex-1">
        <figure>
          <img className="md:pt-0 pt-2"
            src={clock}
            alt="Album"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Opening Hours</h2>
          <p>Start Moring 8:00 and End Night 9:00 BD Time</p>
        </div>
      </div>

      <div class="card lg:card-side shadow-xl mb-10 mr-8 px-4 rounded bg-accent flex-1">
        <figure>
          <img className="md:pt-0 pt-2"
            src={marker}
            alt="Album"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Visit Our Location</h2>
          <p>Brooklyn, NY 10036, Dhaka, Bangladesh</p>
        </div>
      </div>

      <div class="card lg:card-side mb-10 mr-8 shadow-xl rounded bg-gradient-to-r from-primary to-secondary px-4 flex-1">
        <figure>
          <img className="md:pt-0 pt-2"
            src={phone}
            alt="Album"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Contact Us Now</h2>
          <p>+000 123 456789</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
