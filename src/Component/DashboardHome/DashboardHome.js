import React from 'react';
import { Container, Grid } from '@mui/material';
import Calender from '../Calender/Calender';
import DashboardAppointment from '../DashboardAppointment/DashboardAppointment';
const DashboardHome = () => {
    const [date,setDate]=React.useState(new Date())
    return (

            <Grid container spacing={2}>
        <Grid item xs={12} md={5} sx={{alignSelf:"center"}}  >
        <Calender 
        
        date={date}
        setDate={setDate}></Calender>
        </Grid>
        <Grid item xs={12} md={7} >
           <DashboardAppointment date={date}></DashboardAppointment>
        </Grid>
      </Grid>
       
    );
};

export default DashboardHome;