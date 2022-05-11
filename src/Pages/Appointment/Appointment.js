import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import './Appointment.css'
const Appointment = ({date, setDate}) => {
  const css = `.my-selected:not([disabled]) { 
    background: #19D3AE;
    color: white;
  }.my-selected:hover:not([disabled]) { 
        background: #19D3AE;
        color: white;
      }`;
  return (
    <div className="appointment-info">
      <div className="lg:flex justify-between px-20 items-center mt-20 md:mt-40 lg:mt-40">
        <div className="flex-1 md:ml-40 mb-10 md:mb-0 font-mono">
          <style>{css}</style>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            modifiersClassNames={{
              selected: "my-selected",
              today: "my-today",
            }}
          />
        </div>
        <div className="banner-image flex-1 ">
          <img src={chair} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
