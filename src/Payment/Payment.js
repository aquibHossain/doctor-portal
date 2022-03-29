import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckOutForm from '../CheckOutForm/CheckOutForm';

const stripePromise = loadStripe('pk_test_51KiCK6HlIpHzNhGaKYyj2yJBNJNjExR3j2EbDXMAnK2UZjz1e5gJJUO7O8YaykOr1RcTANLewCYHeQqFeDcNanlD00UmPGPKeb');
const Payment = () => {
    const {appointmentId}=useParams()
    const [appointment,setAppointment]=useState({})
    useEffect(()=>{
      fetch(`https://agile-dawn-10328.herokuapp.com/appointments/${appointmentId}`)
      .then(res=>res.json())
      .then(data=>setAppointment(data))
    },[])
 
    return (
        <div>
            <h1>Payment</h1>
            <h3>{appointment.displayName} for {appointment.serviceName}</h3>
            Total Cost:{appointment.price}
            {appointment.price&&<Elements stripe={stripePromise}>
     <CheckOutForm
     appointment={appointment}>
     </CheckOutForm>
    </Elements>}
        </div>
    );
};

export default Payment;