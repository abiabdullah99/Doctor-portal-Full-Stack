import React from "react";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div>
      <div class="card w-10/12 h-64 bg-base-100 shadow-xl mx-auto mb-10">
        <div class="card-body items-center text-center">
          <h2 class="card-title text-secondary text-2xl py-2">{name}</h2>
          <p className="text-base">
            {slots.length > 0 ? (
              <span>{slots[0]}</span>
            ) : (
              <span className="text-primary">No Slot Available</span>
            )}
          </p>
          <p className="text-base">
            {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
          </p>
        </div>
        <div class="card-actions justify-center mb-20">
          <button disabled={slots.length === 0} class="btn btn-secondary text-white text-base">Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
