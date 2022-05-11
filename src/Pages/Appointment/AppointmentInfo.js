import React, { useState } from 'react';
import Appointment from './Appointment';
import AvailableAppointments from './AvailableAppointments';

const AppointmentInfo = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <Appointment date={date} setDate={setDate}></Appointment>
            <AvailableAppointments date={date}></AvailableAppointments>
        </div>
    );
};

export default AppointmentInfo;