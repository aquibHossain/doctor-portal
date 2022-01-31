import React from 'react';
import AppointmentHeader from '../AppoinmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

import Header from '../Header/Header';



const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Header></Header>
             <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
             <AvailableAppointment date={date} setDate={setDate}></AvailableAppointment>
        </div>
    );
};

export default Appointment;