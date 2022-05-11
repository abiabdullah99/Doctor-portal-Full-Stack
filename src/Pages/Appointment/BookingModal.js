import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;

  const handleBooking = (event) => {
      event.preventDefault();
      const slot = event.target.slot.value;
      console.log(slot)
      setTreatment(null)
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <input type="checkbox" id="booking-modal" className="modal-toggle" />
          <label
            for="booking-modal"
            className="btn bg-secondary text-white border-none btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">
            Booking For <span className="text-secondary">{name}</span>
          </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-4 mt-4 justify-items-center">
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select name="slot" class="select input input-bordered w-full max-w-xs">
             {
                 slots.map(slot => (<option value={slot}>{slot}</option>))
             }
            </select>
            <input
              type="name"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              placeholder="Your Phone"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              placeholder="Type here"
              className="btn bg-secondary border-none text-white w-32 text-base ml-4"
            />
          </form>
          <div className="modal-action"></div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
