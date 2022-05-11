const Service = ({ service, setTreatment }) => {
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
          <label
            for="booking-modal"
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            class="btn btn-secondary text-white text-base modal-button"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
