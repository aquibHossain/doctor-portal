import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import doctor from './../../images/doctor.png'
import bg from './../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const AppoinmentBanner = () => {
    const appointmentBg={
        background:`url(${bg})`,
        backgroundColor:"rgba(45,58,74,.8)",
        backgroundBlendMode:'darken,luminosity',
        marginTop:175
    }
    return (
        <div>
             <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
          style={{width:400,marginTop:"-125px"}}
          src={doctor}/>
        </Grid>
        <Grid item xs={12} md={6}
        sx={{ display: 'flex',
        justifyContent: 'flex-start',
        alignItems:"center",
        textAlign:"left" }}>
      <Box>
      <Typography variant="h6" sx={{mb:5}} style={{color:'#5CE7ED'}} component="div">
        APPOINTMENT
        </Typography>
        <Typography variant="h4" style={{color:'white'}} component="div">
        Make An Appointment Today
        </Typography>
        <Typography variant="h6" sx={{my:5}}  style={{color:'white',fontSize:14,fontWeight:300}} component="div">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero iste tenetur necessitatibus odit explicabo ratione blanditiis? Obcaecati molestias magni beatae?
        </Typography>
        <Button variant='contained' style={{backgroundColor:'#5CE7ED'}}>Learn More</Button>
      </Box>
        </Grid>
        </Grid>
    </Box>
        </div>
    );
};

export default AppoinmentBanner;