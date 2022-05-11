import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    console.log(services)
    return (
        <div className='mt-28 font-mono mb-10'>
            <h1 className='text-2xl text-secondary text-center font-semibold'>Available Appointments on {format(date, "PP")}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 lg:px-20 mt-20">
                {
                    services.map(service => (<Service key={service.id} service={service} setTreatment={setTreatment} ></Service>))
                }
            </div>
            {treatment && <BookingModal date={date} setTreatment={setTreatment} treatment={treatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;