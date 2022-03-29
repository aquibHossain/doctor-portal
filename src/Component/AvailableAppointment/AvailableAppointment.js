import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const AvailableAppointment = ({date,setDate}) => {
    const [bookingSuccess,setbookingSuccess]=useState(false)
    const bookings=[
        {
            id:1,
            name:'Dental Care',
            time:"7.00 PM - 8.00 PM",
            space:3,
            price:250
        },
        {
            id:2,
            name:'Oral Care',
            time:"6.00 PM - 7.00 PM",
            space:5,
            price:350
        },
        {
            id:3,
            name:'Whitening Care',
            time:"4.00 PM - 7.00 PM",
            space:10,
            price:800
        },
        {
            id:4,
            name:'Fix Up',
            time:"8.00 PM - 9.00 PM",
            space:14,
            price:700
        },
        {
            id:5,
            name:'Root Canel',
            time:"10.00 PM - 11.00 PM",
            space:6,
            price:850
        },
        {
            id:6,
            name:'Dental Care',
            time:"1.00 PM - 3.00 PM",
            space:8,
            price:1000
        },
    ]
    return (
        <div>
           <Container>
          <Typography variant='h4' sx={{color:'info.main',mb:3}}> Appointment  Available:{date.toDateString()}</Typography>
          {
      bookingSuccess && <Alert severity="success">Appointment Booked Successfully</Alert>
    }
           <Grid container spacing={2}>
             {
                 bookings.map(booking=><Booking
                     key={booking.id} 
                    date={date} 
                    booking={booking}
                    setbookingSuccess={setbookingSuccess}
                    ></Booking>)
             }
           </Grid>
           </Container>
        </div>
    );
};

export default AvailableAppointment;